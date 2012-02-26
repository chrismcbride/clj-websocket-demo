goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____19106 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____19106))
{return or__3548__auto____19106;
} else
{var or__3548__auto____19107 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____19107))
{return or__3548__auto____19107;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__19171 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____19108 = this$;

if(cljs.core.truth_(and__3546__auto____19108))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19108;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____19109 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19109))
{return or__3548__auto____19109;
} else
{var or__3548__auto____19110 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19110))
{return or__3548__auto____19110;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__19172 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____19111 = this$;

if(cljs.core.truth_(and__3546__auto____19111))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19111;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____19112 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19112))
{return or__3548__auto____19112;
} else
{var or__3548__auto____19113 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19113))
{return or__3548__auto____19113;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__19173 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____19114 = this$;

if(cljs.core.truth_(and__3546__auto____19114))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19114;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____19115 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19115))
{return or__3548__auto____19115;
} else
{var or__3548__auto____19116 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19116))
{return or__3548__auto____19116;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__19174 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____19117 = this$;

if(cljs.core.truth_(and__3546__auto____19117))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19117;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____19118 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19118))
{return or__3548__auto____19118;
} else
{var or__3548__auto____19119 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19119))
{return or__3548__auto____19119;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__19175 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____19120 = this$;

if(cljs.core.truth_(and__3546__auto____19120))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19120;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____19121 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19121))
{return or__3548__auto____19121;
} else
{var or__3548__auto____19122 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19122))
{return or__3548__auto____19122;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__19176 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____19123 = this$;

if(cljs.core.truth_(and__3546__auto____19123))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19123;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____19124 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19124))
{return or__3548__auto____19124;
} else
{var or__3548__auto____19125 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19125))
{return or__3548__auto____19125;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__19177 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____19126 = this$;

if(cljs.core.truth_(and__3546__auto____19126))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19126;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____19127 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19127))
{return or__3548__auto____19127;
} else
{var or__3548__auto____19128 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19128))
{return or__3548__auto____19128;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__19178 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____19129 = this$;

if(cljs.core.truth_(and__3546__auto____19129))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19129;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____19130 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19130))
{return or__3548__auto____19130;
} else
{var or__3548__auto____19131 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19131))
{return or__3548__auto____19131;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__19179 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____19132 = this$;

if(cljs.core.truth_(and__3546__auto____19132))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19132;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____19133 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19133))
{return or__3548__auto____19133;
} else
{var or__3548__auto____19134 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19134))
{return or__3548__auto____19134;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__19180 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____19135 = this$;

if(cljs.core.truth_(and__3546__auto____19135))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19135;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____19136 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19136))
{return or__3548__auto____19136;
} else
{var or__3548__auto____19137 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19137))
{return or__3548__auto____19137;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__19181 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____19138 = this$;

if(cljs.core.truth_(and__3546__auto____19138))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19138;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____19139 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19139))
{return or__3548__auto____19139;
} else
{var or__3548__auto____19140 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19140))
{return or__3548__auto____19140;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__19182 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____19141 = this$;

if(cljs.core.truth_(and__3546__auto____19141))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19141;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____19142 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19142))
{return or__3548__auto____19142;
} else
{var or__3548__auto____19143 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19143))
{return or__3548__auto____19143;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__19183 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____19144 = this$;

if(cljs.core.truth_(and__3546__auto____19144))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19144;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____19145 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19145))
{return or__3548__auto____19145;
} else
{var or__3548__auto____19146 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19146))
{return or__3548__auto____19146;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__19184 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____19147 = this$;

if(cljs.core.truth_(and__3546__auto____19147))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19147;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____19148 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19148))
{return or__3548__auto____19148;
} else
{var or__3548__auto____19149 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19149))
{return or__3548__auto____19149;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__19185 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____19150 = this$;

if(cljs.core.truth_(and__3546__auto____19150))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19150;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____19151 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19151))
{return or__3548__auto____19151;
} else
{var or__3548__auto____19152 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19152))
{return or__3548__auto____19152;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__19186 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____19153 = this$;

if(cljs.core.truth_(and__3546__auto____19153))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19153;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____19154 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19154))
{return or__3548__auto____19154;
} else
{var or__3548__auto____19155 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19155))
{return or__3548__auto____19155;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__19187 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____19156 = this$;

if(cljs.core.truth_(and__3546__auto____19156))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19156;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____19157 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19157))
{return or__3548__auto____19157;
} else
{var or__3548__auto____19158 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19158))
{return or__3548__auto____19158;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__19188 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____19159 = this$;

if(cljs.core.truth_(and__3546__auto____19159))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19159;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____19160 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19160))
{return or__3548__auto____19160;
} else
{var or__3548__auto____19161 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19161))
{return or__3548__auto____19161;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19189 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____19162 = this$;

if(cljs.core.truth_(and__3546__auto____19162))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19162;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____19163 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19163))
{return or__3548__auto____19163;
} else
{var or__3548__auto____19164 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19164))
{return or__3548__auto____19164;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__19190 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____19165 = this$;

if(cljs.core.truth_(and__3546__auto____19165))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19165;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____19166 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19166))
{return or__3548__auto____19166;
} else
{var or__3548__auto____19167 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19167))
{return or__3548__auto____19167;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__19191 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____19168 = this$;

if(cljs.core.truth_(and__3546__auto____19168))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19168;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____19169 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19169))
{return or__3548__auto____19169;
} else
{var or__3548__auto____19170 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19170))
{return or__3548__auto____19170;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__19171.call(this,this$);
case  2 :
return _invoke__19172.call(this,this$,a);
case  3 :
return _invoke__19173.call(this,this$,a,b);
case  4 :
return _invoke__19174.call(this,this$,a,b,c);
case  5 :
return _invoke__19175.call(this,this$,a,b,c,d);
case  6 :
return _invoke__19176.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__19177.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__19178.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__19179.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__19180.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__19181.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__19182.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__19183.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__19184.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__19185.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__19186.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__19187.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__19188.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__19189.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__19190.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__19191.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19193 = coll;

if(cljs.core.truth_(and__3546__auto____19193))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____19193;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____19194 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19194))
{return or__3548__auto____19194;
} else
{var or__3548__auto____19195 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____19195))
{return or__3548__auto____19195;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19196 = coll;

if(cljs.core.truth_(and__3546__auto____19196))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____19196;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____19197 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19197))
{return or__3548__auto____19197;
} else
{var or__3548__auto____19198 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____19198))
{return or__3548__auto____19198;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____19199 = coll;

if(cljs.core.truth_(and__3546__auto____19199))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____19199;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____19200 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19200))
{return or__3548__auto____19200;
} else
{var or__3548__auto____19201 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____19201))
{return or__3548__auto____19201;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__19208 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____19202 = coll;

if(cljs.core.truth_(and__3546__auto____19202))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____19202;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____19203 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19203))
{return or__3548__auto____19203;
} else
{var or__3548__auto____19204 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____19204))
{return or__3548__auto____19204;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__19209 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____19205 = coll;

if(cljs.core.truth_(and__3546__auto____19205))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____19205;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____19206 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19206))
{return or__3548__auto____19206;
} else
{var or__3548__auto____19207 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____19207))
{return or__3548__auto____19207;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__19208.call(this,coll,n);
case  3 :
return _nth__19209.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19211 = coll;

if(cljs.core.truth_(and__3546__auto____19211))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____19211;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____19212 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19212))
{return or__3548__auto____19212;
} else
{var or__3548__auto____19213 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____19213))
{return or__3548__auto____19213;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19214 = coll;

if(cljs.core.truth_(and__3546__auto____19214))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____19214;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____19215 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19215))
{return or__3548__auto____19215;
} else
{var or__3548__auto____19216 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____19216))
{return or__3548__auto____19216;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__19223 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____19217 = o;

if(cljs.core.truth_(and__3546__auto____19217))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____19217;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____19218 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19218))
{return or__3548__auto____19218;
} else
{var or__3548__auto____19219 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____19219))
{return or__3548__auto____19219;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__19224 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____19220 = o;

if(cljs.core.truth_(and__3546__auto____19220))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____19220;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____19221 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19221))
{return or__3548__auto____19221;
} else
{var or__3548__auto____19222 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____19222))
{return or__3548__auto____19222;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__19223.call(this,o,k);
case  3 :
return _lookup__19224.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____19226 = coll;

if(cljs.core.truth_(and__3546__auto____19226))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____19226;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____19227 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19227))
{return or__3548__auto____19227;
} else
{var or__3548__auto____19228 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____19228))
{return or__3548__auto____19228;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____19229 = coll;

if(cljs.core.truth_(and__3546__auto____19229))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____19229;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____19230 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19230))
{return or__3548__auto____19230;
} else
{var or__3548__auto____19231 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____19231))
{return or__3548__auto____19231;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____19232 = coll;

if(cljs.core.truth_(and__3546__auto____19232))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____19232;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____19233 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19233))
{return or__3548__auto____19233;
} else
{var or__3548__auto____19234 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____19234))
{return or__3548__auto____19234;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____19235 = coll;

if(cljs.core.truth_(and__3546__auto____19235))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____19235;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____19236 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19236))
{return or__3548__auto____19236;
} else
{var or__3548__auto____19237 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____19237))
{return or__3548__auto____19237;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19238 = coll;

if(cljs.core.truth_(and__3546__auto____19238))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____19238;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____19239 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19239))
{return or__3548__auto____19239;
} else
{var or__3548__auto____19240 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____19240))
{return or__3548__auto____19240;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19241 = coll;

if(cljs.core.truth_(and__3546__auto____19241))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____19241;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____19242 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19242))
{return or__3548__auto____19242;
} else
{var or__3548__auto____19243 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____19243))
{return or__3548__auto____19243;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____19244 = coll;

if(cljs.core.truth_(and__3546__auto____19244))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____19244;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____19245 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19245))
{return or__3548__auto____19245;
} else
{var or__3548__auto____19246 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____19246))
{return or__3548__auto____19246;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____19247 = o;

if(cljs.core.truth_(and__3546__auto____19247))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____19247;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____19248 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19248))
{return or__3548__auto____19248;
} else
{var or__3548__auto____19249 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____19249))
{return or__3548__auto____19249;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____19250 = o;

if(cljs.core.truth_(and__3546__auto____19250))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____19250;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____19251 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19251))
{return or__3548__auto____19251;
} else
{var or__3548__auto____19252 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____19252))
{return or__3548__auto____19252;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____19253 = o;

if(cljs.core.truth_(and__3546__auto____19253))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____19253;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____19254 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19254))
{return or__3548__auto____19254;
} else
{var or__3548__auto____19255 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____19255))
{return or__3548__auto____19255;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____19256 = o;

if(cljs.core.truth_(and__3546__auto____19256))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____19256;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____19257 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19257))
{return or__3548__auto____19257;
} else
{var or__3548__auto____19258 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____19258))
{return or__3548__auto____19258;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__19265 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____19259 = coll;

if(cljs.core.truth_(and__3546__auto____19259))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____19259;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____19260 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19260))
{return or__3548__auto____19260;
} else
{var or__3548__auto____19261 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____19261))
{return or__3548__auto____19261;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__19266 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____19262 = coll;

if(cljs.core.truth_(and__3546__auto____19262))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____19262;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____19263 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19263))
{return or__3548__auto____19263;
} else
{var or__3548__auto____19264 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____19264))
{return or__3548__auto____19264;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__19265.call(this,coll,f);
case  3 :
return _reduce__19266.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____19268 = o;

if(cljs.core.truth_(and__3546__auto____19268))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____19268;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____19269 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19269))
{return or__3548__auto____19269;
} else
{var or__3548__auto____19270 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____19270))
{return or__3548__auto____19270;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____19271 = o;

if(cljs.core.truth_(and__3546__auto____19271))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____19271;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____19272 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19272))
{return or__3548__auto____19272;
} else
{var or__3548__auto____19273 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____19273))
{return or__3548__auto____19273;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____19274 = o;

if(cljs.core.truth_(and__3546__auto____19274))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____19274;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____19275 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19275))
{return or__3548__auto____19275;
} else
{var or__3548__auto____19276 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____19276))
{return or__3548__auto____19276;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____19277 = o;

if(cljs.core.truth_(and__3546__auto____19277))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____19277;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____19278 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19278))
{return or__3548__auto____19278;
} else
{var or__3548__auto____19279 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____19279))
{return or__3548__auto____19279;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____19280 = d;

if(cljs.core.truth_(and__3546__auto____19280))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____19280;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____19281 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____19281))
{return or__3548__auto____19281;
} else
{var or__3548__auto____19282 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____19282))
{return or__3548__auto____19282;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____19283 = this$;

if(cljs.core.truth_(and__3546__auto____19283))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____19283;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____19284 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19284))
{return or__3548__auto____19284;
} else
{var or__3548__auto____19285 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____19285))
{return or__3548__auto____19285;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____19286 = this$;

if(cljs.core.truth_(and__3546__auto____19286))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____19286;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____19287 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19287))
{return or__3548__auto____19287;
} else
{var or__3548__auto____19288 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____19288))
{return or__3548__auto____19288;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____19289 = this$;

if(cljs.core.truth_(and__3546__auto____19289))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____19289;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____19290 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19290))
{return or__3548__auto____19290;
} else
{var or__3548__auto____19291 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____19291))
{return or__3548__auto____19291;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
Function.prototype.cljs$core$IPrintable$ = true;
Function.prototype.cljs$core$IPrintable$_pr_seq = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__19292 = null;
var G__19292__19293 = (function (o,k){
return null;
});
var G__19292__19294 = (function (o,k,not_found){
return not_found;
});
G__19292 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__19292__19293.call(this,o,k);
case  3 :
return G__19292__19294.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19292;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__19296 = null;
var G__19296__19297 = (function (_,f){
return f.call(null);
});
var G__19296__19298 = (function (_,f,start){
return start;
});
G__19296 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__19296__19297.call(this,_,f);
case  3 :
return G__19296__19298.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19296;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__19300 = null;
var G__19300__19301 = (function (_,n){
return null;
});
var G__19300__19302 = (function (_,n,not_found){
return not_found;
});
G__19300 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__19300__19301.call(this,_,n);
case  3 :
return G__19300__19302.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19300;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__19310 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__19304 = cljs.core._nth.call(null,cicoll,0);
var n__19305 = 1;

while(true){
if(cljs.core.truth_((n__19305 < cljs.core._count.call(null,cicoll))))
{{
var G__19314 = f.call(null,val__19304,cljs.core._nth.call(null,cicoll,n__19305));
var G__19315 = (n__19305 + 1);
val__19304 = G__19314;
n__19305 = G__19315;
continue;
}
} else
{return val__19304;
}
break;
}
}
});
var ci_reduce__19311 = (function (cicoll,f,val){
var val__19306 = val;
var n__19307 = 0;

while(true){
if(cljs.core.truth_((n__19307 < cljs.core._count.call(null,cicoll))))
{{
var G__19316 = f.call(null,val__19306,cljs.core._nth.call(null,cicoll,n__19307));
var G__19317 = (n__19307 + 1);
val__19306 = G__19316;
n__19307 = G__19317;
continue;
}
} else
{return val__19306;
}
break;
}
});
var ci_reduce__19312 = (function (cicoll,f,val,idx){
var val__19308 = val;
var n__19309 = idx;

while(true){
if(cljs.core.truth_((n__19309 < cljs.core._count.call(null,cicoll))))
{{
var G__19318 = f.call(null,val__19308,cljs.core._nth.call(null,cicoll,n__19309));
var G__19319 = (n__19309 + 1);
val__19308 = G__19318;
n__19309 = G__19319;
continue;
}
} else
{return val__19308;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__19310.call(this,cicoll,f);
case  3 :
return ci_reduce__19311.call(this,cicoll,f,val);
case  4 :
return ci_reduce__19312.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__19320 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__19333 = null;
var G__19333__19334 = (function (_,f){
var this__19321 = this;
return cljs.core.ci_reduce.call(null,this__19321.a,f,(this__19321.a[this__19321.i]),(this__19321.i + 1));
});
var G__19333__19335 = (function (_,f,start){
var this__19322 = this;
return cljs.core.ci_reduce.call(null,this__19322.a,f,start,this__19322.i);
});
G__19333 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__19333__19334.call(this,_,f);
case  3 :
return G__19333__19335.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19333;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19323 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19324 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__19337 = null;
var G__19337__19338 = (function (coll,n){
var this__19325 = this;
var i__19326 = (n + this__19325.i);

if(cljs.core.truth_((i__19326 < this__19325.a.length)))
{return (this__19325.a[i__19326]);
} else
{return null;
}
});
var G__19337__19339 = (function (coll,n,not_found){
var this__19327 = this;
var i__19328 = (n + this__19327.i);

if(cljs.core.truth_((i__19328 < this__19327.a.length)))
{return (this__19327.a[i__19328]);
} else
{return not_found;
}
});
G__19337 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__19337__19338.call(this,coll,n);
case  3 :
return G__19337__19339.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19337;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__19329 = this;
return (this__19329.a.length - this__19329.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__19330 = this;
return (this__19330.a[this__19330.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__19331 = this;
if(cljs.core.truth_(((this__19331.i + 1) < this__19331.a.length)))
{return (new cljs.core.IndexedSeq(this__19331.a,(this__19331.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__19332 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__19341 = null;
var G__19341__19342 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__19341__19343 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__19341 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__19341__19342.call(this,array,f);
case  3 :
return G__19341__19343.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19341;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__19345 = null;
var G__19345__19346 = (function (array,k){
return (array[k]);
});
var G__19345__19347 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__19345 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__19345__19346.call(this,array,k);
case  3 :
return G__19345__19347.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19345;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__19349 = null;
var G__19349__19350 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__19349__19351 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__19349 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__19349__19350.call(this,array,n);
case  3 :
return G__19349__19351.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19349;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____19353 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____19353))
{var s__19354 = temp__3698__auto____19353;

return cljs.core._first.call(null,s__19354);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__19355 = cljs.core.next.call(null,s);
s = G__19355;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__19356 = cljs.core.seq.call(null,x);
var n__19357 = 0;

while(true){
if(cljs.core.truth_(s__19356))
{{
var G__19358 = cljs.core.next.call(null,s__19356);
var G__19359 = (n__19357 + 1);
s__19356 = G__19358;
n__19357 = G__19359;
continue;
}
} else
{return n__19357;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__19360 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__19361 = (function() { 
var G__19363__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__19364 = conj.call(null,coll,x);
var G__19365 = cljs.core.first.call(null,xs);
var G__19366 = cljs.core.next.call(null,xs);
coll = G__19364;
x = G__19365;
xs = G__19366;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__19363 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19363__delegate.call(this, coll, x, xs);
};
G__19363.cljs$lang$maxFixedArity = 2;
G__19363.cljs$lang$applyTo = (function (arglist__19367){
var coll = cljs.core.first(arglist__19367);
var x = cljs.core.first(cljs.core.next(arglist__19367));
var xs = cljs.core.rest(cljs.core.next(arglist__19367));
return G__19363__delegate.call(this, coll, x, xs);
});
return G__19363;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__19360.call(this,coll,x);
default:
return conj__19361.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__19361.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__19368 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__19369 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__19368.call(this,coll,n);
case  3 :
return nth__19369.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__19371 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__19372 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__19371.call(this,o,k);
case  3 :
return get__19372.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__19375 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__19376 = (function() { 
var G__19378__delegate = function (coll,k,v,kvs){
while(true){
var ret__19374 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__19379 = ret__19374;
var G__19380 = cljs.core.first.call(null,kvs);
var G__19381 = cljs.core.second.call(null,kvs);
var G__19382 = cljs.core.nnext.call(null,kvs);
coll = G__19379;
k = G__19380;
v = G__19381;
kvs = G__19382;
continue;
}
} else
{return ret__19374;
}
break;
}
};
var G__19378 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19378__delegate.call(this, coll, k, v, kvs);
};
G__19378.cljs$lang$maxFixedArity = 3;
G__19378.cljs$lang$applyTo = (function (arglist__19383){
var coll = cljs.core.first(arglist__19383);
var k = cljs.core.first(cljs.core.next(arglist__19383));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19383)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19383)));
return G__19378__delegate.call(this, coll, k, v, kvs);
});
return G__19378;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__19375.call(this,coll,k,v);
default:
return assoc__19376.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__19376.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__19385 = (function (coll){
return coll;
});
var dissoc__19386 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__19387 = (function() { 
var G__19389__delegate = function (coll,k,ks){
while(true){
var ret__19384 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__19390 = ret__19384;
var G__19391 = cljs.core.first.call(null,ks);
var G__19392 = cljs.core.next.call(null,ks);
coll = G__19390;
k = G__19391;
ks = G__19392;
continue;
}
} else
{return ret__19384;
}
break;
}
};
var G__19389 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19389__delegate.call(this, coll, k, ks);
};
G__19389.cljs$lang$maxFixedArity = 2;
G__19389.cljs$lang$applyTo = (function (arglist__19393){
var coll = cljs.core.first(arglist__19393);
var k = cljs.core.first(cljs.core.next(arglist__19393));
var ks = cljs.core.rest(cljs.core.next(arglist__19393));
return G__19389__delegate.call(this, coll, k, ks);
});
return G__19389;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__19385.call(this,coll);
case  2 :
return dissoc__19386.call(this,coll,k);
default:
return dissoc__19387.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__19387.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__445__auto____19394 = o;

if(cljs.core.truth_((function (){var and__3546__auto____19395 = x__445__auto____19394;

if(cljs.core.truth_(and__3546__auto____19395))
{var and__3546__auto____19396 = x__445__auto____19394.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____19396))
{return cljs.core.not.call(null,x__445__auto____19394.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____19396;
}
} else
{return and__3546__auto____19395;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____19394);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__19398 = (function (coll){
return coll;
});
var disj__19399 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__19400 = (function() { 
var G__19402__delegate = function (coll,k,ks){
while(true){
var ret__19397 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__19403 = ret__19397;
var G__19404 = cljs.core.first.call(null,ks);
var G__19405 = cljs.core.next.call(null,ks);
coll = G__19403;
k = G__19404;
ks = G__19405;
continue;
}
} else
{return ret__19397;
}
break;
}
};
var G__19402 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19402__delegate.call(this, coll, k, ks);
};
G__19402.cljs$lang$maxFixedArity = 2;
G__19402.cljs$lang$applyTo = (function (arglist__19406){
var coll = cljs.core.first(arglist__19406);
var k = cljs.core.first(cljs.core.next(arglist__19406));
var ks = cljs.core.rest(cljs.core.next(arglist__19406));
return G__19402__delegate.call(this, coll, k, ks);
});
return G__19402;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__19398.call(this,coll);
case  2 :
return disj__19399.call(this,coll,k);
default:
return disj__19400.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__19400.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____19407 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19408 = x__445__auto____19407;

if(cljs.core.truth_(and__3546__auto____19408))
{var and__3546__auto____19409 = x__445__auto____19407.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____19409))
{return cljs.core.not.call(null,x__445__auto____19407.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____19409;
}
} else
{return and__3546__auto____19408;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____19407);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____19410 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19411 = x__445__auto____19410;

if(cljs.core.truth_(and__3546__auto____19411))
{var and__3546__auto____19412 = x__445__auto____19410.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____19412))
{return cljs.core.not.call(null,x__445__auto____19410.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____19412;
}
} else
{return and__3546__auto____19411;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____19410);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____19413 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19414 = x__445__auto____19413;

if(cljs.core.truth_(and__3546__auto____19414))
{var and__3546__auto____19415 = x__445__auto____19413.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____19415))
{return cljs.core.not.call(null,x__445__auto____19413.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____19415;
}
} else
{return and__3546__auto____19414;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____19413);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____19416 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19417 = x__445__auto____19416;

if(cljs.core.truth_(and__3546__auto____19417))
{var and__3546__auto____19418 = x__445__auto____19416.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____19418))
{return cljs.core.not.call(null,x__445__auto____19416.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____19418;
}
} else
{return and__3546__auto____19417;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____19416);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____19419 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19420 = x__445__auto____19419;

if(cljs.core.truth_(and__3546__auto____19420))
{var and__3546__auto____19421 = x__445__auto____19419.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____19421))
{return cljs.core.not.call(null,x__445__auto____19419.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____19421;
}
} else
{return and__3546__auto____19420;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____19419);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____19422 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19423 = x__445__auto____19422;

if(cljs.core.truth_(and__3546__auto____19423))
{var and__3546__auto____19424 = x__445__auto____19422.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____19424))
{return cljs.core.not.call(null,x__445__auto____19422.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____19424;
}
} else
{return and__3546__auto____19423;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____19422);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____19425 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19426 = x__445__auto____19425;

if(cljs.core.truth_(and__3546__auto____19426))
{var and__3546__auto____19427 = x__445__auto____19425.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____19427))
{return cljs.core.not.call(null,x__445__auto____19425.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____19427;
}
} else
{return and__3546__auto____19426;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____19425);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__19428 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__19428.push(key);
}));
return keys__19428;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__445__auto____19429 = s;

