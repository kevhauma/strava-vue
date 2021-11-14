import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import OpenLayersMap from 'vue3-openlayers';
import 'vue3-openlayers/dist/vue3-openlayers.css';
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

let app = createApp(App);
app.use(store);
app.use(router);
app.use(Vuesax)
app.use(OpenLayersMap);
app.mount('#app');
