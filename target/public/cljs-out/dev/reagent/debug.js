// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__21716__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21716 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21717__i = 0, G__21717__a = new Array(arguments.length -  0);
while (G__21717__i < G__21717__a.length) {G__21717__a[G__21717__i] = arguments[G__21717__i + 0]; ++G__21717__i;}
  args = new cljs.core.IndexedSeq(G__21717__a,0,null);
} 
return G__21716__delegate.call(this,args);};
G__21716.cljs$lang$maxFixedArity = 0;
G__21716.cljs$lang$applyTo = (function (arglist__21718){
var args = cljs.core.seq(arglist__21718);
return G__21716__delegate(args);
});
G__21716.cljs$core$IFn$_invoke$arity$variadic = G__21716__delegate;
return G__21716;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21719__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21719 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21720__i = 0, G__21720__a = new Array(arguments.length -  0);
while (G__21720__i < G__21720__a.length) {G__21720__a[G__21720__i] = arguments[G__21720__i + 0]; ++G__21720__i;}
  args = new cljs.core.IndexedSeq(G__21720__a,0,null);
} 
return G__21719__delegate.call(this,args);};
G__21719.cljs$lang$maxFixedArity = 0;
G__21719.cljs$lang$applyTo = (function (arglist__21721){
var args = cljs.core.seq(arglist__21721);
return G__21719__delegate(args);
});
G__21719.cljs$core$IFn$_invoke$arity$variadic = G__21719__delegate;
return G__21719;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
