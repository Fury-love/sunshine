<!--简介-->
<template>

<div>
<!--    <div v-for="item in list" :key="item.id">-->
<!--    </div>-->
    <dv-full-screen-container>
    <dv-loading>Loading...</dv-loading>
    </dv-full-screen-container>
</div>
</template>

<script>
    export default {
        name: "Synopsis",
        data(){
            return{
                list:[{
                    id:1
                },{
                    id:2
                },{
                    id:3
                }],
                sum:this.count
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
