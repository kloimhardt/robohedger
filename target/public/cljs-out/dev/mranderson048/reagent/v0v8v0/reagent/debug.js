// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.reagent.v0v8v0.reagent.debug');
goog.require('cljs.core');
mranderson048.reagent.v0v8v0.reagent.debug.has_console = (typeof console !== 'undefined');
mranderson048.reagent.v0v8v0.reagent.debug.tracking = false;
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug.warnings !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.debug.track_console !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__25070__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25070 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25071__i = 0, G__25071__a = new Array(arguments.length -  0);
while (G__25071__i < G__25071__a.length) {G__25071__a[G__25071__i] = arguments[G__25071__i + 0]; ++G__25071__i;}
  args = new cljs.core.IndexedSeq(G__25071__a,0,null);
} 
return G__25070__delegate.call(this,args);};
G__25070.cljs$lang$maxFixedArity = 0;
G__25070.cljs$lang$applyTo = (function (arglist__25072){
var args = cljs.core.seq(arglist__25072);
return G__25070__delegate(args);
});
G__25070.cljs$core$IFn$_invoke$arity$variadic = G__25070__delegate;
return G__25070;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25073__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__25073 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25074__i = 0, G__25074__a = new Array(arguments.length -  0);
while (G__25074__i < G__25074__a.length) {G__25074__a[G__25074__i] = arguments[G__25074__i + 0]; ++G__25074__i;}
  args = new cljs.core.IndexedSeq(G__25074__a,0,null);
} 
return G__25073__delegate.call(this,args);};
G__25073.cljs$lang$maxFixedArity = 0;
G__25073.cljs$lang$applyTo = (function (arglist__25075){
var args = cljs.core.seq(arglist__25075);
return G__25073__delegate(args);
});
G__25073.cljs$core$IFn$_invoke$arity$variadic = G__25073__delegate;
return G__25073;
})()
;})(o))
;

return o;
})();
}
mranderson048.reagent.v0v8v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v8v0$reagent$debug$track_warnings(f){
mranderson048.reagent.v0v8v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v8v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson048.reagent.v0v8v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v8v0.reagent.debug.warnings,null);

mranderson048.reagent.v0v8v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
