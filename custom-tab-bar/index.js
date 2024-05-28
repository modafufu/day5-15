// custom-tab-bar/index.js
Component({
options:{
styleIsolation:'shared'
},
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active:0,
    "list": [
      {
        "pagePath": "pages/home/home",
      "text": "首页",
      "iconPath": "/images/tab/home.png",
      "selectedIconPath": "/images/tab/home-active.png",
      info:0
      },
      {
        "pagePath": "pages/message/message",
        "text": "消息",
        "iconPath": "/images/tab/cate.png",
        "selectedIconPath": "/images/tab/cate-active.png"
      },
      {
        "pagePath": "pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/images/tab/cart.png",
        "selectedIconPath": "/images/tab/cart-active.png"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e){
      this.setData({
        active:e.detail
      })
    }
  }
})