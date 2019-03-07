// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__1895){
var map__1896 = p__1895;
var map__1896__$1 = (((((!((map__1896 == null))))?(((((map__1896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__1896):map__1896);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1896__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1896__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1896__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__1896__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__1898_1922 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__1899_1923 = null;
var count__1900_1924 = (0);
var i__1901_1925 = (0);
while(true){
if((i__1901_1925 < count__1900_1924)){
var vec__1912_1926 = chunk__1899_1923.cljs$core$IIndexed$_nth$arity$2(null,i__1901_1925);
var k_1927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1912_1926,(0),null);
var cb_1928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1912_1926,(1),null);
try{var G__1916_1929 = cljs.core.deref(re_frame.trace.traces);
(cb_1928.cljs$core$IFn$_invoke$arity$1 ? cb_1928.cljs$core$IFn$_invoke$arity$1(G__1916_1929) : cb_1928.call(null,G__1916_1929));
}catch (e1915){var e_1930 = e1915;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_1927,"while storing",cljs.core.deref(re_frame.trace.traces),e_1930], 0));
}

var G__1931 = seq__1898_1922;
var G__1932 = chunk__1899_1923;
var G__1933 = count__1900_1924;
var G__1934 = (i__1901_1925 + (1));
seq__1898_1922 = G__1931;
chunk__1899_1923 = G__1932;
count__1900_1924 = G__1933;
i__1901_1925 = G__1934;
continue;
} else {
var temp__5720__auto___1935 = cljs.core.seq(seq__1898_1922);
if(temp__5720__auto___1935){
var seq__1898_1936__$1 = temp__5720__auto___1935;
if(cljs.core.chunked_seq_QMARK_(seq__1898_1936__$1)){
var c__4550__auto___1937 = cljs.core.chunk_first(seq__1898_1936__$1);
var G__1938 = cljs.core.chunk_rest(seq__1898_1936__$1);
var G__1939 = c__4550__auto___1937;
var G__1940 = cljs.core.count(c__4550__auto___1937);
var G__1941 = (0);
seq__1898_1922 = G__1938;
chunk__1899_1923 = G__1939;
count__1900_1924 = G__1940;
i__1901_1925 = G__1941;
continue;
} else {
var vec__1917_1942 = cljs.core.first(seq__1898_1936__$1);
var k_1943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1917_1942,(0),null);
var cb_1944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__1917_1942,(1),null);
try{var G__1921_1945 = cljs.core.deref(re_frame.trace.traces);
(cb_1944.cljs$core$IFn$_invoke$arity$1 ? cb_1944.cljs$core$IFn$_invoke$arity$1(G__1921_1945) : cb_1944.call(null,G__1921_1945));
}catch (e1920){var e_1946 = e1920;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_1943,"while storing",cljs.core.deref(re_frame.trace.traces),e_1946], 0));
}

var G__1947 = cljs.core.next(seq__1898_1936__$1);
var G__1948 = null;
var G__1949 = (0);
var G__1950 = (0);
seq__1898_1922 = G__1947;
chunk__1899_1923 = G__1948;
count__1900_1924 = G__1949;
i__1901_1925 = G__1950;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
