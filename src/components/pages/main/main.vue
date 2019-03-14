<!--主题页-->
<template>
  <div>
    <Layout>
      <head-bar></head-bar>
        <main-content></main-content>
    </Layout>
  </div>
</template>

<script>
  import Headbar from '@/components/common/headbar'
  import MainContent from  '@/components/pages/main/main-content/main-content'

  export default {
    name: "Home",
    components: {
      'head-bar':Headbar,
      'main-content':MainContent,
    },
  }
</script>

<style lang="scss" scoped>

</style>
