/*! chessboard.js v0.3.0 | (c) 2013 Chris Oakman | MIT License chessboardjs.com/license */
(function(){function l(f){return"string"!==typeof f?!1:-1!==f.search(/^[a-h][1-8]$/)}function Q(f){if("string"!==typeof f)return!1;f=f.replace(/ .+$/,"");f=f.split("/");if(8!==f.length)return!1;for(var b=0;8>b;b++)if(""===f[b]||8<f[b].length||-1!==f[b].search(/[^kqrbnpKQRNBP1-8]/))return!1;return!0}function F(f){if("object"!==typeof f)return!1;for(var b in f)if(!0===f.hasOwnProperty(b)){var n;(n=!0!==l(b))||(n=f[b],n="string"!==typeof n?!1:-1!==n.search(/^[bw][KQRNBP]$/),n=!0!==n);if(n)return!1}return!0}
function K(f){if(!0!==Q(f))return!1;f=f.replace(/ .+$/,"");f=f.split("/");for(var b={},n=8,m=0;8>m;m++){for(var l=f[m].split(""),r=0,w=0;w<l.length;w++)if(-1!==l[w].search(/[1-8]/))var I=parseInt(l[w],10),r=r+I;else{var I=b,F=B[r]+n,A;A=l[w];A=A.toLowerCase()===A?"b"+A.toUpperCase():"w"+A.toUpperCase();I[F]=A;r++}n--}return b}function L(f){if(!0!==F(f))return!1;for(var b="",n=8,m=0;8>m;m++){for(var l=0;8>l;l++){var r=B[l]+n;!0===f.hasOwnProperty(r)?(r=f[r].split(""),r="w"===r[0]?r[1].toUpperCase():
r[1].toLowerCase(),b+=r):b+="1"}7!==m&&(b+="/");n--}b=b.replace(/11111111/g,"8");b=b.replace(/1111111/g,"7");b=b.replace(/111111/g,"6");b=b.replace(/11111/g,"5");b=b.replace(/1111/g,"4");b=b.replace(/111/g,"3");return b=b.replace(/11/g,"2")}var B="abcdefgh".split("");window.ChessBoard=window.ChessBoard||function(f,b){function n(){return"xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx".replace(/x/g,function(a){return(16*Math.random()|0).toString(16)})}function m(a){return JSON.parse(JSON.stringify(a))}function X(a){a=
a.split(".");return{major:parseInt(a[0],10),minor:parseInt(a[1],10),patch:parseInt(a[2],10)}}function r(a,e,c){if(!0===b.hasOwnProperty("showErrors")&&!1!==b.showErrors){var d="ChessBoard Error "+a+": "+e;"console"===b.showErrors&&"object"===typeof console&&"function"===typeof console.log?(console.log(d),2<=arguments.length&&console.log(c)):"alert"===b.showErrors?(c&&(d+="\n\n"+JSON.stringify(c)),window.alert(d)):"function"===typeof b.showErrors&&b.showErrors(a,e,c)}}function w(a){return"fast"===
a||"slow"===a?!0:parseInt(a,10)+""!==a+""?!1:0<=a}function I(){for(var a=0;a<B.length;a++)for(var b=1;8>=b;b++){var c=B[a]+b;s[c]=c+"-"+n()}b="KQRBNP".split("");for(a=0;a<b.length;a++){var c="w"+b[a],d="b"+b[a];M[c]=c+"-"+n();M[d]=d+"-"+n()}}function ga(){var a='<div class="'+h.chessboard+'">';!0===b.sparePieces&&(a+='<div class="'+h.sparePieces+" "+h.sparePiecesTop+'"></div>');a+='<div class="'+h.board+'"></div>';!0===b.sparePieces&&(a+='<div class="'+h.sparePieces+" "+h.sparePiecesBottom+'"></div>');
return a+"</div>"}function A(a){"black"!==a&&(a="white");var e="",c=m(B),d=8;"black"===a&&(c.reverse(),d=1);for(var C="white",f=0;8>f;f++){for(var e=e+('<div class="'+h.row+'">'),k=0;8>k;k++){var g=c[k]+d,e=e+('<div class="'+h.square+" "+h[C]+" square-"+g+'" style="width: '+p+"px; height: "+p+'px" id="'+s[g]+'" data-square="'+g+'">');if(!0===b.showNotation){if("white"===a&&1===d||"black"===a&&8===d)e+='<div class="'+h.notation+" "+h.alpha+'">'+c[k]+"</div>";0===k&&(e+='<div class="'+h.notation+" "+
h.numeric+'">'+d+"</div>")}e+="</div>";C="white"===C?"black":"white"}e+='<div class="'+h.clearfix+'"></div></div>';C="white"===C?"black":"white";"white"===a?d--:d++}return e}function Y(a){if("function"===typeof b.pieceTheme)return b.pieceTheme(a);if("string"===typeof b.pieceTheme)return b.pieceTheme.replace(/{piece}/g,a);r(8272,"Unable to build image source for cfg.pieceTheme.");return""}function D(a,b,c){var d='<img src="'+Y(a)+'" ';c&&"string"===typeof c&&(d+='id="'+c+'" ');d+='alt="" class="'+
h.piece+'" data-piece="'+a+'" style="width: '+p+"px;height: "+p+"px;";!0===b&&(d+="display:none;");return d+'" />'}function N(a){var b="wK wQ wR wB wN wP".split(" ");"black"===a&&(b="bK bQ bR bB bN bP".split(" "));a="";for(var c=0;c<b.length;c++)a+=D(b[c],!1,M[b[c]]);return a}function ha(a,e,c,d){a=$("#"+s[a]);var C=a.offset(),f=$("#"+s[e]);e=f.offset();var k=n();$("body").append(D(c,!0,k));var g=$("#"+k);g.css({display:"",position:"absolute",top:C.top,left:C.left});a.find("."+h.piece).remove();g.animate(e,
{duration:b.moveSpeed,complete:function(){f.append(D(c));g.remove();"function"===typeof d&&d()}})}function ia(a,e,c){var d=$("#"+M[a]).offset(),f=$("#"+s[e]);e=f.offset();var g=n();$("body").append(D(a,!0,g));var k=$("#"+g);k.css({display:"",position:"absolute",left:d.left,top:d.top});k.animate(e,{duration:b.moveSpeed,complete:function(){f.find("."+h.piece).remove();f.append(D(a));k.remove();"function"===typeof c&&c()}})}function ja(a,e,c){function d(){f++;if(f===a.length&&(G(),!0===b.hasOwnProperty("onMoveEnd")&&
"function"===typeof b.onMoveEnd))b.onMoveEnd(m(e),m(c))}for(var f=0,g=0;g<a.length;g++)"clear"===a[g].type&&$("#"+s[a[g].square]+" ."+h.piece).fadeOut(b.trashSpeed,d),"add"===a[g].type&&!0!==b.sparePieces&&$("#"+s[a[g].square]).append(D(a[g].piece,!0)).find("."+h.piece).fadeIn(b.appearSpeed,d),"add"===a[g].type&&!0===b.sparePieces&&ia(a[g].piece,a[g].square,d),"move"===a[g].type&&ha(a[g].source,a[g].destination,a[g].piece,d)}function ka(a,b){a=a.split("");var c=B.indexOf(a[0])+1,d=parseInt(a[1],10);
b=b.split("");var g=B.indexOf(b[0])+1,f=parseInt(b[1],10),c=Math.abs(c-g),d=Math.abs(d-f);return c>=d?c:d}function la(a){for(var b=[],c=0;8>c;c++)for(var d=0;8>d;d++){var g=B[c]+(d+1);a!==g&&b.push({square:g,distance:ka(a,g)})}b.sort(function(a,b){return a.distance-b.distance});a=[];for(c=0;c<b.length;c++)a.push(b[c].square);return a}function G(){x.find("."+h.piece).remove();for(var a in g)!0===g.hasOwnProperty(a)&&$("#"+s[a]).append(D(g[a]))}function R(){x.html(A(u));G();!0===b.sparePieces&&("white"===
u?(S.html(N("black")),T.html(N("white"))):(S.html(N("white")),T.html(N("black"))))}function O(a){var e=m(g),c=m(a),d=L(e),f=L(c);if(d!==f){if(!0===b.hasOwnProperty("onChange")&&"function"===typeof b.onChange)b.onChange(e,c);g=a}}function U(a,b){for(var c in J)if(!0===J.hasOwnProperty(c)){var d=J[c];if(a>=d.left&&a<d.left+p&&b>=d.top&&b<d.top+p)return c}return"offboard"}function V(){x.find("."+h.square).removeClass(h.highlight1+" "+h.highlight2)}function ma(){function a(){G();y.css("display","none");
if(!0===b.hasOwnProperty("onSnapbackEnd")&&"function"===typeof b.onSnapbackEnd)b.onSnapbackEnd(E,t,m(g),u)}if("spare"===t)Z();else{V();var e=$("#"+s[t]).offset();y.animate(e,{duration:b.snapbackSpeed,complete:a});z=!1}}function Z(){V();var a=m(g);delete a[t];O(a);G();y.fadeOut(b.trashSpeed);z=!1}function na(a){V();var e=m(g);delete e[t];e[a]=E;O(e);e=$("#"+s[a]).offset();y.animate(e,{duration:b.snapSpeed,complete:function(){G();y.css("display","none");if(!0===b.hasOwnProperty("onSnapEnd")&&"function"===
typeof b.onSnapEnd)b.onSnapEnd(t,a,E)}});z=!1}function P(a,e,c,d){if("function"!==typeof b.onDragStart||!1!==b.onDragStart(a,e,m(g),u)){z=!0;E=e;t=a;H="spare"===a?"offboard":a;J={};for(var f in s)!0===s.hasOwnProperty(f)&&(J[f]=$("#"+s[f]).offset());y.attr("src",Y(e)).css({display:"",position:"absolute",left:c-p/2,top:d-p/2});"spare"!==a&&$("#"+s[a]).addClass(h.highlight1).find("."+h.piece).css("display","none")}}function aa(a,e){y.css({left:a-p/2,top:e-p/2});var c=U(a,e);if(c!==H){!0===l(H)&&$("#"+
s[H]).removeClass(h.highlight2);!0===l(c)&&$("#"+s[c]).addClass(h.highlight2);if("function"===typeof b.onDragMove)b.onDragMove(c,H,t,E,m(g),u);H=c}}function ba(a){var e="drop";"offboard"===a&&"snapback"===b.dropOffBoard&&(e="snapback");"offboard"===a&&"trash"===b.dropOffBoard&&(e="trash");if(!0===b.hasOwnProperty("onDrop")&&"function"===typeof b.onDrop){var c=m(g);"spare"===t&&!0===l(a)&&(c[a]=E);!0===l(t)&&"offboard"===a&&delete c[t];!0===l(t)&&!0===l(a)&&(delete c[t],c[a]=E);var d=m(g),c=b.onDrop(t,
a,E,c,d,u);if("snapback"===c||"trash"===c)e=c}"snapback"===e?ma():"trash"===e?Z():"drop"===e&&na(a)}function oa(a){a.preventDefault()}function pa(a){if(!0===b.draggable){var e=$(this).attr("data-square");!0===l(e)&&!0===g.hasOwnProperty(e)&&P(e,g[e],a.pageX,a.pageY)}}function qa(a){if(!0===b.draggable){var e=$(this).attr("data-square");!0===l(e)&&!0===g.hasOwnProperty(e)&&(a=a.originalEvent,P(e,g[e],a.changedTouches[0].pageX,a.changedTouches[0].pageY))}}function ra(a){if(!0===b.sparePieces){var e=
$(this).attr("data-piece");P("spare",e,a.pageX,a.pageY)}}function sa(a){if(!0===b.sparePieces){var e=$(this).attr("data-piece");a=a.originalEvent;P("spare",e,a.changedTouches[0].pageX,a.changedTouches[0].pageY)}}function ca(a){!0===z&&aa(a.pageX,a.pageY)}function ta(a){!0===z&&(a.preventDefault(),aa(a.originalEvent.changedTouches[0].pageX,a.originalEvent.changedTouches[0].pageY))}function da(a){!0===z&&(a=U(a.pageX,a.pageY),ba(a))}function ua(a){!0===z&&(a=U(a.originalEvent.changedTouches[0].pageX,
a.originalEvent.changedTouches[0].pageY),ba(a))}function va(a){if(!1===z&&(!0===b.hasOwnProperty("onMouseoverSquare")&&"function"===typeof b.onMouseoverSquare)&&(a=$(a.currentTarget).attr("data-square"),!0===l(a))){var e=!1;!0===g.hasOwnProperty(a)&&(e=g[a]);b.onMouseoverSquare(a,e,m(g),u)}}function wa(a){if(!1===z&&(!0===b.hasOwnProperty("onMouseoutSquare")&&"function"===typeof b.onMouseoutSquare)&&(a=$(a.currentTarget).attr("data-square"),!0===l(a))){var e=!1;!0===g.hasOwnProperty(a)&&(e=g[a]);
b.onMouseoutSquare(a,e,m(g),u)}}function xa(){$("body").on("mousedown mousemove","."+h.piece,oa);x.on("mousedown","."+h.square,pa);v.on("mousedown","."+h.sparePieces+" ."+h.piece,ra);x.on("mouseenter","."+h.square,va);x.on("mouseleave","."+h.square,wa);!0===(navigator&&navigator.userAgent&&-1!==navigator.userAgent.search(/MSIE/))?(document.ondragstart=function(){return!1},$("body").on("mousemove",ca),$("body").on("mouseup",da)):($(window).on("mousemove",ca),$(window).on("mouseup",da));!0==="ontouchstart"in
document.documentElement&&(x.on("touchstart","."+h.square,qa),v.on("touchstart","."+h.sparePieces+" ."+h.piece,sa),$(window).on("touchmove",ta),$(window).on("touchend",ua))}function ya(){v.html(ga());x=v.find("."+h.board);!0===b.sparePieces&&(S=v.find("."+h.sparePiecesTop),T=v.find("."+h.sparePiecesBottom));var a=n();$("body").append(D("wP",!0,a));y=$("#"+a);ea=parseInt(x.css("borderLeftWidth"),10);q.resize()}b=b||{};var fa=K("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"),h={alpha:"alpha-d2270",black:"black-3c85d",
board:"board-b72b1",chessboard:"chessboard-63f37",clearfix:"clearfix-7da63",highlight1:"highlight1-32417",highlight2:"highlight2-9c5d2",notation:"notation-322f9",numeric:"numeric-fc462",piece:"piece-417db",row:"row-5277c",sparePieces:"spare-pieces-7492f",sparePiecesBottom:"spare-pieces-bottom-ae20f",sparePiecesTop:"spare-pieces-top-4028b",square:"square-55d63",white:"white-1e1d7"},v,x,y,S,T,q={},ea=2,u="white",g={},p,E,H,t,z=!1,M={},s={},J;q.clear=function(a){q.position({},a)};q.destroy=function(){v.html("");
y.remove();v.unbind()};q.fen=function(){return q.position("fen")};q.flip=function(){q.orientation("flip")};q.move=function(){if(0!==arguments.length){for(var a=!0,b={},c=0;c<arguments.length;c++)if(!1===arguments[c])a=!1;else{var d;d=arguments[c];"string"!==typeof d?d=!1:(d=d.split("-"),d=2!==d.length?!1:!0===l(d[0])&&!0===l(d[1]));!0!==d?r(2826,"Invalid move passed to the move method.",arguments[c]):(d=arguments[c].split("-"),b[d[0]]=d[1])}var c=g,c=m(c),f;for(f in b)!0===b.hasOwnProperty(f)&&!0===
c.hasOwnProperty(f)&&(d=c[f],delete c[f],c[b[f]]=d);b=c;q.position(b,a);return b}};q.orientation=function(a){if(0===arguments.length)return u;"white"===a||"black"===a?(u=a,R()):"flip"===a?(u="white"===u?"black":"white",R()):r(5482,"Invalid value passed to the orientation method.",a)};q.position=function(a,b){if(0===arguments.length)return m(g);if("string"===typeof a&&"fen"===a.toLowerCase())return L(g);!1!==b&&(b=!0);"string"===typeof a&&"start"===a.toLowerCase()&&(a=m(fa));!0===Q(a)&&(a=K(a));if(!0!==
F(a))r(6482,"Invalid value passed to the position method.",a);else if(!0===b){var c=g,d=a,c=m(c),d=m(d),f=[],h={},k;for(k in d)!0===d.hasOwnProperty(k)&&(!0===c.hasOwnProperty(k)&&c[k]===d[k])&&(delete c[k],delete d[k]);for(k in d)if(!0===d.hasOwnProperty(k)){var l;a:{l=c;for(var n=d[k],s=la(k),p=0;p<s.length;p++){var q=s[p];if(!0===l.hasOwnProperty(q)&&l[q]===n){l=q;break a}}l=!1}!1!==l&&(f.push({type:"move",source:l,destination:k,piece:d[k]}),delete c[l],delete d[k],h[k]=!0)}for(k in d)!0===d.hasOwnProperty(k)&&
(f.push({type:"add",square:k,piece:d[k]}),delete d[k]);for(k in c)!0===c.hasOwnProperty(k)&&!0!==h.hasOwnProperty(k)&&(f.push({type:"clear",square:k,piece:c[k]}),delete c[k]);ja(f,g,a);O(a)}else O(a),G()};q.resize=function(){var a=parseInt(v.css("width"),10);if(!a||0>=a)p=0;else{for(a-=1;0!==a%8&&0<a;)a--;p=a/8}x.css("width",8*p+"px");y.css({height:p,width:p});!0===b.sparePieces&&v.find("."+h.sparePieces).css("paddingLeft",p+ea+"px");R()};q.start=function(a){q.position("start",a)};var W;if(W=!0===
function(){if("string"===typeof f){if(""===f)return window.alert("ChessBoard Error 1001: The first argument to ChessBoard() cannot be an empty string.\n\nExiting..."),!1;var a=document.getElementById(f);if(!a)return window.alert('ChessBoard Error 1002: Element with id "'+f+'" does not exist in the DOM.\n\nExiting...'),!1;v=$(a)}else if(v=$(f),1!==v.length)return window.alert("ChessBoard Error 1003: The first argument to ChessBoard() must be an ID or a single DOM node.\n\nExiting..."),!1;if(!window.JSON||
"function"!==typeof JSON.stringify||"function"!==typeof JSON.parse)return window.alert("ChessBoard Error 1004: JSON does not exist. Please include a JSON polyfill.\n\nExiting..."),!1;if(a=typeof window.$)if(a=$.fn)if(a=$.fn.jquery)var a=$.fn.jquery,b="1.7.0",a=X(a),b=X(b),a=!0===1E8*a.major+1E4*a.minor+a.patch>=1E8*b.major+1E4*b.minor+b.patch;return a?!0:(window.alert("ChessBoard Error 1005: Unable to find a valid version of jQuery. Please include jQuery 1.7.0 or higher on the page.\n\nExiting..."),
!1)}()){if("string"===typeof b||!0===F(b))b={position:b};"black"!==b.orientation&&(b.orientation="white");u=b.orientation;!1!==b.showNotation&&(b.showNotation=!0);!0!==b.draggable&&(b.draggable=!1);"trash"!==b.dropOffBoard&&(b.dropOffBoard="snapback");!0!==b.sparePieces&&(b.sparePieces=!1);!0===b.sparePieces&&(b.draggable=!0);if(!0!==b.hasOwnProperty("pieceTheme")||"string"!==typeof b.pieceTheme&&"function"!==typeof b.pieceTheme)b.pieceTheme="img/chesspieces/wikipedia/{piece}.png";if(!0!==b.hasOwnProperty("appearSpeed")||
!0!==w(b.appearSpeed))b.appearSpeed=200;if(!0!==b.hasOwnProperty("moveSpeed")||!0!==w(b.moveSpeed))b.moveSpeed=200;if(!0!==b.hasOwnProperty("snapbackSpeed")||!0!==w(b.snapbackSpeed))b.snapbackSpeed=50;if(!0!==b.hasOwnProperty("snapSpeed")||!0!==w(b.snapSpeed))b.snapSpeed=25;if(!0!==b.hasOwnProperty("trashSpeed")||!0!==w(b.trashSpeed))b.trashSpeed=100;!0===b.hasOwnProperty("position")&&("start"===b.position?g=m(fa):!0===Q(b.position)?g=K(b.position):!0===F(b.position)?g=m(b.position):r(7263,"Invalid value passed to config.position.",
b.position));W=!0}W&&(I(),ya(),xa());return q};window.ChessBoard.fenToObj=K;window.ChessBoard.objToFen=L})();

