<template>
    <div>
        <h1>{{index + '. ' + title}}</h1>
        <h1>{{date}}</h1>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    props: [ 'index', 'title', 'date' ]
}
</script>
<style scoped>

</style>