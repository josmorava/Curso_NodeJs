function hola(nombre, miCallback){
  setTimeout(function() {
    console.log('Hola, ' + nombre)
    miCallback()
  }, 1000)
}

function adios(nombre, otroCallback){
  setTimeout(function(){
    console.log('Adios, ' + nombre)
    otroCallback()
  }, 1000)
}

console.log('Iniciando proceso...')
hola('Jose', function(){
  adios('Jose', function(){
    console.log('Terminando proceso...')
  })
})
