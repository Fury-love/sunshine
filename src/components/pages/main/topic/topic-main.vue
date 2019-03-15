<template>
  <div class="topic-main">
    <div class="topic-bar">
      <Tabs value="name1">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
      </Tabs>
    </div>
    <div class="list"></div>
  </div>
</template>

<script>
    export default {
        name: "TopicMain"
    }
</script>

<style lang="scss" scoped>
  .topic-main{
    min-height: 100vh;
    border-radius: 2px;
    .topic-bar{
      align-items: center;
      background-color: #FFFFFF;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      border-width: 1px 1px 0 1px;
      border-bottom: 1px solid #EBEBEB;
      box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    }
  }

</style>
