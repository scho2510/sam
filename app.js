var acc = document.getElementsByClassName("accordion");
var i;


var objPeople = [
    {
        username: "sam",
        password: "apple"
    },
    {
        username: "david",
        password: "pear"
    },
    {
        username: "chris",
        password: "blueberry"
    }
]

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    for(i=0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + " is logged in!")
            return
        }        
    }
    console.log("incorrect username or password!")
}


