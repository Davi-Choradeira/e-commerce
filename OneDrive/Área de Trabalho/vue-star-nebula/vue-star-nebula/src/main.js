import { createApp } from "vue";
import App from "./App.vue";
import Vue3Particles from "vue3-particles";

const app = createApp(App);
app.use(Vue3Particles);
app.mount("#app");