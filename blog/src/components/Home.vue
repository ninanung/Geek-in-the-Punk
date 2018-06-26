<template>
    <div class='home'>
        <div class='home-header'>
            <post-header index="Welcome to Blog" title="환영합니다!"/>
        </div>
        <div class='home-body'>
            <post-body text="Home"/>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
import PostHeader from './post/post-contents/PostHeader'
import PostBody from './post/post-contents/PostBody'

export default {
    components: { PostHeader, PostBody }
}
</script>
<style scoped>

</style>
/* eslint-disable */