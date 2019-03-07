// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__19145 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__19146 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__19146;

try{try{var seq__19147 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__19148 = null;
var count__19149 = (0);
var i__19150 = (0);
while(true){
if((i__19150 < count__19149)){
var vec__19157 = chunk__19148.cljs$core$IIndexed$_nth$arity$2(null,i__19150);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19157,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19157,(1),null);
var temp__5718__auto___19179 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___19179)){
var effect_fn_19180 = temp__5718__auto___19179;
(effect_fn_19180.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19180.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19180.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19181 = seq__19147;
var G__19182 = chunk__19148;
var G__19183 = count__19149;
var G__19184 = (i__19150 + (1));
seq__19147 = G__19181;
chunk__19148 = G__19182;
count__19149 = G__19183;
i__19150 = G__19184;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__19147);
if(temp__5720__auto__){
var seq__19147__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19147__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__19147__$1);
var G__19185 = cljs.core.chunk_rest(seq__19147__$1);
var G__19186 = c__4550__auto__;
var G__19187 = cljs.core.count(c__4550__auto__);
var G__19188 = (0);
seq__19147 = G__19185;
chunk__19148 = G__19186;
count__19149 = G__19187;
i__19150 = G__19188;
continue;
} else {
var vec__19160 = cljs.core.first(seq__19147__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19160,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19160,(1),null);
var temp__5718__auto___19189 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___19189)){
var effect_fn_19190 = temp__5718__auto___19189;
(effect_fn_19190.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19190.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19190.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19191 = cljs.core.next(seq__19147__$1);
var G__19192 = null;
var G__19193 = (0);
var G__19194 = (0);
seq__19147 = G__19191;
chunk__19148 = G__19192;
count__19149 = G__19193;
i__19150 = G__19194;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__1873__auto___19195 = re_frame.interop.now();
var duration__1874__auto___19196 = (end__1873__auto___19195 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__1874__auto___19196,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__1873__auto___19195);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__19145;
}} else {
var seq__19163 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__19164 = null;
var count__19165 = (0);
var i__19166 = (0);
while(true){
if((i__19166 < count__19165)){
var vec__19173 = chunk__19164.cljs$core$IIndexed$_nth$arity$2(null,i__19166);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19173,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19173,(1),null);
var temp__5718__auto___19197 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___19197)){
var effect_fn_19198 = temp__5718__auto___19197;
(effect_fn_19198.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19198.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19198.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19199 = seq__19163;
var G__19200 = chunk__19164;
var G__19201 = count__19165;
var G__19202 = (i__19166 + (1));
seq__19163 = G__19199;
chunk__19164 = G__19200;
count__19165 = G__19201;
i__19166 = G__19202;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__19163);
if(temp__5720__auto__){
var seq__19163__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19163__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__19163__$1);
var G__19203 = cljs.core.chunk_rest(seq__19163__$1);
var G__19204 = c__4550__auto__;
var G__19205 = cljs.core.count(c__4550__auto__);
var G__19206 = (0);
seq__19163 = G__19203;
chunk__19164 = G__19204;
count__19165 = G__19205;
i__19166 = G__19206;
continue;
} else {
var vec__19176 = cljs.core.first(seq__19163__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19176,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19176,(1),null);
var temp__5718__auto___19207 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___19207)){
var effect_fn_19208 = temp__5718__auto___19207;
(effect_fn_19208.cljs$core$IFn$_invoke$arity$1 ? effect_fn_19208.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_19208.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__19209 = cljs.core.next(seq__19163__$1);
var G__19210 = null;
var G__19211 = (0);
var G__19212 = (0);
seq__19163 = G__19209;
chunk__19164 = G__19210;
count__19165 = G__19211;
i__19166 = G__19212;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__19213 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19214 = null;
var count__19215 = (0);
var i__19216 = (0);
while(true){
if((i__19216 < count__19215)){
var map__19221 = chunk__19214.cljs$core$IIndexed$_nth$arity$2(null,i__19216);
var map__19221__$1 = (((((!((map__19221 == null))))?(((((map__19221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19221):map__19221);
var effect = map__19221__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19221__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__19213,chunk__19214,count__19215,i__19216,map__19221,map__19221__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__19213,chunk__19214,count__19215,i__19216,map__19221,map__19221__$1,effect,ms,dispatch))
,ms);
}


var G__19225 = seq__19213;
var G__19226 = chunk__19214;
var G__19227 = count__19215;
var G__19228 = (i__19216 + (1));
seq__19213 = G__19225;
chunk__19214 = G__19226;
count__19215 = G__19227;
i__19216 = G__19228;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__19213);
if(temp__5720__auto__){
var seq__19213__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19213__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__19213__$1);
var G__19229 = cljs.core.chunk_rest(seq__19213__$1);
var G__19230 = c__4550__auto__;
var G__19231 = cljs.core.count(c__4550__auto__);
var G__19232 = (0);
seq__19213 = G__19229;
chunk__19214 = G__19230;
count__19215 = G__19231;
i__19216 = G__19232;
continue;
} else {
var map__19223 = cljs.core.first(seq__19213__$1);
var map__19223__$1 = (((((!((map__19223 == null))))?(((((map__19223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19223):map__19223);
var effect = map__19223__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19223__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19223__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__19213,chunk__19214,count__19215,i__19216,map__19223,map__19223__$1,effect,ms,dispatch,seq__19213__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__19213,chunk__19214,count__19215,i__19216,map__19223,map__19223__$1,effect,ms,dispatch,seq__19213__$1,temp__5720__auto__))
,ms);
}


var G__19233 = cljs.core.next(seq__19213__$1);
var G__19234 = null;
var G__19235 = (0);
var G__19236 = (0);
seq__19213 = G__19233;
chunk__19214 = G__19234;
count__19215 = G__19235;
i__19216 = G__19236;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__19237 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__19238 = null;
var count__19239 = (0);
var i__19240 = (0);
while(true){
if((i__19240 < count__19239)){
var event = chunk__19238.cljs$core$IIndexed$_nth$arity$2(null,i__19240);
re_frame.router.dispatch(event);


var G__19241 = seq__19237;
var G__19242 = chunk__19238;
var G__19243 = count__19239;
var G__19244 = (i__19240 + (1));
seq__19237 = G__19241;
chunk__19238 = G__19242;
count__19239 = G__19243;
i__19240 = G__19244;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__19237);
if(temp__5720__auto__){
var seq__19237__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19237__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__19237__$1);
var G__19245 = cljs.core.chunk_rest(seq__19237__$1);
var G__19246 = c__4550__auto__;
var G__19247 = cljs.core.count(c__4550__auto__);
var G__19248 = (0);
seq__19237 = G__19245;
chunk__19238 = G__19246;
count__19239 = G__19247;
i__19240 = G__19248;
continue;
} else {
var event = cljs.core.first(seq__19237__$1);
re_frame.router.dispatch(event);


var G__19249 = cljs.core.next(seq__19237__$1);
var G__19250 = null;
var G__19251 = (0);
var G__19252 = (0);
seq__19237 = G__19249;
chunk__19238 = G__19250;
count__19239 = G__19251;
i__19240 = G__19252;
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
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__19253 = cljs.core.seq(value);
var chunk__19254 = null;
var count__19255 = (0);
var i__19256 = (0);
while(true){
if((i__19256 < count__19255)){
var event = chunk__19254.cljs$core$IIndexed$_nth$arity$2(null,i__19256);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__19257 = seq__19253;
var G__19258 = chunk__19254;
var G__19259 = count__19255;
var G__19260 = (i__19256 + (1));
seq__19253 = G__19257;
chunk__19254 = G__19258;
count__19255 = G__19259;
i__19256 = G__19260;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__19253);
if(temp__5720__auto__){
var seq__19253__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19253__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__19253__$1);
var G__19261 = cljs.core.chunk_rest(seq__19253__$1);
var G__19262 = c__4550__auto__;
var G__19263 = cljs.core.count(c__4550__auto__);
var G__19264 = (0);
seq__19253 = G__19261;
chunk__19254 = G__19262;
count__19255 = G__19263;
i__19256 = G__19264;
continue;
} else {
var event = cljs.core.first(seq__19253__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__19265 = cljs.core.next(seq__19253__$1);
var G__19266 = null;
var G__19267 = (0);
var G__19268 = (0);
seq__19253 = G__19265;
chunk__19254 = G__19266;
count__19255 = G__19267;
i__19256 = G__19268;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
