# mark

[知乎](http://www.zhihu.com/question/19834302)
[CSS3 Animation](http://isux.tencent.com/css3/tools.html)
[Redux 中文文档](http://cn.redux.js.org/)
[Examples · facebook/react Wiki](https://github.com/facebook/react/wiki/Examples)
[什么时候要在React组件中写shouldComponentUpdate](http://www.infoq.com/cn/news/2016/07/react-shouldComponentUpdate?utm_campaign=rightbar_v2&utm_source=infoq&utm_medium=news_link&utm_content=link_text)

[浏览器渲染页面过程描述，DOM编程技巧以及重排和重绘](http://www.cnblogs.com/duanlianjiang/archive/2015/12/09/5032286.html)

[连续赋值与求值顺序](http://www.cnblogs.com/huaan011/p/4381703.html)

## [ES6 practice](mark/ES6.md)

## [git命令](mark/Git.md)

## [移动端相关](mark/xx.md)

## 排序

----------------------------
元素float之后，表现为display:inline-block

position: absolute/fixed之后，行内元素变为块级元素


```
// 逆序dom
var dom = document.getElementById('dom');

function reverseDom(origin, copyto){
  var list = origin.childNodes;
  var len = list.length;

  while(len--){
    var item = list[len];
    var xx = item.cloneNode();

    copyto.appendChild(xx);

    reverseDom(item, xx);
  }
}

var x = document.createElement('div');
reverseDom(dom, x);
document.body.appendChild(x);
```