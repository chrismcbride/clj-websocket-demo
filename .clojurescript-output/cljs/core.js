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
var or__3548__auto____2969 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2969))
{return or__3548__auto____2969;
} else
{var or__3548__auto____2970 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2970))
{return or__3548__auto____2970;
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
var _invoke__3034 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____2971 = this$;

if(cljs.core.truth_(and__3546__auto____2971))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2971;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____2972 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2972))
{return or__3548__auto____2972;
} else
{var or__3548__auto____2973 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2973))
{return or__3548__auto____2973;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__3035 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____2974 = this$;

if(cljs.core.truth_(and__3546__auto____2974))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2974;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____2975 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2975))
{return or__3548__auto____2975;
} else
{var or__3548__auto____2976 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2976))
{return or__3548__auto____2976;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3036 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____2977 = this$;

if(cljs.core.truth_(and__3546__auto____2977))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2977;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____2978 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2978))
{return or__3548__auto____2978;
} else
{var or__3548__auto____2979 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2979))
{return or__3548__auto____2979;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__3037 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____2980 = this$;

if(cljs.core.truth_(and__3546__auto____2980))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2980;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____2981 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2981))
{return or__3548__auto____2981;
} else
{var or__3548__auto____2982 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2982))
{return or__3548__auto____2982;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__3038 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____2983 = this$;

if(cljs.core.truth_(and__3546__auto____2983))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2983;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____2984 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2984))
{return or__3548__auto____2984;
} else
{var or__3548__auto____2985 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2985))
{return or__3548__auto____2985;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__3039 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____2986 = this$;

if(cljs.core.truth_(and__3546__auto____2986))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2986;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____2987 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2987))
{return or__3548__auto____2987;
} else
{var or__3548__auto____2988 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2988))
{return or__3548__auto____2988;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__3040 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____2989 = this$;

if(cljs.core.truth_(and__3546__auto____2989))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2989;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____2990 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2990))
{return or__3548__auto____2990;
} else
{var or__3548__auto____2991 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2991))
{return or__3548__auto____2991;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__3041 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____2992 = this$;

if(cljs.core.truth_(and__3546__auto____2992))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2992;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____2993 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2993))
{return or__3548__auto____2993;
} else
{var or__3548__auto____2994 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2994))
{return or__3548__auto____2994;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__3042 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____2995 = this$;

if(cljs.core.truth_(and__3546__auto____2995))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2995;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____2996 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2996))
{return or__3548__auto____2996;
} else
{var or__3548__auto____2997 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2997))
{return or__3548__auto____2997;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__3043 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____2998 = this$;

if(cljs.core.truth_(and__3546__auto____2998))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2998;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____2999 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2999))
{return or__3548__auto____2999;
} else
{var or__3548__auto____3000 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3000))
{return or__3548__auto____3000;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__3044 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____3001 = this$;

if(cljs.core.truth_(and__3546__auto____3001))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3001;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____3002 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3002))
{return or__3548__auto____3002;
} else
{var or__3548__auto____3003 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3003))
{return or__3548__auto____3003;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__3045 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____3004 = this$;

if(cljs.core.truth_(and__3546__auto____3004))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3004;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____3005 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3005))
{return or__3548__auto____3005;
} else
{var or__3548__auto____3006 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3006))
{return or__3548__auto____3006;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__3046 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____3007 = this$;

if(cljs.core.truth_(and__3546__auto____3007))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3007;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____3008 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3008))
{return or__3548__auto____3008;
} else
{var or__3548__auto____3009 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3009))
{return or__3548__auto____3009;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__3047 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____3010 = this$;

if(cljs.core.truth_(and__3546__auto____3010))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3010;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____3011 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3011))
{return or__3548__auto____3011;
} else
{var or__3548__auto____3012 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3012))
{return or__3548__auto____3012;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__3048 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____3013 = this$;

if(cljs.core.truth_(and__3546__auto____3013))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3013;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____3014 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3014))
{return or__3548__auto____3014;
} else
{var or__3548__auto____3015 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3015))
{return or__3548__auto____3015;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__3049 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____3016 = this$;

if(cljs.core.truth_(and__3546__auto____3016))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3016;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____3017 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3017))
{return or__3548__auto____3017;
} else
{var or__3548__auto____3018 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3018))
{return or__3548__auto____3018;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__3050 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____3019 = this$;

if(cljs.core.truth_(and__3546__auto____3019))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3019;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____3020 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3020))
{return or__3548__auto____3020;
} else
{var or__3548__auto____3021 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3021))
{return or__3548__auto____3021;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__3051 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____3022 = this$;

if(cljs.core.truth_(and__3546__auto____3022))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3022;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____3023 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3023))
{return or__3548__auto____3023;
} else
{var or__3548__auto____3024 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3024))
{return or__3548__auto____3024;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__3052 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____3025 = this$;

if(cljs.core.truth_(and__3546__auto____3025))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3025;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____3026 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3026))
{return or__3548__auto____3026;
} else
{var or__3548__auto____3027 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3027))
{return or__3548__auto____3027;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__3053 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____3028 = this$;

if(cljs.core.truth_(and__3546__auto____3028))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3028;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____3029 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3029))
{return or__3548__auto____3029;
} else
{var or__3548__auto____3030 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3030))
{return or__3548__auto____3030;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__3054 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____3031 = this$;

if(cljs.core.truth_(and__3546__auto____3031))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3031;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____3032 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3032))
{return or__3548__auto____3032;
} else
{var or__3548__auto____3033 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3033))
{return or__3548__auto____3033;
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
return _invoke__3034.call(this,this$);
case  2 :
return _invoke__3035.call(this,this$,a);
case  3 :
return _invoke__3036.call(this,this$,a,b);
case  4 :
return _invoke__3037.call(this,this$,a,b,c);
case  5 :
return _invoke__3038.call(this,this$,a,b,c,d);
case  6 :
return _invoke__3039.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__3040.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__3041.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__3042.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__3043.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__3044.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__3045.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__3046.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__3047.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__3048.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__3049.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__3050.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__3051.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__3052.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__3053.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__3054.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3056 = coll;

if(cljs.core.truth_(and__3546__auto____3056))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3056;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3057 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3057))
{return or__3548__auto____3057;
} else
{var or__3548__auto____3058 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3058))
{return or__3548__auto____3058;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3059 = coll;

if(cljs.core.truth_(and__3546__auto____3059))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3059;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3060 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3060))
{return or__3548__auto____3060;
} else
{var or__3548__auto____3061 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3061))
{return or__3548__auto____3061;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3062 = coll;

if(cljs.core.truth_(and__3546__auto____3062))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3062;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3063 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3063))
{return or__3548__auto____3063;
} else
{var or__3548__auto____3064 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3064))
{return or__3548__auto____3064;
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
var _nth__3071 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3065 = coll;

if(cljs.core.truth_(and__3546__auto____3065))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3065;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3066 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3066))
{return or__3548__auto____3066;
} else
{var or__3548__auto____3067 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3067))
{return or__3548__auto____3067;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3072 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3068 = coll;

if(cljs.core.truth_(and__3546__auto____3068))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3068;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3069 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3069))
{return or__3548__auto____3069;
} else
{var or__3548__auto____3070 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3070))
{return or__3548__auto____3070;
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
return _nth__3071.call(this,coll,n);
case  3 :
return _nth__3072.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3074 = coll;

if(cljs.core.truth_(and__3546__auto____3074))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3074;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3075 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3075))
{return or__3548__auto____3075;
} else
{var or__3548__auto____3076 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3076))
{return or__3548__auto____3076;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3077 = coll;

if(cljs.core.truth_(and__3546__auto____3077))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3077;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3078 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3078))
{return or__3548__auto____3078;
} else
{var or__3548__auto____3079 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3079))
{return or__3548__auto____3079;
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
var _lookup__3086 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3080 = o;

if(cljs.core.truth_(and__3546__auto____3080))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3080;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3081 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3081))
{return or__3548__auto____3081;
} else
{var or__3548__auto____3082 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3082))
{return or__3548__auto____3082;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3087 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3083 = o;

if(cljs.core.truth_(and__3546__auto____3083))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3083;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3084 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3084))
{return or__3548__auto____3084;
} else
{var or__3548__auto____3085 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3085))
{return or__3548__auto____3085;
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
return _lookup__3086.call(this,o,k);
case  3 :
return _lookup__3087.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3089 = coll;

if(cljs.core.truth_(and__3546__auto____3089))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3089;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3090 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3090))
{return or__3548__auto____3090;
} else
{var or__3548__auto____3091 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3091))
{return or__3548__auto____3091;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3092 = coll;

if(cljs.core.truth_(and__3546__auto____3092))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3092;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3093 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3093))
{return or__3548__auto____3093;
} else
{var or__3548__auto____3094 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3094))
{return or__3548__auto____3094;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3095 = coll;

if(cljs.core.truth_(and__3546__auto____3095))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3095;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3096 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3096))
{return or__3548__auto____3096;
} else
{var or__3548__auto____3097 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3097))
{return or__3548__auto____3097;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3098 = coll;

if(cljs.core.truth_(and__3546__auto____3098))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3098;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3099 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3099))
{return or__3548__auto____3099;
} else
{var or__3548__auto____3100 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3100))
{return or__3548__auto____3100;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3101 = coll;

if(cljs.core.truth_(and__3546__auto____3101))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3101;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3102 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3102))
{return or__3548__auto____3102;
} else
{var or__3548__auto____3103 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3103))
{return or__3548__auto____3103;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3104 = coll;

if(cljs.core.truth_(and__3546__auto____3104))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3104;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3105 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3105))
{return or__3548__auto____3105;
} else
{var or__3548__auto____3106 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3106))
{return or__3548__auto____3106;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3107 = coll;

if(cljs.core.truth_(and__3546__auto____3107))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3107;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3108 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3108))
{return or__3548__auto____3108;
} else
{var or__3548__auto____3109 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3109))
{return or__3548__auto____3109;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3110 = o;

if(cljs.core.truth_(and__3546__auto____3110))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3110;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3111 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3111))
{return or__3548__auto____3111;
} else
{var or__3548__auto____3112 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3112))
{return or__3548__auto____3112;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3113 = o;

if(cljs.core.truth_(and__3546__auto____3113))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3113;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3114 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3114))
{return or__3548__auto____3114;
} else
{var or__3548__auto____3115 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3115))
{return or__3548__auto____3115;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3116 = o;

if(cljs.core.truth_(and__3546__auto____3116))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3116;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3117 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3117))
{return or__3548__auto____3117;
} else
{var or__3548__auto____3118 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3118))
{return or__3548__auto____3118;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3119 = o;

if(cljs.core.truth_(and__3546__auto____3119))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3119;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3120 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3120))
{return or__3548__auto____3120;
} else
{var or__3548__auto____3121 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3121))
{return or__3548__auto____3121;
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
var _reduce__3128 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3122 = coll;

if(cljs.core.truth_(and__3546__auto____3122))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3122;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3123 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3123))
{return or__3548__auto____3123;
} else
{var or__3548__auto____3124 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3124))
{return or__3548__auto____3124;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3129 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3125 = coll;

if(cljs.core.truth_(and__3546__auto____3125))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3125;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3126 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3126))
{return or__3548__auto____3126;
} else
{var or__3548__auto____3127 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3127))
{return or__3548__auto____3127;
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
return _reduce__3128.call(this,coll,f);
case  3 :
return _reduce__3129.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3131 = o;

if(cljs.core.truth_(and__3546__auto____3131))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3131;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3132 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3132))
{return or__3548__auto____3132;
} else
{var or__3548__auto____3133 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3133))
{return or__3548__auto____3133;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3134 = o;

if(cljs.core.truth_(and__3546__auto____3134))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3134;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3135 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3135))
{return or__3548__auto____3135;
} else
{var or__3548__auto____3136 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3136))
{return or__3548__auto____3136;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3137 = o;

if(cljs.core.truth_(and__3546__auto____3137))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3137;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3138 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3138))
{return or__3548__auto____3138;
} else
{var or__3548__auto____3139 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3139))
{return or__3548__auto____3139;
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
if(cljs.core.truth_((function (){var and__3546__auto____3140 = o;

if(cljs.core.truth_(and__3546__auto____3140))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3140;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3141 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3141))
{return or__3548__auto____3141;
} else
{var or__3548__auto____3142 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3142))
{return or__3548__auto____3142;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3143 = d;

if(cljs.core.truth_(and__3546__auto____3143))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3143;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3144 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3144))
{return or__3548__auto____3144;
} else
{var or__3548__auto____3145 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3145))
{return or__3548__auto____3145;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3146 = this$;

if(cljs.core.truth_(and__3546__auto____3146))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3146;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3147 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3147))
{return or__3548__auto____3147;
} else
{var or__3548__auto____3148 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3148))
{return or__3548__auto____3148;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3149 = this$;

if(cljs.core.truth_(and__3546__auto____3149))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3149;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3150 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3150))
{return or__3548__auto____3150;
} else
{var or__3548__auto____3151 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3151))
{return or__3548__auto____3151;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3152 = this$;

if(cljs.core.truth_(and__3546__auto____3152))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3152;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3153 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3153))
{return or__3548__auto____3153;
} else
{var or__3548__auto____3154 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3154))
{return or__3548__auto____3154;
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
var G__3155 = null;
var G__3155__3156 = (function (o,k){
return null;
});
var G__3155__3157 = (function (o,k,not_found){
return not_found;
});
G__3155 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3155__3156.call(this,o,k);
case  3 :
return G__3155__3157.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3155;
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
var G__3159 = null;
var G__3159__3160 = (function (_,f){
return f.call(null);
});
var G__3159__3161 = (function (_,f,start){
return start;
});
G__3159 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3159__3160.call(this,_,f);
case  3 :
return G__3159__3161.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3159;
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
var G__3163 = null;
var G__3163__3164 = (function (_,n){
return null;
});
var G__3163__3165 = (function (_,n,not_found){
return not_found;
});
G__3163 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3163__3164.call(this,_,n);
case  3 :
return G__3163__3165.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3163;
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
var ci_reduce__3173 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3167 = cljs.core._nth.call(null,cicoll,0);
var n__3168 = 1;

while(true){
if(cljs.core.truth_((n__3168 < cljs.core._count.call(null,cicoll))))
{{
var G__3177 = f.call(null,val__3167,cljs.core._nth.call(null,cicoll,n__3168));
var G__3178 = (n__3168 + 1);
val__3167 = G__3177;
n__3168 = G__3178;
continue;
}
} else
{return val__3167;
}
break;
}
}
});
var ci_reduce__3174 = (function (cicoll,f,val){
var val__3169 = val;
var n__3170 = 0;

while(true){
if(cljs.core.truth_((n__3170 < cljs.core._count.call(null,cicoll))))
{{
var G__3179 = f.call(null,val__3169,cljs.core._nth.call(null,cicoll,n__3170));
var G__3180 = (n__3170 + 1);
val__3169 = G__3179;
n__3170 = G__3180;
continue;
}
} else
{return val__3169;
}
break;
}
});
var ci_reduce__3175 = (function (cicoll,f,val,idx){
var val__3171 = val;
var n__3172 = idx;

while(true){
if(cljs.core.truth_((n__3172 < cljs.core._count.call(null,cicoll))))
{{
var G__3181 = f.call(null,val__3171,cljs.core._nth.call(null,cicoll,n__3172));
var G__3182 = (n__3172 + 1);
val__3171 = G__3181;
n__3172 = G__3182;
continue;
}
} else
{return val__3171;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3173.call(this,cicoll,f);
case  3 :
return ci_reduce__3174.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3175.call(this,cicoll,f,val,idx);
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
var this__3183 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3196 = null;
var G__3196__3197 = (function (_,f){
var this__3184 = this;
return cljs.core.ci_reduce.call(null,this__3184.a,f,(this__3184.a[this__3184.i]),(this__3184.i + 1));
});
var G__3196__3198 = (function (_,f,start){
var this__3185 = this;
return cljs.core.ci_reduce.call(null,this__3185.a,f,start,this__3185.i);
});
G__3196 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3196__3197.call(this,_,f);
case  3 :
return G__3196__3198.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3196;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3186 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3187 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3200 = null;
var G__3200__3201 = (function (coll,n){
var this__3188 = this;
var i__3189 = (n + this__3188.i);

if(cljs.core.truth_((i__3189 < this__3188.a.length)))
{return (this__3188.a[i__3189]);
} else
{return null;
}
});
var G__3200__3202 = (function (coll,n,not_found){
var this__3190 = this;
var i__3191 = (n + this__3190.i);

if(cljs.core.truth_((i__3191 < this__3190.a.length)))
{return (this__3190.a[i__3191]);
} else
{return not_found;
}
});
G__3200 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3200__3201.call(this,coll,n);
case  3 :
return G__3200__3202.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3200;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3192 = this;
return (this__3192.a.length - this__3192.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3193 = this;
return (this__3193.a[this__3193.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3194 = this;
if(cljs.core.truth_(((this__3194.i + 1) < this__3194.a.length)))
{return (new cljs.core.IndexedSeq(this__3194.a,(this__3194.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3195 = this;
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
var G__3204 = null;
var G__3204__3205 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3204__3206 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3204 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3204__3205.call(this,array,f);
case  3 :
return G__3204__3206.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3204;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3208 = null;
var G__3208__3209 = (function (array,k){
return (array[k]);
});
var G__3208__3210 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3208 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3208__3209.call(this,array,k);
case  3 :
return G__3208__3210.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3208;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3212 = null;
var G__3212__3213 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3212__3214 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3212 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3212__3213.call(this,array,n);
case  3 :
return G__3212__3214.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3212;
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
var temp__3698__auto____3216 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3216))
{var s__3217 = temp__3698__auto____3216;

return cljs.core._first.call(null,s__3217);
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
var G__3218 = cljs.core.next.call(null,s);
s = G__3218;
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
var s__3219 = cljs.core.seq.call(null,x);
var n__3220 = 0;

while(true){
if(cljs.core.truth_(s__3219))
{{
var G__3221 = cljs.core.next.call(null,s__3219);
var G__3222 = (n__3220 + 1);
s__3219 = G__3221;
n__3220 = G__3222;
continue;
}
} else
{return n__3220;
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
var conj__3223 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3224 = (function() { 
var G__3226__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3227 = conj.call(null,coll,x);
var G__3228 = cljs.core.first.call(null,xs);
var G__3229 = cljs.core.next.call(null,xs);
coll = G__3227;
x = G__3228;
xs = G__3229;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3226 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3226__delegate.call(this, coll, x, xs);
};
G__3226.cljs$lang$maxFixedArity = 2;
G__3226.cljs$lang$applyTo = (function (arglist__3230){
var coll = cljs.core.first(arglist__3230);
var x = cljs.core.first(cljs.core.next(arglist__3230));
var xs = cljs.core.rest(cljs.core.next(arglist__3230));
return G__3226__delegate.call(this, coll, x, xs);
});
return G__3226;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3223.call(this,coll,x);
default:
return conj__3224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3224.cljs$lang$applyTo;
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
var nth__3231 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3232 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3231.call(this,coll,n);
case  3 :
return nth__3232.call(this,coll,n,not_found);
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
var get__3234 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3235 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3234.call(this,o,k);
case  3 :
return get__3235.call(this,o,k,not_found);
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
var assoc__3238 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3239 = (function() { 
var G__3241__delegate = function (coll,k,v,kvs){
while(true){
var ret__3237 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3242 = ret__3237;
var G__3243 = cljs.core.first.call(null,kvs);
var G__3244 = cljs.core.second.call(null,kvs);
var G__3245 = cljs.core.nnext.call(null,kvs);
coll = G__3242;
k = G__3243;
v = G__3244;
kvs = G__3245;
continue;
}
} else
{return ret__3237;
}
break;
}
};
var G__3241 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3241__delegate.call(this, coll, k, v, kvs);
};
G__3241.cljs$lang$maxFixedArity = 3;
G__3241.cljs$lang$applyTo = (function (arglist__3246){
var coll = cljs.core.first(arglist__3246);
var k = cljs.core.first(cljs.core.next(arglist__3246));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3246)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3246)));
return G__3241__delegate.call(this, coll, k, v, kvs);
});
return G__3241;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3238.call(this,coll,k,v);
default:
return assoc__3239.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3239.cljs$lang$applyTo;
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
var dissoc__3248 = (function (coll){
return coll;
});
var dissoc__3249 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3250 = (function() { 
var G__3252__delegate = function (coll,k,ks){
while(true){
var ret__3247 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3253 = ret__3247;
var G__3254 = cljs.core.first.call(null,ks);
var G__3255 = cljs.core.next.call(null,ks);
coll = G__3253;
k = G__3254;
ks = G__3255;
continue;
}
} else
{return ret__3247;
}
break;
}
};
var G__3252 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3252__delegate.call(this, coll, k, ks);
};
G__3252.cljs$lang$maxFixedArity = 2;
G__3252.cljs$lang$applyTo = (function (arglist__3256){
var coll = cljs.core.first(arglist__3256);
var k = cljs.core.first(cljs.core.next(arglist__3256));
var ks = cljs.core.rest(cljs.core.next(arglist__3256));
return G__3252__delegate.call(this, coll, k, ks);
});
return G__3252;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3248.call(this,coll);
case  2 :
return dissoc__3249.call(this,coll,k);
default:
return dissoc__3250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3250.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____3257 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3258 = x__445__auto____3257;

if(cljs.core.truth_(and__3546__auto____3258))
{var and__3546__auto____3259 = x__445__auto____3257.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3259))
{return cljs.core.not.call(null,x__445__auto____3257.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3259;
}
} else
{return and__3546__auto____3258;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____3257);
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
var disj__3261 = (function (coll){
return coll;
});
var disj__3262 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3263 = (function() { 
var G__3265__delegate = function (coll,k,ks){
while(true){
var ret__3260 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3266 = ret__3260;
var G__3267 = cljs.core.first.call(null,ks);
var G__3268 = cljs.core.next.call(null,ks);
coll = G__3266;
k = G__3267;
ks = G__3268;
continue;
}
} else
{return ret__3260;
}
break;
}
};
var G__3265 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3265__delegate.call(this, coll, k, ks);
};
G__3265.cljs$lang$maxFixedArity = 2;
G__3265.cljs$lang$applyTo = (function (arglist__3269){
var coll = cljs.core.first(arglist__3269);
var k = cljs.core.first(cljs.core.next(arglist__3269));
var ks = cljs.core.rest(cljs.core.next(arglist__3269));
return G__3265__delegate.call(this, coll, k, ks);
});
return G__3265;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3261.call(this,coll);
case  2 :
return disj__3262.call(this,coll,k);
default:
return disj__3263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3263.cljs$lang$applyTo;
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
{var x__445__auto____3270 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3271 = x__445__auto____3270;

if(cljs.core.truth_(and__3546__auto____3271))
{var and__3546__auto____3272 = x__445__auto____3270.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3272))
{return cljs.core.not.call(null,x__445__auto____3270.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3272;
}
} else
{return and__3546__auto____3271;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____3270);
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
{var x__445__auto____3273 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3274 = x__445__auto____3273;

if(cljs.core.truth_(and__3546__auto____3274))
{var and__3546__auto____3275 = x__445__auto____3273.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3275))
{return cljs.core.not.call(null,x__445__auto____3273.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3275;
}
} else
{return and__3546__auto____3274;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____3273);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____3276 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3277 = x__445__auto____3276;

if(cljs.core.truth_(and__3546__auto____3277))
{var and__3546__auto____3278 = x__445__auto____3276.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3278))
{return cljs.core.not.call(null,x__445__auto____3276.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3278;
}
} else
{return and__3546__auto____3277;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____3276);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____3279 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3280 = x__445__auto____3279;

if(cljs.core.truth_(and__3546__auto____3280))
{var and__3546__auto____3281 = x__445__auto____3279.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3281))
{return cljs.core.not.call(null,x__445__auto____3279.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3281;
}
} else
{return and__3546__auto____3280;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____3279);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____3282 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3283 = x__445__auto____3282;

if(cljs.core.truth_(and__3546__auto____3283))
{var and__3546__auto____3284 = x__445__auto____3282.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3284))
{return cljs.core.not.call(null,x__445__auto____3282.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3284;
}
} else
{return and__3546__auto____3283;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____3282);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____3285 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3286 = x__445__auto____3285;

if(cljs.core.truth_(and__3546__auto____3286))
{var and__3546__auto____3287 = x__445__auto____3285.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3287))
{return cljs.core.not.call(null,x__445__auto____3285.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3287;
}
} else
{return and__3546__auto____3286;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____3285);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____3288 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3289 = x__445__auto____3288;

if(cljs.core.truth_(and__3546__auto____3289))
{var and__3546__auto____3290 = x__445__auto____3288.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3290))
{return cljs.core.not.call(null,x__445__auto____3288.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3290;
}
} else
{return and__3546__auto____3289;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____3288);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3291 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3291.push(key);
}));
return keys__3291;
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
{var x__445__auto____3292 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3293 = x__445__auto____3292;

if(cljs.core.truth_(and__3546__auto____3293))
{var and__3546__auto____3294 = x__445__auto____3292.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3294))
{return cljs.core.not.call(null,x__445__auto____3292.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3294;
}
} else
{return and__3546__auto____3293;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____3292);
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
var and__3546__auto____3295 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3295))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3296 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____3296))
{return or__3548__auto____3296;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____3295;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3297 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3297))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____3297;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3298 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3298))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____3298;
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
var and__3546__auto____3299 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3299))
{return (n == n.toFixed());
} else
{return and__3546__auto____3299;
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
if(cljs.core.truth_((function (){var and__3546__auto____3300 = coll;

if(cljs.core.truth_(and__3546__auto____3300))
{var and__3546__auto____3301 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3301))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3301;
}
} else
{return and__3546__auto____3300;
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
var distinct_QMARK___3306 = (function (x){
return true;
});
var distinct_QMARK___3307 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3308 = (function() { 
var G__3310__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3302 = cljs.core.set([y,x]);
var xs__3303 = more;

while(true){
var x__3304 = cljs.core.first.call(null,xs__3303);
var etc__3305 = cljs.core.next.call(null,xs__3303);

if(cljs.core.truth_(xs__3303))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3302,x__3304)))
{return false;
} else
{{
var G__3311 = cljs.core.conj.call(null,s__3302,x__3304);
var G__3312 = etc__3305;
s__3302 = G__3311;
xs__3303 = G__3312;
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
var G__3310 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3310__delegate.call(this, x, y, more);
};
G__3310.cljs$lang$maxFixedArity = 2;
G__3310.cljs$lang$applyTo = (function (arglist__3313){
var x = cljs.core.first(arglist__3313);
var y = cljs.core.first(cljs.core.next(arglist__3313));
var more = cljs.core.rest(cljs.core.next(arglist__3313));
return G__3310__delegate.call(this, x, y, more);
});
return G__3310;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3306.call(this,x);
case  2 :
return distinct_QMARK___3307.call(this,x,y);
default:
return distinct_QMARK___3308.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3308.cljs$lang$applyTo;
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
var r__3314 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3314)))
{return r__3314;
} else
{if(cljs.core.truth_(r__3314))
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
var sort__3316 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3317 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3315 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3315,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3315);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3316.call(this,comp);
case  2 :
return sort__3317.call(this,comp,coll);
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
var sort_by__3319 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3320 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3319.call(this,keyfn,comp);
case  3 :
return sort_by__3320.call(this,keyfn,comp,coll);
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
var reduce__3322 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3323 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3322.call(this,f,val);
case  3 :
return reduce__3323.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3329 = (function (f,coll){
var temp__3695__auto____3325 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3325))
{var s__3326 = temp__3695__auto____3325;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3326),cljs.core.next.call(null,s__3326));
} else
{return f.call(null);
}
});
var seq_reduce__3330 = (function (f,val,coll){
var val__3327 = val;
var coll__3328 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3328))
{{
var G__3332 = f.call(null,val__3327,cljs.core.first.call(null,coll__3328));
var G__3333 = cljs.core.next.call(null,coll__3328);
val__3327 = G__3332;
coll__3328 = G__3333;
continue;
}
} else
{return val__3327;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3329.call(this,f,val);
case  3 :
return seq_reduce__3330.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3334 = null;
var G__3334__3335 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3334__3336 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3334 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3334__3335.call(this,coll,f);
case  3 :
return G__3334__3336.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3334;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3338 = (function (){
return 0;
});
var _PLUS___3339 = (function (x){
return x;
});
var _PLUS___3340 = (function (x,y){
return (x + y);
});
var _PLUS___3341 = (function() { 
var G__3343__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3343 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3343__delegate.call(this, x, y, more);
};
G__3343.cljs$lang$maxFixedArity = 2;
G__3343.cljs$lang$applyTo = (function (arglist__3344){
var x = cljs.core.first(arglist__3344);
var y = cljs.core.first(cljs.core.next(arglist__3344));
var more = cljs.core.rest(cljs.core.next(arglist__3344));
return G__3343__delegate.call(this, x, y, more);
});
return G__3343;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3338.call(this);
case  1 :
return _PLUS___3339.call(this,x);
case  2 :
return _PLUS___3340.call(this,x,y);
default:
return _PLUS___3341.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3341.cljs$lang$applyTo;
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
var ___3345 = (function (x){
return (- x);
});
var ___3346 = (function (x,y){
return (x - y);
});
var ___3347 = (function() { 
var G__3349__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3349 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3349__delegate.call(this, x, y, more);
};
G__3349.cljs$lang$maxFixedArity = 2;
G__3349.cljs$lang$applyTo = (function (arglist__3350){
var x = cljs.core.first(arglist__3350);
var y = cljs.core.first(cljs.core.next(arglist__3350));
var more = cljs.core.rest(cljs.core.next(arglist__3350));
return G__3349__delegate.call(this, x, y, more);
});
return G__3349;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3345.call(this,x);
case  2 :
return ___3346.call(this,x,y);
default:
return ___3347.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3347.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3351 = (function (){
return 1;
});
var _STAR___3352 = (function (x){
return x;
});
var _STAR___3353 = (function (x,y){
return (x * y);
});
var _STAR___3354 = (function() { 
var G__3356__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3356 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3356__delegate.call(this, x, y, more);
};
G__3356.cljs$lang$maxFixedArity = 2;
G__3356.cljs$lang$applyTo = (function (arglist__3357){
var x = cljs.core.first(arglist__3357);
var y = cljs.core.first(cljs.core.next(arglist__3357));
var more = cljs.core.rest(cljs.core.next(arglist__3357));
return G__3356__delegate.call(this, x, y, more);
});
return G__3356;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3351.call(this);
case  1 :
return _STAR___3352.call(this,x);
case  2 :
return _STAR___3353.call(this,x,y);
default:
return _STAR___3354.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3354.cljs$lang$applyTo;
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
var _SLASH___3358 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3359 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___3360 = (function() { 
var G__3362__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3362 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3362__delegate.call(this, x, y, more);
};
G__3362.cljs$lang$maxFixedArity = 2;
G__3362.cljs$lang$applyTo = (function (arglist__3363){
var x = cljs.core.first(arglist__3363);
var y = cljs.core.first(cljs.core.next(arglist__3363));
var more = cljs.core.rest(cljs.core.next(arglist__3363));
return G__3362__delegate.call(this, x, y, more);
});
return G__3362;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3358.call(this,x);
case  2 :
return _SLASH___3359.call(this,x,y);
default:
return _SLASH___3360.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3360.cljs$lang$applyTo;
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
var _LT___3364 = (function (x){
return true;
});
var _LT___3365 = (function (x,y){
return (x < y);
});
var _LT___3366 = (function() { 
var G__3368__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3369 = y;
var G__3370 = cljs.core.first.call(null,more);
var G__3371 = cljs.core.next.call(null,more);
x = G__3369;
y = G__3370;
more = G__3371;
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
var G__3368 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3368__delegate.call(this, x, y, more);
};
G__3368.cljs$lang$maxFixedArity = 2;
G__3368.cljs$lang$applyTo = (function (arglist__3372){
var x = cljs.core.first(arglist__3372);
var y = cljs.core.first(cljs.core.next(arglist__3372));
var more = cljs.core.rest(cljs.core.next(arglist__3372));
return G__3368__delegate.call(this, x, y, more);
});
return G__3368;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3364.call(this,x);
case  2 :
return _LT___3365.call(this,x,y);
default:
return _LT___3366.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3366.cljs$lang$applyTo;
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
var _LT__EQ___3373 = (function (x){
return true;
});
var _LT__EQ___3374 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3375 = (function() { 
var G__3377__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3378 = y;
var G__3379 = cljs.core.first.call(null,more);
var G__3380 = cljs.core.next.call(null,more);
x = G__3378;
y = G__3379;
more = G__3380;
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
var G__3377 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3377__delegate.call(this, x, y, more);
};
G__3377.cljs$lang$maxFixedArity = 2;
G__3377.cljs$lang$applyTo = (function (arglist__3381){
var x = cljs.core.first(arglist__3381);
var y = cljs.core.first(cljs.core.next(arglist__3381));
var more = cljs.core.rest(cljs.core.next(arglist__3381));
return G__3377__delegate.call(this, x, y, more);
});
return G__3377;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3373.call(this,x);
case  2 :
return _LT__EQ___3374.call(this,x,y);
default:
return _LT__EQ___3375.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3375.cljs$lang$applyTo;
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
var _GT___3382 = (function (x){
return true;
});
var _GT___3383 = (function (x,y){
return (x > y);
});
var _GT___3384 = (function() { 
var G__3386__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3387 = y;
var G__3388 = cljs.core.first.call(null,more);
var G__3389 = cljs.core.next.call(null,more);
x = G__3387;
y = G__3388;
more = G__3389;
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
var G__3386 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3386__delegate.call(this, x, y, more);
};
G__3386.cljs$lang$maxFixedArity = 2;
G__3386.cljs$lang$applyTo = (function (arglist__3390){
var x = cljs.core.first(arglist__3390);
var y = cljs.core.first(cljs.core.next(arglist__3390));
var more = cljs.core.rest(cljs.core.next(arglist__3390));
return G__3386__delegate.call(this, x, y, more);
});
return G__3386;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3382.call(this,x);
case  2 :
return _GT___3383.call(this,x,y);
default:
return _GT___3384.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3384.cljs$lang$applyTo;
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
var _GT__EQ___3391 = (function (x){
return true;
});
var _GT__EQ___3392 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3393 = (function() { 
var G__3395__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3396 = y;
var G__3397 = cljs.core.first.call(null,more);
var G__3398 = cljs.core.next.call(null,more);
x = G__3396;
y = G__3397;
more = G__3398;
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
var G__3395 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3395__delegate.call(this, x, y, more);
};
G__3395.cljs$lang$maxFixedArity = 2;
G__3395.cljs$lang$applyTo = (function (arglist__3399){
var x = cljs.core.first(arglist__3399);
var y = cljs.core.first(cljs.core.next(arglist__3399));
var more = cljs.core.rest(cljs.core.next(arglist__3399));
return G__3395__delegate.call(this, x, y, more);
});
return G__3395;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3391.call(this,x);
case  2 :
return _GT__EQ___3392.call(this,x,y);
default:
return _GT__EQ___3393.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3393.cljs$lang$applyTo;
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
var max__3400 = (function (x){
return x;
});
var max__3401 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3402 = (function() { 
var G__3404__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3404 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3404__delegate.call(this, x, y, more);
};
G__3404.cljs$lang$maxFixedArity = 2;
G__3404.cljs$lang$applyTo = (function (arglist__3405){
var x = cljs.core.first(arglist__3405);
var y = cljs.core.first(cljs.core.next(arglist__3405));
var more = cljs.core.rest(cljs.core.next(arglist__3405));
return G__3404__delegate.call(this, x, y, more);
});
return G__3404;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3400.call(this,x);
case  2 :
return max__3401.call(this,x,y);
default:
return max__3402.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3402.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3406 = (function (x){
return x;
});
var min__3407 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3408 = (function() { 
var G__3410__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3410 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3410__delegate.call(this, x, y, more);
};
G__3410.cljs$lang$maxFixedArity = 2;
G__3410.cljs$lang$applyTo = (function (arglist__3411){
var x = cljs.core.first(arglist__3411);
var y = cljs.core.first(cljs.core.next(arglist__3411));
var more = cljs.core.rest(cljs.core.next(arglist__3411));
return G__3410__delegate.call(this, x, y, more);
});
return G__3410;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3406.call(this,x);
case  2 :
return min__3407.call(this,x,y);
default:
return min__3408.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3408.cljs$lang$applyTo;
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
var rem__3412 = (n % d);

return cljs.core.fix.call(null,((n - rem__3412) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3413 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3413));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3414 = (function (){
return Math.random.call(null);
});
var rand__3415 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3414.call(this);
case  1 :
return rand__3415.call(this,n);
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
var _EQ__EQ___3417 = (function (x){
return true;
});
var _EQ__EQ___3418 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3419 = (function() { 
var G__3421__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3422 = y;
var G__3423 = cljs.core.first.call(null,more);
var G__3424 = cljs.core.next.call(null,more);
x = G__3422;
y = G__3423;
more = G__3424;
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
var G__3421 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3421__delegate.call(this, x, y, more);
};
G__3421.cljs$lang$maxFixedArity = 2;
G__3421.cljs$lang$applyTo = (function (arglist__3425){
var x = cljs.core.first(arglist__3425);
var y = cljs.core.first(cljs.core.next(arglist__3425));
var more = cljs.core.rest(cljs.core.next(arglist__3425));
return G__3421__delegate.call(this, x, y, more);
});
return G__3421;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3417.call(this,x);
case  2 :
return _EQ__EQ___3418.call(this,x,y);
default:
return _EQ__EQ___3419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3419.cljs$lang$applyTo;
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
var n__3426 = n;
var xs__3427 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3428 = xs__3427;

if(cljs.core.truth_(and__3546__auto____3428))
{return (n__3426 > 0);
} else
{return and__3546__auto____3428;
}
})()))
{{
var G__3429 = (n__3426 - 1);
var G__3430 = cljs.core.next.call(null,xs__3427);
n__3426 = G__3429;
xs__3427 = G__3430;
continue;
}
} else
{return xs__3427;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3435 = null;
var G__3435__3436 = (function (coll,n){
var temp__3695__auto____3431 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3431))
{var xs__3432 = temp__3695__auto____3431;

return cljs.core.first.call(null,xs__3432);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3435__3437 = (function (coll,n,not_found){
var temp__3695__auto____3433 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3433))
{var xs__3434 = temp__3695__auto____3433;

return cljs.core.first.call(null,xs__3434);
} else
{return not_found;
}
});
G__3435 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3435__3436.call(this,coll,n);
case  3 :
return G__3435__3437.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3435;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3439 = (function (){
return "";
});
var str_STAR___3440 = (function (x){
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
var str_STAR___3441 = (function() { 
var G__3443__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3444 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3445 = cljs.core.next.call(null,more);
sb = G__3444;
more = G__3445;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3443 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3443__delegate.call(this, x, ys);
};
G__3443.cljs$lang$maxFixedArity = 1;
G__3443.cljs$lang$applyTo = (function (arglist__3446){
var x = cljs.core.first(arglist__3446);
var ys = cljs.core.rest(arglist__3446);
return G__3443__delegate.call(this, x, ys);
});
return G__3443;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3439.call(this);
case  1 :
return str_STAR___3440.call(this,x);
default:
return str_STAR___3441.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3441.cljs$lang$applyTo;
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
var str__3447 = (function (){
return "";
});
var str__3448 = (function (x){
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
var str__3449 = (function() { 
var G__3451__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__3451 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3451__delegate.call(this, x, ys);
};
G__3451.cljs$lang$maxFixedArity = 1;
G__3451.cljs$lang$applyTo = (function (arglist__3452){
var x = cljs.core.first(arglist__3452);
var ys = cljs.core.rest(arglist__3452);
return G__3451__delegate.call(this, x, ys);
});
return G__3451;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3447.call(this);
case  1 :
return str__3448.call(this,x);
default:
return str__3449.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3449.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3453 = (function (s,start){
return s.substring(start);
});
var subs__3454 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3453.call(this,s,start);
case  3 :
return subs__3454.call(this,s,start,end);
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
var symbol__3456 = (function (name){
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
var symbol__3457 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3456.call(this,ns);
case  2 :
return symbol__3457.call(this,ns,name);
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
var keyword__3459 = (function (name){
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
var keyword__3460 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3459.call(this,ns);
case  2 :
return keyword__3460.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3462 = cljs.core.seq.call(null,x);
var ys__3463 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__3462)))
{return cljs.core.nil_QMARK_.call(null,ys__3463);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__3463)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3462),cljs.core.first.call(null,ys__3463))))
{{
var G__3464 = cljs.core.next.call(null,xs__3462);
var G__3465 = cljs.core.next.call(null,ys__3463);
xs__3462 = G__3464;
ys__3463 = G__3465;
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
return cljs.core.reduce.call(null,(function (p1__3466_SHARP_,p2__3467_SHARP_){
return cljs.core.hash_combine.call(null,p1__3466_SHARP_,cljs.core.hash.call(null,p2__3467_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3468__3469 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3468__3469))
{var G__3471__3473 = cljs.core.first.call(null,G__3468__3469);
var vec__3472__3474 = G__3471__3473;
var key_name__3475 = cljs.core.nth.call(null,vec__3472__3474,0,null);
var f__3476 = cljs.core.nth.call(null,vec__3472__3474,1,null);
var G__3468__3477 = G__3468__3469;

var G__3471__3478 = G__3471__3473;
var G__3468__3479 = G__3468__3477;

while(true){
var vec__3480__3481 = G__3471__3478;
var key_name__3482 = cljs.core.nth.call(null,vec__3480__3481,0,null);
var f__3483 = cljs.core.nth.call(null,vec__3480__3481,1,null);
var G__3468__3484 = G__3468__3479;

var str_name__3485 = cljs.core.name.call(null,key_name__3482);

obj[str_name__3485] = f__3483;
var temp__3698__auto____3486 = cljs.core.next.call(null,G__3468__3484);

if(cljs.core.truth_(temp__3698__auto____3486))
{var G__3468__3487 = temp__3698__auto____3486;

{
var G__3488 = cljs.core.first.call(null,G__3468__3487);
var G__3489 = G__3468__3487;
G__3471__3478 = G__3488;
G__3468__3479 = G__3489;
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
var this__3490 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3491 = this;
return (new cljs.core.List(this__3491.meta,o,coll,(this__3491.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3492 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3493 = this;
return this__3493.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3494 = this;
return this__3494.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3495 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3496 = this;
return this__3496.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3497 = this;
return this__3497.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3498 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3499 = this;
return (new cljs.core.List(meta,this__3499.first,this__3499.rest,this__3499.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3500 = this;
return this__3500.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3501 = this;
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
var this__3502 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3503 = this;
return (new cljs.core.List(this__3503.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3504 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3505 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3506 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3507 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3508 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3509 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3510 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3511 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3512 = this;
return this__3512.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3513 = this;
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
list.cljs$lang$applyTo = (function (arglist__3514){
var items = cljs.core.seq( arglist__3514 );;
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
var this__3515 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3516 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3517 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3518 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3518.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3519 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3520 = this;
return this__3520.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3521 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__3521.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__3521.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3522 = this;
return this__3522.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3523 = this;
return (new cljs.core.Cons(meta,this__3523.first,this__3523.rest));
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
var G__3524 = null;
var G__3524__3525 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3524__3526 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3524 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3524__3525.call(this,string,f);
case  3 :
return G__3524__3526.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3524;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3528 = null;
var G__3528__3529 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3528__3530 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3528 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3528__3529.call(this,string,k);
case  3 :
return G__3528__3530.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3528;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3532 = null;
var G__3532__3533 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3532__3534 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3532 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3532__3533.call(this,string,n);
case  3 :
return G__3532__3534.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3532;
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
var G__3536 = null;
var G__3536__3537 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__3536__3538 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__3536 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__3536__3537.call(this,this$,coll);
case  3 :
return G__3536__3538.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3536;
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
var x__3540 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3540;
} else
{lazy_seq.x = x__3540.call(null);
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
var this__3541 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3542 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3543 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3544 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3544.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3545 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3546 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3547 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3548 = this;
return this__3548.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3549 = this;
return (new cljs.core.LazySeq(meta,this__3549.realized,this__3549.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3550 = cljs.core.array.call(null);

var s__3551 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3551)))
{ary__3550.push(cljs.core.first.call(null,s__3551));
{
var G__3552 = cljs.core.next.call(null,s__3551);
s__3551 = G__3552;
continue;
}
} else
{return ary__3550;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3553 = s;
var i__3554 = n;
var sum__3555 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3556 = (i__3554 > 0);

if(cljs.core.truth_(and__3546__auto____3556))
{return cljs.core.seq.call(null,s__3553);
} else
{return and__3546__auto____3556;
}
})()))
{{
var G__3557 = cljs.core.next.call(null,s__3553);
var G__3558 = (i__3554 - 1);
var G__3559 = (sum__3555 + 1);
s__3553 = G__3557;
i__3554 = G__3558;
sum__3555 = G__3559;
continue;
}
} else
{return sum__3555;
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
var concat__3563 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3564 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3565 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3560 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3560))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3560),concat.call(null,cljs.core.rest.call(null,s__3560),y));
} else
{return y;
}
})));
});
var concat__3566 = (function() { 
var G__3568__delegate = function (x,y,zs){
var cat__3562 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3561 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3561))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3561),cat.call(null,cljs.core.rest.call(null,xys__3561),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3562.call(null,concat.call(null,x,y),zs);
};
var G__3568 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3568__delegate.call(this, x, y, zs);
};
G__3568.cljs$lang$maxFixedArity = 2;
G__3568.cljs$lang$applyTo = (function (arglist__3569){
var x = cljs.core.first(arglist__3569);
var y = cljs.core.first(cljs.core.next(arglist__3569));
var zs = cljs.core.rest(cljs.core.next(arglist__3569));
return G__3568__delegate.call(this, x, y, zs);
});
return G__3568;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3563.call(this);
case  1 :
return concat__3564.call(this,x);
case  2 :
return concat__3565.call(this,x,y);
default:
return concat__3566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3566.cljs$lang$applyTo;
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
var list_STAR___3570 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3571 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3572 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3573 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3574 = (function() { 
var G__3576__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3576 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3576__delegate.call(this, a, b, c, d, more);
};
G__3576.cljs$lang$maxFixedArity = 4;
G__3576.cljs$lang$applyTo = (function (arglist__3577){
var a = cljs.core.first(arglist__3577);
var b = cljs.core.first(cljs.core.next(arglist__3577));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3577)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3577))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3577))));
return G__3576__delegate.call(this, a, b, c, d, more);
});
return G__3576;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3570.call(this,a);
case  2 :
return list_STAR___3571.call(this,a,b);
case  3 :
return list_STAR___3572.call(this,a,b,c);
case  4 :
return list_STAR___3573.call(this,a,b,c,d);
default:
return list_STAR___3574.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3574.cljs$lang$applyTo;
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
var apply__3587 = (function (f,args){
var fixed_arity__3578 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3578 + 1)) <= fixed_arity__3578)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3588 = (function (f,x,args){
var arglist__3579 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3580 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3579,fixed_arity__3580) <= fixed_arity__3580)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3579));
} else
{return f.cljs$lang$applyTo(arglist__3579);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3579));
}
});
var apply__3589 = (function (f,x,y,args){
var arglist__3581 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3582 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3581,fixed_arity__3582) <= fixed_arity__3582)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3581));
} else
{return f.cljs$lang$applyTo(arglist__3581);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3581));
}
});
var apply__3590 = (function (f,x,y,z,args){
var arglist__3583 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3584 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3583,fixed_arity__3584) <= fixed_arity__3584)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3583));
} else
{return f.cljs$lang$applyTo(arglist__3583);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3583));
}
});
var apply__3591 = (function() { 
var G__3593__delegate = function (f,a,b,c,d,args){
var arglist__3585 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3586 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3585,fixed_arity__3586) <= fixed_arity__3586)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3585));
} else
{return f.cljs$lang$applyTo(arglist__3585);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3585));
}
};
var G__3593 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3593__delegate.call(this, f, a, b, c, d, args);
};
G__3593.cljs$lang$maxFixedArity = 5;
G__3593.cljs$lang$applyTo = (function (arglist__3594){
var f = cljs.core.first(arglist__3594);
var a = cljs.core.first(cljs.core.next(arglist__3594));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3594)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3594))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3594)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3594)))));
return G__3593__delegate.call(this, f, a, b, c, d, args);
});
return G__3593;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3587.call(this,f,a);
case  3 :
return apply__3588.call(this,f,a,b);
case  4 :
return apply__3589.call(this,f,a,b,c);
case  5 :
return apply__3590.call(this,f,a,b,c,d);
default:
return apply__3591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3591.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3595){
var obj = cljs.core.first(arglist__3595);
var f = cljs.core.first(cljs.core.next(arglist__3595));
var args = cljs.core.rest(cljs.core.next(arglist__3595));
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
var not_EQ___3596 = (function (x){
return false;
});
var not_EQ___3597 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3598 = (function() { 
var G__3600__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3600 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3600__delegate.call(this, x, y, more);
};
G__3600.cljs$lang$maxFixedArity = 2;
G__3600.cljs$lang$applyTo = (function (arglist__3601){
var x = cljs.core.first(arglist__3601);
var y = cljs.core.first(cljs.core.next(arglist__3601));
var more = cljs.core.rest(cljs.core.next(arglist__3601));
return G__3600__delegate.call(this, x, y, more);
});
return G__3600;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3596.call(this,x);
case  2 :
return not_EQ___3597.call(this,x,y);
default:
return not_EQ___3598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3598.cljs$lang$applyTo;
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
var G__3602 = pred;
var G__3603 = cljs.core.next.call(null,coll);
pred = G__3602;
coll = G__3603;
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
{var or__3548__auto____3604 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3604))
{return or__3548__auto____3604;
} else
{{
var G__3605 = pred;
var G__3606 = cljs.core.next.call(null,coll);
pred = G__3605;
coll = G__3606;
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
var G__3607 = null;
var G__3607__3608 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3607__3609 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3607__3610 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3607__3611 = (function() { 
var G__3613__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3613 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3613__delegate.call(this, x, y, zs);
};
G__3613.cljs$lang$maxFixedArity = 2;
G__3613.cljs$lang$applyTo = (function (arglist__3614){
var x = cljs.core.first(arglist__3614);
var y = cljs.core.first(cljs.core.next(arglist__3614));
var zs = cljs.core.rest(cljs.core.next(arglist__3614));
return G__3613__delegate.call(this, x, y, zs);
});
return G__3613;
})()
;
G__3607 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3607__3608.call(this);
case  1 :
return G__3607__3609.call(this,x);
case  2 :
return G__3607__3610.call(this,x,y);
default:
return G__3607__3611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3607.cljs$lang$maxFixedArity = 2;
G__3607.cljs$lang$applyTo = G__3607__3611.cljs$lang$applyTo;
return G__3607;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3615__delegate = function (args){
return x;
};
var G__3615 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3615__delegate.call(this, args);
};
G__3615.cljs$lang$maxFixedArity = 0;
G__3615.cljs$lang$applyTo = (function (arglist__3616){
var args = cljs.core.seq( arglist__3616 );;
return G__3615__delegate.call(this, args);
});
return G__3615;
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
var comp__3620 = (function (){
return cljs.core.identity;
});
var comp__3621 = (function (f){
return f;
});
var comp__3622 = (function (f,g){
return (function() {
var G__3626 = null;
var G__3626__3627 = (function (){
return f.call(null,g.call(null));
});
var G__3626__3628 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3626__3629 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3626__3630 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3626__3631 = (function() { 
var G__3633__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3633 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3633__delegate.call(this, x, y, z, args);
};
G__3633.cljs$lang$maxFixedArity = 3;
G__3633.cljs$lang$applyTo = (function (arglist__3634){
var x = cljs.core.first(arglist__3634);
var y = cljs.core.first(cljs.core.next(arglist__3634));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3634)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3634)));
return G__3633__delegate.call(this, x, y, z, args);
});
return G__3633;
})()
;
G__3626 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3626__3627.call(this);
case  1 :
return G__3626__3628.call(this,x);
case  2 :
return G__3626__3629.call(this,x,y);
case  3 :
return G__3626__3630.call(this,x,y,z);
default:
return G__3626__3631.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3626.cljs$lang$maxFixedArity = 3;
G__3626.cljs$lang$applyTo = G__3626__3631.cljs$lang$applyTo;
return G__3626;
})()
});
var comp__3623 = (function (f,g,h){
return (function() {
var G__3635 = null;
var G__3635__3636 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3635__3637 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3635__3638 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3635__3639 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3635__3640 = (function() { 
var G__3642__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3642 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3642__delegate.call(this, x, y, z, args);
};
G__3642.cljs$lang$maxFixedArity = 3;
G__3642.cljs$lang$applyTo = (function (arglist__3643){
var x = cljs.core.first(arglist__3643);
var y = cljs.core.first(cljs.core.next(arglist__3643));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3643)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3643)));
return G__3642__delegate.call(this, x, y, z, args);
});
return G__3642;
})()
;
G__3635 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3635__3636.call(this);
case  1 :
return G__3635__3637.call(this,x);
case  2 :
return G__3635__3638.call(this,x,y);
case  3 :
return G__3635__3639.call(this,x,y,z);
default:
return G__3635__3640.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3635.cljs$lang$maxFixedArity = 3;
G__3635.cljs$lang$applyTo = G__3635__3640.cljs$lang$applyTo;
return G__3635;
})()
});
var comp__3624 = (function() { 
var G__3644__delegate = function (f1,f2,f3,fs){
var fs__3617 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3645__delegate = function (args){
var ret__3618 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3617),args);
var fs__3619 = cljs.core.next.call(null,fs__3617);

while(true){
if(cljs.core.truth_(fs__3619))
{{
var G__3646 = cljs.core.first.call(null,fs__3619).call(null,ret__3618);
var G__3647 = cljs.core.next.call(null,fs__3619);
ret__3618 = G__3646;
fs__3619 = G__3647;
continue;
}
} else
{return ret__3618;
}
break;
}
};
var G__3645 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3645__delegate.call(this, args);
};
G__3645.cljs$lang$maxFixedArity = 0;
G__3645.cljs$lang$applyTo = (function (arglist__3648){
var args = cljs.core.seq( arglist__3648 );;
return G__3645__delegate.call(this, args);
});
return G__3645;
})()
;
};
var G__3644 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3644__delegate.call(this, f1, f2, f3, fs);
};
G__3644.cljs$lang$maxFixedArity = 3;
G__3644.cljs$lang$applyTo = (function (arglist__3649){
var f1 = cljs.core.first(arglist__3649);
var f2 = cljs.core.first(cljs.core.next(arglist__3649));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3649)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3649)));
return G__3644__delegate.call(this, f1, f2, f3, fs);
});
return G__3644;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3620.call(this);
case  1 :
return comp__3621.call(this,f1);
case  2 :
return comp__3622.call(this,f1,f2);
case  3 :
return comp__3623.call(this,f1,f2,f3);
default:
return comp__3624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3624.cljs$lang$applyTo;
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
var partial__3650 = (function (f,arg1){
return (function() { 
var G__3655__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3655 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3655__delegate.call(this, args);
};
G__3655.cljs$lang$maxFixedArity = 0;
G__3655.cljs$lang$applyTo = (function (arglist__3656){
var args = cljs.core.seq( arglist__3656 );;
return G__3655__delegate.call(this, args);
});
return G__3655;
})()
;
});
var partial__3651 = (function (f,arg1,arg2){
return (function() { 
var G__3657__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3657 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3657__delegate.call(this, args);
};
G__3657.cljs$lang$maxFixedArity = 0;
G__3657.cljs$lang$applyTo = (function (arglist__3658){
var args = cljs.core.seq( arglist__3658 );;
return G__3657__delegate.call(this, args);
});
return G__3657;
})()
;
});
var partial__3652 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3659__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3659 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3659__delegate.call(this, args);
};
G__3659.cljs$lang$maxFixedArity = 0;
G__3659.cljs$lang$applyTo = (function (arglist__3660){
var args = cljs.core.seq( arglist__3660 );;
return G__3659__delegate.call(this, args);
});
return G__3659;
})()
;
});
var partial__3653 = (function() { 
var G__3661__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3662__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3662 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3662__delegate.call(this, args);
};
G__3662.cljs$lang$maxFixedArity = 0;
G__3662.cljs$lang$applyTo = (function (arglist__3663){
var args = cljs.core.seq( arglist__3663 );;
return G__3662__delegate.call(this, args);
});
return G__3662;
})()
;
};
var G__3661 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3661__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3661.cljs$lang$maxFixedArity = 4;
G__3661.cljs$lang$applyTo = (function (arglist__3664){
var f = cljs.core.first(arglist__3664);
var arg1 = cljs.core.first(cljs.core.next(arglist__3664));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3664)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3664))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3664))));
return G__3661__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3661;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3650.call(this,f,arg1);
case  3 :
return partial__3651.call(this,f,arg1,arg2);
case  4 :
return partial__3652.call(this,f,arg1,arg2,arg3);
default:
return partial__3653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3653.cljs$lang$applyTo;
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
var fnil__3665 = (function (f,x){
return (function() {
var G__3669 = null;
var G__3669__3670 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3669__3671 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3669__3672 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3669__3673 = (function() { 
var G__3675__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3675 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3675__delegate.call(this, a, b, c, ds);
};
G__3675.cljs$lang$maxFixedArity = 3;
G__3675.cljs$lang$applyTo = (function (arglist__3676){
var a = cljs.core.first(arglist__3676);
var b = cljs.core.first(cljs.core.next(arglist__3676));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3676)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3676)));
return G__3675__delegate.call(this, a, b, c, ds);
});
return G__3675;
})()
;
G__3669 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3669__3670.call(this,a);
case  2 :
return G__3669__3671.call(this,a,b);
case  3 :
return G__3669__3672.call(this,a,b,c);
default:
return G__3669__3673.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3669.cljs$lang$maxFixedArity = 3;
G__3669.cljs$lang$applyTo = G__3669__3673.cljs$lang$applyTo;
return G__3669;
})()
});
var fnil__3666 = (function (f,x,y){
return (function() {
var G__3677 = null;
var G__3677__3678 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3677__3679 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3677__3680 = (function() { 
var G__3682__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3682 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3682__delegate.call(this, a, b, c, ds);
};
G__3682.cljs$lang$maxFixedArity = 3;
G__3682.cljs$lang$applyTo = (function (arglist__3683){
var a = cljs.core.first(arglist__3683);
var b = cljs.core.first(cljs.core.next(arglist__3683));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3683)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3683)));
return G__3682__delegate.call(this, a, b, c, ds);
});
return G__3682;
})()
;
G__3677 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3677__3678.call(this,a,b);
case  3 :
return G__3677__3679.call(this,a,b,c);
default:
return G__3677__3680.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3677.cljs$lang$maxFixedArity = 3;
G__3677.cljs$lang$applyTo = G__3677__3680.cljs$lang$applyTo;
return G__3677;
})()
});
var fnil__3667 = (function (f,x,y,z){
return (function() {
var G__3684 = null;
var G__3684__3685 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3684__3686 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3684__3687 = (function() { 
var G__3689__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3689 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3689__delegate.call(this, a, b, c, ds);
};
G__3689.cljs$lang$maxFixedArity = 3;
G__3689.cljs$lang$applyTo = (function (arglist__3690){
var a = cljs.core.first(arglist__3690);
var b = cljs.core.first(cljs.core.next(arglist__3690));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3690)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3690)));
return G__3689__delegate.call(this, a, b, c, ds);
});
return G__3689;
})()
;
G__3684 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3684__3685.call(this,a,b);
case  3 :
return G__3684__3686.call(this,a,b,c);
default:
return G__3684__3687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3684.cljs$lang$maxFixedArity = 3;
G__3684.cljs$lang$applyTo = G__3684__3687.cljs$lang$applyTo;
return G__3684;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3665.call(this,f,x);
case  3 :
return fnil__3666.call(this,f,x,y);
case  4 :
return fnil__3667.call(this,f,x,y,z);
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
var mapi__3693 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3691 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3691))
{var s__3692 = temp__3698__auto____3691;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3692)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3692)));
} else
{return null;
}
})));
});

