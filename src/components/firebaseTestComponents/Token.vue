<template>
  <div>
    <button @click="getToken">Get ID Token</button>
    <p v-if="token">ID Token: {{ token }}</p>
    <p v-if="error" class="error">Error: {{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { getAuth } from 'firebase/auth';

export default defineComponent({
  name: 'TokenTest',
  setup() {
    const token = ref<string | null>(null);
    const error = ref<string | null>(null);

    const getToken = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          // Retrieve the ID token
          token.value = await user.getIdToken();
        } else {
          error.value = 'No user is signed in.';
        }
      } catch (err) {
        error.value = 'Error fetching the ID token.';
        console.error(err);
      }
    };

    return {
      token,
      error,
      getToken,
    };
  },
});
</script>

<style scoped>
.error {
  color: red;
}
</style>
