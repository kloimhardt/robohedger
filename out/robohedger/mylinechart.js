// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('robohedger.mylinechart');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
robohedger.mylinechart.drawd3 = (function robohedger$mylinechart$drawd3(strID,graphmap){
var graphmapalt = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"",cljs.core.cst$kw$values,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xx,"20111001",cljs.core.cst$kw$yy,63.4], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xx,"20111002",cljs.core.cst$kw$yy,58.0], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xx,"20111003",cljs.core.cst$kw$yy,53.3], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"",cljs.core.cst$kw$values,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xx,"20111001",cljs.core.cst$kw$yy,62.7], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xx,"20111002",cljs.core.cst$kw$yy,59.9], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xx,"20111003",cljs.core.cst$kw$yy,59.1], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"",cljs.core.cst$kw$values,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xx,"20111001",cljs.core.cst$kw$yy,72.2], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xx,"20111002",cljs.core.cst$kw$yy,67.7], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xx,"20111003",cljs.core.cst$kw$yy,69.4], null)], null)], null)], null);
return klmgraph(cljs.core.clj__GT_js(graphmap),cljs.core.clj__GT_js(strID));
});
robohedger.mylinechart.component = (function robohedger$mylinechart$component(strID,graphmap){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$reagent_DASH_render,(function (strID__$1,graphmap__$1){
console.log(["in linealt2",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strID__$1)].join(''));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,strID__$1,cljs.core.cst$kw$width,(480),cljs.core.cst$kw$height,((400) / 1.62)], null)], null);
}),cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (){
console.log(["in linealt2mnt",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strID)].join(''));

return robohedger.mylinechart.drawd3(strID,graphmap);
}),cljs.core.cst$kw$component_DASH_did_DASH_update,(function (this$){
var vec__12545 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12545,(0),null);
var nstrID = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12545,(1),null);
var ngraphmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12545,(2),null);
var dum = console.log(["in linealt2up",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nstrID)].join(''));
return robohedger.mylinechart.drawd3(nstrID,ngraphmap);
})], null));
});