return mapi__3693.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3694 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3694))
{var s__3695 = temp__3698__auto____3694;

var x__3696 = f.call(null,cljs.core.first.call(null,s__3695));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3696)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3695));
} else
{return cljs.core.cons.call(null,x__3696,keep.call(null,f,cljs.core.rest.call(null,s__3695)));
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
var keepi__3706 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3703 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3703))
{var s__3704 = temp__3698__auto____3703;

var x__3705 = f.call(null,idx,cljs.core.first.call(null,s__3704));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3705)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3704));
} else
{return cljs.core.cons.call(null,x__3705,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3704)));
}
} else
{return null;
}
})));
});

return keepi__3706.call(null,0,coll);
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
var every_pred__3751 = (function (p){
return (function() {
var ep1 = null;
var ep1__3756 = (function (){
return true;
});
var ep1__3757 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3758 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3713 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3713))
{return p.call(null,y);
} else
{return and__3546__auto____3713;
}
})());
});
var ep1__3759 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3714 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3714))
{var and__3546__auto____3715 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3715))
{return p.call(null,z);
} else
{return and__3546__auto____3715;
}
} else
{return and__3546__auto____3714;
}
})());
});
var ep1__3760 = (function() { 
var G__3762__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3716 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3716))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3716;
}
})());
};
var G__3762 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3762__delegate.call(this, x, y, z, args);
};
G__3762.cljs$lang$maxFixedArity = 3;
G__3762.cljs$lang$applyTo = (function (arglist__3763){
var x = cljs.core.first(arglist__3763);
var y = cljs.core.first(cljs.core.next(arglist__3763));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3763)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3763)));
return G__3762__delegate.call(this, x, y, z, args);
});
return G__3762;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3756.call(this);
case  1 :
return ep1__3757.call(this,x);
case  2 :
return ep1__3758.call(this,x,y);
case  3 :
return ep1__3759.call(this,x,y,z);
default:
return ep1__3760.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3760.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3752 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3764 = (function (){
return true;
});
var ep2__3765 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3717 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3717))
{return p2.call(null,x);
} else
{return and__3546__auto____3717;
}
})());
});
var ep2__3766 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3718 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3718))
{var and__3546__auto____3719 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3719))
{var and__3546__auto____3720 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3720))
{return p2.call(null,y);
} else
{return and__3546__auto____3720;
}
} else
{return and__3546__auto____3719;
}
} else
{return and__3546__auto____3718;
}
})());
});
var ep2__3767 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3721 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3721))
{var and__3546__auto____3722 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3722))
{var and__3546__auto____3723 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3723))
{var and__3546__auto____3724 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3724))
{var and__3546__auto____3725 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3725))
{return p2.call(null,z);
} else
{return and__3546__auto____3725;
}
} else
{return and__3546__auto____3724;
}
} else
{return and__3546__auto____3723;
}
} else
{return and__3546__auto____3722;
}
} else
{return and__3546__auto____3721;
}
})());
});
var ep2__3768 = (function() { 
var G__3770__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3726 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3726))
{return cljs.core.every_QMARK_.call(null,(function (p1__3697_SHARP_){
var and__3546__auto____3727 = p1.call(null,p1__3697_SHARP_);

if(cljs.core.truth_(and__3546__auto____3727))
{return p2.call(null,p1__3697_SHARP_);
} else
{return and__3546__auto____3727;
}
}),args);
} else
{return and__3546__auto____3726;
}
})());
};
var G__3770 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3770__delegate.call(this, x, y, z, args);
};
G__3770.cljs$lang$maxFixedArity = 3;
G__3770.cljs$lang$applyTo = (function (arglist__3771){
var x = cljs.core.first(arglist__3771);
var y = cljs.core.first(cljs.core.next(arglist__3771));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3771)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3771)));
return G__3770__delegate.call(this, x, y, z, args);
});
return G__3770;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3764.call(this);
case  1 :
return ep2__3765.call(this,x);
case  2 :
return ep2__3766.call(this,x,y);
case  3 :
return ep2__3767.call(this,x,y,z);
default:
return ep2__3768.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3768.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3753 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3772 = (function (){
return true;
});
var ep3__3773 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3728 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3728))
{var and__3546__auto____3729 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3729))
{return p3.call(null,x);
} else
{return and__3546__auto____3729;
}
} else
{return and__3546__auto____3728;
}
})());
});
var ep3__3774 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3730 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3730))
{var and__3546__auto____3731 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3731))
{var and__3546__auto____3732 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3732))
{var and__3546__auto____3733 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3733))
{var and__3546__auto____3734 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3734))
{return p3.call(null,y);
} else
{return and__3546__auto____3734;
}
} else
{return and__3546__auto____3733;
}
} else
{return and__3546__auto____3732;
}
} else
{return and__3546__auto____3731;
}
} else
{return and__3546__auto____3730;
}
})());
});
var ep3__3775 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3735 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3735))
{var and__3546__auto____3736 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3736))
{var and__3546__auto____3737 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3737))
{var and__3546__auto____3738 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3738))
{var and__3546__auto____3739 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3739))
{var and__3546__auto____3740 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3740))
{var and__3546__auto____3741 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3741))
{var and__3546__auto____3742 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3742))
{return p3.call(null,z);
} else
{return and__3546__auto____3742;
}
} else
{return and__3546__auto____3741;
}
} else
{return and__3546__auto____3740;
}
} else
{return and__3546__auto____3739;
}
} else
{return and__3546__auto____3738;
}
} else
{return and__3546__auto____3737;
}
} else
{return and__3546__auto____3736;
}
} else
{return and__3546__auto____3735;
}
})());
});
var ep3__3776 = (function() { 
var G__3778__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3743 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3743))
{return cljs.core.every_QMARK_.call(null,(function (p1__3698_SHARP_){
var and__3546__auto____3744 = p1.call(null,p1__3698_SHARP_);

if(cljs.core.truth_(and__3546__auto____3744))
{var and__3546__auto____3745 = p2.call(null,p1__3698_SHARP_);

if(cljs.core.truth_(and__3546__auto____3745))
{return p3.call(null,p1__3698_SHARP_);
} else
{return and__3546__auto____3745;
}
} else
{return and__3546__auto____3744;
}
}),args);
} else
{return and__3546__auto____3743;
}
})());
};
var G__3778 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3778__delegate.call(this, x, y, z, args);
};
G__3778.cljs$lang$maxFixedArity = 3;
G__3778.cljs$lang$applyTo = (function (arglist__3779){
var x = cljs.core.first(arglist__3779);
var y = cljs.core.first(cljs.core.next(arglist__3779));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3779)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3779)));
return G__3778__delegate.call(this, x, y, z, args);
});
return G__3778;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3772.call(this);
case  1 :
return ep3__3773.call(this,x);
case  2 :
return ep3__3774.call(this,x,y);
case  3 :
return ep3__3775.call(this,x,y,z);
default:
return ep3__3776.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3776.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3754 = (function() { 
var G__3780__delegate = function (p1,p2,p3,ps){
var ps__3746 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3781 = (function (){
return true;
});
var epn__3782 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3699_SHARP_){
return p1__3699_SHARP_.call(null,x);
}),ps__3746);
});
var epn__3783 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3700_SHARP_){
var and__3546__auto____3747 = p1__3700_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3747))
{return p1__3700_SHARP_.call(null,y);
} else
{return and__3546__auto____3747;
}
}),ps__3746);
});
var epn__3784 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3701_SHARP_){
var and__3546__auto____3748 = p1__3701_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3748))
{var and__3546__auto____3749 = p1__3701_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3749))
{return p1__3701_SHARP_.call(null,z);
} else
{return and__3546__auto____3749;
}
} else
{return and__3546__auto____3748;
}
}),ps__3746);
});
var epn__3785 = (function() { 
var G__3787__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3750 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3750))
{return cljs.core.every_QMARK_.call(null,(function (p1__3702_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3702_SHARP_,args);
}),ps__3746);
} else
{return and__3546__auto____3750;
}
})());
};
var G__3787 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3787__delegate.call(this, x, y, z, args);
};
G__3787.cljs$lang$maxFixedArity = 3;
G__3787.cljs$lang$applyTo = (function (arglist__3788){
var x = cljs.core.first(arglist__3788);
var y = cljs.core.first(cljs.core.next(arglist__3788));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3788)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3788)));
return G__3787__delegate.call(this, x, y, z, args);
});
return G__3787;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3781.call(this);
case  1 :
return epn__3782.call(this,x);
case  2 :
return epn__3783.call(this,x,y);
case  3 :
return epn__3784.call(this,x,y,z);
default:
return epn__3785.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3785.cljs$lang$applyTo;
return epn;
})()
};
var G__3780 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3780__delegate.call(this, p1, p2, p3, ps);
};
G__3780.cljs$lang$maxFixedArity = 3;
G__3780.cljs$lang$applyTo = (function (arglist__3789){
var p1 = cljs.core.first(arglist__3789);
var p2 = cljs.core.first(cljs.core.next(arglist__3789));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3789)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3789)));
return G__3780__delegate.call(this, p1, p2, p3, ps);
});
return G__3780;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3751.call(this,p1);
case  2 :
return every_pred__3752.call(this,p1,p2);
case  3 :
return every_pred__3753.call(this,p1,p2,p3);
default:
return every_pred__3754.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3754.cljs$lang$applyTo;
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
var some_fn__3829 = (function (p){
return (function() {
var sp1 = null;
var sp1__3834 = (function (){
return null;
});
var sp1__3835 = (function (x){
return p.call(null,x);
});
var sp1__3836 = (function (x,y){
var or__3548__auto____3791 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3791))
{return or__3548__auto____3791;
} else
{return p.call(null,y);
}
});
var sp1__3837 = (function (x,y,z){
var or__3548__auto____3792 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3792))
{return or__3548__auto____3792;
} else
{var or__3548__auto____3793 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3793))
{return or__3548__auto____3793;
} else
{return p.call(null,z);
}
}
});
var sp1__3838 = (function() { 
var G__3840__delegate = function (x,y,z,args){
var or__3548__auto____3794 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3794))
{return or__3548__auto____3794;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3840 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3840__delegate.call(this, x, y, z, args);
};
G__3840.cljs$lang$maxFixedArity = 3;
G__3840.cljs$lang$applyTo = (function (arglist__3841){
var x = cljs.core.first(arglist__3841);
var y = cljs.core.first(cljs.core.next(arglist__3841));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3841)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3841)));
return G__3840__delegate.call(this, x, y, z, args);
});
return G__3840;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3834.call(this);
case  1 :
return sp1__3835.call(this,x);
case  2 :
return sp1__3836.call(this,x,y);
case  3 :
return sp1__3837.call(this,x,y,z);
default:
return sp1__3838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3838.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3830 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3842 = (function (){
return null;
});
var sp2__3843 = (function (x){
var or__3548__auto____3795 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3795))
{return or__3548__auto____3795;
} else
{return p2.call(null,x);
}
});
var sp2__3844 = (function (x,y){
var or__3548__auto____3796 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3796))
{return or__3548__auto____3796;
} else
{var or__3548__auto____3797 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3797))
{return or__3548__auto____3797;
} else
{var or__3548__auto____3798 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3798))
{return or__3548__auto____3798;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3845 = (function (x,y,z){
var or__3548__auto____3799 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3799))
{return or__3548__auto____3799;
} else
{var or__3548__auto____3800 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3800))
{return or__3548__auto____3800;
} else
{var or__3548__auto____3801 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3801))
{return or__3548__auto____3801;
} else
{var or__3548__auto____3802 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3802))
{return or__3548__auto____3802;
} else
{var or__3548__auto____3803 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3803))
{return or__3548__auto____3803;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3846 = (function() { 
var G__3848__delegate = function (x,y,z,args){
var or__3548__auto____3804 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3804))
{return or__3548__auto____3804;
} else
{return cljs.core.some.call(null,(function (p1__3707_SHARP_){
var or__3548__auto____3805 = p1.call(null,p1__3707_SHARP_);

if(cljs.core.truth_(or__3548__auto____3805))
{return or__3548__auto____3805;
} else
{return p2.call(null,p1__3707_SHARP_);
}
}),args);
}
};
var G__3848 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3848__delegate.call(this, x, y, z, args);
};
G__3848.cljs$lang$maxFixedArity = 3;
G__3848.cljs$lang$applyTo = (function (arglist__3849){
var x = cljs.core.first(arglist__3849);
var y = cljs.core.first(cljs.core.next(arglist__3849));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3849)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3849)));
return G__3848__delegate.call(this, x, y, z, args);
});
return G__3848;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3842.call(this);
case  1 :
return sp2__3843.call(this,x);
case  2 :
return sp2__3844.call(this,x,y);
case  3 :
return sp2__3845.call(this,x,y,z);
default:
return sp2__3846.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3846.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3831 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3850 = (function (){
return null;
});
var sp3__3851 = (function (x){
var or__3548__auto____3806 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3806))
{return or__3548__auto____3806;
} else
{var or__3548__auto____3807 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3807))
{return or__3548__auto____3807;
} else
{return p3.call(null,x);
}
}
});
var sp3__3852 = (function (x,y){
var or__3548__auto____3808 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3808))
{return or__3548__auto____3808;
} else
{var or__3548__auto____3809 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3809))
{return or__3548__auto____3809;
} else
{var or__3548__auto____3810 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3810))
{return or__3548__auto____3810;
} else
{var or__3548__auto____3811 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3811))
{return or__3548__auto____3811;
} else
{var or__3548__auto____3812 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3812))
{return or__3548__auto____3812;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3853 = (function (x,y,z){
var or__3548__auto____3813 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3813))
{return or__3548__auto____3813;
} else
{var or__3548__auto____3814 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3814))
{return or__3548__auto____3814;
} else
{var or__3548__auto____3815 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3815))
{return or__3548__auto____3815;
} else
{var or__3548__auto____3816 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3816))
{return or__3548__auto____3816;
} else
{var or__3548__auto____3817 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3817))
{return or__3548__auto____3817;
} else
{var or__3548__auto____3818 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3818))
{return or__3548__auto____3818;
} else
{var or__3548__auto____3819 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3819))
{return or__3548__auto____3819;
} else
{var or__3548__auto____3820 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3820))
{return or__3548__auto____3820;
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
var sp3__3854 = (function() { 
var G__3856__delegate = function (x,y,z,args){
var or__3548__auto____3821 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3821))
{return or__3548__auto____3821;
} else
{return cljs.core.some.call(null,(function (p1__3708_SHARP_){
var or__3548__auto____3822 = p1.call(null,p1__3708_SHARP_);

if(cljs.core.truth_(or__3548__auto____3822))
{return or__3548__auto____3822;
} else
{var or__3548__auto____3823 = p2.call(null,p1__3708_SHARP_);

if(cljs.core.truth_(or__3548__auto____3823))
{return or__3548__auto____3823;
} else
{return p3.call(null,p1__3708_SHARP_);
}
}
}),args);
}
};
var G__3856 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3856__delegate.call(this, x, y, z, args);
};
G__3856.cljs$lang$maxFixedArity = 3;
G__3856.cljs$lang$applyTo = (function (arglist__3857){
var x = cljs.core.first(arglist__3857);
var y = cljs.core.first(cljs.core.next(arglist__3857));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3857)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3857)));
return G__3856__delegate.call(this, x, y, z, args);
});
return G__3856;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3850.call(this);
case  1 :
return sp3__3851.call(this,x);
case  2 :
return sp3__3852.call(this,x,y);
case  3 :
return sp3__3853.call(this,x,y,z);
default:
return sp3__3854.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3854.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3832 = (function() { 
var G__3858__delegate = function (p1,p2,p3,ps){
var ps__3824 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3859 = (function (){
return null;
});
var spn__3860 = (function (x){
return cljs.core.some.call(null,(function (p1__3709_SHARP_){
return p1__3709_SHARP_.call(null,x);
}),ps__3824);
});
var spn__3861 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3710_SHARP_){
var or__3548__auto____3825 = p1__3710_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3825))
{return or__3548__auto____3825;
} else
{return p1__3710_SHARP_.call(null,y);
}
}),ps__3824);
});
var spn__3862 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3711_SHARP_){
var or__3548__auto____3826 = p1__3711_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3826))
{return or__3548__auto____3826;
} else
{var or__3548__auto____3827 = p1__3711_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3827))
{return or__3548__auto____3827;
} else
{return p1__3711_SHARP_.call(null,z);
}
}
}),ps__3824);
});
var spn__3863 = (function() { 
var G__3865__delegate = function (x,y,z,args){
var or__3548__auto____3828 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3828))
{return or__3548__auto____3828;
} else
{return cljs.core.some.call(null,(function (p1__3712_SHARP_){
return cljs.core.some.call(null,p1__3712_SHARP_,args);
}),ps__3824);
}
};
var G__3865 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3865__delegate.call(this, x, y, z, args);
};
G__3865.cljs$lang$maxFixedArity = 3;
G__3865.cljs$lang$applyTo = (function (arglist__3866){
var x = cljs.core.first(arglist__3866);
var y = cljs.core.first(cljs.core.next(arglist__3866));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3866)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3866)));
return G__3865__delegate.call(this, x, y, z, args);
});
return G__3865;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3859.call(this);
case  1 :
return spn__3860.call(this,x);
case  2 :
return spn__3861.call(this,x,y);
case  3 :
return spn__3862.call(this,x,y,z);
default:
return spn__3863.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3863.cljs$lang$applyTo;
return spn;
})()
};
var G__3858 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3858__delegate.call(this, p1, p2, p3, ps);
};
G__3858.cljs$lang$maxFixedArity = 3;
G__3858.cljs$lang$applyTo = (function (arglist__3867){
var p1 = cljs.core.first(arglist__3867);
var p2 = cljs.core.first(cljs.core.next(arglist__3867));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3867)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3867)));
return G__3858__delegate.call(this, p1, p2, p3, ps);
});
return G__3858;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3829.call(this,p1);
case  2 :
return some_fn__3830.call(this,p1,p2);
case  3 :
return some_fn__3831.call(this,p1,p2,p3);
default:
return some_fn__3832.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3832.cljs$lang$applyTo;
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
var map__3880 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3868 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3868))
{var s__3869 = temp__3698__auto____3868;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3869)),map.call(null,f,cljs.core.rest.call(null,s__3869)));
} else
{return null;
}
})));
});
var map__3881 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3870 = cljs.core.seq.call(null,c1);
var s2__3871 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3872 = s1__3870;

