<template>
    <div>
        <h1>{{title}}</h1>
        <h3 v-if="date">{{date}}</h3>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    props: [ 'title', 'date' ]
}
</script>
<style scoped>

</style>