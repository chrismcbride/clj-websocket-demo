goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,sel)))
{return sel;
} else
{if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,sel)))
{return cljs.core.str.call(null,"[crateGroup=",jayq.core.crate_meta.call(null,sel),"]");
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,sel)))
{return cljs.core.name.call(null,sel);
} else
{if(cljs.core.truth_("﷐'else"))
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__20762){
var vec__20763__20764 = p__20762;
var context__20765 = cljs.core.nth.call(null,vec__20763__20764,0,null);

if(cljs.core.truth_(cljs.core.not.call(null,context__20765)))
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery.call(null,jayq.core.__GT_selector.call(null,sel),context__20765);
}
};
var $ = function (sel,var_args){
var p__20762 = null;
if (goog.isDef(var_args)) {
  p__20762 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__20762);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__20766){
var sel = cljs.core.first(arglist__20766);
var p__20762 = cljs.core.rest(arglist__20766);
return $__delegate.call(this, sel, p__20762);
});
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20768 = null;
var G__20768__20769 = (function (this$,k){
var or__3548__auto____20767 = this$.slice(k,(k + 1));

if(cljs.core.truth_(or__3548__auto____20767))
{return or__3548__auto____20767;
} else
{return null;
}
});
var G__20768__20770 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
G__20768 = function(this$,k,not_found){
switch(arguments.length){
case  2 :
return G__20768__20769.call(this,this$,k);
case  3 :
return G__20768__20770.call(this,this$,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20768;
})()
;
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth = (function (this$,n,not_found){
if(cljs.core.truth_((n < cljs.core.count.call(null,this$))))
{return this$.slice(n,(n + 1));
} else
{if(cljs.core.truth_((void 0 === not_found)))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first = (function (this$){
return this$.slice(0,1);
});
jQuery.prototype.cljs$core$ISeq$_rest = (function (this$){
if(cljs.core.truth_((cljs.core.count.call(null,this$) > 1)))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__20772 = null;
var G__20772__20773 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__20772__20774 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__20772 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__20772__20773.call(this,_,k);
case  3 :
return G__20772__20774.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20772;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.map__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,opts)))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.map__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__20776){
var vec__20777__20778 = p__20776;
var v__20779 = cljs.core.nth.call(null,vec__20777__20778,0,null);

var a__20780 = cljs.core.name.call(null,a);

if(cljs.core.truth_(cljs.core.not.call(null,v__20779)))
{return $elem.attr(a__20780);
} else
{return $elem.attr(a__20780,v__20779);
}
};
var attr = function ($elem,a,var_args){
var p__20776 = null;
if (goog.isDef(var_args)) {
  p__20776 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__20776);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__20781){
var $elem = cljs.core.first(arglist__20781);
var a = cljs.core.first(cljs.core.next(arglist__20781));
var p__20776 = cljs.core.rest(cljs.core.next(arglist__20781));
return attr__delegate.call(this, $elem, a, p__20776);
});
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__20782){
var vec__20783__20784 = p__20782;
var v__20785 = cljs.core.nth.call(null,vec__20783__20784,0,null);

var k__20786 = cljs.core.name.call(null,k);

if(cljs.core.truth_(cljs.core.not.call(null,v__20785)))
{return $elem.data(k__20786);
} else
{return $elem.data(k__20786,v__20785);
}
};
var data = function ($elem,k,var_args){
var p__20782 = null;
if (goog.isDef(var_args)) {
  p__20782 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__20782);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__20787){
var $elem = cljs.core.first(arglist__20787);
var k = cljs.core.first(cljs.core.next(arglist__20787));
var p__20782 = cljs.core.rest(cljs.core.next(arglist__20787));
return data__delegate.call(this, $elem, k, p__20782);
});
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__20788 = cljs.core.name.call(null,cl);

return $elem.addClass(cl__20788);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__20789 = cljs.core.name.call(null,cl);

