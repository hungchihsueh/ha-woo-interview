import "normalize.css/normalize.css";
import "bootstrap"; // 從nodeModule中載入Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Import css file
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
