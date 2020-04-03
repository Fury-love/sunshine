<template>
    <div>
        <div v-for="(item,index) in texts" :key="index">
            <span style="display: inline-block;padding: 5px 10px;vertical-align: middle;background: red" @click="clickDo(item.dep)">点点点{{item.dep}}</span>
            <Temp :list="item.child" v-if="item.child" @OkBang="OkBang"></Temp>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Temp",
        props:["list"],
        data(){
            return{
                texts:[]
            }
        },
        mounted(){
            this.texts = this.list;
        },
        methods:{
            clickDo(dep){
                this.$emit("OkBang",dep)
            },
            OkBang(dep){
                console.log(dep)
            },
        }
    }
</script>