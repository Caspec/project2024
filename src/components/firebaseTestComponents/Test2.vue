<template>
  <div>
    <button @click="getData">Fetch Data</button>
    <pre v-if="userData">{{ userData }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { fetchFirebaseData } from '@/services/firebaseService';

export default defineComponent({
  name: 'FirebaseDataFetcher',
  setup() {
    const authStore = useAuthStore();

    const getData = async () => {
      await fetchFirebaseData();
    };

    const userData = computed(() => authStore);

    return { getData, userData };
  },
});
</script>
