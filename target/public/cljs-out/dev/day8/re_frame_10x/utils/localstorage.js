// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__24967 = arguments.length;
switch (G__24967) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__24969 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__24970 = null;
var count__24971 = (0);
var i__24972 = (0);
while(true){
if((i__24972 < count__24971)){
var k = cljs.core._nth.call(null,chunk__24970,i__24972);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__24973 = seq__24969;
var G__24974 = chunk__24970;
var G__24975 = count__24971;
var G__24976 = (i__24972 + (1));
seq__24969 = G__24973;
chunk__24970 = G__24974;
count__24971 = G__24975;
i__24972 = G__24976;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24969);
if(temp__5720__auto__){
var seq__24969__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24969__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24969__$1);
var G__24977 = cljs.core.chunk_rest.call(null,seq__24969__$1);
var G__24978 = c__4550__auto__;
var G__24979 = cljs.core.count.call(null,c__4550__auto__);
var G__24980 = (0);
seq__24969 = G__24977;
chunk__24970 = G__24978;
count__24971 = G__24979;
i__24972 = G__24980;
continue;
} else {
var k = cljs.core.first.call(null,seq__24969__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__24981 = cljs.core.next.call(null,seq__24969__$1);
var G__24982 = null;
var G__24983 = (0);
var G__24984 = (0);
seq__24969 = G__24981;
chunk__24970 = G__24982;
count__24971 = G__24983;
i__24972 = G__24984;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map
