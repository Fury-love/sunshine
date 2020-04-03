
<!--讨论页面-->
<template>
    <div>
        <div v-load-status="{status:'fail',statusFn:test()}"></div>
        <!--    222-->
    </div>
</template>

<script>
    import Temp from '@/components/pages/main/topic/temp'

    export default {
        name: "Discuss",
        components: {
            Temp: Temp
        },
        data() {
            return {
            }
        },
        mounted() {
            var arr=[[{key:1,val:2},{key:2,val:3}], [{key:2,val:2},{key:3,val:3}], [{key:1,val:2},{key:2,val:10},{key:3,val:12}]]
            var r = arr.map((currentValue)=>{
                return currentValue.filter(item => {return item.key == 2})
            })
            console.log("arr: ",r);
        }
    }
</script>

<style lang="scss" scoped>

</style>
