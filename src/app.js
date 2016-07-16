function f1() {
  let n = 6;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}

f1();