if(cljs.core.truth_((function (){var and__3546__auto____19430 = x__445__auto____19429;

if(cljs.core.truth_(and__3546__auto____19430))
{var and__3546__auto____19431 = x__445__auto____19429.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____19431))
{return cljs.core.not.call(null,x__445__auto____19429.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____19431;
}
} else
{return and__3546__auto____19430;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____19429);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____19432 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____19432))
{return cljs.core.not.call(null,(function (){var or__3548__auto____19433 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____19433))
{return or__3548__auto____19433;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____19432;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____19434 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____19434))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____19434;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____19435 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____19435))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____19435;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____19436 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____19436))
{return (n == n.toFixed());
} else
{return and__3546__auto____19436;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____19437 = coll;

if(cljs.core.truth_(and__3546__auto____19437))
{var and__3546__auto____19438 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____19438))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____19438;
}
} else
{return and__3546__auto____19437;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___19443 = (function (x){
return true;
});
var distinct_QMARK___19444 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___19445 = (function() { 
var G__19447__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__19439 = cljs.core.set([y,x]);
var xs__19440 = more;

while(true){
var x__19441 = cljs.core.first.call(null,xs__19440);
var etc__19442 = cljs.core.next.call(null,xs__19440);

if(cljs.core.truth_(xs__19440))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__19439,x__19441)))
{return false;
} else
{{
var G__19448 = cljs.core.conj.call(null,s__19439,x__19441);
var G__19449 = etc__19442;
s__19439 = G__19448;
xs__19440 = G__19449;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__19447 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19447__delegate.call(this, x, y, more);
};
G__19447.cljs$lang$maxFixedArity = 2;
G__19447.cljs$lang$applyTo = (function (arglist__19450){
var x = cljs.core.first(arglist__19450);
var y = cljs.core.first(cljs.core.next(arglist__19450));
var more = cljs.core.rest(cljs.core.next(arglist__19450));
return G__19447__delegate.call(this, x, y, more);
});
return G__19447;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___19443.call(this,x);
case  2 :
return distinct_QMARK___19444.call(this,x,y);
default:
return distinct_QMARK___19445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___19445.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__19451 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__19451)))
{return r__19451;
} else
{if(cljs.core.truth_(r__19451))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__19453 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__19454 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__19452 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__19452,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__19452);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__19453.call(this,comp);
case  2 :
return sort__19454.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__19456 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__19457 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__19456.call(this,keyfn,comp);
case  3 :
return sort_by__19457.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__19459 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__19460 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__19459.call(this,f,val);
case  3 :
return reduce__19460.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__19466 = (function (f,coll){
var temp__3695__auto____19462 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____19462))
{var s__19463 = temp__3695__auto____19462;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__19463),cljs.core.next.call(null,s__19463));
} else
{return f.call(null);
}
});
var seq_reduce__19467 = (function (f,val,coll){
var val__19464 = val;
var coll__19465 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__19465))
{{
var G__19469 = f.call(null,val__19464,cljs.core.first.call(null,coll__19465));
var G__19470 = cljs.core.next.call(null,coll__19465);
val__19464 = G__19469;
coll__19465 = G__19470;
continue;
}
} else
{return val__19464;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__19466.call(this,f,val);
case  3 :
return seq_reduce__19467.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__19471 = null;
var G__19471__19472 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__19471__19473 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__19471 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__19471__19472.call(this,coll,f);
case  3 :
return G__19471__19473.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19471;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___19475 = (function (){
return 0;
});
var _PLUS___19476 = (function (x){
return x;
});
var _PLUS___19477 = (function (x,y){
return (x + y);
});
var _PLUS___19478 = (function() { 
var G__19480__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__19480 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19480__delegate.call(this, x, y, more);
};
G__19480.cljs$lang$maxFixedArity = 2;
G__19480.cljs$lang$applyTo = (function (arglist__19481){
var x = cljs.core.first(arglist__19481);
var y = cljs.core.first(cljs.core.next(arglist__19481));
var more = cljs.core.rest(cljs.core.next(arglist__19481));
return G__19480__delegate.call(this, x, y, more);
});
return G__19480;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___19475.call(this);
case  1 :
return _PLUS___19476.call(this,x);
case  2 :
return _PLUS___19477.call(this,x,y);
default:
return _PLUS___19478.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___19478.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___19482 = (function (x){
return (- x);
});
var ___19483 = (function (x,y){
return (x - y);
});
var ___19484 = (function() { 
var G__19486__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__19486 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19486__delegate.call(this, x, y, more);
};
G__19486.cljs$lang$maxFixedArity = 2;
G__19486.cljs$lang$applyTo = (function (arglist__19487){
var x = cljs.core.first(arglist__19487);
var y = cljs.core.first(cljs.core.next(arglist__19487));
var more = cljs.core.rest(cljs.core.next(arglist__19487));
return G__19486__delegate.call(this, x, y, more);
});
return G__19486;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___19482.call(this,x);
case  2 :
return ___19483.call(this,x,y);
default:
return ___19484.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___19484.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___19488 = (function (){
return 1;
});
var _STAR___19489 = (function (x){
return x;
});
var _STAR___19490 = (function (x,y){
return (x * y);
});
var _STAR___19491 = (function() { 
var G__19493__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__19493 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19493__delegate.call(this, x, y, more);
};
G__19493.cljs$lang$maxFixedArity = 2;
G__19493.cljs$lang$applyTo = (function (arglist__19494){
var x = cljs.core.first(arglist__19494);
var y = cljs.core.first(cljs.core.next(arglist__19494));
var more = cljs.core.rest(cljs.core.next(arglist__19494));
return G__19493__delegate.call(this, x, y, more);
});
return G__19493;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___19488.call(this);
case  1 :
return _STAR___19489.call(this,x);
case  2 :
return _STAR___19490.call(this,x,y);
default:
return _STAR___19491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___19491.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___19495 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___19496 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___19497 = (function() { 
var G__19499__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__19499 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19499__delegate.call(this, x, y, more);
};
G__19499.cljs$lang$maxFixedArity = 2;
G__19499.cljs$lang$applyTo = (function (arglist__19500){
var x = cljs.core.first(arglist__19500);
var y = cljs.core.first(cljs.core.next(arglist__19500));
var more = cljs.core.rest(cljs.core.next(arglist__19500));
return G__19499__delegate.call(this, x, y, more);
});
return G__19499;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___19495.call(this,x);
case  2 :
return _SLASH___19496.call(this,x,y);
default:
return _SLASH___19497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___19497.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___19501 = (function (x){
return true;
});
var _LT___19502 = (function (x,y){
return (x < y);
});
var _LT___19503 = (function() { 
var G__19505__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19506 = y;
var G__19507 = cljs.core.first.call(null,more);
var G__19508 = cljs.core.next.call(null,more);
x = G__19506;
y = G__19507;
more = G__19508;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__19505 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19505__delegate.call(this, x, y, more);
};
G__19505.cljs$lang$maxFixedArity = 2;
G__19505.cljs$lang$applyTo = (function (arglist__19509){
var x = cljs.core.first(arglist__19509);
var y = cljs.core.first(cljs.core.next(arglist__19509));
var more = cljs.core.rest(cljs.core.next(arglist__19509));
return G__19505__delegate.call(this, x, y, more);
});
return G__19505;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___19501.call(this,x);
case  2 :
return _LT___19502.call(this,x,y);
default:
return _LT___19503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___19503.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___19510 = (function (x){
return true;
});
var _LT__EQ___19511 = (function (x,y){
return (x <= y);
});
var _LT__EQ___19512 = (function() { 
var G__19514__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19515 = y;
var G__19516 = cljs.core.first.call(null,more);
var G__19517 = cljs.core.next.call(null,more);
x = G__19515;
y = G__19516;
more = G__19517;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__19514 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19514__delegate.call(this, x, y, more);
};
G__19514.cljs$lang$maxFixedArity = 2;
G__19514.cljs$lang$applyTo = (function (arglist__19518){
var x = cljs.core.first(arglist__19518);
var y = cljs.core.first(cljs.core.next(arglist__19518));
var more = cljs.core.rest(cljs.core.next(arglist__19518));
return G__19514__delegate.call(this, x, y, more);
});
return G__19514;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___19510.call(this,x);
case  2 :
return _LT__EQ___19511.call(this,x,y);
default:
return _LT__EQ___19512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___19512.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___19519 = (function (x){
return true;
});
var _GT___19520 = (function (x,y){
return (x > y);
});
var _GT___19521 = (function() { 
var G__19523__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19524 = y;
var G__19525 = cljs.core.first.call(null,more);
var G__19526 = cljs.core.next.call(null,more);
x = G__19524;
y = G__19525;
more = G__19526;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__19523 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19523__delegate.call(this, x, y, more);
};
G__19523.cljs$lang$maxFixedArity = 2;
G__19523.cljs$lang$applyTo = (function (arglist__19527){
var x = cljs.core.first(arglist__19527);
var y = cljs.core.first(cljs.core.next(arglist__19527));
var more = cljs.core.rest(cljs.core.next(arglist__19527));
return G__19523__delegate.call(this, x, y, more);
});
return G__19523;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___19519.call(this,x);
case  2 :
return _GT___19520.call(this,x,y);
default:
return _GT___19521.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___19521.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___19528 = (function (x){
return true;
});
var _GT__EQ___19529 = (function (x,y){
return (x >= y);
});
var _GT__EQ___19530 = (function() { 
var G__19532__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19533 = y;
var G__19534 = cljs.core.first.call(null,more);
var G__19535 = cljs.core.next.call(null,more);
x = G__19533;
y = G__19534;
more = G__19535;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__19532 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19532__delegate.call(this, x, y, more);
};
G__19532.cljs$lang$maxFixedArity = 2;
G__19532.cljs$lang$applyTo = (function (arglist__19536){
var x = cljs.core.first(arglist__19536);
var y = cljs.core.first(cljs.core.next(arglist__19536));
var more = cljs.core.rest(cljs.core.next(arglist__19536));
return G__19532__delegate.call(this, x, y, more);
});
return G__19532;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___19528.call(this,x);
case  2 :
return _GT__EQ___19529.call(this,x,y);
default:
return _GT__EQ___19530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___19530.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__19537 = (function (x){
return x;
});
var max__19538 = (function (x,y){
return ((x > y) ? x : y);
});
var max__19539 = (function() { 
var G__19541__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__19541 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19541__delegate.call(this, x, y, more);
};
G__19541.cljs$lang$maxFixedArity = 2;
G__19541.cljs$lang$applyTo = (function (arglist__19542){
var x = cljs.core.first(arglist__19542);
var y = cljs.core.first(cljs.core.next(arglist__19542));
var more = cljs.core.rest(cljs.core.next(arglist__19542));
return G__19541__delegate.call(this, x, y, more);
});
return G__19541;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__19537.call(this,x);
case  2 :
return max__19538.call(this,x,y);
default:
return max__19539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__19539.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__19543 = (function (x){
return x;
});
var min__19544 = (function (x,y){
return ((x < y) ? x : y);
});
var min__19545 = (function() { 
var G__19547__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__19547 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19547__delegate.call(this, x, y, more);
};
G__19547.cljs$lang$maxFixedArity = 2;
G__19547.cljs$lang$applyTo = (function (arglist__19548){
var x = cljs.core.first(arglist__19548);
var y = cljs.core.first(cljs.core.next(arglist__19548));
var more = cljs.core.rest(cljs.core.next(arglist__19548));
return G__19547__delegate.call(this, x, y, more);
});
return G__19547;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__19543.call(this,x);
case  2 :
return min__19544.call(this,x,y);
default:
return min__19545.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__19545.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__19549 = (n % d);

return cljs.core.fix.call(null,((n - rem__19549) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__19550 = cljs.core.quot.call(null,n,d);

return (n - (d * q__19550));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__19551 = (function (){
return Math.random.call(null);
});
var rand__19552 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__19551.call(this);
case  1 :
return rand__19552.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___19554 = (function (x){
return true;
});
var _EQ__EQ___19555 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___19556 = (function() { 
var G__19558__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19559 = y;
var G__19560 = cljs.core.first.call(null,more);
var G__19561 = cljs.core.next.call(null,more);
x = G__19559;
y = G__19560;
more = G__19561;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__19558 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19558__delegate.call(this, x, y, more);
};
G__19558.cljs$lang$maxFixedArity = 2;
G__19558.cljs$lang$applyTo = (function (arglist__19562){
var x = cljs.core.first(arglist__19562);
var y = cljs.core.first(cljs.core.next(arglist__19562));
var more = cljs.core.rest(cljs.core.next(arglist__19562));
return G__19558__delegate.call(this, x, y, more);
});
return G__19558;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___19554.call(this,x);
case  2 :
return _EQ__EQ___19555.call(this,x,y);
default:
return _EQ__EQ___19556.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___19556.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__19563 = n;
var xs__19564 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____19565 = xs__19564;

if(cljs.core.truth_(and__3546__auto____19565))
{return (n__19563 > 0);
} else
{return and__3546__auto____19565;
}
})()))
{{
var G__19566 = (n__19563 - 1);
var G__19567 = cljs.core.next.call(null,xs__19564);
n__19563 = G__19566;
xs__19564 = G__19567;
continue;
}
} else
{return xs__19564;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__19572 = null;
var G__19572__19573 = (function (coll,n){
var temp__3695__auto____19568 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____19568))
{var xs__19569 = temp__3695__auto____19568;

return cljs.core.first.call(null,xs__19569);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__19572__19574 = (function (coll,n,not_found){
var temp__3695__auto____19570 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____19570))
{var xs__19571 = temp__3695__auto____19570;

return cljs.core.first.call(null,xs__19571);
} else
{return not_found;
}
});
G__19572 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__19572__19573.call(this,coll,n);
case  3 :
return G__19572__19574.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19572;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___19576 = (function (){
return "";
});
var str_STAR___19577 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___19578 = (function() { 
var G__19580__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__19581 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__19582 = cljs.core.next.call(null,more);
sb = G__19581;
more = G__19582;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__19580 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__19580__delegate.call(this, x, ys);
};
G__19580.cljs$lang$maxFixedArity = 1;
G__19580.cljs$lang$applyTo = (function (arglist__19583){
var x = cljs.core.first(arglist__19583);
var ys = cljs.core.rest(arglist__19583);
return G__19580__delegate.call(this, x, ys);
});
return G__19580;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___19576.call(this);
case  1 :
return str_STAR___19577.call(this,x);
default:
return str_STAR___19578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___19578.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__19584 = (function (){
return "";
});
var str__19585 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__19586 = (function() { 
var G__19588__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__19588 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__19588__delegate.call(this, x, ys);
};
G__19588.cljs$lang$maxFixedArity = 1;
G__19588.cljs$lang$applyTo = (function (arglist__19589){
var x = cljs.core.first(arglist__19589);
var ys = cljs.core.rest(arglist__19589);
return G__19588__delegate.call(this, x, ys);
});
return G__19588;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__19584.call(this);
case  1 :
return str__19585.call(this,x);
default:
return str__19586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__19586.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__19590 = (function (s,start){
return s.substring(start);
});
var subs__19591 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__19590.call(this,s,start);
case  3 :
return subs__19591.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__19593 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__19594 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__19593.call(this,ns);
case  2 :
return symbol__19594.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__19596 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__19597 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__19596.call(this,ns);
case  2 :
return keyword__19597.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__19599 = cljs.core.seq.call(null,x);
var ys__19600 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__19599)))
{return cljs.core.nil_QMARK_.call(null,ys__19600);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__19600)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__19599),cljs.core.first.call(null,ys__19600))))
{{
var G__19601 = cljs.core.next.call(null,xs__19599);
var G__19602 = cljs.core.next.call(null,ys__19600);
xs__19599 = G__19601;
ys__19600 = G__19602;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__19603_SHARP_,p2__19604_SHARP_){
return cljs.core.hash_combine.call(null,p1__19603_SHARP_,cljs.core.hash.call(null,p2__19604_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__19605__19606 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__19605__19606))
{var G__19608__19610 = cljs.core.first.call(null,G__19605__19606);
var vec__19609__19611 = G__19608__19610;
var key_name__19612 = cljs.core.nth.call(null,vec__19609__19611,0,null);
var f__19613 = cljs.core.nth.call(null,vec__19609__19611,1,null);
var G__19605__19614 = G__19605__19606;

var G__19608__19615 = G__19608__19610;
var G__19605__19616 = G__19605__19614;

while(true){
var vec__19617__19618 = G__19608__19615;
var key_name__19619 = cljs.core.nth.call(null,vec__19617__19618,0,null);
var f__19620 = cljs.core.nth.call(null,vec__19617__19618,1,null);
var G__19605__19621 = G__19605__19616;

var str_name__19622 = cljs.core.name.call(null,key_name__19619);

obj[str_name__19622] = f__19620;
var temp__3698__auto____19623 = cljs.core.next.call(null,G__19605__19621);

if(cljs.core.truth_(temp__3698__auto____19623))
{var G__19605__19624 = temp__3698__auto____19623;

{
var G__19625 = cljs.core.first.call(null,G__19605__19624);
var G__19626 = G__19605__19624;
G__19608__19615 = G__19625;
G__19605__19616 = G__19626;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__19627 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19628 = this;
return (new cljs.core.List(this__19628.meta,o,coll,(this__19628.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__19629 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__19630 = this;
return this__19630.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__19631 = this;
return this__19631.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__19632 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__19633 = this;
return this__19633.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__19634 = this;
return this__19634.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19635 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__19636 = this;
return (new cljs.core.List(meta,this__19636.first,this__19636.rest,this__19636.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__19637 = this;
return this__19637.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__19638 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__19639 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19640 = this;
return (new cljs.core.List(this__19640.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__19641 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__19642 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__19643 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__19644 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__19645 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__19646 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19647 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__19648 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__19649 = this;
return this__19649.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__19650 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__19651){
var items = cljs.core.seq( arglist__19651 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__19652 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__19653 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19654 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__19655 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__19655.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19656 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__19657 = this;
return this__19657.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__19658 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__19658.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__19658.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__19659 = this;
return this__19659.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__19660 = this;
return (new cljs.core.Cons(meta,this__19660.first,this__19660.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__19661 = null;
var G__19661__19662 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__19661__19663 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__19661 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__19661__19662.call(this,string,f);
case  3 :
return G__19661__19663.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19661;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__19665 = null;
var G__19665__19666 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__19665__19667 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__19665 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__19665__19666.call(this,string,k);
case  3 :
return G__19665__19667.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19665;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__19669 = null;
var G__19669__19670 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__19669__19671 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__19669 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__19669__19670.call(this,string,n);
case  3 :
return G__19669__19671.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19669;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__19673 = null;
var G__19673__19674 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__19673__19675 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__19673 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__19673__19674.call(this,this$,coll);
case  3 :
return G__19673__19675.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19673;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__19677 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__19677;
} else
{lazy_seq.x = x__19677.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__19678 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__19679 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19680 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__19681 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__19681.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19682 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__19683 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__19684 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__19685 = this;
return this__19685.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__19686 = this;
return (new cljs.core.LazySeq(meta,this__19686.realized,this__19686.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__19687 = cljs.core.array.call(null);

var s__19688 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__19688)))
{ary__19687.push(cljs.core.first.call(null,s__19688));
{
var G__19689 = cljs.core.next.call(null,s__19688);
s__19688 = G__19689;
continue;
}
} else
{return ary__19687;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__19690 = s;
var i__19691 = n;
var sum__19692 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____19693 = (i__19691 > 0);

if(cljs.core.truth_(and__3546__auto____19693))
{return cljs.core.seq.call(null,s__19690);
} else
{return and__3546__auto____19693;
}
})()))
{{
var G__19694 = cljs.core.next.call(null,s__19690);
var G__19695 = (i__19691 - 1);
var G__19696 = (sum__19692 + 1);
s__19690 = G__19694;
i__19691 = G__19695;
sum__19692 = G__19696;
continue;
}
} else
{return sum__19692;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__19700 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__19701 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__19702 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__19697 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__19697))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__19697),concat.call(null,cljs.core.rest.call(null,s__19697),y));
} else
{return y;
}
})));
});
var concat__19703 = (function() { 
var G__19705__delegate = function (x,y,zs){
var cat__19699 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__19698 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__19698))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__19698),cat.call(null,cljs.core.rest.call(null,xys__19698),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__19699.call(null,concat.call(null,x,y),zs);
};
var G__19705 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19705__delegate.call(this, x, y, zs);
};
G__19705.cljs$lang$maxFixedArity = 2;
G__19705.cljs$lang$applyTo = (function (arglist__19706){
var x = cljs.core.first(arglist__19706);
var y = cljs.core.first(cljs.core.next(arglist__19706));
var zs = cljs.core.rest(cljs.core.next(arglist__19706));
return G__19705__delegate.call(this, x, y, zs);
});
return G__19705;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__19700.call(this);
case  1 :
return concat__19701.call(this,x);
case  2 :
return concat__19702.call(this,x,y);
default:
return concat__19703.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__19703.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___19707 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___19708 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___19709 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___19710 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___19711 = (function() { 
var G__19713__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__19713 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19713__delegate.call(this, a, b, c, d, more);
};
G__19713.cljs$lang$maxFixedArity = 4;
G__19713.cljs$lang$applyTo = (function (arglist__19714){
var a = cljs.core.first(arglist__19714);
var b = cljs.core.first(cljs.core.next(arglist__19714));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19714)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19714))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19714))));
return G__19713__delegate.call(this, a, b, c, d, more);
});
return G__19713;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___19707.call(this,a);
case  2 :
return list_STAR___19708.call(this,a,b);
case  3 :
return list_STAR___19709.call(this,a,b,c);
case  4 :
return list_STAR___19710.call(this,a,b,c,d);
default:
return list_STAR___19711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___19711.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__19724 = (function (f,args){
var fixed_arity__19715 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__19715 + 1)) <= fixed_arity__19715)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__19725 = (function (f,x,args){
var arglist__19716 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__19717 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__19716,fixed_arity__19717) <= fixed_arity__19717)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__19716));
} else
{return f.cljs$lang$applyTo(arglist__19716);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19716));
}
});
var apply__19726 = (function (f,x,y,args){
var arglist__19718 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__19719 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__19718,fixed_arity__19719) <= fixed_arity__19719)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__19718));
} else
{return f.cljs$lang$applyTo(arglist__19718);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19718));
}
});
var apply__19727 = (function (f,x,y,z,args){
var arglist__19720 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__19721 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__19720,fixed_arity__19721) <= fixed_arity__19721)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__19720));
} else
{return f.cljs$lang$applyTo(arglist__19720);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19720));
}
});
var apply__19728 = (function() { 
var G__19730__delegate = function (f,a,b,c,d,args){
var arglist__19722 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__19723 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__19722,fixed_arity__19723) <= fixed_arity__19723)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__19722));
} else
{return f.cljs$lang$applyTo(arglist__19722);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19722));
}
};
var G__19730 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__19730__delegate.call(this, f, a, b, c, d, args);
};
G__19730.cljs$lang$maxFixedArity = 5;
G__19730.cljs$lang$applyTo = (function (arglist__19731){
var f = cljs.core.first(arglist__19731);
var a = cljs.core.first(cljs.core.next(arglist__19731));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19731)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19731))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19731)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19731)))));
return G__19730__delegate.call(this, f, a, b, c, d, args);
});
return G__19730;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__19724.call(this,f,a);
case  3 :
return apply__19725.call(this,f,a,b);
case  4 :
return apply__19726.call(this,f,a,b,c);
case  5 :
return apply__19727.call(this,f,a,b,c,d);
default:
return apply__19728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__19728.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__19732){
var obj = cljs.core.first(arglist__19732);
var f = cljs.core.first(cljs.core.next(arglist__19732));
var args = cljs.core.rest(cljs.core.next(arglist__19732));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___19733 = (function (x){
return false;
});
var not_EQ___19734 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___19735 = (function() { 
var G__19737__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__19737 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19737__delegate.call(this, x, y, more);
};
G__19737.cljs$lang$maxFixedArity = 2;
G__19737.cljs$lang$applyTo = (function (arglist__19738){
var x = cljs.core.first(arglist__19738);
var y = cljs.core.first(cljs.core.next(arglist__19738));
var more = cljs.core.rest(cljs.core.next(arglist__19738));
return G__19737__delegate.call(this, x, y, more);
});
return G__19737;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___19733.call(this,x);
case  2 :
return not_EQ___19734.call(this,x,y);
default:
return not_EQ___19735.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___19735.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__19739 = pred;
var G__19740 = cljs.core.next.call(null,coll);
pred = G__19739;
coll = G__19740;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____19741 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____19741))
{return or__3548__auto____19741;
} else
{{
var G__19742 = pred;
var G__19743 = cljs.core.next.call(null,coll);
pred = G__19742;
coll = G__19743;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__19744 = null;
var G__19744__19745 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__19744__19746 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__19744__19747 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__19744__19748 = (function() { 
var G__19750__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__19750 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19750__delegate.call(this, x, y, zs);
};
G__19750.cljs$lang$maxFixedArity = 2;
G__19750.cljs$lang$applyTo = (function (arglist__19751){
var x = cljs.core.first(arglist__19751);
var y = cljs.core.first(cljs.core.next(arglist__19751));
var zs = cljs.core.rest(cljs.core.next(arglist__19751));
return G__19750__delegate.call(this, x, y, zs);
});
return G__19750;
})()
;
G__19744 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__19744__19745.call(this);
case  1 :
return G__19744__19746.call(this,x);
case  2 :
return G__19744__19747.call(this,x,y);
default:
return G__19744__19748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19744.cljs$lang$maxFixedArity = 2;
G__19744.cljs$lang$applyTo = G__19744__19748.cljs$lang$applyTo;
return G__19744;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__19752__delegate = function (args){
return x;
};
var G__19752 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19752__delegate.call(this, args);
};
G__19752.cljs$lang$maxFixedArity = 0;
G__19752.cljs$lang$applyTo = (function (arglist__19753){
var args = cljs.core.seq( arglist__19753 );;
return G__19752__delegate.call(this, args);
});
return G__19752;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__19757 = (function (){
return cljs.core.identity;
});
var comp__19758 = (function (f){
return f;
});
var comp__19759 = (function (f,g){
return (function() {
var G__19763 = null;
var G__19763__19764 = (function (){
return f.call(null,g.call(null));
});
var G__19763__19765 = (function (x){
return f.call(null,g.call(null,x));
});
var G__19763__19766 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__19763__19767 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__19763__19768 = (function() { 
var G__19770__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__19770 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19770__delegate.call(this, x, y, z, args);
};
G__19770.cljs$lang$maxFixedArity = 3;
G__19770.cljs$lang$applyTo = (function (arglist__19771){
var x = cljs.core.first(arglist__19771);
var y = cljs.core.first(cljs.core.next(arglist__19771));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19771)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19771)));
return G__19770__delegate.call(this, x, y, z, args);
});
return G__19770;
})()
;
G__19763 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__19763__19764.call(this);
case  1 :
return G__19763__19765.call(this,x);
case  2 :
return G__19763__19766.call(this,x,y);
case  3 :
return G__19763__19767.call(this,x,y,z);
default:
return G__19763__19768.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19763.cljs$lang$maxFixedArity = 3;
G__19763.cljs$lang$applyTo = G__19763__19768.cljs$lang$applyTo;
return G__19763;
})()
});
var comp__19760 = (function (f,g,h){
return (function() {
var G__19772 = null;
var G__19772__19773 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__19772__19774 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__19772__19775 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__19772__19776 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__19772__19777 = (function() { 
var G__19779__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__19779 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19779__delegate.call(this, x, y, z, args);
};
G__19779.cljs$lang$maxFixedArity = 3;
G__19779.cljs$lang$applyTo = (function (arglist__19780){
var x = cljs.core.first(arglist__19780);
var y = cljs.core.first(cljs.core.next(arglist__19780));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19780)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19780)));
return G__19779__delegate.call(this, x, y, z, args);
});
return G__19779;
})()
;
G__19772 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__19772__19773.call(this);
case  1 :
return G__19772__19774.call(this,x);
case  2 :
return G__19772__19775.call(this,x,y);
case  3 :
return G__19772__19776.call(this,x,y,z);
default:
return G__19772__19777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19772.cljs$lang$maxFixedArity = 3;
G__19772.cljs$lang$applyTo = G__19772__19777.cljs$lang$applyTo;
return G__19772;
})()
});
var comp__19761 = (function() { 
var G__19781__delegate = function (f1,f2,f3,fs){
var fs__19754 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__19782__delegate = function (args){
var ret__19755 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__19754),args);
var fs__19756 = cljs.core.next.call(null,fs__19754);

while(true){
if(cljs.core.truth_(fs__19756))
{{
var G__19783 = cljs.core.first.call(null,fs__19756).call(null,ret__19755);
var G__19784 = cljs.core.next.call(null,fs__19756);
ret__19755 = G__19783;
fs__19756 = G__19784;
continue;
}
} else
{return ret__19755;
}
break;
}
};
var G__19782 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19782__delegate.call(this, args);
};
G__19782.cljs$lang$maxFixedArity = 0;
G__19782.cljs$lang$applyTo = (function (arglist__19785){
var args = cljs.core.seq( arglist__19785 );;
return G__19782__delegate.call(this, args);
});
return G__19782;
})()
;
};
var G__19781 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19781__delegate.call(this, f1, f2, f3, fs);
};
G__19781.cljs$lang$maxFixedArity = 3;
G__19781.cljs$lang$applyTo = (function (arglist__19786){
var f1 = cljs.core.first(arglist__19786);
var f2 = cljs.core.first(cljs.core.next(arglist__19786));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19786)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19786)));
return G__19781__delegate.call(this, f1, f2, f3, fs);
});
return G__19781;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__19757.call(this);
case  1 :
return comp__19758.call(this,f1);
case  2 :
return comp__19759.call(this,f1,f2);
case  3 :
return comp__19760.call(this,f1,f2,f3);
default:
return comp__19761.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__19761.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__19787 = (function (f,arg1){
return (function() { 
var G__19792__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__19792 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19792__delegate.call(this, args);
};
G__19792.cljs$lang$maxFixedArity = 0;
G__19792.cljs$lang$applyTo = (function (arglist__19793){
var args = cljs.core.seq( arglist__19793 );;
return G__19792__delegate.call(this, args);
});
return G__19792;
})()
;
});
var partial__19788 = (function (f,arg1,arg2){
return (function() { 
var G__19794__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__19794 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19794__delegate.call(this, args);
};
G__19794.cljs$lang$maxFixedArity = 0;
G__19794.cljs$lang$applyTo = (function (arglist__19795){
var args = cljs.core.seq( arglist__19795 );;
return G__19794__delegate.call(this, args);
});
return G__19794;
})()
;
});
var partial__19789 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__19796__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__19796 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19796__delegate.call(this, args);
};
G__19796.cljs$lang$maxFixedArity = 0;
G__19796.cljs$lang$applyTo = (function (arglist__19797){
var args = cljs.core.seq( arglist__19797 );;
return G__19796__delegate.call(this, args);
});
return G__19796;
})()
;
});
var partial__19790 = (function() { 
var G__19798__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__19799__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__19799 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19799__delegate.call(this, args);
};
G__19799.cljs$lang$maxFixedArity = 0;
G__19799.cljs$lang$applyTo = (function (arglist__19800){
var args = cljs.core.seq( arglist__19800 );;
return G__19799__delegate.call(this, args);
});
return G__19799;
})()
;
};
var G__19798 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19798__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__19798.cljs$lang$maxFixedArity = 4;
G__19798.cljs$lang$applyTo = (function (arglist__19801){
var f = cljs.core.first(arglist__19801);
var arg1 = cljs.core.first(cljs.core.next(arglist__19801));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19801)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19801))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19801))));
return G__19798__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__19798;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__19787.call(this,f,arg1);
case  3 :
return partial__19788.call(this,f,arg1,arg2);
case  4 :
return partial__19789.call(this,f,arg1,arg2,arg3);
default:
return partial__19790.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__19790.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__19802 = (function (f,x){
return (function() {
var G__19806 = null;
var G__19806__19807 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__19806__19808 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__19806__19809 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__19806__19810 = (function() { 
var G__19812__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__19812 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19812__delegate.call(this, a, b, c, ds);
};
G__19812.cljs$lang$maxFixedArity = 3;
G__19812.cljs$lang$applyTo = (function (arglist__19813){
var a = cljs.core.first(arglist__19813);
var b = cljs.core.first(cljs.core.next(arglist__19813));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19813)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19813)));
return G__19812__delegate.call(this, a, b, c, ds);
});
return G__19812;
})()
;
G__19806 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__19806__19807.call(this,a);
case  2 :
return G__19806__19808.call(this,a,b);
case  3 :
return G__19806__19809.call(this,a,b,c);
default:
return G__19806__19810.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19806.cljs$lang$maxFixedArity = 3;
G__19806.cljs$lang$applyTo = G__19806__19810.cljs$lang$applyTo;
return G__19806;
})()
});
var fnil__19803 = (function (f,x,y){
return (function() {
var G__19814 = null;
var G__19814__19815 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__19814__19816 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__19814__19817 = (function() { 
var G__19819__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__19819 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19819__delegate.call(this, a, b, c, ds);
};
G__19819.cljs$lang$maxFixedArity = 3;
G__19819.cljs$lang$applyTo = (function (arglist__19820){
var a = cljs.core.first(arglist__19820);
var b = cljs.core.first(cljs.core.next(arglist__19820));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19820)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19820)));
return G__19819__delegate.call(this, a, b, c, ds);
});
return G__19819;
})()
;
G__19814 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__19814__19815.call(this,a,b);
case  3 :
return G__19814__19816.call(this,a,b,c);
default:
return G__19814__19817.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19814.cljs$lang$maxFixedArity = 3;
G__19814.cljs$lang$applyTo = G__19814__19817.cljs$lang$applyTo;
return G__19814;
})()
});
var fnil__19804 = (function (f,x,y,z){
return (function() {
var G__19821 = null;
var G__19821__19822 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__19821__19823 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__19821__19824 = (function() { 
var G__19826__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__19826 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19826__delegate.call(this, a, b, c, ds);
};
G__19826.cljs$lang$maxFixedArity = 3;
G__19826.cljs$lang$applyTo = (function (arglist__19827){
var a = cljs.core.first(arglist__19827);
var b = cljs.core.first(cljs.core.next(arglist__19827));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19827)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19827)));
return G__19826__delegate.call(this, a, b, c, ds);
});
return G__19826;
})()
;
G__19821 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__19821__19822.call(this,a,b);
case  3 :
return G__19821__19823.call(this,a,b,c);
default:
return G__19821__19824.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19821.cljs$lang$maxFixedArity = 3;
G__19821.cljs$lang$applyTo = G__19821__19824.cljs$lang$applyTo;
return G__19821;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__19802.call(this,f,x);
case  3 :
return fnil__19803.call(this,f,x,y);
case  4 :
return fnil__19804.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__19830 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____19828 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____19828))
{var s__19829 = temp__3698__auto____19828;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__19829)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__19829)));
} else
{return null;
}
})));
});

