<template>
    <div class="link-body">
        <router-link class="link" :to="'/post/' + index">{{ toWhere.title }}</router-link>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    props: [ "toWhere", "index" ]
}
</script>
<style scoped>

</style>
