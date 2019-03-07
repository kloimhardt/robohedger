// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.re_frame.v0v10v6.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v6.re_frame.trace');
mranderson048.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v6.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson048.re_frame.v0v10v6.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__30171 = mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__30172 = mranderson048.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__30172;

try{try{var seq__30173 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__30174 = null;
var count__30175 = (0);
var i__30176 = (0);
while(true){
if((i__30176 < count__30175)){
var vec__30183 = cljs.core._nth.call(null,chunk__30174,i__30176);
var effect_key = cljs.core.nth.call(null,vec__30183,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30183,(1),null);
var temp__5718__auto___30205 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30205)){
var effect_fn_30206 = temp__5718__auto___30205;
effect_fn_30206.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30207 = seq__30173;
var G__30208 = chunk__30174;
var G__30209 = count__30175;
var G__30210 = (i__30176 + (1));
seq__30173 = G__30207;
chunk__30174 = G__30208;
count__30175 = G__30209;
i__30176 = G__30210;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30173);
if(temp__5720__auto__){
var seq__30173__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30173__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30173__$1);
var G__30211 = cljs.core.chunk_rest.call(null,seq__30173__$1);
var G__30212 = c__4550__auto__;
var G__30213 = cljs.core.count.call(null,c__4550__auto__);
var G__30214 = (0);
seq__30173 = G__30211;
chunk__30174 = G__30212;
count__30175 = G__30213;
i__30176 = G__30214;
continue;
} else {
var vec__30186 = cljs.core.first.call(null,seq__30173__$1);
var effect_key = cljs.core.nth.call(null,vec__30186,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30186,(1),null);
var temp__5718__auto___30215 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30215)){
var effect_fn_30216 = temp__5718__auto___30215;
effect_fn_30216.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30217 = cljs.core.next.call(null,seq__30173__$1);
var G__30218 = null;
var G__30219 = (0);
var G__30220 = (0);
seq__30173 = G__30217;
chunk__30174 = G__30218;
count__30175 = G__30219;
i__30176 = G__30220;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(mranderson048.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__27186__auto___30221 = mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__27187__auto___30222 = (end__27186__auto___30221 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27187__auto___30222,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v6.re_frame.interop.now.call(null)));

mranderson048.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__27186__auto___30221);
} else {
}
}}finally {mranderson048.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__30171;
}} else {
var seq__30189 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__30190 = null;
var count__30191 = (0);
var i__30192 = (0);
while(true){
if((i__30192 < count__30191)){
var vec__30199 = cljs.core._nth.call(null,chunk__30190,i__30192);
var effect_key = cljs.core.nth.call(null,vec__30199,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30199,(1),null);
var temp__5718__auto___30223 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30223)){
var effect_fn_30224 = temp__5718__auto___30223;
effect_fn_30224.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30225 = seq__30189;
var G__30226 = chunk__30190;
var G__30227 = count__30191;
var G__30228 = (i__30192 + (1));
seq__30189 = G__30225;
chunk__30190 = G__30226;
count__30191 = G__30227;
i__30192 = G__30228;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30189);
if(temp__5720__auto__){
var seq__30189__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30189__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30189__$1);
var G__30229 = cljs.core.chunk_rest.call(null,seq__30189__$1);
var G__30230 = c__4550__auto__;
var G__30231 = cljs.core.count.call(null,c__4550__auto__);
var G__30232 = (0);
seq__30189 = G__30229;
chunk__30190 = G__30230;
count__30191 = G__30231;
i__30192 = G__30232;
continue;
} else {
var vec__30202 = cljs.core.first.call(null,seq__30189__$1);
var effect_key = cljs.core.nth.call(null,vec__30202,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30202,(1),null);
var temp__5718__auto___30233 = mranderson048.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___30233)){
var effect_fn_30234 = temp__5718__auto___30233;
effect_fn_30234.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30235 = cljs.core.next.call(null,seq__30189__$1);
var G__30236 = null;
var G__30237 = (0);
var G__30238 = (0);
seq__30189 = G__30235;
chunk__30190 = G__30236;
count__30191 = G__30237;
i__30192 = G__30238;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__30239 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__30240 = null;
var count__30241 = (0);
var i__30242 = (0);
while(true){
if((i__30242 < count__30241)){
var map__30247 = cljs.core._nth.call(null,chunk__30240,i__30242);
var map__30247__$1 = (((((!((map__30247 == null))))?(((((map__30247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30247):map__30247);
var effect = map__30247__$1;
var ms = cljs.core.get.call(null,map__30247__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30247__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30239,chunk__30240,count__30241,i__30242,map__30247,map__30247__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__30239,chunk__30240,count__30241,i__30242,map__30247,map__30247__$1,effect,ms,dispatch))
,ms);
}


var G__30251 = seq__30239;
var G__30252 = chunk__30240;
var G__30253 = count__30241;
var G__30254 = (i__30242 + (1));
seq__30239 = G__30251;
chunk__30240 = G__30252;
count__30241 = G__30253;
i__30242 = G__30254;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30239);
if(temp__5720__auto__){
var seq__30239__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30239__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30239__$1);
var G__30255 = cljs.core.chunk_rest.call(null,seq__30239__$1);
var G__30256 = c__4550__auto__;
var G__30257 = cljs.core.count.call(null,c__4550__auto__);
var G__30258 = (0);
seq__30239 = G__30255;
chunk__30240 = G__30256;
count__30241 = G__30257;
i__30242 = G__30258;
continue;
} else {
var map__30249 = cljs.core.first.call(null,seq__30239__$1);
var map__30249__$1 = (((((!((map__30249 == null))))?(((((map__30249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30249):map__30249);
var effect = map__30249__$1;
var ms = cljs.core.get.call(null,map__30249__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30249__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30239,chunk__30240,count__30241,i__30242,map__30249,map__30249__$1,effect,ms,dispatch,seq__30239__$1,temp__5720__auto__){
return (function (){
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__30239,chunk__30240,count__30241,i__30242,map__30249,map__30249__$1,effect,ms,dispatch,seq__30239__$1,temp__5720__auto__))
,ms);
}


var G__30259 = cljs.core.next.call(null,seq__30239__$1);
var G__30260 = null;
var G__30261 = (0);
var G__30262 = (0);
seq__30239 = G__30259;
chunk__30240 = G__30260;
count__30241 = G__30261;
i__30242 = G__30262;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,value);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return mranderson048.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__30263 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__30264 = null;
var count__30265 = (0);
var i__30266 = (0);
while(true){
if((i__30266 < count__30265)){
var event = cljs.core._nth.call(null,chunk__30264,i__30266);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__30267 = seq__30263;
var G__30268 = chunk__30264;
var G__30269 = count__30265;
var G__30270 = (i__30266 + (1));
seq__30263 = G__30267;
chunk__30264 = G__30268;
count__30265 = G__30269;
i__30266 = G__30270;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30263);
if(temp__5720__auto__){
var seq__30263__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30263__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30263__$1);
var G__30271 = cljs.core.chunk_rest.call(null,seq__30263__$1);
var G__30272 = c__4550__auto__;
var G__30273 = cljs.core.count.call(null,c__4550__auto__);
var G__30274 = (0);
seq__30263 = G__30271;
chunk__30264 = G__30272;
count__30265 = G__30273;
i__30266 = G__30274;
continue;
} else {
var event = cljs.core.first.call(null,seq__30263__$1);
mranderson048.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__30275 = cljs.core.next.call(null,seq__30263__$1);
var G__30276 = null;
var G__30277 = (0);
var G__30278 = (0);
seq__30263 = G__30275;
chunk__30264 = G__30276;
count__30265 = G__30277;
i__30266 = G__30278;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v6.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__30279 = cljs.core.seq.call(null,value);
var chunk__30280 = null;
var count__30281 = (0);
var i__30282 = (0);
while(true){
if((i__30282 < count__30281)){
var event = cljs.core._nth.call(null,chunk__30280,i__30282);
clear_event.call(null,event);


var G__30283 = seq__30279;
var G__30284 = chunk__30280;
var G__30285 = count__30281;
var G__30286 = (i__30282 + (1));
seq__30279 = G__30283;
chunk__30280 = G__30284;
count__30281 = G__30285;
i__30282 = G__30286;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30279);
if(temp__5720__auto__){
var seq__30279__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30279__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30279__$1);
var G__30287 = cljs.core.chunk_rest.call(null,seq__30279__$1);
var G__30288 = c__4550__auto__;
var G__30289 = cljs.core.count.call(null,c__4550__auto__);
var G__30290 = (0);
seq__30279 = G__30287;
chunk__30280 = G__30288;
count__30281 = G__30289;
i__30282 = G__30290;
continue;
} else {
var event = cljs.core.first.call(null,seq__30279__$1);
clear_event.call(null,event);


var G__30291 = cljs.core.next.call(null,seq__30279__$1);
var G__30292 = null;
var G__30293 = (0);
var G__30294 = (0);
seq__30279 = G__30291;
chunk__30280 = G__30292;
count__30281 = G__30293;
i__30282 = G__30294;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
mranderson048.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,mranderson048.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
