<!--话题-->
<template>
  <div class="topic-item">
    <div class="content-card">
      <div class="topic-logo"><img src="../../../../images/headlogo.jpg" alt=""></div>
      <div class="topic-content">
        <h1 style="font-size: 22px">般若</h1>
        <div class="content-text">flex-shrink的默认值为1，如果没有显示定义该属性，将会自动按照默认值1在所有因子相加之后计算比率来进行空间收缩。
          本例中A、B、C 显式定义了 flex-shrink 为 1，D、E 定义了 flex-shrink 为 2</div>
      </div>
    </div>
    <div class="tab-title">
      <span class="focusbtn">关注话题</span>
      <a href=""><svg fill=""><image width="1rem" height="1rem" xlink:href="../../../../images/icon/set.png"></image></svg>管理</a>
      <a href=""><svg><image width="1rem" height="1rem" xlink:href="../../../../images/icon/log.png"></image></svg>日志</a>
      <a href=""><svg><image width="1rem" height="1rem" xlink:href="../../../../images/icon/share.png"></image></svg>分享</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "topicItem"
    }
</script>

<style lang="scss" scoped>
.topic-item{
  margin-bottom: 10px;
  background: #FFFFFF;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  box-sizing: border-box;
  .content-card{
    padding: 16px 20px;
    .topic-logo{
      float: left;
      margin-right: 16px;
      img{
        width: 100px;
        height: 100px;
        border-radius: 4px;
      }
    }
    .topic-content{
      overflow: hidden;
      margin-right: 6px;
      .content-text{
        font-size: 15px;
        margin-top: 6px;
        color: #646464;
        line-height: 26px;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        height: 100px;
      }
    }
  }
  .tab-title{
    padding: 0 20px 16px;
    .focusbtn{
      width: 100px;
      min-width: 96px;
      display: inline-block;
      padding: 0 16px;
      margin-right: 8px;
      font-size: 14px;
      line-height: 32px;
      text-align: center;
      cursor: pointer;
      background: none;
      border: 1px solid;
      border-radius: 3px;
      color: #FFFFFF;
      background-color: #0084FF;
    }
    svg{
      width: 1rem;
      height: 1rem;
      margin:0 .2rem 0 1rem;
      vertical-align: middle;
      color: red;
    }
  }
}
</style>
