var listaArray = [1, 3, 6, 7, 8, 9,67878,67,886,78,78,44,67,4334,5,897897,8978978,8778,89,7,7,89,89,789,789,77,12,1];
var n = listaArray.length;
while (n !== 0) {
  var stop = 0;
  for (var i = 1; i < listaArray.length; i++) {
    // confronto un item con la sua precedente per vedere se è minore
    if (listaArray[i] < listaArray[i - 1]) {
      // se è minore la salvo in una variabile temporanea
      var boxTemporaneo = listaArray[i];
      // l'item prende il posto del suo precedente
      listaArray[i] = listaArray[i - 1];
      // e l'item precedente prende il valore della variabile temporanea
      listaArray[i - 1] = boxTemporaneo;
      stop = i;
    }
  }
  n = stop;
}
console.log(listaArray);
var start = 0;
var end = listaArray.length - 1;
var centro = 0;
var target = 5;
console.log(start , end, centro, target);

while (start <= end){

  centro = Math.ceil((start + end) / 2);

  if(target < listaArray[centro]){
    end = centro - 1;
  }else if (target > listaArray[centro]){
    start = centro + 1;
  }else{
    console.log(listaArray[centro]);
    start = end;
  }
}
console.log('il numero da te scelto è il numero '+(listaArray.indexOf(5)+1)+' della lista');
