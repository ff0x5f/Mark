# ES6 practice

[ECMAScript 6 的新特性](https://segmentfault.com/a/1190000002904199)  
[ES5 特性](https://segmentfault.com/a/1190000000515151)  

## ES5
forEach map filter some every
indexOf lastindexOf reduce reduceRight

## <a href="http://es6.ruanyifeng.com" target=_blank>ECMAScript 6 入门</a>

### 目录结构
```
ES6
├── dist
├── src                     # 源码
├── index.html              # index.html
├── gulpfile.js             # gulp配置文件
├── package.json            # package.json
└── README.md               # 文档说明
```

### 文档

- [1. let const](#one)
- [2. 变量的解构赋值](#two)

<a name="one"></a>
### 1. let const

es6 块级作用域允许声明函数
const 声明常量，在声明的块级作用域内生效
var function let const import class

```
var a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
window.a // 1

// var命令和function命令声明的全局变量，依旧是全局对象的属性；let、const、class声明的全局变量，不属于全局对象的属性
let b = 1;
window.b // undefined

```

```
// 常量foo指向一个冻结的对象，添加新属性不起作用
const foo = Object.freeze({});

// 将对象属性也冻结
var constantize = (obj) => {
  Object.freeze(obj);
  Object.keys(obj).forEach( (key, value) => {
    if ( typeof obj[key] === 'object' ) {
      constantize( obj[key] );
    }
  });
};

```

<a name="two"></a>
### 2.1 变量的解构赋值

```
// 报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};

// 对于Set结构，也可以使用数组的解构赋值。
let [x, y, z] = new Set(["a", "b", "c"]);
x // "a"

// 严格等于undefined，默认值才会生效
var [x, y = 'b'] = ['a']; // x='a', y='b'
var [x, y = 'b'] = ['a', undefined]; // x='a', y='b

var [x = 1] = [null];
x // null

// 无输出
function f() {
  console.log('aaa');
}

let [x = f()] = [1];
```

```
// fibs是一个Generator函数，原生具有Iterator接口
function* fibs() {
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var [first, second, third, fourth, fifth, sixth] = fibs();
sixth // 5
```

```
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError
```

### 2.2 对象的解构赋值

### 2.3 解构赋值用途
（1）交换变量的值
（2）从函数返回多个值
（3）函数参数的定义
（4）提取JSON数据
（5）函数参数的默认值
（6）遍历Map结构
（7）输入模块的指定方法

## 6 数值的扩展

### 6.1 Number

```
Number('0b111')  // 7
Number('0o10')  // 8

// isFinite isNaN 非数值一律返回false
Number.isFinite(15); // true
Number.isFinite(NaN); // false
Number.isFinite(Infinity); // false

Number.isNaN(NaN) // true
Number.isNaN(15) // false

// ES5的写法
parseInt('12.34') // 12
parseFloat('123.45#') // 123.45

// ES6的写法
Number.parseInt('12.34') // 12
Number.parseFloat('123.45#') // 123.45

Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger(25.1) // false
Number.isInteger("15") // false
Number.isInteger(true) // false

// 极小常量 误差范围
Number.EPSILON
Number.EPSILON.toFixed(20)

Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true
```

### 6.2 Math对象的扩展

```
// Math.cbrt方法用于计算一个数的立方根
Math.cbrt('8') // 2
Math.cbrt('hello') // NaN

Math.trunc('123.456') //123
Math.cbrt('8') // 2
Math.cbrt('hello') // NaN

// Math.sign方法用来判断一个数到底是正数、负数、还是零
// 返回值 +1 -1 +0 -0 NaN

// **指数运算符
b **= 3;
```