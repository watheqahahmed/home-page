// src/components/TheFooter.vue
// تذييل الصفحة للموقع بتصميم جديد وأنيق.
<template>
  <footer class="bg-gray-800 dark:bg-gray-950 text-white py-12 mt-auto">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- قسم الشعار ومعلومات المؤسسة -->
        <div class="flex flex-col items-center md:items-start text-center md:text-right">
          <router-link to="/" class="flex items-center space-x-2 rtl:space-x-reverse mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
            <span class="text-3xl font-bold text-white">اسم المؤسسة</span>
          </router-link>
          <p class="text-gray-400 max-w-sm">
            مؤسسة خيرية تهدف إلى إحداث تغيير إيجابي ومستدام في المجتمع من خلال مشاريعنا الإنسانية.
          </p>
        </div>

        <!-- قسم الروابط السريعة -->
        <div class="text-center md:text-right">
          <h4 class="text-xl font-bold text-white mb-4">روابط سريعة</h4>
          <ul class="space-y-2 text-gray-400">
            <li>
              <router-link to="/" class="hover:text-indigo-400 transition-colors duration-200">الرئيسية</router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-indigo-400 transition-colors duration-200">من نحن</router-link>
            </li>
            <li>
              <router-link to="/projects" class="hover:text-indigo-400 transition-colors duration-200">المشاريع</router-link>
            </li>
            <li>
              <router-link to="/blog" class="hover:text-indigo-400 transition-colors duration-200">الأخبار</router-link>
            </li>
            <li>
              <router-link to="/contact" class="hover:text-indigo-400 transition-colors duration-200">تواصل معنا</router-link>
            </li>
          </ul>
        </div>

        <!-- قسم التواصل -->
        <div class="text-center md:text-right">
          <h4 class="text-xl font-bold text-white mb-4">تواصل معنا</h4>
          <p class="text-gray-400 mb-2">
            **العنوان:** شارع الأمل، مبنى 404، المدينة.
          </p>
          <p class="text-gray-400 mb-2">
            **الهاتف:** +123 456 7890
          </p>
          <p class="text-gray-400 mb-2">
            **البريد الإلكتروني:** info@your-org.com
          </p>
        </div>
        
      </div>
      
      <!-- خط فاصل -->
      <hr class="border-gray-700 dark:border-gray-700 my-8" />
      
      <!-- قسم حقوق النشر والشبكات الاجتماعية -->
      <div class="flex flex-col md:flex-row justify-between items-center text-center md:text-right">
        <p class="text-gray-400 dark:text-gray-500 mb-4 md:mb-0">
          &copy; 2024 اسم المؤسسة. جميع الحقوق محفوظة.
        </p>
        <div class="flex justify-center space-x-6 rtl:space-x-reverse">
          <a href="#" class="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c-.6.3-1.2.7-2 1-1.2.6-2.5 1-4.3 1-3.6 0-6.1-2.4-6.1-5.1 0-2.4 1.3-4.1 3.5-4.1 1.7 0 3 1.3 3.6 2.5.8-1 1.4-2.1 2.3-3.2 1.4.3 2.5 1.5 3 2.9.2.6.4 1.2.6 1.8.8.4 1.5.8 2.3 1.2.2.4.3.8.5 1.2.2.4.3.8.4 1.2.2.4.3.8.4 1.2z"></path></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-indigo-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
