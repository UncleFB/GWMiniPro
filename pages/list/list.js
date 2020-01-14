// pages/list/list.js
const urlList = require('../../urlconfig.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add: false
  },
  toDetail(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?mac='+e.currentTarget.dataset.mac
    })
  },
  /**
   * 获取设备列表
   */
  deviceList(){
    wx.request({
      url: urlList.getUserByUsername,
      data: {
        username: app.globalData.userInfo.nickName
      },
      success: res => {
        this.setData(res.data)
      }
    })
  },
  /**
   * 添加设备
   */
  add(e){
    if(e.detail.value.mac==""){
      wx.showToast({
        title: 'mac为空,添加失败',
        icon: 'none'
      })
      return;
    }
    wx.request({
      url: urlList.addDevice,
      data: {
        uid: this.data.id,
        mac: e.detail.value.mac
      },
      success: res=>{
        this.deviceList();
      }
    })
  },
  /**
   * 删除设备
   */
  delDevice(e){
    wx.showModal({
      title: '提示',
      content: '是否删除该设备？',
      success:res => {
        if (res.confirm) {
          wx.request({
            url: urlList.delDevice,
            data:{
              id: e.currentTarget.dataset.deviceid
            },
            success: res => {
              this.deviceList();
            }
          })
        } 
      }
    })
  },
  addBtn(){
    this.setData({
      add: true
    })
  },
  addDevice(e){
    this.setData({
      add: false
    })
  },
  cancel(){
    this.setData({
      add: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.deviceList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})