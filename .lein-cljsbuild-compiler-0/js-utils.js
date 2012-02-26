goog.provide('alephtest.js_utils');
goog.require('cljs.core');
alephtest.js_utils.log = (function log(data){
return console.log(data);
});
alephtest.js_utils.current_timestamp_ms = (function current_timestamp_ms(){
return (new Date()).getTime();
});
/**
* Recursively transforms ClojureScript maps into Javascript objects,
* other ClojureScript colls into JavaScript arrays, and ClojureScript
* keywords into JavaScript strings.
* 
* Borrowed and updated from mmcgrana.
*/
alephtest.js_utils.clj__GT_js = (function clj__GT_js(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.name.call(null,x);
} else
{if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,x)))
{return cljs.core.reduce.call(null,(function (m,p__19101){
var vec__19102__19103 = p__19101;
var k__19104 = cljs.core.nth.call(null,vec__19102__19103,0,null);
var v__19105 = cljs.core.nth.call(null,vec__19102__19103,1,null);

return cljs.core.assoc.call(null,m,clj__GT_js.call(null,k__19104),clj__GT_js.call(null,v__19105));
}),cljs.core.ObjMap.fromObject([],{}),x).strobj;
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.apply.call(null,cljs.core.array,cljs.core.map.call(null,clj__GT_js,x));
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});
