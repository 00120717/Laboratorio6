var cadena = [];
function Ejercicio_6(cadena){
    var clave = ['m','u','r','c','i','e','l','a','g','o'];
    var claveAux = [0,1,2,3,4,5,6,7,8,9];
    var Newcadena=[];

    for(let i=0;i<=cadena.length;i++){
        for(let j=0;j<=clave.length;j++){
            if(cadena[i]==clave[j]){
                Newcadena[i]=claveAux[j];
            }else if(cadena[i]==clave[j]){
                Newcadena[i] = cadena[i];
            }
        }
        
    }
    console.log(Newcadena);
}