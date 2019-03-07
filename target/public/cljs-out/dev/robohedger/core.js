// Compiled by ClojureScript 1.10.520 {}
goog.provide('robohedger.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('robohedger.events');
goog.require('robohedger.subs');
goog.require('robohedger.views');
goog.require('robohedger.config');
robohedger.core.dev_setup = (function robohedger$core$dev_setup(){
if(robohedger.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
robohedger.core.mount_root = (function robohedger$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [robohedger.views.main_panel], null),document.getElementById("app"));
});
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

robohedger.core.dev_setup.call(null);

robohedger.core.mount_root.call(null);

//# sourceMappingURL=core.js.map
