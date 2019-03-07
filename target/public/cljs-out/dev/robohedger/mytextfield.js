// Compiled by ClojureScript 1.10.520 {}
goog.provide('robohedger.mytextfield');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('goog.ui.ac');
goog.require('clojure.string');
goog.require('robohedger.mylib');
robohedger.mytextfield.parsetext = (function robohedger$mytextfield$parsetext(textarea){
var txt = textarea.value;
console.log(["in parsetxt [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(txt),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.ends_with_QMARK_.call(null,clojure.string.trim.call(null,txt),">,")),"]"].join(''));

if(clojure.string.ends_with_QMARK_.call(null,clojure.string.trim.call(null,txt),">,")){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"conjchatlog","conjchatlog",2013042686),textarea], null));
} else {
return null;
}
});
robohedger.mytextfield.component = (function robohedger$mytextfield$component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"txtInput2",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"350px",new cljs.core.Keyword(null,"height","height",1025178622),"100px"], null)], null)], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var tf = document.getElementById("txtInput2");
return goog.ui.ac.createSimpleAutoComplete(cljs.core.clj__GT_js.call(null,robohedger.mylib.getcompletelist.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scens","scens",1182334015)], null))))),tf,true,true);
})], null));
});

//# sourceMappingURL=mytextfield.js.map
