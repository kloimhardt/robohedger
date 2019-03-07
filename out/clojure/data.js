// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__19276){
var vec__19277 = p__19276;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19277,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19277,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__19280 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19280,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19280,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19280,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__19284 = arguments.length;
switch (G__19284) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__19286_19310 = clojure.data.equality_partition;
var G__19287_19311 = "null";
var G__19288_19312 = ((function (G__19286_19310,G__19287_19311){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__19286_19310,G__19287_19311))
;
goog.object.set(G__19286_19310,G__19287_19311,G__19288_19312);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__19289_19313 = clojure.data.equality_partition;
var G__19290_19314 = "string";
var G__19291_19315 = ((function (G__19289_19313,G__19290_19314){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__19289_19313,G__19290_19314))
;
goog.object.set(G__19289_19313,G__19290_19314,G__19291_19315);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__19292_19316 = clojure.data.equality_partition;
var G__19293_19317 = "number";
var G__19294_19318 = ((function (G__19292_19316,G__19293_19317){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__19292_19316,G__19293_19317))
;
goog.object.set(G__19292_19316,G__19293_19317,G__19294_19318);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__19295_19319 = clojure.data.equality_partition;
var G__19296_19320 = "array";
var G__19297_19321 = ((function (G__19295_19319,G__19296_19320){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__19295_19319,G__19296_19320))
;
goog.object.set(G__19295_19319,G__19296_19320,G__19297_19321);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__19298_19322 = clojure.data.equality_partition;
var G__19299_19323 = "function";
var G__19300_19324 = ((function (G__19298_19322,G__19299_19323){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__19298_19322,G__19299_19323))
;
goog.object.set(G__19298_19322,G__19299_19323,G__19300_19324);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__19301_19325 = clojure.data.equality_partition;
var G__19302_19326 = "boolean";
var G__19303_19327 = ((function (G__19301_19325,G__19302_19326){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__19301_19325,G__19302_19326))
;
goog.object.set(G__19301_19325,G__19302_19326,G__19303_19327);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__19304_19328 = clojure.data.equality_partition;
var G__19305_19329 = "_";
var G__19306_19330 = ((function (G__19304_19328,G__19305_19329){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__19304_19328,G__19305_19329))
;
goog.object.set(G__19304_19328,G__19305_19329,G__19306_19330);
goog.object.set(clojure.data.Diff,"null",true);

var G__19331_19355 = clojure.data.diff_similar;
var G__19332_19356 = "null";
var G__19333_19357 = ((function (G__19331_19355,G__19332_19356){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__19331_19355,G__19332_19356))
;
goog.object.set(G__19331_19355,G__19332_19356,G__19333_19357);

goog.object.set(clojure.data.Diff,"string",true);

var G__19334_19358 = clojure.data.diff_similar;
var G__19335_19359 = "string";
var G__19336_19360 = ((function (G__19334_19358,G__19335_19359){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__19334_19358,G__19335_19359))
;
goog.object.set(G__19334_19358,G__19335_19359,G__19336_19360);

goog.object.set(clojure.data.Diff,"number",true);

var G__19337_19361 = clojure.data.diff_similar;
var G__19338_19362 = "number";
var G__19339_19363 = ((function (G__19337_19361,G__19338_19362){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__19337_19361,G__19338_19362))
;
goog.object.set(G__19337_19361,G__19338_19362,G__19339_19363);

goog.object.set(clojure.data.Diff,"array",true);

var G__19340_19364 = clojure.data.diff_similar;
var G__19341_19365 = "array";
var G__19342_19366 = ((function (G__19340_19364,G__19341_19365){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__19340_19364,G__19341_19365))
;
goog.object.set(G__19340_19364,G__19341_19365,G__19342_19366);

goog.object.set(clojure.data.Diff,"function",true);

var G__19343_19367 = clojure.data.diff_similar;
var G__19344_19368 = "function";
var G__19345_19369 = ((function (G__19343_19367,G__19344_19368){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__19343_19367,G__19344_19368))
;
goog.object.set(G__19343_19367,G__19344_19368,G__19345_19369);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__19346_19370 = clojure.data.diff_similar;
var G__19347_19371 = "boolean";
var G__19348_19372 = ((function (G__19346_19370,G__19347_19371){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__19346_19370,G__19347_19371))
;
goog.object.set(G__19346_19370,G__19347_19371,G__19348_19372);

goog.object.set(clojure.data.Diff,"_",true);

var G__19349_19373 = clojure.data.diff_similar;
var G__19350_19374 = "_";
var G__19351_19375 = ((function (G__19349_19373,G__19350_19374){
return (function (a,b){
var fexpr__19353 = (function (){var G__19354 = clojure.data.equality_partition(a);
var G__19354__$1 = (((G__19354 instanceof cljs.core.Keyword))?G__19354.fqn:null);
switch (G__19354__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19354__$1)].join('')));

}
})();
return (fexpr__19353.cljs$core$IFn$_invoke$arity$2 ? fexpr__19353.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__19353.call(null,a,b));
});})(G__19349_19373,G__19350_19374))
;
goog.object.set(G__19349_19373,G__19350_19374,G__19351_19375);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
