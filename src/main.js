import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import About from './About.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About }
    ]
});

const app = createApp(Home);
app.use(router);
app.mount('#App');

// const app2 = createApp(About);
// app2.use(router);
// app2.mount('#App2');