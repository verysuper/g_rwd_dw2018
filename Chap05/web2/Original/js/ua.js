//JavaScript Document
//is it mobile???
function uAgent(){
"use strict";
//alert(navigator.userAgent);
var myAgent=navigator.userAgent;
if(myAgent.match(/Android/i) || myAgent.match(/webOS/i) || myAgent.match(/iPhone/i) || myAgent.match(/iPad/i) || myAgent.match(/iPod/i) || myAgent.match(/BlackBerry/i) || myAgent.match(/Windows Phone/i)){
		// return mobile true
		document.location.href="mobile/index.html";
	}
}
uAgent();