// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.matrix.implementations');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.macros');
/**
 * A map of known core.matrix implementation namespaces.
 * 
 * core.matrix will attempt to load these namespaces when an array of the specified
 * keyword type is requested.
 */
clojure.core.matrix.implementations.KNOWN_IMPLEMENTATIONS = (new cljs.core.PersistentArrayMap(null,(26),[cljs.core.cst$kw$vectorz,cljs.core.cst$sym$mikera$vectorz$matrix_DASH_api,cljs.core.cst$kw$vectorz_DASH_opencl,cljs.core.cst$sym$mikera$vectorz$opencl_DASH_api,cljs.core.cst$kw$neanderthal,cljs.core.cst$sym$uncomplicate$neanderthal$impl$matrix_DASH_api,cljs.core.cst$kw$clojure,cljs.core.cst$sym$clojure$core$matrix$impl$clojure,cljs.core.cst$kw$ndarray,cljs.core.cst$sym$clojure$core$matrix$impl$ndarray_DASH_object,cljs.core.cst$kw$ndarray_DASH_double,cljs.core.cst$sym$clojure$core$matrix$impl$ndarray_DASH_double,cljs.core.cst$kw$ndarray_DASH_float,cljs.core.cst$sym$clojure$core$matrix$impl$ndarray,cljs.core.cst$kw$ndarray_DASH_long,cljs.core.cst$sym$clojure$core$matrix$impl$ndarray,cljs.core.cst$kw$persistent_DASH_vector,cljs.core.cst$sym$clojure$core$matrix$impl$persistent_DASH_vector,cljs.core.cst$kw$persistent_DASH_map,cljs.core.cst$sym$clojure$core$matrix$impl$sparse_DASH_map,cljs.core.cst$kw$sequence,cljs.core.cst$sym$clojure$core$matrix$impl$sequence,cljs.core.cst$kw$double_DASH_array,cljs.core.cst$sym$clojure$core$matrix$impl$double_DASH_array,cljs.core.cst$kw$scalar_DASH_wrapper,cljs.core.cst$sym$clojure$core$matrix$impl$wrappers,cljs.core.cst$kw$slice_DASH_wrapper,cljs.core.cst$sym$clojure$core$matrix$impl$wrappers,cljs.core.cst$kw$nd_DASH_wrapper,cljs.core.cst$sym$clojure$core$matrix$impl$wrappers,cljs.core.cst$kw$dataset,cljs.core.cst$sym$clojure$core$matrix$impl$dataset,cljs.core.cst$kw$jblas,cljs.core.cst$kw$TODO,cljs.core.cst$kw$clatrix,cljs.core.cst$sym$clatrix$core,cljs.core.cst$kw$parallel_DASH_colt,cljs.core.cst$kw$TODO,cljs.core.cst$kw$ejml,cljs.core.cst$kw$TODO,cljs.core.cst$kw$nd4j,cljs.core.cst$sym$nd4clj$kiw,cljs.core.cst$kw$ujmp,cljs.core.cst$kw$TODO,cljs.core.cst$kw$weka,cljs.core.cst$sym$clj_DASH_ml$matrix_DASH_api,cljs.core.cst$kw$commons_DASH_math,cljs.core.cst$sym$apache_DASH_commons_DASH_matrix$core,cljs.core.cst$kw$mtj,cljs.core.cst$sym$cav$mtj$core$matrix,cljs.core.cst$kw$aljabr,cljs.core.cst$sym$thinktopic$aljabr$core],null));
/**
 * The default implementation used in core.matrix. Currently set to `:persistent-vector` for maximum
 * compatibility with regular Clojure code.
 */
clojure.core.matrix.implementations.DEFAULT_IMPLEMENTATION = cljs.core.cst$kw$persistent_DASH_vector;
/**
 * A dynamic var specifying the current core.matrix implementation in use.
 * 
 * May be re-bound to temporarily use a different core.matrix implementation.
 */
clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_ = clojure.core.matrix.implementations.DEFAULT_IMPLEMENTATION;
/**
 * A dynamic var specifying the current core.matrix numeric implementation in use.
 * 
 * May be re-bound to temporarily use a different core.matrix implementation.
 */
clojure.core.matrix.implementations._STAR_numeric_implementation_STAR_ = cljs.core.cst$kw$ndarray_DASH_double;
if((typeof clojure !== 'undefined') && (typeof clojure.core !== 'undefined') && (typeof clojure.core.matrix !== 'undefined') && (typeof clojure.core.matrix.implementations !== 'undefined') && (typeof clojure.core.matrix.implementations._STAR_debug_options_STAR_ !== 'undefined')){
} else {
/**
 * A dynamic var supporting debugging option for core.matrix implementers.
 * 
 * Currently supported values:
 *   :print-registrations  - print when core.matrix implementations are registered
 *   :reload-namespaces  - require :reload implementation namespaces when setting the current implementation
 */
clojure.core.matrix.implementations._STAR_debug_options_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$print_DASH_registrations,false,cljs.core.cst$kw$reload_DASH_namespaces,false], null);
}
if((typeof clojure !== 'undefined') && (typeof clojure.core !== 'undefined') && (typeof clojure.core.matrix !== 'undefined') && (typeof clojure.core.matrix.implementations !== 'undefined') && (typeof clojure.core.matrix.implementations.canonical_objects !== 'undefined')){
} else {
/**
 * An atom holding a map of canonical objects for each loaded core.matrix implementation.
 * 
 * Canonical objects may be used to invoke protocol methods on an instance of the correct
 * type to get implementation-specific behaviour. Canonical objects are required to support
 * all mandatory core.matrix protocols.
 */
clojure.core.matrix.implementations.canonical_objects = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns the implementation keyword  for a given object
 */
clojure.core.matrix.implementations.get_implementation_key = (function clojure$core$matrix$implementations$get_implementation_key(m){
if((m instanceof cljs.core.Keyword)){
return m;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return null;
} else {
return clojure.core.matrix.protocols.implementation_key(m);

}
}
});
/**
 * Registers a matrix implementation for use. Should be called by all implementations
 * when they are loaded, once for each implementation keyword registered. Safe to call multiple times.
 */
