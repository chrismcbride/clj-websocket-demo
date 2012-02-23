goog.provide('websocket');
goog.require('cljs.core');
websocket.connect_BANG_ = (function connect_BANG_(){
var socket__2969 = (new WebSocket("ws://localhost:8080"));

return socket__2969.onopen = (function (){
socket__2969.onmessage = (function (x){
return console.log(x);
});
return socket__2969.send("hello");
});
});
goog.exportSymbol('websocket.connect_BANG_', websocket.connect_BANG_);
