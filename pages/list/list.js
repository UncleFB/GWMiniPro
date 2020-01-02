// pages/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    listArr: [
      {
        mac: 123
      }, {
        mac: 456
      }, {
        mac: 789
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail(){
      wx.navigateTo({
        url: '/pages/detail/detail',
      })
    }
  }
})
