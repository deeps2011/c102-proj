// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCRH-UImGh4W87Ht2XeOvR9etDgp8DHzzo",
    authDomain: "lets-chat-web-app-845d4.firebaseapp.com",
    projectId: "lets-chat-web-app-845d4",
    storageBucket: "lets-chat-web-app-845d4.appspot.com",
    messagingSenderId: "133892366238",
    appId: "1:133892366238:web:c694fd8a64865492ae808f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);




function addUser()
{
   user_name = document.getElementById("user_name").value;
   
    /*
    localStorage.setItem("user_name", user_name);
    

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



