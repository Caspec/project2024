<template>
  <nav class="w-full bg-gray-800 text-white py-3">
    <div class="flex justify-between px-4">
      <ul class="flex space-x-4">
        <li>
          <router-link to="/" class="hover:text-gray-400">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/transactions" class="hover:text-gray-400">Transactions</router-link>
        </li>
        <li>
          <router-link to="/reports" class="hover:text-gray-400">Reports</router-link>
        </li>
      </ul>
      <div>
        <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Login</button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'AppNavBar'
});
</script>
