var contenedor = document.querySelector("#caja")
var obtenerDatos = () => fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
obtenerDatos()
.then((datos)=>
    datos.json()
)
.then((respuesta)=>{
    cargarDatos(respuesta[0])
})
var cargarDatos = (a) => {
    var{character,image,quote}=a
    var contenedor2= document.createElement("div")
    var foto= document.createElement("img")
    var titulo= document.createElement("h1")
    var frase= document.createElement("p")
    foto.src=image
    foto.className="rounded mx-auto d-block"
    titulo.textContent=character
    titulo.className="text-center text-danger"
    frase.textContent=quote
    frase.className="text-center text-danger"
    contenedor2.appendChild(foto)
    contenedor2.appendChild(titulo)
    contenedor2.appendChild(frase)
    contenedor.appendChild(contenedor2)
}

