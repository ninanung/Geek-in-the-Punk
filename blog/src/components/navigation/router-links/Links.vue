<template>
    <div class="link-list-body">
        <ul class="link-list">
            <li><router-link :to="'/'"><img src='../../../assets/main.png'/></router-link></li>
            <li v-for="(yearLink, index) in yearLinks" :key="index"><year-links :posts="yearLink" :year="years[index]"/></li>
        </ul>
    </div>
</template>
<script>
/* eslint-disable */
import YearLinks from './YearLinks'
import {mapState} from 'vuex'

export default {
    components: { YearLinks },
    computed: mapState([ 'postlist' ]),
    data: function() {
        return {
            years: [],
            yearLinks: []
        }
    },
    created: function() {
        const sortedPostlist = this.postlist.sort(function(a, b) {
            if(a.date > b.date) {
                return -1
            } else {
                return 1
            }
        });
        let years = []
        sortedPostlist.map(function(post) {
            let year = new Date(post.date).toString().split(" ").splice(0, 4).splice(3, 1).toString().replace(/,/g, " ")
            let isSameYear = false
            if(years.length == 0) {
                years.push(year)
            } else {
                for(let i = 0; i < years.length; i++) {
                    if(years[i] === year) {
                        isSameYear = true
                    }
                }
                if(!isSameYear) {
                    years.push(year)
                }
            }
        })
        for(let i = 0; i < years.length; i++) {
            let yearLink = []
            sortedPostlist.map(function(post) {
                if(new Date(post.date).toString().split(" ").splice(0, 4).splice(3, 1).toString().replace(/,/g, " ") === years[i]) {
                    yearLink.push(post)
                }
            })
            this.yearLinks.push(yearLink)
        }
        this.years = years
    }
}
</script>
<style scoped>
    li {
        list-style-type: none;
    }
    ul {
        padding-left: 0;
    }
    a {
        text-decoration: none;
        color: black;
    }
    img {
        width: 30px; height: auto;
    }
</style>
