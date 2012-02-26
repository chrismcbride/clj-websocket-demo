goog.provide('alephtest.main');
goog.require('cljs.core');
goog.require('alephtest.js_utils');
goog.require('jayq.core');
goog.require('alephtest.websocket');
goog.require('goog.json');
alephtest.main.init = (function init(){
var socket__19098 = alephtest.websocket.create_socket.call(null,(function (p1__19097_SHARP_){
return alephtest.js_utils.log.call(null,p1__19097_SHARP_.data);
}));
var inital_timestamp_ms__19099 = alephtest.js_utils.current_timestamp_ms.call(null);

return jayq.core.bind.call(null,jayq.core.$.call(null,"﷐'body"),"﷐'mousemove",(function (e){
return alephtest.websocket.send_BANG_.call(null,socket__19098,goog.json.serialize.call(null,alephtest.js_utils.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["﷐'x","﷐'y","﷐'offset"],{"﷐'x":e.pageX,"﷐'y":e.pageY,"﷐'offset":(alephtest.js_utils.current_timestamp_ms.call(null) - inital_timestamp_ms__19099)}))));
}));
});
goog.exportSymbol('alephtest.main.init', alephtest.main.init);