if(cljs.core.truth_(and__3546__auto____3872))
{return s2__3871;
} else
{return and__3546__auto____3872;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3870),cljs.core.first.call(null,s2__3871)),map.call(null,f,cljs.core.rest.call(null,s1__3870),cljs.core.rest.call(null,s2__3871)));
} else
{return null;
}
})));
});
var map__3882 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3873 = cljs.core.seq.call(null,c1);
var s2__3874 = cljs.core.seq.call(null,c2);
var s3__3875 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3876 = s1__3873;

if(cljs.core.truth_(and__3546__auto____3876))
{var and__3546__auto____3877 = s2__3874;

if(cljs.core.truth_(and__3546__auto____3877))
{return s3__3875;
} else
{return and__3546__auto____3877;
}
} else
{return and__3546__auto____3876;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3873),cljs.core.first.call(null,s2__3874),cljs.core.first.call(null,s3__3875)),map.call(null,f,cljs.core.rest.call(null,s1__3873),cljs.core.rest.call(null,s2__3874),cljs.core.rest.call(null,s3__3875)));
} else
{return null;
}
})));
});
var map__3883 = (function() { 
var G__3885__delegate = function (f,c1,c2,c3,colls){
var step__3879 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3878 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3878)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3878),step.call(null,map.call(null,cljs.core.rest,ss__3878)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3790_SHARP_){
return cljs.core.apply.call(null,f,p1__3790_SHARP_);
}),step__3879.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3885 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3885__delegate.call(this, f, c1, c2, c3, colls);
};
G__3885.cljs$lang$maxFixedArity = 4;
G__3885.cljs$lang$applyTo = (function (arglist__3886){
var f = cljs.core.first(arglist__3886);
var c1 = cljs.core.first(cljs.core.next(arglist__3886));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3886)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3886))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3886))));
return G__3885__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3885;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3880.call(this,f,c1);
case  3 :
return map__3881.call(this,f,c1,c2);
case  4 :
return map__3882.call(this,f,c1,c2,c3);
default:
return map__3883.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3883.cljs$lang$applyTo;
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
{var temp__3698__auto____3887 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3887))
{var s__3888 = temp__3698__auto____3887;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3888),take.call(null,(n - 1),cljs.core.rest.call(null,s__3888)));
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
var step__3891 = (function (n,coll){
while(true){
var s__3889 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3890 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3890))
{return s__3889;
} else
{return and__3546__auto____3890;
}
})()))
{{
var G__3892 = (n - 1);
var G__3893 = cljs.core.rest.call(null,s__3889);
n = G__3892;
coll = G__3893;
continue;
}
} else
{return s__3889;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3891.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3894 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3895 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3894.call(this,n);
case  2 :
return drop_last__3895.call(this,n,s);
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
var s__3897 = cljs.core.seq.call(null,coll);
var lead__3898 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3898))
{{
var G__3899 = cljs.core.next.call(null,s__3897);
var G__3900 = cljs.core.next.call(null,lead__3898);
s__3897 = G__3899;
lead__3898 = G__3900;
continue;
}
} else
{return s__3897;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3903 = (function (pred,coll){
while(true){
var s__3901 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3902 = s__3901;

if(cljs.core.truth_(and__3546__auto____3902))
{return pred.call(null,cljs.core.first.call(null,s__3901));
} else
{return and__3546__auto____3902;
}
})()))
{{
var G__3904 = pred;
var G__3905 = cljs.core.rest.call(null,s__3901);
pred = G__3904;
coll = G__3905;
continue;
}
} else
{return s__3901;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3903.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3906 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3906))
{var s__3907 = temp__3698__auto____3906;

return cljs.core.concat.call(null,s__3907,cycle.call(null,s__3907));
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
var repeat__3908 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3909 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3908.call(this,n);
case  2 :
return repeat__3909.call(this,n,x);
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
var repeatedly__3911 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3912 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3911.call(this,n);
case  2 :
return repeatedly__3912.call(this,n,f);
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
var interleave__3918 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3914 = cljs.core.seq.call(null,c1);
var s2__3915 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3916 = s1__3914;

if(cljs.core.truth_(and__3546__auto____3916))
{return s2__3915;
} else
{return and__3546__auto____3916;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3914),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3915),interleave.call(null,cljs.core.rest.call(null,s1__3914),cljs.core.rest.call(null,s2__3915))));
} else
{return null;
}
})));
});
var interleave__3919 = (function() { 
var G__3921__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3917 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3917)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3917),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3917)));
} else
{return null;
}
})));
};
var G__3921 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3921__delegate.call(this, c1, c2, colls);
};
G__3921.cljs$lang$maxFixedArity = 2;
G__3921.cljs$lang$applyTo = (function (arglist__3922){
var c1 = cljs.core.first(arglist__3922);
var c2 = cljs.core.first(cljs.core.next(arglist__3922));
var colls = cljs.core.rest(cljs.core.next(arglist__3922));
return G__3921__delegate.call(this, c1, c2, colls);
});
return G__3921;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3918.call(this,c1,c2);
default:
return interleave__3919.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3919.cljs$lang$applyTo;
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
var cat__3925 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3923 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3923))
{var coll__3924 = temp__3695__auto____3923;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3924),cat.call(null,cljs.core.rest.call(null,coll__3924),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3925.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3926 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3927 = (function() { 
var G__3929__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3929 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3929__delegate.call(this, f, coll, colls);
};
G__3929.cljs$lang$maxFixedArity = 2;
G__3929.cljs$lang$applyTo = (function (arglist__3930){
var f = cljs.core.first(arglist__3930);
var coll = cljs.core.first(cljs.core.next(arglist__3930));
var colls = cljs.core.rest(cljs.core.next(arglist__3930));
return G__3929__delegate.call(this, f, coll, colls);
});
return G__3929;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3926.call(this,f,coll);
default:
return mapcat__3927.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3927.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3931 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3931))
{var s__3932 = temp__3698__auto____3931;

var f__3933 = cljs.core.first.call(null,s__3932);
var r__3934 = cljs.core.rest.call(null,s__3932);

if(cljs.core.truth_(pred.call(null,f__3933)))
{return cljs.core.cons.call(null,f__3933,filter.call(null,pred,r__3934));
} else
{return filter.call(null,pred,r__3934);
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
var walk__3936 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3936.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3935_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3935_SHARP_));
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
var partition__3943 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3944 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3937 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3937))
{var s__3938 = temp__3698__auto____3937;

var p__3939 = cljs.core.take.call(null,n,s__3938);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3939))))
{return cljs.core.cons.call(null,p__3939,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3938)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3945 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3940 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3940))
{var s__3941 = temp__3698__auto____3940;

var p__3942 = cljs.core.take.call(null,n,s__3941);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3942))))
{return cljs.core.cons.call(null,p__3942,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3941)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3942,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3943.call(this,n,step);
case  3 :
return partition__3944.call(this,n,step,pad);
case  4 :
return partition__3945.call(this,n,step,pad,coll);
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
var get_in__3951 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3952 = (function (m,ks,not_found){
var sentinel__3947 = cljs.core.lookup_sentinel;
var m__3948 = m;
var ks__3949 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3949))
{var m__3950 = cljs.core.get.call(null,m__3948,cljs.core.first.call(null,ks__3949),sentinel__3947);

if(cljs.core.truth_((sentinel__3947 === m__3950)))
{return not_found;
} else
{{
var G__3954 = sentinel__3947;
var G__3955 = m__3950;
var G__3956 = cljs.core.next.call(null,ks__3949);
sentinel__3947 = G__3954;
m__3948 = G__3955;
ks__3949 = G__3956;
continue;
}
}
} else
{return m__3948;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3951.call(this,m,ks);
case  3 :
return get_in__3952.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3957,v){
var vec__3958__3959 = p__3957;
var k__3960 = cljs.core.nth.call(null,vec__3958__3959,0,null);
var ks__3961 = cljs.core.nthnext.call(null,vec__3958__3959,1);

if(cljs.core.truth_(ks__3961))
{return cljs.core.assoc.call(null,m,k__3960,assoc_in.call(null,cljs.core.get.call(null,m,k__3960),ks__3961,v));
} else
{return cljs.core.assoc.call(null,m,k__3960,v);
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
var update_in__delegate = function (m,p__3962,f,args){
var vec__3963__3964 = p__3962;
var k__3965 = cljs.core.nth.call(null,vec__3963__3964,0,null);
var ks__3966 = cljs.core.nthnext.call(null,vec__3963__3964,1);

if(cljs.core.truth_(ks__3966))
{return cljs.core.assoc.call(null,m,k__3965,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3965),ks__3966,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3965,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3965),args));
}
};
var update_in = function (m,p__3962,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3962, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3967){
var m = cljs.core.first(arglist__3967);
var p__3962 = cljs.core.first(cljs.core.next(arglist__3967));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3967)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3967)));
return update_in__delegate.call(this, m, p__3962, f, args);
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
var this__3968 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3995 = null;
var G__3995__3996 = (function (coll,k){
var this__3969 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3995__3997 = (function (coll,k,not_found){
var this__3970 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3995 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3995__3996.call(this,coll,k);
case  3 :
return G__3995__3997.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3995;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3971 = this;
var new_array__3972 = cljs.core.aclone.call(null,this__3971.array);

(new_array__3972[k] = v);
return (new cljs.core.Vector(this__3971.meta,new_array__3972));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__3999 = null;
var G__3999__4000 = (function (coll,k){
var this__3973 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__3999__4001 = (function (coll,k,not_found){
var this__3974 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__3999 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3999__4000.call(this,coll,k);
case  3 :
return G__3999__4001.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3999;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3975 = this;
var new_array__3976 = cljs.core.aclone.call(null,this__3975.array);

new_array__3976.push(o);
return (new cljs.core.Vector(this__3975.meta,new_array__3976));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4003 = null;
var G__4003__4004 = (function (v,f){
var this__3977 = this;
return cljs.core.ci_reduce.call(null,this__3977.array,f);
});
var G__4003__4005 = (function (v,f,start){
var this__3978 = this;
return cljs.core.ci_reduce.call(null,this__3978.array,f,start);
});
G__4003 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4003__4004.call(this,v,f);
case  3 :
return G__4003__4005.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4003;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3979 = this;
if(cljs.core.truth_((this__3979.array.length > 0)))
{var vector_seq__3980 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3979.array.length)))
{return cljs.core.cons.call(null,(this__3979.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3980.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3981 = this;
return this__3981.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3982 = this;
var count__3983 = this__3982.array.length;

if(cljs.core.truth_((count__3983 > 0)))
{return (this__3982.array[(count__3983 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3984 = this;
if(cljs.core.truth_((this__3984.array.length > 0)))
{var new_array__3985 = cljs.core.aclone.call(null,this__3984.array);

new_array__3985.pop();
return (new cljs.core.Vector(this__3984.meta,new_array__3985));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3986 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3987 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3988 = this;
return (new cljs.core.Vector(meta,this__3988.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3989 = this;
return this__3989.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4007 = null;
var G__4007__4008 = (function (coll,n){
var this__3990 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3991 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3991))
{return (n < this__3990.array.length);
} else
{return and__3546__auto____3991;
}
})()))
{return (this__3990.array[n]);
} else
{return null;
}
});
var G__4007__4009 = (function (coll,n,not_found){
var this__3992 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3993 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3993))
{return (n < this__3992.array.length);
} else
{return and__3546__auto____3993;
}
})()))
{return (this__3992.array[n]);
} else
{return not_found;
}
});
G__4007 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4007__4008.call(this,coll,n);
case  3 :
return G__4007__4009.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4007;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3994 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3994.meta);
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
vector.cljs$lang$applyTo = (function (arglist__4011){
var args = cljs.core.seq( arglist__4011 );;
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
var this__4012 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4034 = null;
var G__4034__4035 = (function (coll,k){
var this__4013 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4034__4036 = (function (coll,k,not_found){
var this__4014 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4034 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4034__4035.call(this,coll,k);
case  3 :
return G__4034__4036.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4034;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4015 = this;
var v_pos__4016 = (this__4015.start + key);

return (new cljs.core.Subvec(this__4015.meta,cljs.core._assoc.call(null,this__4015.v,v_pos__4016,val),this__4015.start,((this__4015.end > (v_pos__4016 + 1)) ? this__4015.end : (v_pos__4016 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4038 = null;
var G__4038__4039 = (function (coll,k){
var this__4017 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4038__4040 = (function (coll,k,not_found){
var this__4018 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4038 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4038__4039.call(this,coll,k);
case  3 :
return G__4038__4040.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4038;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4019 = this;
return (new cljs.core.Subvec(this__4019.meta,cljs.core._assoc_n.call(null,this__4019.v,this__4019.end,o),this__4019.start,(this__4019.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4042 = null;
var G__4042__4043 = (function (coll,f){
var this__4020 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4042__4044 = (function (coll,f,start){
var this__4021 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4042 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4042__4043.call(this,coll,f);
case  3 :
return G__4042__4044.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4042;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4022 = this;
var subvec_seq__4023 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4022.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4022.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4023.call(null,this__4022.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4024 = this;
return (this__4024.end - this__4024.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4025 = this;
return cljs.core._nth.call(null,this__4025.v,(this__4025.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4026 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4026.start,this__4026.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4026.meta,this__4026.v,this__4026.start,(this__4026.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4027 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4028 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4029 = this;
return (new cljs.core.Subvec(meta,this__4029.v,this__4029.start,this__4029.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4030 = this;
return this__4030.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4046 = null;
var G__4046__4047 = (function (coll,n){
var this__4031 = this;
return cljs.core._nth.call(null,this__4031.v,(this__4031.start + n));
});
var G__4046__4048 = (function (coll,n,not_found){
var this__4032 = this;
return cljs.core._nth.call(null,this__4032.v,(this__4032.start + n),not_found);
});
G__4046 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4046__4047.call(this,coll,n);
case  3 :
return G__4046__4048.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4046;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4033 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4033.meta);
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
var subvec__4050 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4051 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4050.call(this,v,start);
case  3 :
return subvec__4051.call(this,v,start,end);
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
var this__4053 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4054 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4055 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4056 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4056.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4057 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4058 = this;
return cljs.core._first.call(null,this__4058.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4059 = this;
var temp__3695__auto____4060 = cljs.core.next.call(null,this__4059.front);

if(cljs.core.truth_(temp__3695__auto____4060))
{var f1__4061 = temp__3695__auto____4060;

return (new cljs.core.PersistentQueueSeq(this__4059.meta,f1__4061,this__4059.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__4059.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4059.meta,this__4059.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4062 = this;
return this__4062.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4063 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4063.front,this__4063.rear));
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
var this__4064 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4065 = this;
if(cljs.core.truth_(this__4065.front))
{return (new cljs.core.PersistentQueue(this__4065.meta,(this__4065.count + 1),this__4065.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4066 = this__4065.rear;

if(cljs.core.truth_(or__3548__auto____4066))
{return or__3548__auto____4066;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4065.meta,(this__4065.count + 1),cljs.core.conj.call(null,this__4065.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4067 = this;
var rear__4068 = cljs.core.seq.call(null,this__4067.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4069 = this__4067.front;

if(cljs.core.truth_(or__3548__auto____4069))
{return or__3548__auto____4069;
} else
{return rear__4068;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4067.front,cljs.core.seq.call(null,rear__4068)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4070 = this;
return this__4070.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4071 = this;
return cljs.core._first.call(null,this__4071.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4072 = this;
if(cljs.core.truth_(this__4072.front))
{var temp__3695__auto____4073 = cljs.core.next.call(null,this__4072.front);

if(cljs.core.truth_(temp__3695__auto____4073))
{var f1__4074 = temp__3695__auto____4073;

return (new cljs.core.PersistentQueue(this__4072.meta,(this__4072.count - 1),f1__4074,this__4072.rear));
} else
{return (new cljs.core.PersistentQueue(this__4072.meta,(this__4072.count - 1),cljs.core.seq.call(null,this__4072.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4075 = this;
return cljs.core.first.call(null,this__4075.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4076 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4077 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4078 = this;
return (new cljs.core.PersistentQueue(meta,this__4078.count,this__4078.front,this__4078.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4079 = this;
return this__4079.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4080 = this;
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
var this__4081 = this;
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
var len__4082 = array.length;

var i__4083 = 0;

while(true){
if(cljs.core.truth_((i__4083 < len__4082)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4083]))))
{return i__4083;
} else
{{
var G__4084 = (i__4083 + incr);
i__4083 = G__4084;
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
var obj_map_contains_key_QMARK___4086 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4087 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4085 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4085))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4085;
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
return obj_map_contains_key_QMARK___4086.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4087.call(this,k,strobj,true_val,false_val);
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
var this__4090 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4111 = null;
var G__4111__4112 = (function (coll,k){
var this__4091 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4111__4113 = (function (coll,k,not_found){
var this__4092 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4092.strobj,(this__4092.strobj[k]),not_found);
});
G__4111 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4111__4112.call(this,coll,k);
case  3 :
return G__4111__4113.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4111;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4093 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4094 = goog.object.clone.call(null,this__4093.strobj);
var overwrite_QMARK___4095 = new_strobj__4094.hasOwnProperty(k);

(new_strobj__4094[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4095))
{return (new cljs.core.ObjMap(this__4093.meta,this__4093.keys,new_strobj__4094));
} else
{var new_keys__4096 = cljs.core.aclone.call(null,this__4093.keys);

new_keys__4096.push(k);
return (new cljs.core.ObjMap(this__4093.meta,new_keys__4096,new_strobj__4094));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4093.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4097 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4097.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4115 = null;
var G__4115__4116 = (function (coll,k){
var this__4098 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4115__4117 = (function (coll,k,not_found){
var this__4099 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4115 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4115__4116.call(this,coll,k);
case  3 :
return G__4115__4117.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4115;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4100 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4101 = this;
if(cljs.core.truth_((this__4101.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4089_SHARP_){
return cljs.core.vector.call(null,p1__4089_SHARP_,(this__4101.strobj[p1__4089_SHARP_]));
}),this__4101.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4102 = this;
return this__4102.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4103 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4104 = this;
return (new cljs.core.ObjMap(meta,this__4104.keys,this__4104.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4105 = this;
return this__4105.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4106 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4106.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4107 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4108 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4108))
{return this__4107.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4108;
}
})()))
{var new_keys__4109 = cljs.core.aclone.call(null,this__4107.keys);
var new_strobj__4110 = goog.object.clone.call(null,this__4107.strobj);

new_keys__4109.splice(cljs.core.scan_array.call(null,1,k,new_keys__4109),1);
cljs.core.js_delete.call(null,new_strobj__4110,k);
return (new cljs.core.ObjMap(this__4107.meta,new_keys__4109,new_strobj__4110));
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
var this__4120 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4152 = null;
var G__4152__4153 = (function (coll,k){
var this__4121 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4152__4154 = (function (coll,k,not_found){
var this__4122 = this;
var bucket__4123 = (this__4122.hashobj[cljs.core.hash.call(null,k)]);
var i__4124 = (cljs.core.truth_(bucket__4123)?cljs.core.scan_array.call(null,2,k,bucket__4123):null);

if(cljs.core.truth_(i__4124))
{return (bucket__4123[(i__4124 + 1)]);
} else
{return not_found;
}
});
G__4152 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4152__4153.call(this,coll,k);
case  3 :
return G__4152__4154.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4152;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4125 = this;
var h__4126 = cljs.core.hash.call(null,k);
var bucket__4127 = (this__4125.hashobj[h__4126]);

if(cljs.core.truth_(bucket__4127))
{var new_bucket__4128 = cljs.core.aclone.call(null,bucket__4127);
var new_hashobj__4129 = goog.object.clone.call(null,this__4125.hashobj);

(new_hashobj__4129[h__4126] = new_bucket__4128);
var temp__3695__auto____4130 = cljs.core.scan_array.call(null,2,k,new_bucket__4128);

if(cljs.core.truth_(temp__3695__auto____4130))
{var i__4131 = temp__3695__auto____4130;

(new_bucket__4128[(i__4131 + 1)] = v);
return (new cljs.core.HashMap(this__4125.meta,this__4125.count,new_hashobj__4129));
} else
{new_bucket__4128.push(k,v);
return (new cljs.core.HashMap(this__4125.meta,(this__4125.count + 1),new_hashobj__4129));
}
} else
{var new_hashobj__4132 = goog.object.clone.call(null,this__4125.hashobj);

(new_hashobj__4132[h__4126] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__4125.meta,(this__4125.count + 1),new_hashobj__4132));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4133 = this;
var bucket__4134 = (this__4133.hashobj[cljs.core.hash.call(null,k)]);
var i__4135 = (cljs.core.truth_(bucket__4134)?cljs.core.scan_array.call(null,2,k,bucket__4134):null);

if(cljs.core.truth_(i__4135))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4156 = null;
var G__4156__4157 = (function (coll,k){
var this__4136 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4156__4158 = (function (coll,k,not_found){
var this__4137 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4156 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4156__4157.call(this,coll,k);
case  3 :
return G__4156__4158.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4156;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4138 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4139 = this;
if(cljs.core.truth_((this__4139.count > 0)))
{var hashes__4140 = cljs.core.js_keys.call(null,this__4139.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4119_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4139.hashobj[p1__4119_SHARP_])));
}),hashes__4140);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4141 = this;
return this__4141.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4142 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4143 = this;
return (new cljs.core.HashMap(meta,this__4143.count,this__4143.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4144 = this;
return this__4144.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4145 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4145.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4146 = this;
var h__4147 = cljs.core.hash.call(null,k);
var bucket__4148 = (this__4146.hashobj[h__4147]);
var i__4149 = (cljs.core.truth_(bucket__4148)?cljs.core.scan_array.call(null,2,k,bucket__4148):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4149)))
{return coll;
} else
{var new_hashobj__4150 = goog.object.clone.call(null,this__4146.hashobj);

if(cljs.core.truth_((3 > bucket__4148.length)))
{cljs.core.js_delete.call(null,new_hashobj__4150,h__4147);
} else
{var new_bucket__4151 = cljs.core.aclone.call(null,bucket__4148);

new_bucket__4151.splice(i__4149,2);
(new_hashobj__4150[h__4147] = new_bucket__4151);
}
return (new cljs.core.HashMap(this__4146.meta,(this__4146.count - 1),new_hashobj__4150));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4160 = ks.length;

var i__4161 = 0;
var out__4162 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4161 < len__4160)))
{{
var G__4163 = (i__4161 + 1);
var G__4164 = cljs.core.assoc.call(null,out__4162,(ks[i__4161]),(vs[i__4161]));
i__4161 = G__4163;
out__4162 = G__4164;
continue;
}
} else
{return out__4162;
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
var in$__4165 = cljs.core.seq.call(null,keyvals);
var out__4166 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4165))
{{
var G__4167 = cljs.core.nnext.call(null,in$__4165);
var G__4168 = cljs.core.assoc.call(null,out__4166,cljs.core.first.call(null,in$__4165),cljs.core.second.call(null,in$__4165));
in$__4165 = G__4167;
out__4166 = G__4168;
continue;
}
} else
{return out__4166;
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
hash_map.cljs$lang$applyTo = (function (arglist__4169){
var keyvals = cljs.core.seq( arglist__4169 );;
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
{return cljs.core.reduce.call(null,(function (p1__4170_SHARP_,p2__4171_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4172 = p1__4170_SHARP_;

if(cljs.core.truth_(or__3548__auto____4172))
{return or__3548__auto____4172;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4171_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__4173){
var maps = cljs.core.seq( arglist__4173 );;
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
{var merge_entry__4176 = (function (m,e){
var k__4174 = cljs.core.first.call(null,e);
var v__4175 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4174)))
{return cljs.core.assoc.call(null,m,k__4174,f.call(null,cljs.core.get.call(null,m,k__4174),v__4175));
} else
{return cljs.core.assoc.call(null,m,k__4174,v__4175);
}
});
var merge2__4178 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4176,(function (){var or__3548__auto____4177 = m1;

if(cljs.core.truth_(or__3548__auto____4177))
{return or__3548__auto____4177;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4178,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__4179){
var f = cljs.core.first(arglist__4179);
var maps = cljs.core.rest(arglist__4179);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4181 = cljs.core.ObjMap.fromObject([],{});
var keys__4182 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4182))
{var key__4183 = cljs.core.first.call(null,keys__4182);
var entry__4184 = cljs.core.get.call(null,map,key__4183,"﷐'user/not-found");

{
var G__4185 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4184,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__4181,key__4183,entry__4184):ret__4181);
var G__4186 = cljs.core.next.call(null,keys__4182);
ret__4181 = G__4185;
keys__4182 = G__4186;
continue;
}
} else
{return ret__4181;
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
var this__4187 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4202 = null;
var G__4202__4203 = (function (coll,v){
var this__4188 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4202__4204 = (function (coll,v,not_found){
var this__4189 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4189.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4202 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4202__4203.call(this,coll,v);
case  3 :
return G__4202__4204.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4202;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4206 = null;
var G__4206__4207 = (function (coll,k){
var this__4190 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4206__4208 = (function (coll,k,not_found){
var this__4191 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4206 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4206__4207.call(this,coll,k);
case  3 :
return G__4206__4208.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4206;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4192 = this;
return (new cljs.core.Set(this__4192.meta,cljs.core.assoc.call(null,this__4192.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4193 = this;
return cljs.core.keys.call(null,this__4193.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4194 = this;
return (new cljs.core.Set(this__4194.meta,cljs.core.dissoc.call(null,this__4194.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4195 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4196 = this;
var and__3546__auto____4197 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4197))
{var and__3546__auto____4198 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4198))
{return cljs.core.every_QMARK_.call(null,(function (p1__4180_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4180_SHARP_);
}),other);
} else
{return and__3546__auto____4198;
}
} else
{return and__3546__auto____4197;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4199 = this;
return (new cljs.core.Set(meta,this__4199.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4200 = this;
return this__4200.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4201 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4201.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4211 = cljs.core.seq.call(null,coll);
var out__4212 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4211))))
{{
var G__4213 = cljs.core.rest.call(null,in$__4211);
var G__4214 = cljs.core.conj.call(null,out__4212,cljs.core.first.call(null,in$__4211));
in$__4211 = G__4213;
out__4212 = G__4214;
continue;
}
} else
{return out__4212;
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
{var n__4215 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4216 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4216))
{var e__4217 = temp__3695__auto____4216;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4217));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4215,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4210_SHARP_){
var temp__3695__auto____4218 = cljs.core.find.call(null,smap,p1__4210_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4218))
{var e__4219 = temp__3695__auto____4218;

return cljs.core.second.call(null,e__4219);
} else
{return p1__4210_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4227 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4220,seen){
while(true){
var vec__4221__4222 = p__4220;
var f__4223 = cljs.core.nth.call(null,vec__4221__4222,0,null);
var xs__4224 = vec__4221__4222;

var temp__3698__auto____4225 = cljs.core.seq.call(null,xs__4224);

if(cljs.core.truth_(temp__3698__auto____4225))
{var s__4226 = temp__3698__auto____4225;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4223)))
{{
var G__4228 = cljs.core.rest.call(null,s__4226);
var G__4229 = seen;
p__4220 = G__4228;
seen = G__4229;
continue;
}
} else
{return cljs.core.cons.call(null,f__4223,step.call(null,cljs.core.rest.call(null,s__4226),cljs.core.conj.call(null,seen,f__4223)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4227.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4230 = cljs.core.Vector.fromArray([]);
var s__4231 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4231)))
{{
var G__4232 = cljs.core.conj.call(null,ret__4230,cljs.core.first.call(null,s__4231));
var G__4233 = cljs.core.next.call(null,s__4231);
ret__4230 = G__4232;
s__4231 = G__4233;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4230);
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
{if(cljs.core.truth_((function (){var or__3548__auto____4234 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4234))
{return or__3548__auto____4234;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4235 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4235 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4235 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____4236 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4236))
{return or__3548__auto____4236;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4237 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4237 > -1)))
{return cljs.core.subs.call(null,x,2,i__4237);
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
var map__4240 = cljs.core.ObjMap.fromObject([],{});
var ks__4241 = cljs.core.seq.call(null,keys);
var vs__4242 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4243 = ks__4241;

if(cljs.core.truth_(and__3546__auto____4243))
{return vs__4242;
} else
{return and__3546__auto____4243;
}
})()))
{{
var G__4244 = cljs.core.assoc.call(null,map__4240,cljs.core.first.call(null,ks__4241),cljs.core.first.call(null,vs__4242));
var G__4245 = cljs.core.next.call(null,ks__4241);
var G__4246 = cljs.core.next.call(null,vs__4242);
map__4240 = G__4244;
ks__4241 = G__4245;
vs__4242 = G__4246;
continue;
}
} else
{return map__4240;
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
var max_key__4249 = (function (k,x){
return x;
});
var max_key__4250 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4251 = (function() { 
var G__4253__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4238_SHARP_,p2__4239_SHARP_){
return max_key.call(null,k,p1__4238_SHARP_,p2__4239_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4253 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4253__delegate.call(this, k, x, y, more);
};
G__4253.cljs$lang$maxFixedArity = 3;
G__4253.cljs$lang$applyTo = (function (arglist__4254){
var k = cljs.core.first(arglist__4254);
var x = cljs.core.first(cljs.core.next(arglist__4254));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4254)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4254)));
return G__4253__delegate.call(this, k, x, y, more);
});
return G__4253;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4249.call(this,k,x);
case  3 :
return max_key__4250.call(this,k,x,y);
default:
return max_key__4251.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4251.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4255 = (function (k,x){
return x;
});
var min_key__4256 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4257 = (function() { 
var G__4259__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4247_SHARP_,p2__4248_SHARP_){
return min_key.call(null,k,p1__4247_SHARP_,p2__4248_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4259 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4259__delegate.call(this, k, x, y, more);
};
G__4259.cljs$lang$maxFixedArity = 3;
G__4259.cljs$lang$applyTo = (function (arglist__4260){
var k = cljs.core.first(arglist__4260);
var x = cljs.core.first(cljs.core.next(arglist__4260));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4260)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4260)));
return G__4259__delegate.call(this, k, x, y, more);
});
return G__4259;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4255.call(this,k,x);
case  3 :
return min_key__4256.call(this,k,x,y);
default:
return min_key__4257.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4257.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4263 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4264 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4261 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4261))
{var s__4262 = temp__3698__auto____4261;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4262),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4262)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4263.call(this,n,step);
case  3 :
return partition_all__4264.call(this,n,step,coll);
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
var temp__3698__auto____4266 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4266))
{var s__4267 = temp__3698__auto____4266;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4267))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4267),take_while.call(null,pred,cljs.core.rest.call(null,s__4267)));
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
var this__4268 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4269 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4285 = null;
var G__4285__4286 = (function (rng,f){
var this__4270 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4285__4287 = (function (rng,f,s){
var this__4271 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4285 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4285__4286.call(this,rng,f);
case  3 :
return G__4285__4287.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4285;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4272 = this;
var comp__4273 = (cljs.core.truth_((this__4272.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4273.call(null,this__4272.start,this__4272.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4274 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4274.end - this__4274.start) / this__4274.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4275 = this;
return this__4275.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4276 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4276.meta,(this__4276.start + this__4276.step),this__4276.end,this__4276.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4277 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4278 = this;
return (new cljs.core.Range(meta,this__4278.start,this__4278.end,this__4278.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4279 = this;
return this__4279.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4289 = null;
var G__4289__4290 = (function (rng,n){
var this__4280 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4280.start + (n * this__4280.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4281 = (this__4280.start > this__4280.end);

if(cljs.core.truth_(and__3546__auto____4281))
{return cljs.core._EQ_.call(null,this__4280.step,0);
} else
{return and__3546__auto____4281;
}
})()))
{return this__4280.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4289__4291 = (function (rng,n,not_found){
var this__4282 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4282.start + (n * this__4282.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4283 = (this__4282.start > this__4282.end);

if(cljs.core.truth_(and__3546__auto____4283))
{return cljs.core._EQ_.call(null,this__4282.step,0);
} else
{return and__3546__auto____4283;
}
})()))
{return this__4282.start;
} else
{return not_found;
}
}
});
G__4289 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4289__4290.call(this,rng,n);
case  3 :
return G__4289__4291.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4289;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4284 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4284.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4293 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4294 = (function (end){
return range.call(null,0,end,1);
});
var range__4295 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4296 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4293.call(this);
case  1 :
return range__4294.call(this,start);
case  2 :
return range__4295.call(this,start,end);
case  3 :
return range__4296.call(this,start,end,step);
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
var temp__3698__auto____4298 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4298))
{var s__4299 = temp__3698__auto____4298;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4299),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4299)));
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
var temp__3698__auto____4301 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4301))
{var s__4302 = temp__3698__auto____4301;

var fst__4303 = cljs.core.first.call(null,s__4302);
var fv__4304 = f.call(null,fst__4303);
var run__4305 = cljs.core.cons.call(null,fst__4303,cljs.core.take_while.call(null,(function (p1__4300_SHARP_){
return cljs.core._EQ_.call(null,fv__4304,f.call(null,p1__4300_SHARP_));
}),cljs.core.next.call(null,s__4302)));

return cljs.core.cons.call(null,run__4305,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4305),s__4302))));
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
var reductions__4320 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4316 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4316))
{var s__4317 = temp__3695__auto____4316;

return reductions.call(null,f,cljs.core.first.call(null,s__4317),cljs.core.rest.call(null,s__4317));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4321 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4318 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4318))
{var s__4319 = temp__3698__auto____4318;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4319)),cljs.core.rest.call(null,s__4319));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4320.call(this,f,init);
case  3 :
return reductions__4321.call(this,f,init,coll);
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
var juxt__4324 = (function (f){
return (function() {
var G__4329 = null;
var G__4329__4330 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4329__4331 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4329__4332 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4329__4333 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4329__4334 = (function() { 
var G__4336__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4336 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4336__delegate.call(this, x, y, z, args);
};
G__4336.cljs$lang$maxFixedArity = 3;
G__4336.cljs$lang$applyTo = (function (arglist__4337){
var x = cljs.core.first(arglist__4337);
var y = cljs.core.first(cljs.core.next(arglist__4337));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4337)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4337)));
return G__4336__delegate.call(this, x, y, z, args);
});
return G__4336;
})()
;
G__4329 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4329__4330.call(this);
case  1 :
return G__4329__4331.call(this,x);
case  2 :
return G__4329__4332.call(this,x,y);
case  3 :
return G__4329__4333.call(this,x,y,z);
default:
return G__4329__4334.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4329.cljs$lang$maxFixedArity = 3;
G__4329.cljs$lang$applyTo = G__4329__4334.cljs$lang$applyTo;
return G__4329;
})()
});
var juxt__4325 = (function (f,g){
return (function() {
var G__4338 = null;
var G__4338__4339 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4338__4340 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4338__4341 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4338__4342 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4338__4343 = (function() { 
var G__4345__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4345 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4345__delegate.call(this, x, y, z, args);
};
G__4345.cljs$lang$maxFixedArity = 3;
G__4345.cljs$lang$applyTo = (function (arglist__4346){
var x = cljs.core.first(arglist__4346);
var y = cljs.core.first(cljs.core.next(arglist__4346));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4346)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4346)));
return G__4345__delegate.call(this, x, y, z, args);
});
return G__4345;
})()
;
G__4338 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4338__4339.call(this);
case  1 :
return G__4338__4340.call(this,x);
case  2 :
return G__4338__4341.call(this,x,y);
case  3 :
return G__4338__4342.call(this,x,y,z);
default:
return G__4338__4343.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4338.cljs$lang$maxFixedArity = 3;
G__4338.cljs$lang$applyTo = G__4338__4343.cljs$lang$applyTo;
return G__4338;
})()
});
var juxt__4326 = (function (f,g,h){
return (function() {
var G__4347 = null;
var G__4347__4348 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4347__4349 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4347__4350 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4347__4351 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4347__4352 = (function() { 
var G__4354__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4354 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4354__delegate.call(this, x, y, z, args);
};
G__4354.cljs$lang$maxFixedArity = 3;
G__4354.cljs$lang$applyTo = (function (arglist__4355){
var x = cljs.core.first(arglist__4355);
var y = cljs.core.first(cljs.core.next(arglist__4355));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4355)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4355)));
return G__4354__delegate.call(this, x, y, z, args);
});
return G__4354;
})()
;
G__4347 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4347__4348.call(this);
case  1 :
return G__4347__4349.call(this,x);
case  2 :
return G__4347__4350.call(this,x,y);
case  3 :
return G__4347__4351.call(this,x,y,z);
default:
return G__4347__4352.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4347.cljs$lang$maxFixedArity = 3;
G__4347.cljs$lang$applyTo = G__4347__4352.cljs$lang$applyTo;
return G__4347;
})()
});
var juxt__4327 = (function() { 
var G__4356__delegate = function (f,g,h,fs){
var fs__4323 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4357 = null;
var G__4357__4358 = (function (){
return cljs.core.reduce.call(null,(function (p1__4306_SHARP_,p2__4307_SHARP_){
return cljs.core.conj.call(null,p1__4306_SHARP_,p2__4307_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4323);
});
var G__4357__4359 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4308_SHARP_,p2__4309_SHARP_){
return cljs.core.conj.call(null,p1__4308_SHARP_,p2__4309_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4323);
});
var G__4357__4360 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4310_SHARP_,p2__4311_SHARP_){
return cljs.core.conj.call(null,p1__4310_SHARP_,p2__4311_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4323);
});
var G__4357__4361 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4312_SHARP_,p2__4313_SHARP_){
return cljs.core.conj.call(null,p1__4312_SHARP_,p2__4313_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4323);
});
var G__4357__4362 = (function() { 
var G__4364__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4314_SHARP_,p2__4315_SHARP_){
return cljs.core.conj.call(null,p1__4314_SHARP_,cljs.core.apply.call(null,p2__4315_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4323);
};
var G__4364 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4364__delegate.call(this, x, y, z, args);
};
G__4364.cljs$lang$maxFixedArity = 3;
G__4364.cljs$lang$applyTo = (function (arglist__4365){
var x = cljs.core.first(arglist__4365);
var y = cljs.core.first(cljs.core.next(arglist__4365));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4365)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4365)));
return G__4364__delegate.call(this, x, y, z, args);
});
return G__4364;
})()
;
G__4357 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4357__4358.call(this);
case  1 :
return G__4357__4359.call(this,x);
case  2 :
return G__4357__4360.call(this,x,y);
case  3 :
return G__4357__4361.call(this,x,y,z);
default:
return G__4357__4362.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4357.cljs$lang$maxFixedArity = 3;
G__4357.cljs$lang$applyTo = G__4357__4362.cljs$lang$applyTo;
return G__4357;
})()
};
var G__4356 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4356__delegate.call(this, f, g, h, fs);
};
G__4356.cljs$lang$maxFixedArity = 3;
G__4356.cljs$lang$applyTo = (function (arglist__4366){
var f = cljs.core.first(arglist__4366);
var g = cljs.core.first(cljs.core.next(arglist__4366));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4366)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4366)));
return G__4356__delegate.call(this, f, g, h, fs);
});
return G__4356;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4324.call(this,f);
case  2 :
return juxt__4325.call(this,f,g);
case  3 :
return juxt__4326.call(this,f,g,h);
default:
return juxt__4327.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4327.cljs$lang$applyTo;
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
var dorun__4368 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4371 = cljs.core.next.call(null,coll);
coll = G__4371;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4369 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4367 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4367))
{return (n > 0);
} else
{return and__3546__auto____4367;
}
})()))
{{
var G__4372 = (n - 1);
var G__4373 = cljs.core.next.call(null,coll);
n = G__4372;
coll = G__4373;
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
return dorun__4368.call(this,n);
case  2 :
return dorun__4369.call(this,n,coll);
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
var doall__4374 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4375 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4374.call(this,n);
case  2 :
return doall__4375.call(this,n,coll);
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
var matches__4377 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4377),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4377),1)))
{return cljs.core.first.call(null,matches__4377);
} else
{return cljs.core.vec.call(null,matches__4377);
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
var matches__4378 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__4378)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4378),1)))
{return cljs.core.first.call(null,matches__4378);
} else
{return cljs.core.vec.call(null,matches__4378);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4379 = cljs.core.re_find.call(null,re,s);
var match_idx__4380 = s.search(re);
var match_str__4381 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4379))?cljs.core.first.call(null,match_data__4379):match_data__4379);
var post_match__4382 = cljs.core.subs.call(null,s,(match_idx__4380 + cljs.core.count.call(null,match_str__4381)));

