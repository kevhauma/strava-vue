import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import OpenLayersMap from "vue3-openlayers";
import "vue3-openlayers/dist/vue3-openlayers.css";
import PrimeVue from "primevue/config";
import PrimeComponents from "./utils/PrimeComponents";

import "./vela-blue-copy.css";
import "primevue/resources/primevue.css";
import "primeicons/primeicons.css";

let app = createApp(App);
app.use(store);
app.use(router);
app.use(PrimeVue);
app.use(OpenLayersMap);

PrimeComponents(app);

app.mount("#app");
