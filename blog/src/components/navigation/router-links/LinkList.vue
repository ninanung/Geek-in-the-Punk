<template>
    <div class="link-body">
        <router-link class="link" :to="'/post/' + index">{{ toWhere.title }}</router-link>
        <p>{{ new Date(toWhere.date).toString().split(" ").splice(0, 4).splice(1, 3).toString().replace(/,/g, " ") }}</p>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    props: [ "toWhere", "index" ]
}
</script>
<style scoped>
    a {
        text-decoration: none;
        color: black;
    }
</style>
