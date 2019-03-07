// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('robohedger.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('robohedger.events');
goog.require('robohedger.subs');
goog.require('robohedger.views');
goog.require('robohedger.config');
robohedger.core.dev_setup = (function robohedger$core$dev_setup(){
if(robohedger.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
robohedger.core.mount_root = (function robohedger$core$mount_root(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [robohedger.views.main_panel], null),document.getElementById("app"));
});
var G__12790_12791 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__12790_12791) : re_frame.core.dispatch_sync.call(null,G__12790_12791));

robohedger.core.dev_setup();

robohedger.core.mount_root();
