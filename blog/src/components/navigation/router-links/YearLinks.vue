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
        font-size: 22px; font-weight: bold;
    }
    @media only screen and (max-width: 850px) {
        p {
            width: 16%; margin: 5px 42% 5px 42%;
            cursor: pointer;
        }
    }
    @media only screen and (min-width: 850px) {
        p {
            width: 6%; margin: 5px 47% 5px 47%;
            cursor: pointer;
        }
    }
</style>
