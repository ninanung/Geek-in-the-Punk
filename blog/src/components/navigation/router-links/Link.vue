<template>
    <div class="link-body">
        <router-link class="link" :to="{ name: toWhere }">{{ index + ". " + toWhere }}</router-link>
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
