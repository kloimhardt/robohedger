// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('robohedger.mytextfield');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('goog.ui.ac');
goog.require('clojure.string');
goog.require('robohedger.mylib');
robohedger.mytextfield.parsetext = (function robohedger$mytextfield$parsetext(textarea){
var txt = textarea.value;
console.log(["in parsetxt [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.ends_with_QMARK_(clojure.string.trim(txt),">,")),"]"].join(''));

if(clojure.string.ends_with_QMARK_(clojure.string.trim(txt),">,")){
var G__12550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$conjchatlog,textarea], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__12550) : re_frame.core.dispatch.call(null,G__12550));
} else {
return null;
}
});
robohedger.mytextfield.component = (function robohedger$mytextfield$component(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reagent_DASH_render,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"txtInput2",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"350px",cljs.core.cst$kw$height,"100px"], null)], null)], null)], null)], null);
}),cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
var tf = document.getElementById("txtInput2");
var G__12551 = cljs.core.clj__GT_js(robohedger.mylib.getcompletelist(cljs.core.deref((function (){var G__12555 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$scens], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__12555) : re_frame.core.subscribe.call(null,G__12555));
})())));
var G__12552 = tf;
var G__12553 = true;
var G__12554 = true;
return goog.ui.ac.createSimpleAutoComplete(G__12551,G__12552,G__12553,G__12554);
})], null));
});
