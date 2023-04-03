import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import 'animate.css';
import Toaster from "@meforma/vue-toaster";

const app = createApp(App);
app.use(Toaster).use(store);
app.mount('#app')