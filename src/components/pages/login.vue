<template>
  <div class="login">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="2"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="180"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles>
    <div class="title"></div>
    <div class="container">
      <div class="head"><Icon type="md-log-in" /> 欢迎登录</div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <div>
          <FormItem style="width: 250px" prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </div>
        <div>
          <FormItem style="width: 250px" prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </div>
        <div style="margin-bottom: 12px;width: 320px;text-align: left;position: relative;padding-left:35px;height: 50px">
          <span class="auto-login">
            <input type="checkbox" class="auto-check" value="" :model = "formInline.checked">
            <span></span><label class="auto-text">自动登录</label></span>
          <!--<span class="forget-psw">忘记密码？</span>-->
        </div>
        <FormItem>
          <Button style="width: 250px;" type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
  import  Vue from 'vue'
  import VueParticles from 'vue-particles'
  Vue.use(VueParticles)
  export default {
    name: "Login",
    data() {
      return {
        formInline: {
          user: '',
          password: '',
          checked:true,
        },
        ruleInline: {
          user: [
            {required: true, message: '用户名不能为空！', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码不能小于6位！', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .lizi{
    width: 100%;
    height: 100%;
  }
  .login{
    width: 100%;
    height: 100%;
    background:  url("../../images/loginbg.png") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }

  .title{
    width: 200px;
    height: 100px;
    border-radius: 50% / 50%;
    position: fixed;
    top:8%;
    left: 8%;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 6px 20px;
    background-size: 90%;
  }
  .container {
    text-align: center;
    width: 320px;
    height: 350px;
    padding: 30px 0 80px 0;
    position: fixed;
    top: 25%;
    right: 15%;
    box-shadow: rgba(0, 0, 0, 0.5) 1px 1px 20px;
    border-radius: 5px;
    background:rgba(255,255,255,0.1);

  .head {
    text-align: center;
    width: 320px;
    height: 40px;
    text-align: center;
    font-size: 18px;
    line-height: 1;
    Icon{
      vertical-align: middle;
    }
  }

  .auto-login {
    position: absolute;
  .auto-check {
    opacity: 0;
    width:100px;
    height:20px;
  display:block;
  position:relative;
  z-index:1;
  + span {
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    position: absolute;
    top: 3px;
    left: 0;
    background: url("../../images/noauto.png") no-repeat;
    background-size: 85% auto;
  }
  &:checked {
  +span {
    background: url("../../images/autologin.png") no-repeat;
    background-size: 85% auto;
  }
  }
  }
  .auto-text{
    position: absolute;
    top:0;
    left: 20px;
  }
  }
  }
</style>
