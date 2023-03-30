/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
  let arreglo = nombre.split ('');
  arreglo [0] = arreglo [0].toUpperCase();
  let nuevaVariable = arreglo.join ('');
  return nuevaVariable

}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código: 
   
   var invocarCallback = cb ()
   
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
    var operacion1 = function (num1) {
      return num1
    }
    var operacion2 = function (num2) {
      return num2
    }
    var operacionFinal = function (cb1,cb2) {
      return cb1() + cb2()
    }
    var resultado = cb(operacionFinal, operacion1, operacion2)
    return resultado
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código: 
   var suma = 0;
   for (var i=0; i < arrayOfNumbers.length; i+=1 ){
    suma += arrayOfNumbers[i];
   } cb (suma)

   }


function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (let arrayElement of array) {
      cb (arrayElement)
   }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var mapReturn = []
   for (let arrayElement of array){
      mapReturn.push(cb(arrayElement))
   }
   return mapReturn
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var identificar = []
   for (let arrayElement of arrayOfStrings){ 
      if (arrayElement[0] === 'a') identificar.push(arrayElement);
   }
   return identificar
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
