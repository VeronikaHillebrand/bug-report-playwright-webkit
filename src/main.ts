// noinspection TypeScriptValidateTypes
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import { initComponents } from './components';
import { i18n } from './i18n';

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import deLocale from './locales/_primevue/de.json';

const app = createApp(App);

app.use(i18n);

app.use(PrimeVue, {
  locale: [deLocale],
});

initComponents(app);

app.mount('#app');
