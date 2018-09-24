<template>
    <div class="topic-detail">
        <header>
            <h3>
                <span v-if="detail.good || detail.top">{{detail.top ? '置顶' : '精华'}}</span>
                {{detail.title}}
            </h3>
            <p>
                ·发布于{{difference(detail.create_at)}}
                ·作者{{detail.author.loginname}}
                ·{{detail.visit_count}}次浏览
                ·来自 {{getTabName(detail.tab)}}
            </p>
        </header>
        <div class="topic-content" v-html="detail.content"></div>
        <div class="comment">
            <div class="comment-bar">{{detail.replies.length}} 回复</div>
            <ul class="replies">
                <li class="replies-item" v-for="(item, index) in detail.replies" :key="index">
                    <img :src="item.author.avatar_url" :alt="item.author.loginname">
                    <div class="content">
                        <section class="info">
                            <strong>{{item.author.loginname}}</strong>
                            <span>{{index + 1}}楼·{{difference(item.create_at)}}</span>
                        </section>
                        <section v-html="item.content"></section>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapState, mapActions, mapGetters} from "vuex"
import { difference } from "@/tools/time"
export default {
    name: 'topicsDetail',
    created() {
        this.getDetail(this.$route.params.id)
    },
    computed: {
        ...mapState('topics', ['detail']),
        ...mapGetters('topics', ['getTabName']),
    },
    methods: {
        ...mapActions('topics', ['getDetail']),
        difference
    }
}
</script>

<style lang="less" scoped>
    .topic-detail{
        background-color: #e1e1e1;
        padding-top: 10px;
        header, .topic-content{
            box-sizing: border-box;
            max-width: 1096px;
            margin: auto;
            padding: 10px;
            background-color: #fff;
        }
        header{
            border-radius: 3px 3px 0 0;
            border-bottom: 1px solid #e5e5e5;
            h3{
                font-size: 22px;
                line-height: 1.3;
                margin: 10px 0;
                display: flex;
                align-items: center;
                span{
                    padding: 2px 4px;
                    font-size: 12px;
                    width: 34px;
                    line-height: 18px;
                    border-radius: 3px;
                    text-align: center;
                    color: #fff;
                    background-color: #80bd01;
                }
            }
            p{
                font-size: 12px;
                color: #838383;
            }
        }
        .topic-content{
            margin-bottom: 10px;
            border-radius: 0 0 3px 3px;
        }
        .comment{
            border-radius: 3px;
            max-width: 1096px;
            margin: auto;
            background-color: #fff;
            overflow: hidden;
            &-bar{
                background-color: #f6f6f6;
                line-height: 30px;
                padding: 0 10px;
            }
            .replies-item{
                box-sizing: border-box;
                padding: 10px;
                min-height: 82px;
                display: flex;
                border-bottom: 1px solid #e5e5e5;
                img{
                    width: 30px;
                    height: 30px;
                    border-radius: 3px;
                    margin-right: 10px;
                }
                .info{
                    font-size: 12px;
                    strong{
                        color: #666;
                    }
                    span{
                        color: #08c;
                    }
                }
            }
        }
    }
</style>

