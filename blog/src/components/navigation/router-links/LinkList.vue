<template>
    <div class="link-body">
        <router-link class="link" :to="'/post/' + year + '/' + index">
            <p class='dev label' v-if="dev">{{dev}}</p>
            <p class='chat label' v-if="chat">{{chat}}</p>
            <p class='tra label' v-if="tra">{{tra}}</p>
            <p class='test label' v-if="test">{{test}}</p>
            <p class='title'>{{ post.title }}</p>
        </router-link>
        <br/>
        <p class='date'>{{ new Date(post.date).toString().split(" ").splice(0, 4).splice(1, 3).toString().replace(/,/g, " ") }}</p>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    props: [ "post", "index", "year" ],
    data() {
        return {
            dev: '',
            chat: '',
            tra: '',
            test: '',
        }
    },
    created: function() {
        const topic = this.post.topic;
        if(topic === 'Dev') this.dev = topic;
        else if(topic === 'Travel') this.tra = topic;
        else if(topic === 'Chat') this.chat = topic;
        else this.test = topic;
    }
}
</script>
<style scoped>
    a {
        text-decoration: none;
        color: black;
    }
    .title {
        margin: 0; display: inline;
    }
    .date {
        margin: 0; color: #7C8089;
    }
    .link-body {
        text-align: center; margin-bottom: 7px;
    }
    .label {
        border: black solid 1px; margin: 0; display: inline;
        border-radius: 4px; font-size: 10px;
        font-weight: bold; color: white; margin-right: 3px;
    }
    .dev {
        background-color: black;
    }
    .tra {
        background-color: #37ADDE; border: #37ADDE;
    }
    .chat {
        background-color: #30CD83; border: #30CD83;
    }
    .test {
        background-color: orange; border: orange;
    }
</style>
