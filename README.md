# mark

[知乎](http://www.zhihu.com/question/19834302)  
[CSS3 Animation](http://isux.tencent.com/css3/tools.html)  
[Redux 中文文档](http://cn.redux.js.org/)  
[Examples · facebook/react Wiki](https://github.com/facebook/react/wiki/Examples)
[什么时候要在React组件中写shouldComponentUpdate](http://www.infoq.com/cn/news/2016/07/react-shouldComponentUpdate?utm_campaign=rightbar_v2&utm_source=infoq&utm_medium=news_link&utm_content=link_text)  

## [ES6 practice](mark/ES6.md)

## [git命令](mark/Git.md)

## [移动端相关](mark/xx.md)

## 排序

----------------------------  
元素float之后，表现类似display:inline-block  

position: absolute/fixed之后，行内元素表现为块级元素  


http://famanoder.com/

## flex 兼容处理
作者：龙博韬  
链接：https://www.zhihu.com/question/29924791/answer/46255686  
来源：知乎  
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。  

经过了一番实践和一些基本的兼容处理，至少在移动端flexbox还是有可为的（安卓4.0+，2.3+没测试，ios都还行）。但是坑也确实还有很多。  
1，flexbox有多个版本，在低版本安卓下实行的是09年的旧版标准Flexible Box Layout Module这个标准需要添加-webkit-前缀。其余的实行的是新的flexbox标准CSS Flexible Box Layout Module Level 1，其中ios9以下Safari需要添加-webkit-前缀。  
2，旧版flexbox标准各浏览器支持属性有限，比如说不支持flex-wrap等。所以如果考虑兼容性的话需要只使用旧版标准中浏览器可以支持的属性。  
3，还是旧版的问题，旧版的使用比例伸缩布局时会导致盒子内容大小不等会导致无法‘等分’等布局。这个时候需要设置width:0%;等把原始大小设置成0。  
4，依旧是旧版的问题，旧版的box item要求属性是块级结构，所以很多inline元素需要设置display：block等才能显示正常。  
5, 新发现  text-overflow: ellipsis;在display：flex元素上无效。建议使用autoprefixer等工具进行代码补全。不然会很痛苦的。。参考Can I use... Support tables for HTML5, CSS3, etc  
