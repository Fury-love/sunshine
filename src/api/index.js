import http from '../utils/fetch'
import url from '@/api/urls'

const requert = {}
const keys = Object.keys(url.exObj);
keys.forEach(item=>{
    if(item.search('Delete')){
        requert[item] = (params) => http.del(url[item], params)
    }else{
        requert[item] = (params) => http.post(url[item], params)
    }
})
export default {
    //用户登录
    login:(params) => http.post(url.login, params),

    ...requert
}

