- [移动端相关](#one)
- [http 请求](#two)
- [webpack 前端模块管理和打包工具](#three)

<a name="one"></a>
# 移动端相关

## head 部分

- flexible.js 开源，淘宝兼容解决方案

- head 部分如下，有的可有可无，兼容 IOS 透明栏等问题，viewport

```
<head lang="en">
    <meta charset="UTF-8">
    <!-- 优先使用 IE 最新版本和 Chrome -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <!-- 为移动设备添加 viewport -->
    <meta name="viewport" content="width=device-width,initial-scale=1, 
    maximum-scale=1, minimum-scale=1, user-scalable=no">
    
    <!-- 
    	添加到主屏后的标题（iOS 6 新增） 
		是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏
		设置苹果工具栏颜色
		添加智能 App 广告条 Smart App Banner（iOS 6+ Safari）
		忽略页面中的数字识别为电话，忽略email识别
    -->
    <meta name="apple-mobile-web-app-title" content="">
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="apple-itunes-app" content="app-id=myAppStoreID,
    affiliate-data=myAffiliateData, app-argument=myURL">
    <meta name="format-detection" content="telphone=no, email=no"/>
    
    <!--下面三个是清除缓存 微信浏览器缓存严重又无刷新；这个方法调试的时候很方便-->
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <title>web 前端</title>
</head>
```


## rem 跟 px 混用

[rem 关于背景图片的错位问题](http://www.cnblogs.com/cainiaoz/p/5306953.html)  
[小数像素导致背景图..](http://taobaofed.org/blog/2015/11/04/mobile-rem-problem/)  
>浏览器在处理小数像素的时候并不是直接舍入处理的，元素依旧占据着应有的空间；真实渲染尺寸，舍入无规律


- 解决点阵字体放大模糊的问题
- 不是所有元素都需要缩放，例如 1px 的 border

```
/**
 * 获取设备像素密度后，设置根节点的 fontSize，然后文档中 rem+px 结合
 * 通过脚本检测设备的像素密度，再设置文档的根 font-size 与 viewport 的缩放值，从而让px能够准确的显示为物理像素
 */
window.onload = function () {
    var nameAttr = document.createAttribute('name');
    nameAttr.value = 'viewport';
    var contentAttr = document.createAttribute('content');
    var dpr = window.devicePixelRatio || 1;
    contentAttr.value = 'width=device-width,initial-scale=' + (1 / dpr) 
    + ',target-densitydpi=device-dpi,user-scalable=no';
    var element = document.createElement('meta');
    element.attributes.setNamedItem(nameAttr);
    element.attributes.setNamedItem(contentAttr);
    document.head.appendChild(element);
    document.getElementsByTagName('html')[0].style.fontSize = (16 * dpr) + 'px';
};
```

```
// 使用额外的媒体查询设置几种字体大小
@media screen and (max-width: 320px) {
    body{font-size: 14px;}
}
@media screen and (min-width: 321px) and (max-width: 413px) {
    body{font-size: 16px;}
}
@media screen and (min-width: 414px) and (max-width: 639px) {
    body{font-size: 17px;}
}
@media screen and (min-width: 640px) {
    body{font-size: 18px;}
}
```

```
// SASS函数
@function toRem($px){
    @return $px / 37.5px * 1rem;  // 设计稿宽度 750px
}
```


<a name="two"></a>
# http 请求

- 减少 http 请求优化性能  
 - 减少 DNS 请求所耗费的时间  
 - 减少服务器压力  
 - 合并脚本和样式  
>网页类型,一种偏向内容,一种则偏向应用.对于内容型的网站,脚本并不是很重要(甚至样式),因为没有脚本,用户仍然可以浏览页面,只是可能有些效果看不到而已,所以我们可以把脚本合并起来,一起放在body底部,在页面内容都加载完后,再一次性加载进来.  
而对于应用型的网页,让应用跑起来才是最重要的,因为没有应用这个网页就变得没有意义了,这时候,`按需加载`脚本是一种趋势,我们需要先把应用的基本框架和功能按需加载进 ,让它们分别运行起来,而不是一起等脚本加载完再一起初始化,我们需要应用能够快速响应用户

 - 减少 http 请求头
>对服务器发起请求的时候，会携带着这个域名下的 cookie 和一些其他的信息在 http 头部里，服务器响应请求的时候也会带回一些 cookie 之类的头部信息


<a name="three"></a>
# webpack 

- 前端模块管理和打包工具
 - webpack-dev-server
>在开发过程中，Webpack开发服务器监听文件变化，进行实时打包，并且可以推送通知前端页面代码发生了变化，从而可以实现页面的自动刷新。

 - 模块加载器 Loaders
 - react-hot-loader
>使用这个加载器可以轻松实现React组件的热替换
