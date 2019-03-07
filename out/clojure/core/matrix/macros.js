// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.matrix.macros');
goog.require('cljs.core');
goog.require('cljs.core.constants');
var ret__4776__auto___2238 = (function (){
/**
 * Throws an error with the provided message(s)
 */
clojure.core.matrix.macros.error = (function clojure$core$matrix$macros$error(var_args){
var args__4736__auto__ = [];
var len__4730__auto___2239 = arguments.length;
var i__4731__auto___2240 = (0);
while(true){
if((i__4731__auto___2240 < len__4730__auto___2239)){
args__4736__auto__.push((arguments[i__4731__auto___2240]));

var G__2241 = (i__4731__auto___2240 + (1));
i__4731__auto___2240 = G__2241;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_ex_DASH_info,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_str,null,(1),null)),vals))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))], 0)))),null,(1),null)))));
});

clojure.core.matrix.macros.error.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
clojure.core.matrix.macros.error.cljs$lang$applyTo = (function (seq2235){
var G__2236 = cljs.core.first(seq2235);
var seq2235__$1 = cljs.core.next(seq2235);
var G__2237 = cljs.core.first(seq2235__$1);
var seq2235__$2 = cljs.core.next(seq2235__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2236,G__2237,seq2235__$2);
});

return null;
})()
;
clojure.core.matrix.macros.error.cljs$lang$macro = true;

var ret__4776__auto___2247 = (function (){
clojure.core.matrix.macros.TODO = (function clojure$core$matrix$macros$TODO(var_args){
var G__2246 = arguments.length;
switch (G__2246) {
case 2:
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___2249 = arguments.length;
var i__4731__auto___2250 = (0);
while(true){
if((i__4731__auto___2250 < len__4730__auto___2249)){
args_arr__4751__auto__.push((arguments[i__4731__auto___2250]));

var G__2251 = (i__4731__auto___2250 + (1));
i__4731__auto___2250 = G__2251;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$clojure$core$matrix$macros_SLASH_error,null,(1),null)),(new cljs.core.List(null,"TODO: not yet implemented",null,(1),null)))));
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$clojure$core$matrix$macros_SLASH_error,null,(1),null)),(new cljs.core.List(null,"TODO: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([vals], 0))));
});

/** @this {Function} */
clojure.core.matrix.macros.TODO.cljs$lang$applyTo = (function (seq2243){
var G__2244 = cljs.core.first(seq2243);
var seq2243__$1 = cljs.core.next(seq2243);
var G__2245 = cljs.core.first(seq2243__$1);
var seq2243__$2 = cljs.core.next(seq2243__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2244,G__2245,seq2243__$2);
});

clojure.core.matrix.macros.TODO.cljs$lang$maxFixedArity = (2);

return null;
})()
;
clojure.core.matrix.macros.TODO.cljs$lang$macro = true;

var ret__4776__auto___2252 = /**
 * Throws IllegalArgumentException with provided string
 */
clojure.core.matrix.macros.iae = (function clojure$core$matrix$macros$iae(_AMPERSAND_form,_AMPERSAND_env,exception_str){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$throw,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$IllegalArgumentException$,null,(1),null)),(new cljs.core.List(null,exception_str,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.iae.cljs$lang$macro = true;

var ret__4776__auto___2253 = /**
 * Throws an IllegalArgumentException when the predicate is not satisfied
 */
clojure.core.matrix.macros.iae_when_not = (function clojure$core$matrix$macros$iae_when_not(_AMPERSAND_form,_AMPERSAND_env,pred_QMARK_,exception_str){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when_DASH_not,null,(1),null)),(new cljs.core.List(null,pred_QMARK_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$clojure$core$matrix$macros_SLASH_iae,null,(1),null)),(new cljs.core.List(null,exception_str,null,(1),null))))),null,(1),null))], 0))));
});
clojure.core.matrix.macros.iae_when_not.cljs$lang$macro = true;

