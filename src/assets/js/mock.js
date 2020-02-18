function randomn(n) {
  if (n > 21) return null
  return parseInt((Math.random() + 1) * Math.pow(10, n - 1))
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
// 自定义数据
let data = {
  // 养老机构数据
  onsaleData: [{
      org_id: '1',
      xinyong: '良好',
      pingji: 'A',
      username: '0008866',
      alias: '91440113MA59E0RJ8X',
      org_name: '广州怡和养老',
      merchant_name: '广州母婴坊',
      hotel_name: '希尔顿酒店',
      type: '民营企业',
      org_add: '广州',
      order_state: 1,
      org_state: 0,
      res_name: '张三千',
      user_account: 'zhangsanqian',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      fenxiaoImg: require('@/assets/fenxiaoImg.png'),
      serve_name: '两房一厅',
      hotel_serve: '豪华大间',
      product: '南山奶粉',
      serve_type: '养老',
      product_type: '母婴',
      phone: '13201547850',
      orderNum: 'KY20191217001',
      formnum: 'D1901',
      orderTime: '2019-12-17',
      price: '198',
      roomtype: '两房一厅',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      fenxiao_order_num: 6,
      fauilReason: null,
      reseco: null,
      visible: false
    }, {
      org_id: '2',
      org_name: '广东省广州市夕阳红养老院',
      merchant_name: '安安孕婴服装用品',
      hotel_name: '七天速递酒店',
      res_name: '李富贵',
      user_account: 'lifugui',
      xinyong: '良好',
      pingji: 'A',
      username: '1008866',
      alias: '92440113MA59E0RJ8X',
      org_add: '广州',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      fenxiaoImg: require('@/assets/fenxiaoImg.png'),
      serve_name: '两房一厅',
      product: '小孩上衣',
      serve_type: '养老',
      product_type: '服装',
      phone: '15201547851',
      orderNum: 'KY20191217002',
      formnum: 'D1902',
      orderTime: '2019-12-18',
      price: '198',
      roomtype: '两房一厅',
      hotel_serve: '豪华大间',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      fenxiao_order_num: 6,
      fauilReason: null,
      reseco: null,
      visible: false
    }, {
      org_id: '3',
      org_name: '广东省广州市宏然养老机构',
      merchant_name: '水无香淘衣坊',
      hotel_name: '一天速递酒店',
      res_name: '李宏然',
      user_account: 'hongran111',
      xinyong: '良好',
      pingji: 'A',
      username: '2008866',
      alias: '93440113MA59E0RJ8X',
      org_add: '广州',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      fenxiaoImg: require('@/assets/fenxiaoImg.png'),
      serve_name: '两房一厅',
      product: '韩式秋装',
      serve_type: '养老',
      product_type: '衣服',
      phone: '15301547852',
      orderNum: 'KY20191217003',
      formnum: 'D1903',
      orderTime: '2019-12-19',
      price: '198',
      roomtype: '两房一厅',
      hotel_serve: '豪华大间',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      fenxiao_order_num: 6,
      fauilReason: null,
      reseco: null,
      visible: false
    }, {
      org_id: '4',
      org_name: '广东省广州市鸿辉养老机构',
      merchant_name: '天堂数字网游专卖',
      hotel_name: '左岸酒店',
      res_name: '向红辉',
      user_account: 'xianghonghui12',
      xinyong: '良好',
      pingji: 'A',
      username: '3008866',
      alias: '94440113MA59E0RJ8X',
      org_add: '广州',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      fenxiaoImg: require('@/assets/fenxiaoImg.png'),
      serve_name: '两房一厅',
      serve_type: '养老',
      product: 'Q币充值',
      product_type: '数字游戏充值',
      phone: '15501547853',
      orderNum: 'KY20191217004',
      formnum: 'D1904',
      orderTime: '2019-12-20',
      price: '198',
      roomtype: '两房一厅',
      hotel_serve: '豪华大间',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      fenxiao_order_num: 6,
      fauilReason: null,
      reseco: null,
      visible: false
    }, {
      org_id: '5',
      org_name: '广东省广州市利民养老机构',
      merchant_name: '[紫紫美妆]百货店',
      hotel_name: '维纳斯酒店',
      res_name: '吴立民',
      user_account: 'limin3',
      xinyong: '良好',
      pingji: 'A',
      username: '4008866',
      alias: '95440113MA59E0RJ8X',
      org_add: '广州',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      fenxiaoImg: require('@/assets/fenxiaoImg.png'),
      serve_name: '两房一厅',
      serve_type: '养老',
      product: '栗色口红',
      product_type: '化妆品',
      phone: '13501547854',
      orderNum: 'KY20191217005',
      formnum: 'D1905',
      orderTime: '2019-12-21',
      price: '198',
      roomtype: '两房一厅',
      hotel_serve: '豪华大间',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      fenxiao_order_num: 6,
      fauilReason: null,
      reseco: null,
      visible: false
    }, {
      org_id: '6',
      org_name: '广东省广州市丽萍养老机构',
      merchant_name: '创意家居生活',
      hotel_name: '如家酒店',
      res_name: '张丽萍',
      user_account: 'liping250',
      xinyong: '良好',
      pingji: 'A',
      username: '5008866',
      alias: '96440113MA59E0RJ8X',
      name: '广州怡和养老',
      org_add: '深圳',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      fenxiaoImg: require('@/assets/fenxiaoImg.png'),
      serve_name: '两房一厅',
      serve_type: '养老',
      product: '床上用品三件套',
      product_type: '床上用品',
      phone: '13601547855',
      orderNum: 'KY20191217006',
      formnum: 'D1906',
      orderTime: '2019-12-22',
      price: '198',
      roomtype: '两房一厅',
      hotel_serve: '豪华大间',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      fenxiao_order_num: 6,
      fauilReason: null,
      reseco: null,
      visible: false
    },
    {
      org_id: '7',
      org_name: '广东省广州市世锦养老机构',
      merchant_name: '内蒙古奶酪第一店',
      hotel_name: '帆船酒店',
      res_name: '陈世锦',
      user_account: 'chenshijin',
      xinyong: '良好',
      pingji: 'A',
      username: '6008866',
      alias: '97440113MA59E0RJ8X',
      org_add: '广州',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      fenxiaoImg: require('@/assets/fenxiaoImg.png'),
      serve_name: '两房一厅',
      serve_type: '养老',
      product: '特仑苏纯牛奶',
      product_type: '奶酪',
      phone: '13801547856',
      orderNum: 'KY20191217007',
      formnum: 'D1907',
      orderTime: '2019-12-23',
      price: '198',
      roomtype: '两房一厅',
      hotel_serve: '豪华大间',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      fenxiao_order_num: 6,
      fauilReason: null,
      reseco: null,
      visible: false
    }, {
      org_id: '8',
      org_name: '广西雪广养老机构',
      merchant_name: '瑞丽儿 日韩 女装',
      hotel_name: '恒瑞酒店',
      res_name: '吴雪广',
      user_account: 'xuanghua',
      xinyong: '良好',
      pingji: 'A',
      username: '7008866',
      alias: '98440113MA59E0RJ8X',
      name: '广州怡和养老',
      org_add: '广州',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      fenxiaoImg: require('@/assets/fenxiaoImg.png'),
      serve_name: '两房一厅',
      serve_type: '养老',
      product: '清纯萝莉装',
      product_type: '服饰',
      phone: '18901547857',
      orderNum: 'KY20191217008',
      formnum: 'D1908',
      orderTime: '2019-12-24',
      price: '198',
      roomtype: '两房一厅',
      hotel_serve: '豪华大间',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '深圳',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      fenxiao_order_num: 6,
      fauilReason: null,
      reseco: null,
      visible: false
    }, {
      org_id: '9',
      org_name: '广东省广州市国栋养老机构',
      merchant_name: '虾兵蟹将美食铺子!',
      hotel_name: '神龙酒店',
      res_name: '赵国栋',
      user_account: 'guodong654',
      xinyong: '良好',
      pingji: 'A',
      username: '8008866',
      alias: '99440113MA59E0RJ8X',
      org_add: '广州',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      fenxiaoImg: require('@/assets/fenxiaoImg.png'),
      serve_name: '两房一厅',
      serve_type: '养老',
      product: '劲爆辣条',
      product_type: '美食',
      phone: '18701547858',
      orderNum: 'KY20191217009',
      formnum: 'D1909',
      orderTime: '2019-12-25',
      price: '198',
      roomtype: '两房一厅',
      hotel_serve: '豪华大间',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      fenxiao_order_num: 6,
      fauilReason: null,
      reseco: null,
      visible: false
    }, {
      org_id: '10',
      org_name: '广东省广州市君豪养老机构',
      hotel_name: '柏林酒店',
      merchant_name: '衣神前传',
      res_name: '谭军豪',
      user_account: 'aiqian456',
      xinyong: '良好',
      pingji: 'A',
      username: '9008866',
      alias: '81440113MA59E0RJ8X',
      org_add: '深圳',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      fenxiaoImg: require('@/assets/fenxiaoImg.png'),
      serve_name: '两房一厅',
      hotel_serve: '豪华大间',
      serve_type: '养老',
      product: '男神冬帽',
      product_type: '服饰',
      phone: '15901547859',
      orderNum: 'KY20191217010',
      formnum: 'D1910',
      orderTime: '2019-12-26',
      price: '198',
      roomtype: '两房一厅',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      fenxiao_order_num: 6,
      fauilReason: null,
      reseco: null,
      visible: false
    }
  ],
  // 养老机构大数据统计
  onsaleBigData: [{
      org_id: 1,
      org_name: '广州怡和养老',
      merchant_name: '广州母婴坊',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    },
    {
      org_id: 2,
      org_name: '广东省广州市夕阳红养老院',
      merchant_name: '安安孕婴服装用品',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 3,
      org_name: '广东省广州市宏然养老机构',
      merchant_name: '水无香淘衣坊',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 4,
      org_name: '广东省广州市鸿辉养老机构',
      merchant_name: '天堂数字网游专卖',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 5,
      org_name: '广东省广州市利民养老机构',
      merchant_name: '[紫紫美妆]百货店',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 6,
      org_name: '广东省广州市丽萍养老机构',
      merchant_name: '创意家居生活',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    },
    {
      org_id: 7,
      org_name: '广东省广州市世锦养老机构',
      merchant_name: '内蒙古奶酪第一店',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 8,
      org_name: '广西雪广养老机构',
      merchant_name: '瑞丽儿 日韩 女装',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 9,
      org_name: '广东省广州市国栋养老机构',
      merchant_name: '虾兵蟹将美食铺子!',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 10,
      org_name: '广东省广州市君豪养老机构',
      merchant_name: '衣神前传',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }
  ],
  // 酒店大数据统计
  hotelBigData: [{
      org_id: 1,
      hotel_name: '希尔顿酒店',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    },
    {
      org_id: 2,
      hotel_name: '七天速递酒店',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 3,
      hotel_name: '一天速递酒店',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 4,
      hotel_name: '左岸酒店',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 5,
      hotel_name: '维纳斯酒店',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 6,
      hotel_name: '如家酒店',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    },
    {
      org_id: 7,
      hotel_name: '帆船酒店',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 8,
      hotel_name: '恒瑞酒店',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 9,
      hotel_name: '神龙酒店',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      org_id: 10,
      hotel_name: '柏林酒店',
      org_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }
  ],
  //消费者数据
  userData: [{
      username: 'zengshui666',
      name: '曾水',
      block_up: false,
      alias: '阿水',
      vip: 'VIP1',
      points: 10,
      kycurrency: 20,
      yue: 0.55,
      yundong: '- -',
      tiwen: '- -',
      shuimian: '- -',
      xinlv: '- -',
      xueya: '- -',
      tizhong: '59kg',
      xuetang: '- -'
    },
    {
      username: 'hanyan123',
      name: '韩彦华',
      block_up: false,
      alias: '花花',
      vip: 'VIP1',
      points: 10,
      kycurrency: 30,
      yue: 30,
      yundong: '- -',
      tiwen: '- -',
      shuimian: '- -',
      xinlv: '- -',
      xueya: '- -',
      tizhong: '65kg',
      xuetang: '- -'
    },
    {
      username: 'hong4321',
      name: '洪丽萍',
      block_up: false,
      alias: 'ping3',
      vip: 'VIP1',
      points: 50,
      kycurrency: 0.5,
      yue: 0.78,
      yundong: '- -',
      tiwen: '- -',
      shuimian: '- -',
      xinlv: '- -',
      xueya: '- -',
      tizhong: '53kg',
      xuetang: '- -'
    },
    {
      username: 'dongmei3',
      name: '黄冬梅',
      block_up: false,
      alias: '马冬梅',
      vip: 'VIP1',
      points: 20.3,
      kycurrency: 16,
      yue: 55,
      yundong: '- -',
      tiwen: '- -',
      shuimian: '- -',
      shuimian: '- -',
      xinlv: '- -',
      xueya: '- -',
      tizhong: '46kg',
      xuetang: '- -'
    }
  ],
  // 用户大数据统计
  userBigData: [{
      user_id: 1,
      user_account: 'zengshui666',
      user_name: '曾水',
      user_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    },
    {
      user_id: 2,
      user_account: 'hanyan123',
      user_name: '韩彦华',
      user_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      user_id: 3,
      user_account: 'hong4321',
      user_name: '洪丽萍',
      user_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }, {
      user_id: 4,
      user_account: 'dongmei3',
      user_name: '黄冬梅',
      user_flow: [{
          id: '七月',
          quantity: randomn(8)
        },
        {
          id: '八月',
          quantity: randomn(8)
        },
        {
          id: '九月',
          quantity: randomn(8)
        },
        {
          id: '十月',
          quantity: randomn(8)
        },
        {
          id: '十一月',
          quantity: randomn(8)
        },
        {
          id: '十二月',
          quantity: randomn(8)
        },
      ],
      org_behavior: [{
        zhiwei: random(2, 30),
        goods: random(2, 30),
        guanggao: random(2, 30),
      }]
    }
  ],
//   猎头推荐
  headhunterRec: [{
      dimendSide: '中国人寿',
      needPosition: '保险专员',
      needNum: 2,
      needSix: '男女不限',
      needEdu: '本科以上',
      needWork: '三年以上',
      SkillsReq: '能说会道',
      ageReq: '25-32',
      otherReq: '- -',
      positionStatement: '- -'
    },
    {
      dimendSide: '康养时代',
      needPosition: '前端开发',
      needNum: 2,
      needSix: '男女不限',
      needEdu: '本科以上',
      needWork: '三年以上',
      SkillsReq: 'vue全家桶',
      ageReq: '25-32',
      otherReq: '熟练h5,css3,js',
      positionStatement: '- -'
    },
  ]
}
export default data;
