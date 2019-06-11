import fetch from '../utils/fetch'
import url from 'src/api/urls'

export default {
    //获取动态验证码
    getCaptchaPath(uuid){
        return fetch(url.getCaptchaPath,{
            uuid:uuid
        },true)
    },
}

