JS运行在浏览器中，是单线程的，每个window一个JS线程

Ajax请求确实是异步的，这请求是由浏览器新开一个线程请求，事件回调的时候是放入Event loop单线程事件队列等候处理。

在html body标签中的script都是阻塞的。也就是说，顺序下载、解释、执行。

要实现非阻塞js（non-blocking javascript）有两个方法：1. html5 2. 动态加载js  
首先一种办法是HTML5的defer和async关键字：


然后第二种方法是动态加载js：  
```
setTimeout(function(){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "foo.js";
    var head = true; //加在头还是尾
    if(head)
      document.getElementsByTagName("head")[0].appendChild(script);
    else
      document.body.appendChild(script); 
}, 0);
 
//另外一个独立的动态加载js的函数
function loadJs(jsurl, head, callback){
    var script=document.createElement('script');
    script.setAttribute("type","text/javascript");
     
    if(callback){
        if (script.readyState){  //IE
            script.onreadystatechange = function(){
                if (script.readyState == "loaded" ||
                        script.readyState == "complete"){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {  //Others
            script.onload = function(){
                callback();
            };
        }
    }
    script.setAttribute("src", jsurl);
     
    if(head)
     document.getElementsByTagName('head')[0].appendChild(script); 
    else
      document.body.appendChild(script); 
 
}
```



```
// http://wowtianwen.iteye.com/blog/2100913
```