<template>
  <div class="main-content">
    <topic-item></topic-item>
  </div>
</template>

<script>
  import Topic from '@/components/pages/main/topic-item'
  export default {
    name: "MainContent",
    components:{
      'topic-item':Topic
    }
  }
</script>

<style scoped>

</style>
