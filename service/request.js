export default function request(options){
  const baseURL='http://152.136.185.210:8000/api/n3'
  const timeout=5000
  return new Promise((resolve,reject)=>{
    wx.request({
    url:baseURL+options.url,
    method:options.method || 'get',
    data:options.data || {},
    timeout: timeout,
    success:res=>{
      resolve(res)
    },
    fail:err=>{
      reject(err)
    }
    })
  })
}