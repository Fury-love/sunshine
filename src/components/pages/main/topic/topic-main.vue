<template>
    <div class="topic-main">
        <div class="topic-bar">
            <Tabs value="name1">
                <TabPane label="索引" name="name1">
                    <Reference></Reference>
                </TabPane>
                <TabPane label="简介" name="name2">
                    <Synopsis></Synopsis>
                </TabPane>
                <TabPane label="讨论" name="name3">
                    <Discuss></Discuss>
                </TabPane>
                <TabPane label="精品" name="name4">
                    <Discuss></Discuss>
                </TabPane>
            </Tabs>
        </div>
        <div class="list"></div>
    </div>
</template>

<script>
    import Reference from '@/components/pages/main/topic/reference'
    import Discuss from '@/components/pages/main/topic/discuss'
    import Synopsis from '@/components/pages/main/topic/synopsis'

    export default {
        name: "TopicMain",
        components: {
            'Reference': Reference,
            'Discuss': Discuss,
            'Synopsis': Synopsis
        }
    }
</script>
<style>
    .ivu-tabs-nav-container {
        padding: 0 20px;
        z-index: 1;
    }
</style>
<style lang="scss" scoped>
    .topic-main {
        min-height: 100vh;
        border-radius: 2px;

        .topic-bar {
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
