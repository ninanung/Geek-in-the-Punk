<template>
    <div class="notfound-body">
        <h1>404</h1>
        <img src="../assets/404.jpg"/>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    
}
</script>
<style scoped>
    @media only screen and (max-width: 850px) {
        img {
            width: 100%; height: auto;
        }
        .notfound-body {
            width: 90%;
            margin-left: 5%; margin-right: 5%; margin-top: 100px; margin-bottom: 100px;
        }
    }
    @media only screen and (min-width: 850px) {
        img {
            width: 100%; height: auto;
        }
        .notfound-body {
            width: 50%;
            margin-left: 25%; margin-right: 25%; margin-top: 100px; margin-bottom: 100px;
        }
    }
</style>
