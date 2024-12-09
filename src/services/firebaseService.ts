import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

export const fetchFirebaseData = async () => {
  const authStore = useAuthStore();

  if (!authStore.accessToken) {
    console.error('No access token available.');
    return null;
  }

  try {
    // Construct the URL for the Firebase Realtime Database
    const databaseUrl = `https://${import.meta.env.VITE_FIREBASE_PROJECT_ID}-${import.meta.env.VITE_FIREBASE_LOCATION}/${import.meta.env.VITE_FIREBASE_PATH}.json?auth=${authStore.accessToken}`;

    // Send a GET request with the access token as a query parameter
    const response = await axios.get(databaseUrl);

    console.log('Data fetched from Firebase:', response.data);

    // Store data in the Pinia store
    //authStore.setUserData(response.data);

    return response.data;
  } catch (error) {
    console.error('Error fetching data from Firebase:', error);
    return null;
  }
};
