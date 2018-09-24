<template>
    <div class="app-container">
        <ul class="muen">
            <li 
                v-for="(item, index) in tabs" :key="index"
                :class="{'muen-item': true, on: current === item.key}" 
                @click="current = item.key"
            >
                {{item.title}}
            </li>
        </ul>
        <topics 
            v-for="(item, index) in tabs" 
            :key="index" 
            :tab="item.key"
            v-if="current === item.key"
        ></topics>
    </div>
</template>
<script>
import Topics from "./Topics.vue";
const tabs = [
    {
        title: '全部',
        key: ''
    },
    {
        title: '精华',
        key: 'good'
    },
    {
        title: '分享',
        key: 'share'
    },
    {
        title: '问答',
        key: 'ask'
    },
    {
        title: '招聘',
        key: 'job'
    },
    {
        title: '客户端测试',
        key: 'dev'
    }
]
export default {
    name: 'container',
    components: {
        Topics
    },
    data() {
        return {
            tabs,
            current: ''
        }
    }
}
</script>

<style lang="less" scoped>
    .app-container {
        font-size: 14px;
        .muen{
            display: flex;
            align-items: center;
            list-style: none;
            background-color: #f6f6f6;
            padding: 10px 16px;
            &-item{
                padding: 2px 6px;
                margin: 0 8px;
                border-radius: 3px;
                color: #80bd01;
                cursor: pointer;
                &.on{
                    background-color: #80bd01;
                    color: #fff;
                }
            }
        }
    }
</style>