return mapi__19830.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____19831 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____19831))
{var s__19832 = temp__3698__auto____19831;

var x__19833 = f.call(null,cljs.core.first.call(null,s__19832));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__19833)))
{return keep.call(null,f,cljs.core.rest.call(null,s__19832));
} else
{return cljs.core.cons.call(null,x__19833,keep.call(null,f,cljs.core.rest.call(null,s__19832)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__19843 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____19840 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____19840))
{var s__19841 = temp__3698__auto____19840;

var x__19842 = f.call(null,idx,cljs.core.first.call(null,s__19841));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__19842)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__19841));
} else
{return cljs.core.cons.call(null,x__19842,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__19841)));
}
} else
{return null;
}
})));
});

return keepi__19843.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__19888 = (function (p){
return (function() {
var ep1 = null;
var ep1__19893 = (function (){
return true;
});
var ep1__19894 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__19895 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19850 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____19850))
{return p.call(null,y);
} else
{return and__3546__auto____19850;
}
})());
});
var ep1__19896 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19851 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____19851))
{var and__3546__auto____19852 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____19852))
{return p.call(null,z);
} else
{return and__3546__auto____19852;
}
} else
{return and__3546__auto____19851;
}
})());
});
var ep1__19897 = (function() { 
var G__19899__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19853 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____19853))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____19853;
}
})());
};
var G__19899 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19899__delegate.call(this, x, y, z, args);
};
G__19899.cljs$lang$maxFixedArity = 3;
G__19899.cljs$lang$applyTo = (function (arglist__19900){
var x = cljs.core.first(arglist__19900);
var y = cljs.core.first(cljs.core.next(arglist__19900));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19900)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19900)));
return G__19899__delegate.call(this, x, y, z, args);
});
return G__19899;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__19893.call(this);
case  1 :
return ep1__19894.call(this,x);
case  2 :
return ep1__19895.call(this,x,y);
case  3 :
return ep1__19896.call(this,x,y,z);
default:
return ep1__19897.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__19897.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__19889 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__19901 = (function (){
return true;
});
var ep2__19902 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19854 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19854))
{return p2.call(null,x);
} else
{return and__3546__auto____19854;
}
})());
});
var ep2__19903 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19855 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19855))
{var and__3546__auto____19856 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____19856))
{var and__3546__auto____19857 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____19857))
{return p2.call(null,y);
} else
{return and__3546__auto____19857;
}
} else
{return and__3546__auto____19856;
}
} else
{return and__3546__auto____19855;
}
})());
});
var ep2__19904 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19858 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19858))
{var and__3546__auto____19859 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____19859))
{var and__3546__auto____19860 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____19860))
{var and__3546__auto____19861 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____19861))
{var and__3546__auto____19862 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____19862))
{return p2.call(null,z);
} else
{return and__3546__auto____19862;
}
} else
{return and__3546__auto____19861;
}
} else
{return and__3546__auto____19860;
}
} else
{return and__3546__auto____19859;
}
} else
{return and__3546__auto____19858;
}
})());
});
var ep2__19905 = (function() { 
var G__19907__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19863 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____19863))
{return cljs.core.every_QMARK_.call(null,(function (p1__19834_SHARP_){
var and__3546__auto____19864 = p1.call(null,p1__19834_SHARP_);

if(cljs.core.truth_(and__3546__auto____19864))
{return p2.call(null,p1__19834_SHARP_);
} else
{return and__3546__auto____19864;
}
}),args);
} else
{return and__3546__auto____19863;
}
})());
};
var G__19907 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19907__delegate.call(this, x, y, z, args);
};
G__19907.cljs$lang$maxFixedArity = 3;
G__19907.cljs$lang$applyTo = (function (arglist__19908){
var x = cljs.core.first(arglist__19908);
var y = cljs.core.first(cljs.core.next(arglist__19908));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19908)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19908)));
return G__19907__delegate.call(this, x, y, z, args);
});
return G__19907;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__19901.call(this);
case  1 :
return ep2__19902.call(this,x);
case  2 :
return ep2__19903.call(this,x,y);
case  3 :
return ep2__19904.call(this,x,y,z);
default:
return ep2__19905.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__19905.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__19890 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__19909 = (function (){
return true;
});
var ep3__19910 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19865 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19865))
{var and__3546__auto____19866 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____19866))
{return p3.call(null,x);
} else
{return and__3546__auto____19866;
}
} else
{return and__3546__auto____19865;
}
})());
});
var ep3__19911 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19867 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19867))
{var and__3546__auto____19868 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____19868))
{var and__3546__auto____19869 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____19869))
{var and__3546__auto____19870 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____19870))
{var and__3546__auto____19871 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____19871))
{return p3.call(null,y);
} else
{return and__3546__auto____19871;
}
} else
{return and__3546__auto____19870;
}
} else
{return and__3546__auto____19869;
}
} else
{return and__3546__auto____19868;
}
} else
{return and__3546__auto____19867;
}
})());
});
var ep3__19912 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19872 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19872))
{var and__3546__auto____19873 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____19873))
{var and__3546__auto____19874 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____19874))
{var and__3546__auto____19875 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____19875))
{var and__3546__auto____19876 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____19876))
{var and__3546__auto____19877 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____19877))
{var and__3546__auto____19878 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____19878))
{var and__3546__auto____19879 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____19879))
{return p3.call(null,z);
} else
{return and__3546__auto____19879;
}
} else
{return and__3546__auto____19878;
}
} else
{return and__3546__auto____19877;
}
} else
{return and__3546__auto____19876;
}
} else
{return and__3546__auto____19875;
}
} else
{return and__3546__auto____19874;
}
} else
{return and__3546__auto____19873;
}
} else
{return and__3546__auto____19872;
}
})());
});
var ep3__19913 = (function() { 
var G__19915__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19880 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____19880))
{return cljs.core.every_QMARK_.call(null,(function (p1__19835_SHARP_){
var and__3546__auto____19881 = p1.call(null,p1__19835_SHARP_);

if(cljs.core.truth_(and__3546__auto____19881))
{var and__3546__auto____19882 = p2.call(null,p1__19835_SHARP_);

if(cljs.core.truth_(and__3546__auto____19882))
{return p3.call(null,p1__19835_SHARP_);
} else
{return and__3546__auto____19882;
}
} else
{return and__3546__auto____19881;
}
}),args);
} else
{return and__3546__auto____19880;
}
})());
};
var G__19915 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19915__delegate.call(this, x, y, z, args);
};
G__19915.cljs$lang$maxFixedArity = 3;
G__19915.cljs$lang$applyTo = (function (arglist__19916){
var x = cljs.core.first(arglist__19916);
var y = cljs.core.first(cljs.core.next(arglist__19916));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19916)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19916)));
return G__19915__delegate.call(this, x, y, z, args);
});
return G__19915;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__19909.call(this);
case  1 :
return ep3__19910.call(this,x);
case  2 :
return ep3__19911.call(this,x,y);
case  3 :
return ep3__19912.call(this,x,y,z);
default:
return ep3__19913.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__19913.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__19891 = (function() { 
var G__19917__delegate = function (p1,p2,p3,ps){
var ps__19883 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__19918 = (function (){
return true;
});
var epn__19919 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__19836_SHARP_){
return p1__19836_SHARP_.call(null,x);
}),ps__19883);
});
var epn__19920 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__19837_SHARP_){
var and__3546__auto____19884 = p1__19837_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____19884))
{return p1__19837_SHARP_.call(null,y);
} else
{return and__3546__auto____19884;
}
}),ps__19883);
});
var epn__19921 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__19838_SHARP_){
var and__3546__auto____19885 = p1__19838_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____19885))
{var and__3546__auto____19886 = p1__19838_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____19886))
{return p1__19838_SHARP_.call(null,z);
} else
{return and__3546__auto____19886;
}
} else
{return and__3546__auto____19885;
}
}),ps__19883);
});
var epn__19922 = (function() { 
var G__19924__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19887 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____19887))
{return cljs.core.every_QMARK_.call(null,(function (p1__19839_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__19839_SHARP_,args);
}),ps__19883);
} else
{return and__3546__auto____19887;
}
})());
};
var G__19924 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19924__delegate.call(this, x, y, z, args);
};
G__19924.cljs$lang$maxFixedArity = 3;
G__19924.cljs$lang$applyTo = (function (arglist__19925){
var x = cljs.core.first(arglist__19925);
var y = cljs.core.first(cljs.core.next(arglist__19925));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19925)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19925)));
return G__19924__delegate.call(this, x, y, z, args);
});
return G__19924;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__19918.call(this);
case  1 :
return epn__19919.call(this,x);
case  2 :
return epn__19920.call(this,x,y);
case  3 :
return epn__19921.call(this,x,y,z);
default:
return epn__19922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__19922.cljs$lang$applyTo;
return epn;
})()
};
var G__19917 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19917__delegate.call(this, p1, p2, p3, ps);
};
G__19917.cljs$lang$maxFixedArity = 3;
G__19917.cljs$lang$applyTo = (function (arglist__19926){
var p1 = cljs.core.first(arglist__19926);
var p2 = cljs.core.first(cljs.core.next(arglist__19926));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19926)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19926)));
return G__19917__delegate.call(this, p1, p2, p3, ps);
});
return G__19917;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__19888.call(this,p1);
case  2 :
return every_pred__19889.call(this,p1,p2);
case  3 :
return every_pred__19890.call(this,p1,p2,p3);
default:
return every_pred__19891.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__19891.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__19966 = (function (p){
return (function() {
var sp1 = null;
var sp1__19971 = (function (){
return null;
});
var sp1__19972 = (function (x){
return p.call(null,x);
});
var sp1__19973 = (function (x,y){
var or__3548__auto____19928 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____19928))
{return or__3548__auto____19928;
} else
{return p.call(null,y);
}
});
var sp1__19974 = (function (x,y,z){
var or__3548__auto____19929 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____19929))
{return or__3548__auto____19929;
} else
{var or__3548__auto____19930 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____19930))
{return or__3548__auto____19930;
} else
{return p.call(null,z);
}
}
});
var sp1__19975 = (function() { 
var G__19977__delegate = function (x,y,z,args){
var or__3548__auto____19931 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____19931))
{return or__3548__auto____19931;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__19977 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19977__delegate.call(this, x, y, z, args);
};
G__19977.cljs$lang$maxFixedArity = 3;
G__19977.cljs$lang$applyTo = (function (arglist__19978){
var x = cljs.core.first(arglist__19978);
var y = cljs.core.first(cljs.core.next(arglist__19978));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19978)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19978)));
return G__19977__delegate.call(this, x, y, z, args);
});
return G__19977;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__19971.call(this);
case  1 :
return sp1__19972.call(this,x);
case  2 :
return sp1__19973.call(this,x,y);
case  3 :
return sp1__19974.call(this,x,y,z);
default:
return sp1__19975.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__19975.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__19967 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__19979 = (function (){
return null;
});
var sp2__19980 = (function (x){
var or__3548__auto____19932 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____19932))
{return or__3548__auto____19932;
} else
{return p2.call(null,x);
}
});
var sp2__19981 = (function (x,y){
var or__3548__auto____19933 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____19933))
{return or__3548__auto____19933;
} else
{var or__3548__auto____19934 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____19934))
{return or__3548__auto____19934;
} else
{var or__3548__auto____19935 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____19935))
{return or__3548__auto____19935;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__19982 = (function (x,y,z){
var or__3548__auto____19936 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____19936))
{return or__3548__auto____19936;
} else
{var or__3548__auto____19937 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____19937))
{return or__3548__auto____19937;
} else
{var or__3548__auto____19938 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____19938))
{return or__3548__auto____19938;
} else
{var or__3548__auto____19939 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____19939))
{return or__3548__auto____19939;
} else
{var or__3548__auto____19940 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____19940))
{return or__3548__auto____19940;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__19983 = (function() { 
var G__19985__delegate = function (x,y,z,args){
var or__3548__auto____19941 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____19941))
{return or__3548__auto____19941;
} else
{return cljs.core.some.call(null,(function (p1__19844_SHARP_){
var or__3548__auto____19942 = p1.call(null,p1__19844_SHARP_);

if(cljs.core.truth_(or__3548__auto____19942))
{return or__3548__auto____19942;
} else
{return p2.call(null,p1__19844_SHARP_);
}
}),args);
}
};
var G__19985 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19985__delegate.call(this, x, y, z, args);
};
G__19985.cljs$lang$maxFixedArity = 3;
G__19985.cljs$lang$applyTo = (function (arglist__19986){
var x = cljs.core.first(arglist__19986);
var y = cljs.core.first(cljs.core.next(arglist__19986));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19986)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19986)));
return G__19985__delegate.call(this, x, y, z, args);
});
return G__19985;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__19979.call(this);
case  1 :
return sp2__19980.call(this,x);
case  2 :
return sp2__19981.call(this,x,y);
case  3 :
return sp2__19982.call(this,x,y,z);
default:
return sp2__19983.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__19983.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__19968 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__19987 = (function (){
return null;
});
var sp3__19988 = (function (x){
var or__3548__auto____19943 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____19943))
{return or__3548__auto____19943;
} else
{var or__3548__auto____19944 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____19944))
{return or__3548__auto____19944;
} else
{return p3.call(null,x);
}
}
});
var sp3__19989 = (function (x,y){
var or__3548__auto____19945 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____19945))
{return or__3548__auto____19945;
} else
{var or__3548__auto____19946 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____19946))
{return or__3548__auto____19946;
} else
{var or__3548__auto____19947 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____19947))
{return or__3548__auto____19947;
} else
{var or__3548__auto____19948 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____19948))
{return or__3548__auto____19948;
} else
{var or__3548__auto____19949 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____19949))
{return or__3548__auto____19949;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__19990 = (function (x,y,z){
var or__3548__auto____19950 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____19950))
{return or__3548__auto____19950;
} else
{var or__3548__auto____19951 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____19951))
{return or__3548__auto____19951;
} else
{var or__3548__auto____19952 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____19952))
{return or__3548__auto____19952;
} else
{var or__3548__auto____19953 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____19953))
{return or__3548__auto____19953;
} else
{var or__3548__auto____19954 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____19954))
{return or__3548__auto____19954;
} else
{var or__3548__auto____19955 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____19955))
{return or__3548__auto____19955;
} else
{var or__3548__auto____19956 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____19956))
{return or__3548__auto____19956;
} else
{var or__3548__auto____19957 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____19957))
{return or__3548__auto____19957;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__19991 = (function() { 
var G__19993__delegate = function (x,y,z,args){
var or__3548__auto____19958 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____19958))
{return or__3548__auto____19958;
} else
{return cljs.core.some.call(null,(function (p1__19845_SHARP_){
var or__3548__auto____19959 = p1.call(null,p1__19845_SHARP_);

if(cljs.core.truth_(or__3548__auto____19959))
{return or__3548__auto____19959;
} else
{var or__3548__auto____19960 = p2.call(null,p1__19845_SHARP_);

if(cljs.core.truth_(or__3548__auto____19960))
{return or__3548__auto____19960;
} else
{return p3.call(null,p1__19845_SHARP_);
}
}
}),args);
}
};
var G__19993 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19993__delegate.call(this, x, y, z, args);
};
G__19993.cljs$lang$maxFixedArity = 3;
G__19993.cljs$lang$applyTo = (function (arglist__19994){
var x = cljs.core.first(arglist__19994);
var y = cljs.core.first(cljs.core.next(arglist__19994));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19994)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19994)));
return G__19993__delegate.call(this, x, y, z, args);
});
return G__19993;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__19987.call(this);
case  1 :
return sp3__19988.call(this,x);
case  2 :
return sp3__19989.call(this,x,y);
case  3 :
return sp3__19990.call(this,x,y,z);
default:
return sp3__19991.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__19991.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__19969 = (function() { 
var G__19995__delegate = function (p1,p2,p3,ps){
var ps__19961 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__19996 = (function (){
return null;
});
var spn__19997 = (function (x){
return cljs.core.some.call(null,(function (p1__19846_SHARP_){
return p1__19846_SHARP_.call(null,x);
}),ps__19961);
});
var spn__19998 = (function (x,y){
return cljs.core.some.call(null,(function (p1__19847_SHARP_){
var or__3548__auto____19962 = p1__19847_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____19962))
{return or__3548__auto____19962;
} else
{return p1__19847_SHARP_.call(null,y);
}
}),ps__19961);
});
var spn__19999 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__19848_SHARP_){
var or__3548__auto____19963 = p1__19848_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____19963))
{return or__3548__auto____19963;
} else
{var or__3548__auto____19964 = p1__19848_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____19964))
{return or__3548__auto____19964;
} else
{return p1__19848_SHARP_.call(null,z);
}
}
}),ps__19961);
});
var spn__20000 = (function() { 
var G__20002__delegate = function (x,y,z,args){
var or__3548__auto____19965 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____19965))
{return or__3548__auto____19965;
} else
{return cljs.core.some.call(null,(function (p1__19849_SHARP_){
return cljs.core.some.call(null,p1__19849_SHARP_,args);
}),ps__19961);
}
};
var G__20002 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20002__delegate.call(this, x, y, z, args);
};
G__20002.cljs$lang$maxFixedArity = 3;
G__20002.cljs$lang$applyTo = (function (arglist__20003){
var x = cljs.core.first(arglist__20003);
var y = cljs.core.first(cljs.core.next(arglist__20003));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20003)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20003)));
return G__20002__delegate.call(this, x, y, z, args);
});
return G__20002;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__19996.call(this);
case  1 :
return spn__19997.call(this,x);
case  2 :
return spn__19998.call(this,x,y);
case  3 :
return spn__19999.call(this,x,y,z);
default:
return spn__20000.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__20000.cljs$lang$applyTo;
return spn;
})()
};
var G__19995 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19995__delegate.call(this, p1, p2, p3, ps);
};
G__19995.cljs$lang$maxFixedArity = 3;
G__19995.cljs$lang$applyTo = (function (arglist__20004){
var p1 = cljs.core.first(arglist__20004);
var p2 = cljs.core.first(cljs.core.next(arglist__20004));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20004)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20004)));
return G__19995__delegate.call(this, p1, p2, p3, ps);
});
return G__19995;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__19966.call(this,p1);
case  2 :
return some_fn__19967.call(this,p1,p2);
case  3 :
return some_fn__19968.call(this,p1,p2,p3);
default:
return some_fn__19969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__19969.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__20017 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20005 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20005))
{var s__20006 = temp__3698__auto____20005;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__20006)),map.call(null,f,cljs.core.rest.call(null,s__20006)));
} else
{return null;
}
})));
});
var map__20018 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__20007 = cljs.core.seq.call(null,c1);
var s2__20008 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____20009 = s1__20007;

