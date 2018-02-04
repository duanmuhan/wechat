// pages/gift/send/sendpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth:0,
    winHeight:0,
    currentTab:0,

    testData:{
      
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          winWidth : res.windowWidth,
          winHeight : res.windowHeight
        });
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("readypage")
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
   var that = this;
   wx.getSystemInfo({
     success: function(res) {res.windowHeight},
   })
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
    console.log("fuckyou");
  },
  /** 
     * 滑动切换tab 
     */  
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }  
})

var getList = function(that){
  that.setData({
    hidden: false
  });

  wx.request({
    url: 'https://localhost/index',
    data:{
      type: 'searchcate',
      search: that.data.titles,
      page: page
    },
    success: function(res){

    }
  })
}