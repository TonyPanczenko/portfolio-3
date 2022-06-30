import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/dist/quasar.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Quasar, {
  plugins: {},
  config: {
    brand: {
      primary: 'var(--c-primary)',
      secondary: 'var(--c-secondary)',
      accent: 'var(--c-accent-first)',
      dark: 'var(--c-dark)',
      'dark-page': 'var(--c-dark-page)',
      positive: 'var(--c-positive)',
      negative: 'var(--c-negative)',
      info: 'var(--c-info)',
      warning: 'var(--c-warning)'
    }
  }
});

app.mount('#app');
