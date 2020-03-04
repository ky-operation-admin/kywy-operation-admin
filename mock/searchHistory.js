import Mock from 'mockjs'

const List = []
const count = 100


for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    userID: '@cname',
    ip: +Mock.Random.date('T'),
    'project|1': ['养老机构', '寻医问药', '居家护理', '人才招聘'],
    'terminal|1': ['安卓', 'IOS', '微信小程序', 'PC端','H5'],
    phone: /^1(5|3|7|8)[0-9]{9}$/,
    'gender|1':['男','女'],
    'source|1': ['微信推广', '百度广告','好友推荐'],
    "age|12-80": 12, 
    // createTime: '@now(yyyy-MM-dd)',
    'now|+1': '@now("yyyy-MM-dd")',
    createTime: function () {
      var category = [];
      var dottedBase = +new Date();
      for (var i = 30; i > 0; i--) {
        var date = new Date((dottedBase -= 1000 * 3600 * 24));
        category.push(date);
      }
      return category[parseInt(Math.random() * (30)) + 0];
    },
    importance: '@integer(1, 3)',
    value: '@title(1, 5)',
    'ifHot|1': ['1','2'],
    'status|1': ['1','2'],
  }))
}
export default [{
    url: '/searchHistory/list',
    type: 'get',
    response: config => {
      const {
        importance,
        project,
        value,
        ifHot,
        page = 1,
        limit = 20,
        createTime,
        sort
      } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (ifHot && item.ifHot !== ifHot) return false
        if (project && item.project !== project) return false
        if (value && item.value.indexOf(value) < 0) return false
        if (createTime && (Date.parse(item.createTime[0]) > Date.parse(createTime) && Date.parse(item.createTime[1]) < Date.parse(createTime))) return false
        return true
      })

      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/searchHistory/detail',
    type: 'get',
    response: config => {
      const {
        id
      } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/searchHistory/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [{
              key: 'PC',
              pv: 1024
            },
            {
              key: 'mobile',
              pv: 1024
            },
            {
              key: 'ios',
              pv: 1024
            },
            {
              key: 'android',
              pv: 1024
            }
          ]
        }
      }
    }
  },

  {
    url: '/searchHistory/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/searchHistory/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
