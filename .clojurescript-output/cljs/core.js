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
var or__3548__auto____2970 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2970))
{return or__3548__auto____2970;
} else
{var or__3548__auto____2971 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2971))
{return or__3548__auto____2971;
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
var _invoke__3035 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____2972 = this$;

if(cljs.core.truth_(and__3546__auto____2972))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2972;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____2973 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2973))
{return or__3548__auto____2973;
} else
{var or__3548__auto____2974 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2974))
{return or__3548__auto____2974;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__3036 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____2975 = this$;

if(cljs.core.truth_(and__3546__auto____2975))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2975;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____2976 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2976))
{return or__3548__auto____2976;
} else
{var or__3548__auto____2977 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2977))
{return or__3548__auto____2977;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3037 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____2978 = this$;

if(cljs.core.truth_(and__3546__auto____2978))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2978;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____2979 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2979))
{return or__3548__auto____2979;
} else
{var or__3548__auto____2980 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2980))
{return or__3548__auto____2980;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__3038 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____2981 = this$;

if(cljs.core.truth_(and__3546__auto____2981))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2981;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____2982 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2982))
{return or__3548__auto____2982;
} else
{var or__3548__auto____2983 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2983))
{return or__3548__auto____2983;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__3039 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____2984 = this$;

if(cljs.core.truth_(and__3546__auto____2984))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2984;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____2985 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2985))
{return or__3548__auto____2985;
} else
{var or__3548__auto____2986 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2986))
{return or__3548__auto____2986;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__3040 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____2987 = this$;

if(cljs.core.truth_(and__3546__auto____2987))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2987;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____2988 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2988))
{return or__3548__auto____2988;
} else
{var or__3548__auto____2989 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2989))
{return or__3548__auto____2989;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__3041 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____2990 = this$;

if(cljs.core.truth_(and__3546__auto____2990))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2990;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____2991 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2991))
{return or__3548__auto____2991;
} else
{var or__3548__auto____2992 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2992))
{return or__3548__auto____2992;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__3042 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____2993 = this$;

if(cljs.core.truth_(and__3546__auto____2993))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2993;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____2994 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2994))
{return or__3548__auto____2994;
} else
{var or__3548__auto____2995 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2995))
{return or__3548__auto____2995;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__3043 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____2996 = this$;

if(cljs.core.truth_(and__3546__auto____2996))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2996;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____2997 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2997))
{return or__3548__auto____2997;
} else
{var or__3548__auto____2998 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____2998))
{return or__3548__auto____2998;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__3044 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____2999 = this$;

if(cljs.core.truth_(and__3546__auto____2999))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____2999;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____3000 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3000))
{return or__3548__auto____3000;
} else
{var or__3548__auto____3001 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3001))
{return or__3548__auto____3001;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__3045 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____3002 = this$;

if(cljs.core.truth_(and__3546__auto____3002))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3002;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____3003 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3003))
{return or__3548__auto____3003;
} else
{var or__3548__auto____3004 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3004))
{return or__3548__auto____3004;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__3046 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____3005 = this$;

if(cljs.core.truth_(and__3546__auto____3005))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3005;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____3006 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3006))
{return or__3548__auto____3006;
} else
{var or__3548__auto____3007 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3007))
{return or__3548__auto____3007;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__3047 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____3008 = this$;

if(cljs.core.truth_(and__3546__auto____3008))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3008;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____3009 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3009))
{return or__3548__auto____3009;
} else
{var or__3548__auto____3010 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3010))
{return or__3548__auto____3010;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__3048 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____3011 = this$;

if(cljs.core.truth_(and__3546__auto____3011))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3011;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____3012 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3012))
{return or__3548__auto____3012;
} else
{var or__3548__auto____3013 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3013))
{return or__3548__auto____3013;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__3049 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____3014 = this$;

if(cljs.core.truth_(and__3546__auto____3014))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3014;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____3015 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3015))
{return or__3548__auto____3015;
} else
{var or__3548__auto____3016 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3016))
{return or__3548__auto____3016;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__3050 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____3017 = this$;

if(cljs.core.truth_(and__3546__auto____3017))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3017;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____3018 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3018))
{return or__3548__auto____3018;
} else
{var or__3548__auto____3019 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3019))
{return or__3548__auto____3019;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__3051 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____3020 = this$;

if(cljs.core.truth_(and__3546__auto____3020))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3020;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____3021 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3021))
{return or__3548__auto____3021;
} else
{var or__3548__auto____3022 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3022))
{return or__3548__auto____3022;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__3052 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____3023 = this$;

if(cljs.core.truth_(and__3546__auto____3023))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3023;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____3024 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3024))
{return or__3548__auto____3024;
} else
{var or__3548__auto____3025 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3025))
{return or__3548__auto____3025;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__3053 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____3026 = this$;

if(cljs.core.truth_(and__3546__auto____3026))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3026;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____3027 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3027))
{return or__3548__auto____3027;
} else
{var or__3548__auto____3028 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3028))
{return or__3548__auto____3028;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__3054 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____3029 = this$;

if(cljs.core.truth_(and__3546__auto____3029))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3029;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____3030 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3030))
{return or__3548__auto____3030;
} else
{var or__3548__auto____3031 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3031))
{return or__3548__auto____3031;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__3055 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____3032 = this$;

if(cljs.core.truth_(and__3546__auto____3032))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3032;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____3033 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3033))
{return or__3548__auto____3033;
} else
{var or__3548__auto____3034 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3034))
{return or__3548__auto____3034;
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
return _invoke__3035.call(this,this$);
case  2 :
return _invoke__3036.call(this,this$,a);
case  3 :
return _invoke__3037.call(this,this$,a,b);
case  4 :
return _invoke__3038.call(this,this$,a,b,c);
case  5 :
return _invoke__3039.call(this,this$,a,b,c,d);
case  6 :
return _invoke__3040.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__3041.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__3042.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__3043.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__3044.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__3045.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__3046.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__3047.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__3048.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__3049.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__3050.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__3051.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__3052.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__3053.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__3054.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__3055.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3057 = coll;

if(cljs.core.truth_(and__3546__auto____3057))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3057;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3058 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3058))
{return or__3548__auto____3058;
} else
{var or__3548__auto____3059 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3059))
{return or__3548__auto____3059;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3060 = coll;

if(cljs.core.truth_(and__3546__auto____3060))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3060;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3061 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3061))
{return or__3548__auto____3061;
} else
{var or__3548__auto____3062 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3062))
{return or__3548__auto____3062;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3063 = coll;

if(cljs.core.truth_(and__3546__auto____3063))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3063;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3064 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3064))
{return or__3548__auto____3064;
} else
{var or__3548__auto____3065 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3065))
{return or__3548__auto____3065;
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
var _nth__3072 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3066 = coll;

if(cljs.core.truth_(and__3546__auto____3066))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3066;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3067 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3067))
{return or__3548__auto____3067;
} else
{var or__3548__auto____3068 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3068))
{return or__3548__auto____3068;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3073 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3069 = coll;

if(cljs.core.truth_(and__3546__auto____3069))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3069;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3070 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3070))
{return or__3548__auto____3070;
} else
{var or__3548__auto____3071 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3071))
{return or__3548__auto____3071;
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
return _nth__3072.call(this,coll,n);
case  3 :
return _nth__3073.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3075 = coll;

if(cljs.core.truth_(and__3546__auto____3075))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3075;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3076 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3076))
{return or__3548__auto____3076;
} else
{var or__3548__auto____3077 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3077))
{return or__3548__auto____3077;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3078 = coll;

if(cljs.core.truth_(and__3546__auto____3078))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3078;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3079 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3079))
{return or__3548__auto____3079;
} else
{var or__3548__auto____3080 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3080))
{return or__3548__auto____3080;
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
var _lookup__3087 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3081 = o;

if(cljs.core.truth_(and__3546__auto____3081))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3081;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3082 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3082))
{return or__3548__auto____3082;
} else
{var or__3548__auto____3083 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3083))
{return or__3548__auto____3083;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3088 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3084 = o;

if(cljs.core.truth_(and__3546__auto____3084))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3084;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3085 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3085))
{return or__3548__auto____3085;
} else
{var or__3548__auto____3086 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3086))
{return or__3548__auto____3086;
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
return _lookup__3087.call(this,o,k);
case  3 :
return _lookup__3088.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3090 = coll;

if(cljs.core.truth_(and__3546__auto____3090))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3090;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3091 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3091))
{return or__3548__auto____3091;
} else
{var or__3548__auto____3092 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3092))
{return or__3548__auto____3092;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3093 = coll;

if(cljs.core.truth_(and__3546__auto____3093))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3093;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3094 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3094))
{return or__3548__auto____3094;
} else
{var or__3548__auto____3095 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3095))
{return or__3548__auto____3095;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3096 = coll;

if(cljs.core.truth_(and__3546__auto____3096))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3096;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3097 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3097))
{return or__3548__auto____3097;
} else
{var or__3548__auto____3098 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3098))
{return or__3548__auto____3098;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3099 = coll;

if(cljs.core.truth_(and__3546__auto____3099))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3099;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3100 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3100))
{return or__3548__auto____3100;
} else
{var or__3548__auto____3101 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3101))
{return or__3548__auto____3101;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3102 = coll;

if(cljs.core.truth_(and__3546__auto____3102))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3102;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3103 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3103))
{return or__3548__auto____3103;
} else
{var or__3548__auto____3104 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3104))
{return or__3548__auto____3104;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3105 = coll;

if(cljs.core.truth_(and__3546__auto____3105))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3105;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3106 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3106))
{return or__3548__auto____3106;
} else
{var or__3548__auto____3107 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3107))
{return or__3548__auto____3107;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3108 = coll;

if(cljs.core.truth_(and__3546__auto____3108))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3108;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3109 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3109))
{return or__3548__auto____3109;
} else
{var or__3548__auto____3110 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3110))
{return or__3548__auto____3110;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3111 = o;

if(cljs.core.truth_(and__3546__auto____3111))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3111;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3112 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3112))
{return or__3548__auto____3112;
} else
{var or__3548__auto____3113 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3113))
{return or__3548__auto____3113;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3114 = o;

if(cljs.core.truth_(and__3546__auto____3114))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3114;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3115 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3115))
{return or__3548__auto____3115;
} else
{var or__3548__auto____3116 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3116))
{return or__3548__auto____3116;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3117 = o;

if(cljs.core.truth_(and__3546__auto____3117))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3117;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3118 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3118))
{return or__3548__auto____3118;
} else
{var or__3548__auto____3119 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3119))
{return or__3548__auto____3119;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3120 = o;

if(cljs.core.truth_(and__3546__auto____3120))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3120;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3121 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3121))
{return or__3548__auto____3121;
} else
{var or__3548__auto____3122 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3122))
{return or__3548__auto____3122;
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
var _reduce__3129 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3123 = coll;

if(cljs.core.truth_(and__3546__auto____3123))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3123;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3124 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3124))
{return or__3548__auto____3124;
} else
{var or__3548__auto____3125 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3125))
{return or__3548__auto____3125;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3130 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3126 = coll;

if(cljs.core.truth_(and__3546__auto____3126))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3126;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3127 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3127))
{return or__3548__auto____3127;
} else
{var or__3548__auto____3128 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3128))
{return or__3548__auto____3128;
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
return _reduce__3129.call(this,coll,f);
case  3 :
return _reduce__3130.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3132 = o;

if(cljs.core.truth_(and__3546__auto____3132))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3132;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3133 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3133))
{return or__3548__auto____3133;
} else
{var or__3548__auto____3134 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3134))
{return or__3548__auto____3134;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3135 = o;

if(cljs.core.truth_(and__3546__auto____3135))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3135;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3136 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3136))
{return or__3548__auto____3136;
} else
{var or__3548__auto____3137 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3137))
{return or__3548__auto____3137;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3138 = o;

if(cljs.core.truth_(and__3546__auto____3138))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3138;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3139 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3139))
{return or__3548__auto____3139;
} else
{var or__3548__auto____3140 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3140))
{return or__3548__auto____3140;
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
if(cljs.core.truth_((function (){var and__3546__auto____3141 = o;

if(cljs.core.truth_(and__3546__auto____3141))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3141;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3142 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3142))
{return or__3548__auto____3142;
} else
{var or__3548__auto____3143 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3143))
{return or__3548__auto____3143;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3144 = d;

if(cljs.core.truth_(and__3546__auto____3144))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3144;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3145 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3145))
{return or__3548__auto____3145;
} else
{var or__3548__auto____3146 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3146))
{return or__3548__auto____3146;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3147 = this$;

if(cljs.core.truth_(and__3546__auto____3147))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3147;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3148 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3148))
{return or__3548__auto____3148;
} else
{var or__3548__auto____3149 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3149))
{return or__3548__auto____3149;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3150 = this$;

if(cljs.core.truth_(and__3546__auto____3150))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3150;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3151 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3151))
{return or__3548__auto____3151;
} else
{var or__3548__auto____3152 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3152))
{return or__3548__auto____3152;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3153 = this$;

if(cljs.core.truth_(and__3546__auto____3153))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3153;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3154 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3154))
{return or__3548__auto____3154;
} else
{var or__3548__auto____3155 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3155))
{return or__3548__auto____3155;
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
var G__3156 = null;
var G__3156__3157 = (function (o,k){
return null;
});
var G__3156__3158 = (function (o,k,not_found){
return not_found;
});
G__3156 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3156__3157.call(this,o,k);
case  3 :
return G__3156__3158.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3156;
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
var G__3160 = null;
var G__3160__3161 = (function (_,f){
return f.call(null);
});
var G__3160__3162 = (function (_,f,start){
return start;
});
G__3160 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3160__3161.call(this,_,f);
case  3 :
return G__3160__3162.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3160;
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
var G__3164 = null;
var G__3164__3165 = (function (_,n){
return null;
});
var G__3164__3166 = (function (_,n,not_found){
return not_found;
});
G__3164 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3164__3165.call(this,_,n);
case  3 :
return G__3164__3166.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3164;
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
var ci_reduce__3174 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3168 = cljs.core._nth.call(null,cicoll,0);
var n__3169 = 1;

while(true){
if(cljs.core.truth_((n__3169 < cljs.core._count.call(null,cicoll))))
{{
var G__3178 = f.call(null,val__3168,cljs.core._nth.call(null,cicoll,n__3169));
var G__3179 = (n__3169 + 1);
val__3168 = G__3178;
n__3169 = G__3179;
continue;
}
} else
{return val__3168;
}
break;
}
}
});
var ci_reduce__3175 = (function (cicoll,f,val){
var val__3170 = val;
var n__3171 = 0;

while(true){
if(cljs.core.truth_((n__3171 < cljs.core._count.call(null,cicoll))))
{{
var G__3180 = f.call(null,val__3170,cljs.core._nth.call(null,cicoll,n__3171));
var G__3181 = (n__3171 + 1);
val__3170 = G__3180;
n__3171 = G__3181;
continue;
}
} else
{return val__3170;
}
break;
}
});
var ci_reduce__3176 = (function (cicoll,f,val,idx){
var val__3172 = val;
var n__3173 = idx;

while(true){
if(cljs.core.truth_((n__3173 < cljs.core._count.call(null,cicoll))))
{{
var G__3182 = f.call(null,val__3172,cljs.core._nth.call(null,cicoll,n__3173));
var G__3183 = (n__3173 + 1);
val__3172 = G__3182;
n__3173 = G__3183;
continue;
}
} else
{return val__3172;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3174.call(this,cicoll,f);
case  3 :
return ci_reduce__3175.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3176.call(this,cicoll,f,val,idx);
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
var this__3184 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3197 = null;
var G__3197__3198 = (function (_,f){
var this__3185 = this;
return cljs.core.ci_reduce.call(null,this__3185.a,f,(this__3185.a[this__3185.i]),(this__3185.i + 1));
});
var G__3197__3199 = (function (_,f,start){
var this__3186 = this;
return cljs.core.ci_reduce.call(null,this__3186.a,f,start,this__3186.i);
});
G__3197 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3197__3198.call(this,_,f);
case  3 :
return G__3197__3199.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3197;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3187 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3188 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3201 = null;
var G__3201__3202 = (function (coll,n){
var this__3189 = this;
var i__3190 = (n + this__3189.i);

if(cljs.core.truth_((i__3190 < this__3189.a.length)))
{return (this__3189.a[i__3190]);
} else
{return null;
}
});
var G__3201__3203 = (function (coll,n,not_found){
var this__3191 = this;
var i__3192 = (n + this__3191.i);

if(cljs.core.truth_((i__3192 < this__3191.a.length)))
{return (this__3191.a[i__3192]);
} else
{return not_found;
}
});
G__3201 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3201__3202.call(this,coll,n);
case  3 :
return G__3201__3203.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3201;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3193 = this;
return (this__3193.a.length - this__3193.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3194 = this;
return (this__3194.a[this__3194.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3195 = this;
if(cljs.core.truth_(((this__3195.i + 1) < this__3195.a.length)))
{return (new cljs.core.IndexedSeq(this__3195.a,(this__3195.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3196 = this;
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
var G__3205 = null;
var G__3205__3206 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3205__3207 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3205 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3205__3206.call(this,array,f);
case  3 :
return G__3205__3207.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3205;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3209 = null;
var G__3209__3210 = (function (array,k){
return (array[k]);
});
var G__3209__3211 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3209 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3209__3210.call(this,array,k);
case  3 :
return G__3209__3211.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3209;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3213 = null;
var G__3213__3214 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3213__3215 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3213 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3213__3214.call(this,array,n);
case  3 :
return G__3213__3215.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3213;
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
var temp__3698__auto____3217 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3217))
{var s__3218 = temp__3698__auto____3217;

return cljs.core._first.call(null,s__3218);
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
var G__3219 = cljs.core.next.call(null,s);
s = G__3219;
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
var s__3220 = cljs.core.seq.call(null,x);
var n__3221 = 0;

while(true){
if(cljs.core.truth_(s__3220))
{{
var G__3222 = cljs.core.next.call(null,s__3220);
var G__3223 = (n__3221 + 1);
s__3220 = G__3222;
n__3221 = G__3223;
continue;
}
} else
{return n__3221;
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
var conj__3224 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3225 = (function() { 
var G__3227__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3228 = conj.call(null,coll,x);
var G__3229 = cljs.core.first.call(null,xs);
var G__3230 = cljs.core.next.call(null,xs);
coll = G__3228;
x = G__3229;
xs = G__3230;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3227 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3227__delegate.call(this, coll, x, xs);
};
G__3227.cljs$lang$maxFixedArity = 2;
G__3227.cljs$lang$applyTo = (function (arglist__3231){
var coll = cljs.core.first(arglist__3231);
var x = cljs.core.first(cljs.core.next(arglist__3231));
var xs = cljs.core.rest(cljs.core.next(arglist__3231));
return G__3227__delegate.call(this, coll, x, xs);
});
return G__3227;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3224.call(this,coll,x);
default:
return conj__3225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3225.cljs$lang$applyTo;
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
var nth__3232 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3233 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3232.call(this,coll,n);
case  3 :
return nth__3233.call(this,coll,n,not_found);
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
var get__3235 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3236 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3235.call(this,o,k);
case  3 :
return get__3236.call(this,o,k,not_found);
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
var assoc__3239 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3240 = (function() { 
var G__3242__delegate = function (coll,k,v,kvs){
while(true){
var ret__3238 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3243 = ret__3238;
var G__3244 = cljs.core.first.call(null,kvs);
var G__3245 = cljs.core.second.call(null,kvs);
var G__3246 = cljs.core.nnext.call(null,kvs);
coll = G__3243;
k = G__3244;
v = G__3245;
kvs = G__3246;
continue;
}
} else
{return ret__3238;
}
break;
}
};
var G__3242 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3242__delegate.call(this, coll, k, v, kvs);
};
G__3242.cljs$lang$maxFixedArity = 3;
G__3242.cljs$lang$applyTo = (function (arglist__3247){
var coll = cljs.core.first(arglist__3247);
var k = cljs.core.first(cljs.core.next(arglist__3247));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3247)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3247)));
return G__3242__delegate.call(this, coll, k, v, kvs);
});
return G__3242;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3239.call(this,coll,k,v);
default:
return assoc__3240.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3240.cljs$lang$applyTo;
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
var dissoc__3249 = (function (coll){
return coll;
});
var dissoc__3250 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3251 = (function() { 
var G__3253__delegate = function (coll,k,ks){
while(true){
var ret__3248 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3254 = ret__3248;
var G__3255 = cljs.core.first.call(null,ks);
var G__3256 = cljs.core.next.call(null,ks);
coll = G__3254;
k = G__3255;
ks = G__3256;
continue;
}
} else
{return ret__3248;
}
break;
}
};
var G__3253 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3253__delegate.call(this, coll, k, ks);
};
G__3253.cljs$lang$maxFixedArity = 2;
G__3253.cljs$lang$applyTo = (function (arglist__3257){
var coll = cljs.core.first(arglist__3257);
var k = cljs.core.first(cljs.core.next(arglist__3257));
var ks = cljs.core.rest(cljs.core.next(arglist__3257));
return G__3253__delegate.call(this, coll, k, ks);
});
return G__3253;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3249.call(this,coll);
case  2 :
return dissoc__3250.call(this,coll,k);
default:
return dissoc__3251.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3251.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____3258 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3259 = x__445__auto____3258;

if(cljs.core.truth_(and__3546__auto____3259))
{var and__3546__auto____3260 = x__445__auto____3258.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3260))
{return cljs.core.not.call(null,x__445__auto____3258.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3260;
}
} else
{return and__3546__auto____3259;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____3258);
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
var disj__3262 = (function (coll){
return coll;
});
var disj__3263 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3264 = (function() { 
var G__3266__delegate = function (coll,k,ks){
while(true){
var ret__3261 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3267 = ret__3261;
var G__3268 = cljs.core.first.call(null,ks);
var G__3269 = cljs.core.next.call(null,ks);
coll = G__3267;
k = G__3268;
ks = G__3269;
continue;
}
} else
{return ret__3261;
}
break;
}
};
var G__3266 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3266__delegate.call(this, coll, k, ks);
};
G__3266.cljs$lang$maxFixedArity = 2;
G__3266.cljs$lang$applyTo = (function (arglist__3270){
var coll = cljs.core.first(arglist__3270);
var k = cljs.core.first(cljs.core.next(arglist__3270));
var ks = cljs.core.rest(cljs.core.next(arglist__3270));
return G__3266__delegate.call(this, coll, k, ks);
});
return G__3266;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3262.call(this,coll);
case  2 :
return disj__3263.call(this,coll,k);
default:
return disj__3264.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3264.cljs$lang$applyTo;
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
{var x__445__auto____3271 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3272 = x__445__auto____3271;

if(cljs.core.truth_(and__3546__auto____3272))
{var and__3546__auto____3273 = x__445__auto____3271.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3273))
{return cljs.core.not.call(null,x__445__auto____3271.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3273;
}
} else
{return and__3546__auto____3272;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____3271);
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
{var x__445__auto____3274 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3275 = x__445__auto____3274;

if(cljs.core.truth_(and__3546__auto____3275))
{var and__3546__auto____3276 = x__445__auto____3274.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3276))
{return cljs.core.not.call(null,x__445__auto____3274.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3276;
}
} else
{return and__3546__auto____3275;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____3274);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____3277 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3278 = x__445__auto____3277;

if(cljs.core.truth_(and__3546__auto____3278))
{var and__3546__auto____3279 = x__445__auto____3277.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3279))
{return cljs.core.not.call(null,x__445__auto____3277.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3279;
}
} else
{return and__3546__auto____3278;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____3277);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____3280 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3281 = x__445__auto____3280;

if(cljs.core.truth_(and__3546__auto____3281))
{var and__3546__auto____3282 = x__445__auto____3280.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3282))
{return cljs.core.not.call(null,x__445__auto____3280.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3282;
}
} else
{return and__3546__auto____3281;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____3280);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____3283 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3284 = x__445__auto____3283;

if(cljs.core.truth_(and__3546__auto____3284))
{var and__3546__auto____3285 = x__445__auto____3283.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3285))
{return cljs.core.not.call(null,x__445__auto____3283.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3285;
}
} else
{return and__3546__auto____3284;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____3283);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____3286 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3287 = x__445__auto____3286;

if(cljs.core.truth_(and__3546__auto____3287))
{var and__3546__auto____3288 = x__445__auto____3286.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3288))
{return cljs.core.not.call(null,x__445__auto____3286.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3288;
}
} else
{return and__3546__auto____3287;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____3286);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____3289 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3290 = x__445__auto____3289;

if(cljs.core.truth_(and__3546__auto____3290))
{var and__3546__auto____3291 = x__445__auto____3289.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3291))
{return cljs.core.not.call(null,x__445__auto____3289.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3291;
}
} else
{return and__3546__auto____3290;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____3289);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3292 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3292.push(key);
}));
return keys__3292;
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
{var x__445__auto____3293 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3294 = x__445__auto____3293;

if(cljs.core.truth_(and__3546__auto____3294))
{var and__3546__auto____3295 = x__445__auto____3293.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3295))
{return cljs.core.not.call(null,x__445__auto____3293.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3295;
}
} else
{return and__3546__auto____3294;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____3293);
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
var and__3546__auto____3296 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3296))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3297 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____3297))
{return or__3548__auto____3297;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____3296;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3298 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3298))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____3298;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3299 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3299))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____3299;
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
var and__3546__auto____3300 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3300))
{return (n == n.toFixed());
} else
{return and__3546__auto____3300;
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
if(cljs.core.truth_((function (){var and__3546__auto____3301 = coll;

if(cljs.core.truth_(and__3546__auto____3301))
{var and__3546__auto____3302 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3302))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3302;
}
} else
{return and__3546__auto____3301;
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
var distinct_QMARK___3307 = (function (x){
return true;
});
var distinct_QMARK___3308 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3309 = (function() { 
var G__3311__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3303 = cljs.core.set([y,x]);
var xs__3304 = more;

while(true){
var x__3305 = cljs.core.first.call(null,xs__3304);
var etc__3306 = cljs.core.next.call(null,xs__3304);

if(cljs.core.truth_(xs__3304))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3303,x__3305)))
{return false;
} else
{{
var G__3312 = cljs.core.conj.call(null,s__3303,x__3305);
var G__3313 = etc__3306;
s__3303 = G__3312;
xs__3304 = G__3313;
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
var G__3311 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3311__delegate.call(this, x, y, more);
};
G__3311.cljs$lang$maxFixedArity = 2;
G__3311.cljs$lang$applyTo = (function (arglist__3314){
var x = cljs.core.first(arglist__3314);
var y = cljs.core.first(cljs.core.next(arglist__3314));
var more = cljs.core.rest(cljs.core.next(arglist__3314));
return G__3311__delegate.call(this, x, y, more);
});
return G__3311;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3307.call(this,x);
case  2 :
return distinct_QMARK___3308.call(this,x,y);
default:
return distinct_QMARK___3309.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3309.cljs$lang$applyTo;
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
var r__3315 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3315)))
{return r__3315;
} else
{if(cljs.core.truth_(r__3315))
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
var sort__3317 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3318 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3316 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3316,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3316);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3317.call(this,comp);
case  2 :
return sort__3318.call(this,comp,coll);
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
var sort_by__3320 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3321 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3320.call(this,keyfn,comp);
case  3 :
return sort_by__3321.call(this,keyfn,comp,coll);
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
var reduce__3323 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3324 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3323.call(this,f,val);
case  3 :
return reduce__3324.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3330 = (function (f,coll){
var temp__3695__auto____3326 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3326))
{var s__3327 = temp__3695__auto____3326;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3327),cljs.core.next.call(null,s__3327));
} else
{return f.call(null);
}
});
var seq_reduce__3331 = (function (f,val,coll){
var val__3328 = val;
var coll__3329 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3329))
{{
var G__3333 = f.call(null,val__3328,cljs.core.first.call(null,coll__3329));
var G__3334 = cljs.core.next.call(null,coll__3329);
val__3328 = G__3333;
coll__3329 = G__3334;
continue;
}
} else
{return val__3328;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3330.call(this,f,val);
case  3 :
return seq_reduce__3331.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3335 = null;
var G__3335__3336 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3335__3337 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3335 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3335__3336.call(this,coll,f);
case  3 :
return G__3335__3337.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3335;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3339 = (function (){
return 0;
});
var _PLUS___3340 = (function (x){
return x;
});
var _PLUS___3341 = (function (x,y){
return (x + y);
});
var _PLUS___3342 = (function() { 
var G__3344__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3344 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3344__delegate.call(this, x, y, more);
};
G__3344.cljs$lang$maxFixedArity = 2;
G__3344.cljs$lang$applyTo = (function (arglist__3345){
var x = cljs.core.first(arglist__3345);
var y = cljs.core.first(cljs.core.next(arglist__3345));
var more = cljs.core.rest(cljs.core.next(arglist__3345));
return G__3344__delegate.call(this, x, y, more);
});
return G__3344;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3339.call(this);
case  1 :
return _PLUS___3340.call(this,x);
case  2 :
return _PLUS___3341.call(this,x,y);
default:
return _PLUS___3342.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3342.cljs$lang$applyTo;
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
var ___3346 = (function (x){
return (- x);
});
var ___3347 = (function (x,y){
return (x - y);
});
var ___3348 = (function() { 
var G__3350__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3350 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3350__delegate.call(this, x, y, more);
};
G__3350.cljs$lang$maxFixedArity = 2;
G__3350.cljs$lang$applyTo = (function (arglist__3351){
var x = cljs.core.first(arglist__3351);
var y = cljs.core.first(cljs.core.next(arglist__3351));
var more = cljs.core.rest(cljs.core.next(arglist__3351));
return G__3350__delegate.call(this, x, y, more);
});
return G__3350;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3346.call(this,x);
case  2 :
return ___3347.call(this,x,y);
default:
return ___3348.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3348.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3352 = (function (){
return 1;
});
var _STAR___3353 = (function (x){
return x;
});
var _STAR___3354 = (function (x,y){
return (x * y);
});
var _STAR___3355 = (function() { 
var G__3357__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3357 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3357__delegate.call(this, x, y, more);
};
G__3357.cljs$lang$maxFixedArity = 2;
G__3357.cljs$lang$applyTo = (function (arglist__3358){
var x = cljs.core.first(arglist__3358);
var y = cljs.core.first(cljs.core.next(arglist__3358));
var more = cljs.core.rest(cljs.core.next(arglist__3358));
return G__3357__delegate.call(this, x, y, more);
});
return G__3357;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3352.call(this);
case  1 :
return _STAR___3353.call(this,x);
case  2 :
return _STAR___3354.call(this,x,y);
default:
return _STAR___3355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3355.cljs$lang$applyTo;
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
var _SLASH___3359 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3360 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___3361 = (function() { 
var G__3363__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3363 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3363__delegate.call(this, x, y, more);
};
G__3363.cljs$lang$maxFixedArity = 2;
G__3363.cljs$lang$applyTo = (function (arglist__3364){
var x = cljs.core.first(arglist__3364);
var y = cljs.core.first(cljs.core.next(arglist__3364));
var more = cljs.core.rest(cljs.core.next(arglist__3364));
return G__3363__delegate.call(this, x, y, more);
});
return G__3363;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3359.call(this,x);
case  2 :
return _SLASH___3360.call(this,x,y);
default:
return _SLASH___3361.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3361.cljs$lang$applyTo;
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
var _LT___3365 = (function (x){
return true;
});
var _LT___3366 = (function (x,y){
return (x < y);
});
var _LT___3367 = (function() { 
var G__3369__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3370 = y;
var G__3371 = cljs.core.first.call(null,more);
var G__3372 = cljs.core.next.call(null,more);
x = G__3370;
y = G__3371;
more = G__3372;
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
var G__3369 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3369__delegate.call(this, x, y, more);
};
G__3369.cljs$lang$maxFixedArity = 2;
G__3369.cljs$lang$applyTo = (function (arglist__3373){
var x = cljs.core.first(arglist__3373);
var y = cljs.core.first(cljs.core.next(arglist__3373));
var more = cljs.core.rest(cljs.core.next(arglist__3373));
return G__3369__delegate.call(this, x, y, more);
});
return G__3369;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3365.call(this,x);
case  2 :
return _LT___3366.call(this,x,y);
default:
return _LT___3367.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3367.cljs$lang$applyTo;
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
var _LT__EQ___3374 = (function (x){
return true;
});
var _LT__EQ___3375 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3376 = (function() { 
var G__3378__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3379 = y;
var G__3380 = cljs.core.first.call(null,more);
var G__3381 = cljs.core.next.call(null,more);
x = G__3379;
y = G__3380;
more = G__3381;
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
var G__3378 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3378__delegate.call(this, x, y, more);
};
G__3378.cljs$lang$maxFixedArity = 2;
G__3378.cljs$lang$applyTo = (function (arglist__3382){
var x = cljs.core.first(arglist__3382);
var y = cljs.core.first(cljs.core.next(arglist__3382));
var more = cljs.core.rest(cljs.core.next(arglist__3382));
return G__3378__delegate.call(this, x, y, more);
});
return G__3378;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3374.call(this,x);
case  2 :
return _LT__EQ___3375.call(this,x,y);
default:
return _LT__EQ___3376.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3376.cljs$lang$applyTo;
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
var _GT___3383 = (function (x){
return true;
});
var _GT___3384 = (function (x,y){
return (x > y);
});
var _GT___3385 = (function() { 
var G__3387__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3388 = y;
var G__3389 = cljs.core.first.call(null,more);
var G__3390 = cljs.core.next.call(null,more);
x = G__3388;
y = G__3389;
more = G__3390;
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
var G__3387 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3387__delegate.call(this, x, y, more);
};
G__3387.cljs$lang$maxFixedArity = 2;
G__3387.cljs$lang$applyTo = (function (arglist__3391){
var x = cljs.core.first(arglist__3391);
var y = cljs.core.first(cljs.core.next(arglist__3391));
var more = cljs.core.rest(cljs.core.next(arglist__3391));
return G__3387__delegate.call(this, x, y, more);
});
return G__3387;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3383.call(this,x);
case  2 :
return _GT___3384.call(this,x,y);
default:
return _GT___3385.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3385.cljs$lang$applyTo;
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
var _GT__EQ___3392 = (function (x){
return true;
});
var _GT__EQ___3393 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3394 = (function() { 
var G__3396__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3397 = y;
var G__3398 = cljs.core.first.call(null,more);
var G__3399 = cljs.core.next.call(null,more);
x = G__3397;
y = G__3398;
more = G__3399;
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
var G__3396 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3396__delegate.call(this, x, y, more);
};
G__3396.cljs$lang$maxFixedArity = 2;
G__3396.cljs$lang$applyTo = (function (arglist__3400){
var x = cljs.core.first(arglist__3400);
var y = cljs.core.first(cljs.core.next(arglist__3400));
var more = cljs.core.rest(cljs.core.next(arglist__3400));
return G__3396__delegate.call(this, x, y, more);
});
return G__3396;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3392.call(this,x);
case  2 :
return _GT__EQ___3393.call(this,x,y);
default:
return _GT__EQ___3394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3394.cljs$lang$applyTo;
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
var max__3401 = (function (x){
return x;
});
var max__3402 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3403 = (function() { 
var G__3405__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3405 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3405__delegate.call(this, x, y, more);
};
G__3405.cljs$lang$maxFixedArity = 2;
G__3405.cljs$lang$applyTo = (function (arglist__3406){
var x = cljs.core.first(arglist__3406);
var y = cljs.core.first(cljs.core.next(arglist__3406));
var more = cljs.core.rest(cljs.core.next(arglist__3406));
return G__3405__delegate.call(this, x, y, more);
});
return G__3405;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3401.call(this,x);
case  2 :
return max__3402.call(this,x,y);
default:
return max__3403.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3403.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3407 = (function (x){
return x;
});
var min__3408 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3409 = (function() { 
var G__3411__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3411 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3411__delegate.call(this, x, y, more);
};
G__3411.cljs$lang$maxFixedArity = 2;
G__3411.cljs$lang$applyTo = (function (arglist__3412){
var x = cljs.core.first(arglist__3412);
var y = cljs.core.first(cljs.core.next(arglist__3412));
var more = cljs.core.rest(cljs.core.next(arglist__3412));
return G__3411__delegate.call(this, x, y, more);
});
return G__3411;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3407.call(this,x);
case  2 :
return min__3408.call(this,x,y);
default:
return min__3409.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3409.cljs$lang$applyTo;
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
var rem__3413 = (n % d);

return cljs.core.fix.call(null,((n - rem__3413) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3414 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3414));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3415 = (function (){
return Math.random.call(null);
});
var rand__3416 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3415.call(this);
case  1 :
return rand__3416.call(this,n);
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
var _EQ__EQ___3418 = (function (x){
return true;
});
var _EQ__EQ___3419 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3420 = (function() { 
var G__3422__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3423 = y;
var G__3424 = cljs.core.first.call(null,more);
var G__3425 = cljs.core.next.call(null,more);
x = G__3423;
y = G__3424;
more = G__3425;
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
var G__3422 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3422__delegate.call(this, x, y, more);
};
G__3422.cljs$lang$maxFixedArity = 2;
G__3422.cljs$lang$applyTo = (function (arglist__3426){
var x = cljs.core.first(arglist__3426);
var y = cljs.core.first(cljs.core.next(arglist__3426));
var more = cljs.core.rest(cljs.core.next(arglist__3426));
return G__3422__delegate.call(this, x, y, more);
});
return G__3422;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3418.call(this,x);
case  2 :
return _EQ__EQ___3419.call(this,x,y);
default:
return _EQ__EQ___3420.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3420.cljs$lang$applyTo;
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
var n__3427 = n;
var xs__3428 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3429 = xs__3428;

if(cljs.core.truth_(and__3546__auto____3429))
{return (n__3427 > 0);
} else
{return and__3546__auto____3429;
}
})()))
{{
var G__3430 = (n__3427 - 1);
var G__3431 = cljs.core.next.call(null,xs__3428);
n__3427 = G__3430;
xs__3428 = G__3431;
continue;
}
} else
{return xs__3428;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3436 = null;
var G__3436__3437 = (function (coll,n){
var temp__3695__auto____3432 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3432))
{var xs__3433 = temp__3695__auto____3432;

return cljs.core.first.call(null,xs__3433);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3436__3438 = (function (coll,n,not_found){
var temp__3695__auto____3434 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3434))
{var xs__3435 = temp__3695__auto____3434;

return cljs.core.first.call(null,xs__3435);
} else
{return not_found;
}
});
G__3436 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3436__3437.call(this,coll,n);
case  3 :
return G__3436__3438.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3436;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3440 = (function (){
return "";
});
var str_STAR___3441 = (function (x){
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
var str_STAR___3442 = (function() { 
var G__3444__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3445 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3446 = cljs.core.next.call(null,more);
sb = G__3445;
more = G__3446;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3444 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3444__delegate.call(this, x, ys);
};
G__3444.cljs$lang$maxFixedArity = 1;
G__3444.cljs$lang$applyTo = (function (arglist__3447){
var x = cljs.core.first(arglist__3447);
var ys = cljs.core.rest(arglist__3447);
return G__3444__delegate.call(this, x, ys);
});
return G__3444;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3440.call(this);
case  1 :
return str_STAR___3441.call(this,x);
default:
return str_STAR___3442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3442.cljs$lang$applyTo;
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
var str__3448 = (function (){
return "";
});
var str__3449 = (function (x){
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
var str__3450 = (function() { 
var G__3452__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__3452 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3452__delegate.call(this, x, ys);
};
G__3452.cljs$lang$maxFixedArity = 1;
G__3452.cljs$lang$applyTo = (function (arglist__3453){
var x = cljs.core.first(arglist__3453);
var ys = cljs.core.rest(arglist__3453);
return G__3452__delegate.call(this, x, ys);
});
return G__3452;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3448.call(this);
case  1 :
return str__3449.call(this,x);
default:
return str__3450.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3450.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3454 = (function (s,start){
return s.substring(start);
});
var subs__3455 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3454.call(this,s,start);
case  3 :
return subs__3455.call(this,s,start,end);
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
var symbol__3457 = (function (name){
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
var symbol__3458 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3457.call(this,ns);
case  2 :
return symbol__3458.call(this,ns,name);
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
var keyword__3460 = (function (name){
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
var keyword__3461 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3460.call(this,ns);
case  2 :
return keyword__3461.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3463 = cljs.core.seq.call(null,x);
var ys__3464 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__3463)))
{return cljs.core.nil_QMARK_.call(null,ys__3464);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__3464)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3463),cljs.core.first.call(null,ys__3464))))
{{
var G__3465 = cljs.core.next.call(null,xs__3463);
var G__3466 = cljs.core.next.call(null,ys__3464);
xs__3463 = G__3465;
ys__3464 = G__3466;
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
return cljs.core.reduce.call(null,(function (p1__3467_SHARP_,p2__3468_SHARP_){
return cljs.core.hash_combine.call(null,p1__3467_SHARP_,cljs.core.hash.call(null,p2__3468_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3469__3470 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3469__3470))
{var G__3472__3474 = cljs.core.first.call(null,G__3469__3470);
var vec__3473__3475 = G__3472__3474;
var key_name__3476 = cljs.core.nth.call(null,vec__3473__3475,0,null);
var f__3477 = cljs.core.nth.call(null,vec__3473__3475,1,null);
var G__3469__3478 = G__3469__3470;

var G__3472__3479 = G__3472__3474;
var G__3469__3480 = G__3469__3478;

while(true){
var vec__3481__3482 = G__3472__3479;
var key_name__3483 = cljs.core.nth.call(null,vec__3481__3482,0,null);
var f__3484 = cljs.core.nth.call(null,vec__3481__3482,1,null);
var G__3469__3485 = G__3469__3480;

var str_name__3486 = cljs.core.name.call(null,key_name__3483);

obj[str_name__3486] = f__3484;
var temp__3698__auto____3487 = cljs.core.next.call(null,G__3469__3485);

if(cljs.core.truth_(temp__3698__auto____3487))
{var G__3469__3488 = temp__3698__auto____3487;

{
var G__3489 = cljs.core.first.call(null,G__3469__3488);
var G__3490 = G__3469__3488;
G__3472__3479 = G__3489;
G__3469__3480 = G__3490;
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
var this__3491 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3492 = this;
return (new cljs.core.List(this__3492.meta,o,coll,(this__3492.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3493 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3494 = this;
return this__3494.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3495 = this;
return this__3495.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3496 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3497 = this;
return this__3497.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3498 = this;
return this__3498.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3499 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3500 = this;
return (new cljs.core.List(meta,this__3500.first,this__3500.rest,this__3500.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3501 = this;
return this__3501.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3502 = this;
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
var this__3503 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3504 = this;
return (new cljs.core.List(this__3504.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3505 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3506 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3507 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3508 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3509 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3510 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3511 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3512 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3513 = this;
return this__3513.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3514 = this;
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
list.cljs$lang$applyTo = (function (arglist__3515){
var items = cljs.core.seq( arglist__3515 );;
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
var this__3516 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3517 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3518 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3519 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3519.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3520 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3521 = this;
return this__3521.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3522 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__3522.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__3522.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3523 = this;
return this__3523.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3524 = this;
return (new cljs.core.Cons(meta,this__3524.first,this__3524.rest));
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
var G__3525 = null;
var G__3525__3526 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3525__3527 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3525 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3525__3526.call(this,string,f);
case  3 :
return G__3525__3527.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3525;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3529 = null;
var G__3529__3530 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3529__3531 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3529 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3529__3530.call(this,string,k);
case  3 :
return G__3529__3531.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3529;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3533 = null;
var G__3533__3534 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3533__3535 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3533 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3533__3534.call(this,string,n);
case  3 :
return G__3533__3535.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3533;
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
var G__3537 = null;
var G__3537__3538 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__3537__3539 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__3537 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__3537__3538.call(this,this$,coll);
case  3 :
return G__3537__3539.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3537;
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
var x__3541 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3541;
} else
{lazy_seq.x = x__3541.call(null);
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
var this__3542 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3543 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3544 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3545 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3545.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3546 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3547 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3548 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3549 = this;
return this__3549.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3550 = this;
return (new cljs.core.LazySeq(meta,this__3550.realized,this__3550.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3551 = cljs.core.array.call(null);

var s__3552 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3552)))
{ary__3551.push(cljs.core.first.call(null,s__3552));
{
var G__3553 = cljs.core.next.call(null,s__3552);
s__3552 = G__3553;
continue;
}
} else
{return ary__3551;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3554 = s;
var i__3555 = n;
var sum__3556 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3557 = (i__3555 > 0);

if(cljs.core.truth_(and__3546__auto____3557))
{return cljs.core.seq.call(null,s__3554);
} else
{return and__3546__auto____3557;
}
})()))
{{
var G__3558 = cljs.core.next.call(null,s__3554);
var G__3559 = (i__3555 - 1);
var G__3560 = (sum__3556 + 1);
s__3554 = G__3558;
i__3555 = G__3559;
sum__3556 = G__3560;
continue;
}
} else
{return sum__3556;
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
var concat__3564 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3565 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3566 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3561 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3561))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3561),concat.call(null,cljs.core.rest.call(null,s__3561),y));
} else
{return y;
}
})));
});
var concat__3567 = (function() { 
var G__3569__delegate = function (x,y,zs){
var cat__3563 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3562 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3562))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3562),cat.call(null,cljs.core.rest.call(null,xys__3562),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3563.call(null,concat.call(null,x,y),zs);
};
var G__3569 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3569__delegate.call(this, x, y, zs);
};
G__3569.cljs$lang$maxFixedArity = 2;
G__3569.cljs$lang$applyTo = (function (arglist__3570){
var x = cljs.core.first(arglist__3570);
var y = cljs.core.first(cljs.core.next(arglist__3570));
var zs = cljs.core.rest(cljs.core.next(arglist__3570));
return G__3569__delegate.call(this, x, y, zs);
});
return G__3569;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3564.call(this);
case  1 :
return concat__3565.call(this,x);
case  2 :
return concat__3566.call(this,x,y);
default:
return concat__3567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3567.cljs$lang$applyTo;
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
var list_STAR___3571 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3572 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3573 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3574 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3575 = (function() { 
var G__3577__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3577 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3577__delegate.call(this, a, b, c, d, more);
};
G__3577.cljs$lang$maxFixedArity = 4;
G__3577.cljs$lang$applyTo = (function (arglist__3578){
var a = cljs.core.first(arglist__3578);
var b = cljs.core.first(cljs.core.next(arglist__3578));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3578)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3578))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3578))));
return G__3577__delegate.call(this, a, b, c, d, more);
});
return G__3577;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3571.call(this,a);
case  2 :
return list_STAR___3572.call(this,a,b);
case  3 :
return list_STAR___3573.call(this,a,b,c);
case  4 :
return list_STAR___3574.call(this,a,b,c,d);
default:
return list_STAR___3575.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3575.cljs$lang$applyTo;
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
var apply__3588 = (function (f,args){
var fixed_arity__3579 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3579 + 1)) <= fixed_arity__3579)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3589 = (function (f,x,args){
var arglist__3580 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3581 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3580,fixed_arity__3581) <= fixed_arity__3581)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3580));
} else
{return f.cljs$lang$applyTo(arglist__3580);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3580));
}
});
var apply__3590 = (function (f,x,y,args){
var arglist__3582 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3583 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3582,fixed_arity__3583) <= fixed_arity__3583)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3582));
} else
{return f.cljs$lang$applyTo(arglist__3582);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3582));
}
});
var apply__3591 = (function (f,x,y,z,args){
var arglist__3584 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3585 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3584,fixed_arity__3585) <= fixed_arity__3585)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3584));
} else
{return f.cljs$lang$applyTo(arglist__3584);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3584));
}
});
var apply__3592 = (function() { 
var G__3594__delegate = function (f,a,b,c,d,args){
var arglist__3586 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3587 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3586,fixed_arity__3587) <= fixed_arity__3587)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3586));
} else
{return f.cljs$lang$applyTo(arglist__3586);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3586));
}
};
var G__3594 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3594__delegate.call(this, f, a, b, c, d, args);
};
G__3594.cljs$lang$maxFixedArity = 5;
G__3594.cljs$lang$applyTo = (function (arglist__3595){
var f = cljs.core.first(arglist__3595);
var a = cljs.core.first(cljs.core.next(arglist__3595));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3595)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3595))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3595)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3595)))));
return G__3594__delegate.call(this, f, a, b, c, d, args);
});
return G__3594;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3588.call(this,f,a);
case  3 :
return apply__3589.call(this,f,a,b);
case  4 :
return apply__3590.call(this,f,a,b,c);
case  5 :
return apply__3591.call(this,f,a,b,c,d);
default:
return apply__3592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3592.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3596){
var obj = cljs.core.first(arglist__3596);
var f = cljs.core.first(cljs.core.next(arglist__3596));
var args = cljs.core.rest(cljs.core.next(arglist__3596));
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
var not_EQ___3597 = (function (x){
return false;
});
var not_EQ___3598 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3599 = (function() { 
var G__3601__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3601 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3601__delegate.call(this, x, y, more);
};
G__3601.cljs$lang$maxFixedArity = 2;
G__3601.cljs$lang$applyTo = (function (arglist__3602){
var x = cljs.core.first(arglist__3602);
var y = cljs.core.first(cljs.core.next(arglist__3602));
var more = cljs.core.rest(cljs.core.next(arglist__3602));
return G__3601__delegate.call(this, x, y, more);
});
return G__3601;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3597.call(this,x);
case  2 :
return not_EQ___3598.call(this,x,y);
default:
return not_EQ___3599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3599.cljs$lang$applyTo;
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
var G__3603 = pred;
var G__3604 = cljs.core.next.call(null,coll);
pred = G__3603;
coll = G__3604;
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
{var or__3548__auto____3605 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3605))
{return or__3548__auto____3605;
} else
{{
var G__3606 = pred;
var G__3607 = cljs.core.next.call(null,coll);
pred = G__3606;
coll = G__3607;
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
var G__3608 = null;
var G__3608__3609 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3608__3610 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3608__3611 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3608__3612 = (function() { 
var G__3614__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3614 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3614__delegate.call(this, x, y, zs);
};
G__3614.cljs$lang$maxFixedArity = 2;
G__3614.cljs$lang$applyTo = (function (arglist__3615){
var x = cljs.core.first(arglist__3615);
var y = cljs.core.first(cljs.core.next(arglist__3615));
var zs = cljs.core.rest(cljs.core.next(arglist__3615));
return G__3614__delegate.call(this, x, y, zs);
});
return G__3614;
})()
;
G__3608 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3608__3609.call(this);
case  1 :
return G__3608__3610.call(this,x);
case  2 :
return G__3608__3611.call(this,x,y);
default:
return G__3608__3612.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3608.cljs$lang$maxFixedArity = 2;
G__3608.cljs$lang$applyTo = G__3608__3612.cljs$lang$applyTo;
return G__3608;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3616__delegate = function (args){
return x;
};
var G__3616 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3616__delegate.call(this, args);
};
G__3616.cljs$lang$maxFixedArity = 0;
G__3616.cljs$lang$applyTo = (function (arglist__3617){
var args = cljs.core.seq( arglist__3617 );;
return G__3616__delegate.call(this, args);
});
return G__3616;
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
var comp__3621 = (function (){
return cljs.core.identity;
});
var comp__3622 = (function (f){
return f;
});
var comp__3623 = (function (f,g){
return (function() {
var G__3627 = null;
var G__3627__3628 = (function (){
return f.call(null,g.call(null));
});
var G__3627__3629 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3627__3630 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3627__3631 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3627__3632 = (function() { 
var G__3634__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3634 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3634__delegate.call(this, x, y, z, args);
};
G__3634.cljs$lang$maxFixedArity = 3;
G__3634.cljs$lang$applyTo = (function (arglist__3635){
var x = cljs.core.first(arglist__3635);
var y = cljs.core.first(cljs.core.next(arglist__3635));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3635)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3635)));
return G__3634__delegate.call(this, x, y, z, args);
});
return G__3634;
})()
;
G__3627 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3627__3628.call(this);
case  1 :
return G__3627__3629.call(this,x);
case  2 :
return G__3627__3630.call(this,x,y);
case  3 :
return G__3627__3631.call(this,x,y,z);
default:
return G__3627__3632.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3627.cljs$lang$maxFixedArity = 3;
G__3627.cljs$lang$applyTo = G__3627__3632.cljs$lang$applyTo;
return G__3627;
})()
});
var comp__3624 = (function (f,g,h){
return (function() {
var G__3636 = null;
var G__3636__3637 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3636__3638 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3636__3639 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3636__3640 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3636__3641 = (function() { 
var G__3643__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3643 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3643__delegate.call(this, x, y, z, args);
};
G__3643.cljs$lang$maxFixedArity = 3;
G__3643.cljs$lang$applyTo = (function (arglist__3644){
var x = cljs.core.first(arglist__3644);
var y = cljs.core.first(cljs.core.next(arglist__3644));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3644)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3644)));
return G__3643__delegate.call(this, x, y, z, args);
});
return G__3643;
})()
;
G__3636 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3636__3637.call(this);
case  1 :
return G__3636__3638.call(this,x);
case  2 :
return G__3636__3639.call(this,x,y);
case  3 :
return G__3636__3640.call(this,x,y,z);
default:
return G__3636__3641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3636.cljs$lang$maxFixedArity = 3;
G__3636.cljs$lang$applyTo = G__3636__3641.cljs$lang$applyTo;
return G__3636;
})()
});
var comp__3625 = (function() { 
var G__3645__delegate = function (f1,f2,f3,fs){
var fs__3618 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3646__delegate = function (args){
var ret__3619 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3618),args);
var fs__3620 = cljs.core.next.call(null,fs__3618);

while(true){
if(cljs.core.truth_(fs__3620))
{{
var G__3647 = cljs.core.first.call(null,fs__3620).call(null,ret__3619);
var G__3648 = cljs.core.next.call(null,fs__3620);
ret__3619 = G__3647;
fs__3620 = G__3648;
continue;
}
} else
{return ret__3619;
}
break;
}
};
var G__3646 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3646__delegate.call(this, args);
};
G__3646.cljs$lang$maxFixedArity = 0;
G__3646.cljs$lang$applyTo = (function (arglist__3649){
var args = cljs.core.seq( arglist__3649 );;
return G__3646__delegate.call(this, args);
});
return G__3646;
})()
;
};
var G__3645 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3645__delegate.call(this, f1, f2, f3, fs);
};
G__3645.cljs$lang$maxFixedArity = 3;
G__3645.cljs$lang$applyTo = (function (arglist__3650){
var f1 = cljs.core.first(arglist__3650);
var f2 = cljs.core.first(cljs.core.next(arglist__3650));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3650)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3650)));
return G__3645__delegate.call(this, f1, f2, f3, fs);
});
return G__3645;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3621.call(this);
case  1 :
return comp__3622.call(this,f1);
case  2 :
return comp__3623.call(this,f1,f2);
case  3 :
return comp__3624.call(this,f1,f2,f3);
default:
return comp__3625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3625.cljs$lang$applyTo;
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
var partial__3651 = (function (f,arg1){
return (function() { 
var G__3656__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3656 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3656__delegate.call(this, args);
};
G__3656.cljs$lang$maxFixedArity = 0;
G__3656.cljs$lang$applyTo = (function (arglist__3657){
var args = cljs.core.seq( arglist__3657 );;
return G__3656__delegate.call(this, args);
});
return G__3656;
})()
;
});
var partial__3652 = (function (f,arg1,arg2){
return (function() { 
var G__3658__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3658 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3658__delegate.call(this, args);
};
G__3658.cljs$lang$maxFixedArity = 0;
G__3658.cljs$lang$applyTo = (function (arglist__3659){
var args = cljs.core.seq( arglist__3659 );;
return G__3658__delegate.call(this, args);
});
return G__3658;
})()
;
});
var partial__3653 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3660__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3660 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3660__delegate.call(this, args);
};
G__3660.cljs$lang$maxFixedArity = 0;
G__3660.cljs$lang$applyTo = (function (arglist__3661){
var args = cljs.core.seq( arglist__3661 );;
return G__3660__delegate.call(this, args);
});
return G__3660;
})()
;
});
var partial__3654 = (function() { 
var G__3662__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3663__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3663 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3663__delegate.call(this, args);
};
G__3663.cljs$lang$maxFixedArity = 0;
G__3663.cljs$lang$applyTo = (function (arglist__3664){
var args = cljs.core.seq( arglist__3664 );;
return G__3663__delegate.call(this, args);
});
return G__3663;
})()
;
};
var G__3662 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3662__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3662.cljs$lang$maxFixedArity = 4;
G__3662.cljs$lang$applyTo = (function (arglist__3665){
var f = cljs.core.first(arglist__3665);
var arg1 = cljs.core.first(cljs.core.next(arglist__3665));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3665)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3665))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3665))));
return G__3662__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3662;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3651.call(this,f,arg1);
case  3 :
return partial__3652.call(this,f,arg1,arg2);
case  4 :
return partial__3653.call(this,f,arg1,arg2,arg3);
default:
return partial__3654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3654.cljs$lang$applyTo;
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
var fnil__3666 = (function (f,x){
return (function() {
var G__3670 = null;
var G__3670__3671 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3670__3672 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3670__3673 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3670__3674 = (function() { 
var G__3676__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3676 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3676__delegate.call(this, a, b, c, ds);
};
G__3676.cljs$lang$maxFixedArity = 3;
G__3676.cljs$lang$applyTo = (function (arglist__3677){
var a = cljs.core.first(arglist__3677);
var b = cljs.core.first(cljs.core.next(arglist__3677));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3677)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3677)));
return G__3676__delegate.call(this, a, b, c, ds);
});
return G__3676;
})()
;
G__3670 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3670__3671.call(this,a);
case  2 :
return G__3670__3672.call(this,a,b);
case  3 :
return G__3670__3673.call(this,a,b,c);
default:
return G__3670__3674.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3670.cljs$lang$maxFixedArity = 3;
G__3670.cljs$lang$applyTo = G__3670__3674.cljs$lang$applyTo;
return G__3670;
})()
});
var fnil__3667 = (function (f,x,y){
return (function() {
var G__3678 = null;
var G__3678__3679 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3678__3680 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3678__3681 = (function() { 
var G__3683__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3683 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3683__delegate.call(this, a, b, c, ds);
};
G__3683.cljs$lang$maxFixedArity = 3;
G__3683.cljs$lang$applyTo = (function (arglist__3684){
var a = cljs.core.first(arglist__3684);
var b = cljs.core.first(cljs.core.next(arglist__3684));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3684)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3684)));
return G__3683__delegate.call(this, a, b, c, ds);
});
return G__3683;
})()
;
G__3678 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3678__3679.call(this,a,b);
case  3 :
return G__3678__3680.call(this,a,b,c);
default:
return G__3678__3681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3678.cljs$lang$maxFixedArity = 3;
G__3678.cljs$lang$applyTo = G__3678__3681.cljs$lang$applyTo;
return G__3678;
})()
});
var fnil__3668 = (function (f,x,y,z){
return (function() {
var G__3685 = null;
var G__3685__3686 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3685__3687 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3685__3688 = (function() { 
var G__3690__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3690 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3690__delegate.call(this, a, b, c, ds);
};
G__3690.cljs$lang$maxFixedArity = 3;
G__3690.cljs$lang$applyTo = (function (arglist__3691){
var a = cljs.core.first(arglist__3691);
var b = cljs.core.first(cljs.core.next(arglist__3691));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3691)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3691)));
return G__3690__delegate.call(this, a, b, c, ds);
});
return G__3690;
})()
;
G__3685 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3685__3686.call(this,a,b);
case  3 :
return G__3685__3687.call(this,a,b,c);
default:
return G__3685__3688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3685.cljs$lang$maxFixedArity = 3;
G__3685.cljs$lang$applyTo = G__3685__3688.cljs$lang$applyTo;
return G__3685;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3666.call(this,f,x);
case  3 :
return fnil__3667.call(this,f,x,y);
case  4 :
return fnil__3668.call(this,f,x,y,z);
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
var mapi__3694 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3692 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3692))
{var s__3693 = temp__3698__auto____3692;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3693)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3693)));
} else
{return null;
}
})));
});

