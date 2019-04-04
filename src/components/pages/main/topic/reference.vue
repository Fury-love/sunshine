<!--索引-->
<template>
  <div class="reference">
    <div class="leftSide">
      <referencelist :key="index" v-for="(item,index) in dataList" :list="item.list" :title="item.title"></referencelist>
    </div>
    <div class="rightSide">
      <ol class="TopicIndexCatalog">
        <li class="TopicIndexCatalog-item" v-for="val in dataList"><a :href="'#'+val.title">{{val.title}}</a></li>
      </ol>
    </div>
  </div>
</template>
<script>
  import Referencelist from "@/components/common/module/referencelist"

  export default {
    name: "Reference",
    components: {"referencelist": Referencelist},
    data() {
      return {
        dataList: [
          {
            title: "热门盘点",
            list: [{
              value: "神话，有的要打破，有的要打倒 ",
              url: "#"
            }, {
              value: "凉山火灾全部扑灭 ",
              url: "#"
            }, {
              value: "社保基金减持交行 ",
              url: "#"
            }, {
              value: "威少超级三双 ",
              url: "#"
            }, {
              value: "圣彼得堡军校爆炸 ",
              url: "#"
            }]
          }, {
            title: "精品讨论",
            list: [{
              value: "变味一时爽，一直变味一直爽 ",
              url: "#"
            }, {
              value: "这不是我认识的苹果了 ",
              url: "#"
            }, {
              value: "《都挺好》大结局，全员接力强劲漂白 ",
              url: "#"
            }, {
              value: "金三银四跳槽季",
              url: "#"
            }, {
              value: "华为的新品发布会 ",
              url: "#"
            }]
          },{
            title: "趣味问答",
            list: [{
              value: "变味一时爽，一直变味一直爽 ",
              url: "#"
            }, {
              value: "这不是我认识的苹果了 ",
              url: "#"
            }, {
              value: "《都挺好》大结局，全员接力强劲漂白 ",
              url: "#"
            }, {
              value: "金三银四跳槽季",
              url: "#"
            }, {
              value: "华为的新品发布会 ",
              url: "#"
            }]
          },{
            title: "搞笑幽默",
            list: [{
              value: "变味一时爽，一直变味一直爽 ",
              url: "#"
            }, {
              value: "这不是我认识的苹果了 ",
              url: "#"
            }, {
              value: "《都挺好》大结局，全员接力强劲漂白 ",
              url: "#"
            }, {
              value: "金三银四跳槽季",
              url: "#"
            }, {
              value: "华为的新品发布会 ",
              url: "#"
            }]
          },{
            title: "美食风尚",
            list: [{
              value: "变味一时爽，一直变味一直爽 ",
              url: "#"
            }, {
              value: "这不是我认识的苹果了 ",
              url: "#"
            }, {
              value: "《都挺好》大结局，全员接力强劲漂白 ",
              url: "#"
            }, {
              value: "金三银四跳槽季",
              url: "#"
            }, {
              value: "华为的新品发布会 ",
              url: "#"
            }]
          }
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>
  .TopicIndexCatalog-item:before, .TopicIndexCatalog:before {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 4px;
    height: 100%;
    content: "";
    background-color: #ebebeb;
    border-radius: 2px;
  }
  .reference {

  .leftSide {
    width: 60%;
    display: inline-block;
  }

  .rightSide {
    display: inline-block;
    width: 39%;
    vertical-align: top;
    text-align: right;

  .TopicIndexCatalog {
    position: relative;
    border-top: 16px solid transparent;
    border-bottom: 16px solid transparent;
    border-right: 20px solid transparent;
    text-align: right;

  .TopicIndexCatalog-item {
    position: relative;
    color: #8590a6;
    a{
      font-size: 15px;
      color: inherit;
      display: inline-block;
      padding: 4px 8px;
      border-right: 4px solid transparent;
    }
  }

  }

  }
  }
</style>
