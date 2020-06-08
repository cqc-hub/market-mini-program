// components/tabcontrolcqc/tabcontrolcqc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem(opt){
      // console.log(opt)
      this.setData({
          currentIndex:opt.currentTarget.dataset.index
      })
      // this.$emit('TabControlClick',index)
      this.triggerEvent('TabControlClick',
      {
        index:opt.currentTarget.dataset.index
      })
    }
  }
})
