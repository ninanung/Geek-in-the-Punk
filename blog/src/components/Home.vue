<template>
    <div class='home'>
        <div class='home-header'>
            <post-header class='home-header' index="Welcome to Blog" title="Swing your Code!"/>
        </div>
        <div class='home-body'>
            <a href="https://github.com/ninanung"><img src='../assets/kanji.jpeg'/></a>
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
    img {
        width: 300px; height: auto;
    }
    .home-header {
        font-size: 14px;
    }
</style>
