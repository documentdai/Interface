<template>
    <div class="topics-list">
        <list :list="list" :itemClick="itemClick" :getTabName="getTabName"></list>
    </div>
</template>
<script>
import {mapState, mapActions, mapGetters} from "vuex"
import List from './List.vue'
export default {
    name: 'topics',
    components: {
        List
    },
    props: {
        tab: {
            type: String,
            required: true
        }
    },
    created(){
        this.getList({
            page: 0,
            limit: 100,
            tab: this.tab
        })
    },
    computed: {
        ...mapState('topics', ['list']),
        ...mapGetters('topics', ['getTabName']),
    },
    methods: {
        ...mapActions('topics', ['getList']),
        itemClick({id}) {
            this.$router.push(`${this.$route.path}/${id}`)
        },
    },
}
</script>
