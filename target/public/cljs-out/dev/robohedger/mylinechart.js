// Compiled by ClojureScript 1.10.520 {}
goog.provide('robohedger.mylinechart');
goog.require('cljs.core');
goog.require('reagent.core');
robohedger.mylinechart.drawd3 = (function robohedger$mylinechart$drawd3(strID,graphmap){
var graphmapalt = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111001",new cljs.core.Keyword(null,"yy","yy",-1432012814),63.4], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111002",new cljs.core.Keyword(null,"yy","yy",-1432012814),58.0], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111003",new cljs.core.Keyword(null,"yy","yy",-1432012814),53.3], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111001",new cljs.core.Keyword(null,"yy","yy",-1432012814),62.7], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111002",new cljs.core.Keyword(null,"yy","yy",-1432012814),59.9], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111003",new cljs.core.Keyword(null,"yy","yy",-1432012814),59.1], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"",new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111001",new cljs.core.Keyword(null,"yy","yy",-1432012814),72.2], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111002",new cljs.core.Keyword(null,"yy","yy",-1432012814),67.7], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),"20111003",new cljs.core.Keyword(null,"yy","yy",-1432012814),69.4], null)], null)], null)], null);
return klmgraph(cljs.core.clj__GT_js.call(null,graphmap),cljs.core.clj__GT_js.call(null,strID));
});
robohedger.mylinechart.component = (function robohedger$mylinechart$component(strID,graphmap){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (strID__$1,graphmap__$1){
console.log(["in linealt2",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strID__$1)].join(''));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),strID__$1,new cljs.core.Keyword(null,"width","width",-384071477),(480),new cljs.core.Keyword(null,"height","height",1025178622),((400) / 1.62)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
console.log(["in linealt2mnt",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strID)].join(''));

return robohedger.mylinechart.drawd3.call(null,strID,graphmap);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var vec__22189 = reagent.core.argv.call(null,this$);
var _ = cljs.core.nth.call(null,vec__22189,(0),null);
var nstrID = cljs.core.nth.call(null,vec__22189,(1),null);
var ngraphmap = cljs.core.nth.call(null,vec__22189,(2),null);
var dum = console.log(["in linealt2up",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nstrID)].join(''));
return robohedger.mylinechart.drawd3.call(null,nstrID,ngraphmap);
})], null));
});

//# sourceMappingURL=mylinechart.js.map
