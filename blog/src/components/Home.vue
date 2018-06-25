<template>
    <div class='home'>
        <div class='home-header'>
            <post-header/>
        </div>
        <div class='home-body'>
            <post-body/>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import PostHeader from './post/PostHeader'
import PostBody from './post/PostBody'

export default {
    components: { PostHeader, PostBody }
}
</script>
<style scoped>

</style>
/* eslint-disable */