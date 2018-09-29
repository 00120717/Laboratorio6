var arreglo = [];
var aux = [];
function ejercicio_4(arreglo){
    for(let i=0;i<arreglo.length;i++){
        
        aux[i] = arreglo.pop(i)+arreglo.shift(arreglo.length-i);
    }
    for(let i=0;i<arreglo.length;i++){
        console.log(aux[i]);
    }
}