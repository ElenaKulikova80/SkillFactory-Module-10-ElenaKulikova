﻿var ar1 = [4, 4, 4, 4],
   ar2 = [4, 4, 4, "4"];
function foo(a) {
   return !a.some(function(b) {
     return b !== a[0]
   })
 };
 console.log(foo(ar1),foo(ar2));
