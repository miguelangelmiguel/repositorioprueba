// Importante: No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
// código dentro de las funciones ya definidas.


function soloNumeros(array) {
  // La manera mas eficiente que consegui, investigando un poco sobre metodos
  return array.filter( item => typeof item === 'number')
   
  //   Otra manera podria ser:
  //    let numerossolos = [];
  //    for (let i = 0; i < array.length; i++) {
   //    if (typeof array[i] === 'number') {
     //   numerossolos.push(array[i]);
    //      } 
  //        }
    //       return numerossolos;
    
  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:
    
  
}

function sumaTodos(array) {

  let inicio = array[0];
  let fin = [array[1]];
  let sumando = 0;
  for ( let i = inicio; i <= fin; i++) {
    sumando += i;
  }
  return sumando
  // La funcion llamada 'sumaTodos' recibe como argumento un array con dos numeros
  // y debe devolver la suma total entre todos los numeros dentro de ese rango
  // ej:
  // sumaTodos([1,3]) => 1 + 2 + 3 = 6
  // Nota: Los numeros estan ordenados de menor a mayor.

  // Tu código aca:
  
}

function checkInventario(inventario, item) {  
  // Esto puede ser undefined
  /**
   * encontrado: Object || undefined
   */
  let valorPaRetornar = 0;
  const encontrado = (inventario.find((elemento)=>elemento.nombre === item));

  if(encontrado){
    valorPaRetornar = encontrado.cantidad
  }
  
  return valorPaRetornar;

  /**
   * operador ternario
   * "?" representa un if
   * ":" representa un else
   * la primera sentencia "encontrado.cantidad" representa el valor positivo
   * la segunda sentencia "0" representa el valor negativo
   */
   //return  encontrado ? encontrado.cantidad : 0;

  /*  
  const encontrado = (inventario.find(function(element){
    return element.nombre === item
  })) 
  return  encontrado ? encontrado.cantidad : 0;
  */
  
  
  
  // La funcion 'checkInventario' recibe como argumento un array de objetos llamado 'inventario' y el nombre de un item llamado 'item'
  // Cada objeto tiene una propiedad 'nombre' y 'cantidad'.
  // La funcion debe devolver la cantidad de items que hay.
  // Si el item no existe la funcion tiene que devolver 0 (cero).
  // Ej:
  // var inventario = [
  //   {
  //     nombre: 'tenedor',
  //     cantidad: 6
  //   },
  //   {
  //     nombre: 'cuchara',
  //     cantidad: 4,
  //   },
  // ]
  // checkInventario(inventario, 'tenedor') devuelve => 6

  // Tu código aca:
  
}

function numeroSimetrico(num) {
  let invertirelnumero = Number(num.toString().split('').reverse().join(''))
  if( num === invertirelnumero) {
    return true;
  } return false;
  

  // La funcion llamada 'numeroSimetrico' recibe como argumento un numero entero 'num'
  // Esta devuelve true o false dependiendo de si el número es simétrico o no. 
  // Un número es simétrico cuando es igual a su reverso.
  // Ej:
  // numeroSimetrico(11711) devuelve true

  // Tu código:

}

function index() {
  Array.prototype.encontraIndex = function (elemento, inicio = 0) {
    if (inicio > this.length - 1) {
    }
    for (let index = inicio; index < this.length; index++) {
      if (this[index] === elemento)
        return index
    } 
    return -1
  }
  
  // Escribi una función encontraIndex en el prototipo de Arrays,
  // que recibe un elemento.
  // La function tiene que devolver el indice (index) del primer elemento que coincida con el pasado como parametro dentro del array.
  // Si el elemento se repite dentro del Array, este devuelve el indice del Primer elemento.
  // Si no existe ese elemento la funcion debe devolver -1
  // NO USAR LA FUNCION indexOf DE LOS ARREGLOS.
  // ej:
  // var numeros = [5, 6, 4, 65, 8, 4]
  // numeros.encontraIndex(4) debe devolver 2.
  // ya que el numero 4 se encuentra en la posicion 2 dentro del array.
  // numeros.encontraIndex(23) debe devolver -1 ya que ese elemento no existe en ese array.

  // Tu código aca:

};



function crearClasePersona() {
  
  // Crear una clase para construir objeto de tipo Persona.
  // el constructor debe recibir:
  // nombre (string) , edad (integer) , hobbies (array de strings) , amigos (array de objetos)
  // Esta funcion debe retonar la clase Persona.

  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      this.nombre = nombre;
      this.edad = edad;
      this.hobbies = hobbies;
      this.amigos = amigos;    
  }

    addFriend(nombre,edad) {
      let amiguitoNuevo = {nombre,edad}

      this.amigos.push(amiguitoNuevo)
      
      // el metodo addFriend recibe un string nombre y un entero edad y debe agregar un objeto:
      // { nombre: nombre, edad: edad} al arreglo de amigos de la persona.
      // no debe retornar nada.
      
    }

    addHobby(hobby) {
      this.hobbies.push(hobby)
      // este método debe agregar un hobby (hobby) al arreglo de hobbies de la persona.
      // no debe retornar nada.

    }

    getFriends() {
      return this.amigos.map(e=>{
        return e.nombre
      })
      // Escribe una función que retorne un arreglo con sólo los nombres del arreglo de amigos
      // de la persona.
      // Ej:
      // persona.getFriends() // retorna ['toni', 'Leo', 'Manu']

    }

    getHobbies() {
      return this.hobbies         
      // Escribe una función que retorne un arreglo con los hobbies de la persona
      // Ej:
      // persona.getHobbies() // retorna ['correr', 'dormir', 'nadar']

    }

    getPromedioEdad() {
      let edad = 0;
      this.amigos.forEach( amigo => edad += amigo.edad );
      const promedio = edad / this.amigos.length;
      return promedio
      // Escribe una función que retorne el promedio de edad de los amigos de una persona
      // ej, si la persona tuviera estos amigos:
      // {
      //   amigos: [{
      //     nombre: 'toni',
      //     edad: 33,
      //   }, {
      //     nombre: 'Emi',
      //     edad: 25
      //   }]
      // }
      // persona.getPromedioEdad() // retorna 29

    }

  };

  return Persona;
}

function cuantosRepetidos(matrix, elemento) {
  let contador = 0;
  
  matrix.forEach( array => array.forEach( e => {
    if(e === elemento){
      contador += 1
    }
  }))

  return contador;

  // La funcion llamada 'cuantosRepetidos' recibe como argumento un array de arrays llamado 'array' y un string llamado 'elemento'
  // Cada subarray contiene strings.
  // Debe devolver la cantidad de veces que 'elemento' se repite dentro de los subarrays.
  // Ej:
  // cuantosRepetidos([['manzana', 'naranja'],['sandia', 'pera'],['uva', 'manzana']], 'manzana') debe retornar 2
  // ya que 'manzana' se repite 2 veces.
  // Nota: Podes usar for loops anidados.

  // Tu código aca:

}

// No modifiques nada debajo de esta linea
//

module.exports = {
  soloNumeros,
  sumaTodos,
  checkInventario,
  numeroSimetrico,
  cuantosRepetidos,
  crearClasePersona,
  index
}
