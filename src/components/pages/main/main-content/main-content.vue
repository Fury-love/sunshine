<template>
  <div class="main-content">
    <topic-item></topic-item>
    <topic-main></topic-main>
  </div>
</template>

<script>
  import Topic from '@/components/pages/main/topic/topic-item'
  import TopicMain from '@/components/pages/main/topic/topic-main'
  export default {
    name: "MainContent",
    components:{
      'topic-item':Topic,
      'topic-main':TopicMain
    }
  }
</script>

<style lang="scss" scoped>
  .main-content{
    margin-right: 10px;
    width: 694px;
  }
</style>