return mapi__3694.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3695 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3695))
{var s__3696 = temp__3698__auto____3695;

var x__3697 = f.call(null,cljs.core.first.call(null,s__3696));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3697)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3696));
} else
{return cljs.core.cons.call(null,x__3697,keep.call(null,f,cljs.core.rest.call(null,s__3696)));
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
var keepi__3707 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3704 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3704))
{var s__3705 = temp__3698__auto____3704;

var x__3706 = f.call(null,idx,cljs.core.first.call(null,s__3705));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3706)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3705));
} else
{return cljs.core.cons.call(null,x__3706,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3705)));
}
} else
{return null;
}
})));
});

return keepi__3707.call(null,0,coll);
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
var every_pred__3752 = (function (p){
return (function() {
var ep1 = null;
var ep1__3757 = (function (){
return true;
});
var ep1__3758 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3759 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3714 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3714))
{return p.call(null,y);
} else
{return and__3546__auto____3714;
}
})());
});
var ep1__3760 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3715 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3715))
{var and__3546__auto____3716 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3716))
{return p.call(null,z);
} else
{return and__3546__auto____3716;
}
} else
{return and__3546__auto____3715;
}
})());
});
var ep1__3761 = (function() { 
var G__3763__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3717 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3717))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3717;
}
})());
};
var G__3763 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3763__delegate.call(this, x, y, z, args);
};
G__3763.cljs$lang$maxFixedArity = 3;
G__3763.cljs$lang$applyTo = (function (arglist__3764){
var x = cljs.core.first(arglist__3764);
var y = cljs.core.first(cljs.core.next(arglist__3764));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3764)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3764)));
return G__3763__delegate.call(this, x, y, z, args);
});
return G__3763;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3757.call(this);
case  1 :
return ep1__3758.call(this,x);
case  2 :
return ep1__3759.call(this,x,y);
case  3 :
return ep1__3760.call(this,x,y,z);
default:
return ep1__3761.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3761.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3753 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3765 = (function (){
return true;
});
var ep2__3766 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3718 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3718))
{return p2.call(null,x);
} else
{return and__3546__auto____3718;
}
})());
});
var ep2__3767 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3719 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3719))
{var and__3546__auto____3720 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3720))
{var and__3546__auto____3721 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3721))
{return p2.call(null,y);
} else
{return and__3546__auto____3721;
}
} else
{return and__3546__auto____3720;
}
} else
{return and__3546__auto____3719;
}
})());
});
var ep2__3768 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3722 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3722))
{var and__3546__auto____3723 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3723))
{var and__3546__auto____3724 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3724))
{var and__3546__auto____3725 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3725))
{var and__3546__auto____3726 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3726))
{return p2.call(null,z);
} else
{return and__3546__auto____3726;
}
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
})());
});
var ep2__3769 = (function() { 
var G__3771__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3727 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3727))
{return cljs.core.every_QMARK_.call(null,(function (p1__3698_SHARP_){
var and__3546__auto____3728 = p1.call(null,p1__3698_SHARP_);

if(cljs.core.truth_(and__3546__auto____3728))
{return p2.call(null,p1__3698_SHARP_);
} else
{return and__3546__auto____3728;
}
}),args);
} else
{return and__3546__auto____3727;
}
})());
};
var G__3771 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3771__delegate.call(this, x, y, z, args);
};
G__3771.cljs$lang$maxFixedArity = 3;
G__3771.cljs$lang$applyTo = (function (arglist__3772){
var x = cljs.core.first(arglist__3772);
var y = cljs.core.first(cljs.core.next(arglist__3772));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3772)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3772)));
return G__3771__delegate.call(this, x, y, z, args);
});
return G__3771;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3765.call(this);
case  1 :
return ep2__3766.call(this,x);
case  2 :
return ep2__3767.call(this,x,y);
case  3 :
return ep2__3768.call(this,x,y,z);
default:
return ep2__3769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3769.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3754 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3773 = (function (){
return true;
});
var ep3__3774 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3729 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3729))
{var and__3546__auto____3730 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3730))
{return p3.call(null,x);
} else
{return and__3546__auto____3730;
}
} else
{return and__3546__auto____3729;
}
})());
});
var ep3__3775 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3731 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3731))
{var and__3546__auto____3732 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3732))
{var and__3546__auto____3733 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3733))
{var and__3546__auto____3734 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3734))
{var and__3546__auto____3735 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3735))
{return p3.call(null,y);
} else
{return and__3546__auto____3735;
}
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
})());
});
var ep3__3776 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3736 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3736))
{var and__3546__auto____3737 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3737))
{var and__3546__auto____3738 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3738))
{var and__3546__auto____3739 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3739))
{var and__3546__auto____3740 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3740))
{var and__3546__auto____3741 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3741))
{var and__3546__auto____3742 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3742))
{var and__3546__auto____3743 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3743))
{return p3.call(null,z);
} else
{return and__3546__auto____3743;
}
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
})());
});
var ep3__3777 = (function() { 
var G__3779__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3744 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3744))
{return cljs.core.every_QMARK_.call(null,(function (p1__3699_SHARP_){
var and__3546__auto____3745 = p1.call(null,p1__3699_SHARP_);

if(cljs.core.truth_(and__3546__auto____3745))
{var and__3546__auto____3746 = p2.call(null,p1__3699_SHARP_);

if(cljs.core.truth_(and__3546__auto____3746))
{return p3.call(null,p1__3699_SHARP_);
} else
{return and__3546__auto____3746;
}
} else
{return and__3546__auto____3745;
}
}),args);
} else
{return and__3546__auto____3744;
}
})());
};
var G__3779 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3779__delegate.call(this, x, y, z, args);
};
G__3779.cljs$lang$maxFixedArity = 3;
G__3779.cljs$lang$applyTo = (function (arglist__3780){
var x = cljs.core.first(arglist__3780);
var y = cljs.core.first(cljs.core.next(arglist__3780));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3780)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3780)));
return G__3779__delegate.call(this, x, y, z, args);
});
return G__3779;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3773.call(this);
case  1 :
return ep3__3774.call(this,x);
case  2 :
return ep3__3775.call(this,x,y);
case  3 :
return ep3__3776.call(this,x,y,z);
default:
return ep3__3777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3777.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3755 = (function() { 
var G__3781__delegate = function (p1,p2,p3,ps){
var ps__3747 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3782 = (function (){
return true;
});
var epn__3783 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3700_SHARP_){
return p1__3700_SHARP_.call(null,x);
}),ps__3747);
});
var epn__3784 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3701_SHARP_){
var and__3546__auto____3748 = p1__3701_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3748))
{return p1__3701_SHARP_.call(null,y);
} else
{return and__3546__auto____3748;
}
}),ps__3747);
});
var epn__3785 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3702_SHARP_){
var and__3546__auto____3749 = p1__3702_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3749))
{var and__3546__auto____3750 = p1__3702_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3750))
{return p1__3702_SHARP_.call(null,z);
} else
{return and__3546__auto____3750;
}
} else
{return and__3546__auto____3749;
}
}),ps__3747);
});
var epn__3786 = (function() { 
var G__3788__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3751 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3751))
{return cljs.core.every_QMARK_.call(null,(function (p1__3703_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3703_SHARP_,args);
}),ps__3747);
} else
{return and__3546__auto____3751;
}
})());
};
var G__3788 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3788__delegate.call(this, x, y, z, args);
};
G__3788.cljs$lang$maxFixedArity = 3;
G__3788.cljs$lang$applyTo = (function (arglist__3789){
var x = cljs.core.first(arglist__3789);
var y = cljs.core.first(cljs.core.next(arglist__3789));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3789)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3789)));
return G__3788__delegate.call(this, x, y, z, args);
});
return G__3788;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3782.call(this);
case  1 :
return epn__3783.call(this,x);
case  2 :
return epn__3784.call(this,x,y);
case  3 :
return epn__3785.call(this,x,y,z);
default:
return epn__3786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3786.cljs$lang$applyTo;
return epn;
})()
};
var G__3781 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3781__delegate.call(this, p1, p2, p3, ps);
};
G__3781.cljs$lang$maxFixedArity = 3;
G__3781.cljs$lang$applyTo = (function (arglist__3790){
var p1 = cljs.core.first(arglist__3790);
var p2 = cljs.core.first(cljs.core.next(arglist__3790));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3790)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3790)));
return G__3781__delegate.call(this, p1, p2, p3, ps);
});
return G__3781;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3752.call(this,p1);
case  2 :
return every_pred__3753.call(this,p1,p2);
case  3 :
return every_pred__3754.call(this,p1,p2,p3);
default:
return every_pred__3755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3755.cljs$lang$applyTo;
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
var some_fn__3830 = (function (p){
return (function() {
var sp1 = null;
var sp1__3835 = (function (){
return null;
});
var sp1__3836 = (function (x){
return p.call(null,x);
});
var sp1__3837 = (function (x,y){
var or__3548__auto____3792 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3792))
{return or__3548__auto____3792;
} else
{return p.call(null,y);
}
});
var sp1__3838 = (function (x,y,z){
var or__3548__auto____3793 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3793))
{return or__3548__auto____3793;
} else
{var or__3548__auto____3794 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3794))
{return or__3548__auto____3794;
} else
{return p.call(null,z);
}
}
});
var sp1__3839 = (function() { 
var G__3841__delegate = function (x,y,z,args){
var or__3548__auto____3795 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3795))
{return or__3548__auto____3795;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3841 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3841__delegate.call(this, x, y, z, args);
};
G__3841.cljs$lang$maxFixedArity = 3;
G__3841.cljs$lang$applyTo = (function (arglist__3842){
var x = cljs.core.first(arglist__3842);
var y = cljs.core.first(cljs.core.next(arglist__3842));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3842)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3842)));
return G__3841__delegate.call(this, x, y, z, args);
});
return G__3841;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3835.call(this);
case  1 :
return sp1__3836.call(this,x);
case  2 :
return sp1__3837.call(this,x,y);
case  3 :
return sp1__3838.call(this,x,y,z);
default:
return sp1__3839.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3839.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3831 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3843 = (function (){
return null;
});
var sp2__3844 = (function (x){
var or__3548__auto____3796 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3796))
{return or__3548__auto____3796;
} else
{return p2.call(null,x);
}
});
var sp2__3845 = (function (x,y){
var or__3548__auto____3797 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3797))
{return or__3548__auto____3797;
} else
{var or__3548__auto____3798 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3798))
{return or__3548__auto____3798;
} else
{var or__3548__auto____3799 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3799))
{return or__3548__auto____3799;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3846 = (function (x,y,z){
var or__3548__auto____3800 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3800))
{return or__3548__auto____3800;
} else
{var or__3548__auto____3801 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3801))
{return or__3548__auto____3801;
} else
{var or__3548__auto____3802 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3802))
{return or__3548__auto____3802;
} else
{var or__3548__auto____3803 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3803))
{return or__3548__auto____3803;
} else
{var or__3548__auto____3804 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3804))
{return or__3548__auto____3804;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3847 = (function() { 
var G__3849__delegate = function (x,y,z,args){
var or__3548__auto____3805 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3805))
{return or__3548__auto____3805;
} else
{return cljs.core.some.call(null,(function (p1__3708_SHARP_){
var or__3548__auto____3806 = p1.call(null,p1__3708_SHARP_);

if(cljs.core.truth_(or__3548__auto____3806))
{return or__3548__auto____3806;
} else
{return p2.call(null,p1__3708_SHARP_);
}
}),args);
}
};
var G__3849 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3849__delegate.call(this, x, y, z, args);
};
G__3849.cljs$lang$maxFixedArity = 3;
G__3849.cljs$lang$applyTo = (function (arglist__3850){
var x = cljs.core.first(arglist__3850);
var y = cljs.core.first(cljs.core.next(arglist__3850));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3850)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3850)));
return G__3849__delegate.call(this, x, y, z, args);
});
return G__3849;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3843.call(this);
case  1 :
return sp2__3844.call(this,x);
case  2 :
return sp2__3845.call(this,x,y);
case  3 :
return sp2__3846.call(this,x,y,z);
default:
return sp2__3847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3847.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3832 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3851 = (function (){
return null;
});
var sp3__3852 = (function (x){
var or__3548__auto____3807 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3807))
{return or__3548__auto____3807;
} else
{var or__3548__auto____3808 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3808))
{return or__3548__auto____3808;
} else
{return p3.call(null,x);
}
}
});
var sp3__3853 = (function (x,y){
var or__3548__auto____3809 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3809))
{return or__3548__auto____3809;
} else
{var or__3548__auto____3810 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3810))
{return or__3548__auto____3810;
} else
{var or__3548__auto____3811 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3811))
{return or__3548__auto____3811;
} else
{var or__3548__auto____3812 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3812))
{return or__3548__auto____3812;
} else
{var or__3548__auto____3813 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3813))
{return or__3548__auto____3813;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3854 = (function (x,y,z){
var or__3548__auto____3814 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3814))
{return or__3548__auto____3814;
} else
{var or__3548__auto____3815 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3815))
{return or__3548__auto____3815;
} else
{var or__3548__auto____3816 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3816))
{return or__3548__auto____3816;
} else
{var or__3548__auto____3817 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3817))
{return or__3548__auto____3817;
} else
{var or__3548__auto____3818 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3818))
{return or__3548__auto____3818;
} else
{var or__3548__auto____3819 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3819))
{return or__3548__auto____3819;
} else
{var or__3548__auto____3820 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3820))
{return or__3548__auto____3820;
} else
{var or__3548__auto____3821 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3821))
{return or__3548__auto____3821;
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
var sp3__3855 = (function() { 
var G__3857__delegate = function (x,y,z,args){
var or__3548__auto____3822 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3822))
{return or__3548__auto____3822;
} else
{return cljs.core.some.call(null,(function (p1__3709_SHARP_){
var or__3548__auto____3823 = p1.call(null,p1__3709_SHARP_);

if(cljs.core.truth_(or__3548__auto____3823))
{return or__3548__auto____3823;
} else
{var or__3548__auto____3824 = p2.call(null,p1__3709_SHARP_);

if(cljs.core.truth_(or__3548__auto____3824))
{return or__3548__auto____3824;
} else
{return p3.call(null,p1__3709_SHARP_);
}
}
}),args);
}
};
var G__3857 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3857__delegate.call(this, x, y, z, args);
};
G__3857.cljs$lang$maxFixedArity = 3;
G__3857.cljs$lang$applyTo = (function (arglist__3858){
var x = cljs.core.first(arglist__3858);
var y = cljs.core.first(cljs.core.next(arglist__3858));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3858)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3858)));
return G__3857__delegate.call(this, x, y, z, args);
});
return G__3857;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3851.call(this);
case  1 :
return sp3__3852.call(this,x);
case  2 :
return sp3__3853.call(this,x,y);
case  3 :
return sp3__3854.call(this,x,y,z);
default:
return sp3__3855.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3855.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3833 = (function() { 
var G__3859__delegate = function (p1,p2,p3,ps){
var ps__3825 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3860 = (function (){
return null;
});
var spn__3861 = (function (x){
return cljs.core.some.call(null,(function (p1__3710_SHARP_){
return p1__3710_SHARP_.call(null,x);
}),ps__3825);
});
var spn__3862 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3711_SHARP_){
var or__3548__auto____3826 = p1__3711_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3826))
{return or__3548__auto____3826;
} else
{return p1__3711_SHARP_.call(null,y);
}
}),ps__3825);
});
var spn__3863 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3712_SHARP_){
var or__3548__auto____3827 = p1__3712_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3827))
{return or__3548__auto____3827;
} else
{var or__3548__auto____3828 = p1__3712_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3828))
{return or__3548__auto____3828;
} else
{return p1__3712_SHARP_.call(null,z);
}
}
}),ps__3825);
});
var spn__3864 = (function() { 
var G__3866__delegate = function (x,y,z,args){
var or__3548__auto____3829 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3829))
{return or__3548__auto____3829;
} else
{return cljs.core.some.call(null,(function (p1__3713_SHARP_){
return cljs.core.some.call(null,p1__3713_SHARP_,args);
}),ps__3825);
}
};
var G__3866 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3866__delegate.call(this, x, y, z, args);
};
G__3866.cljs$lang$maxFixedArity = 3;
G__3866.cljs$lang$applyTo = (function (arglist__3867){
var x = cljs.core.first(arglist__3867);
var y = cljs.core.first(cljs.core.next(arglist__3867));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3867)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3867)));
return G__3866__delegate.call(this, x, y, z, args);
});
return G__3866;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3860.call(this);
case  1 :
return spn__3861.call(this,x);
case  2 :
return spn__3862.call(this,x,y);
case  3 :
return spn__3863.call(this,x,y,z);
default:
return spn__3864.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3864.cljs$lang$applyTo;
return spn;
})()
};
var G__3859 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3859__delegate.call(this, p1, p2, p3, ps);
};
G__3859.cljs$lang$maxFixedArity = 3;
G__3859.cljs$lang$applyTo = (function (arglist__3868){
var p1 = cljs.core.first(arglist__3868);
var p2 = cljs.core.first(cljs.core.next(arglist__3868));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3868)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3868)));
return G__3859__delegate.call(this, p1, p2, p3, ps);
});
return G__3859;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3830.call(this,p1);
case  2 :
return some_fn__3831.call(this,p1,p2);
case  3 :
return some_fn__3832.call(this,p1,p2,p3);
default:
return some_fn__3833.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3833.cljs$lang$applyTo;
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
var map__3881 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3869 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3869))
{var s__3870 = temp__3698__auto____3869;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3870)),map.call(null,f,cljs.core.rest.call(null,s__3870)));
} else
{return null;
}
})));
});
var map__3882 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3871 = cljs.core.seq.call(null,c1);
var s2__3872 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3873 = s1__3871;

