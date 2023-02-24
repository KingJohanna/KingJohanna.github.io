import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvOxLmq6syDGA5fJNHPs5VpdHJeZd1sd8",
  authDomain: "edaf90-project-movie.firebaseapp.com",
  projectId: "edaf90-project-movie",
  storageBucket: "edaf90-project-movie.appspot.com",
  messagingSenderId: "1048886304370",
  appId: "1:1048886304370:web:0ca8ac346519860a192ceb",
  measurementId: "G-DD5Q9N5VGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);