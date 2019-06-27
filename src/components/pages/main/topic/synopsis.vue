<!--简介-->
<template>
<div>
    <div v-for="item in list" :key="item.id">
    </div>
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
