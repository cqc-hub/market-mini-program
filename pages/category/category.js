// pages/category/category.js
import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from '../../service/category.js'

Page({
  data: {
    categories: [],
    categoryData: {
    },
    currentIndex: 0
  },
  onLoad: function (options) {
    this._getData()
  },
  _getData() {
    // 1.请求分类数据
    this._getCategory()
  },
  _getCategory() {
    getCategory().then(res => {
      // 1.获取categoriesconsole.log(res)
      const categories = res.data.data.category.list;
      // console.log(categories)
      // 2.初始化每个类别的子数据
      const categoryData = {}
      for (let i = 0; i < categories.length; i++) {
        categoryData[i] = {
          subcategories: [],
          categoryDetail: []
          // categoryDetail: {
          //   'pop': [],
          //   'new': [],
          //   'sell': []
          // }
        }
      }
      // console.log(res)
      // 3.修改data中的数据
      this.setData({
        categories: res.data.data.category.list,
        categoryData: categoryData
      })

      // 4.请求第一个类别的数据
      this._getSubcategory(0)

      // 5.请求第一个类别的详情数据
      this._getCategoryDetail(0,'pop')
    })
  },
  _getSubcategory(currentIndex) {
    // 1.获取对应的maitkey
    const maitkey = this.data.categories[currentIndex].maitKey;

    // 2.请求的数据
    getSubcategory(maitkey).then(res => {
      // console.log(res)
      const tempCategoryData = this.data.categoryData;
      tempCategoryData[currentIndex].subcategories = res.data.data.list;
      
      this.setData({
        categoryData: tempCategoryData
      })
    })
  },
  _getCategoryDetail(currentIndex,type) {
    const type1=type || 'pop'
    // 1.获取对应的miniWallKey
    const miniWallKey = this.data.categories[currentIndex].miniWallkey;
    // console.log(miniWallKey)
    // 2.请求数据类别的数据
    this._getRealCategoryDetail(currentIndex, miniWallKey, type1);
    // this._getRealCategoryDetail(currentIndex, miniWallKey, 'new');
    // this._getRealCategoryDetail(currentIndex, miniWallKey, 'sell');
  },
  _getRealCategoryDetail(index, miniWallKey, type) {
    getCategoryDetail(miniWallKey, type).then(res => {
      // 1.获取categoryData
      const categoryData = this.data.categoryData;
      const key1='categoryData['+index+'].categoryDetail'
      // console.log(key1)
      // this.setData({
      //   ['categoryData['+index+'].categoryDetail']:res.data
      // })
      // 2.修改数据
      categoryData[index].categoryDetail = res.data;
      // console.log(categoryData[index].categoryDetail)
      // 3.修改data中的数据
      this.setData({
        categoryData: categoryData
      })

      
    })
  },
  menuClick(e) {
    // 1.改变当前的currentIndex
    const currentIndex = e.detail.currentIndex;
    this.setData({
      currentIndex
    })

    // 2.请求对应currentIndex的数据
    this._getSubcategory(currentIndex);

    // 3.请求对应的currentIndex的详情数据
    this._getCategoryDetail(currentIndex)
    // console.log(this.data.categoryData)
  },
  onReady(){
    
  },
  TabControlClick(e){
    const currentIndex=e.detail.index
    const types=['pop','new','sell']
    const miniWallKey = this.data.categories[currentIndex].miniWallkey;
    // this.categoryList[this.currentIndex].miniWallkey
    console.log(this.data.categories[currentIndex].miniWallkey)
    
    this._getRealCategoryDetail(currentIndex,miniWallKey,types[currentIndex]);
    // console.log(types[currentIndex])
  }
})