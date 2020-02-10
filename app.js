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




/*fetch( 'https://regres.in/api/users' , {
    method: 'GET',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify {
        name:'user1'
    } 
})
.then(res => {
    if (res.ok) {
        console.log("Success") 
    }else {
        console.log("failed")
    }
})
    res.json())
.then(data => console.log(data)) */


fetch('https://reqres.in/api/users')
.then(res => res.json())
.then(data => console.log(data)) 


fetch('http://example.com/movies.json')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