if(cljs.core.truth_(match_data__4379))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4379,re_seq.call(null,re,post_match__4382));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4383_SHARP_){
return print_one.call(null,p1__4383_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4384 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____4384))
{var and__3546__auto____4388 = (function (){var x__445__auto____4385 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4386 = x__445__auto____4385;

if(cljs.core.truth_(and__3546__auto____4386))
{var and__3546__auto____4387 = x__445__auto____4385.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4387))
{return cljs.core.not.call(null,x__445__auto____4385.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4387;
}
} else
{return and__3546__auto____4386;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____4385);
}
})();

if(cljs.core.truth_(and__3546__auto____4388))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4388;
}
} else
{return and__3546__auto____4384;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____4389 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4390 = x__445__auto____4389;

if(cljs.core.truth_(and__3546__auto____4390))
{var and__3546__auto____4391 = x__445__auto____4389.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4391))
{return cljs.core.not.call(null,x__445__auto____4389.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4391;
}
} else
{return and__3546__auto____4390;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____4389);
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
var first_obj__4392 = cljs.core.first.call(null,objs);
var sb__4393 = (new goog.string.StringBuffer());

var G__4394__4395 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4394__4395))
{var obj__4396 = cljs.core.first.call(null,G__4394__4395);
var G__4394__4397 = G__4394__4395;

while(true){
if(cljs.core.truth_((obj__4396 === first_obj__4392)))
{} else
{sb__4393.append(" ");
}
var G__4398__4399 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4396,opts));

