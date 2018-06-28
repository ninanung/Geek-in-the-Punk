<template>
    <div v-html="replacedText" id="text-body">
    </div>
</template>
<script>
/* eslint-disable */
import '../../prism/prism.css'

export default {
    props: [ 'text' ],
    data: function() {
        return {
            replacedText: '',
            someText: 'text'
        }
    },
    mounted: function() {
        this.replacedText = this.text.replace(/--/g, '&nbsp;&nbsp;').replace(/  /g, '<br/>')

    }
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
    
</style>