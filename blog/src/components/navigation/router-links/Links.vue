<template>
    <div class="link-list-body">
        <ul class="link-list">
            <li><router-link :to="'/'"><img src='../../../assets/main.png'/></router-link></li>
            <li v-for="(link, index) in postlist" :key="index"><link-list :toWhere="link" :index="index"/></li>
        </ul>
    </div>
</template>
<script>
/* eslint-disable */
import LinkList from './LinkList'
import {mapState} from 'vuex'

export default {
    components: { LinkList },
    computed: mapState([ 'postlist' ])
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
