// src/components/TheHeader.vue
// شريط التنقل العلوي للموقع مع إضافة زر لوحة التحكم
<template>
  <header class="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <router-link to="/" class="flex items-center space-x-2 rtl:space-x-reverse">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
          <span class="text-2xl font-bold text-gray-900 dark:text-white">اسم المؤسسة</span>
        </router-link>
      </div>
      
      <!-- روابط التنقل للأجهزة المكتبية -->
      <div class="hidden md:flex space-x-6 rtl:space-x-reverse">
        <router-link to="/" class="flex items-center px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 ease-in-out" active-class="text-indigo-600 dark:text-indigo-400 font-bold">
          الرئيسية
        </router-link>
        <router-link to="/about" class="flex items-center px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 ease-in-out" active-class="text-indigo-600 dark:text-indigo-400 font-bold">
          من نحن
        </router-link>
        <router-link to="/projects" class="flex items-center px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 ease-in-out" active-class="text-indigo-600 dark:text-indigo-400 font-bold">
          المشاريع
        </router-link>
        <router-link to="/blog" class="flex items-center px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 ease-in-out" active-class="text-indigo-600 dark:text-indigo-400 font-bold">
          الأخبار
        </router-link>
        <router-link to="/contact" class="flex items-center px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 ease-in-out" active-class="text-indigo-600 dark:text-indigo-400 font-bold">
          تواصل معنا
        </router-link>

      
 <!-- زر لوحة التحكم -->
      <a href="/dashboard/" target="_blank" class="flex items-center px-4 py-2 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-150 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 rtl:mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm-2-2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z"/></svg>
          الإدارة
      </a>
    </div>      
      
      

      <!-- زر قائمة الجوال -->
      <div class="md:hidden flex items-center space-x-2 rtl:space-x-reverse">
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-gray-500 dark:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-300">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </div>

    <!-- محتوى قائمة الجوال -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white dark:bg-gray-800 px-2 pt-2 pb-4 space-y-1">
      <router-link to="/" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 ease-in-out" active-class="text-indigo-600 dark:text-indigo-400 font-bold">الرئيسية</router-link>
      <router-link to="/about" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 ease-in-out" active-class="text-indigo-600 dark:text-indigo-400 font-bold">من نحن</router-link>
      <router-link to="/projects" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 ease-in-out" active-class="text-indigo-600 dark:text-indigo-400 font-bold">المشاريع</router-link>
      <router-link to="/blog" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 ease-in-out" active-class="text-indigo-600 dark:text-indigo-400 font-bold">الأخبار</router-link>
      <router-link to="/contact" @click="isMobileMenuOpen = false" class="block px-3 py-2 rounded-md font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150 ease-in-out" active-class="text-indigo-600 dark:text-indigo-400 font-bold">تواصل معنا</router-link>
      <a href="/dashboard" @click="isMobileMenuOpen = false" class="mt-4 block px-3 py-2 rounded-md text-center bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-150 ease-in-out">الإدارة</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const isMobileMenuOpen = ref(false);
</script>
