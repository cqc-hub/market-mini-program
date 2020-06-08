import request from './request'

// 获取轮播图、推荐数据
export function getMultidata(){
  return request({
    url:'/home/multidata'
  })
}

//index商品数据 
export function getGoodsdata(type,page){
  return request({
    url:'/home/data',
    data:{
      type,
      page
    }
  })
}