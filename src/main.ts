import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import router from './router';

// Importa el plugin de notificaciones
import type { PluginOptions } from 'vue-toastification'

const app = createApp(App)

// Configuración del plugin de notificaciones
const options: PluginOptions = {
    position: POSITION.TOP_RIGHT, // Uso de la constante de la enumeración `POSITION`
    timeout: 5000,
}

// Usa el plugin de notificaciones
app.use(Toast, options)

// router de la aplicacion
app.use(router)

app.mount('#app')
