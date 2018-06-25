<template>
    <div class="link-body">
        <router-link class="link" :to="{ name: toWhere }">{{ index + ". " + toWhere }}</router-link>
    </div>
</template>
<script>
export default {
    props: [ "toWhere", "index" ]
}
</script>
<style scoped>

</style>
