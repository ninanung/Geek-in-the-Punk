<template>
    <div class="link-list-body">
        <ul class="link-list">
            <li :v-for="(link, index) in linklist"><link :isWhere="link" :index="index"/></li>
        </ul>
    </div>
</template>
<script>
/* eslint-disable */
import Link from './Link'
import {mapState} from 'vuex'

export default {
    components: { Link },
    computed: mapState([ 'linklist' ])
}
</script>
<style scoped>

</style>
