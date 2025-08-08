// src/App.vue
// المكون الأساسي الذي يستقبل جميع المكونات والصفحات
<template>
  <div class="flex flex-col min-h-screen font-inter bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
    <router-view name="header"></router-view>
    <main class="flex-grow">
      <router-view />
    </main>
    <router-view name="footer"></router-view>
  </div>
</template>

<script setup>
// لا حاجة لـ script هنا، `router-view` يتولى العرض
</script>