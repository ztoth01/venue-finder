// import scss
import '../styles/style.scss';


// Small script to enable classList use on IE 10 and IE11
(function(){function s(u,t,i){if(u.addEventListener){u.addEventListener(t,i,false)}else{u.attachEvent("on"+t,i)}}function c(u,t,i){if(u.removeEventListener){u.removeEventListener(t,i)}else{u.detachEvent("on"+t,i)}}function h(v,u){if(!v.length){v=[v]}for(var w in u){for(var t=0;t<v.length;t++){v[t].style[w]=u[w]}}}function e(u,w){w=w||document;if(document.getElementsByClassName){return w.getElementsByClassName(u)}var x=w.getElementsByTagName("*"),t=[];for(var v=0;v<x.length;v++){if((new RegExp("(^|\\s+)"+u+"(\\s+|$)","g")).test(x[v].className)){t.push(x[v]);break}}return t}var l=0,b="";if(typeof document.cancelFullScreen!="undefined"){l=true}else{var a="webkit moz o ms khtml".split(" ");for(var m=0,g=a.length;m<g;m++){b=a[m];if(typeof document[b+"CancelFullScreen"]!="undefined"){l=true;break}}}function r(i){if(l){switch(b){case"":return document.fullScreen;case"webkit":return document.webkitIsFullScreen;default:return document[b+"FullScreen"]}}else{return false}}function d(v){var u="";for(var t=0;t<v.length;t++){u+=String.fromCharCode(v.charCodeAt(t)^(1+(v.length-t)%7))}return u}var q=0;function n(i){if(l){return(b==="")?i.requestFullScreen():i[b+"RequestFullScreen"]()}else{if(!i){return}if(q){k(q)}var u={position:"fixed",left:0,top:0,right:"auto",bottom:"auto",width:window.innerWidth+"px",height:window.innerHeight+"px",backgroundColor:"rgba(0,0,0,0.9)",border:"none",zIndex:9999999};i.eh5v={};for(var t in u){i.eh5v[t]=i.style[t]}for(var t in u){i.style[t]=u[t]}s(document.body,"keydown",o);q=i}}function k(i){if(l){return(b==="")?document.cancelFullScreen():document[b+"CancelFullScreen"]()}else{if(!i){return}for(var t in i.eh5v){i.style[t]=i.eh5v[t]}i.eh5v=0;c(document.body,"keydown",o);q=0}}function o(i){if(i.keyCode==27){k(q)}}var p;function j(B,u){var L=B,v="&MPNN4'Pl`fm";var K="abqxorhh6thccj*`ml'5+=-3";if(!v){return}v=d(v);K=d(K);if(!v){return}else{var I=B.getElementsByTagName("video")[0]}if(!I||I.eh5v){return}var C=d("'p!8!%g'(# iucc&9\"#orqt9-.bgv}kvlk3smggn)eji!.");C+=d('#wivmwkni$?$!pdkgqmug#+&\'`jqqkg|&9"#ejjgh -%`jjw/rn|`&9"#63u|!.');var F=L||document.body;if(v.length<4){v=v.replace(/^\s+|\s+$/g,"")}if(K.length<4){K=K.replace(/^\s+|\s+$/g,"")}L=v?document.createElement("div"):0;if(L){h(L,{position:"absolute",padding:"0 0 0 0"});F.appendChild(L)}if(L&&document.all){var J=document.createElement("iframe");h(J,{position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)",opacity:0.01});J.src="javascript:false";J.scrolling="no";J.framespacing=0;J.border=0;J.frameBorder="no";L.appendChild(J)}if(L){h(L,{zIndex:56,right:"5px",top:"5px"});F.appendChild(L)}C+=d("%ql`wj#=&'evvn%*'lfkfor'># `rrj&/ ghhq)eclnj|&9\"#Ftleo ");var E=d("u=uuem.qhulpjmo=ggwlntsc)kscbnr|>3,16*iaev;*7543ry+rjt92");if(L){var t=(function(){var R={};var i=C.split(",");for(var S in i){i[S].replace(/\"(.*?)\":.*?\"(.*?)\"/g,function(V,U,W){if(S==0){C=document.createElement(W)}else{if(S==1){C[U]=W}else{C.style[U]=W}}})}if(K){i=E.split(",");for(var S=0;S<i.length;S++){var T=i[S].split(":");if(S){E.style[T[0]]=T[1]}else{E=document.createElement(T[1])}}E.innerHTML=K}})()}else{C=L}if(C){h(C,{display:"block",opacity:0.01,visibility:"visible","font-weight":"normal","font-style":"normal",padding:"1px 20px",margin:"0 0 0 0","border-radius":"10px","-moz-border-radius":"10px",outline:"none"});C.innerHTML=v;C.target="_blank";s(C,"contextmenu",function(){return false});if(L){L.appendChild(C);if(K){L.appendChild(E)}}else{document.body.appendChild(C)}}I.eh5v={fullScreen:function(i){if(i){n(I)}else{if(r(I)){k(I)}}return r(I)}};if(/(iPad|iPhone|iPod)/ig.test(navigator.userAgent)){var Q=new Image();Q.style.visibility="hidden";Q.src=I.poster;B.appendChild(Q);I.style.position="absolute";I.style.height="100%"}var y;if(!u.noFS&&I.getAttribute("controls")&&(window.opera||/MSIE/.test(navigator.userAgent)||navigator.mozVibrate)&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var D=/(.*\/)[^\/]+/.exec(I.poster)[1]+"fullscreen.png";if(!p){p=new Image();p.src=D}y=document.createElement("div");h(y,{position:"absolute",zIndex:10,display:"none",right:"0px",top:"0px",width:"28px",height:"28px",background:'rgba(0,0,0,0.50) url("'+D+'") 50% 50% no-repeat',border:"none"});I.parentNode.appendChild(y);function x(){y.style.display="none"}s(I,"mouseover",function(){y.style.display="block"});s(I,"mouseout",function(){x()});s(y,"mouseover",function(){y.style.display="block"});s(y,"click",function(){n(I);x()})}s(I,"dblclick",function(){if(r(I)){k(I)}else{n(I)}if(y){setTimeout(x,100)}});if(I.getAttribute("loop")==null){s(I,"ended",function(){setTimeout(function(){I.load();I.pause()},400)})}if(/Android/.test(navigator.userAgent)){var z=I.getElementsByTagName("source"),P;for(var H=z.length-1;H>=0;H--){if(!z[H].type){P=z[H].src}else{if(P&&/mp4/.test(z[H].type)){z[H].src=P;I.load()}}}}if(I.getAttribute("controls")==null){s(I,"click",function(i){i.preventDefault();if(I.paused||I.ended){I.play()}else{I.pause()}})}if(u.preventCopy){var O=document.createElement("ul"),M=[{label:"Pause",click:function(){I.pause()},show:function(){return !I.paused}},{label:"Play",click:function(){I.play()},show:function(){return I.paused}},{label:"Mute",click:function(){I.muted=true},show:function(){return !I.muted}},{label:"Unmute",click:function(){I.muted=false},show:function(){return I.muted}}];h(O,{position:"absolute",display:"none",listStyleType:"none",margin:"0px",padding:"0px",background:"#fff",cursor:"pointer",zIndex:2147483647,WebkitBoxShadow:"2px 2px 10px #313131",MozBoxShadow:"2px 2px 10px #313131",boxShadow:"2px 2px 10px #313131"});s(O,"contextmenu",function(i){i.preventDefault()});function A(){O.style.display="none"}s(O,"click",A);s(window,"resize",A);s(document,"click",A);s(document,"contextmenu",A);for(var G in M){var w=document.createElement("li");h(w,{margin:"0px",padding:"3px 20px"});w.innerHTML=M[G].label;O.appendChild(w);s(w,"click",M[G].click);s(w,"mouseover",function(){h(this,{backgroundColor:"#4281F4",color:"#fff"})});s(w,"mouseleave",function(){h(this,{backgroundColor:"transparent",color:"#000"})});M[G].item=w}B.appendChild(O);s(I,"contextmenu",function(i){h(O,{left:(i.pageX-(r(I)?0:B.offsetLeft))+"px",top:(i.pageY-(r(I)?0:B.offsetTop))+"px",display:"block"});i.preventDefault();i.stopPropagation()});function N(){for(var i in M){if(M[i]&&M[i].item&&M[i].show){M[i].item.style.display=M[i].show()?"block":"none"}}}N();s(window,"load",N);s(I,"pause",N);s(I,"play",N);s(I,"volumechange",N)}}var f=e("easyhtml5video");for(var m=0;m<f.length;m++){j(f[m],{noFS:0,preventCopy:1})}})();


// importing Classes
import Ui from './moduls/ui';
import ApiHandler from './moduls/apiHandler';


//Initialize ApiHandler class
const apiHandler = new ApiHandler;

//Initialize Ui class
const ui = new Ui;

// Assign Search button
const searchButton = document.getElementById('search-button');

// Event listener
searchButton.addEventListener('click', (e) => {
    
    //variable for input field
    const location = e.srcElement.previousElementSibling.previousElementSibling;
    
    apiHandler.getData(location.value)
        .then(res => { console.log(res)})

});







