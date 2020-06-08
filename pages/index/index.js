// pages/index/index.js
import {
  getMultidata,
  getGoodsdata

} from '../../service/index'
const types=['pop','new','sell']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    banner:[],
    recommend:[],
    titles:['流行','新款','精选'],
    goods:{
      'pop':{
        page:0,
        list:[]
      },'new':{
        page:0,
        list:[]
      },'sell':{
        page:0,
        list:[]
      }
    },
    currentType:'pop'
  },
  TabControlClick(e){
    const index=e.detail.index
    this.setData({
      currentType:types[index]
    })
    
  },
  getBanners(){
     // 获取轮播图、推荐数据
    const _this=this
    getMultidata().then(res=>{
      // console.log(res)
      _this.setData({
        banner:res.data.data.banner.list,
        recommend:res.data.data.recommend.list
      })
      //  console.log(_this.data.recommend)
    }).catch(err=>{
      console.log(err)
    })
  },
  getGoods(type){
    // 获取商品数据
    const page=this.data.goods[type].page+1
    getGoodsdata(type,page).then(res=>{
      const list=res.data.data.list
      const oldlist=this.data.goods[type].list
      const key_list='goods.'+type+'.list'
      const key_page='goods.'+type+'.page'
      oldlist.push(...list)
      // this.data.goods[type].list.push(...list)
      this.setData({
        [key_list]:oldlist,
        [key_page]:page+1
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
   
    this.getBanners()
    this. getGoods('pop')
    this. getGoods('new')
    this. getGoods('sell')
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
    this.getGoods(this.data.currentType)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})