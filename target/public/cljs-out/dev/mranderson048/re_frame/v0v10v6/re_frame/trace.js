// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.re_frame.v0v10v6.re_frame.trace');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('goog.functions');
mranderson048.re_frame.v0v10v6.re_frame.trace.id = cljs.core.atom.call(null,(0));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = null;
mranderson048.re_frame.v0v10v6.re_frame.trace.reset_tracing_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("mranderson048.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_ = (function mranderson048$re_frame$v0v10v6$re_frame$trace$is_trace_enabled_QMARK_(){
return mranderson048.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_;
});
mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6 !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace.traces !== 'undefined')){
} else {
mranderson048.re_frame.v0v10v6.re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6 !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace !== 'undefined') && (typeof mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery !== 'undefined')){
} else {
mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
mranderson048.re_frame.v0v10v6.re_frame.trace.register_trace_cb = (function mranderson048$re_frame$v0v10v6$re_frame$trace$register_trace_cb(key,f){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
mranderson048.re_frame.v0v10v6.re_frame.trace.remove_trace_cb = (function mranderson048$re_frame$v0v10v6$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
mranderson048.re_frame.v0v10v6.re_frame.trace.next_id = (function mranderson048$re_frame$v0v10v6$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.id,cljs.core.inc);
});
mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace = (function mranderson048$re_frame$v0v10v6$re_frame$trace$start_trace(p__27208){
var map__27209 = p__27208;
var map__27209__$1 = (((((!((map__27209 == null))))?(((((map__27209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27209):map__27209);
var operation = cljs.core.get.call(null,map__27209__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__27209__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__27209__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__27209__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),mranderson048.re_frame.v0v10v6.re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null)], null);
});
mranderson048.re_frame.v0v10v6.re_frame.trace.debounce_time = (50);
mranderson048.re_frame.v0v10v6.re_frame.trace.debounce = (function mranderson048$re_frame$v0v10v6$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
mranderson048.re_frame.v0v10v6.re_frame.trace.schedule_debounce = mranderson048.re_frame.v0v10v6.re_frame.trace.debounce.call(null,(function mranderson048$re_frame$v0v10v6$re_frame$trace$tracing_cb_debounced(){
var seq__27211_27231 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.trace_cbs));
var chunk__27212_27232 = null;
var count__27213_27233 = (0);
var i__27214_27234 = (0);
while(true){
if((i__27214_27234 < count__27213_27233)){
var vec__27223_27235 = cljs.core._nth.call(null,chunk__27212_27232,i__27214_27234);
var k_27236 = cljs.core.nth.call(null,vec__27223_27235,(0),null);
var cb_27237 = cljs.core.nth.call(null,vec__27223_27235,(1),null);
try{cb_27237.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces));
}catch (e27226){var e_27238 = e27226;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_27236,"while storing",cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces),e_27238);
}

var G__27239 = seq__27211_27231;
var G__27240 = chunk__27212_27232;
var G__27241 = count__27213_27233;
var G__27242 = (i__27214_27234 + (1));
seq__27211_27231 = G__27239;
chunk__27212_27232 = G__27240;
count__27213_27233 = G__27241;
i__27214_27234 = G__27242;
continue;
} else {
var temp__5720__auto___27243 = cljs.core.seq.call(null,seq__27211_27231);
if(temp__5720__auto___27243){
var seq__27211_27244__$1 = temp__5720__auto___27243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27211_27244__$1)){
var c__4550__auto___27245 = cljs.core.chunk_first.call(null,seq__27211_27244__$1);
var G__27246 = cljs.core.chunk_rest.call(null,seq__27211_27244__$1);
var G__27247 = c__4550__auto___27245;
var G__27248 = cljs.core.count.call(null,c__4550__auto___27245);
var G__27249 = (0);
seq__27211_27231 = G__27246;
chunk__27212_27232 = G__27247;
count__27213_27233 = G__27248;
i__27214_27234 = G__27249;
continue;
} else {
var vec__27227_27250 = cljs.core.first.call(null,seq__27211_27244__$1);
var k_27251 = cljs.core.nth.call(null,vec__27227_27250,(0),null);
var cb_27252 = cljs.core.nth.call(null,vec__27227_27250,(1),null);
try{cb_27252.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces));
}catch (e27230){var e_27253 = e27230;
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_27251,"while storing",cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces),e_27253);
}

var G__27254 = cljs.core.next.call(null,seq__27211_27244__$1);
var G__27255 = null;
var G__27256 = (0);
var G__27257 = (0);
seq__27211_27231 = G__27254;
chunk__27212_27232 = G__27255;
count__27213_27233 = G__27256;
i__27214_27234 = G__27257;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),mranderson048.re_frame.v0v10v6.re_frame.trace.debounce_time);
mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_ = (function mranderson048$re_frame$v0v10v6$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery) - (25)) < now)){
mranderson048.re_frame.v0v10v6.re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.next_delivery,(now + mranderson048.re_frame.v0v10v6.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
