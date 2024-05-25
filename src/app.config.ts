const routes = require('./routes/route')
export default defineAppConfig({
  pages: [
      ...routes.getRoutes()
  ],
  tabBar: {
    list: [
      {
        iconPath: 'assets/icons/home.png',
        selectedIconPath: 'assets/icons/home-fill.png',
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        iconPath: 'assets/icons/all.png',
        selectedIconPath: 'assets/icons/all-fill.png',
        pagePath: 'pages/catalog/index',
        text: '分类'
      },
      {
        iconPath: 'assets/icons/cart-full.png',
        selectedIconPath: 'assets/icons/cart-full-fill.png',
        pagePath: 'pages/cart/index',
        text: '购物车'
      },
      {
        iconPath: 'assets/icons/customer-official.png',
        selectedIconPath: 'assets/icons/customer-official-fill.png',
        pagePath: 'pages/usercenter/index',
        text: '我的'
      }
    ],
    color: '#707070',
    selectedColor: '#fa2c19',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    navigationStyle: 'custom'
  }
})
