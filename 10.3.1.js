﻿const n = prompt('Введите число N')
if (isNaN(+n)){
  alert('Вы ошиблись, это не число')
}
else if (typeof +n === 'number'){
  if (n % 2 === 0) {
	alert('Число ' + n + ' четное!')
  } 
  else {
      alert('Число ' + n + ' нечетное!')
  }
}
