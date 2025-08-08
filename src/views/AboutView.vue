// src/views/AboutView.vue
// صفحة من نحن
<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">من نحن</h1>

    <!-- Mission, Vision, Values -->
    <section class="mb-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h3 class="text-2xl font-semibold text-indigo-600 mb-2">رسالتنا</h3>
          <p class="text-gray-600 dark:text-gray-400">توفير الدعم والمساعدة للمحتاجين لتحقيق التنمية المستدامة.</p>
        </div>
        <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h3 class="text-2xl font-semibold text-indigo-600 mb-2">رؤيتنا</h3>
          <p class="text-gray-600 dark:text-gray-400">مجتمع يتمتع فيه كل فرد بفرص متساوية وحياة كريمة.</p>
        </div>
        <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <h3 class="text-2xl font-semibold text-indigo-600 mb-2">قيمنا</h3>
          <p class="text-gray-600 dark:text-gray-400">الشفافية، العدالة، الاحترام، والتعاطف.</p>
        </div>
      </div>
    </section>

    <!-- Team Profiles -->
    <section class="mb-12">
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">فريقنا</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="member in team" :key="member.name" class="bg-white dark:bg-gray-800 rounded-xl shadow-lg text-center p-6">
          <img :src="member.imageUrl" :alt="member.name" class="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
          <h4 class="text-xl font-bold text-gray-900 dark:text-white">{{ member.name }}</h4>
          <p class="text-indigo-600 font-medium">{{ member.role }}</p>
          <p class="text-gray-600 dark:text-gray-400 mt-2 text-sm">{{ member.bio }}</p>
        </div>
      </div>
    </section>

    <!-- History/Timeline (Static data for now) -->
    <section>
      <h2 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">تاريخنا</h2>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
        <li v-for="(event, index) in history" :key="index" class="mb-10 ml-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -right-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ event.year }}</time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ event.title }}</h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">{{ event.description }}</p>
        </li>
      </ol>
    </section>
  </div>
</template>

<script setup>
// بيانات الفريق والتاريخ ثابتة حالياً
const team = [
  { name: 'علي محمد', role: 'الرئيس التنفيذي', imageUrl: 'https://placehold.co/150x150/60a5fa/ffffff?text=AM' },
  { name: 'فاطمة أحمد', role: 'مديرة المشاريع', imageUrl: 'https://placehold.co/150x150/f87171/ffffff?text=FA' },
  { name: 'سارة حسين', role: 'مسؤولة التواصل', imageUrl: 'https://placehold.co/150x150/34d399/ffffff?text=SH' },
  { name: 'خالد ناصر', role: 'مدير مالي', imageUrl: 'https://placehold.co/150x150/a78bfa/ffffff?text=KN' },
];

const history = [
  { year: '2010', title: 'تأسيس المؤسسة', description: 'بدأت المؤسسة بجهود تطوعية لدعم الأسر المحتاجة في الحي.' },
  { year: '2015', title: 'مشروع حفر الآبار', description: 'تم إطلاق أول مشروع كبير لتوفير المياه النظيفة للمناطق الريفية.' },
  { year: '2020', title: 'حملة الإغاثة', description: 'تم توسيع نطاق العمل ليشمل الإغاثة الطارئة للمتضررين من الكوارث.' },
];
</script>