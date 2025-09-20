
function send(event){
    event.preventDefault();
    
let reviews = document.getElementById("reviews");
let message = document.getElementById("message").value;
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

let container = document.createElement("div");
container.className = "container";
container.innerHTML = `
     <h2>Name : ${name}</h2>
     <p>${message}</p>

`
reviews.appendChild(container);

}



