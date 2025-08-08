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
