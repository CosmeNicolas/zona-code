let formularioBusqueda = document.getElementById('formularioDeBusqueda')
let resultadoRenglonBusqueda = document.getAnimations.getElementById('renglonBusqueda')


formularioBusqueda.addEventListener('submit', (e)=>{
  e.preventDefault()
})

//ver queryselector articulo 

//evento "keyup" - indica q letra fue presionada al soltar
document.addEventListener('keyup', (e)=>{
  if(e.key === "Escaoe") e.target.value = "";
  if(e.target.matches('#renglonBusqueda')){
    console.log('se uso una tecla')
  }
  
})