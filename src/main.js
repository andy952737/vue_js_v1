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

// 传递 App.vue
const app = createApp(Home);
//const app2 = createApp(About);
app.use(router);
app.mount('#App');

// app2.use(router);
// app2.mount('#App2');