return $elem.removeClass(cl__20789);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__20790){
var vec__20791__20792 = p__20790;
var speed__20793 = cljs.core.nth.call(null,vec__20791__20792,0,null);
var on_finish__20794 = cljs.core.nth.call(null,vec__20791__20792,1,null);

return $elem.hide(speed__20793,on_finish__20794);
};
var hide = function ($elem,var_args){
var p__20790 = null;
if (goog.isDef(var_args)) {
  p__20790 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__20790);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__20795){
var $elem = cljs.core.first(arglist__20795);
var p__20790 = cljs.core.rest(arglist__20795);
return hide__delegate.call(this, $elem, p__20790);
});
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__20796){
var vec__20797__20798 = p__20796;
var speed__20799 = cljs.core.nth.call(null,vec__20797__20798,0,null);
var on_finish__20800 = cljs.core.nth.call(null,vec__20797__20798,1,null);

return $elem.show(speed__20799,on_finish__20800);
};
var show = function ($elem,var_args){
var p__20796 = null;
if (goog.isDef(var_args)) {
  p__20796 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__20796);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__20801){
var $elem = cljs.core.first(arglist__20801);
var p__20796 = cljs.core.rest(arglist__20801);
return show__delegate.call(this, $elem, p__20796);
});
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__20802){
var vec__20803__20804 = p__20802;
var speed__20805 = cljs.core.nth.call(null,vec__20803__20804,0,null);
var on_finish__20806 = cljs.core.nth.call(null,vec__20803__20804,1,null);

return $elem.fadeOut(speed__20805,on_finish__20806);
};
var fade_out = function ($elem,var_args){
var p__20802 = null;
if (goog.isDef(var_args)) {
  p__20802 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__20802);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__20807){
var $elem = cljs.core.first(arglist__20807);
var p__20802 = cljs.core.rest(arglist__20807);
return fade_out__delegate.call(this, $elem, p__20802);
});
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__20808){
var vec__20809__20810 = p__20808;
var speed__20811 = cljs.core.nth.call(null,vec__20809__20810,0,null);
var on_finish__20812 = cljs.core.nth.call(null,vec__20809__20810,1,null);

return $elem.fadeIn(speed__20811,on_finish__20812);
};
var fade_in = function ($elem,var_args){
var p__20808 = null;
if (goog.isDef(var_args)) {
  p__20808 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__20808);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__20813){
var $elem = cljs.core.first(arglist__20813);
var p__20808 = cljs.core.rest(arglist__20813);
return fade_in__delegate.call(this, $elem, p__20808);
});
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__20814){
var vec__20815__20816 = p__20814;
var speed__20817 = cljs.core.nth.call(null,vec__20815__20816,0,null);
var on_finish__20818 = cljs.core.nth.call(null,vec__20815__20816,1,null);

return $elem.slideUp(speed__20817,on_finish__20818);
};
var slide_up = function ($elem,var_args){
var p__20814 = null;
if (goog.isDef(var_args)) {
  p__20814 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__20814);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__20819){
var $elem = cljs.core.first(arglist__20819);
var p__20814 = cljs.core.rest(arglist__20819);
return slide_up__delegate.call(this, $elem, p__20814);
});
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__20820){
var vec__20821__20822 = p__20820;
var speed__20823 = cljs.core.nth.call(null,vec__20821__20822,0,null);
var on_finish__20824 = cljs.core.nth.call(null,vec__20821__20822,1,null);

return $elem.slideDown(speed__20823,on_finish__20824);
};
var slide_down = function ($elem,var_args){
var p__20820 = null;
if (goog.isDef(var_args)) {
  p__20820 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__20820);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__20825){
var $elem = cljs.core.first(arglist__20825);
var p__20820 = cljs.core.rest(arglist__20825);
return slide_down__delegate.call(this, $elem, p__20820);
});
return slide_down;
})()
;
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__20826){
var vec__20827__20828 = p__20826;
var v__20829 = cljs.core.nth.call(null,vec__20827__20828,0,null);

if(cljs.core.truth_(v__20829))
{return $elem.val(v__20829);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__20826 = null;
if (goog.isDef(var_args)) {
  p__20826 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__20826);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__20830){
var $elem = cljs.core.first(arglist__20830);
var p__20826 = cljs.core.rest(arglist__20830);
return val__delegate.call(this, $elem, p__20826);
});
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.xhr = (function xhr(p__20831,content,callback){
var vec__20832__20833 = p__20831;
var method__20834 = cljs.core.nth.call(null,vec__20832__20833,0,null);
var uri__20835 = cljs.core.nth.call(null,vec__20832__20833,1,null);

var params__20836 = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["﷐'type","﷐'data","﷐'success"],{"﷐'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method__20834)),"﷐'data":jayq.util.map__GT_js.call(null,content),"﷐'success":callback}));

return jQuery.ajax(uri__20835,params__20836);
});
