<template>
    <ul class="list">
        <li class="list-item" v-for="(item, index) in list" :key="index" @click="itemClick(item, index)">
            <img :src="item.author.avatar_url" :alt="item.author.loginname">
            <p class="num">
                <span class="reply_count">{{item.reply_count}}</span>/<span class="visit_count">{{item.visit_count}}</span>
            </p>
            <span v-if="item.tab" :class="{type: true, on: item.top || item.good}">{{item.top ? '置顶' : (getTabName(item.tab))}}</span>
            <h3 class="title">{{item.title}}</h3>
            <span class="last">{{difference(item.last_reply_at)}}</span>
        </li>
    </ul>
</template>

<script>
import { difference } from "@/tools/time";
export default {
  name: "list",
  props: {
    list: {
      type: Array,
      default: [],
      required: true
    },
    itemClick: {
      type: Function,
      default: () => {},
    },
    getTabName: {
      type: Function,
      default: (tab) => tab
    }
  },
  methods: {
    difference,
    onClick() {
        this.$emit('itemClick')
    }
  }
};
</script>

<style lang="less">
.list {
  &-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px 24px;
    cursor: pointer;
    &:hover {
      background-color: #f6f6f6;
    }
    img {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      margin-right: 18px;
    }
    .num {
      flex: 0 0 70px;
      text-align: center;
      font-size: 10px;
      color: #b4b4b4;
      span:first-child {
        font-size: 12px;
        color: #9e78c0;
      }
    }
    .type {
      margin: 0 8px;
      color: #999;
      font-size: 12px;
      background-color: #e5e5e5;
      width: 34px;
      line-height: 18px;
      border-radius: 3px;
      text-align: center;

      &.on{
          color: #fff;
          background-color: #80bd01;
      }
    }
    .title {
      flex: 1;
      font-size: 14px;
      font-weight: 400;
    }
    .last {
      font-size: 10px;
      flex: 0 0 50px;
      color: #778087;
      text-align: right;
    }
  }
}
</style>

