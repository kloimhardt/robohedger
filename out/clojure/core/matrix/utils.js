// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.matrix.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
clojure.core.matrix.utils.class$ = cljs.core.type;
var ret__4776__auto___2066 = (function (){
/**
 * Throws an error with the provided message(s)
 */
clojure.core.matrix.utils.error = (function clojure$core$matrix$utils$error(var_args){
var args__4736__auto__ = [];
var len__4730__auto___2067 = arguments.length;
var i__4731__auto___2068 = (0);
while(true){
if((i__4731__auto___2068 < len__4730__auto___2067)){
args__4736__auto__.push((arguments[i__4731__auto___2068]));

var G__2069 = (i__4731__auto___2068 + (1));
i__4731__auto___2068 = G__2069;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return clojure.core.matrix.utils.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

clojure.core.matrix.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Error$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_str,null,(1),null)),vals))),null,(1),null))))),null,(1),null)))));
});

clojure.core.matrix.utils.error.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clojure.core.matrix.utils.error.cljs$lang$applyTo = (function (seq2063){
var G__2064 = cljs.core.first(seq2063);
var seq2063__$1 = cljs.core.next(seq2063);
var G__2065 = cljs.core.first(seq2063__$1);
var seq2063__$2 = cljs.core.next(seq2063__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2064,G__2065,seq2063__$2);
});

return null;
})()
;
clojure.core.matrix.utils.error.cljs$lang$macro = true;

var ret__4776__auto___2079 = (function (){
/**
 * loops over a set of values, binding index-sym to the 0-based index of each value
 */
clojure.core.matrix.utils.doseq_indexed = (function clojure$core$matrix$utils$doseq_indexed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___2080 = arguments.length;
var i__4731__auto___2081 = (0);
while(true){
if((i__4731__auto___2081 < len__4730__auto___2080)){
args__4736__auto__.push((arguments[i__4731__auto___2081]));

var G__2082 = (i__4731__auto___2081 + (1));
i__4731__auto___2081 = G__2082;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__2075,code){
var vec__2076 = p__2075;
var val_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2076,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2076,(1),null);
var index_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2076,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_loop,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$vals__2070__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_seq,null,(1),null)),(new cljs.core.List(null,values,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,index_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_long,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$vals__2070__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,val_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_first,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$vals__2070__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$recur,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_next,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$vals__2070__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_inc,null,(1),null)),(new cljs.core.List(null,index_sym,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0))));
});

clojure.core.matrix.utils.doseq_indexed.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.core.matrix.utils.doseq_indexed.cljs$lang$applyTo = (function (seq2071){
var G__2072 = cljs.core.first(seq2071);
var seq2071__$1 = cljs.core.next(seq2071);
var G__2073 = cljs.core.first(seq2071__$1);
var seq2071__$2 = cljs.core.next(seq2071__$1);
var G__2074 = cljs.core.first(seq2071__$2);
var seq2071__$3 = cljs.core.next(seq2071__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2072,G__2073,G__2074,seq2071__$3);
});

return null;
})()
;
clojure.core.matrix.utils.doseq_indexed.cljs$lang$macro = true;

/**
 * returns true if the given object is a valid core.matrix array shape.
 */
clojure.core.matrix.utils.valid_shape_QMARK_ = (function clojure$core$matrix$utils$valid_shape_QMARK_(shape){
try{return (((cljs.core.count(shape) >= (0))) && (cljs.core.every_QMARK_(cljs.core.integer_QMARK_,shape)));
}catch (e2084){if((e2084 instanceof Error)){
var t = e2084;
return false;
} else {
throw e2084;

}
}});
/**
 * Returns true if two shapes are the same.
 */
clojure.core.matrix.utils.same_shape_object_QMARK_ = (function clojure$core$matrix$utils$same_shape_object_QMARK_(sa,sb){
if((sa === sb)){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sa),cljs.core.count(sb))){
return false;
} else {
var ca = cljs.core.count(sa);
var i = (0);
while(true){
if((i >= ca)){
return true;
} else {
if((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sa,i) === cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sb,i))){
var G__2085 = (i + (1));
i = G__2085;
continue;
} else {
return false;
}
}
break;
}

}
}
});
/**
 * Returns the logical xor of a set of values, considered as booleans
 */
