<!--主题页-->
<template>
  <div>
    <Layout>
      <head-bar></head-bar>
      <container></container>
    </Layout>
  </div>
</template>

<script>
  import Headbar from '@/components/common/headbar'
  import Container from  '@/components/pages/main/main-content/container'

  export default {
    name: "Home",
    components: {
      'head-bar':Headbar,
      'container':Container,
    },
  }
</script>

<style lang="scss" scoped>

</style>
