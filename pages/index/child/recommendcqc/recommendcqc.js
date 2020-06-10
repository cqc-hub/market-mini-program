// components/recommendcqc/recommendcqc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isImgLoad:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imgLoad(){
    if(!this.data.isImgLoad){ }
      this.triggerEvent("imgLoad")
      this.data.isImgLoad=true
    }
  }
})
