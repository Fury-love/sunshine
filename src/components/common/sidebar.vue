<template>
  <div class="side-bar">
    <div class="side-card">
      <div class="focus-tip">
        <p>关注者</p>
        <p class="side-content">103123</p>
      </div>
      <div class="focus-tip">
        <div style="border-left: 1px solid #ebebeb">
          <p>问题数</p>
          <p class="side-content">12132</p>
        </div>
      </div>
    </div>
    <div class="side-card middle-card">
      <div class="topic-main">父话题</div>
      <div class="topiclist">
        <router-link :key="index" v-for="(item,index) in topicList" :to="item.urls"><span>{{item.value}}</span></router-link>
      </div>
      <div><a class="topic-bottom">查看全部话题</a></div>
    </div>
    <div class="footer">
      <router-link><span>联系我们</span></router-link>
      <router-link><span>联系我们</span></router-link>
      <router-link><span>联系我们</span></router-link>
      <router-link><span>联系我们</span></router-link>
      <router-link><span>联系我们</span></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Sidebar",
    data() {
      return {
        topicList: [{
          url: "#",
          value: "精彩"
        }, {
          url: "#",
          value: "真是够了"
        }, {
          url: "#",
          value: "破风"
        }, {
          url: "#",
          value: "腻害"
        }, {
          url: "#",
          value: "砰砰砰"
        }, {
          url: "#",
          value: "NBA"
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .side-bar {
    width: 296px;
    -ms-flex-negative: 0;
    flex-shrink: 0;

  .side-card {
    margin-bottom: 10px;
    background: #fff;
    overflow: hidden;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
    box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

  .focus-tip {
    width: 50%;
    border: 0;
    line-height: unset;
    font-size: unset;
    padding: 16px 0;
    color: #8590a6;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    line-height: 1.6;

  .side-content {
    display: inline-block;
    font-size: 18px;
    color: #1a1a1a;
    font-weight: 600;
    font-synthesis: style;
    line-height: 1.6;
  }

  }
  }
  .middle-card {
    padding: 16px 20px;
    position: relative;
    flex-direction: column;

  .topic-main {
    font-weight: 600;
    font-synthesis: style;
    margin-bottom: 12px;
    font-size: 15px;
    color: #1a1a1a;
  }

  .topiclist {

  span {
    margin: 0 8px 8px 0;
    display: inline-block;
    cursor: pointer;
    max-width: 256px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    vertical-align: baseline;
    vertical-align: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 30px;
    padding: 0 12px;
    font-size: 14px;
    line-height: 30px;
    color: #0084ff;
    border-radius: 100px;
    background: rgba(0, 132, 255, .1);
  }

  span:hover {
    background-color: rgba(0, 132, 255, .15);
  }

  }
  .topic-bottom {
    display: inline-block;
    padding-top: 4px;
    font-size: 14px;
    color: #8590a6;
  }

  .topic-bottom:hover {
    color: #175199;
  }

  }
  .footer{
    padding: 10px 0 10px 5px;
    font-size: 13px;
    line-height: 2;
    color: #8590a6;
    span{
      display: inline-block;
      cursor: pointer;
      color: inherit;
    }
  }
  }
</style>
