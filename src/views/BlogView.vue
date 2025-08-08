// src/views/BlogView.vue
// صفحة الأخبار/المدونة
<template>
  <section class="py-20 bg-white dark:bg-gray-800 min-h-[80vh]">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">آخر الأخبار</h1>
      
      <div v-if="blogPosts.length === 0" class="text-center text-gray-500 dark:text-gray-400">
        <p>لا توجد أخبار للعرض حالياً.</p>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="post in blogPosts" :key="post.id" class="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-xl overflow-hidden">
          <img :src="post.imageUrl || 'https://via.placeholder.com/400'" :alt="post.title" class="w-full h-56 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ post.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ post.summary }}</p>
            <div class="flex justify-between items-center text-gray-400 text-xs">
              <span>{{ new Date(post.date).toLocaleDateString() }}</span>
              <a href="#" class="text-indigo-600 hover:underline">اقرأ المزيد</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getBlogPosts } from '@/services/localStorageService.js';

const blogPosts = ref([]);

onMounted(() => {
  blogPosts.value = getBlogPosts();
});
</script>