if(cljs.core.truth_(and__3546__auto____3873))
{return s2__3872;
} else
{return and__3546__auto____3873;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3871),cljs.core.first.call(null,s2__3872)),map.call(null,f,cljs.core.rest.call(null,s1__3871),cljs.core.rest.call(null,s2__3872)));
} else
{return null;
}
})));
});
var map__3883 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3874 = cljs.core.seq.call(null,c1);
var s2__3875 = cljs.core.seq.call(null,c2);
var s3__3876 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3877 = s1__3874;

if(cljs.core.truth_(and__3546__auto____3877))
{var and__3546__auto____3878 = s2__3875;

if(cljs.core.truth_(and__3546__auto____3878))
{return s3__3876;
} else
{return and__3546__auto____3878;
}
} else
{return and__3546__auto____3877;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3874),cljs.core.first.call(null,s2__3875),cljs.core.first.call(null,s3__3876)),map.call(null,f,cljs.core.rest.call(null,s1__3874),cljs.core.rest.call(null,s2__3875),cljs.core.rest.call(null,s3__3876)));
} else
{return null;
}
})));
});
var map__3884 = (function() { 
var G__3886__delegate = function (f,c1,c2,c3,colls){
var step__3880 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3879 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3879)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3879),step.call(null,map.call(null,cljs.core.rest,ss__3879)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3791_SHARP_){
return cljs.core.apply.call(null,f,p1__3791_SHARP_);
}),step__3880.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3886 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3886__delegate.call(this, f, c1, c2, c3, colls);
};
G__3886.cljs$lang$maxFixedArity = 4;
G__3886.cljs$lang$applyTo = (function (arglist__3887){
var f = cljs.core.first(arglist__3887);
var c1 = cljs.core.first(cljs.core.next(arglist__3887));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3887)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3887))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3887))));
return G__3886__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3886;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3881.call(this,f,c1);
case  3 :
return map__3882.call(this,f,c1,c2);
case  4 :
return map__3883.call(this,f,c1,c2,c3);
default:
return map__3884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3884.cljs$lang$applyTo;
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
{var temp__3698__auto____3888 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3888))
{var s__3889 = temp__3698__auto____3888;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3889),take.call(null,(n - 1),cljs.core.rest.call(null,s__3889)));
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
var step__3892 = (function (n,coll){
while(true){
var s__3890 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3891 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3891))
{return s__3890;
} else
{return and__3546__auto____3891;
}
})()))
{{
var G__3893 = (n - 1);
var G__3894 = cljs.core.rest.call(null,s__3890);
n = G__3893;
coll = G__3894;
continue;
}
} else
{return s__3890;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3892.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3895 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3896 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3895.call(this,n);
case  2 :
return drop_last__3896.call(this,n,s);
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
var s__3898 = cljs.core.seq.call(null,coll);
var lead__3899 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3899))
{{
var G__3900 = cljs.core.next.call(null,s__3898);
var G__3901 = cljs.core.next.call(null,lead__3899);
s__3898 = G__3900;
lead__3899 = G__3901;
continue;
}
} else
{return s__3898;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3904 = (function (pred,coll){
while(true){
var s__3902 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3903 = s__3902;

if(cljs.core.truth_(and__3546__auto____3903))
{return pred.call(null,cljs.core.first.call(null,s__3902));
} else
{return and__3546__auto____3903;
}
})()))
{{
var G__3905 = pred;
var G__3906 = cljs.core.rest.call(null,s__3902);
pred = G__3905;
coll = G__3906;
continue;
}
} else
{return s__3902;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3904.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3907 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3907))
{var s__3908 = temp__3698__auto____3907;

return cljs.core.concat.call(null,s__3908,cycle.call(null,s__3908));
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
var repeat__3909 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3910 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3909.call(this,n);
case  2 :
return repeat__3910.call(this,n,x);
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
var repeatedly__3912 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3913 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3912.call(this,n);
case  2 :
return repeatedly__3913.call(this,n,f);
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
var interleave__3919 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3915 = cljs.core.seq.call(null,c1);
var s2__3916 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3917 = s1__3915;

if(cljs.core.truth_(and__3546__auto____3917))
{return s2__3916;
} else
{return and__3546__auto____3917;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3915),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3916),interleave.call(null,cljs.core.rest.call(null,s1__3915),cljs.core.rest.call(null,s2__3916))));
} else
{return null;
}
})));
});
var interleave__3920 = (function() { 
var G__3922__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3918 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3918)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3918),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3918)));
} else
{return null;
}
})));
};
var G__3922 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3922__delegate.call(this, c1, c2, colls);
};
G__3922.cljs$lang$maxFixedArity = 2;
G__3922.cljs$lang$applyTo = (function (arglist__3923){
var c1 = cljs.core.first(arglist__3923);
var c2 = cljs.core.first(cljs.core.next(arglist__3923));
var colls = cljs.core.rest(cljs.core.next(arglist__3923));
return G__3922__delegate.call(this, c1, c2, colls);
});
return G__3922;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3919.call(this,c1,c2);
default:
return interleave__3920.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3920.cljs$lang$applyTo;
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
var cat__3926 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3924 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3924))
{var coll__3925 = temp__3695__auto____3924;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3925),cat.call(null,cljs.core.rest.call(null,coll__3925),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3926.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3927 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3928 = (function() { 
var G__3930__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3930 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3930__delegate.call(this, f, coll, colls);
};
G__3930.cljs$lang$maxFixedArity = 2;
G__3930.cljs$lang$applyTo = (function (arglist__3931){
var f = cljs.core.first(arglist__3931);
var coll = cljs.core.first(cljs.core.next(arglist__3931));
var colls = cljs.core.rest(cljs.core.next(arglist__3931));
return G__3930__delegate.call(this, f, coll, colls);
});
return G__3930;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3927.call(this,f,coll);
default:
return mapcat__3928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3928.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3932 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3932))
{var s__3933 = temp__3698__auto____3932;

var f__3934 = cljs.core.first.call(null,s__3933);
var r__3935 = cljs.core.rest.call(null,s__3933);

if(cljs.core.truth_(pred.call(null,f__3934)))
{return cljs.core.cons.call(null,f__3934,filter.call(null,pred,r__3935));
} else
{return filter.call(null,pred,r__3935);
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
var walk__3937 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3937.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3936_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3936_SHARP_));
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
var partition__3944 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3945 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3938 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3938))
{var s__3939 = temp__3698__auto____3938;

var p__3940 = cljs.core.take.call(null,n,s__3939);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3940))))
{return cljs.core.cons.call(null,p__3940,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3939)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3946 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3941 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3941))
{var s__3942 = temp__3698__auto____3941;

var p__3943 = cljs.core.take.call(null,n,s__3942);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3943))))
{return cljs.core.cons.call(null,p__3943,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3942)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3943,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3944.call(this,n,step);
case  3 :
return partition__3945.call(this,n,step,pad);
case  4 :
return partition__3946.call(this,n,step,pad,coll);
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
var get_in__3952 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3953 = (function (m,ks,not_found){
var sentinel__3948 = cljs.core.lookup_sentinel;
var m__3949 = m;
var ks__3950 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3950))
{var m__3951 = cljs.core.get.call(null,m__3949,cljs.core.first.call(null,ks__3950),sentinel__3948);

if(cljs.core.truth_((sentinel__3948 === m__3951)))
{return not_found;
} else
{{
var G__3955 = sentinel__3948;
var G__3956 = m__3951;
var G__3957 = cljs.core.next.call(null,ks__3950);
sentinel__3948 = G__3955;
m__3949 = G__3956;
ks__3950 = G__3957;
continue;
}
}
} else
{return m__3949;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3952.call(this,m,ks);
case  3 :
return get_in__3953.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3958,v){
var vec__3959__3960 = p__3958;
var k__3961 = cljs.core.nth.call(null,vec__3959__3960,0,null);
var ks__3962 = cljs.core.nthnext.call(null,vec__3959__3960,1);

if(cljs.core.truth_(ks__3962))
{return cljs.core.assoc.call(null,m,k__3961,assoc_in.call(null,cljs.core.get.call(null,m,k__3961),ks__3962,v));
} else
{return cljs.core.assoc.call(null,m,k__3961,v);
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
var update_in__delegate = function (m,p__3963,f,args){
var vec__3964__3965 = p__3963;
var k__3966 = cljs.core.nth.call(null,vec__3964__3965,0,null);
var ks__3967 = cljs.core.nthnext.call(null,vec__3964__3965,1);

if(cljs.core.truth_(ks__3967))
{return cljs.core.assoc.call(null,m,k__3966,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3966),ks__3967,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3966,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3966),args));
}
};
var update_in = function (m,p__3963,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3963, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3968){
var m = cljs.core.first(arglist__3968);
var p__3963 = cljs.core.first(cljs.core.next(arglist__3968));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3968)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3968)));
return update_in__delegate.call(this, m, p__3963, f, args);
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
var this__3969 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3996 = null;
var G__3996__3997 = (function (coll,k){
var this__3970 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3996__3998 = (function (coll,k,not_found){
var this__3971 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3996 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3996__3997.call(this,coll,k);
case  3 :
return G__3996__3998.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3996;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3972 = this;
var new_array__3973 = cljs.core.aclone.call(null,this__3972.array);

(new_array__3973[k] = v);
return (new cljs.core.Vector(this__3972.meta,new_array__3973));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__4000 = null;
var G__4000__4001 = (function (coll,k){
var this__3974 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4000__4002 = (function (coll,k,not_found){
var this__3975 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4000 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4000__4001.call(this,coll,k);
case  3 :
return G__4000__4002.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4000;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3976 = this;
var new_array__3977 = cljs.core.aclone.call(null,this__3976.array);

new_array__3977.push(o);
return (new cljs.core.Vector(this__3976.meta,new_array__3977));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4004 = null;
var G__4004__4005 = (function (v,f){
var this__3978 = this;
return cljs.core.ci_reduce.call(null,this__3978.array,f);
});
var G__4004__4006 = (function (v,f,start){
var this__3979 = this;
return cljs.core.ci_reduce.call(null,this__3979.array,f,start);
});
G__4004 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4004__4005.call(this,v,f);
case  3 :
return G__4004__4006.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4004;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3980 = this;
if(cljs.core.truth_((this__3980.array.length > 0)))
{var vector_seq__3981 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3980.array.length)))
{return cljs.core.cons.call(null,(this__3980.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3981.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3982 = this;
return this__3982.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3983 = this;
var count__3984 = this__3983.array.length;

if(cljs.core.truth_((count__3984 > 0)))
{return (this__3983.array[(count__3984 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3985 = this;
if(cljs.core.truth_((this__3985.array.length > 0)))
{var new_array__3986 = cljs.core.aclone.call(null,this__3985.array);

new_array__3986.pop();
return (new cljs.core.Vector(this__3985.meta,new_array__3986));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3987 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3988 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3989 = this;
return (new cljs.core.Vector(meta,this__3989.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3990 = this;
return this__3990.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4008 = null;
var G__4008__4009 = (function (coll,n){
var this__3991 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3992 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3992))
{return (n < this__3991.array.length);
} else
{return and__3546__auto____3992;
}
})()))
{return (this__3991.array[n]);
} else
{return null;
}
});
var G__4008__4010 = (function (coll,n,not_found){
var this__3993 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3994 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3994))
{return (n < this__3993.array.length);
} else
{return and__3546__auto____3994;
}
})()))
{return (this__3993.array[n]);
} else
{return not_found;
}
});
G__4008 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4008__4009.call(this,coll,n);
case  3 :
return G__4008__4010.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4008;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3995 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3995.meta);
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
vector.cljs$lang$applyTo = (function (arglist__4012){
var args = cljs.core.seq( arglist__4012 );;
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
var this__4013 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4035 = null;
var G__4035__4036 = (function (coll,k){
var this__4014 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4035__4037 = (function (coll,k,not_found){
var this__4015 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4035 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4035__4036.call(this,coll,k);
case  3 :
return G__4035__4037.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4035;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4016 = this;
var v_pos__4017 = (this__4016.start + key);

return (new cljs.core.Subvec(this__4016.meta,cljs.core._assoc.call(null,this__4016.v,v_pos__4017,val),this__4016.start,((this__4016.end > (v_pos__4017 + 1)) ? this__4016.end : (v_pos__4017 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4039 = null;
var G__4039__4040 = (function (coll,k){
var this__4018 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4039__4041 = (function (coll,k,not_found){
var this__4019 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4039 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4039__4040.call(this,coll,k);
case  3 :
return G__4039__4041.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4039;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4020 = this;
return (new cljs.core.Subvec(this__4020.meta,cljs.core._assoc_n.call(null,this__4020.v,this__4020.end,o),this__4020.start,(this__4020.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4043 = null;
var G__4043__4044 = (function (coll,f){
var this__4021 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4043__4045 = (function (coll,f,start){
var this__4022 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4043 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4043__4044.call(this,coll,f);
case  3 :
return G__4043__4045.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4043;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4023 = this;
var subvec_seq__4024 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4023.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4023.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4024.call(null,this__4023.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4025 = this;
return (this__4025.end - this__4025.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4026 = this;
return cljs.core._nth.call(null,this__4026.v,(this__4026.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4027 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4027.start,this__4027.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4027.meta,this__4027.v,this__4027.start,(this__4027.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4028 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4029 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4030 = this;
return (new cljs.core.Subvec(meta,this__4030.v,this__4030.start,this__4030.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4031 = this;
return this__4031.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4047 = null;
var G__4047__4048 = (function (coll,n){
var this__4032 = this;
return cljs.core._nth.call(null,this__4032.v,(this__4032.start + n));
});
var G__4047__4049 = (function (coll,n,not_found){
var this__4033 = this;
return cljs.core._nth.call(null,this__4033.v,(this__4033.start + n),not_found);
});
G__4047 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4047__4048.call(this,coll,n);
case  3 :
return G__4047__4049.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4047;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4034 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4034.meta);
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
var subvec__4051 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4052 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4051.call(this,v,start);
case  3 :
return subvec__4052.call(this,v,start,end);
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
var this__4054 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4055 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4056 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4057 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4057.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4058 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4059 = this;
return cljs.core._first.call(null,this__4059.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4060 = this;
var temp__3695__auto____4061 = cljs.core.next.call(null,this__4060.front);

if(cljs.core.truth_(temp__3695__auto____4061))
{var f1__4062 = temp__3695__auto____4061;

return (new cljs.core.PersistentQueueSeq(this__4060.meta,f1__4062,this__4060.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__4060.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4060.meta,this__4060.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4063 = this;
return this__4063.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4064 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4064.front,this__4064.rear));
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
var this__4065 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4066 = this;
if(cljs.core.truth_(this__4066.front))
{return (new cljs.core.PersistentQueue(this__4066.meta,(this__4066.count + 1),this__4066.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4067 = this__4066.rear;

if(cljs.core.truth_(or__3548__auto____4067))
{return or__3548__auto____4067;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4066.meta,(this__4066.count + 1),cljs.core.conj.call(null,this__4066.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4068 = this;
var rear__4069 = cljs.core.seq.call(null,this__4068.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4070 = this__4068.front;

if(cljs.core.truth_(or__3548__auto____4070))
{return or__3548__auto____4070;
} else
{return rear__4069;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4068.front,cljs.core.seq.call(null,rear__4069)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4071 = this;
return this__4071.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4072 = this;
return cljs.core._first.call(null,this__4072.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4073 = this;
if(cljs.core.truth_(this__4073.front))
{var temp__3695__auto____4074 = cljs.core.next.call(null,this__4073.front);

if(cljs.core.truth_(temp__3695__auto____4074))
{var f1__4075 = temp__3695__auto____4074;

return (new cljs.core.PersistentQueue(this__4073.meta,(this__4073.count - 1),f1__4075,this__4073.rear));
} else
{return (new cljs.core.PersistentQueue(this__4073.meta,(this__4073.count - 1),cljs.core.seq.call(null,this__4073.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4076 = this;
return cljs.core.first.call(null,this__4076.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4077 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4078 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4079 = this;
return (new cljs.core.PersistentQueue(meta,this__4079.count,this__4079.front,this__4079.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4080 = this;
return this__4080.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4081 = this;
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
var this__4082 = this;
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
var len__4083 = array.length;

var i__4084 = 0;

while(true){
if(cljs.core.truth_((i__4084 < len__4083)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4084]))))
{return i__4084;
} else
{{
var G__4085 = (i__4084 + incr);
i__4084 = G__4085;
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
var obj_map_contains_key_QMARK___4087 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4088 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4086 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4086))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4086;
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
return obj_map_contains_key_QMARK___4087.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4088.call(this,k,strobj,true_val,false_val);
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
var this__4091 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4112 = null;
var G__4112__4113 = (function (coll,k){
var this__4092 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4112__4114 = (function (coll,k,not_found){
var this__4093 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4093.strobj,(this__4093.strobj[k]),not_found);
});
G__4112 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4112__4113.call(this,coll,k);
case  3 :
return G__4112__4114.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4112;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4094 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4095 = goog.object.clone.call(null,this__4094.strobj);
var overwrite_QMARK___4096 = new_strobj__4095.hasOwnProperty(k);

(new_strobj__4095[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4096))
{return (new cljs.core.ObjMap(this__4094.meta,this__4094.keys,new_strobj__4095));
} else
{var new_keys__4097 = cljs.core.aclone.call(null,this__4094.keys);

new_keys__4097.push(k);
return (new cljs.core.ObjMap(this__4094.meta,new_keys__4097,new_strobj__4095));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4094.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4098 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4098.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4116 = null;
var G__4116__4117 = (function (coll,k){
var this__4099 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4116__4118 = (function (coll,k,not_found){
var this__4100 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4116 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4116__4117.call(this,coll,k);
case  3 :
return G__4116__4118.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4116;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4101 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4102 = this;
if(cljs.core.truth_((this__4102.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4090_SHARP_){
return cljs.core.vector.call(null,p1__4090_SHARP_,(this__4102.strobj[p1__4090_SHARP_]));
}),this__4102.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4103 = this;
return this__4103.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4104 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4105 = this;
return (new cljs.core.ObjMap(meta,this__4105.keys,this__4105.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4106 = this;
return this__4106.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4107 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4107.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4108 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4109 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4109))
{return this__4108.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4109;
}
})()))
{var new_keys__4110 = cljs.core.aclone.call(null,this__4108.keys);
var new_strobj__4111 = goog.object.clone.call(null,this__4108.strobj);

new_keys__4110.splice(cljs.core.scan_array.call(null,1,k,new_keys__4110),1);
cljs.core.js_delete.call(null,new_strobj__4111,k);
return (new cljs.core.ObjMap(this__4108.meta,new_keys__4110,new_strobj__4111));
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
var this__4121 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4153 = null;
var G__4153__4154 = (function (coll,k){
var this__4122 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4153__4155 = (function (coll,k,not_found){
var this__4123 = this;
var bucket__4124 = (this__4123.hashobj[cljs.core.hash.call(null,k)]);
var i__4125 = (cljs.core.truth_(bucket__4124)?cljs.core.scan_array.call(null,2,k,bucket__4124):null);

if(cljs.core.truth_(i__4125))
{return (bucket__4124[(i__4125 + 1)]);
} else
{return not_found;
}
});
G__4153 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4153__4154.call(this,coll,k);
case  3 :
return G__4153__4155.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4153;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4126 = this;
var h__4127 = cljs.core.hash.call(null,k);
var bucket__4128 = (this__4126.hashobj[h__4127]);

if(cljs.core.truth_(bucket__4128))
{var new_bucket__4129 = cljs.core.aclone.call(null,bucket__4128);
var new_hashobj__4130 = goog.object.clone.call(null,this__4126.hashobj);

(new_hashobj__4130[h__4127] = new_bucket__4129);
var temp__3695__auto____4131 = cljs.core.scan_array.call(null,2,k,new_bucket__4129);

if(cljs.core.truth_(temp__3695__auto____4131))
{var i__4132 = temp__3695__auto____4131;

(new_bucket__4129[(i__4132 + 1)] = v);
return (new cljs.core.HashMap(this__4126.meta,this__4126.count,new_hashobj__4130));
} else
{new_bucket__4129.push(k,v);
return (new cljs.core.HashMap(this__4126.meta,(this__4126.count + 1),new_hashobj__4130));
}
} else
{var new_hashobj__4133 = goog.object.clone.call(null,this__4126.hashobj);

(new_hashobj__4133[h__4127] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__4126.meta,(this__4126.count + 1),new_hashobj__4133));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4134 = this;
var bucket__4135 = (this__4134.hashobj[cljs.core.hash.call(null,k)]);
var i__4136 = (cljs.core.truth_(bucket__4135)?cljs.core.scan_array.call(null,2,k,bucket__4135):null);

if(cljs.core.truth_(i__4136))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4157 = null;
var G__4157__4158 = (function (coll,k){
var this__4137 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4157__4159 = (function (coll,k,not_found){
var this__4138 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4157 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4157__4158.call(this,coll,k);
case  3 :
return G__4157__4159.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4157;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4139 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4140 = this;
if(cljs.core.truth_((this__4140.count > 0)))
{var hashes__4141 = cljs.core.js_keys.call(null,this__4140.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4120_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4140.hashobj[p1__4120_SHARP_])));
}),hashes__4141);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4142 = this;
return this__4142.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4143 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4144 = this;
return (new cljs.core.HashMap(meta,this__4144.count,this__4144.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4145 = this;
return this__4145.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4146 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4146.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4147 = this;
var h__4148 = cljs.core.hash.call(null,k);
var bucket__4149 = (this__4147.hashobj[h__4148]);
var i__4150 = (cljs.core.truth_(bucket__4149)?cljs.core.scan_array.call(null,2,k,bucket__4149):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4150)))
{return coll;
} else
{var new_hashobj__4151 = goog.object.clone.call(null,this__4147.hashobj);

if(cljs.core.truth_((3 > bucket__4149.length)))
{cljs.core.js_delete.call(null,new_hashobj__4151,h__4148);
} else
{var new_bucket__4152 = cljs.core.aclone.call(null,bucket__4149);

new_bucket__4152.splice(i__4150,2);
(new_hashobj__4151[h__4148] = new_bucket__4152);
}
return (new cljs.core.HashMap(this__4147.meta,(this__4147.count - 1),new_hashobj__4151));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4161 = ks.length;

var i__4162 = 0;
var out__4163 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4162 < len__4161)))
{{
var G__4164 = (i__4162 + 1);
var G__4165 = cljs.core.assoc.call(null,out__4163,(ks[i__4162]),(vs[i__4162]));
i__4162 = G__4164;
out__4163 = G__4165;
continue;
}
} else
{return out__4163;
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
var in$__4166 = cljs.core.seq.call(null,keyvals);
var out__4167 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4166))
{{
var G__4168 = cljs.core.nnext.call(null,in$__4166);
var G__4169 = cljs.core.assoc.call(null,out__4167,cljs.core.first.call(null,in$__4166),cljs.core.second.call(null,in$__4166));
in$__4166 = G__4168;
out__4167 = G__4169;
continue;
}
} else
{return out__4167;
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
hash_map.cljs$lang$applyTo = (function (arglist__4170){
var keyvals = cljs.core.seq( arglist__4170 );;
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
{return cljs.core.reduce.call(null,(function (p1__4171_SHARP_,p2__4172_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4173 = p1__4171_SHARP_;

if(cljs.core.truth_(or__3548__auto____4173))
{return or__3548__auto____4173;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4172_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__4174){
var maps = cljs.core.seq( arglist__4174 );;
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
{var merge_entry__4177 = (function (m,e){
var k__4175 = cljs.core.first.call(null,e);
var v__4176 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4175)))
{return cljs.core.assoc.call(null,m,k__4175,f.call(null,cljs.core.get.call(null,m,k__4175),v__4176));
} else
{return cljs.core.assoc.call(null,m,k__4175,v__4176);
}
});
var merge2__4179 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4177,(function (){var or__3548__auto____4178 = m1;

if(cljs.core.truth_(or__3548__auto____4178))
{return or__3548__auto____4178;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4179,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__4180){
var f = cljs.core.first(arglist__4180);
var maps = cljs.core.rest(arglist__4180);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4182 = cljs.core.ObjMap.fromObject([],{});
var keys__4183 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4183))
{var key__4184 = cljs.core.first.call(null,keys__4183);
var entry__4185 = cljs.core.get.call(null,map,key__4184,"﷐'user/not-found");

{
var G__4186 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4185,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__4182,key__4184,entry__4185):ret__4182);
var G__4187 = cljs.core.next.call(null,keys__4183);
ret__4182 = G__4186;
keys__4183 = G__4187;
continue;
}
} else
{return ret__4182;
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
var this__4188 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4203 = null;
var G__4203__4204 = (function (coll,v){
var this__4189 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4203__4205 = (function (coll,v,not_found){
var this__4190 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4190.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4203 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4203__4204.call(this,coll,v);
case  3 :
return G__4203__4205.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4203;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4207 = null;
var G__4207__4208 = (function (coll,k){
var this__4191 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4207__4209 = (function (coll,k,not_found){
var this__4192 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4207 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4207__4208.call(this,coll,k);
case  3 :
return G__4207__4209.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4207;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4193 = this;
return (new cljs.core.Set(this__4193.meta,cljs.core.assoc.call(null,this__4193.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4194 = this;
return cljs.core.keys.call(null,this__4194.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4195 = this;
return (new cljs.core.Set(this__4195.meta,cljs.core.dissoc.call(null,this__4195.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4196 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4197 = this;
var and__3546__auto____4198 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4198))
{var and__3546__auto____4199 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4199))
{return cljs.core.every_QMARK_.call(null,(function (p1__4181_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4181_SHARP_);
}),other);
} else
{return and__3546__auto____4199;
}
} else
{return and__3546__auto____4198;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4200 = this;
return (new cljs.core.Set(meta,this__4200.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4201 = this;
return this__4201.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4202 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4202.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4212 = cljs.core.seq.call(null,coll);
var out__4213 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4212))))
{{
var G__4214 = cljs.core.rest.call(null,in$__4212);
var G__4215 = cljs.core.conj.call(null,out__4213,cljs.core.first.call(null,in$__4212));
in$__4212 = G__4214;
out__4213 = G__4215;
continue;
}
} else
{return out__4213;
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
{var n__4216 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4217 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4217))
{var e__4218 = temp__3695__auto____4217;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4218));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4216,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4211_SHARP_){
var temp__3695__auto____4219 = cljs.core.find.call(null,smap,p1__4211_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4219))
{var e__4220 = temp__3695__auto____4219;

return cljs.core.second.call(null,e__4220);
} else
{return p1__4211_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4228 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4221,seen){
while(true){
var vec__4222__4223 = p__4221;
var f__4224 = cljs.core.nth.call(null,vec__4222__4223,0,null);
var xs__4225 = vec__4222__4223;

var temp__3698__auto____4226 = cljs.core.seq.call(null,xs__4225);

if(cljs.core.truth_(temp__3698__auto____4226))
{var s__4227 = temp__3698__auto____4226;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4224)))
{{
var G__4229 = cljs.core.rest.call(null,s__4227);
var G__4230 = seen;
p__4221 = G__4229;
seen = G__4230;
continue;
}
} else
{return cljs.core.cons.call(null,f__4224,step.call(null,cljs.core.rest.call(null,s__4227),cljs.core.conj.call(null,seen,f__4224)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4228.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4231 = cljs.core.Vector.fromArray([]);
var s__4232 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4232)))
{{
var G__4233 = cljs.core.conj.call(null,ret__4231,cljs.core.first.call(null,s__4232));
var G__4234 = cljs.core.next.call(null,s__4232);
ret__4231 = G__4233;
s__4232 = G__4234;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4231);
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
{if(cljs.core.truth_((function (){var or__3548__auto____4235 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4235))
{return or__3548__auto____4235;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4236 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4236 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4236 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____4237 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4237))
{return or__3548__auto____4237;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4238 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4238 > -1)))
{return cljs.core.subs.call(null,x,2,i__4238);
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
var map__4241 = cljs.core.ObjMap.fromObject([],{});
var ks__4242 = cljs.core.seq.call(null,keys);
var vs__4243 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4244 = ks__4242;

if(cljs.core.truth_(and__3546__auto____4244))
{return vs__4243;
} else
{return and__3546__auto____4244;
}
})()))
{{
var G__4245 = cljs.core.assoc.call(null,map__4241,cljs.core.first.call(null,ks__4242),cljs.core.first.call(null,vs__4243));
var G__4246 = cljs.core.next.call(null,ks__4242);
var G__4247 = cljs.core.next.call(null,vs__4243);
map__4241 = G__4245;
ks__4242 = G__4246;
vs__4243 = G__4247;
continue;
}
} else
{return map__4241;
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
var max_key__4250 = (function (k,x){
return x;
});
var max_key__4251 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4252 = (function() { 
var G__4254__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4239_SHARP_,p2__4240_SHARP_){
return max_key.call(null,k,p1__4239_SHARP_,p2__4240_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4254 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4254__delegate.call(this, k, x, y, more);
};
G__4254.cljs$lang$maxFixedArity = 3;
G__4254.cljs$lang$applyTo = (function (arglist__4255){
var k = cljs.core.first(arglist__4255);
var x = cljs.core.first(cljs.core.next(arglist__4255));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4255)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4255)));
return G__4254__delegate.call(this, k, x, y, more);
});
return G__4254;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4250.call(this,k,x);
case  3 :
return max_key__4251.call(this,k,x,y);
default:
return max_key__4252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4252.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4256 = (function (k,x){
return x;
});
var min_key__4257 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4258 = (function() { 
var G__4260__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4248_SHARP_,p2__4249_SHARP_){
return min_key.call(null,k,p1__4248_SHARP_,p2__4249_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4260 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4260__delegate.call(this, k, x, y, more);
};
G__4260.cljs$lang$maxFixedArity = 3;
G__4260.cljs$lang$applyTo = (function (arglist__4261){
var k = cljs.core.first(arglist__4261);
var x = cljs.core.first(cljs.core.next(arglist__4261));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4261)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4261)));
return G__4260__delegate.call(this, k, x, y, more);
});
return G__4260;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4256.call(this,k,x);
case  3 :
return min_key__4257.call(this,k,x,y);
default:
return min_key__4258.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4258.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4264 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4265 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4262 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4262))
{var s__4263 = temp__3698__auto____4262;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4263),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4263)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4264.call(this,n,step);
case  3 :
return partition_all__4265.call(this,n,step,coll);
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
var temp__3698__auto____4267 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4267))
{var s__4268 = temp__3698__auto____4267;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4268))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4268),take_while.call(null,pred,cljs.core.rest.call(null,s__4268)));
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
var this__4269 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4270 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4286 = null;
var G__4286__4287 = (function (rng,f){
var this__4271 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4286__4288 = (function (rng,f,s){
var this__4272 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4286 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4286__4287.call(this,rng,f);
case  3 :
return G__4286__4288.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4286;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4273 = this;
var comp__4274 = (cljs.core.truth_((this__4273.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4274.call(null,this__4273.start,this__4273.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4275 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4275.end - this__4275.start) / this__4275.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4276 = this;
return this__4276.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4277 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4277.meta,(this__4277.start + this__4277.step),this__4277.end,this__4277.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4278 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4279 = this;
return (new cljs.core.Range(meta,this__4279.start,this__4279.end,this__4279.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4280 = this;
return this__4280.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4290 = null;
var G__4290__4291 = (function (rng,n){
var this__4281 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4281.start + (n * this__4281.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4282 = (this__4281.start > this__4281.end);

if(cljs.core.truth_(and__3546__auto____4282))
{return cljs.core._EQ_.call(null,this__4281.step,0);
} else
{return and__3546__auto____4282;
}
})()))
{return this__4281.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4290__4292 = (function (rng,n,not_found){
var this__4283 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4283.start + (n * this__4283.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4284 = (this__4283.start > this__4283.end);

if(cljs.core.truth_(and__3546__auto____4284))
{return cljs.core._EQ_.call(null,this__4283.step,0);
} else
{return and__3546__auto____4284;
}
})()))
{return this__4283.start;
} else
{return not_found;
}
}
});
G__4290 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4290__4291.call(this,rng,n);
case  3 :
return G__4290__4292.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4290;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4285 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4285.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4294 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4295 = (function (end){
return range.call(null,0,end,1);
});
var range__4296 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4297 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4294.call(this);
case  1 :
return range__4295.call(this,start);
case  2 :
return range__4296.call(this,start,end);
case  3 :
return range__4297.call(this,start,end,step);
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
var temp__3698__auto____4299 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4299))
{var s__4300 = temp__3698__auto____4299;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4300),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4300)));
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
var temp__3698__auto____4302 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4302))
{var s__4303 = temp__3698__auto____4302;

var fst__4304 = cljs.core.first.call(null,s__4303);
var fv__4305 = f.call(null,fst__4304);
var run__4306 = cljs.core.cons.call(null,fst__4304,cljs.core.take_while.call(null,(function (p1__4301_SHARP_){
return cljs.core._EQ_.call(null,fv__4305,f.call(null,p1__4301_SHARP_));
}),cljs.core.next.call(null,s__4303)));

return cljs.core.cons.call(null,run__4306,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4306),s__4303))));
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
var reductions__4321 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4317 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4317))
{var s__4318 = temp__3695__auto____4317;

return reductions.call(null,f,cljs.core.first.call(null,s__4318),cljs.core.rest.call(null,s__4318));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4322 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4319 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4319))
{var s__4320 = temp__3698__auto____4319;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4320)),cljs.core.rest.call(null,s__4320));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4321.call(this,f,init);
case  3 :
return reductions__4322.call(this,f,init,coll);
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
var juxt__4325 = (function (f){
return (function() {
var G__4330 = null;
var G__4330__4331 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4330__4332 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4330__4333 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4330__4334 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4330__4335 = (function() { 
var G__4337__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4337 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4337__delegate.call(this, x, y, z, args);
};
G__4337.cljs$lang$maxFixedArity = 3;
G__4337.cljs$lang$applyTo = (function (arglist__4338){
var x = cljs.core.first(arglist__4338);
var y = cljs.core.first(cljs.core.next(arglist__4338));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4338)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4338)));
return G__4337__delegate.call(this, x, y, z, args);
});
return G__4337;
})()
;
G__4330 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4330__4331.call(this);
case  1 :
return G__4330__4332.call(this,x);
case  2 :
return G__4330__4333.call(this,x,y);
case  3 :
return G__4330__4334.call(this,x,y,z);
default:
return G__4330__4335.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4330.cljs$lang$maxFixedArity = 3;
G__4330.cljs$lang$applyTo = G__4330__4335.cljs$lang$applyTo;
return G__4330;
})()
});
var juxt__4326 = (function (f,g){
return (function() {
var G__4339 = null;
var G__4339__4340 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4339__4341 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4339__4342 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4339__4343 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4339__4344 = (function() { 
var G__4346__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4346 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4346__delegate.call(this, x, y, z, args);
};
G__4346.cljs$lang$maxFixedArity = 3;
G__4346.cljs$lang$applyTo = (function (arglist__4347){
var x = cljs.core.first(arglist__4347);
var y = cljs.core.first(cljs.core.next(arglist__4347));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4347)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4347)));
return G__4346__delegate.call(this, x, y, z, args);
});
return G__4346;
})()
;
G__4339 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4339__4340.call(this);
case  1 :
return G__4339__4341.call(this,x);
case  2 :
return G__4339__4342.call(this,x,y);
case  3 :
return G__4339__4343.call(this,x,y,z);
default:
return G__4339__4344.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4339.cljs$lang$maxFixedArity = 3;
G__4339.cljs$lang$applyTo = G__4339__4344.cljs$lang$applyTo;
return G__4339;
})()
});
var juxt__4327 = (function (f,g,h){
return (function() {
var G__4348 = null;
var G__4348__4349 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4348__4350 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4348__4351 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4348__4352 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4348__4353 = (function() { 
var G__4355__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4355 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4355__delegate.call(this, x, y, z, args);
};
G__4355.cljs$lang$maxFixedArity = 3;
G__4355.cljs$lang$applyTo = (function (arglist__4356){
var x = cljs.core.first(arglist__4356);
var y = cljs.core.first(cljs.core.next(arglist__4356));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4356)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4356)));
return G__4355__delegate.call(this, x, y, z, args);
});
return G__4355;
})()
;
G__4348 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4348__4349.call(this);
case  1 :
return G__4348__4350.call(this,x);
case  2 :
return G__4348__4351.call(this,x,y);
case  3 :
return G__4348__4352.call(this,x,y,z);
default:
return G__4348__4353.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4348.cljs$lang$maxFixedArity = 3;
G__4348.cljs$lang$applyTo = G__4348__4353.cljs$lang$applyTo;
return G__4348;
})()
});
var juxt__4328 = (function() { 
var G__4357__delegate = function (f,g,h,fs){
var fs__4324 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4358 = null;
var G__4358__4359 = (function (){
return cljs.core.reduce.call(null,(function (p1__4307_SHARP_,p2__4308_SHARP_){
return cljs.core.conj.call(null,p1__4307_SHARP_,p2__4308_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4324);
});
var G__4358__4360 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4309_SHARP_,p2__4310_SHARP_){
return cljs.core.conj.call(null,p1__4309_SHARP_,p2__4310_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4324);
});
var G__4358__4361 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4311_SHARP_,p2__4312_SHARP_){
return cljs.core.conj.call(null,p1__4311_SHARP_,p2__4312_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4324);
});
var G__4358__4362 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4313_SHARP_,p2__4314_SHARP_){
return cljs.core.conj.call(null,p1__4313_SHARP_,p2__4314_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4324);
});
var G__4358__4363 = (function() { 
var G__4365__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4315_SHARP_,p2__4316_SHARP_){
return cljs.core.conj.call(null,p1__4315_SHARP_,cljs.core.apply.call(null,p2__4316_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4324);
};
var G__4365 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4365__delegate.call(this, x, y, z, args);
};
G__4365.cljs$lang$maxFixedArity = 3;
G__4365.cljs$lang$applyTo = (function (arglist__4366){
var x = cljs.core.first(arglist__4366);
var y = cljs.core.first(cljs.core.next(arglist__4366));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4366)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4366)));
return G__4365__delegate.call(this, x, y, z, args);
});
return G__4365;
})()
;
G__4358 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4358__4359.call(this);
case  1 :
return G__4358__4360.call(this,x);
case  2 :
return G__4358__4361.call(this,x,y);
case  3 :
return G__4358__4362.call(this,x,y,z);
default:
return G__4358__4363.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4358.cljs$lang$maxFixedArity = 3;
G__4358.cljs$lang$applyTo = G__4358__4363.cljs$lang$applyTo;
return G__4358;
})()
};
var G__4357 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4357__delegate.call(this, f, g, h, fs);
};
G__4357.cljs$lang$maxFixedArity = 3;
G__4357.cljs$lang$applyTo = (function (arglist__4367){
var f = cljs.core.first(arglist__4367);
var g = cljs.core.first(cljs.core.next(arglist__4367));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4367)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4367)));
return G__4357__delegate.call(this, f, g, h, fs);
});
return G__4357;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4325.call(this,f);
case  2 :
return juxt__4326.call(this,f,g);
case  3 :
return juxt__4327.call(this,f,g,h);
default:
return juxt__4328.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4328.cljs$lang$applyTo;
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
var dorun__4369 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4372 = cljs.core.next.call(null,coll);
coll = G__4372;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4370 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4368 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4368))
{return (n > 0);
} else
{return and__3546__auto____4368;
}
})()))
{{
var G__4373 = (n - 1);
var G__4374 = cljs.core.next.call(null,coll);
n = G__4373;
coll = G__4374;
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
return dorun__4369.call(this,n);
case  2 :
return dorun__4370.call(this,n,coll);
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
var doall__4375 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4376 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4375.call(this,n);
case  2 :
return doall__4376.call(this,n,coll);
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
var matches__4378 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4378),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4378),1)))
{return cljs.core.first.call(null,matches__4378);
} else
{return cljs.core.vec.call(null,matches__4378);
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
var matches__4379 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__4379)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4379),1)))
{return cljs.core.first.call(null,matches__4379);
} else
{return cljs.core.vec.call(null,matches__4379);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4380 = cljs.core.re_find.call(null,re,s);
var match_idx__4381 = s.search(re);
var match_str__4382 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4380))?cljs.core.first.call(null,match_data__4380):match_data__4380);
var post_match__4383 = cljs.core.subs.call(null,s,(match_idx__4381 + cljs.core.count.call(null,match_str__4382)));

