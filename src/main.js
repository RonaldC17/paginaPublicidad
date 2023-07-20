import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import tailwindConfig from '../tailwind.config';
import router from './router';
import 'vuetify/dist/vuetify.css';
const app = createApp(App);
app.use(store);
app.use(vuetify);
app.use(tailwindConfig);
app.use(router);

app.mount('#app');

loadFonts();
