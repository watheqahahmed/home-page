// src/views/ProjectsView.vue
// صفحة عرض جميع المشاريع مع إمكانية التصفية.
<template>
  <section class="py-20 bg-gray-100 dark:bg-gray-900 min-h-[80vh]">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">مشاريعنا</h1>
      
      <!-- Filter buttons -->
      <div class="flex justify-center flex-wrap gap-4 mb-10">
        <button
          @click="selectedCategory = 'All'"
          :class="{ 'bg-indigo-600 text-white': selectedCategory === 'All', 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white': selectedCategory !== 'All' }"
          class="px-6 py-2 rounded-full font-medium transition-colors duration-200"
        >
          الكل
        </button>
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="{ 'bg-indigo-600 text-white': selectedCategory === category, 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white': selectedCategory !== category }"
          class="px-6 py-2 rounded-full font-medium transition-colors duration-200"
        >
          {{ category }}
        </button>
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center text-gray-500 dark:text-gray-400">
        <p>لا توجد مشاريع للعرض حالياً.</p>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in filteredProjects" :key="project.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
          <img :src="project.imageUrl || 'https://via.placeholder.com/400'" :alt="project.title" class="w-full h-56 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { getProjects } from '@/services/localStorageService.js';

const allProjects = ref([]);
const selectedCategory = ref('All');

const categories = computed(() => {
  const allCategories = allProjects.value.map(p => p.category);
  return [...new Set(allCategories)].filter(cat => cat);
});

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return allProjects.value;
  }
  return allProjects.value.filter(p => p.category === selectedCategory.value);
});

onMounted(() => {
  allProjects.value = getProjects();
});
</script>