<template>
    <div>
        <h1>{{title}}</h1>
        <h3>{{this.dateString}}</h3>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    props: [ 'index', 'title', 'date' ],
    date: function() {
        return {
            dateString: ""
        }
    },
    beforeMount: function() {
        this.dateString = new Date(this.date).toString().split(" ").splice(0, 5).toString().replace(/,/g, " ");
    }
}
</script>
<style scoped>

</style>