// src/firebase/firebase.config.js

// Firebase Core & Services
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported as isAnalyticsSupported } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyBhrfktz0uhzG71ixXm--Bm1a_0y4UBY3M",
  authDomain: "nittosodai-55fe2.firebaseapp.com",
  projectId: "nittosodai-55fe2",
  storageBucket: "nittosodai-55fe2.appspot.com",
  messagingSenderId: "523509085734",
  appId: "1:523509085734:web:926d894d660cd2441758e7",
  measurementId: "G-P2Y2MKWFDK"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Optional: Initialize Analytics only if supported
let analytics;
isAnalyticsSupported().then((yes) => {
  if (yes) {
    analytics = getAnalytics(app);
  }
});

// Export Firebase Services
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
