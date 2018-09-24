import {topics, topicsDetail} from "@/services/topics"
const tabMap = {
    good: "精华",
    share: "分享",
    ask: "问答",
    job: "招聘",
    dev: "测试",
}
export default {
    namespaced: true,
    state: {
        list: [],
        detail: {
            author: {},
            replies: []
        }
    },
    mutations: {
        saveList(state, paylaod) {
            state.list = paylaod
        },
        saveDetail(state, paylaod) {
            state.detail = paylaod
        }
    },
    actions: {
        getList({commit}, paylaod) {
            topics(paylaod).then(({data, success}) => {
                if (success) commit("saveList", data)
            });
        },
        getDetail({commit}, paylaod) {
            topicsDetail(paylaod).then(({data, success}) => {
                if (success) commit("saveDetail", data)
            });
        }
    },
    getters: {
        getTabName: (state) => (tab) => {
            return tabMap[tab] || tab;
        }
    }
}