if(cljs.core.truth_(match_data__4380))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4380,re_seq.call(null,re,post_match__4383));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4384_SHARP_){
return print_one.call(null,p1__4384_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4385 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____4385))
{var and__3546__auto____4389 = (function (){var x__445__auto____4386 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4387 = x__445__auto____4386;

if(cljs.core.truth_(and__3546__auto____4387))
{var and__3546__auto____4388 = x__445__auto____4386.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4388))
{return cljs.core.not.call(null,x__445__auto____4386.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4388;
}
} else
{return and__3546__auto____4387;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____4386);
}
})();

if(cljs.core.truth_(and__3546__auto____4389))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4389;
}
} else
{return and__3546__auto____4385;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____4390 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4391 = x__445__auto____4390;

if(cljs.core.truth_(and__3546__auto____4391))
{var and__3546__auto____4392 = x__445__auto____4390.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4392))
{return cljs.core.not.call(null,x__445__auto____4390.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4392;
}
} else
{return and__3546__auto____4391;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____4390);
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
var first_obj__4393 = cljs.core.first.call(null,objs);
var sb__4394 = (new goog.string.StringBuffer());

var G__4395__4396 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4395__4396))
{var obj__4397 = cljs.core.first.call(null,G__4395__4396);
var G__4395__4398 = G__4395__4396;

while(true){
if(cljs.core.truth_((obj__4397 === first_obj__4393)))
{} else
{sb__4394.append(" ");
}
var G__4399__4400 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4397,opts));

