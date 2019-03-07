// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.reagent.v0v8v0.reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.template');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.batching');
goog.require('mranderson048.reagent.v0v8v0.reagent.ratom');
goog.require('mranderson048.reagent.v0v8v0.reagent.debug');
goog.require('mranderson048.reagent.v0v8v0.reagent.interop');
mranderson048.reagent.v0v8v0.reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom.imported !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.dom.imported = null;
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.dom.roots !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
mranderson048.reagent.v0v8v0.reagent.dom.unmount_comp = (function mranderson048$reagent$v0v8v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v8v0.reagent.dom.roots,cljs.core.dissoc,container);

return mranderson048.reagent.v0v8v0.reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
mranderson048.reagent.v0v8v0.reagent.dom.render_comp = (function mranderson048$reagent$v0v8v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__26964 = mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26965 = true;
mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26965;

try{return mranderson048.reagent.v0v8v0.reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR__orig_val__26964,_STAR_always_update_STAR__temp_val__26965){
return (function (){
var _STAR_always_update_STAR__orig_val__26966 = mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26967 = false;
mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26967;

try{cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v8v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

mranderson048.reagent.v0v8v0.reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26966;
}});})(_STAR_always_update_STAR__orig_val__26964,_STAR_always_update_STAR__temp_val__26965))
);
}finally {mranderson048.reagent.v0v8v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__26964;
}});
mranderson048.reagent.v0v8v0.reagent.dom.re_render_component = (function mranderson048$reagent$v0v8v0$reagent$dom$re_render_component(comp,container){
return mranderson048.reagent.v0v8v0.reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson048.reagent.v0v8v0.reagent.dom.render = (function mranderson048$reagent$v0v8v0$reagent$dom$render(var_args){
var G__26969 = arguments.length;
switch (G__26969) {
case 2:
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson048.reagent.v0v8v0.reagent.dom.render.call(null,comp,container,null);
});

mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return mranderson048.reagent.v0v8v0.reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return mranderson048.reagent.v0v8v0.reagent.dom.render_comp.call(null,f,container,callback);
});

mranderson048.reagent.v0v8v0.reagent.dom.render.cljs$lang$maxFixedArity = 3;

mranderson048.reagent.v0v8v0.reagent.dom.unmount_component_at_node = (function mranderson048$reagent$v0v8v0$reagent$dom$unmount_component_at_node(container){
return mranderson048.reagent.v0v8v0.reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson048.reagent.v0v8v0.reagent.dom.dom_node = (function mranderson048$reagent$v0v8v0$reagent$dom$dom_node(this$){
return mranderson048.reagent.v0v8v0.reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node = mranderson048.reagent.v0v8v0.reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
mranderson048.reagent.v0v8v0.reagent.dom.force_update_all = (function mranderson048$reagent$v0v8v0$reagent$dom$force_update_all(){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_.call(null);

var seq__26971_26975 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,mranderson048.reagent.v0v8v0.reagent.dom.roots)));
var chunk__26972_26976 = null;
var count__26973_26977 = (0);
var i__26974_26978 = (0);
while(true){
if((i__26974_26978 < count__26973_26977)){
var v_26979 = cljs.core._nth.call(null,chunk__26972_26976,i__26974_26978);
cljs.core.apply.call(null,mranderson048.reagent.v0v8v0.reagent.dom.re_render_component,v_26979);


var G__26980 = seq__26971_26975;
var G__26981 = chunk__26972_26976;
var G__26982 = count__26973_26977;
var G__26983 = (i__26974_26978 + (1));
seq__26971_26975 = G__26980;
chunk__26972_26976 = G__26981;
count__26973_26977 = G__26982;
i__26974_26978 = G__26983;
continue;
} else {
var temp__5720__auto___26984 = cljs.core.seq.call(null,seq__26971_26975);
if(temp__5720__auto___26984){
var seq__26971_26985__$1 = temp__5720__auto___26984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26971_26985__$1)){
var c__4550__auto___26986 = cljs.core.chunk_first.call(null,seq__26971_26985__$1);
var G__26987 = cljs.core.chunk_rest.call(null,seq__26971_26985__$1);
var G__26988 = c__4550__auto___26986;
var G__26989 = cljs.core.count.call(null,c__4550__auto___26986);
var G__26990 = (0);
seq__26971_26975 = G__26987;
chunk__26972_26976 = G__26988;
count__26973_26977 = G__26989;
i__26974_26978 = G__26990;
continue;
} else {
var v_26991 = cljs.core.first.call(null,seq__26971_26985__$1);
cljs.core.apply.call(null,mranderson048.reagent.v0v8v0.reagent.dom.re_render_component,v_26991);


var G__26992 = cljs.core.next.call(null,seq__26971_26985__$1);
var G__26993 = null;
var G__26994 = (0);
var G__26995 = (0);
seq__26971_26975 = G__26992;
chunk__26972_26976 = G__26993;
count__26973_26977 = G__26994;
i__26974_26978 = G__26995;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map
