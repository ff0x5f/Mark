# es6 practice

## <a href="http://es6.ruanyifeng.com" target=_blank>ECMAScript 6 入门</a>

### 目录结构
```
es6
├── dist
├── src                     # 源码
├── index.html              # index.html
├── gulpfile.js             # gulp配置文件
├── package.json            # package.json
└── README.md               # 文档说明
```

### 文档

- [let const](#one)
- [变量的解构赋值]()


### let const<a name="one"></a>

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

### 变量的解构赋值

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


## <a href="http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000" target=_blank>git命令</a>

```
git remote add origin < .git >

git init 
git add < filename >  
git add .  

git status

git commit -m 'xxx'

git push -u origin master
git push origin master
```
