let formularioBusqueda = document.getElementById('formularioDeBusqueda')
let resultadoRenglonBusqueda = document.getElementById('renglonBusqueda')


formularioBusqueda.addEventListener('submit', (e)=>{
  e.preventDefault()
})

//ver queryselector articulo 
const productosTotales = document.querySelectorAll(".producto-card")

console.log(productosTotales)


//evento "keyup" - indica q letra fue presionada al soltar
document.addEventListener('keydown', (e)=>{
  if(e.key === "Escape") e.target.value = "";
  if(e.target.matches('#renglonBusqueda')){
    console.log('se uso una tecla')
    productosTotales.forEach((producto)=>{
      producto.children[1].children[0].includes(e.target.value)
    })
  }
  
})