goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("﷐'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__20861 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__20862 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__20861.call(this,separator);
case  2 :
return join__20862.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_((cljs.core.count.call(null,s) < 2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__20870 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__20871 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__20864 = s;
var limit__20865 = limit;
var parts__20866 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__20865,1)))
{return cljs.core.conj.call(null,parts__20866,s__20864);
} else
{var temp__3695__auto____20867 = cljs.core.re_find.call(null,re,s__20864);

if(cljs.core.truth_(temp__3695__auto____20867))
{var m__20868 = temp__3695__auto____20867;

var index__20869 = s__20864.indexOf(m__20868);

{
var G__20873 = s__20864.substring((index__20869 + cljs.core.count.call(null,m__20868)));
var G__20874 = (limit__20865 - 1);
var G__20875 = cljs.core.conj.call(null,parts__20866,s__20864.substring(0,index__20869));
s__20864 = G__20873;
limit__20865 = G__20874;
parts__20866 = G__20875;
continue;
}
} else
{return cljs.core.conj.call(null,parts__20866,s__20864);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__20870.call(this,s,re);
case  3 :
return split__20871.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__20876 = s.length;

while(true){
if(cljs.core.truth_((index__20876 === 0)))
{return "";
} else
{var ch__20877 = cljs.core.get.call(null,s,(index__20876 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____20878 = cljs.core._EQ_.call(null,ch__20877,"\n");

if(cljs.core.truth_(or__3548__auto____20878))
{return or__3548__auto____20878;
} else
{return cljs.core._EQ_.call(null,ch__20877,"\r");
}
})()))
{{
var G__20879 = (index__20876 - 1);
index__20876 = G__20879;
continue;
}
} else
{return s.substring(0,index__20876);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__20880 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____20881 = cljs.core.not.call(null,s__20880);

if(cljs.core.truth_(or__3548__auto____20881))
{return or__3548__auto____20881;
} else
{var or__3548__auto____20882 = cljs.core._EQ_.call(null,"",s__20880);

if(cljs.core.truth_(or__3548__auto____20882))
{return or__3548__auto____20882;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__20880);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__20883 = (new goog.string.StringBuffer());
var length__20884 = s.length;

var index__20885 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__20884,index__20885)))
{return buffer__20883.toString();
} else
{var ch__20886 = s.charAt(index__20885);

var temp__3695__auto____20887 = cljs.core.get.call(null,cmap,ch__20886);

if(cljs.core.truth_(temp__3695__auto____20887))
{var replacement__20888 = temp__3695__auto____20887;

buffer__20883.append(cljs.core.str.call(null,replacement__20888));
} else
{buffer__20883.append(ch__20886);
}
{
var G__20889 = (index__20885 + 1);
index__20885 = G__20889;
continue;
}
}
break;
}
});
