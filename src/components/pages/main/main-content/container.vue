<!--正文-->
<template>
  <div class="container">
    <main-content></main-content>
    <side-bar></side-bar>
  </div>
</template>

<script>
  import Sidebar from '@/components/common/sidebar'
  import MainContent from '@/components/pages/main/main-content/main-content'
  export default {
    name: "Container",
    components:{
      'side-bar':Sidebar,
      'main-content':MainContent
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    width: 1000px;
    margin: 10px auto;
    padding: 0 16px;
    overflow: hidden;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

</style>
