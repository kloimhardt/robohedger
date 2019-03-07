// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.matrix.impl.mathsops');
goog.require('cljs.core');
goog.require('cljs.core.constants');
clojure.core.matrix.impl.mathsops.to_degrees_STAR_ = (function clojure$core$matrix$impl$mathsops$to_degrees_STAR_(x){
return ((x * 180.0) / Math.PI);
});
clojure.core.matrix.impl.mathsops.to_radians_STAR_ = (function clojure$core$matrix$impl$mathsops$to_radians_STAR_(x){
return ((x * Math.PI) / 180.0);
});
clojure.core.matrix.impl.mathsops.maths_ops = new cljs.core.PersistentVector(null, 21, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$abs,cljs.core.cst$sym$Math_SLASH_abs),cljs.core.list(cljs.core.cst$sym$acos,cljs.core.cst$sym$Math_SLASH_acos),cljs.core.list(cljs.core.cst$sym$asin,cljs.core.cst$sym$Math_SLASH_asin),cljs.core.list(cljs.core.cst$sym$atan,cljs.core.cst$sym$Math_SLASH_atan),cljs.core.list(cljs.core.cst$sym$cbrt,cljs.core.cst$sym$Math_SLASH_cbrt),cljs.core.list(cljs.core.cst$sym$ceil,cljs.core.cst$sym$Math_SLASH_ceil),cljs.core.list(cljs.core.cst$sym$cos,cljs.core.cst$sym$Math_SLASH_cos),cljs.core.list(cljs.core.cst$sym$cosh,cljs.core.cst$sym$Math_SLASH_cosh),cljs.core.list(cljs.core.cst$sym$exp,cljs.core.cst$sym$Math_SLASH_exp),cljs.core.list(cljs.core.cst$sym$floor,cljs.core.cst$sym$Math_SLASH_floor),cljs.core.list(cljs.core.cst$sym$log,cljs.core.cst$sym$Math_SLASH_log),cljs.core.list(cljs.core.cst$sym$log10,cljs.core.cst$sym$Math_SLASH_log10),cljs.core.list(cljs.core.cst$sym$round,cljs.core.cst$sym$Math_SLASH_rint),cljs.core.list(cljs.core.cst$sym$signum,cljs.core.cst$sym$Math_SLASH_signum,cljs.core.cst$sym$Math_SLASH_sign),cljs.core.list(cljs.core.cst$sym$sin,cljs.core.cst$sym$Math_SLASH_sin),cljs.core.list(cljs.core.cst$sym$sinh,cljs.core.cst$sym$Math_SLASH_sinh),cljs.core.list(cljs.core.cst$sym$sqrt,cljs.core.cst$sym$Math_SLASH_sqrt),cljs.core.list(cljs.core.cst$sym$tan,cljs.core.cst$sym$Math_SLASH_tan),cljs.core.list(cljs.core.cst$sym$tanh,cljs.core.cst$sym$Math_SLASH_tanh),cljs.core.list(cljs.core.cst$sym$to_DASH_degrees,cljs.core.cst$sym$Math_SLASH_toDegrees,cljs.core.cst$sym$to_DASH_degrees_STAR_),cljs.core.list(cljs.core.cst$sym$to_DASH_radians,cljs.core.cst$sym$Math_SLASH_toRadians,cljs.core.cst$sym$to_DASH_radians_STAR_)], null);
var ret__4776__auto___1278 = /**
 * Define a mathematical operator function.
 */
clojure.core.matrix.impl.mathsops.def_mop = (function clojure$core$matrix$impl$mathsops$def_mop(_AMPERSAND_form,_AMPERSAND_env,op_sym,fn_sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_defn,null,(1),null)),(new cljs.core.List(null,op_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$x,cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.cst$sym$double),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,fn_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x,null,(1),null))))),null,(1),null))))),cljs.core.assoc,cljs.core.cst$kw$tag,cljs.core.double$),null,(1),null))], 0))));
});
clojure.core.matrix.impl.mathsops.def_mop.cljs$lang$macro = true;

