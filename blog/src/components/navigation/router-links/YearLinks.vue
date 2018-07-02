<template>
    <div class="year-links">
        <p v-on:click="this.yearListPopUp">{{this.year}}</p>
        <link-list v-if="isView" v-bind:key="index" v-for="(toWhere, index) in yearLink" :year="year" :toWhere="toWhere" :index="index" />
    </div>
</template>
<script>
/* eslint-disable */
import LinkList from './LinkList.vue'

export default {
    components: { LinkList },
    props: [ 'year', 'yearLink' ],
    data: function() {
        return {
            isView: false
        }
    },
    methods: {
        yearListPopUp: function() {
            this.isView = !this.isView
        }
    }
}
</script>
<style scoped>
    p {
        width: 4%; margin: 5px 48% 5px 48%;
        cursor: pointer;
    }
</style>
