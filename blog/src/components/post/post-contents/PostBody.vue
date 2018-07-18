<template>
    <div v-html="text" id="text-body">
    </div>
</template>
<script>
/* eslint-disable */
import '../../prism/prism.css'

export default {
    props: [ 'text' ]
}
</script>
<style scoped>
    @media only screen and (max-width: 850px) {
        #text-body {
            width: 90%;
            text-align: left;
            margin-left: 5%; margin-right: 5%; margin-top: 100px; margin-bottom: 100px;
        }
    }
    @media only screen and (min-width: 850px) {
        #text-body {
            width: 40%;
            text-align: left;
            margin-left: 30%; margin-right: 30%; margin-top: 100px; margin-bottom: 100px;
        }
    }
    img {
        width: 100%; height: auto;
    }
</style>