<template>
    <div class="post">
        <div class="post-header">
            <post-header :title="this.title" :date="this.date"/>
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
            title: "",
            date: "",
            text: "",
            sortedPostlist: []
        }
    },
    created: function() {
        this.sortedPostlist = this.postlist.sort(function(a, b) {
            if(a.date > b.date) {
                return -1
            } else {
                return 1
            }
        });
        const index = Number(this.$route.params.index)
        const year = this.$route.params.year
        let listOfYear = this.pushPostToYear(year)
        this.changeDataValue(listOfYear[index])
    },
    watch: {
        '$route.params': function() {
            const year = this.$route.params.year
            const index = this.$route.params.index
            let listOfYear = this.pushPostToYear(year)
            this.changeDataValue(listOfYear[index])
        }
    },
    methods: {
        pushPostToYear: function(year) {
            let returnArray = []
            this.sortedPostlist.map(function(post) {
                if(new Date(post.date).toString().split(" ").splice(0, 4).splice(3, 1).toString().replace(/,/g, " ") === year) {
                    returnArray.push(post)
                }
            })
            return returnArray
        },
        changeDataValue: function(post) {
            if(!post) {
                this.$router.push('/notfound')
            }
            this.title = post.title
            this.text = post.text.replace(/--/g, '&nbsp;&nbsp;').replace(/  /g, '<br/>').replace(/<img>/g, "<img src='./static/photos/").replace(/<\/img>//g, "' style='width: 100%; height: auto;' />");
            this.date = new Date(post.date).toString().split(" ").splice(0, 5).toString().replace(/,/g, " ");
        },
        checkIfYearExis: function(year) {
            let count = 0
            let yearsArray = []
            this.sortedPostlist.map(function(post) {
                const year = new Date(post.date).toString().split(" ").splice(0, 4).splice(3, 1).toString().replace(/,/g, " ")
                if(yearsArray.length === 0) {
                    yearsArray.push(year)
                } else if(yearsArray[count] !== year) {
                    yearsArray.push(year)
                    count++
                }
            })
            let isExist = false
            yearsArray.map(function(listedYear) {
                if(listedYear === year) {
                    isExist = true
                }
            })
            return isExist
        }
    }
}
</script>
<style scoped>

</style>
