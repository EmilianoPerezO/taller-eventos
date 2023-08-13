function saludo() {
    alert('Hola!');
    event.stopPropagation()
}

var div = document.getElementById("idDiv");
div.addEventListener("click", function () {
    alert("Hola! Soy el div");
});