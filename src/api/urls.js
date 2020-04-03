
const urlArr = ['user'] // 所有模块名
const exObj = {}
//不同模块增删查改地址
urlArr.forEach(item=>{
  exObj[`${item}Query`] = `${item}/query`;
  exObj[`${item}Update`] = `${item}/update`;
  exObj[`${item}Delete`] = `${item}/delete`;
  exObj[`${item}Create`] = `${item}/create`;
})

export default {
  /*通用地址*/
  baseUrl:'http://localhost:9099/sunshine',

  /*获取动态验证码*/
  getCaptchaPath:'/authcode.jpg',

  /*用户登录*/
  login:'/login',

  exObj:exObj
}