if(cljs.core.truth_(G__4399__4400))
{var string__4401 = cljs.core.first.call(null,G__4399__4400);
var G__4399__4402 = G__4399__4400;

while(true){
sb__4394.append(string__4401);
var temp__3698__auto____4403 = cljs.core.next.call(null,G__4399__4402);

if(cljs.core.truth_(temp__3698__auto____4403))
{var G__4399__4404 = temp__3698__auto____4403;

{
var G__4407 = cljs.core.first.call(null,G__4399__4404);
var G__4408 = G__4399__4404;
string__4401 = G__4407;
G__4399__4402 = G__4408;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4405 = cljs.core.next.call(null,G__4395__4398);

if(cljs.core.truth_(temp__3698__auto____4405))
{var G__4395__4406 = temp__3698__auto____4405;

{
var G__4409 = cljs.core.first.call(null,G__4395__4406);
var G__4410 = G__4395__4406;
obj__4397 = G__4409;
G__4395__4398 = G__4410;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__4394);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4411 = cljs.core.first.call(null,objs);

var G__4412__4413 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4412__4413))
{var obj__4414 = cljs.core.first.call(null,G__4412__4413);
var G__4412__4415 = G__4412__4413;

while(true){
if(cljs.core.truth_((obj__4414 === first_obj__4411)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4416__4417 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4414,opts));

if(cljs.core.truth_(G__4416__4417))
{var string__4418 = cljs.core.first.call(null,G__4416__4417);
var G__4416__4419 = G__4416__4417;

while(true){
cljs.core.string_print.call(null,string__4418);
var temp__3698__auto____4420 = cljs.core.next.call(null,G__4416__4419);

if(cljs.core.truth_(temp__3698__auto____4420))
{var G__4416__4421 = temp__3698__auto____4420;

{
var G__4424 = cljs.core.first.call(null,G__4416__4421);
var G__4425 = G__4416__4421;
string__4418 = G__4424;
G__4416__4419 = G__4425;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4422 = cljs.core.next.call(null,G__4412__4415);

if(cljs.core.truth_(temp__3698__auto____4422))
{var G__4412__4423 = temp__3698__auto____4422;

{
var G__4426 = cljs.core.first.call(null,G__4412__4423);
var G__4427 = G__4412__4423;
obj__4414 = G__4426;
G__4412__4415 = G__4427;
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
pr_str.cljs$lang$applyTo = (function (arglist__4428){
var objs = cljs.core.seq( arglist__4428 );;
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
pr.cljs$lang$applyTo = (function (arglist__4429){
var objs = cljs.core.seq( arglist__4429 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__4430){
var objs = cljs.core.seq( arglist__4430 );;
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
println.cljs$lang$applyTo = (function (arglist__4431){
var objs = cljs.core.seq( arglist__4431 );;
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
prn.cljs$lang$applyTo = (function (arglist__4432){
var objs = cljs.core.seq( arglist__4432 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4433 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4433,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4434 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4434))
{var nspc__4435 = temp__3698__auto____4434;

return cljs.core.str.call(null,nspc__4435,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4436 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4436))
{var nspc__4437 = temp__3698__auto____4436;

return cljs.core.str.call(null,nspc__4437,"/");
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
var pr_pair__4438 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4438,"{",", ","}",opts,coll);
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
var this__4439 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4440 = this;
var G__4441__4442 = cljs.core.seq.call(null,this__4440.watches);

if(cljs.core.truth_(G__4441__4442))
{var G__4444__4446 = cljs.core.first.call(null,G__4441__4442);
var vec__4445__4447 = G__4444__4446;
var key__4448 = cljs.core.nth.call(null,vec__4445__4447,0,null);
var f__4449 = cljs.core.nth.call(null,vec__4445__4447,1,null);
var G__4441__4450 = G__4441__4442;

var G__4444__4451 = G__4444__4446;
var G__4441__4452 = G__4441__4450;

while(true){
var vec__4453__4454 = G__4444__4451;
var key__4455 = cljs.core.nth.call(null,vec__4453__4454,0,null);
var f__4456 = cljs.core.nth.call(null,vec__4453__4454,1,null);
var G__4441__4457 = G__4441__4452;

f__4456.call(null,key__4455,this$,oldval,newval);
var temp__3698__auto____4458 = cljs.core.next.call(null,G__4441__4457);

if(cljs.core.truth_(temp__3698__auto____4458))
{var G__4441__4459 = temp__3698__auto____4458;

{
var G__4466 = cljs.core.first.call(null,G__4441__4459);
var G__4467 = G__4441__4459;
G__4444__4451 = G__4466;
G__4441__4452 = G__4467;
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
var this__4460 = this;
return this$.watches = cljs.core.assoc.call(null,this__4460.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4461 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4461.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4462 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4462.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4463 = this;
return this__4463.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4464 = this;
return this__4464.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4465 = this;
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
var atom__4474 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4475 = (function() { 
var G__4477__delegate = function (x,p__4468){
var map__4469__4470 = p__4468;
var map__4469__4471 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4469__4470))?cljs.core.apply.call(null,cljs.core.hash_map,map__4469__4470):map__4469__4470);
var validator__4472 = cljs.core.get.call(null,map__4469__4471,"﷐'validator");
var meta__4473 = cljs.core.get.call(null,map__4469__4471,"﷐'meta");

return (new cljs.core.Atom(x,meta__4473,validator__4472,null));
};
var G__4477 = function (x,var_args){
var p__4468 = null;
if (goog.isDef(var_args)) {
  p__4468 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4477__delegate.call(this, x, p__4468);
};
G__4477.cljs$lang$maxFixedArity = 1;
G__4477.cljs$lang$applyTo = (function (arglist__4478){
var x = cljs.core.first(arglist__4478);
var p__4468 = cljs.core.rest(arglist__4478);
return G__4477__delegate.call(this, x, p__4468);
});
return G__4477;
})()
;
atom = function(x,var_args){
var p__4468 = var_args;
switch(arguments.length){
case  1 :
return atom__4474.call(this,x);
default:
return atom__4475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4475.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4479 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4479))
{var validate__4480 = temp__3698__auto____4479;

if(cljs.core.truth_(validate__4480.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__4481 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4481,new_value);
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
var swap_BANG___4482 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4483 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4484 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4485 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4486 = (function() { 
var G__4488__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4488 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4488__delegate.call(this, a, f, x, y, z, more);
};
G__4488.cljs$lang$maxFixedArity = 5;
G__4488.cljs$lang$applyTo = (function (arglist__4489){
var a = cljs.core.first(arglist__4489);
var f = cljs.core.first(cljs.core.next(arglist__4489));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4489)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4489))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4489)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4489)))));
return G__4488__delegate.call(this, a, f, x, y, z, more);
});
return G__4488;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4482.call(this,a,f);
case  3 :
return swap_BANG___4483.call(this,a,f,x);
case  4 :
return swap_BANG___4484.call(this,a,f,x,y);
case  5 :
return swap_BANG___4485.call(this,a,f,x,y,z);
default:
return swap_BANG___4486.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4486.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4490){
var iref = cljs.core.first(arglist__4490);
var f = cljs.core.first(cljs.core.next(arglist__4490));
var args = cljs.core.rest(cljs.core.next(arglist__4490));
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
var gensym__4491 = (function (){
return gensym.call(null,"G__");
});
var gensym__4492 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4491.call(this);
case  1 :
return gensym__4492.call(this,prefix_string);
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
var this__4494 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__4494.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4495 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__4495.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__4495.state,this__4495.f);
}
return cljs.core.deref.call(null,this__4495.state);
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
delay.cljs$lang$applyTo = (function (arglist__4496){
var body = cljs.core.seq( arglist__4496 );;
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
var map__4497__4498 = options;
var map__4497__4499 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4497__4498))?cljs.core.apply.call(null,cljs.core.hash_map,map__4497__4498):map__4497__4498);
var keywordize_keys__4500 = cljs.core.get.call(null,map__4497__4499,"﷐'keywordize-keys");
var keyfn__4501 = (cljs.core.truth_(keywordize_keys__4500)?cljs.core.keyword:cljs.core.str);
var f__4507 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____4506 = (function iter__4502(s__4503){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4503__4504 = s__4503;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4503__4504)))
{var k__4505 = cljs.core.first.call(null,s__4503__4504);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__4501.call(null,k__4505),thisfn.call(null,(x[k__4505]))]),iter__4502.call(null,cljs.core.rest.call(null,s__4503__4504)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____4506.call(null,cljs.core.js_keys.call(null,x));
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

return f__4507.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4508){
var x = cljs.core.first(arglist__4508);
var options = cljs.core.rest(arglist__4508);
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
var mem__4509 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4513__delegate = function (args){
var temp__3695__auto____4510 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4509),args);

if(cljs.core.truth_(temp__3695__auto____4510))
{var v__4511 = temp__3695__auto____4510;

return v__4511;
} else
{var ret__4512 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4509,cljs.core.assoc,args,ret__4512);
return ret__4512;
}
};
var G__4513 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4513__delegate.call(this, args);
};
G__4513.cljs$lang$maxFixedArity = 0;
G__4513.cljs$lang$applyTo = (function (arglist__4514){
var args = cljs.core.seq( arglist__4514 );;
return G__4513__delegate.call(this, args);
});
return G__4513;
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
var trampoline__4516 = (function (f){
while(true){
var ret__4515 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4515)))
{{
var G__4519 = ret__4515;
f = G__4519;
continue;
}
} else
{return ret__4515;
}
break;
}
});
var trampoline__4517 = (function() { 
var G__4520__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4520 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4520__delegate.call(this, f, args);
};
G__4520.cljs$lang$maxFixedArity = 1;
G__4520.cljs$lang$applyTo = (function (arglist__4521){
var f = cljs.core.first(arglist__4521);
var args = cljs.core.rest(arglist__4521);
return G__4520__delegate.call(this, f, args);
});
return G__4520;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4516.call(this,f);
default:
return trampoline__4517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4517.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4522 = (function (){
return rand.call(null,1);
});
var rand__4523 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4522.call(this);
case  1 :
return rand__4523.call(this,n);
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
var k__4525 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4525,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4525,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___4534 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4535 = (function (h,child,parent){
var or__3548__auto____4526 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4526))
{return or__3548__auto____4526;
} else
{var or__3548__auto____4527 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4527))
{return or__3548__auto____4527;
} else
{var and__3546__auto____4528 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4528))
{var and__3546__auto____4529 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4529))
{var and__3546__auto____4530 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4530))
{var ret__4531 = true;
var i__4532 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4533 = cljs.core.not.call(null,ret__4531);

if(cljs.core.truth_(or__3548__auto____4533))
{return or__3548__auto____4533;
} else
{return cljs.core._EQ_.call(null,i__4532,cljs.core.count.call(null,parent));
}
})()))
{return ret__4531;
} else
{{
var G__4537 = isa_QMARK_.call(null,h,child.call(null,i__4532),parent.call(null,i__4532));
var G__4538 = (i__4532 + 1);
ret__4531 = G__4537;
i__4532 = G__4538;
continue;
}
}
break;
}
} else
{return and__3546__auto____4530;
}
} else
{return and__3546__auto____4529;
}
} else
{return and__3546__auto____4528;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4534.call(this,h,child);
case  3 :
return isa_QMARK___4535.call(this,h,child,parent);
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
var parents__4539 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4540 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4539.call(this,h);
case  2 :
return parents__4540.call(this,h,tag);
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
var ancestors__4542 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4543 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4542.call(this,h);
case  2 :
return ancestors__4543.call(this,h,tag);
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
var descendants__4545 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4546 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4545.call(this,h);
case  2 :
return descendants__4546.call(this,h,tag);
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
var derive__4556 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4557 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__4551 = "﷐'parents".call(null,h);
var td__4552 = "﷐'descendants".call(null,h);
var ta__4553 = "﷐'ancestors".call(null,h);
var tf__4554 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4555 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4551.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4553.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4553.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4551,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__4554.call(null,"﷐'ancestors".call(null,h),tag,td__4552,parent,ta__4553),"﷐'descendants":tf__4554.call(null,"﷐'descendants".call(null,h),parent,ta__4553,tag,td__4552)});
})());

