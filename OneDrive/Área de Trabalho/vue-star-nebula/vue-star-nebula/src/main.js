import { createApp } from 'vue';
import App from './App.vue';
import VueParticles from '@tsparticles/vue3';

const app = createApp(App);
app.use(VueParticles);
app.mount('#app');