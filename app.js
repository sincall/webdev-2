console.log("Hello World!");
alert("HEllo1");

var target = document.getElementById("target");
target.innerText = "hi!";

var button = document.getElementById("button");
button.addEventListener('click', function(){
    var username = document.getElemetnById("username");
    if (username.value == "admin") {
        alert("welcome");
}     else{
        alert("u r not welcome!");
        for (var i = 0; i < document.body.children.length ; i++) {
            var element = document.body.children[i];
            element.classList.add("red");
        }
}
});

document.create.element
