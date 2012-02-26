goog.provide('alephtest.websocket');
goog.require('cljs.core');
alephtest.websocket.create_socket = (function create_socket(on_message_func){
var socket__19100 = alephtest.websocket.connect_BANG_.call(null);

alephtest.websocket.on_open_BANG_.call(null,socket__19100,(function (){
return alephtest.websocket.on_message_BANG_.call(null,socket__19100,on_message_func);
}));
return socket__19100;
});
alephtest.websocket.connect_BANG_ = (function connect_BANG_(){
return (new WebSocket("ws://localhost:8080/socket"));
});
alephtest.websocket.on_open_BANG_ = (function on_open_BANG_(socket,func){
return socket.onopen = func;
});
alephtest.websocket.on_message_BANG_ = (function on_message_BANG_(socket,func){
return socket.onmessage = func;
});
alephtest.websocket.send_BANG_ = (function send_BANG_(socket,msg){
return socket.send(msg);
});
