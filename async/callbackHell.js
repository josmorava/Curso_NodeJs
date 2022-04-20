function hola(nombre, miCallback){
  setTimeout(function() {
    console.log('Hola, ' + nombre)
    miCallback()
  }, 1000)
}

function hablar(callbackHablar){
  setTimeout(() => {
    console.log('Bla bla bla')
    callbackHablar()
  }, 100);
}

function adios(nombre, otroCallback){
  setTimeout(function(){
    console.log('Adios, ' + nombre)
    otroCallback()
  }, 1000)
}

function conversacion(nombre, veces, callback){
  if(veces > 0){
    hablar(()=>{
      conversacion(nombre, --veces, callback)
    })
  }else{
    adios(nombre, callback)
  }
  
}

console.log('Iniciando')
hola('Jose', (nombre)=>{
  conversacion(nombre, 3, ()=>{
    console.log('Terminado')
  })
})

//- 

// console.log('Iniciando proceso...')
// hola('Jose', function(){

//   hablar(()=>{
//     hablar(function (){
//       hablar(function(){
//         adios('Jose', function(){
//           console.log('Terminando proceso...')
//         }) 
//       })
//     })
//   })
  
// })
