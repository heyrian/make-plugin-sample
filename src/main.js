import { createVuetify } from 'vuetify'
import { createApp } from 'vue'
import App from './App.vue'


const vuetify = createVuetify()

createApp(App).use(vuetify).mount('#app')
