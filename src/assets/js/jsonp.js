import originJSONP from 'vue-jsonp'

export default function jsonp(url,data,option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  return new Promise((resolve,reject) => {
    console.log(originJSONP);
    originJSONP(url,option,(err,data) => {
      console.log(data);
      if(!err){
        resolve(data)
      }else{
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = ''
  for(var i in data){
    let value = data[i] !== undefined ? data[i] : ''
    url += '&${k}=${encodeURLComponent(value)}'
  }
  return url ? url.substring(1) : ''
}
