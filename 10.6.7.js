﻿/*
Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
*/
var arr=[4,2,6,8,0,7,8,'string','<','',undefined]
var n1;
var n2;
var n3;
var n4;
var n5;
var n6;
n1=0;
n2=0;
n3=0;
n4=0;
n5=0;
n6=0;
for (var i=0;i<arr.length;i++){
  if (typeof(arr[i])==='number'){
    if (arr[i]%2===0 && arr[i]!==0 && arr[i]!==null) {
      n1=n1+1;
    }
    if (arr[i]===0){
      n2=n2+1;
    }
    if (arr[i]%2!==0){
      n3=n3+1
    }
    if (arr[i]==null){
      n4=n4+1;
    }
  }
  if (typeof(arr[i])=='string'){
      n5=n5+1;
  }
  if (arr[i]==undefined){
    n6=n6+1;
  }
  
}
console.log('undefined = ' + n6);
console.log('четных элементов в массиве = ' + n1);
console.log('нечетных элементов в массиве = ' + n3);
console.log('нулевых элементов в массиве = ' + n2);
console.log('строковые значения = ' + n5);
console.log('null = ' + n4);