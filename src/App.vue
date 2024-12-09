<template>
  <div class="flex flex-col min-h-screen w-full">
    <AppHeader />
    <AppNavBar />

    <main class="flex-1 bg-gray-100 w-full px-4 py-6">
      <RouterView />
    </main>

  <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppNavBar from './components/AppNavBar.vue';
</script>
