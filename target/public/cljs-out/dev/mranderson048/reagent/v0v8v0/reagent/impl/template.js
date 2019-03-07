// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.reagent.v0v8v0.reagent.impl.template');
goog.require('cljs.core');
goog.require('react');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.component');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.batching');
goog.require('mranderson048.reagent.v0v8v0.reagent.ratom');
goog.require('mranderson048.reagent.v0v8v0.reagent.interop');
goog.require('mranderson048.reagent.v0v8v0.reagent.debug');
mranderson048.reagent.v0v8v0.reagent.impl.template.global$module$react = goog.global["React"];
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
mranderson048.reagent.v0v8v0.reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper = (function (){
});

mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper.cljs$lang$type = true;

mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.impl.template/NativeWrapper";

mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"mranderson048.reagent.v0v8v0.reagent.impl.template/NativeWrapper");
});

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.impl.template/NativeWrapper.
 */
mranderson048.reagent.v0v8v0.reagent.impl.template.__GT_NativeWrapper = (function mranderson048$reagent$v0v8v0$reagent$impl$template$__GT_NativeWrapper(){
return (new mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper());
});

mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$template$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_tag_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$template$hiccup_tag_QMARK_(x){
return ((mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_.call(null,x)) || (typeof x === 'string'));
});
mranderson048.reagent.v0v8v0.reagent.impl.template.valid_tag_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$template$valid_tag_QMARK_(x){
return ((mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper)));
});
mranderson048.reagent.v0v8v0.reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
mranderson048.reagent.v0v8v0.reagent.impl.template.cache_get = (function mranderson048$reagent$v0v8v0$reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.cached_prop_name = (function mranderson048$reagent$v0v8v0$reagent$impl$template$cached_prop_name(k){
if(mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_.call(null,k)){
var temp__5722__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.template.cache_get.call(null,mranderson048.reagent.v0v8v0.reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));
if((temp__5722__auto__ == null)){
return (mranderson048.reagent.v0v8v0.reagent.impl.template.prop_name_cache[cljs.core.name.call(null,k)] = mranderson048.reagent.v0v8v0.reagent.impl.util.dash_to_camel.call(null,k));
} else {
var k_SINGLEQUOTE_ = temp__5722__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$template$js_val_QMARK_(x){
return (!(("object" === goog.typeOf(x))));
});
mranderson048.reagent.v0v8v0.reagent.impl.template.kv_conv = (function mranderson048$reagent$v0v8v0$reagent$impl$template$kv_conv(o,k,v){
var G__26909 = o;
(G__26909[mranderson048.reagent.v0v8v0.reagent.impl.template.cached_prop_name.call(null,k)] = mranderson048.reagent.v0v8v0.reagent.impl.template.convert_prop_value.call(null,v));

return G__26909;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.convert_prop_value = (function mranderson048$reagent$v0v8v0$reagent$impl$template$convert_prop_value(x){
if(mranderson048.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,mranderson048.reagent.v0v8v0.reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__26910__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__26910 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26911__i = 0, G__26911__a = new Array(arguments.length -  0);
while (G__26911__i < G__26911__a.length) {G__26911__a[G__26911__i] = arguments[G__26911__i + 0]; ++G__26911__i;}
  args = new cljs.core.IndexedSeq(G__26911__a,0,null);
} 
return G__26910__delegate.call(this,args);};
G__26910.cljs$lang$maxFixedArity = 0;
G__26910.cljs$lang$applyTo = (function (arglist__26912){
var args = cljs.core.seq(arglist__26912);
return G__26910__delegate(args);
});
G__26910.cljs$core$IFn$_invoke$arity$variadic = G__26910__delegate;
return G__26910;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.custom_prop_name_cache = ({});
mranderson048.reagent.v0v8v0.reagent.impl.template.cached_custom_prop_name = (function mranderson048$reagent$v0v8v0$reagent$impl$template$cached_custom_prop_name(k){
if(mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_.call(null,k)){
var temp__5722__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.template.cache_get.call(null,mranderson048.reagent.v0v8v0.reagent.impl.template.custom_prop_name_cache,cljs.core.name.call(null,k));
if((temp__5722__auto__ == null)){
return (mranderson048.reagent.v0v8v0.reagent.impl.template.prop_name_cache[cljs.core.name.call(null,k)] = mranderson048.reagent.v0v8v0.reagent.impl.util.dash_to_camel.call(null,k));
} else {
var k_SINGLEQUOTE_ = temp__5722__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.custom_kv_conv = (function mranderson048$reagent$v0v8v0$reagent$impl$template$custom_kv_conv(o,k,v){
var G__26913 = o;
(G__26913[mranderson048.reagent.v0v8v0.reagent.impl.template.cached_custom_prop_name.call(null,k)] = mranderson048.reagent.v0v8v0.reagent.impl.template.convert_prop_value.call(null,v));

return G__26913;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.convert_custom_prop_value = (function mranderson048$reagent$v0v8v0$reagent$impl$template$convert_custom_prop_value(x){
if(mranderson048.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,mranderson048.reagent.v0v8v0.reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__26914__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__26914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26915__i = 0, G__26915__a = new Array(arguments.length -  0);
while (G__26915__i < G__26915__a.length) {G__26915__a[G__26915__i] = arguments[G__26915__i + 0]; ++G__26915__i;}
  args = new cljs.core.IndexedSeq(G__26915__a,0,null);
} 
return G__26914__delegate.call(this,args);};
G__26914.cljs$lang$maxFixedArity = 0;
G__26914.cljs$lang$applyTo = (function (arglist__26916){
var args = cljs.core.seq(arglist__26916);
return G__26914__delegate(args);
});
G__26914.cljs$core$IFn$_invoke$arity$variadic = G__26914__delegate;
return G__26914;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.oset = (function mranderson048$reagent$v0v8v0$reagent$impl$template$oset(o,k,v){
var G__26917 = (((o == null))?({}):o);
(G__26917[k] = v);

return G__26917;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.oget = (function mranderson048$reagent$v0v8v0$reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
mranderson048.reagent.v0v8v0.reagent.impl.template.set_id_class = (function mranderson048$reagent$v0v8v0$reagent$impl$template$set_id_class(props,id_class){
var id = (id_class["id"]);
var class$ = (id_class["class"]);
var G__26918 = props;
var G__26918__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.call(null,G__26918,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__26918);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.call(null,G__26918__$1,new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var old_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props);
if((old_class == null)){
return class$;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_class)].join('');
}
})());
} else {
return G__26918__$1;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.stringify_class = (function mranderson048$reagent$v0v8v0$reagent$impl$template$stringify_class(p__26919){
var map__26920 = p__26919;
var map__26920__$1 = (((((!((map__26920 == null))))?(((((map__26920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26920):map__26920);
var props = map__26920__$1;
var class$ = cljs.core.get.call(null,map__26920__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.coll_QMARK_.call(null,class$)){
return cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"class","class",-2030961996),clojure.string.join.call(null," ",cljs.core.filter.call(null,cljs.core.identity,class$)));
} else {
return props;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.convert_props = (function mranderson048$reagent$v0v8v0$reagent$impl$template$convert_props(props,id_class){
var props__$1 = mranderson048.reagent.v0v8v0.reagent.impl.template.set_id_class.call(null,mranderson048.reagent.v0v8v0.reagent.impl.template.stringify_class.call(null,props),id_class);
if(cljs.core.truth_((id_class["custom"]))){
return mranderson048.reagent.v0v8v0.reagent.impl.template.convert_custom_prop_value.call(null,props__$1);
} else {
return mranderson048.reagent.v0v8v0.reagent.impl.template.convert_prop_value.call(null,props__$1);
}
});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.template !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node = null;
}
mranderson048.reagent.v0v8v0.reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
mranderson048.reagent.v0v8v0.reagent.impl.template.has_selection_api_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_.call(null,mranderson048.reagent.v0v8v0.reagent.impl.template.these_inputs_have_selection_api,input_type);
});
mranderson048.reagent.v0v8v0.reagent.impl.template.input_node_set_value = (function mranderson048$reagent$v0v8v0$reagent$impl$template$input_node_set_value(node,rendered_value,dom_value,component,p__26922){
var map__26923 = p__26922;
var map__26923__$1 = (((((!((map__26923 == null))))?(((((map__26923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26923):map__26923);
var on_write = cljs.core.get.call(null,map__26923__$1,new cljs.core.Keyword(null,"on-write","on-write",31519475));
if((!((((node === (document["activeElement"]))) && (mranderson048.reagent.v0v8v0.reagent.impl.template.has_selection_api_QMARK_.call(null,(node["type"]))) && (typeof rendered_value === 'string') && (typeof dom_value === 'string'))))){
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_.call(null,on_write)){
return on_write.call(null,rendered_value);
} else {
return null;
}
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.call(null,node_value,dom_value)){
return mranderson048.reagent.v0v8v0.reagent.impl.batching.do_after_render.call(null,((function (node_value,map__26923,map__26923__$1,on_write){
return (function (){
return mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_set_value.call(null,component);
});})(node_value,map__26923,map__26923__$1,on_write))
);
} else {
var existing_offset_from_end = (cljs.core.count.call(null,node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count.call(null,rendered_value) - existing_offset_from_end);
(component["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

if(cljs.core.fn_QMARK_.call(null,on_write)){
on_write.call(null,rendered_value);
} else {
}

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_set_value = (function mranderson048$reagent$v0v8v0$reagent$impl$template$input_component_set_value(this$){
if(cljs.core.truth_((this$["cljsInputLive"]))){
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
var node = mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node.call(null,this$);
if(cljs.core.not_EQ_.call(null,rendered_value,dom_value)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.input_node_set_value.call(null,node,rendered_value,dom_value,this$,cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
return null;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.input_handle_change = (function mranderson048$reagent$v0v8v0$reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

mranderson048.reagent.v0v8v0.reagent.impl.batching.do_after_render.call(null,(function (){
return mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_set_value.call(null,this$);
}));
}

return on_change.call(null,e);
});
mranderson048.reagent.v0v8v0.reagent.impl.template.input_render_setup = (function mranderson048$reagent$v0v8v0$reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__4120__auto__ = (!((jsprops == null)));
if(and__4120__auto__){
var and__4120__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__4120__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
if(cljs.core.truth_(mranderson048.reagent.v0v8v0.reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
if(cljs.core.truth_((this$["cljsInputLive"]))){
} else {
(this$["cljsInputLive"] = true);

(this$["cljsDOMValue"] = value);
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__26926 = jsprops;
(G__26926["defaultValue"] = value);

(G__26926["onChange"] = ((function (G__26926,v,value,on_change){
return (function (p1__26925_SHARP_){
return mranderson048.reagent.v0v8v0.reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__26925_SHARP_);
});})(G__26926,v,value,on_change))
);

return G__26926;
} else {
return null;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.input_unmount = (function mranderson048$reagent$v0v8v0$reagent$impl$template$input_unmount(this$){
return (this$["cljsInputLive"] = null);
});
mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$impl$template$input_component_QMARK_(x){
var G__26927 = x;
switch (G__26927) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.reagent_input_class = null;
mranderson048.reagent.v0v8v0.reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),mranderson048.reagent.v0v8v0.reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = mranderson048.reagent.v0v8v0.reagent.impl.component._STAR_current_component_STAR_;
mranderson048.reagent.v0v8v0.reagent.impl.template.input_render_setup.call(null,this$,jsprops);

return mranderson048.reagent.v0v8v0.reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child);
})], null);
mranderson048.reagent.v0v8v0.reagent.impl.template.reagent_input = (function mranderson048$reagent$v0v8v0$reagent$impl$template$reagent_input(){
if((mranderson048.reagent.v0v8v0.reagent.impl.template.reagent_input_class == null)){
mranderson048.reagent.v0v8v0.reagent.impl.template.reagent_input_class = mranderson048.reagent.v0v8v0.reagent.impl.component.create_class.call(null,mranderson048.reagent.v0v8v0.reagent.impl.template.input_spec);
} else {
}

return mranderson048.reagent.v0v8v0.reagent.impl.template.reagent_input_class;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.parse_tag = (function mranderson048$reagent$v0v8v0$reagent$impl$template$parse_tag(hiccup_tag){
var vec__26929 = cljs.core.next.call(null,cljs.core.re_matches.call(null,mranderson048.reagent.v0v8v0.reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__26929,(0),null);
var id = cljs.core.nth.call(null,vec__26929,(1),null);
var class$ = cljs.core.nth.call(null,vec__26929,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace.call(null,class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name.call(null)].join(''),"\n","tag"].join('')));
}

return ({"name": tag, "id": id, "class": class$__$1, "custom": cljs.core.not_EQ_.call(null,(-1),tag.indexOf("-"))});
});
mranderson048.reagent.v0v8v0.reagent.impl.template.try_get_key = (function mranderson048$reagent$v0v8v0$reagent$impl$template$try_get_key(x){
try{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e26932){var e = e26932;
return null;
}});
mranderson048.reagent.v0v8v0.reagent.impl.template.get_key = (function mranderson048$reagent$v0v8v0$reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.try_get_key.call(null,x);
} else {
return null;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.key_from_vec = (function mranderson048$reagent$v0v8v0$reagent$impl$template$key_from_vec(v){
var temp__5722__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,v));
if((temp__5722__auto__ == null)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null));
} else {
var k = temp__5722__auto__;
return k;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.reag_element = (function mranderson048$reagent$v0v8v0$reagent$impl$template$reag_element(tag,v){
var c = mranderson048.reagent.v0v8v0.reagent.impl.component.as_class.call(null,tag);
var jsprops = ({"argv": v});
var temp__5724__auto___26933 = mranderson048.reagent.v0v8v0.reagent.impl.template.key_from_vec.call(null,v);
if((temp__5724__auto___26933 == null)){
} else {
var key_26934 = temp__5724__auto___26933;
(jsprops["key"] = key_26934);
}

return mranderson048.reagent.v0v8v0.reagent.impl.template.global$module$react.createElement.call(null,c,jsprops);
});
mranderson048.reagent.v0v8v0.reagent.impl.template.fragment_element = (function mranderson048$reagent$v0v8v0$reagent$impl$template$fragment_element(argv){
var props = cljs.core.nth.call(null,argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = mranderson048.reagent.v0v8v0.reagent.impl.template.convert_prop_value.call(null,((hasprops)?props:null));
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__5724__auto___26935 = mranderson048.reagent.v0v8v0.reagent.impl.template.key_from_vec.call(null,argv);
if((temp__5724__auto___26935 == null)){
} else {
var key_26936 = temp__5724__auto___26935;
mranderson048.reagent.v0v8v0.reagent.impl.template.oset.call(null,jsprops,"key",key_26936);
}

return mranderson048.reagent.v0v8v0.reagent.impl.template.make_element.call(null,argv,mranderson048.reagent.v0v8v0.reagent.impl.template.global$module$react.Fragment,jsprops,first_child);
});
mranderson048.reagent.v0v8v0.reagent.impl.template.adapt_react_class = (function mranderson048$reagent$v0v8v0$reagent$impl$template$adapt_react_class(c){
var G__26937 = mranderson048.reagent.v0v8v0.reagent.impl.template.__GT_NativeWrapper.call(null);
(G__26937["name"] = c);

(G__26937["id"] = null);

(G__26937["class"] = null);

return G__26937;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.tag_name_cache = ({});
mranderson048.reagent.v0v8v0.reagent.impl.template.cached_parse = (function mranderson048$reagent$v0v8v0$reagent$impl$template$cached_parse(x){
var temp__5722__auto__ = mranderson048.reagent.v0v8v0.reagent.impl.template.cache_get.call(null,mranderson048.reagent.v0v8v0.reagent.impl.template.tag_name_cache,x);
if((temp__5722__auto__ == null)){
return (mranderson048.reagent.v0v8v0.reagent.impl.template.tag_name_cache[x] = mranderson048.reagent.v0v8v0.reagent.impl.template.parse_tag.call(null,x));
} else {
var s = temp__5722__auto__;
return s;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.native_element = (function mranderson048$reagent$v0v8v0$reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var props = cljs.core.nth.call(null,argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = mranderson048.reagent.v0v8v0.reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(mranderson048.reagent.v0v8v0.reagent.impl.template.input_component_QMARK_.call(null,comp)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.as_element.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.reagent.v0v8v0.reagent.impl.template.reagent_input.call(null),argv,comp,jsprops,first_child], null),cljs.core.meta.call(null,argv)));
} else {
var key = mranderson048.reagent.v0v8v0.reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,argv));
var p = (((key == null))?jsprops:mranderson048.reagent.v0v8v0.reagent.impl.template.oset.call(null,jsprops,"key",key));
return mranderson048.reagent.v0v8v0.reagent.impl.template.make_element.call(null,argv,comp,p,first_child);
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.str_coll = (function mranderson048$reagent$v0v8v0$reagent$impl$template$str_coll(coll){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
var n = mranderson048.reagent.v0v8v0.reagent.impl.util.fun_name.call(null,x);
var G__26939 = n;
switch (G__26939) {
case "":
return x;

break;
default:
return cljs.core.symbol.call(null,n);

}
} else {
return x;
}
}),coll));

});
mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err = (function mranderson048$reagent$v0v8v0$reagent$impl$template$hiccup_err(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26943 = arguments.length;
var i__4731__auto___26944 = (0);
while(true){
if((i__4731__auto___26944 < len__4730__auto___26943)){
args__4736__auto__.push((arguments[i__4731__auto___26944]));

var G__26945 = (i__4731__auto___26944 + (1));
i__4731__auto___26944 = G__26945;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,msg)),": ",mranderson048.reagent.v0v8v0.reagent.impl.template.str_coll.call(null,v),"\n",mranderson048.reagent.v0v8v0.reagent.impl.component.comp_name.call(null)].join('');
});

mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq26941){
var G__26942 = cljs.core.first.call(null,seq26941);
var seq26941__$1 = cljs.core.next.call(null,seq26941);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26942,seq26941__$1);
});

mranderson048.reagent.v0v8v0.reagent.impl.template.vec_to_elem = (function mranderson048$reagent$v0v8v0$reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error(["Assert failed: ",mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.call(null,v,"Hiccup form should not be empty"),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.call(null,v,(0),null);
if(mranderson048.reagent.v0v8v0.reagent.impl.template.valid_tag_QMARK_.call(null,tag)){
} else {
throw (new Error(["Assert failed: ",mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup form"),"\n","(valid-tag? tag)"].join('')));
}

if(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword(null,"<>","<>",1280186386),tag)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.fragment_element.call(null,v);
} else {
if(mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
var n = cljs.core.name.call(null,tag);
var pos = n.indexOf(">");
var G__26946 = pos;
switch (G__26946) {
case (-1):
return mranderson048.reagent.v0v8v0.reagent.impl.template.native_element.call(null,mranderson048.reagent.v0v8v0.reagent.impl.template.cached_parse.call(null,n),v,(1));

break;
case (0):
var comp = cljs.core.nth.call(null,v,(1),null);
if(cljs.core._EQ_.call(null,">",n)){
} else {
throw (new Error(["Assert failed: ",mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup tag"),"\n","(= \">\" n)"].join('')));
}

if(((typeof comp === 'string') || (cljs.core.fn_QMARK_.call(null,comp)))){
} else {
throw (new Error(["Assert failed: ",mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.call(null,v,"Expected React component in"),"\n","(or (string? comp) (fn? comp))"].join('')));
}

return mranderson048.reagent.v0v8v0.reagent.impl.template.native_element.call(null,({"name": comp}),v,(2));

break;
default:
var G__26948 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,cljs.core.with_meta.call(null,v,null),(0),cljs.core.subs.call(null,n,(pos + (1))))], null),cljs.core.meta.call(null,v));
v = G__26948;
continue;

}
} else {
if((tag instanceof mranderson048.reagent.v0v8v0.reagent.impl.template.NativeWrapper)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.native_element.call(null,tag,v,(1));
} else {
return mranderson048.reagent.v0v8v0.reagent.impl.template.reag_element.call(null,tag,v);

}
}
}
break;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.template.as_element = (function mranderson048$reagent$v0v8v0$reagent$impl$template$as_element(x){
if(mranderson048.reagent.v0v8v0.reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.vec_to_elem.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return mranderson048.reagent.v0v8v0.reagent.impl.template.expand_seq_check.call(null,x);

} else {
if(mranderson048.reagent.v0v8v0.reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.call(null,x);
} else {
return x;

}
}
}
}
}
});
mranderson048.reagent.v0v8v0.reagent.impl.component.as_element = mranderson048.reagent.v0v8v0.reagent.impl.template.as_element;
mranderson048.reagent.v0v8v0.reagent.impl.template.expand_seq = (function mranderson048$reagent$v0v8v0$reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.call(null,s);
var n__4607__auto___26950 = a.length;
var i_26951 = (0);
while(true){
if((i_26951 < n__4607__auto___26950)){
(a[i_26951] = mranderson048.reagent.v0v8v0.reagent.impl.template.as_element.call(null,(a[i_26951])));

var G__26952 = (i_26951 + (1));
i_26951 = G__26952;
continue;
} else {
}
break;
}

return a;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.expand_seq_dev = (function mranderson048$reagent$v0v8v0$reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.call(null,s);
var n__4607__auto___26953 = a.length;
var i_26954 = (0);
while(true){
if((i_26954 < n__4607__auto___26953)){
var val_26955 = (a[i_26954]);
if(((cljs.core.vector_QMARK_.call(null,val_26955)) && ((mranderson048.reagent.v0v8v0.reagent.impl.template.key_from_vec.call(null,val_26955) == null)))){
(o["no-key"] = true);
} else {
}

(a[i_26954] = mranderson048.reagent.v0v8v0.reagent.impl.template.as_element.call(null,val_26955));

var G__26956 = (i_26954 + (1));
i_26954 = G__26956;
continue;
} else {
}
break;
}

return a;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.expand_seq_check = (function mranderson048$reagent$v0v8v0$reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__26957 = mranderson048.reagent.v0v8v0.reagent.ratom.check_derefs.call(null,((function (ctx){
return (function (){
return mranderson048.reagent.v0v8v0.reagent.impl.template.expand_seq_dev.call(null,x,ctx);
});})(ctx))
);
var res = cljs.core.nth.call(null,vec__26957,(0),null);
var derefed = cljs.core.nth.call(null,vec__26957,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(mranderson048.reagent.v0v8v0.reagent.debug.has_console)){
(cljs.core.truth_(mranderson048.reagent.v0v8v0.reagent.debug.tracking)?mranderson048.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ",mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.call(null,x,"Reactive deref not supported in lazy seq, ","it should be wrapped in doall")].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(cljs.core.truth_(mranderson048.reagent.v0v8v0.reagent.debug.has_console)){
(cljs.core.truth_(mranderson048.reagent.v0v8v0.reagent.debug.tracking)?mranderson048.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ",mranderson048.reagent.v0v8v0.reagent.impl.template.hiccup_err.call(null,x,"Every element in a seq should have a unique :key")].join(''));
} else {
}
} else {
}

return res;
});
mranderson048.reagent.v0v8v0.reagent.impl.template.make_element = (function mranderson048$reagent$v0v8v0$reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__26960 = (cljs.core.count.call(null,argv) - first_child);
switch (G__26960) {
case (0):
return mranderson048.reagent.v0v8v0.reagent.impl.template.global$module$react.createElement.call(null,comp,jsprops);

break;
case (1):
return mranderson048.reagent.v0v8v0.reagent.impl.template.global$module$react.createElement.call(null,comp,jsprops,mranderson048.reagent.v0v8v0.reagent.impl.template.as_element.call(null,cljs.core.nth.call(null,argv,first_child,null)));

break;
default:
return mranderson048.reagent.v0v8v0.reagent.impl.template.global$module$react.createElement.apply(null,cljs.core.reduce_kv.call(null,((function (G__26960){
return (function (a,k,v){
if((k >= first_child)){
a.push(mranderson048.reagent.v0v8v0.reagent.impl.template.as_element.call(null,v));
} else {
}

return a;
});})(G__26960))
,[comp,jsprops],argv));

}
});

//# sourceMappingURL=template.js.map
