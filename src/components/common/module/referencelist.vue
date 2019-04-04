<!--索引列表数据-->
<template>
<div class="referencelist">
  <div class="title">
    <a href="#" :name="title">{{title}}</a>
  </div>
  <div>
    <div class="content" v-for="item in list">
      <router-link to="item.url">{{item.value}}</router-link>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "ReferenceList",
      props:{
          title:{
            type:String,
          },
        list:{
            type:Array,
          default(){
              return []
          }
        },
      },
    }
</script>

<style lang="scss" scoped>
.referencelist{
  width: 100%;
  height: auto;
  padding:0 20px 16px;
.title{
  border-top: 52px solid transparent;
  margin-top: -52px;
  padding: 16px 0;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 600;
  font-synthesis: style;
}
.content{
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
  padding: 8px 0;
  font-size: 15px;
  color: #1a1a1a;
  -webkit-tap-highlight-color: rgba(26,26,26,0);
}
.content:hover{
  color: rgb(87, 163, 243)
}
}
</style>
