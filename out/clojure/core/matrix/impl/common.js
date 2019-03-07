// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.matrix.impl.common');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.utils');
goog.require('clojure.core.matrix.implementations');
/**
 * Returns a list of available implementations' objects
 */
clojure.core.matrix.impl.common.get_impl_objs = (function clojure$core$matrix$impl$common$get_impl_objs(){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.second,(function (){var iter__4523__auto__ = (function clojure$core$matrix$impl$common$get_impl_objs_$_iter__2301(s__2302){
return (new cljs.core.LazySeq(null,(function (){
var s__2302__$1 = s__2302;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__2302__$1);
if(temp__5720__auto__){
var s__2302__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__2302__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__2302__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__2304 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__2303 = (0);
while(true){
if((i__2303 < size__4522__auto__)){
var vec__2305 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__2303);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2305,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2305,(1),null);
if(cljs.core.not((function (){var fexpr__2308 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$persistent_DASH_vector,null,cljs.core.cst$kw$TODO,null], null), null);
return (fexpr__2308.cljs$core$IFn$_invoke$arity$1 ? fexpr__2308.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__2308.call(null,ns));
})())){
cljs.core.chunk_append(b__2304,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$obj,clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(name)], null);
}catch (e2309){if((e2309 instanceof Error)){
var t = e2309;
return null;
} else {
throw e2309;

}
}})());

var G__2315 = (i__2303 + (1));
i__2303 = G__2315;
continue;
} else {
var G__2316 = (i__2303 + (1));
i__2303 = G__2316;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__2304),clojure$core$matrix$impl$common$get_impl_objs_$_iter__2301(cljs.core.chunk_rest(s__2302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__2304),null);
}
} else {
var vec__2310 = cljs.core.first(s__2302__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2310,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2310,(1),null);
if(cljs.core.not((function (){var fexpr__2313 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$persistent_DASH_vector,null,cljs.core.cst$kw$TODO,null], null), null);
return (fexpr__2313.cljs$core$IFn$_invoke$arity$1 ? fexpr__2313.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__2313.call(null,ns));
})())){
return cljs.core.cons((function (){try{return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,name,cljs.core.cst$kw$obj,clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(name)], null);
}catch (e2314){if((e2314 instanceof Error)){
var t = e2314;
return null;
} else {
throw e2314;

}
}})(),clojure$core$matrix$impl$common$get_impl_objs_$_iter__2301(cljs.core.rest(s__2302__$2)));
} else {
var G__2317 = cljs.core.rest(s__2302__$2);
s__2302__$1 = G__2317;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(clojure.core.matrix.implementations.KNOWN_IMPLEMENTATIONS);
})());
});
/**
 * Constructs an array from the provided data, attempting to use the given implementation.
 * Uses a default implementation if needed
 */
clojure.core.matrix.impl.common.construct_matrix = (function clojure$core$matrix$impl$common$construct_matrix(impl,data){
var or__4131__auto__ = clojure.core.matrix.protocols.construct_matrix(impl,data);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){try{return clojure.core.matrix.protocols.construct_matrix(clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_,data);
}catch (e2320){if((e2320 instanceof clojure.core.matrix.impl.common.ClassCastException)){
var t = e2320;
return null;
} else {
throw e2320;

}
}})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,data);
}
}
});
/**
 * Maps a function over all components of a persistent vector matrix. Like mapv but for matrices.
 * Assumes correct dimensionality / shape.
 * 
 * First array argument must be nested persistent vectors. Others may be
 * any arrays of the same shape.
 * 
 * Returns a nested persistent vector matrix or a scalar value.
 */
clojure.core.matrix.impl.common.mapmatrix = (function clojure$core$matrix$impl$common$mapmatrix(var_args){
var G__2327 = arguments.length;
switch (G__2327) {
case 2:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___2335 = arguments.length;
var i__4731__auto___2336 = (0);
while(true){
if((i__4731__auto___2336 < len__4730__auto___2335)){
args_arr__4751__auto__.push((arguments[i__4731__auto___2336]));

var G__2337 = (i__4731__auto___2336 + (1));
i__4731__auto___2336 = G__2337;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((4)),(0),null));
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4752__auto__);

}
});

clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if(((0) === dims)){
var G__2328 = (function (){var x__2050__auto__ = m;
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__2328) : f.call(null,G__2328));
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,clojure.core.matrix.protocols.element_seq(m)));
} else {
var res = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq(m));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m,res),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clojure.core.matrix.protocols.get_shape(m))], null),cljs.core.next(clojure.core.matrix.protocols.get_shape(res)))));

}
}
});

clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3 = (function (f,m1,m2){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m1));
if(((0) === dims)){
var G__2329 = (function (){var x__2050__auto__ = m1;
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
})();
var G__2330 = (function (){var x__2050__auto__ = m2;
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
})();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__2329,G__2330) : f.call(null,G__2329,G__2330));
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix(m1,cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,clojure.core.matrix.protocols.element_seq(m1),clojure.core.matrix.protocols.element_seq(m2)));
} else {
var res = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq(m1),clojure.core.matrix.protocols.get_major_slice_seq(m2));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m1,res),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clojure.core.matrix.protocols.get_shape(m1))], null),cljs.core.next(clojure.core.matrix.protocols.get_shape(res)))));

}
}
});

clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$4 = (function (f,m1,m2,m3){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m1));
if(((0) === dims)){
var G__2331 = (function (){var x__2050__auto__ = m1;
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
})();
var G__2332 = (function (){var x__2050__auto__ = m2;
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
})();
var G__2333 = (function (){var x__2050__auto__ = m3;
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
})();
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__2331,G__2332,G__2333) : f.call(null,G__2331,G__2332,G__2333));
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix(m1,cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,clojure.core.matrix.protocols.element_seq(m1),clojure.core.matrix.protocols.element_seq(m2),clojure.core.matrix.protocols.element_seq(m3)));
} else {
var res = cljs.core.mapv.cljs$core$IFn$_invoke$arity$4(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq(m1),clojure.core.matrix.protocols.get_major_slice_seq(m2),clojure.core.matrix.protocols.get_major_slice_seq(m3));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m1,res),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clojure.core.matrix.protocols.get_shape(m1))], null),cljs.core.next(clojure.core.matrix.protocols.get_shape(res)))));

}
}
});

clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$variadic = (function (f,m1,m2,m3,more){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m1));
if(((0) === dims)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,(function (){var x__2050__auto__ = m1;
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
})(),(function (){var x__2050__auto__ = m2;
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
})(),(function (){var x__2050__auto__ = m3;
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_0d,more));
} else {
if(((1) === dims)){
return clojure.core.matrix.impl.common.construct_matrix(m1,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,f,clojure.core.matrix.protocols.element_seq(m1),clojure.core.matrix.protocols.element_seq(m2),clojure.core.matrix.protocols.element_seq(m3),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,more)], 0)));
} else {
var res = cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq(m1),clojure.core.matrix.protocols.get_major_slice_seq(m2),clojure.core.matrix.protocols.get_major_slice_seq(m3),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq,more)], 0));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m1,res),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clojure.core.matrix.protocols.get_shape(m1))], null),cljs.core.next(clojure.core.matrix.protocols.get_shape(res)))));

}
}
});

/** @this {Function} */
clojure.core.matrix.impl.common.mapmatrix.cljs$lang$applyTo = (function (seq2322){
var G__2323 = cljs.core.first(seq2322);
var seq2322__$1 = cljs.core.next(seq2322);
var G__2324 = cljs.core.first(seq2322__$1);
var seq2322__$2 = cljs.core.next(seq2322__$1);
var G__2325 = cljs.core.first(seq2322__$2);
var seq2322__$3 = cljs.core.next(seq2322__$2);
var G__2326 = cljs.core.first(seq2322__$3);
var seq2322__$4 = cljs.core.next(seq2322__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2323,G__2324,G__2325,G__2326,seq2322__$4);
});

clojure.core.matrix.impl.common.mapmatrix.cljs$lang$maxFixedArity = (4);

/**
 * Logistic function, with primitive type hints
 */
clojure.core.matrix.impl.common.logistic_fn = (function clojure$core$matrix$impl$common$logistic_fn(t){
var e_t = (function (){var G__2338 = (- t);
return Math.exp(G__2338);
})();
return (1.0 / (1.0 + e_t));
});
/**
 * Softplus function, with primitive type hints
 */
clojure.core.matrix.impl.common.softplus_fn = (function clojure$core$matrix$impl$common$softplus_fn(t){
if((t > 100.0)){
return t;
} else {
var et = Math.exp(t);
var G__2339 = (1.0 + et);
return Math.log(G__2339);
}
});
/**
 * ReLU function, with primitive type hints
 */
clojure.core.matrix.impl.common.relu_fn = (function clojure$core$matrix$impl$common$relu_fn(t){
return Math.max(0.0,t);
});
/**
 * Returns true if matrix is square (2D with same number of rows and columns)
 */
clojure.core.matrix.impl.common.square_QMARK_ = (function clojure$core$matrix$impl$common$square_QMARK_(m){
return ((((2) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))) && ((cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0))) === cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1))))));
});
/**
 * Returns true iff square matrix m is symmetric.
 */
clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_ = (function clojure$core$matrix$impl$common$symmetric_matrix_entries_QMARK_(m){
var dim = cljs.core.long$(cljs.core.first(clojure.core.matrix.protocols.get_shape(m)));
var f = ((function (dim){
return (function clojure$core$matrix$impl$common$symmetric_matrix_entries_QMARK__$_f(i,j){
while(true){
if((i >= dim)){
return true;
} else {
if((j >= dim)){
var G__2340 = ((1) + i);
var G__2341 = ((2) + i);
i = G__2340;
j = G__2341;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_2d(m,i,j),clojure.core.matrix.protocols.get_2d(m,j,i))){
var G__2342 = i;
var G__2343 = (j + (1));
i = G__2342;
j = G__2343;
continue;
} else {
return false;

}
}
}
break;
}
});})(dim))
;
return f((0),(1));
});