/*! Copyright (c) 2013, Jeff Hlywa (jhlywa@gmail.com)
 *  Released under the BSD license
 *  https://github.com/jhlywa/chess.js/blob/master/LICENSE
 */
;var Chess=function(ao){var p="b";var k="w";var E=-1;var X="p";var S="n";var s="b";var H="r";var j="q";var ad="k";var f="pnbrqkPNBRQK";var an="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";var B=["1-0","0-1","1/2-1/2","*"];var u={b:[16,32,17,15],w:[-16,-32,-17,-15]};var J={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]};var ac=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20];var o=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17];var av={p:0,n:1,b:2,r:3,q:4,k:5};var aj={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"};var D={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64};var W=7;var T=6;var Q=5;var P=4;var O=3;var N=2;var M=1;var K=0;var v={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119};var V={w:[{square:v.a1,flag:D.QSIDE_CASTLE},{square:v.h1,flag:D.KSIDE_CASTLE}],b:[{square:v.a8,flag:D.QSIDE_CASTLE},{square:v.h8,flag:D.KSIDE_CASTLE}]};var C=new Array(128);var ak={w:E,b:E};var t=k;var d={w:0,b:0};var x=E;var n=0;var g=1;var Z=[];var ab={};if(typeof ao==="undefined"){h(an)}else{h(ao)}function ae(){C=new Array(128);ak={w:E,b:E};t=k;d={w:0,b:0};x=E;n=0;g=1;Z=[];ab={};q(z())}function Y(){h(an)}function h(ay){var aD=ay.split(/\s+/);var aw=aD[0];var aC=0;var aB=f+"12345678/";if(!aa(ay).valid){return false}ae();for(var az=0;az<aw.length;az++){var aA=aw.charAt(az);if(aA==="/"){aC+=8}else{if(r(aA)){aC+=parseInt(aA,10)}else{var ax=(aA<"a")?k:p;aq({type:aA.toLowerCase(),color:ax},m(aC));aC++}}}t=aD[1];if(aD[2].indexOf("K")>-1){d.w|=D.KSIDE_CASTLE}if(aD[2].indexOf("Q")>-1){d.w|=D.QSIDE_CASTLE}if(aD[2].indexOf("k")>-1){d.b|=D.KSIDE_CASTLE}if(aD[2].indexOf("q")>-1){d.b|=D.QSIDE_CASTLE}x=(aD[3]==="-")?E:v[aD[3]];n=parseInt(aD[4],10);g=parseInt(aD[5],10);q(z());return true}function aa(ay){var aD={0:"No errors.",1:"FEN string must contain six space-delimited fields.",2:"6th field (move number) must be a positive integer.",3:"5th field (half move counter) must be a non-negative integer.",4:"4th field (en-passant square) is invalid.",5:"3rd field (castling availability) is invalid.",6:"2nd field (side to move) is invalid.",7:"1st field (piece positions) does not contain 8 '/'-delimited rows.",8:"1st field (piece positions) is invalid [consecutive numbers].",9:"1st field (piece positions) is invalid [invalid piece].",10:"1st field (piece positions) is invalid [row too large]."};var aC=ay.split(/\s+/);if(aC.length!==6){return{valid:false,error_number:1,error:aD[1]}}if(isNaN(aC[5])||(parseInt(aC[5],10)<=0)){return{valid:false,error_number:2,error:aD[2]}}if(isNaN(aC[4])||(parseInt(aC[4],10)<0)){return{valid:false,error_number:3,error:aD[3]}}if(!/^(-|[abcdefgh][36])$/.test(aC[3])){return{valid:false,error_number:4,error:aD[4]}}if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(aC[2])){return{valid:false,error_number:5,error:aD[5]}}if(!/^(w|b)$/.test(aC[1])){return{valid:false,error_number:6,error:aD[6]}}var aB=aC[0].split("/");if(aB.length!==8){return{valid:false,error_number:7,error:aD[7]}}for(var az=0;az<aB.length;az++){var aw=0;var aA=false;for(var ax=0;ax<aB[az].length;ax++){if(!isNaN(aB[az][ax])){if(aA){return{valid:false,error_number:8,error:aD[8]}}aw+=parseInt(aB[az][ax],10);aA=true}else{if(!/^[prnbqkPRNBQK]$/.test(aB[az][ax])){return{valid:false,error_number:9,error:aD[9]}}aw+=1;aA=false}}if(aw!==8){return{valid:false,error_number:10,error:aD[10]}}}return{valid:true,error_number:0,error:aD[0]}}function z(){var aC=0;var ay="";for(var aA=v.a8;aA<=v.h1;aA++){if(C[aA]==null){aC++}else{if(aC>0){ay+=aC;aC=0}var ax=C[aA].color;var aB=C[aA].type;ay+=(ax===k)?aB.toUpperCase():aB.toLowerCase()}if((aA+1)&136){if(aC>0){ay+=aC}if(aA!==v.h1){ay+="/"}aC=0;aA+=8}}var az="";if(d[k]&D.KSIDE_CASTLE){az+="K"}if(d[k]&D.QSIDE_CASTLE){az+="Q"}if(d[p]&D.KSIDE_CASTLE){az+="k"}if(d[p]&D.QSIDE_CASTLE){az+="q"}az=az||"-";var aw=(x===E)?"-":m(x);return[ay,t,az,aw,n,g].join(" ")}function at(aw){for(var ax=0;ax<aw.length;ax+=2){if(typeof aw[ax]==="string"&&typeof aw[ax+1]==="string"){ab[aw[ax]]=aw[ax+1]}}return ab}function q(aw){if(Z.length>0){return}if(aw!==an){ab.SetUp=aw;ab.FEN="1"}else{delete ab.SetUp;delete ab.FEN}}function ag(ax){var aw=C[v[ax]];return(aw)?{type:aw.type,color:aw.color}:null}function aq(aw,ay){if(!("type" in aw&&"color" in aw)){return false}if(f.indexOf(aw.type.toLowerCase())===-1){return false}if(!(ay in v)){return false}var ax=v[ay];C[ax]={type:aw.type,color:aw.color};if(aw.type===ad){ak[aw.color]=ax}q(z());return true}function F(ax){var aw=ag(ax);C[v[ax]]=null;if(aw&&aw.type===ad){ak[aw.color]=E}q(z());return aw}function am(ay,aB,aA,ax,az){var aw={color:t,from:aB,to:aA,flags:ax,piece:ay[aB].type};if(az){aw.flags|=D.PROMOTION;aw.promotion=az}if(ay[aA]){aw.captured=ay[aA].type}else{if(ax&D.EP_CAPTURE){aw.captured=X}}return aw}function b(ay){function aN(aT,aR,aW,aV,aQ){if(aT[aW].type===X&&(U(aV)===K||U(aV)===W)){var aU=[j,H,s,S];for(var aS=0,aP=aU.length;aS<aP;aS++){aR.push(am(aT,aW,aV,aQ,aU[aS]))}}else{aR.push(am(aT,aW,aV,aQ))}}var aO=[];var aA=t;var aK=au(aA);var aL={b:M,w:T};var aF=v.a8;var aC=v.h1;var aD=false;var aB=(typeof ay!=="undefined"&&"legal" in ay)?ay.legal:true;if(typeof ay!=="undefined"&&"square" in ay){if(ay.square in v){aF=aC=v[ay.square];aD=true}else{return[]}}for(var aH=aF;aH<=aC;aH++){if(aH&136){aH+=7;continue}var ax=C[aH];if(ax==null||ax.color!==aA){continue}if(ax.type===X){var aE=aH+u[aA][0];if(C[aE]==null){aN(C,aO,aH,aE,D.NORMAL);var aE=aH+u[aA][1];if(aL[aA]===U(aH)&&C[aE]==null){aN(C,aO,aH,aE,D.BIG_PAWN)}}for(aG=2;aG<4;aG++){var aE=aH+u[aA][aG];if(aE&136){continue}if(C[aE]!=null&&C[aE].color===aK){aN(C,aO,aH,aE,D.CAPTURE)}else{if(aE===x){aN(C,aO,aH,x,D.EP_CAPTURE)}}}}else{for(var aG=0,aI=J[ax.type].length;aG<aI;aG++){var az=J[ax.type][aG];var aE=aH;while(true){aE+=az;if(aE&136){break}if(C[aE]==null){aN(C,aO,aH,aE,D.NORMAL)}else{if(C[aE].color===aA){break}aN(C,aO,aH,aE,D.CAPTURE);break}if(ax.type==="n"||ax.type==="k"){break}}}}}if((!aD)||aC===ak[aA]){if(d[aA]&D.KSIDE_CASTLE){var aM=ak[aA];var aJ=aM+2;if(C[aM+1]==null&&C[aJ]==null&&!af(aK,ak[aA])&&!af(aK,aM+1)&&!af(aK,aJ)){aN(C,aO,ak[aA],aJ,D.KSIDE_CASTLE)}}if(d[aA]&D.QSIDE_CASTLE){var aM=ak[aA];var aJ=aM-2;if(C[aM-1]==null&&C[aM-2]==null&&C[aM-3]==null&&!af(aK,ak[aA])&&!af(aK,aM-1)&&!af(aK,aJ)){aN(C,aO,ak[aA],aJ,D.QSIDE_CASTLE)}}}if(!aB){return aO}var aw=[];for(var aH=0,aI=aO.length;aH<aI;aH++){al(aO[aH]);if(!L(aA)){aw.push(aO[aH])}G()}return aw}function ar(ax){var ay="";if(ax.flags&D.KSIDE_CASTLE){ay="O-O"}else{if(ax.flags&D.QSIDE_CASTLE){ay="O-O-O"}else{var aw=c(ax);if(ax.piece!==X){ay+=ax.piece.toUpperCase()+aw}if(ax.flags&(D.CAPTURE|D.EP_CAPTURE)){if(ax.piece===X){ay+=m(ax.from)[0]}ay+="x"}ay+=m(ax.to);if(ax.flags&D.PROMOTION){ay+="="+ax.promotion.toUpperCase()}}}al(ax);if(R()){if(I()){ay+="#"}else{ay+="+"}}G();return ay}function af(ax,aD){for(var aA=v.a8;aA<=v.h1;aA++){if(aA&136){aA+=7;continue}if(C[aA]==null||C[aA].color!==ax){continue}var aE=C[aA];var aw=aA-aD;var aC=aw+119;if(ac[aC]&(1<<av[aE.type])){if(aE.type===X){if(aw>0){if(aE.color===k){return true}}else{if(aE.color===p){return true}}continue}if(aE.type==="n"||aE.type==="k"){return true}var ay=o[aC];var az=aA+ay;var aB=false;while(az!==aD){if(C[az]!=null){aB=true;break}az+=ay}if(!aB){return true}}}return false}function L(aw){return af(au(aw),ak[aw])}function R(){return L(t)}function I(){return R()&&b().length===0}function ah(){return !R()&&b().length===0}function A(){var aC={};var aB=[];var ax=0;var aD=0;for(var ay=v.a8;ay<=v.h1;ay++){aD=(aD+1)%2;if(ay&136){ay+=7;continue}var aA=C[ay];if(aA){aC[aA.type]=(aA.type in aC)?aC[aA.type]+1:1;if(aA.type===s){aB.push(aD)}ax++}}if(ax===2){return true}else{if(ax===3&&(aC[s]===1||aC[S]===1)){return true}else{if(ax===aC[s]+2){var az=0;var aw=aB.length;for(var ay=0;ay<aw;ay++){az+=aB[ay]}if(az===0||az===aw){return true}}}}return false}function i(){var ay=[];var ax={};var aA=false;while(true){var aw=G();if(!aw){break}ay.push(aw)}while(true){var az=z().split(" ").slice(0,4).join(" ");ax[az]=(az in ax)?ax[az]+1:1;if(ax[az]>=3){aA=true}if(!ay.length){break}al(ay.pop())}return aA}function e(aw){Z.push({move:aw,kings:{b:ak.b,w:ak.w},turn:t,castling:{b:d.b,w:d.w},ep_square:x,half_moves:n,move_number:g})}function al(ax){var aB=t;var aC=au(aB);e(ax);C[ax.to]=C[ax.from];C[ax.from]=null;if(ax.flags&D.EP_CAPTURE){if(t===p){C[ax.to-16]=null}else{C[ax.to+16]=null}}if(ax.flags&D.PROMOTION){C[ax.to]={type:ax.promotion,color:aB}}if(C[ax.to].type===ad){ak[C[ax.to].color]=ax.to;if(ax.flags&D.KSIDE_CASTLE){var az=ax.to-1;var aA=ax.to+1;C[az]=C[aA];C[aA]=null}else{if(ax.flags&D.QSIDE_CASTLE){var az=ax.to+1;var aA=ax.to-2;C[az]=C[aA];C[aA]=null}}d[aB]=""}if(d[aB]){for(var ay=0,aw=V[aB].length;ay<aw;ay++){if(ax.from===V[aB][ay].square&&d[aB]&V[aB][ay].flag){d[aB]^=V[aB][ay].flag;break}}}if(d[aC]){for(var ay=0,aw=V[aC].length;ay<aw;ay++){if(ax.to===V[aC][ay].square&&d[aC]&V[aC][ay].flag){d[aC]^=V[aC][ay].flag;break}}}if(ax.flags&D.BIG_PAWN){if(t==="b"){x=ax.to-16}else{x=ax.to+16}}else{x=E}if(ax.piece===X){n=0}else{if(ax.flags&(D.CAPTURE|D.EP_CAPTURE)){n=0}else{n++}}if(t===p){g++}t=au(t)}function G(){var ax=Z.pop();if(ax==null){return null}var aw=ax.move;ak=ax.kings;t=ax.turn;d=ax.castling;x=ax.ep_square;n=ax.half_moves;g=ax.move_number;var aB=t;var aC=au(t);C[aw.from]=C[aw.to];C[aw.from].type=aw.piece;C[aw.to]=null;if(aw.flags&D.CAPTURE){C[aw.to]={type:aw.captured,color:aC}}else{if(aw.flags&D.EP_CAPTURE){var ay;if(aB===p){ay=aw.to-16}else{ay=aw.to+16}C[ay]={type:X,color:aC}}}if(aw.flags&(D.KSIDE_CASTLE|D.QSIDE_CASTLE)){var az,aA;if(aw.flags&D.KSIDE_CASTLE){az=aw.to+1;aA=aw.to-1}else{if(aw.flags&D.QSIDE_CASTLE){az=aw.to-2;aA=aw.to+1}}C[az]=C[aA];C[aA]=null}return aw}function c(ax){var aw=b();var aE=ax.from;var aF=ax.to;var aI=ax.piece;var aH=0;var aD=0;var aB=0;for(var az=0,aC=aw.length;az<aC;az++){var aA=aw[az].from;var ay=aw[az].to;var aG=aw[az].piece;if(aI===aG&&aE!==aA&&aF===ay){aH++;if(U(aE)===U(aA)){aD++}if(y(aE)===y(aA)){aB++}}}if(aH>0){if(aD>0&&aB>0){return m(aE)}else{if(aB>0){return m(aE).charAt(1)}else{return m(aE).charAt(0)}}}return""}function a(){var az="   +------------------------+\n";for(var ax=v.a8;ax<=v.h1;ax++){if(y(ax)===0){az+=" 87654321"[U(ax)]+" |"}if(C[ax]==null){az+=" . "}else{var ay=C[ax].type;var aw=C[ax].color;var aA=(aw===k)?ay.toUpperCase():ay.toLowerCase();az+=" "+aA+" "}if((ax+1)&136){az+="|\n";ax+=8}}az+="   +------------------------+\n";az+="     a  b  c  d  e  f  g  h\n";return az}function U(aw){return aw>>4}function y(aw){return aw&15}function m(aw){var ay=y(aw),ax=U(aw);return"abcdefgh".substring(ay,ay+1)+"87654321".substring(ax,ax+1)}function au(aw){return aw===k?p:k}function r(aw){return"0123456789".indexOf(aw)!==-1}function l(az){var ay=w(az);ay.san=ar(ay);ay.to=m(ay.to);ay.from=m(ay.from);var ax="";for(var aw in D){if(D[aw]&ay.flags){ax+=aj[aw]}}ay.flags=ax;return ay}function w(ay){var aw=(ay instanceof Array)?[]:{};for(var ax in ay){if(typeof ax==="object"){aw[ax]=w(ay[ax])}else{aw[ax]=ay[ax]}}return aw}function ap(aw){return aw.replace(/^\s+|\s+$/g,"")}function ai(aC){var ax=b({legal:false});var az=0;var ay=t;for(var aA=0,aw=ax.length;aA<aw;aA++){al(ax[aA]);if(!L(ay)){if(aC-1>0){var aB=ai(aC-1);az+=aB}else{az++}}G()}return az}return{WHITE:k,BLACK:p,PAWN:X,KNIGHT:S,BISHOP:s,ROOK:H,QUEEN:j,KING:ad,SQUARES:(function(){var ax=[];for(var aw=v.a8;aw<=v.h1;aw++){if(aw&136){aw+=7;continue}ax.push(m(aw))}return ax})(),FLAGS:aj,load:function(aw){return h(aw)},reset:function(){return Y()},moves:function(az){var ay=b(az);var ax=[];for(var aA=0,aw=ay.length;aA<aw;aA++){if(typeof az!=="undefined"&&"verbose" in az&&az.verbose){ax.push(l(ay[aA]))}else{ax.push(ar(ay[aA]))}}return ax},in_check:function(){return R()},in_checkmate:function(){return I()},in_stalemate:function(){return ah()},in_draw:function(){return n>=100||ah()||A()||i()},insufficient_material:function(){return A()},in_threefold_repetition:function(){return i()},game_over:function(){return n>=100||I()||ah()||A()||i()},validate_fen:function(aw){return aa(aw)},fen:function(){return z()},pgn:function(aG){var az=(typeof aG==="object"&&typeof aG.newline_char==="string")?aG.newline_char:"\n";var aF=(typeof aG==="object"&&typeof aG.max_width==="number")?aG.max_width:0;var aH=[];var aD=false;for(var aB in ab){aH.push("["+aB+' "'+ab[aB]+'"]'+az);aD=true}if(aD&&Z.length){aH.push(az)}var aE=[];while(Z.length>0){aE.push(G())}var ax=[];var ay="";var aw=1;while(aE.length>0){var aA=aE.pop();if(aw===1&&aA.color==="b"){ay="1. ...";aw++}else{if(aA.color==="w"){if(ay.length){ax.push(ay)}ay=aw+".";aw++}}ay=ay+" "+ar(aA);al(aA)}if(ay.length){ax.push(ay)}if(typeof ab.Result!=="undefined"){ax.push(ab.Result)}if(aF===0){return aH.join("")+ax.join(" ")}var aC=0;for(var aB=0;aB<ax.length;aB++){if(aC+ax[aB].length>aF&&aB!==0){if(aH[aH.length-1]===" "){aH.pop()}aH.push(az);aC=0}else{if(aB!==0){aH.push(" ");aC++}}aH.push(ax[aB]);aC+=ax[aB].length}return aH.join("")},load_pgn:function(aG,aK){function aL(aM){return aM.replace(/\n/g,"\\n").replace(/\r/g,"\\r")}function az(aO){var aV,aW,aN=D.NORMAL,aM;var aP=aO.match(/^([NBKRQ])?([abcdefgh12345678][12345678]?)?(x)?([abcdefgh][12345678])(=?[NBRQ])?/);if(aO.slice(0,5)==="O-O-O"){aW=ak[t];aV=aW-2;aN=D.QSIDE_CASTLE}else{if(aO.slice(0,3)==="O-O"){aW=ak[t];aV=aW+2;aN=D.KSIDE_CASTLE}else{if(aP&&aP[1]){var aY=aP[1].toLowerCase();if(aP[3]){aN=D.CAPTURE}aV=v[aP[4]];for(var aR=0,aS=J[aY].length;aR<aS;aR++){var aQ=J[aY][aR];var aX=aV;while(true){aX+=aQ;if(aX&136){break}var aU=C[aX];if(aU){if(aU.color===t&&aU.type===aY&&(!aP[2]||m(aX).indexOf(aP[2])>=0)){aW=aX}break}if(aY==="n"||aY==="k"){break}}}}else{if(aP){if(aP[3]){aV=v[aP[4]];for(var aR=2;aR<4;aR++){var aX=aV-u[t][aR];if(aX&136){continue}if(C[aX]!=null&&C[aX].color===t&&m(aX)[0]===aP[2]){aW=aX}}if(C[aV]){aN=D.CAPTURE}else{aN=D.EP_CAPTURE}}else{aV=v[aO.slice(0,2)];var aT=aV-u[t][0],aU=C[aT];if(aU&&aU.type===X&&aU.color===t){aW=aT}else{aT=aV-u[t][1];aU=C[aT];if(aU&&aU.type===X&&aU.color===t){aW=aT;aN=D.BIG_PAWN}}}if(aP[5]){if(typeof aP[5][1]=="undefined"){aM=aP[5][0].toLowerCase()}else{aM=aP[5][1].toLowerCase()}}}}}}if(aW>=0&&aV>=0&&aN){return am(C,aW,aV,aN,aM)}else{if(aO.length>0){}}}function aE(aM){return az(ap(aM))}function aw(aM){var aO=false;for(var aN in aM){aO=true}return aO}function aI(aT,aM){var aR=(typeof aM==="object"&&typeof aM.newline_char==="string")?aM.newline_char:"\r?\n";var aQ={};var aS=aT.split(aR);var aO="";var aP="";for(var aN=0;aN<aS.length;aN++){aO=aS[aN].replace(/^\[([A-Z][A-Za-z]*)\s.*\]$/,"$1");aP=aS[aN].replace(/^\[[A-Za-z]+\s"(.*)"\]$/,"$1");if(ap(aO).length>0){aQ[aO]=aP}}return aQ}var aB=(typeof aK==="object"&&typeof aK.newline_char==="string")?aK.newline_char:"\r?\n";var aH=new RegExp("^(\\[(.|"+aL(aB)+")*\\])("+aL(aB)+")*1.("+aL(aB)+"|.)*$","g");var aD=aG.replace(aH,"$1");if(aD[0]!=="["){aD=""}Y();var aA=aI(aD,aK);for(var aJ in aA){at([aJ,aA[aJ]])}var ay=aG.replace(aD,"").replace(new RegExp(aL(aB),"g")," ");ay=ay.replace(/(\{[^}]+\})+?/g,"");ay=ay.replace(/\d+\./g,"");var ax=ap(ay).split(new RegExp(/\s+/));ax=ax.join(",").replace(/,,+/g,",").split(",");var aC="";for(var aF=0;aF<ax.length-1;aF++){aC=aE(ax[aF]);if(aC==null){return false}else{al(aC)}}aC=ax[ax.length-1];if(B.indexOf(aC)>-1){if(aw(ab)&&typeof ab.Result==="undefined"){at(["Result",aC])}}else{aC=aE(aC);if(aC==null){return false}else{al(aC)}}return true},header:function(){return at(arguments)},ascii:function(){return a()},turn:function(){return t},move:function(aA){var az=null;var ay=b();if(typeof aA==="string"){for(var aB=0,ax=ay.length;aB<ax;aB++){if(aA===ar(ay[aB])){az=ay[aB];break}}}else{if(typeof aA==="object"){for(var aB=0,ax=ay.length;aB<ax;aB++){if(aA.from===m(ay[aB].from)&&aA.to===m(ay[aB].to)&&(!("promotion" in ay[aB])||aA.promotion===ay[aB].promotion)){az=ay[aB];break}}}}if(!az){return null}var aw=l(az);al(az);return aw},undo:function(){var aw=G();return(aw)?l(aw):null},clear:function(){return ae()},put:function(aw,ax){return aq(aw,ax)},get:function(aw){return ag(aw)},remove:function(aw){return F(aw)},perft:function(aw){return ai(aw)},square_color:function(ax){if(ax in v){var aw=v[ax];return((U(aw)+y(aw))%2===0)?"light":"dark"}return null},history:function(ay){var aA=[];var az=[];var ax=(typeof ay!=="undefined"&&"verbose" in ay&&ay.verbose);while(Z.length>0){aA.push(G())}while(aA.length>0){var aw=aA.pop();if(ax){az.push(l(aw))}else{az.push(ar(aw))}al(aw)}return az}}};if(typeof exports!=="undefined"){exports.Chess=Chess};

(function (CloudChess, undefined) {
    CloudChess.setup = {
        board : {
        	pieceTheme: 'img/chesspieces/wikipedia/{piece}.png',
  			showNotation: false,
  			draggable: true,
  			dropOffBoard: 'snapback'
        }       
    }
})(window.CloudChess = window.CloudChess || {});

(function (CloudChess, undefined) {
	CloudChess.Game = function(data){
		this.id = data.id;
		this.white = data.white;
		this.pgn = data.pgn;
	}
})(window.CloudChess = window.CloudChess || {});

(function (CloudChess, undefined) {
	var RealtimeStorageService = function(){
        this.client = CloudChat.RealtimeStorageService.instance.client;     

        if(RealtimeStorageService.caller != RealtimeStorageService.getInstance){
            throw new Error("This object cannot be instanciated");
        }
    };

    RealtimeStorageService.instance = null;

    RealtimeStorageService.getInstance = function(){
        if(this.instance === null){
            this.instance = new RealtimeStorageService();
        }
        return this.instance;
    };

    RealtimeStorageService.prototype = {
        game : function(id,callback){
        	var itemRef = this.client.table("chess-games")
        					.item({ primary: id });

			itemRef.get(
				function success(itemSnapshot) {
					if(itemSnapshot && itemSnapshot.val()){
						var game = new CloudChess.Game(itemSnapshot.val());
						callback(game);
					}else{
						callback(null);
					}
				}, 
				function error(data) { 
					callback(null);
				}
			);      
        },

        createGame : function(game,callback){
        	var tableRef = this.client.table("chess-games");

        	tableRef.push(
        		game,
        		function success(itemSnapshot) {
					callback(game);
				}, 
				function error(data) { 
					callback(null);
				}
        	);
        }
    }    

    CloudChess.RealtimeStorageService = RealtimeStorageService;
})(window.CloudChess = window.CloudChess || {});

(function (CloudChess, undefined) {

	CloudChess.BoardController = function($scope, $element){ 
		var configuration = CloudChess.setup.board;
		configuration.onMoveEnd = this.onMoveEnd.bind(this);
		configuration.onDragStart = this.onDragStart.bind(this);
		configuration.onDrop = this.onDrop.bind(this);
		configuration.onSnapEnd = this.onSnapEnd.bind(this);

		this.game = new Chess();
    	this.board = new ChessBoard($element,CloudChess.setup.board);	
    	this.board.start(false);    
    	this.handleEvents();
    }

    CloudChess.BoardController.prototype = {
    	handleEvents : function(){
    		CloudChat.EventManager.subscribe("currentGame",function(game){            
		        //TODO: change board
		    });
    	},

    	onDragStart : function(source, piece, position, orientation) {
		  if (this.game.game_over() === true ||
		      (this.game.turn() === 'w' && piece.search(/^b/) !== -1) ||
		      (this.game.turn() === 'b' && piece.search(/^w/) !== -1)) {
		    return false;
		  }
		},

		onDrop : function(source, target) {
		  // see if the move is legal
		  var move = this.game.move({
		    from: source,
		    to: target,
		    promotion: 'q' // NOTE: always promote to a pawn for example simplicity
		  });

		  // illegal move
		  if (move === null) return 'snapback';

		  console.log(this.game.turn(),source,target);

		  this.updateStatus();
		},

		onSnapEnd : function() {
		  this.board.position(this.game.fen());
		},

		updateStatus : function() {
		  var status = '';

		  var moveColor = 'White';
		  if (this.game.turn() === 'b') {
		    moveColor = 'Black';
		  }

		  // checkmate?
		  if (this.game.in_checkmate() === true) {
		    //TODO: handle checkmate
		  }

		  // draw?
		  else if (this.game.in_draw() === true) {
		    //TODO: handle draw
		  }

		  // game still on
		  else {
		    // check?
		    if (this.game.in_check() === true) {
		      //TODO: handle check
		    }
		  }
		},

    	onMoveEnd : function(oldPosition, newPosition){
    		console.log(newPosition);
    	}
    }

})(window.CloudChess = window.CloudChess || {});

