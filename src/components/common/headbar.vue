<template>
  <div class="headbar">
    <div class="websiteLogo"><img src="" alt=""></div>
    <ul class="tabmenu font-size-20 margin-right-20x">
      <li><a>首页</a></li>
      <li><a>发现</a></li>
      <li><a>话题</a></li>
    </ul>
    <Input style="width: 270px;vertical-align: middle" size="small" search placeholder="Enter something..." />
    <span class="quiz bg-51b0d6">提问</span>
    <ul class="tabmenu font-size-20 float-right">
      <li><Icon type="ios-notifications" /></li>
      <li><Icon type="md-chatboxes" /></li>
      <li><Icon type="logo-octocat" /></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Headbar"
    }
</script>

<style lang='scss' scoped>
  .headbar{
    width:100%;
    min-width: 1000px;
    padding:0 150px;
    background:#fff;
    height: 60px;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    .tabmenu{
      display:inline-block;
      vertical-align: middle;
      li{
        display: inline-block;
        color: #8590A6;
        margin: 0 12px;
        cursor: pointer;
      }
    }
  .quiz{
    display: inline-block;
    vertical-align: middle;
    padding: 4px 14px;
    font-size: 14px;
    line-height: 24px;
    margin-left: 20px;
    cursor: pointer;
  }
  }
</style>
