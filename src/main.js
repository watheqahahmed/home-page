// src/main.js
// نقطة الدخول الرئيسية للتطبيق
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css'; // تأكد من وجود هذا الملف لإعداد Tailwind CSS

const app = createApp(App);
app.use(router);
app.mount('#app');
