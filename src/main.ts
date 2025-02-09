import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import { AninmalsPreset } from './aninmalsTheme';

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: AninmalsPreset,
    options: {
      darkModeSelector: false || 'none'
    }
  },
})
.mount('#app');