clojure.core.matrix.utils.xor = (function clojure$core$matrix$utils$xor(var_args){
var G__2090 = arguments.length;
switch (G__2090) {
case 0:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___2092 = arguments.length;
var i__4731__auto___2093 = (0);
while(true){
if((i__4731__auto___2093 < len__4730__auto___2092)){
args_arr__4751__auto__.push((arguments[i__4731__auto___2093]));

var G__2094 = (i__4731__auto___2093 + (1));
i__4731__auto___2093 = G__2094;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$0 = (function (){
return false;
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$1 = (function (x){
return cljs.core.boolean$(x);
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(x)){
return cljs.core.not(y);
} else {
return cljs.core.boolean$(y);
}
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var p = clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2(x,y);
var ss = cljs.core.seq(more);
while(true){
if(ss){
var G__2095 = (cljs.core.truth_(cljs.core.first(ss))?(!(p)):p);
var G__2096 = cljs.core.next(ss);
p = G__2095;
ss = G__2096;
continue;
} else {
return p;
}
break;
}
});

/** @this {Function} */
clojure.core.matrix.utils.xor.cljs$lang$applyTo = (function (seq2087){
var G__2088 = cljs.core.first(seq2087);
var seq2087__$1 = cljs.core.next(seq2087);
var G__2089 = cljs.core.first(seq2087__$1);
var seq2087__$2 = cljs.core.next(seq2087__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2088,G__2089,seq2087__$2);
});

clojure.core.matrix.utils.xor.cljs$lang$maxFixedArity = (2);

/**
 * Returns a copy of a double array
 */
clojure.core.matrix.utils.copy_double_array = (function clojure$core$matrix$utils$copy_double_array(arr){
return arr.slice((0));
});
/**
 * Returns a copy of a long array
 */
clojure.core.matrix.utils.copy_long_array = (function clojure$core$matrix$utils$copy_long_array(arr){
return arr.slice((0));
});
/**
 * Returns a copy of a long array
 */
clojure.core.matrix.utils.copy_object_array = (function clojure$core$matrix$utils$copy_object_array(arr){
return arr.slice((0));
});
/**
 * Returns a range of longs in a long[] array
 */
clojure.core.matrix.utils.long_range = (function clojure$core$matrix$utils$long_range(end){
var end__$1 = (end | (0));
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(end__$1);
var n__4607__auto___2097 = end__$1;
var i_2098 = (0);
while(true){
if((i_2098 < n__4607__auto___2097)){
(arr[i_2098] = cljs.core.long$(i_2098));

var G__2099 = (i_2098 + (1));
i_2098 = G__2099;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Creates a long array with the specified values.
 */
clojure.core.matrix.utils.long_array_of = (function clojure$core$matrix$utils$long_array_of(var_args){
var G__2104 = arguments.length;
switch (G__2104) {
case 0:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___2108 = arguments.length;
var i__4731__auto___2109 = (0);
while(true){
if((i__4731__auto___2109 < len__4730__auto___2108)){
args_arr__4751__auto__.push((arguments[i__4731__auto___2109]));

var G__2110 = (i__4731__auto___2109 + (1));
i__4731__auto___2109 = G__2110;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((0));
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1 = (function (a){
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((1));
(arr[(0)] = cljs.core.long$(a));

return arr;
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((2));
(arr[(0)] = cljs.core.long$(a));

(arr[(1)] = cljs.core.long$(b));

return arr;
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(((2) + cljs.core.count(more)));
(arr[(0)] = cljs.core.long$(a));

(arr[(1)] = cljs.core.long$(b));

var G__2105_2111 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.utils.x,more,clojure.core.matrix.utils.i], null);
var G__2106_2112 = (arr[((2) + clojure.core.matrix.utils.i)] = cljs.core.long$(clojure.core.matrix.utils.x));
(clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$2 ? clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$2(G__2105_2111,G__2106_2112) : clojure.core.matrix.utils.doseq_indexed.call(null,G__2105_2111,G__2106_2112));

return arr;
});

/** @this {Function} */
clojure.core.matrix.utils.long_array_of.cljs$lang$applyTo = (function (seq2101){
var G__2102 = cljs.core.first(seq2101);
var seq2101__$1 = cljs.core.next(seq2101);
var G__2103 = cljs.core.first(seq2101__$1);
var seq2101__$2 = cljs.core.next(seq2101__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2102,G__2103,seq2101__$2);
});

clojure.core.matrix.utils.long_array_of.cljs$lang$maxFixedArity = (2);

/**
 * Creates a long array with the specified values.
 */
clojure.core.matrix.utils.object_array_of = (function clojure$core$matrix$utils$object_array_of(var_args){
var G__2117 = arguments.length;
switch (G__2117) {
case 0:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___2121 = arguments.length;
var i__4731__auto___2122 = (0);
while(true){
if((i__4731__auto___2122 < len__4730__auto___2121)){
args_arr__4751__auto__.push((arguments[i__4731__auto___2122]));

var G__2123 = (i__4731__auto___2122 + (1));
i__4731__auto___2122 = G__2123;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0));
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1 = (function (a){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(arr[(0)] = a);

return arr;
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((2));
(arr[(0)] = a);

(arr[(1)] = b);

return arr;
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(((2) + cljs.core.count(more)));
(arr[(0)] = a);

(arr[(1)] = b);

var G__2118_2124 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.utils.x,more,clojure.core.matrix.utils.i], null);
var G__2119_2125 = (arr[((2) + clojure.core.matrix.utils.i)] = clojure.core.matrix.utils.x);
(clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$2 ? clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$2(G__2118_2124,G__2119_2125) : clojure.core.matrix.utils.doseq_indexed.call(null,G__2118_2124,G__2119_2125));

return arr;
});

/** @this {Function} */
clojure.core.matrix.utils.object_array_of.cljs$lang$applyTo = (function (seq2114){
var G__2115 = cljs.core.first(seq2114);
var seq2114__$1 = cljs.core.next(seq2114);
var G__2116 = cljs.core.first(seq2114__$1);
var seq2114__$2 = cljs.core.next(seq2114__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2115,G__2116,seq2114__$2);
});

clojure.core.matrix.utils.object_array_of.cljs$lang$maxFixedArity = (2);

/**
 * Returns the index of a value in a vector, or nil if not present
 */
clojure.core.matrix.utils.find_index = (function clojure$core$matrix$utils$find_index(v,value){
var n = cljs.core.count(v);
var i = (0);
while(true){
if((i < n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,i))){
return i;
} else {
var G__2126 = (i + (1));
i = G__2126;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns a sequence of all possible index vectors for a given shape, in row-major order
 */
clojure.core.matrix.utils.base_index_seq_for_shape = (function clojure$core$matrix$utils$base_index_seq_for_shape(sh){
var gen = (function clojure$core$matrix$utils$base_index_seq_for_shape_$_gen(prefix,rem){
if(cljs.core.truth_(rem)){
var nrem = cljs.core.next(rem);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (nrem){
return (function (p1__2127_SHARP_){
return clojure$core$matrix$utils$base_index_seq_for_shape_$_gen(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,p1__2127_SHARP_),nrem);
});})(nrem))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.first(rem))], 0));
} else {
return (new cljs.core.List(null,prefix,null,(1),null));
}
});
return gen(cljs.core.PersistentVector.EMPTY,cljs.core.seq(sh));
});
/**
 * Returns the smallest shape that both shapes a and b can broadcast to, or nil if the the shapes
 * are not compatible.
 */
clojure.core.matrix.utils.broadcast_shape_STAR_ = (function clojure$core$matrix$utils$broadcast_shape_STAR_(var_args){
var G__2129 = arguments.length;
switch (G__2129) {
case 2:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.empty_QMARK_(a)){
var or__4131__auto__ = b;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.List.EMPTY;
}
} else {
if(cljs.core.empty_QMARK_(b)){
return a;
} else {
if(((1) === cljs.core.first(a))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(b),cljs.core.next(a),cljs.core.next(b));
} else {
if(((1) === cljs.core.first(b))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a),cljs.core.next(a),cljs.core.next(b));
} else {
if((cljs.core.first(a) === cljs.core.first(b))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(a),cljs.core.next(a),cljs.core.next(b));
} else {
return null;

}
}
}
}
}
});

clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (prefix,a,b){
if(cljs.core.truth_((function (){var or__4131__auto__ = a;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return b;
}
})())){
var r = clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2(a,b);
if(cljs.core.truth_(r)){
return cljs.core.cons(prefix,r);
} else {
return null;
}
} else {
return cljs.core.cons(prefix,null);
}
});

clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Returns the smallest compatible shape that a set of shapes can all broadcast to.
 * Returns nil if this is not possible (i.e. the shapes are incompatible).
 * Returns an empty list if both shape sequences are empty (i.e. represent scalars)
 */
clojure.core.matrix.utils.broadcast_shape = (function clojure$core$matrix$utils$broadcast_shape(var_args){
var G__2132 = arguments.length;
switch (G__2132) {
case 1:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = cljs.core.seq(cljs.core.reverse(a));
var b__$1 = cljs.core.seq(cljs.core.reverse(b));
var r = clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2(a__$1,b__$1);
if(cljs.core.truth_(r)){
return cljs.core.reverse(r);
} else {
return null;
}
});

clojure.core.matrix.utils.broadcast_shape.cljs$lang$maxFixedArity = 2;

/**
 * Returns truthy if the first shape a can be broadcast to the shape b
 */
clojure.core.matrix.utils.can_broadcast = (function clojure$core$matrix$utils$can_broadcast(from_shape,to_shape){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("TODO: not yet implemented",cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns true if an argument is a protocol'
 */
clojure.core.matrix.utils.protocol_QMARK_ = (function clojure$core$matrix$utils$protocol_QMARK_(p){
var and__4120__auto__ = cljs.core.map_QMARK_(p);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.cst$kw$on_DASH_interface.cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(and__4120__auto____$1)){
return cljs.core.cst$kw$on_DASH_interface.cljs$core$IFn$_invoke$arity$1(p).isInterface();
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Transform MapEntry to just map with some additional fields
 */
clojure.core.matrix.utils.enhance_protocol_kv = (function clojure$core$matrix$utils$enhance_protocol_kv(p__2134){
var vec__2135 = p__2134;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2135,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2135,(1),null);
var m = cljs.core.meta(cljs.core.cst$kw$var.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(p)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(p),cljs.core.cst$kw$line,cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(m),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$file,cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$name,name], 0));
});
clojure.core.matrix.utils.update_indexed = (function clojure$core$matrix$utils$update_indexed(xs,idxs,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__2139_SHARP_,p2__2140_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__2139_SHARP_,p2__2140_SHARP_,(function (){var G__2141 = p2__2140_SHARP_;
var G__2142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__2139_SHARP_,p2__2140_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__2141,G__2142) : f.call(null,G__2141,G__2142));
})());
}),xs,idxs);
});
