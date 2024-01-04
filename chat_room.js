//var firebaseConfig = {apiKey: "AIzaSyCRH-UImGh4W87Ht2XeOvR9etDgp8DHzzo", authDomain: "lets-chat-web-app-845d4.firebaseapp.com",projectId: "lets-chat-web-app-845d4", storageBucket: "lets-chat-web-app-845d4.appspot.com",  messagingSenderId: "133892366238", appId: "1:133892366238:web:c694fd8a64865492ae808f"};
var firebaseConfig = {
    apiKey: "AIzaSyBLT1dJtAWItFUuf7JedVnvb76iWzS4z10",
    authDomain: "kwitter-364f7.firebaseapp.com",
    databaseURL: "https://kwitter-364f7-default-rtdb.firebaseio.com",
    projectId: "kwitter-364f7",
    storageBucket: "kwitter-364f7.appspot.com",
    messagingSenderId: "880195330169",
    appId: "1:880195330169:web:2cf1035d3030c615c3f4a8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
    room_name= document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "chat_page.html";

  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   
    console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;


   //End code
   });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "chat_page.html";
}
