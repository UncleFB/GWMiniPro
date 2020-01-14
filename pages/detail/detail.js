// pages/detail/detail.js
const urlList = require('../../urlconfig.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    switch1: false,
    switch2: false,
    switch3: false
  },
  switch1Change(e) {
    this.setData({
      switch1: e.detail.value
    })
    var s1 = this.data.switch1 ? 1 : 0;
    var s2 = this.data.switch2 ? 1 : 0;
    var s3 = this.data.switch3 ? 1 : 0;
    var pathv = '/' + s1 + s2 + s3
    wx.request({
      url: urlList.send + '/' + this.data.mac + pathv,
    });
  },
  switch2Change(e) {
    this.setData({
      switch2: e.detail.value
    })
    var s1 = this.data.switch1 ? 1 : 0;
    var s2 = this.data.switch2 ? 1 : 0;
    var s3 = this.data.switch3 ? 1 : 0;
    var pathv = '/' + s1 + s2 + s3
    wx.request({
      url: urlList.send + '/' + this.data.mac + pathv,
    });
  },
  switch3Change(e) {
    this.setData({
      switch3: e.detail.value
    })
    var s1 = this.data.switch1 ? 1 : 0;
    var s2 = this.data.switch2 ? 1 : 0;
    var s3 = this.data.switch3 ? 1 : 0;
    var pathv = '/' + s1 + s2 + s3
    wx.request({
      url: urlList.send + '/' + this.data.mac + pathv,
    });
  },
  statechange(e) {
    console.log('live-player code:', e.detail.code)
  },
  error(e) {
    console.error('live-player error:', e.detail.errMsg)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      mac: options.mac
    })
    var wxst = wx.connectSocket({
      url: urlList.wsPath + '/' + this.data.mac,
      header: {
        'content-type': 'application/json'
      },
    });
    wxst.onOpen(res => {
    });
    wxst.onError(res => {
      console.info('连接识别');
      console.error(res);
    });
    wxst.onMessage(res => {
      this.setData(JSON.parse(res.data));
    });
    wxst.onClose(() => {
    });
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
    wx.closeSocket();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.closeSocket();
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

