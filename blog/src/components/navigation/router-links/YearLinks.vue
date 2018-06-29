<template>
    <div class="year-links">
        <p>{{this.year}}</p>
        <link-list v-bind:key="index" v-for="(toWhere, index) in yearLink" :year="year" :toWhere="toWhere" :index="index" />
    </div>
</template>
<script>
/* eslint-disable */
import LinkList from './LinkList.vue'

export default {
    components: { LinkList },
    props: [ 'year', 'yearLink' ]
}
</script>
<style scoped>

</style>
