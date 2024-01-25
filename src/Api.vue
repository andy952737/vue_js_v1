<template>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <ApiPage msg="API init"/>
    <ApiPage int_post="99"/>
    <ApiPage isActive="true"/>
</template>
<script>
    import ApiPage from './components/ApiPage.vue'
    console.log("api restart 2023 vue design");

    export default {
        name: 'App',
        components: {
            ApiPage
        }
    }
</script>