// src/router/index.js
// إعداد مسارات التنقل للموقع.
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import BlogView from '@/views/BlogView.vue';
import ContactView from '@/views/ContactView.vue';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

const routes = [
  { path: '/', components: { default: HomeView, header: TheHeader, footer: TheFooter } },
  { path: '/about', components: { default: AboutView, header: TheHeader, footer: TheFooter } },
  { path: '/projects', components: { default: ProjectsView, header: TheHeader, footer: TheFooter } },
  { path: '/blog', components: { default: BlogView, header: TheHeader, footer: TheFooter } },
  { path: '/contact', components: { default: ContactView, header: TheHeader, footer: TheFooter } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


// src/services/localStorageService.js
// هذه الخدمة تقرأ وتكتب في نفس الـ localStorage الذي تستخدمه لوحة التحكم.
const STORAGE_KEY = 'admin_dashboard_data';

// جلب المشاريع من localStorage
export const getProjects = () => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      const data = JSON.parse(storedData);
      return data.projects || [];
    }
  } catch (e) {
    console.error("Could not parse projects from localStorage", e);
  }
  return [];
};

// جلب الأخبار من localStorage
export const getBlogPosts = () => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      const data = JSON.parse(storedData);
      return data.blogPosts || [];
    }
  } catch (e) {
    console.error("Could not parse blog posts from localStorage", e);
  }
  return [];
};

// حفظ رسائل التواصل في localStorage
export const saveSubmission = (newSubmission) => {
  try {
    let data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { projects: [], submissions: [], blogPosts: [] };
    if (!data.submissions) {
      data.submissions = [];
    }
    data.submissions.push(newSubmission);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error("Could not save submission to localStorage", e);
  }
};
