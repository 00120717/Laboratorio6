function ejercicio_7(arreglo){
    var x=0,n=arreglo.length,xi=arreglo;
    var incerteza;
    for(let i=1;i<n;i++){
        x = x +  (1/n)*xi[i];
    }

    for(let i=1;i<n;i++){
        incerteza = (1/(n-1))*(Math.pow(xi[i]-x));
    }

    Math.sqrt(incerteza);

    console.log('Incerteza = ',x,'+-',incerteza);
}