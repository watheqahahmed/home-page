// src/views/ContactView.vue
// صفحة التواصل مع نموذج وخريطة.
<template>
  <div class="bg-white dark:bg-gray-800 py-12">
    <div class="container mx-auto px-6 max-w-6xl">
      <h1 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">تواصل معنا</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div>
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">أرسل لنا رسالة</h2>
          
          <div v-if="isSubmitted" class="bg-green-100 dark:bg-green-800 border-l-4 border-green-500 text-green-700 dark:text-green-200 p-4 rounded-md shadow-md mb-6" role="alert">
            <p class="font-bold">شكراً لك!</p>
            <p>لقد تم استلام رسالتك بنجاح. سنتواصل معك في أقرب وقت ممكن.</p>
          </div>
          
          <form @submit.prevent="handleSubmit" class="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-xl">
            <div class="mb-6">
              <label for="name" class="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">الاسم الكامل</label>
              <input type="text" id="name" v-model="formData.name" required class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200" />
            </div>
            <div class="mb-6">
              <label for="email" class="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">البريد الإلكتروني</label>
              <input type="email" id="email" v-model="formData.email" required class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200" />
            </div>
            <div class="mb-6">
              <label for="subject" class="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">الموضوع</label>
              <input type="text" id="subject" v-model="formData.subject" required class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200" />
            </div>
            <div class="mb-6">
              <label for="message" class="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2">الرسالة</label>
              <textarea id="message" v-model="formData.message" rows="5" required class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300">
                إرسال الرسالة
              </button>
            </div>
          </form>
        </div>

        <!-- Map and Details -->
        <div>
          <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-6">موقعنا ومعلومات التواصل</h2>
          <div id="map" class="w-full h-80 rounded-xl shadow-lg mb-6"></div>
          <p class="text-gray-600 dark:text-gray-400 mb-2">
            **العنوان:** شارع الأمل، مبنى 404، الطابق الخامس، المدينة.
          </p>
          <p class="text-gray-600 dark:text-gray-400 mb-2">
            **الهاتف:** +123 456 7890
          </p>
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            **البريد الإلكتروني:** info@your-org.com
          </p>
          <div class="flex space-x-4 rtl:space-x-reverse">
            <a href="#" class="text-indigo-600 hover:text-indigo-800 transition duration-200">فيسبوك</a>
            <a href="#" class="text-indigo-600 hover:text-indigo-800 transition duration-200">تويتر</a>
            <a href="#" class="text-indigo-600 hover:text-indigo-800 transition duration-200">إنستغرام</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { saveSubmission } from '@/services/localStorageService.js';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const formData = ref({ name: '', email: '', subject: '', message: '' });
const isSubmitted = ref(false);

const handleSubmit = () => {
  // حفظ طلب التواصل في localStorage
  saveSubmission({ ...formData.value, id: Date.now() });
  isSubmitted.value = true;
  formData.value = { name: '', email: '', subject: '', message: '' }; // إعادة تعيين النموذج
};

onMounted(() => {
  // تهيئة الخريطة باستخدام Leaflet
  const map = L.map('map').setView([33.8869, 35.5131], 13); // بيروت كمركز افتراضي

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([33.8869, 35.5131]).addTo(map)
    .bindPopup('موقع مقرنا الرئيسي').openPopup();
});
</script>