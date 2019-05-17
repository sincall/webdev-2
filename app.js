console.log("Hello World!");
alert("HEllo1");

var target = document.getElementById("target");
target.innerText = "hi!";

var button = document.getElementById("button");
button.addEventListener('click', function(){
    alert("yes, thank u for clicking me")
});

var username = document.getElemetnById("username");
if (username.value == "admin") {
        alert("welcome");
}     else{
        alert("u r not welcome!");
}
});
