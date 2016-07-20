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
    
    <!-- 添加到主屏后的标题（iOS 6 新增） -->
    <meta name="apple-mobile-web-app-title" content="">
    <!-- 是否启用 WebApp 全屏模式，删除苹果默认的工具栏和菜单栏 -->
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <!-- 设置苹果工具栏颜色 -->
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <!-- 添加智能 App 广告条 Smart App Banner（iOS 6+ Safari） -->
    <meta name="apple-itunes-app" content="app-id=myAppStoreID,
    affiliate-data=myAffiliateData, app-argument=myURL">
    <!-- 忽略页面中的数字识别为电话，忽略email识别 -->
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
// 获取设备像素密度后，设置根节点的 fontSize，然后文档中全部使用 rem+px 结合
// 通过脚本检测设备的像素密度，再设置文档的根font-size与viewport的缩放值，从而让px能够准确的显示为物理像素

window.onload = function () {
    var nameAttr = document.createAttribute('name');
    nameAttr.value = 'viewport';
    var contentAttr = document.createAttribute('content');
    var dpr = window.devicePixelRatio || 1;
    contentAttr.value = 'width=device-width,initial-scale=' + (1 / dpr) + ',target-densitydpi=device-dpi,user-scalable=no';
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