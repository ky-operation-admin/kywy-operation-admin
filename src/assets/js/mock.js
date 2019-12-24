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
  onsaleData: [
      {
      org_id: '1',
      xinyong: '良好',
      pingji: 'A',
      username: '0008866',
      alias: '91440113MA59E0RJ8X',
      org_name: '广州怡和养老',
      merchant_name: '广州母婴坊',
      hotel_name: '希尔顿酒店',
      type: '民营企业',
      order_state: 1,
      org_state: 0,
      res_name: '张三千',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      serve_name: '老人护理',
      serve_type: '护理',
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
      visible: false
    }, {
      org_id: '2',
      org_name: '广东省广州市夕阳红养老院',
      merchant_name: '安安孕婴服装用品',
      hotel_name: '七天速递酒店',
      res_name: '李富贵',
      xinyong: '良好',
      pingji: 'A',
      username: '1008866',
      alias: '92440113MA59E0RJ8X',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      serve_name: '老人护理',
      serve_type: '护理',
      phone: '15201547851',
      orderNum: 'KY20191217002',
      formnum: 'D1901',
      orderTime: '2019-12-17',
      price: '198',
      roomtype: '两房一厅',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      visible: false
    }, {
      org_id: '3',
      org_name: '广东省广州市宏然养老机构',
      merchant_name: '水无香淘衣坊',
      hotel_name: '一天速递酒店',
      res_name: '李宏然',
      xinyong: '良好',
      pingji: 'A',
      username: '2008866',
      alias: '93440113MA59E0RJ8X',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      serve_name: '老人护理',
      serve_type: '护理',
      phone: '15301547852',
      orderNum: 'KY20191217003',
      formnum: 'D1901',
      orderTime: '2019-12-17',
      price: '198',
      roomtype: '两房一厅',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      visible: false
    }, {
      org_id: '4',
      org_name: '广东省广州市鸿辉养老机构',
      merchant_name: '天堂数字网游专卖',
      hotel_name: '左岸酒店',
      res_name: '向红辉',
      xinyong: '良好',
      pingji: 'A',
      username: '3008866',
      alias: '94440113MA59E0RJ8X',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      serve_name: '老人护理',
      serve_type: '护理',
      phone: '15501547853',
      orderNum: 'KY20191217004',
      formnum: 'D1901',
      orderTime: '2019-12-17',
      price: '198',
      roomtype: '两房一厅',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      visible: false
    }, {
      org_id: '5',
      org_name: '广东省广州市利民养老机构',
      merchant_name: '[紫紫美妆]百货店',
      hotel_name: '维纳斯酒店',
      res_name: '吴立民',
      xinyong: '良好',
      pingji: 'A',
      username: '4008866',
      alias: '95440113MA59E0RJ8X',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      serve_name: '老人护理',
      serve_type: '护理',
      phone: '13501547854',
      orderNum: 'KY20191217005',
      formnum: 'D1901',
      orderTime: '2019-12-17',
      price: '198',
      roomtype: '两房一厅',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      visible: false
    }, {
      org_id: '6',
      org_name: '广东省广州市丽萍养老机构',
      merchant_name: '创意家居生活',
      hotel_name: '如家酒店',
      res_name: '张丽萍',
      xinyong: '良好',
      pingji: 'A',
      username: '5008866',
      alias: '96440113MA59E0RJ8X',
      name: '广州怡和养老',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      serve_name: '老人护理',
      serve_type: '护理',
      phone: '13601547855',
      orderNum: 'KY20191217006',
      formnum: 'D1901',
      orderTime: '2019-12-17',
      price: '198',
      roomtype: '两房一厅',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      visible: false
    },
    {
      org_id: '7',
      org_name: '广东省广州市世锦养老机构',
      merchant_name: '内蒙古奶酪第一店',
      hotel_name: '帆船酒店',
      res_name: '陈世锦',
      xinyong: '良好',
      pingji: 'A',
      username: '6008866',
      alias: '97440113MA59E0RJ8X',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      serve_name: '老人护理',
      serve_type: '护理',
      phone: '13801547856',
      orderNum: 'KY20191217007',
      formnum: 'D1901',
      orderTime: '2019-12-17',
      price: '198',
      roomtype: '两房一厅',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      visible: false
    }, {
      org_id: '8',
      org_name: '广西雪广养老机构',
      merchant_name: '瑞丽儿 日韩 女装',
      hotel_name: '恒瑞酒店',
      res_name: '吴雪广',
      xinyong: '良好',
      pingji: 'A',
      username: '7008866',
      alias: '98440113MA59E0RJ8X',
      name: '广州怡和养老',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      serve_name: '老人护理',
      serve_type: '护理',
      phone: '18901547857',
      orderNum: 'KY20191217008',
      formnum: 'D1901',
      orderTime: '2019-12-17',
      price: '198',
      roomtype: '两房一厅',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      visible: false
    }, {
      org_id: '9',
      org_name: '广东省广州市国栋养老机构',
      merchant_name: '虾兵蟹将美食铺子!',
      hotel_name: '神龙酒店',
      res_name: '赵国栋',
      xinyong: '良好',
      pingji: 'A',
      username: '8008866',
      alias: '99440113MA59E0RJ8X',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      serve_name: '老人护理',
      serve_type: '护理',
      phone: '18701547858',
      orderNum: 'KY20191217009',
      formnum: 'D1901',
      orderTime: '2019-12-17',
      price: '198',
      roomtype: '两房一厅',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state: 1,
      org_state: 0,
      visible: false
    }, {
      org_id: '10',
      org_name: '广东省广州市君豪养老机构',
      hotel_name: '柏林酒店',
      merchant_name: '衣神前传',
      res_name: '谭军豪',
      xinyong: '良好',
      pingji: 'A',
      username: '9008866',
      alias: '81440113MA59E0RJ8X',
      type: '民营企业',
      id: require('@/assets/timg.jpg'),
      document: require('@/assets/document.jpg'),
      busLicen: require('@/assets/yingyezhizhao.png'),
      plimg: require('@/assets/hotImg4.png'),
      serve_name: '老人护理',
      serve_type: '护理',
      phone: '15901547859',
      orderNum: 'KY20191217010',
      formnum: 'D1901',
      orderTime: '2019-12-17',
      price: '198',
      roomtype: '两房一厅',
      postName: '营销专员',
      department: '营销',
      compensation: '10000~12000/月',
      address: '广州',
      content: '富强、民主、文明、和谐是国家层面的价值目标',
      order_state:1,
      org_state: 0,
      visible: false
    }
  ],
  // 养老机构大数据统计
  onsaleBigData: [
      {
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
      hotel_name:'希尔顿酒店',
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
  ]


}
export default data;
