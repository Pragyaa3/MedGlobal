// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();
// Firebase Setup
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
document.getElementById("applyNowForm").addEventListener("submit", async (e) => {
  e.preventDefault(); // Prevent page refresh

  // Get input values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const course = document.getElementById("course").value;
  const message = document.getElementById("message").value;

  try {
    // Add data to Firestore
    await addDoc(collection(db, "applications"), {
      fullName,
      email,
      phone,
      course,
      message,
      timestamp: new Date()
    });

    // Notify the user that the form is submitted
    document.getElementById("msg").innerText = "Application submitted successfully!";
    
    // Reset the form
    document.getElementById("applyNowForm").reset();
  } catch (error) {
    console.error("Error adding document: ", error);
    document.getElementById("msg").innerText = "Error submitting application.";
  }
});
