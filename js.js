let fondo = document.querySelector(".fondo")
let rueda = document.querySelector(".rueda-i")
let ruedad = document.querySelector(".rueda-d")
let humo = document.querySelector(".humo")

fondo.addEventListener("click", cambiarFondo)

function cambiarFondo() {
    fondo.classList.add("mover")
    rueda.addEventListener("click", moverRuedas)
    
    function moverRuedas() {
        rueda.classList.add("rueda-move")
        ruedad.classList.add("rueda-move")    
        humo.classList.remove("ocultar")
    }
}
