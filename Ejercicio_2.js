

function ejercicio_2(arreglo){
    var suma=0

    arreglo.array.forEach(element => {
        suma = suma + element;
    });

   return suma/arreglo.length;
    
}