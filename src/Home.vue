<template>
    <!-- <a href="/About">About</a> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Home msg="Home"/>
    <Home int_post="1"/>
    <!-- <ApiPage isActive="true"/> -->
</template> 
<script>
    import Home from './views/Home.vue'
    console.log("api restart 2023 vue design");
    //alert("Vue 2024");

    export default { 
        name: 'App',
        components: {
            Home
        }
    }
</script>