<template>
    <div id="text-body">

    </div>
</template>
<script>
/* eslint-disable */
import '../../../prism.css'

export default {
    props: [ 'text' ],
    mounted: function() {
        let replacedText = this.text.replace(/--/g, '&nbsp;&nbsp;')
        replacedText = replacedText.replace(/  /g, '<br/>')
        document.getElementById('text-body').innerHTML = replacedText
    }
}
</script>
<style scoped>
    #text-body {
        width: 40%;
        text-align: left;
        margin-left: 30%; margin-right: 30%; margin-top: 100px;
    }
</style>