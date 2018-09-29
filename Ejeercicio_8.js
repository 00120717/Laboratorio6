var matriz1 =[[1,2,3],[4,2,1],[5,2,5]], matriz2 =[[1,2,3],[4,2,1],[5,2,5]];
var SumaM = new Array(3);

function sumarMatriz(matriz1,matriz2){
    for(let i=0;i<3;i++){
        SumaM[i] = new Array(3);
    }
    for(let i=0;i<3;i++){
        for(let j=0;i<3;i++){
            SumaM[i][j]=matriz1[i][j]+matriz2[i][j];
        }
    }
    for(let i=0;i<3;i++){
        for(let j=0;i<3;i++){
            console.log(SumaM[i][j]);
        }
    }
}