// src/index.js
import BAlert from './components/BAlert.vue'
import './assets/main.css'

export { BAlert }

export default {
  install(app) {
    app.component('BAlert', BAlert)
  },
}
