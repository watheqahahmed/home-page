// src/views/HomeView.vue
// الصفحة الرئيسية
<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-indigo-600 dark:bg-indigo-800 text-white py-24 text-center">
      <div class="container mx-auto px-6">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">نحن نبني الأمل معاً</h1>
        <p class="text-xl md:text-2xl mb-8 animate-slide-up">مؤسسة غير ربحية تهدف إلى إحداث تغيير إيجابي في حياة الناس.</p>
        <router-link to="/contact" class="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
          انضم إلينا
        </router-link>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-20 bg-gray-100 dark:bg-gray-900">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">من نحن</h2>
        <p class="text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
          منذ تأسيسنا، ونحن نعمل بجد لتحقيق أهدافنا الإنسانية. نؤمن بأن كل فرد يستحق حياة كريمة، ونسعى لتحقيق ذلك من خلال مشاريعنا المستدامة التي تغطي التعليم والصحة والمساعدات الإغاثية.
        </p>
      </div>
    </section>
    
    <!-- Featured Projects Section -->
    <section class="py-20 bg-white dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">مشاريعنا المميزة</h2>
        <div v-if="featuredProjects.length === 0" class="text-center text-gray-500 dark:text-gray-400">
          <p>لا توجد مشاريع مميزة للعرض حالياً.</p>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in featuredProjects" :key="project.id" class="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <img :src="project.imageUrl || 'https://via.placeholder.com/400'" :alt="project.title" class="w-full h-56 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Recent Blog Posts -->
    <section class="py-20 bg-gray-100 dark:bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">آخر الأخبار</h2>
        <div v-if="recentBlogPosts.length === 0" class="text-center text-gray-500 dark:text-gray-400">
          <p>لا توجد أخبار جديدة حالياً.</p>
        </div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="post in recentBlogPosts" :key="post.id" class="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <img :src="post.imageUrl || 'https://via.placeholder.com/400'" :alt="post.title" class="w-full h-56 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ post.title }}</h3>
              <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">{{ post.summary }}</p>
              <div class="flex justify-between items-center text-gray-400 text-xs">
                <span>{{ new Date(post.date).toLocaleDateString() }}</span>
                <router-link to="/blog" class="text-indigo-600 hover:underline">اقرأ المزيد</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getProjects, getBlogPosts } from '@/services/localStorageService.js';

const projects = ref([]);
const featuredProjects = ref([]);
const blogPosts = ref([]);
const recentBlogPosts = ref([]);

onMounted(() => {
  // جلب المشاريع من localStorage
  projects.value = getProjects();
  featuredProjects.value = projects.value.slice(0, 3); // عرض أول 3 مشاريع فقط

  // جلب الأخبار من localStorage
  blogPosts.value = getBlogPosts();
  recentBlogPosts.value = blogPosts.value.slice(0, 3); // عرض آخر 3 أخبار
});
</script>

