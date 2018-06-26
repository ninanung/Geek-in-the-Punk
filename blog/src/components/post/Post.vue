<template>
    <div class="post">
        <div class="post-header">
            <post-header :title="this.title" :index="this.number" :date="this.date"/>
        </div>
        <div class="post-body">
            <post-body :text="this.text"/>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import PostHeader from './post-contents/PostHeader'
import PostBody from './post-contents/PostBody'
import {mapState} from 'vuex'

export default {
    components: { PostHeader, PostBody },
    computed: mapState([ 'postlist' ]),
    data: function() {
        return {
            number: 13,
            title: "",
            date: "",
            text: ""
        }
    },
    created: function() {
        const index = this.$route.params.index
        this.number = index
        this.title = this.postlist[this.number].title
        this.text = this.postlist[this.number].text
        this.date = this.postlist[this.number].date
    }
}
</script>
<style scoped>

</style>
