
// ejercicio 8 
    //caso 1:
function maxNum(num1,num2){
    if(num1>num2){
        return num1
    }else{
        return num2
    }
}

console.log(maxNum(7,2))

  //caso 2:
  function squared(a){
    return a*a
  }

console.log(squared(3))


function menosQue100(a,b){
    let sum = a + b;
    if (sum <=100){
        return true
    } else{
        return false
    }

}
console.log(menosQue100(25,100))
console.log(menosQue100(25,75))


//ejercicio crear una funcion de factorial
let variable = 5;

function factorial(a){
let numeros=[]
 for(let i=1; i<a+1; i++){
    numeros.push(i)
 }

 const res = numeros.reduce(function (acumulador, valorActual){
    acumulador = acumulador * valorActual;
    return acumulador;
} );
return res
}

console.log(factorial(10))


// ejercicio de ordenar  un array

const array1=["manzana", "banana", "pera", "uva"]

function orderArray(array){
    array.sort()
console.log(array)
}

orderArray(array1)

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext("2d")

ctx.moveTo(10,10);
ctx.lineTo(180,180);
ctx.strokeStyle= '#f00';
ctx.stroke()