if(cljs.core.truth_(G__4398__4399))
{var string__4400 = cljs.core.first.call(null,G__4398__4399);
var G__4398__4401 = G__4398__4399;

while(true){
sb__4393.append(string__4400);
var temp__3698__auto____4402 = cljs.core.next.call(null,G__4398__4401);

if(cljs.core.truth_(temp__3698__auto____4402))
{var G__4398__4403 = temp__3698__auto____4402;

{
var G__4406 = cljs.core.first.call(null,G__4398__4403);
var G__4407 = G__4398__4403;
string__4400 = G__4406;
G__4398__4401 = G__4407;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4404 = cljs.core.next.call(null,G__4394__4397);

if(cljs.core.truth_(temp__3698__auto____4404))
{var G__4394__4405 = temp__3698__auto____4404;

{
var G__4408 = cljs.core.first.call(null,G__4394__4405);
var G__4409 = G__4394__4405;
obj__4396 = G__4408;
G__4394__4397 = G__4409;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__4393);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4410 = cljs.core.first.call(null,objs);

var G__4411__4412 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4411__4412))
{var obj__4413 = cljs.core.first.call(null,G__4411__4412);
var G__4411__4414 = G__4411__4412;

while(true){
if(cljs.core.truth_((obj__4413 === first_obj__4410)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4415__4416 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4413,opts));

if(cljs.core.truth_(G__4415__4416))
{var string__4417 = cljs.core.first.call(null,G__4415__4416);
var G__4415__4418 = G__4415__4416;

while(true){
cljs.core.string_print.call(null,string__4417);
var temp__3698__auto____4419 = cljs.core.next.call(null,G__4415__4418);

if(cljs.core.truth_(temp__3698__auto____4419))
{var G__4415__4420 = temp__3698__auto____4419;

{
var G__4423 = cljs.core.first.call(null,G__4415__4420);
var G__4424 = G__4415__4420;
string__4417 = G__4423;
G__4415__4418 = G__4424;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4421 = cljs.core.next.call(null,G__4411__4414);

if(cljs.core.truth_(temp__3698__auto____4421))
{var G__4411__4422 = temp__3698__auto____4421;

{
var G__4425 = cljs.core.first.call(null,G__4411__4422);
var G__4426 = G__4411__4422;
obj__4413 = G__4425;
G__4411__4414 = G__4426;
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
pr_str.cljs$lang$applyTo = (function (arglist__4427){
var objs = cljs.core.seq( arglist__4427 );;
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
pr.cljs$lang$applyTo = (function (arglist__4428){
var objs = cljs.core.seq( arglist__4428 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__4429){
var objs = cljs.core.seq( arglist__4429 );;
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
println.cljs$lang$applyTo = (function (arglist__4430){
var objs = cljs.core.seq( arglist__4430 );;
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
prn.cljs$lang$applyTo = (function (arglist__4431){
var objs = cljs.core.seq( arglist__4431 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4432 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4432,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4433 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4433))
{var nspc__4434 = temp__3698__auto____4433;

return cljs.core.str.call(null,nspc__4434,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4435 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4435))
{var nspc__4436 = temp__3698__auto____4435;

return cljs.core.str.call(null,nspc__4436,"/");
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
var pr_pair__4437 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4437,"{",", ","}",opts,coll);
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
var this__4438 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4439 = this;
var G__4440__4441 = cljs.core.seq.call(null,this__4439.watches);

if(cljs.core.truth_(G__4440__4441))
{var G__4443__4445 = cljs.core.first.call(null,G__4440__4441);
var vec__4444__4446 = G__4443__4445;
var key__4447 = cljs.core.nth.call(null,vec__4444__4446,0,null);
var f__4448 = cljs.core.nth.call(null,vec__4444__4446,1,null);
var G__4440__4449 = G__4440__4441;

var G__4443__4450 = G__4443__4445;
var G__4440__4451 = G__4440__4449;

while(true){
var vec__4452__4453 = G__4443__4450;
var key__4454 = cljs.core.nth.call(null,vec__4452__4453,0,null);
var f__4455 = cljs.core.nth.call(null,vec__4452__4453,1,null);
var G__4440__4456 = G__4440__4451;

f__4455.call(null,key__4454,this$,oldval,newval);
var temp__3698__auto____4457 = cljs.core.next.call(null,G__4440__4456);

if(cljs.core.truth_(temp__3698__auto____4457))
{var G__4440__4458 = temp__3698__auto____4457;

{
var G__4465 = cljs.core.first.call(null,G__4440__4458);
var G__4466 = G__4440__4458;
G__4443__4450 = G__4465;
G__4440__4451 = G__4466;
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
var this__4459 = this;
return this$.watches = cljs.core.assoc.call(null,this__4459.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4460 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4460.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4461 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4461.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4462 = this;
return this__4462.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4463 = this;
return this__4463.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4464 = this;
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
var atom__4473 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4474 = (function() { 
var G__4476__delegate = function (x,p__4467){
var map__4468__4469 = p__4467;
var map__4468__4470 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4468__4469))?cljs.core.apply.call(null,cljs.core.hash_map,map__4468__4469):map__4468__4469);
var validator__4471 = cljs.core.get.call(null,map__4468__4470,"﷐'validator");
var meta__4472 = cljs.core.get.call(null,map__4468__4470,"﷐'meta");

return (new cljs.core.Atom(x,meta__4472,validator__4471,null));
};
var G__4476 = function (x,var_args){
var p__4467 = null;
if (goog.isDef(var_args)) {
  p__4467 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4476__delegate.call(this, x, p__4467);
};
G__4476.cljs$lang$maxFixedArity = 1;
G__4476.cljs$lang$applyTo = (function (arglist__4477){
var x = cljs.core.first(arglist__4477);
var p__4467 = cljs.core.rest(arglist__4477);
return G__4476__delegate.call(this, x, p__4467);
});
return G__4476;
})()
;
atom = function(x,var_args){
var p__4467 = var_args;
switch(arguments.length){
case  1 :
return atom__4473.call(this,x);
default:
return atom__4474.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4474.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4478 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4478))
{var validate__4479 = temp__3698__auto____4478;

if(cljs.core.truth_(validate__4479.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__4480 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4480,new_value);
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
var swap_BANG___4481 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4482 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4483 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4484 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4485 = (function() { 
var G__4487__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4487 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4487__delegate.call(this, a, f, x, y, z, more);
};
G__4487.cljs$lang$maxFixedArity = 5;
G__4487.cljs$lang$applyTo = (function (arglist__4488){
var a = cljs.core.first(arglist__4488);
var f = cljs.core.first(cljs.core.next(arglist__4488));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4488)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4488))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4488)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4488)))));
return G__4487__delegate.call(this, a, f, x, y, z, more);
});
return G__4487;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4481.call(this,a,f);
case  3 :
return swap_BANG___4482.call(this,a,f,x);
case  4 :
return swap_BANG___4483.call(this,a,f,x,y);
case  5 :
return swap_BANG___4484.call(this,a,f,x,y,z);
default:
return swap_BANG___4485.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4485.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4489){
var iref = cljs.core.first(arglist__4489);
var f = cljs.core.first(cljs.core.next(arglist__4489));
var args = cljs.core.rest(cljs.core.next(arglist__4489));
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
var gensym__4490 = (function (){
return gensym.call(null,"G__");
});
var gensym__4491 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4490.call(this);
case  1 :
return gensym__4491.call(this,prefix_string);
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
var this__4493 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__4493.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4494 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__4494.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__4494.state,this__4494.f);
}
return cljs.core.deref.call(null,this__4494.state);
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
delay.cljs$lang$applyTo = (function (arglist__4495){
var body = cljs.core.seq( arglist__4495 );;
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
var map__4496__4497 = options;
var map__4496__4498 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4496__4497))?cljs.core.apply.call(null,cljs.core.hash_map,map__4496__4497):map__4496__4497);
var keywordize_keys__4499 = cljs.core.get.call(null,map__4496__4498,"﷐'keywordize-keys");
var keyfn__4500 = (cljs.core.truth_(keywordize_keys__4499)?cljs.core.keyword:cljs.core.str);
var f__4506 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____4505 = (function iter__4501(s__4502){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4502__4503 = s__4502;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4502__4503)))
{var k__4504 = cljs.core.first.call(null,s__4502__4503);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__4500.call(null,k__4504),thisfn.call(null,(x[k__4504]))]),iter__4501.call(null,cljs.core.rest.call(null,s__4502__4503)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____4505.call(null,cljs.core.js_keys.call(null,x));
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

return f__4506.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4507){
var x = cljs.core.first(arglist__4507);
var options = cljs.core.rest(arglist__4507);
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
var mem__4508 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4512__delegate = function (args){
var temp__3695__auto____4509 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4508),args);

if(cljs.core.truth_(temp__3695__auto____4509))
{var v__4510 = temp__3695__auto____4509;

return v__4510;
} else
{var ret__4511 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4508,cljs.core.assoc,args,ret__4511);
return ret__4511;
}
};
var G__4512 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4512__delegate.call(this, args);
};
G__4512.cljs$lang$maxFixedArity = 0;
G__4512.cljs$lang$applyTo = (function (arglist__4513){
var args = cljs.core.seq( arglist__4513 );;
return G__4512__delegate.call(this, args);
});
return G__4512;
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
var trampoline__4515 = (function (f){
while(true){
var ret__4514 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4514)))
{{
var G__4518 = ret__4514;
f = G__4518;
continue;
}
} else
{return ret__4514;
}
break;
}
});
var trampoline__4516 = (function() { 
var G__4519__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4519 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4519__delegate.call(this, f, args);
};
G__4519.cljs$lang$maxFixedArity = 1;
G__4519.cljs$lang$applyTo = (function (arglist__4520){
var f = cljs.core.first(arglist__4520);
var args = cljs.core.rest(arglist__4520);
return G__4519__delegate.call(this, f, args);
});
return G__4519;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4515.call(this,f);
default:
return trampoline__4516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4516.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4521 = (function (){
return rand.call(null,1);
});
var rand__4522 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4521.call(this);
case  1 :
return rand__4522.call(this,n);
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
var k__4524 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4524,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4524,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___4533 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4534 = (function (h,child,parent){
var or__3548__auto____4525 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4525))
{return or__3548__auto____4525;
} else
{var or__3548__auto____4526 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4526))
{return or__3548__auto____4526;
} else
{var and__3546__auto____4527 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4527))
{var and__3546__auto____4528 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4528))
{var and__3546__auto____4529 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4529))
{var ret__4530 = true;
var i__4531 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4532 = cljs.core.not.call(null,ret__4530);

if(cljs.core.truth_(or__3548__auto____4532))
{return or__3548__auto____4532;
} else
{return cljs.core._EQ_.call(null,i__4531,cljs.core.count.call(null,parent));
}
})()))
{return ret__4530;
} else
{{
var G__4536 = isa_QMARK_.call(null,h,child.call(null,i__4531),parent.call(null,i__4531));
var G__4537 = (i__4531 + 1);
ret__4530 = G__4536;
i__4531 = G__4537;
continue;
}
}
break;
}
} else
{return and__3546__auto____4529;
}
} else
{return and__3546__auto____4528;
}
} else
{return and__3546__auto____4527;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4533.call(this,h,child);
case  3 :
return isa_QMARK___4534.call(this,h,child,parent);
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
var parents__4538 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4539 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4538.call(this,h);
case  2 :
return parents__4539.call(this,h,tag);
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
var ancestors__4541 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4542 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4541.call(this,h);
case  2 :
return ancestors__4542.call(this,h,tag);
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
var descendants__4544 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4545 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4544.call(this,h);
case  2 :
return descendants__4545.call(this,h,tag);
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
var derive__4555 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4556 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__4550 = "﷐'parents".call(null,h);
var td__4551 = "﷐'descendants".call(null,h);
var ta__4552 = "﷐'ancestors".call(null,h);
var tf__4553 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4554 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4550.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4552.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4552.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4550,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__4553.call(null,"﷐'ancestors".call(null,h),tag,td__4551,parent,ta__4552),"﷐'descendants":tf__4553.call(null,"﷐'descendants".call(null,h),parent,ta__4552,tag,td__4551)});
})());

