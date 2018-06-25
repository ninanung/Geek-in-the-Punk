<template>
    <div class="navbar">
        <div class="links">
            <links/>
        </div>
        <div class="profile">
            <profile/>
        </div>
    </div>
</template>
<script>
import Links from './router-links/Links'
import Profile from '../profile/Profile'

export default {
    components: { Links, Profile }    
}
</script>
<style scoped>

</style>