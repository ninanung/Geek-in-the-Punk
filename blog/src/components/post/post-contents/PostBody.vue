<template>
    <div v-html="replacedText" id="text-body">
    </div>
</template>
<script>
/* eslint-disable */
import prism from '../../../prism.css'

export default {
    props: [ 'text' ],
    data: function() {
        return {
            replacedText: '',
            style: null
        }
    },
    beforeMount: function() {
        this.replacedText = this.text.replace(/--/g, '&nbsp;&nbsp;').replace(/  /g, '<br/>')
        this.style = prism
    },
    mounted: function() {
        document.getElementById("text-body").style = this.style
    }
}
</script>
<style scoped>
    #text-body {
        width: 40%;
        text-align: left;
        margin-left: 30%; margin-right: 30%; margin-top: 100px; margin-bottom: 100px;
    }
</style>