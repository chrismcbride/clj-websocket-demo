goog.provide('alephtest.websocket');
goog.require('cljs.core');
goog.require('alephtest.js_utils');
alephtest.websocket.init = (function init(){
var socket__2969 = alephtest.websocket.connect_BANG_.call(null);

return alephtest.websocket.on_open.call(null,socket__2969,(function (){
alephtest.websocket.on_message.call(null,socket__2969,(function (p1__2968_SHARP_){
return alephtest.js_utils.log.call(null,p1__2968_SHARP_.data);
}));
return socket__2969.send("hello");
}));
});
goog.exportSymbol('alephtest.websocket.init', alephtest.websocket.init);
alephtest.websocket.connect_BANG_ = (function connect_BANG_(){
return (new WebSocket("ws://localhost:8080/socket"));
});
alephtest.websocket.on_open = (function on_open(socket,func){
return socket.onopen = func;
});
alephtest.websocket.on_message = (function on_message(socket,func){
return socket.onmessage = func;
});
