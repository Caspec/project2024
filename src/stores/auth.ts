import { defineStore } from "pinia";
import { ref } from "vue";
import { getAuth, signInAnonymously, onAuthStateChanged, getIdToken } from "firebase/auth";
import { auth } from "../auth/firebase";

export const useAuthStore = defineStore("auth", () => {
  const accessToken = ref<string | null>(null);
  const user = ref<string | null>(null);

  // Fetch and set the ID Token
  const fetchAccessToken = async () => {
    const currentUser = getAuth().currentUser;
    if (currentUser) {
      try {
        accessToken.value = await getIdToken(currentUser, true);
      } catch (error: any) {
        console.error("Failed to fetch access token:", error.message);
      }
    }
  };

  // Firebase Authentication Listener
  const initializeAuthListener = () => {
    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        await fetchAccessToken(); // Fetch token when user signs in
      } else {
        accessToken.value = null; // Clear token on sign-out
      }
    });
  };

  // Anonymous Sign-In
  const signIn = async () => {
    try {
      await signInAnonymously(auth);
    } catch (error: any) {
      console.error("Sign-in failed:", error.message);
    }
  };

  // Sign-Out
  const signOut = async () => {
    try {
      await getAuth().signOut();
      accessToken.value = null;
    } catch (error: any) {
      console.error("Sign-out failed:", error.message);
    }
  };

  return {
    accessToken,
    initializeAuthListener,
    signIn,
    signOut,
    fetchAccessToken,
    user,
  };
});
