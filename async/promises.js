function hola(nombre){
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      console.log('Hola, ' + nombre)
      resolve(nombre)
    }, 1000)
  })
}

function hablar(nombre){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log('Bla bla bla')
      //resolve(nombre)
      reject('Hay un error')
    }, 100);
  })
}

function adios(nombre){
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
      console.log('Adios, ' + nombre)
      resolve()
    }, 1000)
  })
}

console.log('Iniciando')
hola('Jose')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre)=>{
    console.log('Terminado')
  })
  .catch(error=>{
    console.log('Ha habido un error')
    console.error(error)
  })

//Diferencia entre promsesas y callbacks: pueden ser anidadas
//Siempre después de poner un .then colocar al final un .catch para tomar el error 