var ret__4776__auto___1289 = clojure.core.matrix.impl.mathsops.def_mops = (function clojure$core$matrix$impl$mathsops$def_mops(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),(function (){var iter__4523__auto__ = (function clojure$core$matrix$impl$mathsops$def_mops_$_iter__1279(s__1280){
return (new cljs.core.LazySeq(null,(function (){
var s__1280__$1 = s__1280;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__1280__$1);
if(temp__5720__auto__){
var s__1280__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__1280__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__1280__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__1282 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__1281 = (0);
while(true){
if((i__1281 < size__4522__auto__)){
var vec__1283 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__1281);
var sym_SHARP_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1283,(0),null);
var op_SHARP_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1283,(1),null);
cljs.core.chunk_append(b__1282,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$clojure$core$matrix$impl$mathsops_SLASH_def_DASH_mop,null,(1),null)),(new cljs.core.List(null,sym_SHARP_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,op_SHARP_,null,(1),null))], 0)))));

var G__1290 = (i__1281 + (1));
i__1281 = G__1290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__1282),clojure$core$matrix$impl$mathsops$def_mops_$_iter__1279(cljs.core.chunk_rest(s__1280__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__1282),null);
}
} else {
var vec__1286 = cljs.core.first(s__1280__$2);
var sym_SHARP_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1286,(0),null);
var op_SHARP_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1286,(1),null);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$clojure$core$matrix$impl$mathsops_SLASH_def_DASH_mop,null,(1),null)),(new cljs.core.List(null,sym_SHARP_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,op_SHARP_,null,(1),null))], 0)))),clojure$core$matrix$impl$mathsops$def_mops_$_iter__1279(cljs.core.rest(s__1280__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(clojure.core.matrix.impl.mathsops.maths_ops);
})())));
});
clojure.core.matrix.impl.mathsops.def_mops.cljs$lang$macro = true;

clojure.core.matrix.impl.mathsops.abs = (function clojure$core$matrix$impl$mathsops$abs(x){
return Math.abs(x);
});

clojure.core.matrix.impl.mathsops.acos = (function clojure$core$matrix$impl$mathsops$acos(x){
return Math.acos(x);
});

clojure.core.matrix.impl.mathsops.asin = (function clojure$core$matrix$impl$mathsops$asin(x){
return Math.asin(x);
});

clojure.core.matrix.impl.mathsops.atan = (function clojure$core$matrix$impl$mathsops$atan(x){
return Math.atan(x);
});

clojure.core.matrix.impl.mathsops.cbrt = (function clojure$core$matrix$impl$mathsops$cbrt(x){
return Math.cbrt(x);
});

clojure.core.matrix.impl.mathsops.ceil = (function clojure$core$matrix$impl$mathsops$ceil(x){
return Math.ceil(x);
});

clojure.core.matrix.impl.mathsops.cos = (function clojure$core$matrix$impl$mathsops$cos(x){
return Math.cos(x);
});

clojure.core.matrix.impl.mathsops.cosh = (function clojure$core$matrix$impl$mathsops$cosh(x){
return Math.cosh(x);
});

clojure.core.matrix.impl.mathsops.exp = (function clojure$core$matrix$impl$mathsops$exp(x){
return Math.exp(x);
});

clojure.core.matrix.impl.mathsops.floor = (function clojure$core$matrix$impl$mathsops$floor(x){
return Math.floor(x);
});

clojure.core.matrix.impl.mathsops.log = (function clojure$core$matrix$impl$mathsops$log(x){
return Math.log(x);
});

clojure.core.matrix.impl.mathsops.log10 = (function clojure$core$matrix$impl$mathsops$log10(x){
return Math.log10(x);
});

clojure.core.matrix.impl.mathsops.round = (function clojure$core$matrix$impl$mathsops$round(x){
return Math.rint(x);
});

clojure.core.matrix.impl.mathsops.signum = (function clojure$core$matrix$impl$mathsops$signum(x){
return Math.signum(x);
});

clojure.core.matrix.impl.mathsops.sin = (function clojure$core$matrix$impl$mathsops$sin(x){
return Math.sin(x);
});

clojure.core.matrix.impl.mathsops.sinh = (function clojure$core$matrix$impl$mathsops$sinh(x){
return Math.sinh(x);
});

clojure.core.matrix.impl.mathsops.sqrt = (function clojure$core$matrix$impl$mathsops$sqrt(x){
return Math.sqrt(x);
});

clojure.core.matrix.impl.mathsops.tan = (function clojure$core$matrix$impl$mathsops$tan(x){
return Math.tan(x);
});

clojure.core.matrix.impl.mathsops.tanh = (function clojure$core$matrix$impl$mathsops$tanh(x){
return Math.tanh(x);
});

clojure.core.matrix.impl.mathsops.to_degrees = (function clojure$core$matrix$impl$mathsops$to_degrees(x){
return Math.toDegrees(x);
});

clojure.core.matrix.impl.mathsops.to_radians = (function clojure$core$matrix$impl$mathsops$to_radians(x){
return Math.toRadians(x);
});