if(cljs.core.truth_(and__3546__auto____20009))
{return s2__20008;
} else
{return and__3546__auto____20009;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__20007),cljs.core.first.call(null,s2__20008)),map.call(null,f,cljs.core.rest.call(null,s1__20007),cljs.core.rest.call(null,s2__20008)));
} else
{return null;
}
})));
});
var map__20019 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__20010 = cljs.core.seq.call(null,c1);
var s2__20011 = cljs.core.seq.call(null,c2);
var s3__20012 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____20013 = s1__20010;

if(cljs.core.truth_(and__3546__auto____20013))
{var and__3546__auto____20014 = s2__20011;

if(cljs.core.truth_(and__3546__auto____20014))
{return s3__20012;
} else
{return and__3546__auto____20014;
}
} else
{return and__3546__auto____20013;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__20010),cljs.core.first.call(null,s2__20011),cljs.core.first.call(null,s3__20012)),map.call(null,f,cljs.core.rest.call(null,s1__20010),cljs.core.rest.call(null,s2__20011),cljs.core.rest.call(null,s3__20012)));
} else
{return null;
}
})));
});
var map__20020 = (function() { 
var G__20022__delegate = function (f,c1,c2,c3,colls){
var step__20016 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__20015 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__20015)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__20015),step.call(null,map.call(null,cljs.core.rest,ss__20015)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__19927_SHARP_){
return cljs.core.apply.call(null,f,p1__19927_SHARP_);
}),step__20016.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__20022 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__20022__delegate.call(this, f, c1, c2, c3, colls);
};
G__20022.cljs$lang$maxFixedArity = 4;
G__20022.cljs$lang$applyTo = (function (arglist__20023){
var f = cljs.core.first(arglist__20023);
var c1 = cljs.core.first(cljs.core.next(arglist__20023));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20023)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20023))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20023))));
return G__20022__delegate.call(this, f, c1, c2, c3, colls);
});
return G__20022;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__20017.call(this,f,c1);
case  3 :
return map__20018.call(this,f,c1,c2);
case  4 :
return map__20019.call(this,f,c1,c2,c3);
default:
return map__20020.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__20020.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____20024 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20024))
{var s__20025 = temp__3698__auto____20024;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__20025),take.call(null,(n - 1),cljs.core.rest.call(null,s__20025)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__20028 = (function (n,coll){
while(true){
var s__20026 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____20027 = (n > 0);

if(cljs.core.truth_(and__3546__auto____20027))
{return s__20026;
} else
{return and__3546__auto____20027;
}
})()))
{{
var G__20029 = (n - 1);
var G__20030 = cljs.core.rest.call(null,s__20026);
n = G__20029;
coll = G__20030;
continue;
}
} else
{return s__20026;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__20028.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__20031 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__20032 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__20031.call(this,n);
case  2 :
return drop_last__20032.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__20034 = cljs.core.seq.call(null,coll);
var lead__20035 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__20035))
{{
var G__20036 = cljs.core.next.call(null,s__20034);
var G__20037 = cljs.core.next.call(null,lead__20035);
s__20034 = G__20036;
lead__20035 = G__20037;
continue;
}
} else
{return s__20034;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__20040 = (function (pred,coll){
while(true){
var s__20038 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____20039 = s__20038;

if(cljs.core.truth_(and__3546__auto____20039))
{return pred.call(null,cljs.core.first.call(null,s__20038));
} else
{return and__3546__auto____20039;
}
})()))
{{
var G__20041 = pred;
var G__20042 = cljs.core.rest.call(null,s__20038);
pred = G__20041;
coll = G__20042;
continue;
}
} else
{return s__20038;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__20040.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20043 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20043))
{var s__20044 = temp__3698__auto____20043;

return cljs.core.concat.call(null,s__20044,cycle.call(null,s__20044));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__20045 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__20046 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__20045.call(this,n);
case  2 :
return repeat__20046.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__20048 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__20049 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__20048.call(this,n);
case  2 :
return repeatedly__20049.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__20055 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__20051 = cljs.core.seq.call(null,c1);
var s2__20052 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____20053 = s1__20051;

if(cljs.core.truth_(and__3546__auto____20053))
{return s2__20052;
} else
{return and__3546__auto____20053;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__20051),cljs.core.cons.call(null,cljs.core.first.call(null,s2__20052),interleave.call(null,cljs.core.rest.call(null,s1__20051),cljs.core.rest.call(null,s2__20052))));
} else
{return null;
}
})));
});
var interleave__20056 = (function() { 
var G__20058__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__20054 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__20054)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__20054),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__20054)));
} else
{return null;
}
})));
};
var G__20058 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20058__delegate.call(this, c1, c2, colls);
};
G__20058.cljs$lang$maxFixedArity = 2;
G__20058.cljs$lang$applyTo = (function (arglist__20059){
var c1 = cljs.core.first(arglist__20059);
var c2 = cljs.core.first(cljs.core.next(arglist__20059));
var colls = cljs.core.rest(cljs.core.next(arglist__20059));
return G__20058__delegate.call(this, c1, c2, colls);
});
return G__20058;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__20055.call(this,c1,c2);
default:
return interleave__20056.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__20056.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__20062 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____20060 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____20060))
{var coll__20061 = temp__3695__auto____20060;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__20061),cat.call(null,cljs.core.rest.call(null,coll__20061),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__20062.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__20063 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__20064 = (function() { 
var G__20066__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__20066 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20066__delegate.call(this, f, coll, colls);
};
G__20066.cljs$lang$maxFixedArity = 2;
G__20066.cljs$lang$applyTo = (function (arglist__20067){
var f = cljs.core.first(arglist__20067);
var coll = cljs.core.first(cljs.core.next(arglist__20067));
var colls = cljs.core.rest(cljs.core.next(arglist__20067));
return G__20066__delegate.call(this, f, coll, colls);
});
return G__20066;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__20063.call(this,f,coll);
default:
return mapcat__20064.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__20064.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20068 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20068))
{var s__20069 = temp__3698__auto____20068;

var f__20070 = cljs.core.first.call(null,s__20069);
var r__20071 = cljs.core.rest.call(null,s__20069);

if(cljs.core.truth_(pred.call(null,f__20070)))
{return cljs.core.cons.call(null,f__20070,filter.call(null,pred,r__20071));
} else
{return filter.call(null,pred,r__20071);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__20073 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__20073.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__20072_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__20072_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__20080 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__20081 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20074 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20074))
{var s__20075 = temp__3698__auto____20074;

var p__20076 = cljs.core.take.call(null,n,s__20075);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__20076))))
{return cljs.core.cons.call(null,p__20076,partition.call(null,n,step,cljs.core.drop.call(null,step,s__20075)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__20082 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20077 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20077))
{var s__20078 = temp__3698__auto____20077;

var p__20079 = cljs.core.take.call(null,n,s__20078);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__20079))))
{return cljs.core.cons.call(null,p__20079,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__20078)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__20079,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__20080.call(this,n,step);
case  3 :
return partition__20081.call(this,n,step,pad);
case  4 :
return partition__20082.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__20088 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__20089 = (function (m,ks,not_found){
var sentinel__20084 = cljs.core.lookup_sentinel;
var m__20085 = m;
var ks__20086 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__20086))
{var m__20087 = cljs.core.get.call(null,m__20085,cljs.core.first.call(null,ks__20086),sentinel__20084);

if(cljs.core.truth_((sentinel__20084 === m__20087)))
{return not_found;
} else
{{
var G__20091 = sentinel__20084;
var G__20092 = m__20087;
var G__20093 = cljs.core.next.call(null,ks__20086);
sentinel__20084 = G__20091;
m__20085 = G__20092;
ks__20086 = G__20093;
continue;
}
}
} else
{return m__20085;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__20088.call(this,m,ks);
case  3 :
return get_in__20089.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__20094,v){
var vec__20095__20096 = p__20094;
var k__20097 = cljs.core.nth.call(null,vec__20095__20096,0,null);
var ks__20098 = cljs.core.nthnext.call(null,vec__20095__20096,1);

if(cljs.core.truth_(ks__20098))
{return cljs.core.assoc.call(null,m,k__20097,assoc_in.call(null,cljs.core.get.call(null,m,k__20097),ks__20098,v));
} else
{return cljs.core.assoc.call(null,m,k__20097,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__20099,f,args){
var vec__20100__20101 = p__20099;
var k__20102 = cljs.core.nth.call(null,vec__20100__20101,0,null);
var ks__20103 = cljs.core.nthnext.call(null,vec__20100__20101,1);

if(cljs.core.truth_(ks__20103))
{return cljs.core.assoc.call(null,m,k__20102,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__20102),ks__20103,f,args));
} else
{return cljs.core.assoc.call(null,m,k__20102,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__20102),args));
}
};
var update_in = function (m,p__20099,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__20099, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__20104){
var m = cljs.core.first(arglist__20104);
var p__20099 = cljs.core.first(cljs.core.next(arglist__20104));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20104)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20104)));
return update_in__delegate.call(this, m, p__20099, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20105 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20132 = null;
var G__20132__20133 = (function (coll,k){
var this__20106 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__20132__20134 = (function (coll,k,not_found){
var this__20107 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__20132 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20132__20133.call(this,coll,k);
case  3 :
return G__20132__20134.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20132;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__20108 = this;
var new_array__20109 = cljs.core.aclone.call(null,this__20108.array);

(new_array__20109[k] = v);
return (new cljs.core.Vector(this__20108.meta,new_array__20109));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__20136 = null;
var G__20136__20137 = (function (coll,k){
var this__20110 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20136__20138 = (function (coll,k,not_found){
var this__20111 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20136 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20136__20137.call(this,coll,k);
case  3 :
return G__20136__20138.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20136;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20112 = this;
var new_array__20113 = cljs.core.aclone.call(null,this__20112.array);

new_array__20113.push(o);
return (new cljs.core.Vector(this__20112.meta,new_array__20113));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__20140 = null;
var G__20140__20141 = (function (v,f){
var this__20114 = this;
return cljs.core.ci_reduce.call(null,this__20114.array,f);
});
var G__20140__20142 = (function (v,f,start){
var this__20115 = this;
return cljs.core.ci_reduce.call(null,this__20115.array,f,start);
});
G__20140 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__20140__20141.call(this,v,f);
case  3 :
return G__20140__20142.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20140;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20116 = this;
if(cljs.core.truth_((this__20116.array.length > 0)))
{var vector_seq__20117 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__20116.array.length)))
{return cljs.core.cons.call(null,(this__20116.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__20117.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20118 = this;
return this__20118.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__20119 = this;
var count__20120 = this__20119.array.length;

if(cljs.core.truth_((count__20120 > 0)))
{return (this__20119.array[(count__20120 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__20121 = this;
if(cljs.core.truth_((this__20121.array.length > 0)))
{var new_array__20122 = cljs.core.aclone.call(null,this__20121.array);

new_array__20122.pop();
return (new cljs.core.Vector(this__20121.meta,new_array__20122));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__20123 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20124 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20125 = this;
return (new cljs.core.Vector(meta,this__20125.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20126 = this;
return this__20126.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__20144 = null;
var G__20144__20145 = (function (coll,n){
var this__20127 = this;
if(cljs.core.truth_((function (){var and__3546__auto____20128 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____20128))
{return (n < this__20127.array.length);
} else
{return and__3546__auto____20128;
}
})()))
{return (this__20127.array[n]);
} else
{return null;
}
});
var G__20144__20146 = (function (coll,n,not_found){
var this__20129 = this;
if(cljs.core.truth_((function (){var and__3546__auto____20130 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____20130))
{return (n < this__20129.array.length);
} else
{return and__3546__auto____20130;
}
})()))
{return (this__20129.array[n]);
} else
{return not_found;
}
});
G__20144 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__20144__20145.call(this,coll,n);
case  3 :
return G__20144__20146.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20144;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20131 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__20131.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__20148){
var args = cljs.core.seq( arglist__20148 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20149 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20171 = null;
var G__20171__20172 = (function (coll,k){
var this__20150 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__20171__20173 = (function (coll,k,not_found){
var this__20151 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__20171 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20171__20172.call(this,coll,k);
case  3 :
return G__20171__20173.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20171;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__20152 = this;
var v_pos__20153 = (this__20152.start + key);

return (new cljs.core.Subvec(this__20152.meta,cljs.core._assoc.call(null,this__20152.v,v_pos__20153,val),this__20152.start,((this__20152.end > (v_pos__20153 + 1)) ? this__20152.end : (v_pos__20153 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__20175 = null;
var G__20175__20176 = (function (coll,k){
var this__20154 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20175__20177 = (function (coll,k,not_found){
var this__20155 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20175 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20175__20176.call(this,coll,k);
case  3 :
return G__20175__20177.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20175;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20156 = this;
return (new cljs.core.Subvec(this__20156.meta,cljs.core._assoc_n.call(null,this__20156.v,this__20156.end,o),this__20156.start,(this__20156.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__20179 = null;
var G__20179__20180 = (function (coll,f){
var this__20157 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__20179__20181 = (function (coll,f,start){
var this__20158 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__20179 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__20179__20180.call(this,coll,f);
case  3 :
return G__20179__20181.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20179;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20159 = this;
var subvec_seq__20160 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__20159.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__20159.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__20160.call(null,this__20159.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20161 = this;
return (this__20161.end - this__20161.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__20162 = this;
return cljs.core._nth.call(null,this__20162.v,(this__20162.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__20163 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__20163.start,this__20163.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__20163.meta,this__20163.v,this__20163.start,(this__20163.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__20164 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20165 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20166 = this;
return (new cljs.core.Subvec(meta,this__20166.v,this__20166.start,this__20166.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20167 = this;
return this__20167.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__20183 = null;
var G__20183__20184 = (function (coll,n){
var this__20168 = this;
return cljs.core._nth.call(null,this__20168.v,(this__20168.start + n));
});
var G__20183__20185 = (function (coll,n,not_found){
var this__20169 = this;
return cljs.core._nth.call(null,this__20169.v,(this__20169.start + n),not_found);
});
G__20183 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__20183__20184.call(this,coll,n);
case  3 :
return G__20183__20185.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20183;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20170 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__20170.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__20187 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__20188 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__20187.call(this,v,start);
case  3 :
return subvec__20188.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20190 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20191 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20192 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20193 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__20193.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20194 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__20195 = this;
return cljs.core._first.call(null,this__20195.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__20196 = this;
var temp__3695__auto____20197 = cljs.core.next.call(null,this__20196.front);

if(cljs.core.truth_(temp__3695__auto____20197))
{var f1__20198 = temp__3695__auto____20197;

return (new cljs.core.PersistentQueueSeq(this__20196.meta,f1__20198,this__20196.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__20196.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__20196.meta,this__20196.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20199 = this;
return this__20199.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20200 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__20200.front,this__20200.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20201 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20202 = this;
if(cljs.core.truth_(this__20202.front))
{return (new cljs.core.PersistentQueue(this__20202.meta,(this__20202.count + 1),this__20202.front,cljs.core.conj.call(null,(function (){var or__3548__auto____20203 = this__20202.rear;

if(cljs.core.truth_(or__3548__auto____20203))
{return or__3548__auto____20203;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__20202.meta,(this__20202.count + 1),cljs.core.conj.call(null,this__20202.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20204 = this;
var rear__20205 = cljs.core.seq.call(null,this__20204.rear);

if(cljs.core.truth_((function (){var or__3548__auto____20206 = this__20204.front;

if(cljs.core.truth_(or__3548__auto____20206))
{return or__3548__auto____20206;
} else
{return rear__20205;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__20204.front,cljs.core.seq.call(null,rear__20205)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20207 = this;
return this__20207.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__20208 = this;
return cljs.core._first.call(null,this__20208.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__20209 = this;
if(cljs.core.truth_(this__20209.front))
{var temp__3695__auto____20210 = cljs.core.next.call(null,this__20209.front);

if(cljs.core.truth_(temp__3695__auto____20210))
{var f1__20211 = temp__3695__auto____20210;

return (new cljs.core.PersistentQueue(this__20209.meta,(this__20209.count - 1),f1__20211,this__20209.rear));
} else
{return (new cljs.core.PersistentQueue(this__20209.meta,(this__20209.count - 1),cljs.core.seq.call(null,this__20209.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__20212 = this;
return cljs.core.first.call(null,this__20212.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__20213 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20214 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20215 = this;
return (new cljs.core.PersistentQueue(meta,this__20215.count,this__20215.front,this__20215.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20216 = this;
return this__20216.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20217 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__20218 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__20219 = array.length;

var i__20220 = 0;

while(true){
if(cljs.core.truth_((i__20220 < len__20219)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__20220]))))
{return i__20220;
} else
{{
var G__20221 = (i__20220 + incr);
i__20220 = G__20221;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___20223 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___20224 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____20222 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____20222))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____20222;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___20223.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___20224.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20227 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20248 = null;
var G__20248__20249 = (function (coll,k){
var this__20228 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__20248__20250 = (function (coll,k,not_found){
var this__20229 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__20229.strobj,(this__20229.strobj[k]),not_found);
});
G__20248 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20248__20249.call(this,coll,k);
case  3 :
return G__20248__20250.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20248;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__20230 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__20231 = goog.object.clone.call(null,this__20230.strobj);
var overwrite_QMARK___20232 = new_strobj__20231.hasOwnProperty(k);

(new_strobj__20231[k] = v);
if(cljs.core.truth_(overwrite_QMARK___20232))
{return (new cljs.core.ObjMap(this__20230.meta,this__20230.keys,new_strobj__20231));
} else
{var new_keys__20233 = cljs.core.aclone.call(null,this__20230.keys);

new_keys__20233.push(k);
return (new cljs.core.ObjMap(this__20230.meta,new_keys__20233,new_strobj__20231));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__20230.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__20234 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__20234.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__20252 = null;
var G__20252__20253 = (function (coll,k){
var this__20235 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20252__20254 = (function (coll,k,not_found){
var this__20236 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20252 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20252__20253.call(this,coll,k);
case  3 :
return G__20252__20254.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20252;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__20237 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20238 = this;
if(cljs.core.truth_((this__20238.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__20226_SHARP_){
return cljs.core.vector.call(null,p1__20226_SHARP_,(this__20238.strobj[p1__20226_SHARP_]));
}),this__20238.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20239 = this;
return this__20239.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20240 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20241 = this;
return (new cljs.core.ObjMap(meta,this__20241.keys,this__20241.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20242 = this;
return this__20242.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20243 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__20243.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__20244 = this;
if(cljs.core.truth_((function (){var and__3546__auto____20245 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____20245))
{return this__20244.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____20245;
}
})()))
{var new_keys__20246 = cljs.core.aclone.call(null,this__20244.keys);
var new_strobj__20247 = goog.object.clone.call(null,this__20244.strobj);

new_keys__20246.splice(cljs.core.scan_array.call(null,1,k,new_keys__20246),1);
cljs.core.js_delete.call(null,new_strobj__20247,k);
return (new cljs.core.ObjMap(this__20244.meta,new_keys__20246,new_strobj__20247));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20257 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20289 = null;
var G__20289__20290 = (function (coll,k){
var this__20258 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__20289__20291 = (function (coll,k,not_found){
var this__20259 = this;
var bucket__20260 = (this__20259.hashobj[cljs.core.hash.call(null,k)]);
var i__20261 = (cljs.core.truth_(bucket__20260)?cljs.core.scan_array.call(null,2,k,bucket__20260):null);

if(cljs.core.truth_(i__20261))
{return (bucket__20260[(i__20261 + 1)]);
} else
{return not_found;
}
});
G__20289 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20289__20290.call(this,coll,k);
case  3 :
return G__20289__20291.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20289;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__20262 = this;
var h__20263 = cljs.core.hash.call(null,k);
var bucket__20264 = (this__20262.hashobj[h__20263]);

if(cljs.core.truth_(bucket__20264))
{var new_bucket__20265 = cljs.core.aclone.call(null,bucket__20264);
var new_hashobj__20266 = goog.object.clone.call(null,this__20262.hashobj);

(new_hashobj__20266[h__20263] = new_bucket__20265);
var temp__3695__auto____20267 = cljs.core.scan_array.call(null,2,k,new_bucket__20265);

if(cljs.core.truth_(temp__3695__auto____20267))
{var i__20268 = temp__3695__auto____20267;

(new_bucket__20265[(i__20268 + 1)] = v);
return (new cljs.core.HashMap(this__20262.meta,this__20262.count,new_hashobj__20266));
} else
{new_bucket__20265.push(k,v);
return (new cljs.core.HashMap(this__20262.meta,(this__20262.count + 1),new_hashobj__20266));
}
} else
{var new_hashobj__20269 = goog.object.clone.call(null,this__20262.hashobj);

(new_hashobj__20269[h__20263] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__20262.meta,(this__20262.count + 1),new_hashobj__20269));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__20270 = this;
var bucket__20271 = (this__20270.hashobj[cljs.core.hash.call(null,k)]);
var i__20272 = (cljs.core.truth_(bucket__20271)?cljs.core.scan_array.call(null,2,k,bucket__20271):null);

if(cljs.core.truth_(i__20272))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__20293 = null;
var G__20293__20294 = (function (coll,k){
var this__20273 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20293__20295 = (function (coll,k,not_found){
var this__20274 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20293 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20293__20294.call(this,coll,k);
case  3 :
return G__20293__20295.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20293;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__20275 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20276 = this;
if(cljs.core.truth_((this__20276.count > 0)))
{var hashes__20277 = cljs.core.js_keys.call(null,this__20276.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__20256_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__20276.hashobj[p1__20256_SHARP_])));
}),hashes__20277);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20278 = this;
return this__20278.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20279 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20280 = this;
return (new cljs.core.HashMap(meta,this__20280.count,this__20280.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20281 = this;
return this__20281.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20282 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__20282.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__20283 = this;
var h__20284 = cljs.core.hash.call(null,k);
var bucket__20285 = (this__20283.hashobj[h__20284]);
var i__20286 = (cljs.core.truth_(bucket__20285)?cljs.core.scan_array.call(null,2,k,bucket__20285):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__20286)))
{return coll;
} else
{var new_hashobj__20287 = goog.object.clone.call(null,this__20283.hashobj);

if(cljs.core.truth_((3 > bucket__20285.length)))
{cljs.core.js_delete.call(null,new_hashobj__20287,h__20284);
} else
{var new_bucket__20288 = cljs.core.aclone.call(null,bucket__20285);

new_bucket__20288.splice(i__20286,2);
(new_hashobj__20287[h__20284] = new_bucket__20288);
}
return (new cljs.core.HashMap(this__20283.meta,(this__20283.count - 1),new_hashobj__20287));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__20297 = ks.length;

var i__20298 = 0;
var out__20299 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__20298 < len__20297)))
{{
var G__20300 = (i__20298 + 1);
var G__20301 = cljs.core.assoc.call(null,out__20299,(ks[i__20298]),(vs[i__20298]));
i__20298 = G__20300;
out__20299 = G__20301;
continue;
}
} else
{return out__20299;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__20302 = cljs.core.seq.call(null,keyvals);
var out__20303 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__20302))
{{
var G__20304 = cljs.core.nnext.call(null,in$__20302);
var G__20305 = cljs.core.assoc.call(null,out__20303,cljs.core.first.call(null,in$__20302),cljs.core.second.call(null,in$__20302));
in$__20302 = G__20304;
out__20303 = G__20305;
continue;
}
} else
{return out__20303;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__20306){
var keyvals = cljs.core.seq( arglist__20306 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__20307_SHARP_,p2__20308_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____20309 = p1__20307_SHARP_;

if(cljs.core.truth_(or__3548__auto____20309))
{return or__3548__auto____20309;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__20308_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__20310){
var maps = cljs.core.seq( arglist__20310 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__20313 = (function (m,e){
var k__20311 = cljs.core.first.call(null,e);
var v__20312 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__20311)))
{return cljs.core.assoc.call(null,m,k__20311,f.call(null,cljs.core.get.call(null,m,k__20311),v__20312));
} else
{return cljs.core.assoc.call(null,m,k__20311,v__20312);
}
});
var merge2__20315 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__20313,(function (){var or__3548__auto____20314 = m1;

if(cljs.core.truth_(or__3548__auto____20314))
{return or__3548__auto____20314;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__20315,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__20316){
var f = cljs.core.first(arglist__20316);
var maps = cljs.core.rest(arglist__20316);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__20318 = cljs.core.ObjMap.fromObject([],{});
var keys__20319 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__20319))
{var key__20320 = cljs.core.first.call(null,keys__20319);
var entry__20321 = cljs.core.get.call(null,map,key__20320,"﷐'user/not-found");

{
var G__20322 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__20321,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__20318,key__20320,entry__20321):ret__20318);
var G__20323 = cljs.core.next.call(null,keys__20319);
ret__20318 = G__20322;
keys__20319 = G__20323;
continue;
}
} else
{return ret__20318;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20324 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20339 = null;
var G__20339__20340 = (function (coll,v){
var this__20325 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__20339__20341 = (function (coll,v,not_found){
var this__20326 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__20326.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__20339 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__20339__20340.call(this,coll,v);
case  3 :
return G__20339__20341.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20339;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__20343 = null;
var G__20343__20344 = (function (coll,k){
var this__20327 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20343__20345 = (function (coll,k,not_found){
var this__20328 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20343 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20343__20344.call(this,coll,k);
case  3 :
return G__20343__20345.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20343;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20329 = this;
return (new cljs.core.Set(this__20329.meta,cljs.core.assoc.call(null,this__20329.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20330 = this;
return cljs.core.keys.call(null,this__20330.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__20331 = this;
return (new cljs.core.Set(this__20331.meta,cljs.core.dissoc.call(null,this__20331.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20332 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20333 = this;
var and__3546__auto____20334 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____20334))
{var and__3546__auto____20335 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____20335))
{return cljs.core.every_QMARK_.call(null,(function (p1__20317_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__20317_SHARP_);
}),other);
} else
{return and__3546__auto____20335;
}
} else
{return and__3546__auto____20334;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20336 = this;
return (new cljs.core.Set(meta,this__20336.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20337 = this;
return this__20337.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20338 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__20338.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__20348 = cljs.core.seq.call(null,coll);
var out__20349 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__20348))))
{{
var G__20350 = cljs.core.rest.call(null,in$__20348);
var G__20351 = cljs.core.conj.call(null,out__20349,cljs.core.first.call(null,in$__20348));
in$__20348 = G__20350;
out__20349 = G__20351;
continue;
}
} else
{return out__20349;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__20352 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____20353 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____20353))
{var e__20354 = temp__3695__auto____20353;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__20354));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__20352,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__20347_SHARP_){
var temp__3695__auto____20355 = cljs.core.find.call(null,smap,p1__20347_SHARP_);

if(cljs.core.truth_(temp__3695__auto____20355))
{var e__20356 = temp__3695__auto____20355;

return cljs.core.second.call(null,e__20356);
} else
{return p1__20347_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__20364 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__20357,seen){
while(true){
var vec__20358__20359 = p__20357;
var f__20360 = cljs.core.nth.call(null,vec__20358__20359,0,null);
var xs__20361 = vec__20358__20359;

var temp__3698__auto____20362 = cljs.core.seq.call(null,xs__20361);

if(cljs.core.truth_(temp__3698__auto____20362))
{var s__20363 = temp__3698__auto____20362;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__20360)))
{{
var G__20365 = cljs.core.rest.call(null,s__20363);
var G__20366 = seen;
p__20357 = G__20365;
seen = G__20366;
continue;
}
} else
{return cljs.core.cons.call(null,f__20360,step.call(null,cljs.core.rest.call(null,s__20363),cljs.core.conj.call(null,seen,f__20360)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__20364.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__20367 = cljs.core.Vector.fromArray([]);
var s__20368 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__20368)))
{{
var G__20369 = cljs.core.conj.call(null,ret__20367,cljs.core.first.call(null,s__20368));
var G__20370 = cljs.core.next.call(null,s__20368);
ret__20367 = G__20369;
s__20368 = G__20370;
continue;
}
} else
{return cljs.core.seq.call(null,ret__20367);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____20371 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____20371))
{return or__3548__auto____20371;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__20372 = x.lastIndexOf("/");

if(cljs.core.truth_((i__20372 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__20372 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____20373 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____20373))
{return or__3548__auto____20373;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__20374 = x.lastIndexOf("/");

if(cljs.core.truth_((i__20374 > -1)))
{return cljs.core.subs.call(null,x,2,i__20374);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__20377 = cljs.core.ObjMap.fromObject([],{});
var ks__20378 = cljs.core.seq.call(null,keys);
var vs__20379 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____20380 = ks__20378;

if(cljs.core.truth_(and__3546__auto____20380))
{return vs__20379;
} else
{return and__3546__auto____20380;
}
})()))
{{
var G__20381 = cljs.core.assoc.call(null,map__20377,cljs.core.first.call(null,ks__20378),cljs.core.first.call(null,vs__20379));
var G__20382 = cljs.core.next.call(null,ks__20378);
var G__20383 = cljs.core.next.call(null,vs__20379);
map__20377 = G__20381;
ks__20378 = G__20382;
vs__20379 = G__20383;
continue;
}
} else
{return map__20377;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__20386 = (function (k,x){
return x;
});
var max_key__20387 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__20388 = (function() { 
var G__20390__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__20375_SHARP_,p2__20376_SHARP_){
return max_key.call(null,k,p1__20375_SHARP_,p2__20376_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__20390 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20390__delegate.call(this, k, x, y, more);
};
G__20390.cljs$lang$maxFixedArity = 3;
G__20390.cljs$lang$applyTo = (function (arglist__20391){
var k = cljs.core.first(arglist__20391);
var x = cljs.core.first(cljs.core.next(arglist__20391));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20391)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20391)));
return G__20390__delegate.call(this, k, x, y, more);
});
return G__20390;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__20386.call(this,k,x);
case  3 :
return max_key__20387.call(this,k,x,y);
default:
return max_key__20388.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__20388.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__20392 = (function (k,x){
return x;
});
var min_key__20393 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__20394 = (function() { 
var G__20396__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__20384_SHARP_,p2__20385_SHARP_){
return min_key.call(null,k,p1__20384_SHARP_,p2__20385_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__20396 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20396__delegate.call(this, k, x, y, more);
};
G__20396.cljs$lang$maxFixedArity = 3;
G__20396.cljs$lang$applyTo = (function (arglist__20397){
var k = cljs.core.first(arglist__20397);
var x = cljs.core.first(cljs.core.next(arglist__20397));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20397)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20397)));
return G__20396__delegate.call(this, k, x, y, more);
});
return G__20396;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__20392.call(this,k,x);
case  3 :
return min_key__20393.call(this,k,x,y);
default:
return min_key__20394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__20394.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__20400 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__20401 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20398 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20398))
{var s__20399 = temp__3698__auto____20398;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__20399),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__20399)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__20400.call(this,n,step);
case  3 :
return partition_all__20401.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20403 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20403))
{var s__20404 = temp__3698__auto____20403;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__20404))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__20404),take_while.call(null,pred,cljs.core.rest.call(null,s__20404)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__20405 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__20406 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__20422 = null;
var G__20422__20423 = (function (rng,f){
var this__20407 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__20422__20424 = (function (rng,f,s){
var this__20408 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__20422 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__20422__20423.call(this,rng,f);
case  3 :
return G__20422__20424.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20422;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__20409 = this;
var comp__20410 = (cljs.core.truth_((this__20409.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__20410.call(null,this__20409.start,this__20409.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__20411 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__20411.end - this__20411.start) / this__20411.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__20412 = this;
return this__20412.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__20413 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__20413.meta,(this__20413.start + this__20413.step),this__20413.end,this__20413.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__20414 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__20415 = this;
return (new cljs.core.Range(meta,this__20415.start,this__20415.end,this__20415.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__20416 = this;
return this__20416.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__20426 = null;
var G__20426__20427 = (function (rng,n){
var this__20417 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__20417.start + (n * this__20417.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____20418 = (this__20417.start > this__20417.end);

if(cljs.core.truth_(and__3546__auto____20418))
{return cljs.core._EQ_.call(null,this__20417.step,0);
} else
{return and__3546__auto____20418;
}
})()))
{return this__20417.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__20426__20428 = (function (rng,n,not_found){
var this__20419 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__20419.start + (n * this__20419.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____20420 = (this__20419.start > this__20419.end);

if(cljs.core.truth_(and__3546__auto____20420))
{return cljs.core._EQ_.call(null,this__20419.step,0);
} else
{return and__3546__auto____20420;
}
})()))
{return this__20419.start;
} else
{return not_found;
}
}
});
G__20426 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__20426__20427.call(this,rng,n);
case  3 :
return G__20426__20428.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20426;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__20421 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__20421.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__20430 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__20431 = (function (end){
return range.call(null,0,end,1);
});
var range__20432 = (function (start,end){
return range.call(null,start,end,1);
});
var range__20433 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__20430.call(this);
case  1 :
return range__20431.call(this,start);
case  2 :
return range__20432.call(this,start,end);
case  3 :
return range__20433.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20435 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20435))
{var s__20436 = temp__3698__auto____20435;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__20436),take_nth.call(null,n,cljs.core.drop.call(null,n,s__20436)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20438 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20438))
{var s__20439 = temp__3698__auto____20438;

var fst__20440 = cljs.core.first.call(null,s__20439);
var fv__20441 = f.call(null,fst__20440);
var run__20442 = cljs.core.cons.call(null,fst__20440,cljs.core.take_while.call(null,(function (p1__20437_SHARP_){
return cljs.core._EQ_.call(null,fv__20441,f.call(null,p1__20437_SHARP_));
}),cljs.core.next.call(null,s__20439)));

return cljs.core.cons.call(null,run__20442,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__20442),s__20439))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__20457 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____20453 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____20453))
{var s__20454 = temp__3695__auto____20453;

return reductions.call(null,f,cljs.core.first.call(null,s__20454),cljs.core.rest.call(null,s__20454));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__20458 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20455 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20455))
{var s__20456 = temp__3698__auto____20455;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__20456)),cljs.core.rest.call(null,s__20456));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__20457.call(this,f,init);
case  3 :
return reductions__20458.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__20461 = (function (f){
return (function() {
var G__20466 = null;
var G__20466__20467 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__20466__20468 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__20466__20469 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__20466__20470 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__20466__20471 = (function() { 
var G__20473__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__20473 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20473__delegate.call(this, x, y, z, args);
};
G__20473.cljs$lang$maxFixedArity = 3;
G__20473.cljs$lang$applyTo = (function (arglist__20474){
var x = cljs.core.first(arglist__20474);
var y = cljs.core.first(cljs.core.next(arglist__20474));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20474)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20474)));
return G__20473__delegate.call(this, x, y, z, args);
});
return G__20473;
})()
;
G__20466 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__20466__20467.call(this);
case  1 :
return G__20466__20468.call(this,x);
case  2 :
return G__20466__20469.call(this,x,y);
case  3 :
return G__20466__20470.call(this,x,y,z);
default:
return G__20466__20471.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__20466.cljs$lang$maxFixedArity = 3;
G__20466.cljs$lang$applyTo = G__20466__20471.cljs$lang$applyTo;
return G__20466;
})()
});
var juxt__20462 = (function (f,g){
return (function() {
var G__20475 = null;
var G__20475__20476 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__20475__20477 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__20475__20478 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__20475__20479 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__20475__20480 = (function() { 
var G__20482__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__20482 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20482__delegate.call(this, x, y, z, args);
};
G__20482.cljs$lang$maxFixedArity = 3;
G__20482.cljs$lang$applyTo = (function (arglist__20483){
var x = cljs.core.first(arglist__20483);
var y = cljs.core.first(cljs.core.next(arglist__20483));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20483)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20483)));
return G__20482__delegate.call(this, x, y, z, args);
});
return G__20482;
})()
;
G__20475 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__20475__20476.call(this);
case  1 :
return G__20475__20477.call(this,x);
case  2 :
return G__20475__20478.call(this,x,y);
case  3 :
return G__20475__20479.call(this,x,y,z);
default:
return G__20475__20480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__20475.cljs$lang$maxFixedArity = 3;
G__20475.cljs$lang$applyTo = G__20475__20480.cljs$lang$applyTo;
return G__20475;
})()
});
var juxt__20463 = (function (f,g,h){
return (function() {
var G__20484 = null;
var G__20484__20485 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__20484__20486 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__20484__20487 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__20484__20488 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__20484__20489 = (function() { 
var G__20491__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__20491 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20491__delegate.call(this, x, y, z, args);
};
G__20491.cljs$lang$maxFixedArity = 3;
G__20491.cljs$lang$applyTo = (function (arglist__20492){
var x = cljs.core.first(arglist__20492);
var y = cljs.core.first(cljs.core.next(arglist__20492));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20492)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20492)));
return G__20491__delegate.call(this, x, y, z, args);
});
return G__20491;
})()
;
G__20484 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__20484__20485.call(this);
case  1 :
return G__20484__20486.call(this,x);
case  2 :
return G__20484__20487.call(this,x,y);
case  3 :
return G__20484__20488.call(this,x,y,z);
default:
return G__20484__20489.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__20484.cljs$lang$maxFixedArity = 3;
G__20484.cljs$lang$applyTo = G__20484__20489.cljs$lang$applyTo;
return G__20484;
})()
});
var juxt__20464 = (function() { 
var G__20493__delegate = function (f,g,h,fs){
var fs__20460 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__20494 = null;
var G__20494__20495 = (function (){
return cljs.core.reduce.call(null,(function (p1__20443_SHARP_,p2__20444_SHARP_){
return cljs.core.conj.call(null,p1__20443_SHARP_,p2__20444_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__20460);
});
var G__20494__20496 = (function (x){
return cljs.core.reduce.call(null,(function (p1__20445_SHARP_,p2__20446_SHARP_){
return cljs.core.conj.call(null,p1__20445_SHARP_,p2__20446_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__20460);
});
var G__20494__20497 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__20447_SHARP_,p2__20448_SHARP_){
return cljs.core.conj.call(null,p1__20447_SHARP_,p2__20448_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__20460);
});
var G__20494__20498 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__20449_SHARP_,p2__20450_SHARP_){
return cljs.core.conj.call(null,p1__20449_SHARP_,p2__20450_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__20460);
});
var G__20494__20499 = (function() { 
var G__20501__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__20451_SHARP_,p2__20452_SHARP_){
return cljs.core.conj.call(null,p1__20451_SHARP_,cljs.core.apply.call(null,p2__20452_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__20460);
};
var G__20501 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20501__delegate.call(this, x, y, z, args);
};
G__20501.cljs$lang$maxFixedArity = 3;
G__20501.cljs$lang$applyTo = (function (arglist__20502){
var x = cljs.core.first(arglist__20502);
var y = cljs.core.first(cljs.core.next(arglist__20502));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20502)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20502)));
return G__20501__delegate.call(this, x, y, z, args);
});
return G__20501;
})()
;
G__20494 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__20494__20495.call(this);
case  1 :
return G__20494__20496.call(this,x);
case  2 :
return G__20494__20497.call(this,x,y);
case  3 :
return G__20494__20498.call(this,x,y,z);
default:
return G__20494__20499.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__20494.cljs$lang$maxFixedArity = 3;
G__20494.cljs$lang$applyTo = G__20494__20499.cljs$lang$applyTo;
return G__20494;
})()
};
var G__20493 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20493__delegate.call(this, f, g, h, fs);
};
G__20493.cljs$lang$maxFixedArity = 3;
G__20493.cljs$lang$applyTo = (function (arglist__20503){
var f = cljs.core.first(arglist__20503);
var g = cljs.core.first(cljs.core.next(arglist__20503));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20503)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20503)));
return G__20493__delegate.call(this, f, g, h, fs);
});
return G__20493;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__20461.call(this,f);
case  2 :
return juxt__20462.call(this,f,g);
case  3 :
return juxt__20463.call(this,f,g,h);
default:
return juxt__20464.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__20464.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__20505 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__20508 = cljs.core.next.call(null,coll);
coll = G__20508;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__20506 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____20504 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____20504))
{return (n > 0);
} else
{return and__3546__auto____20504;
}
})()))
{{
var G__20509 = (n - 1);
var G__20510 = cljs.core.next.call(null,coll);
n = G__20509;
coll = G__20510;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__20505.call(this,n);
case  2 :
return dorun__20506.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__20511 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__20512 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__20511.call(this,n);
case  2 :
return doall__20512.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__20514 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__20514),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__20514),1)))
{return cljs.core.first.call(null,matches__20514);
} else
{return cljs.core.vec.call(null,matches__20514);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__20515 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__20515)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__20515),1)))
{return cljs.core.first.call(null,matches__20515);
} else
{return cljs.core.vec.call(null,matches__20515);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__20516 = cljs.core.re_find.call(null,re,s);
var match_idx__20517 = s.search(re);
var match_str__20518 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__20516))?cljs.core.first.call(null,match_data__20516):match_data__20516);
var post_match__20519 = cljs.core.subs.call(null,s,(match_idx__20517 + cljs.core.count.call(null,match_str__20518)));

if(cljs.core.truth_(match_data__20516))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__20516,re_seq.call(null,re,post_match__20519));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__20520_SHARP_){
return print_one.call(null,p1__20520_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____20521 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____20521))
{var and__3546__auto____20525 = (function (){var x__445__auto____20522 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____20523 = x__445__auto____20522;

if(cljs.core.truth_(and__3546__auto____20523))
{var and__3546__auto____20524 = x__445__auto____20522.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____20524))
{return cljs.core.not.call(null,x__445__auto____20522.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____20524;
}
} else
{return and__3546__auto____20523;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____20522);
}
})();

if(cljs.core.truth_(and__3546__auto____20525))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____20525;
}
} else
{return and__3546__auto____20521;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____20526 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____20527 = x__445__auto____20526;

if(cljs.core.truth_(and__3546__auto____20527))
{var and__3546__auto____20528 = x__445__auto____20526.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____20528))
{return cljs.core.not.call(null,x__445__auto____20526.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____20528;
}
} else
{return and__3546__auto____20527;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____20526);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__20529 = cljs.core.first.call(null,objs);
var sb__20530 = (new goog.string.StringBuffer());

var G__20531__20532 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__20531__20532))
{var obj__20533 = cljs.core.first.call(null,G__20531__20532);
var G__20531__20534 = G__20531__20532;

while(true){
if(cljs.core.truth_((obj__20533 === first_obj__20529)))
{} else
{sb__20530.append(" ");
}
var G__20535__20536 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__20533,opts));

if(cljs.core.truth_(G__20535__20536))
{var string__20537 = cljs.core.first.call(null,G__20535__20536);
var G__20535__20538 = G__20535__20536;

while(true){
sb__20530.append(string__20537);
var temp__3698__auto____20539 = cljs.core.next.call(null,G__20535__20538);

if(cljs.core.truth_(temp__3698__auto____20539))
{var G__20535__20540 = temp__3698__auto____20539;

{
var G__20543 = cljs.core.first.call(null,G__20535__20540);
var G__20544 = G__20535__20540;
string__20537 = G__20543;
G__20535__20538 = G__20544;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____20541 = cljs.core.next.call(null,G__20531__20534);

if(cljs.core.truth_(temp__3698__auto____20541))
{var G__20531__20542 = temp__3698__auto____20541;

{
var G__20545 = cljs.core.first.call(null,G__20531__20542);
var G__20546 = G__20531__20542;
obj__20533 = G__20545;
G__20531__20534 = G__20546;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__20530);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__20547 = cljs.core.first.call(null,objs);

var G__20548__20549 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__20548__20549))
{var obj__20550 = cljs.core.first.call(null,G__20548__20549);
var G__20548__20551 = G__20548__20549;

while(true){
if(cljs.core.truth_((obj__20550 === first_obj__20547)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__20552__20553 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__20550,opts));

if(cljs.core.truth_(G__20552__20553))
{var string__20554 = cljs.core.first.call(null,G__20552__20553);
var G__20552__20555 = G__20552__20553;

while(true){
cljs.core.string_print.call(null,string__20554);
var temp__3698__auto____20556 = cljs.core.next.call(null,G__20552__20555);

if(cljs.core.truth_(temp__3698__auto____20556))
{var G__20552__20557 = temp__3698__auto____20556;

{
var G__20560 = cljs.core.first.call(null,G__20552__20557);
var G__20561 = G__20552__20557;
string__20554 = G__20560;
G__20552__20555 = G__20561;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____20558 = cljs.core.next.call(null,G__20548__20551);

if(cljs.core.truth_(temp__3698__auto____20558))
{var G__20548__20559 = temp__3698__auto____20558;

{
var G__20562 = cljs.core.first.call(null,G__20548__20559);
var G__20563 = G__20548__20559;
obj__20550 = G__20562;
G__20548__20551 = G__20563;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__20564){
var objs = cljs.core.seq( arglist__20564 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__20565){
var objs = cljs.core.seq( arglist__20565 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__20566){
var objs = cljs.core.seq( arglist__20566 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__20567){
var objs = cljs.core.seq( arglist__20567 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__20568){
var objs = cljs.core.seq( arglist__20568 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__20569 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__20569,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____20570 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____20570))
{var nspc__20571 = temp__3698__auto____20570;

return cljs.core.str.call(null,nspc__20571,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____20572 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____20572))
{var nspc__20573 = temp__3698__auto____20572;

return cljs.core.str.call(null,nspc__20573,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__20574 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__20574,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__20575 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__20576 = this;
var G__20577__20578 = cljs.core.seq.call(null,this__20576.watches);

if(cljs.core.truth_(G__20577__20578))
{var G__20580__20582 = cljs.core.first.call(null,G__20577__20578);
var vec__20581__20583 = G__20580__20582;
var key__20584 = cljs.core.nth.call(null,vec__20581__20583,0,null);
var f__20585 = cljs.core.nth.call(null,vec__20581__20583,1,null);
var G__20577__20586 = G__20577__20578;

var G__20580__20587 = G__20580__20582;
var G__20577__20588 = G__20577__20586;

while(true){
var vec__20589__20590 = G__20580__20587;
var key__20591 = cljs.core.nth.call(null,vec__20589__20590,0,null);
var f__20592 = cljs.core.nth.call(null,vec__20589__20590,1,null);
var G__20577__20593 = G__20577__20588;

f__20592.call(null,key__20591,this$,oldval,newval);
var temp__3698__auto____20594 = cljs.core.next.call(null,G__20577__20593);

if(cljs.core.truth_(temp__3698__auto____20594))
{var G__20577__20595 = temp__3698__auto____20594;

{
var G__20602 = cljs.core.first.call(null,G__20577__20595);
var G__20603 = G__20577__20595;
G__20580__20587 = G__20602;
G__20577__20588 = G__20603;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__20596 = this;
return this$.watches = cljs.core.assoc.call(null,this__20596.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__20597 = this;
return this$.watches = cljs.core.dissoc.call(null,this__20597.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__20598 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__20598.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__20599 = this;
return this__20599.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__20600 = this;
return this__20600.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__20601 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__20610 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__20611 = (function() { 
var G__20613__delegate = function (x,p__20604){
var map__20605__20606 = p__20604;
var map__20605__20607 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__20605__20606))?cljs.core.apply.call(null,cljs.core.hash_map,map__20605__20606):map__20605__20606);
var validator__20608 = cljs.core.get.call(null,map__20605__20607,"﷐'validator");
var meta__20609 = cljs.core.get.call(null,map__20605__20607,"﷐'meta");

return (new cljs.core.Atom(x,meta__20609,validator__20608,null));
};
var G__20613 = function (x,var_args){
var p__20604 = null;
if (goog.isDef(var_args)) {
  p__20604 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20613__delegate.call(this, x, p__20604);
};
G__20613.cljs$lang$maxFixedArity = 1;
G__20613.cljs$lang$applyTo = (function (arglist__20614){
var x = cljs.core.first(arglist__20614);
var p__20604 = cljs.core.rest(arglist__20614);
return G__20613__delegate.call(this, x, p__20604);
});
return G__20613;
})()
;
atom = function(x,var_args){
var p__20604 = var_args;
switch(arguments.length){
case  1 :
return atom__20610.call(this,x);
default:
return atom__20611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__20611.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____20615 = a.validator;

if(cljs.core.truth_(temp__3698__auto____20615))
{var validate__20616 = temp__3698__auto____20615;

if(cljs.core.truth_(validate__20616.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__20617 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__20617,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___20618 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___20619 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___20620 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___20621 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___20622 = (function() { 
var G__20624__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__20624 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__20624__delegate.call(this, a, f, x, y, z, more);
};
G__20624.cljs$lang$maxFixedArity = 5;
G__20624.cljs$lang$applyTo = (function (arglist__20625){
var a = cljs.core.first(arglist__20625);
var f = cljs.core.first(cljs.core.next(arglist__20625));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20625)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20625))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20625)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20625)))));
return G__20624__delegate.call(this, a, f, x, y, z, more);
});
return G__20624;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___20618.call(this,a,f);
case  3 :
return swap_BANG___20619.call(this,a,f,x);
case  4 :
return swap_BANG___20620.call(this,a,f,x,y);
case  5 :
return swap_BANG___20621.call(this,a,f,x,y,z);
default:
return swap_BANG___20622.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___20622.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__20626){
var iref = cljs.core.first(arglist__20626);
var f = cljs.core.first(cljs.core.next(arglist__20626));
var args = cljs.core.rest(cljs.core.next(arglist__20626));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__20627 = (function (){
return gensym.call(null,"G__");
});
var gensym__20628 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__20627.call(this);
case  1 :
return gensym__20628.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__20630 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__20630.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__20631 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__20631.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__20631.state,this__20631.f);
}
return cljs.core.deref.call(null,this__20631.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__20632){
var body = cljs.core.seq( arglist__20632 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__20633__20634 = options;
var map__20633__20635 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__20633__20634))?cljs.core.apply.call(null,cljs.core.hash_map,map__20633__20634):map__20633__20634);
var keywordize_keys__20636 = cljs.core.get.call(null,map__20633__20635,"﷐'keywordize-keys");
var keyfn__20637 = (cljs.core.truth_(keywordize_keys__20636)?cljs.core.keyword:cljs.core.str);
var f__20643 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____20642 = (function iter__20638(s__20639){
return (new cljs.core.LazySeq(null,false,(function (){
var s__20639__20640 = s__20639;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__20639__20640)))
{var k__20641 = cljs.core.first.call(null,s__20639__20640);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__20637.call(null,k__20641),thisfn.call(null,(x[k__20641]))]),iter__20638.call(null,cljs.core.rest.call(null,s__20639__20640)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____20642.call(null,cljs.core.js_keys.call(null,x));
})());
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

return f__20643.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__20644){
var x = cljs.core.first(arglist__20644);
var options = cljs.core.rest(arglist__20644);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__20645 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__20649__delegate = function (args){
var temp__3695__auto____20646 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__20645),args);

if(cljs.core.truth_(temp__3695__auto____20646))
{var v__20647 = temp__3695__auto____20646;

return v__20647;
} else
{var ret__20648 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__20645,cljs.core.assoc,args,ret__20648);
return ret__20648;
}
};
var G__20649 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__20649__delegate.call(this, args);
};
G__20649.cljs$lang$maxFixedArity = 0;
G__20649.cljs$lang$applyTo = (function (arglist__20650){
var args = cljs.core.seq( arglist__20650 );;
return G__20649__delegate.call(this, args);
});
return G__20649;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__20652 = (function (f){
while(true){
var ret__20651 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__20651)))
{{
var G__20655 = ret__20651;
f = G__20655;
continue;
}
} else
{return ret__20651;
}
break;
}
});
var trampoline__20653 = (function() { 
var G__20656__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__20656 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20656__delegate.call(this, f, args);
};
G__20656.cljs$lang$maxFixedArity = 1;
G__20656.cljs$lang$applyTo = (function (arglist__20657){
var f = cljs.core.first(arglist__20657);
var args = cljs.core.rest(arglist__20657);
return G__20656__delegate.call(this, f, args);
});
return G__20656;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__20652.call(this,f);
default:
return trampoline__20653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__20653.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__20658 = (function (){
return rand.call(null,1);
});
var rand__20659 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__20658.call(this);
case  1 :
return rand__20659.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__20661 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__20661,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__20661,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___20670 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___20671 = (function (h,child,parent){
var or__3548__auto____20662 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____20662))
{return or__3548__auto____20662;
} else
{var or__3548__auto____20663 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____20663))
{return or__3548__auto____20663;
} else
{var and__3546__auto____20664 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____20664))
{var and__3546__auto____20665 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____20665))
{var and__3546__auto____20666 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____20666))
{var ret__20667 = true;
var i__20668 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____20669 = cljs.core.not.call(null,ret__20667);

if(cljs.core.truth_(or__3548__auto____20669))
{return or__3548__auto____20669;
} else
{return cljs.core._EQ_.call(null,i__20668,cljs.core.count.call(null,parent));
}
})()))
{return ret__20667;
} else
{{
var G__20673 = isa_QMARK_.call(null,h,child.call(null,i__20668),parent.call(null,i__20668));
var G__20674 = (i__20668 + 1);
ret__20667 = G__20673;
i__20668 = G__20674;
continue;
}
}
break;
}
} else
{return and__3546__auto____20666;
}
} else
{return and__3546__auto____20665;
}
} else
{return and__3546__auto____20664;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___20670.call(this,h,child);
case  3 :
return isa_QMARK___20671.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__20675 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__20676 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__20675.call(this,h);
case  2 :
return parents__20676.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__20678 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__20679 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__20678.call(this,h);
case  2 :
return ancestors__20679.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__20681 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__20682 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__20681.call(this,h);
case  2 :
return descendants__20682.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__20692 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__20693 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__20687 = "﷐'parents".call(null,h);
var td__20688 = "﷐'descendants".call(null,h);
var ta__20689 = "﷐'ancestors".call(null,h);
var tf__20690 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____20691 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__20687.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__20689.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__20689.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__20687,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__20690.call(null,"﷐'ancestors".call(null,h),tag,td__20688,parent,ta__20689),"﷐'descendants":tf__20690.call(null,"﷐'descendants".call(null,h),parent,ta__20689,tag,td__20688)});
})());

if(cljs.core.truth_(or__3548__auto____20691))
{return or__3548__auto____20691;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__20692.call(this,h,tag);
case  3 :
return derive__20693.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__20699 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__20700 = (function (h,tag,parent){
var parentMap__20695 = "﷐'parents".call(null,h);
var childsParents__20696 = (cljs.core.truth_(parentMap__20695.call(null,tag))?cljs.core.disj.call(null,parentMap__20695.call(null,tag),parent):cljs.core.set([]));
var newParents__20697 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__20696))?cljs.core.assoc.call(null,parentMap__20695,tag,childsParents__20696):cljs.core.dissoc.call(null,parentMap__20695,tag));
var deriv_seq__20698 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__20684_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__20684_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__20684_SHARP_),cljs.core.second.call(null,p1__20684_SHARP_)));
}),cljs.core.seq.call(null,newParents__20697)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__20695.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__20685_SHARP_,p2__20686_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__20685_SHARP_,p2__20686_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__20698));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__20699.call(this,h,tag);
case  3 :
return underive__20700.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__20702 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____20704 = (cljs.core.truth_((function (){var and__3546__auto____20703 = xprefs__20702;

if(cljs.core.truth_(and__3546__auto____20703))
{return xprefs__20702.call(null,y);
} else
{return and__3546__auto____20703;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____20704))
{return or__3548__auto____20704;
} else
{var or__3548__auto____20706 = (function (){var ps__20705 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__20705) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__20705),prefer_table)))
{} else
{}
{
var G__20709 = cljs.core.rest.call(null,ps__20705);
ps__20705 = G__20709;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____20706))
{return or__3548__auto____20706;
} else
{var or__3548__auto____20708 = (function (){var ps__20707 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__20707) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__20707),y,prefer_table)))
{} else
{}
{
var G__20710 = cljs.core.rest.call(null,ps__20707);
ps__20707 = G__20710;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____20708))
{return or__3548__auto____20708;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____20711 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____20711))
{return or__3548__auto____20711;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__20720 = cljs.core.reduce.call(null,(function (be,p__20712){
var vec__20713__20714 = p__20712;
var k__20715 = cljs.core.nth.call(null,vec__20713__20714,0,null);
var ___20716 = cljs.core.nth.call(null,vec__20713__20714,1,null);
var e__20717 = vec__20713__20714;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__20715)))
{var be2__20719 = (cljs.core.truth_((function (){var or__3548__auto____20718 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____20718))
{return or__3548__auto____20718;
} else
{return cljs.core.dominates.call(null,k__20715,cljs.core.first.call(null,be),prefer_table);
}
})())?e__20717:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__20719),k__20715,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__20715," and ",cljs.core.first.call(null,be2__20719),", and neither is preferred")));
}
return be2__20719;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__20720))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__20720));
return cljs.core.second.call(null,best_entry__20720);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____20721 = mf;