if(cljs.core.truth_(or__3548__auto____4554))
{return or__3548__auto____4554;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4555.call(this,h,tag);
case  3 :
return derive__4556.call(this,h,tag,parent);
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
var underive__4562 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4563 = (function (h,tag,parent){
var parentMap__4558 = "﷐'parents".call(null,h);
var childsParents__4559 = (cljs.core.truth_(parentMap__4558.call(null,tag))?cljs.core.disj.call(null,parentMap__4558.call(null,tag),parent):cljs.core.set([]));
var newParents__4560 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4559))?cljs.core.assoc.call(null,parentMap__4558,tag,childsParents__4559):cljs.core.dissoc.call(null,parentMap__4558,tag));
var deriv_seq__4561 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4547_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4547_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4547_SHARP_),cljs.core.second.call(null,p1__4547_SHARP_)));
}),cljs.core.seq.call(null,newParents__4560)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4558.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4548_SHARP_,p2__4549_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4548_SHARP_,p2__4549_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4561));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4562.call(this,h,tag);
case  3 :
return underive__4563.call(this,h,tag,parent);
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
var xprefs__4565 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4567 = (cljs.core.truth_((function (){var and__3546__auto____4566 = xprefs__4565;

if(cljs.core.truth_(and__3546__auto____4566))
{return xprefs__4565.call(null,y);
} else
{return and__3546__auto____4566;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4567))
{return or__3548__auto____4567;
} else
{var or__3548__auto____4569 = (function (){var ps__4568 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4568) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4568),prefer_table)))
{} else
{}
{
var G__4572 = cljs.core.rest.call(null,ps__4568);
ps__4568 = G__4572;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4569))
{return or__3548__auto____4569;
} else
{var or__3548__auto____4571 = (function (){var ps__4570 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4570) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4570),y,prefer_table)))
{} else
{}
{
var G__4573 = cljs.core.rest.call(null,ps__4570);
ps__4570 = G__4573;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4571))
{return or__3548__auto____4571;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4574 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4574))
{return or__3548__auto____4574;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4583 = cljs.core.reduce.call(null,(function (be,p__4575){
var vec__4576__4577 = p__4575;
var k__4578 = cljs.core.nth.call(null,vec__4576__4577,0,null);
var ___4579 = cljs.core.nth.call(null,vec__4576__4577,1,null);
var e__4580 = vec__4576__4577;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4578)))
{var be2__4582 = (cljs.core.truth_((function (){var or__3548__auto____4581 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____4581))
{return or__3548__auto____4581;
} else
{return cljs.core.dominates.call(null,k__4578,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4580:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4582),k__4578,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4578," and ",cljs.core.first.call(null,be2__4582),", and neither is preferred")));
}
return be2__4582;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4583))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4583));
return cljs.core.second.call(null,best_entry__4583);
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
if(cljs.core.truth_((function (){var and__3546__auto____4584 = mf;

if(cljs.core.truth_(and__3546__auto____4584))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4584;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4585 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4585))
{return or__3548__auto____4585;
} else
{var or__3548__auto____4586 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4586))
{return or__3548__auto____4586;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4587 = mf;

if(cljs.core.truth_(and__3546__auto____4587))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4587;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4588 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4588))
{return or__3548__auto____4588;
} else
{var or__3548__auto____4589 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4589))
{return or__3548__auto____4589;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4590 = mf;

if(cljs.core.truth_(and__3546__auto____4590))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4590;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4591 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4591))
{return or__3548__auto____4591;
} else
{var or__3548__auto____4592 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4592))
{return or__3548__auto____4592;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4593 = mf;

if(cljs.core.truth_(and__3546__auto____4593))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4593;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4594 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4594))
{return or__3548__auto____4594;
} else
{var or__3548__auto____4595 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4595))
{return or__3548__auto____4595;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4596 = mf;

if(cljs.core.truth_(and__3546__auto____4596))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4596;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4597 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4597))
{return or__3548__auto____4597;
} else
{var or__3548__auto____4598 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4598))
{return or__3548__auto____4598;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4599 = mf;

if(cljs.core.truth_(and__3546__auto____4599))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4599;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4600 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4600))
{return or__3548__auto____4600;
} else
{var or__3548__auto____4601 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4601))
{return or__3548__auto____4601;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4602 = mf;

if(cljs.core.truth_(and__3546__auto____4602))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4602;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4603 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4603))
{return or__3548__auto____4603;
} else
{var or__3548__auto____4604 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4604))
{return or__3548__auto____4604;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4605 = mf;

if(cljs.core.truth_(and__3546__auto____4605))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4605;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4606 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4606))
{return or__3548__auto____4606;
} else
{var or__3548__auto____4607 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4607))
{return or__3548__auto____4607;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4608 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4609 = cljs.core._get_method.call(null,mf,dispatch_val__4608);

if(cljs.core.truth_(target_fn__4609))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4608)));
}
return cljs.core.apply.call(null,target_fn__4609,args);
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
var this__4610 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4611 = this;
cljs.core.swap_BANG_.call(null,this__4611.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4611.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4611.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4611.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4612 = this;
cljs.core.swap_BANG_.call(null,this__4612.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4612.method_cache,this__4612.method_table,this__4612.cached_hierarchy,this__4612.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4613 = this;
cljs.core.swap_BANG_.call(null,this__4613.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4613.method_cache,this__4613.method_table,this__4613.cached_hierarchy,this__4613.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4614 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4614.cached_hierarchy),cljs.core.deref.call(null,this__4614.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4614.method_cache,this__4614.method_table,this__4614.cached_hierarchy,this__4614.hierarchy);
}
var temp__3695__auto____4615 = cljs.core.deref.call(null,this__4614.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4615))
{var target_fn__4616 = temp__3695__auto____4615;

return target_fn__4616;
} else
{var temp__3695__auto____4617 = cljs.core.find_and_cache_best_method.call(null,this__4614.name,dispatch_val,this__4614.hierarchy,this__4614.method_table,this__4614.prefer_table,this__4614.method_cache,this__4614.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4617))
{var target_fn__4618 = temp__3695__auto____4617;

return target_fn__4618;
} else
{return cljs.core.deref.call(null,this__4614.method_table).call(null,this__4614.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4619 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4619.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4619.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4619.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4619.method_cache,this__4619.method_table,this__4619.cached_hierarchy,this__4619.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4620 = this;
return cljs.core.deref.call(null,this__4620.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4621 = this;
return cljs.core.deref.call(null,this__4621.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4622 = this;
return cljs.core.do_dispatch.call(null,mf,this__4622.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4623__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4623 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4623__delegate.call(this, _, args);
};
G__4623.cljs$lang$maxFixedArity = 1;
G__4623.cljs$lang$applyTo = (function (arglist__4624){
var _ = cljs.core.first(arglist__4624);
var args = cljs.core.rest(arglist__4624);
return G__4623__delegate.call(this, _, args);
});
return G__4623;
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
