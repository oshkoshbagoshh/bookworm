<script setup>
import {Link} from '@inertiajs/vue3';
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow">

      <!--      Nav   -->
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <Link
                  href="/"
                  class="text-2xl font-bold text-blue-600">
                Bookworm
              </Link>
            </div>
          </div>
          <div class="flex items-center">
            <Link
                href="/privacy-policy"
                class="text-gray-600 hover:text-gray-900 px-3 py-2">
              Privacy Policy
            </Link>
            <Link
                href="/terms-of-service"
                class="text-gray-600 hover:text-gray-900 px-3 py-2">
              Terms of Service
            </Link>
          </div>
        </div>
      </nav>
    </header>

    <!--  Section   -->

    <main class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <slot/>
    </main>

    <!--    Footer -->
    <footer class="bg-white mt-12">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <p class="text-center text-gray-500">
          © {{ new Date().getFullYear() }} Bookworm. All rights reserved.
        </p>
      </div>
    </footer>
  </div>

</template>

<style scoped>

</style>