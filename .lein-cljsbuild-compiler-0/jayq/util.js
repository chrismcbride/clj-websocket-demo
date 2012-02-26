goog.provide('jayq.util');
goog.require('cljs.core');
jayq.util.map__GT_js = (function map__GT_js(m){
var out__20837 = cljs.core.js_obj.call(null);

var G__20838__20839 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__20838__20839))
{var G__20841__20843 = cljs.core.first.call(null,G__20838__20839);
var vec__20842__20844 = G__20841__20843;
var k__20845 = cljs.core.nth.call(null,vec__20842__20844,0,null);
var v__20846 = cljs.core.nth.call(null,vec__20842__20844,1,null);
var G__20838__20847 = G__20838__20839;

var G__20841__20848 = G__20841__20843;
var G__20838__20849 = G__20838__20847;

while(true){
var vec__20850__20851 = G__20841__20848;
var k__20852 = cljs.core.nth.call(null,vec__20850__20851,0,null);
var v__20853 = cljs.core.nth.call(null,vec__20850__20851,1,null);
var G__20838__20854 = G__20838__20849;

(out__20837[cljs.core.name.call(null,k__20852)] = v__20853);
var temp__3698__auto____20855 = cljs.core.next.call(null,G__20838__20854);

if(cljs.core.truth_(temp__3698__auto____20855))
{var G__20838__20856 = temp__3698__auto____20855;

{
var G__20857 = cljs.core.first.call(null,G__20838__20856);
var G__20858 = G__20838__20856;
G__20841__20848 = G__20857;
G__20838__20849 = G__20858;
continue;
}
} else
{}
break;
}
} else
{}
return out__20837;
});
jayq.util.wait = (function wait(ms,func){
return setTimeout(func, ms);
});
/**
* @param {...*} var_args
*/
jayq.util.log = (function() { 
var log__delegate = function (v,text){
var vs__20859 = (cljs.core.truth_(cljs.core.string_QMARK_.call(null,v))?cljs.core.apply.call(null,cljs.core.str,v,text):v);

return console.log(vs__20859);
};
var log = function (v,var_args){
var text = null;
if (goog.isDef(var_args)) {
  text = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return log__delegate.call(this, v, text);
};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__20860){
var v = cljs.core.first(arglist__20860);
var text = cljs.core.rest(arglist__20860);
return log__delegate.call(this, v, text);
});
return log;
})()
;