if(cljs.core.truth_(or__3548__auto____4555))
{return or__3548__auto____4555;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4556.call(this,h,tag);
case  3 :
return derive__4557.call(this,h,tag,parent);
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
var underive__4563 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4564 = (function (h,tag,parent){
var parentMap__4559 = "﷐'parents".call(null,h);
var childsParents__4560 = (cljs.core.truth_(parentMap__4559.call(null,tag))?cljs.core.disj.call(null,parentMap__4559.call(null,tag),parent):cljs.core.set([]));
var newParents__4561 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4560))?cljs.core.assoc.call(null,parentMap__4559,tag,childsParents__4560):cljs.core.dissoc.call(null,parentMap__4559,tag));
var deriv_seq__4562 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4548_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4548_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4548_SHARP_),cljs.core.second.call(null,p1__4548_SHARP_)));
}),cljs.core.seq.call(null,newParents__4561)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4559.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4549_SHARP_,p2__4550_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4549_SHARP_,p2__4550_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4562));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4563.call(this,h,tag);
case  3 :
return underive__4564.call(this,h,tag,parent);
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
var xprefs__4566 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4568 = (cljs.core.truth_((function (){var and__3546__auto____4567 = xprefs__4566;

if(cljs.core.truth_(and__3546__auto____4567))
{return xprefs__4566.call(null,y);
} else
{return and__3546__auto____4567;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4568))
{return or__3548__auto____4568;
} else
{var or__3548__auto____4570 = (function (){var ps__4569 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4569) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4569),prefer_table)))
{} else
{}
{
var G__4573 = cljs.core.rest.call(null,ps__4569);
ps__4569 = G__4573;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4570))
{return or__3548__auto____4570;
} else
{var or__3548__auto____4572 = (function (){var ps__4571 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4571) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4571),y,prefer_table)))
{} else
{}
{
var G__4574 = cljs.core.rest.call(null,ps__4571);
ps__4571 = G__4574;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4572))
{return or__3548__auto____4572;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4575 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4575))
{return or__3548__auto____4575;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4584 = cljs.core.reduce.call(null,(function (be,p__4576){
var vec__4577__4578 = p__4576;
var k__4579 = cljs.core.nth.call(null,vec__4577__4578,0,null);
var ___4580 = cljs.core.nth.call(null,vec__4577__4578,1,null);
var e__4581 = vec__4577__4578;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4579)))
{var be2__4583 = (cljs.core.truth_((function (){var or__3548__auto____4582 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____4582))
{return or__3548__auto____4582;
} else
{return cljs.core.dominates.call(null,k__4579,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4581:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4583),k__4579,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4579," and ",cljs.core.first.call(null,be2__4583),", and neither is preferred")));
}
return be2__4583;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4584))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4584));
return cljs.core.second.call(null,best_entry__4584);
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
if(cljs.core.truth_((function (){var and__3546__auto____4585 = mf;

if(cljs.core.truth_(and__3546__auto____4585))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4585;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4586 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4586))
{return or__3548__auto____4586;
} else
{var or__3548__auto____4587 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4587))
{return or__3548__auto____4587;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4588 = mf;

if(cljs.core.truth_(and__3546__auto____4588))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4588;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4589 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4589))
{return or__3548__auto____4589;
} else
{var or__3548__auto____4590 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4590))
{return or__3548__auto____4590;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4591 = mf;

if(cljs.core.truth_(and__3546__auto____4591))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4591;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4592 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4592))
{return or__3548__auto____4592;
} else
{var or__3548__auto____4593 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4593))
{return or__3548__auto____4593;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4594 = mf;

if(cljs.core.truth_(and__3546__auto____4594))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4594;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4595 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4595))
{return or__3548__auto____4595;
} else
{var or__3548__auto____4596 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4596))
{return or__3548__auto____4596;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4597 = mf;

if(cljs.core.truth_(and__3546__auto____4597))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4597;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4598 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4598))
{return or__3548__auto____4598;
} else
{var or__3548__auto____4599 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4599))
{return or__3548__auto____4599;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4600 = mf;

if(cljs.core.truth_(and__3546__auto____4600))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4600;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4601 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4601))
{return or__3548__auto____4601;
} else
{var or__3548__auto____4602 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4602))
{return or__3548__auto____4602;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4603 = mf;

if(cljs.core.truth_(and__3546__auto____4603))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4603;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4604 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4604))
{return or__3548__auto____4604;
} else
{var or__3548__auto____4605 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4605))
{return or__3548__auto____4605;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4606 = mf;

if(cljs.core.truth_(and__3546__auto____4606))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4606;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4607 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4607))
{return or__3548__auto____4607;
} else
{var or__3548__auto____4608 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4608))
{return or__3548__auto____4608;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4609 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4610 = cljs.core._get_method.call(null,mf,dispatch_val__4609);

if(cljs.core.truth_(target_fn__4610))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4609)));
}
return cljs.core.apply.call(null,target_fn__4610,args);
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
var this__4611 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4612 = this;
cljs.core.swap_BANG_.call(null,this__4612.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4612.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4612.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4612.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4613 = this;
cljs.core.swap_BANG_.call(null,this__4613.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4613.method_cache,this__4613.method_table,this__4613.cached_hierarchy,this__4613.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4614 = this;
cljs.core.swap_BANG_.call(null,this__4614.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4614.method_cache,this__4614.method_table,this__4614.cached_hierarchy,this__4614.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4615 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4615.cached_hierarchy),cljs.core.deref.call(null,this__4615.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4615.method_cache,this__4615.method_table,this__4615.cached_hierarchy,this__4615.hierarchy);
}
var temp__3695__auto____4616 = cljs.core.deref.call(null,this__4615.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4616))
{var target_fn__4617 = temp__3695__auto____4616;

return target_fn__4617;
} else
{var temp__3695__auto____4618 = cljs.core.find_and_cache_best_method.call(null,this__4615.name,dispatch_val,this__4615.hierarchy,this__4615.method_table,this__4615.prefer_table,this__4615.method_cache,this__4615.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4618))
{var target_fn__4619 = temp__3695__auto____4618;

return target_fn__4619;
} else
{return cljs.core.deref.call(null,this__4615.method_table).call(null,this__4615.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4620 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4620.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4620.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4620.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4620.method_cache,this__4620.method_table,this__4620.cached_hierarchy,this__4620.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4621 = this;
return cljs.core.deref.call(null,this__4621.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4622 = this;
return cljs.core.deref.call(null,this__4622.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4623 = this;
return cljs.core.do_dispatch.call(null,mf,this__4623.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4624__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4624 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4624__delegate.call(this, _, args);
};
G__4624.cljs$lang$maxFixedArity = 1;
G__4624.cljs$lang$applyTo = (function (arglist__4625){
var _ = cljs.core.first(arglist__4625);
var args = cljs.core.rest(arglist__4625);
return G__4624__delegate.call(this, _, args);
});
return G__4624;
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
