

function ejercicio1(numero,arreglo){
    
    var cont = 0;
    for(let i=0;i<arreglo.lenght;i++){
        if(arreglo.indexOf(i)==numero){
            cont++;
        }
    }

    return cont;

}