<template>
    <div class="link-body">
        <router-link class="link" :to="'/post/' + year + '/' + index">{{ toWhere.title }}</router-link>
        <p>{{ new Date(toWhere.date).toString().split(" ").splice(0, 4).splice(1, 3).toString().replace(/,/g, " ") }}</p>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    props: [ "toWhere", "index", "year" ]
}
</script>
<style scoped>
    a {
        text-decoration: none;
        color: black;
    }
    p {
        margin: 0;
        color: #7C8089;
    }
    .link-body {
        margin: 5px 0 5px 0;
    }
</style>
