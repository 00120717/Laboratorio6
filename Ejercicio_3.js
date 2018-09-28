

function ejercicio_3(arreglo){
    var numeros=0,cadenas=0,booleanos=0,simbolos=0;
    for(let i; i<arreglo.length;i++){
        if(typeof(arreglo[i])=='number'){numeros++;}
        else if(typeof[i]=='string'){cadenas++;}
        else if(typeof[i]=='boolean'){booleanos++;}
        else if(typeof[i]=='symbol'){simbolos++;}
    }
    console.log('number',numeros,'strings',cadenas,'boolean',booleanos,'symbol',simbolos);
}

