<script setup>
import MainLayout from "@/Layouts/MainLayout.vue";
import {Head} from '@inertiajs/vue3';

defineProps({
  auth: Object,
})

</script>

<template>
  <MainLayout>
    <div class="text-center">
      <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl">
        Your Literary Journey Awaits
      </h1>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Track your reading, discover new books, and connect with fellow readers
      </p>
    </div>
  </MainLayout>

</template>

<style scoped>

</style>