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
        margin: 0; float: left;
    }
    .date {
        margin: 0; color: #7C8089;
    }
    .link-body {
        margin: 5px 0 5px 0;
    }
    .label {
        margin: auto; float: left; border: black solid 1px;
        border-radius: 4px; font-size: 10px; text-align: center;
        font-weight: bold; color: white; margin-right: 3px;
    }
    .dev {
        background-color: black;
    }
    .tra {
        background-color: blue;
    }
    .chat {
        background-color: green;
    }
    .test {
        background-color: orange;
    }
</style>
