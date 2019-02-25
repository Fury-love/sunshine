<template>
  <div>
    <Layout>
      <head-bar></head-bar>
      <side-bar></side-bar>
      <form action="/file/upload" method="post" enctype="multipart/form-data">
        文件:<input type="file" name="file"/>
        姓名:<input type="text" name="name"/>
        <input type="submit" value="commit">
      </form>
    </Layout>
  </div>
</template>

<script>
  import Headbar from '@/components/common/headbar'
  import Sidebar from '@/components/common/sidebar'

  export default {
    name: "Home",
    components: {
      'head-bar':Headbar,
      'side-bar':Sidebar
    },
  }
</script>

<style lang="scss" scoped>

</style>
