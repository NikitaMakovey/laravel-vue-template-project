require('./bootstrap');

import { createApp } from 'vue';
import vuetify from "./plugins/vuetify";
import Main from './views/Main';

const app = createApp(Main).mount('#app');