"use strict";

function f1() {
  var n = 6;
  if (true) {
    var _n = 10;
  }
  console.log(n); // 5
}

f1();