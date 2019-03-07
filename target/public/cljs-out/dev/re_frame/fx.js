// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
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
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__22832 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22833 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22833;

try{try{var seq__22834 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22835 = null;
var count__22836 = (0);
var i__22837 = (0);
while(true){
if((i__22837 < count__22836)){
var vec__22844 = cljs.core._nth.call(null,chunk__22835,i__22837);
var effect_key = cljs.core.nth.call(null,vec__22844,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22844,(1),null);
var temp__5718__auto___22866 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22866)){
var effect_fn_22867 = temp__5718__auto___22866;
effect_fn_22867.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22868 = seq__22834;
var G__22869 = chunk__22835;
var G__22870 = count__22836;
var G__22871 = (i__22837 + (1));
seq__22834 = G__22868;
chunk__22835 = G__22869;
count__22836 = G__22870;
i__22837 = G__22871;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22834);
if(temp__5720__auto__){
var seq__22834__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22834__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22834__$1);
var G__22872 = cljs.core.chunk_rest.call(null,seq__22834__$1);
var G__22873 = c__4550__auto__;
var G__22874 = cljs.core.count.call(null,c__4550__auto__);
var G__22875 = (0);
seq__22834 = G__22872;
chunk__22835 = G__22873;
count__22836 = G__22874;
i__22837 = G__22875;
continue;
} else {
var vec__22847 = cljs.core.first.call(null,seq__22834__$1);
var effect_key = cljs.core.nth.call(null,vec__22847,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22847,(1),null);
var temp__5718__auto___22876 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22876)){
var effect_fn_22877 = temp__5718__auto___22876;
effect_fn_22877.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22878 = cljs.core.next.call(null,seq__22834__$1);
var G__22879 = null;
var G__22880 = (0);
var G__22881 = (0);
seq__22834 = G__22878;
chunk__22835 = G__22879;
count__22836 = G__22880;
i__22837 = G__22881;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22661__auto___22882 = re_frame.interop.now.call(null);
var duration__22662__auto___22883 = (end__22661__auto___22882 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22662__auto___22883,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22661__auto___22882);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22832;
}} else {
var seq__22850 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22851 = null;
var count__22852 = (0);
var i__22853 = (0);
while(true){
if((i__22853 < count__22852)){
var vec__22860 = cljs.core._nth.call(null,chunk__22851,i__22853);
var effect_key = cljs.core.nth.call(null,vec__22860,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22860,(1),null);
var temp__5718__auto___22884 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22884)){
var effect_fn_22885 = temp__5718__auto___22884;
effect_fn_22885.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22886 = seq__22850;
var G__22887 = chunk__22851;
var G__22888 = count__22852;
var G__22889 = (i__22853 + (1));
seq__22850 = G__22886;
chunk__22851 = G__22887;
count__22852 = G__22888;
i__22853 = G__22889;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22850);
if(temp__5720__auto__){
var seq__22850__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22850__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22850__$1);
var G__22890 = cljs.core.chunk_rest.call(null,seq__22850__$1);
var G__22891 = c__4550__auto__;
var G__22892 = cljs.core.count.call(null,c__4550__auto__);
var G__22893 = (0);
seq__22850 = G__22890;
chunk__22851 = G__22891;
count__22852 = G__22892;
i__22853 = G__22893;
continue;
} else {
var vec__22863 = cljs.core.first.call(null,seq__22850__$1);
var effect_key = cljs.core.nth.call(null,vec__22863,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22863,(1),null);
var temp__5718__auto___22894 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___22894)){
var effect_fn_22895 = temp__5718__auto___22894;
effect_fn_22895.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22896 = cljs.core.next.call(null,seq__22850__$1);
var G__22897 = null;
var G__22898 = (0);
var G__22899 = (0);
seq__22850 = G__22896;
chunk__22851 = G__22897;
count__22852 = G__22898;
i__22853 = G__22899;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__22900 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22901 = null;
var count__22902 = (0);
var i__22903 = (0);
while(true){
if((i__22903 < count__22902)){
var map__22908 = cljs.core._nth.call(null,chunk__22901,i__22903);
var map__22908__$1 = (((((!((map__22908 == null))))?(((((map__22908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22908):map__22908);
var effect = map__22908__$1;
var ms = cljs.core.get.call(null,map__22908__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22908__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22900,chunk__22901,count__22902,i__22903,map__22908,map__22908__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22900,chunk__22901,count__22902,i__22903,map__22908,map__22908__$1,effect,ms,dispatch))
,ms);
}


var G__22912 = seq__22900;
var G__22913 = chunk__22901;
var G__22914 = count__22902;
var G__22915 = (i__22903 + (1));
seq__22900 = G__22912;
chunk__22901 = G__22913;
count__22902 = G__22914;
i__22903 = G__22915;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22900);
if(temp__5720__auto__){
var seq__22900__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22900__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22900__$1);
var G__22916 = cljs.core.chunk_rest.call(null,seq__22900__$1);
var G__22917 = c__4550__auto__;
var G__22918 = cljs.core.count.call(null,c__4550__auto__);
var G__22919 = (0);
seq__22900 = G__22916;
chunk__22901 = G__22917;
count__22902 = G__22918;
i__22903 = G__22919;
continue;
} else {
var map__22910 = cljs.core.first.call(null,seq__22900__$1);
var map__22910__$1 = (((((!((map__22910 == null))))?(((((map__22910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22910):map__22910);
var effect = map__22910__$1;
var ms = cljs.core.get.call(null,map__22910__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22910__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22900,chunk__22901,count__22902,i__22903,map__22910,map__22910__$1,effect,ms,dispatch,seq__22900__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22900,chunk__22901,count__22902,i__22903,map__22910,map__22910__$1,effect,ms,dispatch,seq__22900__$1,temp__5720__auto__))
,ms);
}


var G__22920 = cljs.core.next.call(null,seq__22900__$1);
var G__22921 = null;
var G__22922 = (0);
var G__22923 = (0);
seq__22900 = G__22920;
chunk__22901 = G__22921;
count__22902 = G__22922;
i__22903 = G__22923;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__22924 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22925 = null;
var count__22926 = (0);
var i__22927 = (0);
while(true){
if((i__22927 < count__22926)){
var event = cljs.core._nth.call(null,chunk__22925,i__22927);
re_frame.router.dispatch.call(null,event);


var G__22928 = seq__22924;
var G__22929 = chunk__22925;
var G__22930 = count__22926;
var G__22931 = (i__22927 + (1));
seq__22924 = G__22928;
chunk__22925 = G__22929;
count__22926 = G__22930;
i__22927 = G__22931;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22924);
if(temp__5720__auto__){
var seq__22924__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22924__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22924__$1);
var G__22932 = cljs.core.chunk_rest.call(null,seq__22924__$1);
var G__22933 = c__4550__auto__;
var G__22934 = cljs.core.count.call(null,c__4550__auto__);
var G__22935 = (0);
seq__22924 = G__22932;
chunk__22925 = G__22933;
count__22926 = G__22934;
i__22927 = G__22935;
continue;
} else {
var event = cljs.core.first.call(null,seq__22924__$1);
re_frame.router.dispatch.call(null,event);


var G__22936 = cljs.core.next.call(null,seq__22924__$1);
var G__22937 = null;
var G__22938 = (0);
var G__22939 = (0);
seq__22924 = G__22936;
chunk__22925 = G__22937;
count__22926 = G__22938;
i__22927 = G__22939;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__22940 = cljs.core.seq.call(null,value);
var chunk__22941 = null;
var count__22942 = (0);
var i__22943 = (0);
while(true){
if((i__22943 < count__22942)){
var event = cljs.core._nth.call(null,chunk__22941,i__22943);
clear_event.call(null,event);


var G__22944 = seq__22940;
var G__22945 = chunk__22941;
var G__22946 = count__22942;
var G__22947 = (i__22943 + (1));
seq__22940 = G__22944;
chunk__22941 = G__22945;
count__22942 = G__22946;
i__22943 = G__22947;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__22940);
if(temp__5720__auto__){
var seq__22940__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22940__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22940__$1);
var G__22948 = cljs.core.chunk_rest.call(null,seq__22940__$1);
var G__22949 = c__4550__auto__;
var G__22950 = cljs.core.count.call(null,c__4550__auto__);
var G__22951 = (0);
seq__22940 = G__22948;
chunk__22941 = G__22949;
count__22942 = G__22950;
i__22943 = G__22951;
continue;
} else {
var event = cljs.core.first.call(null,seq__22940__$1);
clear_event.call(null,event);


var G__22952 = cljs.core.next.call(null,seq__22940__$1);
var G__22953 = null;
var G__22954 = (0);
var G__22955 = (0);
seq__22940 = G__22952;
chunk__22941 = G__22953;
count__22942 = G__22954;
i__22943 = G__22955;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
