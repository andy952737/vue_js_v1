<template>
    <ApiAbout msg="API init About"/>
    <ApiAbout int_post="v1"/>
    <ApiAbout isActive="true"/>
</template>
<script>
    import ApiAbout from './components/ApiAbout.vue'
    console.log("api restart 2023 vue design for About");

    export default {
        name: 'App', 
        components: {
            ApiAbout
        }
    }
</script>