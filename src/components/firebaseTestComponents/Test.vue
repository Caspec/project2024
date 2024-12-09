<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useAuthStore } from "../../stores/auth";

export default defineComponent({
  name: "TestAuthButton",
  setup() {
    const authStore = useAuthStore();

    // Initialize the auth listener on mount
    onMounted(() => {
      authStore.initializeAuthListener();
    });

    return {
      user: authStore.user,
      signIn: authStore.signIn,
      signOut: authStore.signOut,
    };
  },
});
</script>

<template>
  <div class="auth-test">
    <h1>Firebase Auth Test</h1>

    <!-- Sign In Button -->
    <button @click="signIn" class="sign-in-button">
      Sign In Anonymously
    </button>

    <!-- Sign Out Button -->
    <button v-if="user" @click="signOut" class="sign-out-button">
      Sign Out
    </button>

    <!-- Display User Info -->
    <div v-if="user" class="user-info">
      <h2>Authenticated User</h2>
      <p><strong>UID:</strong> {{ user }}</p>
    </div>
    <div v-else>
      <p>No user is signed in.</p>
    </div>

    </div>
</template>

<style scoped>
.auth-test {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
}

.sign-in-button, .sign-out-button {
  background-color: #6200ee;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

.sign-in-button:hover,
.sign-out-button:hover {
  background-color: #3700b3;
}

.user-info {
  margin-top: 20px;
  text-align: center;
}

.error-message {
  margin-top: 20px;
}
</style>
