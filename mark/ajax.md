## AJAX

创建 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）

```
// 创建对象.. for IE6, IE5
var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

// readyState属性改变时，就会调用该函数
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
    	// http状态码
        if(xhr.status == 200){
            // callback xhr.responseText responseXML
        }
    }
}

// 请求..
xmlhttp.open(method, url, true);
if(method == 'POST'){
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;');
}
xmlhttp.send();
```

```
// 当使用 async = false 时，不要编写onreadystatechange函数，把代码放到send()语句后面即可
xmlhttp.open(method, url, false);
xmlhttp.send();
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
```