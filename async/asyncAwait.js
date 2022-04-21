async function hola(nombre){
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      console.log('Hola, ' + nombre)
      resolve(nombre)
    }, 1000)
  })
}

async function hablar(nombre){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      console.log('Bla bla bla')
      //resolve(nombre)
      resolve(nombre)
    }, 100);
  })
}

async function adios(nombre){
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
      console.log('Adios, ' + nombre)
      resolve()
    }, 1000)
  })
}
async function main(){
  let nombre = await hola('Jose')
  await hablar()
  await hablar()
  await hablar()
  await hablar()
  await adios(nombre)
  console.log('Terminando')

}
console.log('Empezando')
main()

//Funciones asincronas y await espera para ejecutar esa linea de comando