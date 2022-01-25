var firebaseConfig = {
      apiKey: "AIzaSyAIBu7Vh74FCNeCt5EpvZVhmDP7f-29750",
      authDomain: "kwitter-2-14088.firebaseapp.com",
      databaseURL: "https://kwitter-2-14088-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-14088",
      storageBucket: "kwitter-2-14088.appspot.com",
      messagingSenderId: "24827489361",
      appId: "1:24827489361:web:fadb53346306ffed6a9c70"
    };

    firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("room name -" + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage/setItem("room_name", name);
window.location = "kwitter_page.html";
}