var ret__4776__auto___2263 = (function (){
/**
 * loops over a set of values, binding index-sym to the 0-based index of each value
 */
clojure.core.matrix.macros.doseq_indexed = (function clojure$core$matrix$macros$doseq_indexed(var_args){
var args__4736__auto__ = [];
var len__4730__auto___2264 = arguments.length;
var i__4731__auto___2265 = (0);
while(true){
if((i__4731__auto___2265 < len__4730__auto___2264)){
args__4736__auto__.push((arguments[i__4731__auto___2265]));

var G__2266 = (i__4731__auto___2265 + (1));
i__4731__auto___2265 = G__2266;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__2259,code){
var vec__2260 = p__2259;
var val_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2260,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2260,(1),null);
var index_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2260,(2),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_loop,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$vals__2254__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_seq,null,(1),null)),(new cljs.core.List(null,values,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,index_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_long,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$if,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$vals__2254__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,val_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_first,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$vals__2254__auto__,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([code,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$recur,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_next,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$vals__2254__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_inc,null,(1),null)),(new cljs.core.List(null,index_sym,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0))));
});

clojure.core.matrix.macros.doseq_indexed.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.core.matrix.macros.doseq_indexed.cljs$lang$applyTo = (function (seq2255){
var G__2256 = cljs.core.first(seq2255);
var seq2255__$1 = cljs.core.next(seq2255);
var G__2257 = cljs.core.first(seq2255__$1);
var seq2255__$2 = cljs.core.next(seq2255__$1);
var G__2258 = cljs.core.first(seq2255__$2);
var seq2255__$3 = cljs.core.next(seq2255__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2256,G__2257,G__2258,seq2255__$3);
});

return null;
})()
;
clojure.core.matrix.macros.doseq_indexed.cljs$lang$macro = true;

var ret__4776__auto___2267 = clojure.core.matrix.macros.is_object_array_QMARK_ = (function clojure$core$matrix$macros$is_object_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_type,null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null))], 0))));
});
clojure.core.matrix.macros.is_object_array_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___2268 = clojure.core.matrix.macros.is_long_array_QMARK_ = (function clojure$core$matrix$macros$is_long_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_type,null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null))], 0))));
});
clojure.core.matrix.macros.is_long_array_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___2269 = clojure.core.matrix.macros.is_double_array_QMARK_ = (function clojure$core$matrix$macros$is_double_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH__EQ_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$js_SLASH_Array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_type,null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null))], 0))));
});
clojure.core.matrix.macros.is_double_array_QMARK_.cljs$lang$macro = true;

var ret__4776__auto___2280 = (function (){
/**
 * C-like loop with nested loops support
 */
clojure.core.matrix.macros.c_for = (function clojure$core$matrix$macros$c_for(var_args){
var args__4736__auto__ = [];
var len__4730__auto___2281 = arguments.length;
var i__4731__auto___2282 = (0);
while(true){
if((i__4731__auto___2282 < len__4730__auto___2281)){
args__4736__auto__.push((arguments[i__4731__auto___2282]));

var G__2283 = (i__4731__auto___2282 + (1));
i__4731__auto___2282 = G__2283;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,loops,body){
var c_for_rec = (function clojure$core$matrix$macros$c_for_rec(loops__$1,body_stmts){
if(cljs.core.seq(loops__$1)){
var vec__2277 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),loops__$1);
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2277,(0),null);
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2277,(1),null);
var check = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2277,(2),null);
var next = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__2277,(3),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_loop,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,var$,null,(1),null)),(new cljs.core.List(null,init,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_when,null,(1),null)),(new cljs.core.List(null,check,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure$core$matrix$macros$c_for_rec(cljs.core.nthrest(loops__$1,(4)),body_stmts),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$recur,null,(1),null)),(new cljs.core.List(null,next,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))));
} else {
return body_stmts;
}
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$do,null,(1),null)),c_for_rec(loops,body),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))));
});

clojure.core.matrix.macros.c_for.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
clojure.core.matrix.macros.c_for.cljs$lang$applyTo = (function (seq2270){
var G__2271 = cljs.core.first(seq2270);
var seq2270__$1 = cljs.core.next(seq2270);
var G__2272 = cljs.core.first(seq2270__$1);
var seq2270__$2 = cljs.core.next(seq2270__$1);
var G__2273 = cljs.core.first(seq2270__$2);
var seq2270__$3 = cljs.core.next(seq2270__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2271,G__2272,G__2273,seq2270__$3);
});

return null;
})()
;
clojure.core.matrix.macros.c_for.cljs$lang$macro = true;

var ret__4776__auto___2285 = /**
 * Macro to coerce to scalar value with an efficient dispatch sequence
 */
clojure.core.matrix.macros.scalar_coerce = (function clojure$core$matrix$macros$scalar_coerce(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_let,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$x__2284__auto__,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_cond,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_number_QMARK_,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__2284__auto__,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$x__2284__auto__,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$kw$else,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$clojure$core$matrix$protocols_SLASH_get_DASH_0d,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__2284__auto__,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
clojure.core.matrix.macros.scalar_coerce.cljs$lang$macro = true;

var ret__4776__auto___2286 = /**
 * Returns true if the parameter is an N-dimensional array of any type
 */
clojure.core.matrix.macros.array_QMARK_ = (function clojure$core$matrix$macros$array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_not,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$clojure$core$matrix$protocols_SLASH_is_DASH_scalar_QMARK_,null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null)))));
});
clojure.core.matrix.macros.array_QMARK_.cljs$lang$macro = true;

