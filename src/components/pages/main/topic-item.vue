<!--话题-->
<template>
  <div class="topic-item">
    <div class="content-card">
      <div><img src="../../../images/headlogo.jpg" alt=""></div>
      <div>
        <div>蛋蛋</div>
        <div>flex-shrink的默认值为1，如果没有显示定义该属性，将会自动按照默认值1在所有因子相加之后计算比率来进行空间收缩。
          本例中A、B、C 显式定义了 flex-shrink 为 1，D、E 定义了 flex-shrink 为 2，所以计算出来总共将剩余空间分成了 7 份，其中 A、B、C 占 1 份，D、E 占 2 份，即1:1:1:2:2</div>
      </div>
    </div>
    <div class="tab-title"></div>
  </div>
</template>

<script>
    export default {
        name: "topicItem"
    }
</script>

<style scoped>
.topic-item{
  background: #fff;
}
</style>
