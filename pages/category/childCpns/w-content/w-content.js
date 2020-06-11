// pages/category/childCpns/w-content/w-content.js
const types=['pop','new','sell']

Component({
  properties: {
    subcategories: {
      type: Array,
      value:[]
    },
    categoryDetail: {
      type: Array,
      value:[]
    }
  },
  data: {
    currentIndex: 0,
  },
  observers: {
    // categoryDetail: function (newValue) {
    //   console.log(newValue)
    // }
  },
  lifetimes: {
    ready() {
      // console.log(this.properties.categoryDetail)
    }
  },
  methods: {
    TabControlClick(e) {
      // console.log(e)
      // console.log(this.properties.categoryDetail)
      // const currentIndex = e.detail.index;
      // let currentType = types[currentIndex]
      // this.setData({
      //   currentIndex,
      //   currentType
      // })
      this.triggerEvent('TabControlClick',{
        index:e.detail.index
      })
    }
  }
})
