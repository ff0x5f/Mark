'use strict';

var out = document.getElementById('dom');

var dom = document.getElementsByClassName('content')[0];

var inner = document.getElementsByClassName('inner')[0];

var x = function clickCounter(e) {

    var e = e || window.event;

    //console.log(e.target);
    console.log(this, '---------');
};

out.addEventListener('click', x);

dom.addEventListener('click', x);

inner.addEventListener('click', x);