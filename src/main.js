import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import OpenLayersMap from 'vue3-openlayers';
import 'vue3-openlayers/dist/vue3-openlayers.css';

let app = createApp(App);
app.use(store);
app.use(router);
app.use(OpenLayersMap);
app.mount('#app');