if(cljs.core.truth_(and__3546__auto____20721))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____20721;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____20722 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20722))
{return or__3548__auto____20722;
} else
{var or__3548__auto____20723 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____20723))
{return or__3548__auto____20723;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____20724 = mf;

if(cljs.core.truth_(and__3546__auto____20724))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____20724;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____20725 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20725))
{return or__3548__auto____20725;
} else
{var or__3548__auto____20726 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____20726))
{return or__3548__auto____20726;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____20727 = mf;

if(cljs.core.truth_(and__3546__auto____20727))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____20727;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____20728 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20728))
{return or__3548__auto____20728;
} else
{var or__3548__auto____20729 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____20729))
{return or__3548__auto____20729;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____20730 = mf;

if(cljs.core.truth_(and__3546__auto____20730))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____20730;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____20731 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20731))
{return or__3548__auto____20731;
} else
{var or__3548__auto____20732 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____20732))
{return or__3548__auto____20732;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____20733 = mf;

if(cljs.core.truth_(and__3546__auto____20733))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____20733;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____20734 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20734))
{return or__3548__auto____20734;
} else
{var or__3548__auto____20735 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____20735))
{return or__3548__auto____20735;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____20736 = mf;

if(cljs.core.truth_(and__3546__auto____20736))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____20736;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____20737 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20737))
{return or__3548__auto____20737;
} else
{var or__3548__auto____20738 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____20738))
{return or__3548__auto____20738;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____20739 = mf;

if(cljs.core.truth_(and__3546__auto____20739))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____20739;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____20740 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20740))
{return or__3548__auto____20740;
} else
{var or__3548__auto____20741 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____20741))
{return or__3548__auto____20741;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____20742 = mf;

if(cljs.core.truth_(and__3546__auto____20742))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____20742;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____20743 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20743))
{return or__3548__auto____20743;
} else
{var or__3548__auto____20744 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____20744))
{return or__3548__auto____20744;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__20745 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__20746 = cljs.core._get_method.call(null,mf,dispatch_val__20745);

if(cljs.core.truth_(target_fn__20746))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__20745)));
}
return cljs.core.apply.call(null,target_fn__20746,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__20747 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__20748 = this;
cljs.core.swap_BANG_.call(null,this__20748.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__20748.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__20748.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__20748.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__20749 = this;
cljs.core.swap_BANG_.call(null,this__20749.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__20749.method_cache,this__20749.method_table,this__20749.cached_hierarchy,this__20749.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__20750 = this;
cljs.core.swap_BANG_.call(null,this__20750.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__20750.method_cache,this__20750.method_table,this__20750.cached_hierarchy,this__20750.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__20751 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__20751.cached_hierarchy),cljs.core.deref.call(null,this__20751.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__20751.method_cache,this__20751.method_table,this__20751.cached_hierarchy,this__20751.hierarchy);
}
var temp__3695__auto____20752 = cljs.core.deref.call(null,this__20751.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____20752))
{var target_fn__20753 = temp__3695__auto____20752;

return target_fn__20753;
} else
{var temp__3695__auto____20754 = cljs.core.find_and_cache_best_method.call(null,this__20751.name,dispatch_val,this__20751.hierarchy,this__20751.method_table,this__20751.prefer_table,this__20751.method_cache,this__20751.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____20754))
{var target_fn__20755 = temp__3695__auto____20754;

return target_fn__20755;
} else
{return cljs.core.deref.call(null,this__20751.method_table).call(null,this__20751.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__20756 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__20756.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__20756.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__20756.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__20756.method_cache,this__20756.method_table,this__20756.cached_hierarchy,this__20756.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__20757 = this;
return cljs.core.deref.call(null,this__20757.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__20758 = this;
return cljs.core.deref.call(null,this__20758.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__20759 = this;
return cljs.core.do_dispatch.call(null,mf,this__20759.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__20760__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__20760 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20760__delegate.call(this, _, args);
};
G__20760.cljs$lang$maxFixedArity = 1;
G__20760.cljs$lang$applyTo = (function (arglist__20761){
var _ = cljs.core.first(arglist__20761);
var args = cljs.core.rest(arglist__20761);
return G__20760__delegate.call(this, _, args);
});
return G__20760;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
