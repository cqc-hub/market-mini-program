// pages/index/index.js
import {getMultidata} from '../../service/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    banner:[],
    recommend:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this=this
    // 获取轮播图、推荐数据
    getMultidata().then(res=>{
      // console.log(res)
      _this.setData({
        banner:res.data.data.banner.list,
        recommend:res.data.data.recommend.list
      })
       console.log(_this.data.banner)
    }).catch(err=>{
      console.log(err)
    })
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