clojure.core.matrix.implementations.register_implementation = (function clojure$core$matrix$implementations$register_implementation(var_args){
var G__2290 = arguments.length;
switch (G__2290) {
case 1:
return clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$1 = (function (canonical_object){
return clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.implementation_key(canonical_object),canonical_object);
});

clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$2 = (function (key,canonical_object){
if((key instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Implementation key must be a Clojure keyword but got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(key))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.truth_(cljs.core.cst$kw$print_DASH_registrations.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.implementations._STAR_debug_options_STAR_))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Registering core.matrix implementation [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"] with canonical object [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(canonical_object)),"]"].join('')], 0));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(clojure.core.matrix.implementations.canonical_objects,cljs.core.assoc,key,canonical_object);
});

clojure.core.matrix.implementations.register_implementation.cljs$lang$maxFixedArity = 2;

/**
 * Attempts to load an implementation for the given keyword.
 * Returns nil if not possible, a non-nil matrix value of the correct implementation otherwise.
 */
clojure.core.matrix.implementations.try_load_implementation = (function clojure$core$matrix$implementations$try_load_implementation(k){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["INFO: No dynamic loading of implementations in Clojurescript.\nYou must require an implementation explicitly in a namespace, for example thinktopic.aljabr.core"], 0));
});
/**
 * Attempts to load the implementation for a given keyword or matrix object.
 * Returns nil if not possible, a non-nil matrix value of the correct implementation otherwise.
 */
clojure.core.matrix.implementations.load_implementation = (function clojure$core$matrix$implementations$load_implementation(korm){
if((korm instanceof cljs.core.Keyword)){
return clojure.core.matrix.implementations.try_load_implementation(korm);
} else {
return clojure.core.matrix.implementations.try_load_implementation(clojure.core.matrix.protocols.implementation_key(korm));
}
});
/**
 * Gets the canonical object for a specific implementation. The canonical object is used
 * to call implementation-specific protocol functions where required (e.g. creation of new
 * arrays of the correct type for the implementation).
 * 
 * Returns nil if the implementation cannot be found.
 */
clojure.core.matrix.implementations.get_canonical_object = (function clojure$core$matrix$implementations$get_canonical_object(var_args){
var G__2293 = arguments.length;
switch (G__2293) {
case 0:
return clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
});

clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1 = (function (m){
var k = clojure.core.matrix.implementations.get_implementation_key(m);
var obj = (function (){var fexpr__2294 = cljs.core.deref(clojure.core.matrix.implementations.canonical_objects);
return (fexpr__2294.cljs$core$IFn$_invoke$arity$1 ? fexpr__2294.cljs$core$IFn$_invoke$arity$1(k) : fexpr__2294.call(null,k));
})();
if(cljs.core.truth_(k)){
var or__4131__auto__ = obj;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (cljs.core.truth_(clojure.core.matrix.implementations.try_load_implementation(k))?(function (){var fexpr__2296 = cljs.core.deref(clojure.core.matrix.implementations.canonical_objects);
return (fexpr__2296.cljs$core$IFn$_invoke$arity$1 ? fexpr__2296.cljs$core$IFn$_invoke$arity$1(k) : fexpr__2296.call(null,k));
})():null);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = (((m instanceof cljs.core.Keyword))?null:m);
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return null;
}
}
}
} else {
return null;
}
});

clojure.core.matrix.implementations.get_canonical_object.cljs$lang$maxFixedArity = 1;

/**
 * Like get-canonical-object, except it throws an exception if the implementation cannot be found
 */
clojure.core.matrix.implementations.get_canonical_object_or_throw = (function clojure$core$matrix$implementations$get_canonical_object_or_throw(mk){
var or__4131__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(mk);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot find implementation for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mk)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Attempts to construct an array according to the type of array m. If not possible,
 * returns another array type.
 */
clojure.core.matrix.implementations.construct = (function clojure$core$matrix$implementations$construct(m,data){
var or__4131__auto__ = clojure.core.matrix.protocols.construct_matrix(m,data);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = clojure.core.matrix.protocols.coerce_param(m,data);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return clojure.core.matrix.protocols.coerce_param(cljs.core.PersistentVector.EMPTY,data);
}
}
});
/**
 * Sets the currently active core.matrix implementation.
 * 
 * Parameter may be
 *  - A known keyword for the implementation e.g. :vectorz
 *  - An existing instance from the implementation
 * 
 * Throws an exception if the implementation cannot be loaded.
 * 
 * This is used primarily for functions that construct new matrices, i.e. it determines the
 * implementation used for expressions like: (matrix [[1 2] [3 4]])
 */
clojure.core.matrix.implementations.set_current_implementation = (function clojure$core$matrix$implementations$set_current_implementation(m){
if((m instanceof cljs.core.Keyword)){
var or__4131__auto___2298 = clojure.core.matrix.implementations.try_load_implementation(m);
if(cljs.core.truth_(or__4131__auto___2298)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Unable to load matrix implementation: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
}

return clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_ = clojure.core.matrix.implementations.get_implementation_key(m);
});
