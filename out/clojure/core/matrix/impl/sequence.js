// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.matrix.impl.sequence');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cst$kw$sequence;
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,"Core.matrix implementation for Clojure ISeq objects"], null);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,length);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix(cljs.core.PersistentVector.EMPTY,rows,columns);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,dims);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.protocols.coerce_param(cljs.core.PersistentVector.EMPTY,data);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var x__2050__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,x);
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,x);
return clojure.core.matrix.protocols.get_1d(row,y);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__5718__auto__ = cljs.core.seq(indexes);
if(temp__5718__auto__){
var indexes__$1 = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.next(indexes__$1);
if(temp__5718__auto____$1){
var next_indexes = temp__5718__auto____$1;
var mv = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.first(indexes__$1));
return clojure.core.matrix.protocols.get_nd(mv,next_indexes);
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.first(indexes__$1));
}
} else {
return m__$1;
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_1d(clojure.core.matrix.protocols.convert_to_nested_vectors(m__$1),row,v);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_2d(clojure.core.matrix.protocols.convert_to_nested_vectors(m__$1),row,column,v);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd(clojure.core.matrix.protocols.convert_to_nested_vectors(m__$1),indexes,v);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcast$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,new_shape){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.convert_to_nested_vectors(m__$1),new_shape);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.convert_to_nested_vectors(a),clojure.core.matrix.protocols.get_shape(m__$1));
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceView$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,i);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec(m__$1);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixRows$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec(m__$1);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixColumns$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 = (function (m){
var m__$1 = this;
var m__$2 = clojure.core.matrix.protocols.coerce_param(cljs.core.PersistentVector.EMPTY,m__$1);
return clojure.core.matrix.protocols.get_columns(m__$2);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq2$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq2$get_slice_seq$arity$2 = (function (m,dimension){
var m__$1 = this;
var ldimension = cljs.core.long$(dimension);
if((ldimension === (0))){
return clojure.core.matrix.protocols.get_major_slice_seq(m__$1);
} else {
if((ldimension < (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't get slices of a negative dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dimension)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (ldimension,m__$1){
return (function (p1__10027_SHARP_){
return clojure.core.matrix.protocols.get_slice(m__$1,dimension,p1__10027_SHARP_);
});})(ldimension,m__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m__$1,dimension)));

}
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if((clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) > (0))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
} else {
return cljs.core.vec(m__$1);
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
console.log(["shape of seq: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''));

return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1))))){
return m__$1;
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));
}
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (m__$1){
return (function (p1__10028_SHARP_){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(p1__10028_SHARP_,f);
});})(m__$1))
,m__$1);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__10034 = clojure.core.matrix.protocols.broadcast_compatible(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10034,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10034,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (vec__10034,m__$2,a__$1,m__$1){
return (function (p1__10029_SHARP_,p2__10030_SHARP_){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(p1__10029_SHARP_,f,p2__10030_SHARP_);
});})(vec__10034,m__$2,a__$1,m__$1))
,m__$2,clojure.core.matrix.protocols.get_major_slice_seq(a__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var vec__10037 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.core.matrix.protocols.broadcast_compatible,m__$1,a,more);
var seq__10038 = cljs.core.seq(vec__10037);
var first__10039 = cljs.core.first(seq__10038);
var seq__10038__$1 = cljs.core.next(seq__10038);
var m__$2 = first__10039;
var first__10039__$1 = cljs.core.first(seq__10038__$1);
var seq__10038__$2 = cljs.core.next(seq__10038__$1);
var a__$1 = first__10039__$1;
var more__$1 = seq__10038__$2;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4(((function (vec__10037,seq__10038,first__10039,seq__10038__$1,m__$2,first__10039__$1,seq__10038__$2,a__$1,more__$1,m__$1){
return (function (p1__10031_SHARP_,p2__10032_SHARP_,p3__10033_SHARP_){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(p1__10031_SHARP_,f,p2__10032_SHARP_,p3__10033_SHARP_);
});})(vec__10037,seq__10038,first__10039,seq__10038__$1,m__$2,first__10039__$1,seq__10038__$2,a__$1,more__$1,m__$1))
,m__$2,clojure.core.matrix.protocols.get_major_slice_seq(a__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq,more__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0)));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,init,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0)));
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (ms__$1){
return (function (i,m){
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$2(m,((function (ms__$1){
return (function() { 
var G__10052__delegate = function (p1__10040_SHARP_,rest__10041_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i,p1__10040_SHARP_),rest__10041_SHARP_);
};
var G__10052 = function (p1__10040_SHARP_,var_args){
var rest__10041_SHARP_ = null;
if (arguments.length > 1) {
var G__10053__i = 0, G__10053__a = new Array(arguments.length -  1);
while (G__10053__i < G__10053__a.length) {G__10053__a[G__10053__i] = arguments[G__10053__i + 1]; ++G__10053__i;}
  rest__10041_SHARP_ = new cljs.core.IndexedSeq(G__10053__a,0,null);
} 
return G__10052__delegate.call(this,p1__10040_SHARP_,rest__10041_SHARP_);};
G__10052.cljs$lang$maxFixedArity = 1;
G__10052.cljs$lang$applyTo = (function (arglist__10054){
var p1__10040_SHARP_ = cljs.core.first(arglist__10054);
var rest__10041_SHARP_ = cljs.core.rest(arglist__10054);
return G__10052__delegate(p1__10040_SHARP_,rest__10041_SHARP_);
});
G__10052.cljs$core$IFn$_invoke$arity$variadic = G__10052__delegate;
return G__10052;
})()
;})(ms__$1))
);
});})(ms__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var vec__10046 = clojure.core.matrix.protocols.broadcast_compatible(ms__$1,as);
var ms__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10046,(0),null);
var as__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10046,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4(((function (vec__10046,ms__$2,as__$1,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$3(m,((function (vec__10046,ms__$2,as__$1,ms__$1){
return (function() { 
var G__10055__delegate = function (p1__10042_SHARP_,rest__10043_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i,p1__10042_SHARP_),rest__10043_SHARP_);
};
var G__10055 = function (p1__10042_SHARP_,var_args){
var rest__10043_SHARP_ = null;
if (arguments.length > 1) {
var G__10056__i = 0, G__10056__a = new Array(arguments.length -  1);
while (G__10056__i < G__10056__a.length) {G__10056__a[G__10056__i] = arguments[G__10056__i + 1]; ++G__10056__i;}
  rest__10043_SHARP_ = new cljs.core.IndexedSeq(G__10056__a,0,null);
} 
return G__10055__delegate.call(this,p1__10042_SHARP_,rest__10043_SHARP_);};
G__10055.cljs$lang$maxFixedArity = 1;
G__10055.cljs$lang$applyTo = (function (arglist__10057){
var p1__10042_SHARP_ = cljs.core.first(arglist__10057);
var rest__10043_SHARP_ = cljs.core.rest(arglist__10057);
return G__10055__delegate(p1__10042_SHARP_,rest__10043_SHARP_);
});
G__10055.cljs$core$IFn$_invoke$arity$variadic = G__10055__delegate;
return G__10055;
})()
;})(vec__10046,ms__$2,as__$1,ms__$1))
,a);
});})(vec__10046,ms__$2,as__$1,ms__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$2)),ms__$2,clojure.core.matrix.protocols.get_major_slice_seq(as__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
var vec__10049 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.core.matrix.protocols.broadcast_compatible,ms__$1,as,more);
var seq__10050 = cljs.core.seq(vec__10049);
var first__10051 = cljs.core.first(seq__10050);
var seq__10050__$1 = cljs.core.next(seq__10050);
var ms__$2 = first__10051;
var first__10051__$1 = cljs.core.first(seq__10050__$1);
var seq__10050__$2 = cljs.core.next(seq__10050__$1);
var as__$1 = first__10051__$1;
var more__$1 = seq__10050__$2;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$variadic(((function (vec__10049,seq__10050,first__10051,seq__10050__$1,ms__$2,first__10051__$1,seq__10050__$2,as__$1,more__$1,ms__$1){
return (function() { 
var G__10058__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$4(m,((function (vec__10049,seq__10050,first__10051,seq__10050__$1,ms__$2,first__10051__$1,seq__10050__$2,as__$1,more__$1,ms__$1){
return (function() { 
var G__10059__delegate = function (p1__10044_SHARP_,rest__10045_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i,p1__10044_SHARP_),rest__10045_SHARP_);
};
var G__10059 = function (p1__10044_SHARP_,var_args){
var rest__10045_SHARP_ = null;
if (arguments.length > 1) {
var G__10060__i = 0, G__10060__a = new Array(arguments.length -  1);
while (G__10060__i < G__10060__a.length) {G__10060__a[G__10060__i] = arguments[G__10060__i + 1]; ++G__10060__i;}
  rest__10045_SHARP_ = new cljs.core.IndexedSeq(G__10060__a,0,null);
} 
return G__10059__delegate.call(this,p1__10044_SHARP_,rest__10045_SHARP_);};
G__10059.cljs$lang$maxFixedArity = 1;
G__10059.cljs$lang$applyTo = (function (arglist__10061){
var p1__10044_SHARP_ = cljs.core.first(arglist__10061);
var rest__10045_SHARP_ = cljs.core.rest(arglist__10061);
return G__10059__delegate(p1__10044_SHARP_,rest__10045_SHARP_);
});
G__10059.cljs$core$IFn$_invoke$arity$variadic = G__10059__delegate;
return G__10059;
})()
;})(vec__10049,seq__10050,first__10051,seq__10050__$1,ms__$2,first__10051__$1,seq__10050__$2,as__$1,more__$1,ms__$1))
,a,mr);
};
var G__10058 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__10062__i = 0, G__10062__a = new Array(arguments.length -  3);
while (G__10062__i < G__10062__a.length) {G__10062__a[G__10062__i] = arguments[G__10062__i + 3]; ++G__10062__i;}
  mr = new cljs.core.IndexedSeq(G__10062__a,0,null);
} 
return G__10058__delegate.call(this,i,m,a,mr);};
G__10058.cljs$lang$maxFixedArity = 3;
G__10058.cljs$lang$applyTo = (function (arglist__10063){
var i = cljs.core.first(arglist__10063);
arglist__10063 = cljs.core.next(arglist__10063);
var m = cljs.core.first(arglist__10063);
arglist__10063 = cljs.core.next(arglist__10063);
var a = cljs.core.first(arglist__10063);
var mr = cljs.core.rest(arglist__10063);
return G__10058__delegate(i,m,a,mr);
});
G__10058.cljs$core$IFn$_invoke$arity$variadic = G__10058__delegate;
return G__10058;
})()
;})(vec__10049,seq__10050,first__10051,seq__10050__$1,ms__$2,first__10051__$1,seq__10050__$2,as__$1,more__$1,ms__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$2)),ms__$2,clojure.core.matrix.protocols.get_major_slice_seq(as__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq,more__$1)], 0));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Sequence arrays are not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
