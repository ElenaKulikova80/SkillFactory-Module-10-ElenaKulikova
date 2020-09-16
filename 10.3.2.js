var x1=45;
  console.log(typeof x1);  

var x2='stroka';
  console.log(typeof x2);  

var x3=true;
  console.log(typeof x3);  

var x4=undefined;
  console.log(typeof x4);


// Неверно понято задание. Ниже написала пример, как нужно было сделать:

let x;

switch (typeof x) {
  case 'number':
    console.log('x - число');
    break;
  case 'string':
    console.log('x - строка');
    break;
  case 'boolean':
    console.log('x - булево значение');
    break;
  default: 
    console.log('Тип x не определен');
}