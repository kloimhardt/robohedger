// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.matrix.impl.wrappers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.persistent_vector');
goog.require('clojure.core.matrix.utils');



/**
* @constructor
 * @implements {clojure.core.matrix.protocols.PDimensionInfo}
 * @implements {clojure.core.matrix.protocols.PIndexedAccess}
 * @implements {clojure.core.matrix.protocols.PIndexedSetting}
 * @implements {clojure.core.matrix.protocols.PImplementation}
 * @implements {clojure.core.matrix.protocols.PConversion}
 * @implements {clojure.core.matrix.protocols.PMatrixCloning}
 * @implements {clojure.core.matrix.protocols.PZeroDimensionAccess}
 * @implements {clojure.core.matrix.impl.wrappers.Object}
*/
clojure.core.matrix.impl.wrappers.ScalarWrapper = (function (value){
this.value = value;
});
clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.toString = (function (){
var self__ = this;
var m = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.value);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return cljs.core.cst$kw$scalar_DASH_wrapper;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,"Wraps a single scalar as a mutable 0-D array"], null);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,length);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix(cljs.core.PersistentVector.EMPTY,rows,columns);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,dims);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var self__ = this;
var m__$1 = this;
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data)))){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(data))){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(data));
} else {
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(clojure.core.matrix.protocols.get_0d(data)));
}
} else {
return clojure.core.matrix.protocols.clone(data);
}
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return (cljs.core.long$(dims) === (0));
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (0);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,dimension_number){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get dimension-count of ScalarWrapper: no dimensions exist",cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,row){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get-1d on ScalarWrapper.",cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,row,column){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get-2d on ScalarWrapper.",cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var self__ = this;
var m__$1 = this;
if(cljs.core.seq(indexes)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get-1d on ScalarWrapper.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return self__.value;
}
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,x,v){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D set on 0D array",cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,x,y,v){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on 0D array",cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
if(cljs.core.not(cljs.core.seq(indexes))){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(v));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't set on 0D array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return true;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.value;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.value;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,v){
var self__ = this;
var m__$1 = this;
return self__.value = v;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(self__.value));
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$value,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$volatile_DASH_mutable,true], null))], null);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.cljs$lang$type = true;

clojure.core.matrix.impl.wrappers.ScalarWrapper.cljs$lang$ctorStr = "clojure.core.matrix.impl.wrappers/ScalarWrapper";

clojure.core.matrix.impl.wrappers.ScalarWrapper.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"clojure.core.matrix.impl.wrappers/ScalarWrapper");
});

/**
 * Positional factory function for clojure.core.matrix.impl.wrappers/ScalarWrapper.
 */
clojure.core.matrix.impl.wrappers.__GT_ScalarWrapper = (function clojure$core$matrix$impl$wrappers$__GT_ScalarWrapper(value){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(value));
});


/**
* @constructor
 * @implements {clojure.core.matrix.protocols.PDimensionInfo}
 * @implements {clojure.core.matrix.protocols.PIndexedSettingMutable}
 * @implements {clojure.core.matrix.protocols.PIndexedAccess}
 * @implements {clojure.core.matrix.protocols.PIndexedSetting}
 * @implements {clojure.core.matrix.protocols.PImplementation}
 * @implements {cljs.core.ISeqable}
 * @implements {clojure.core.matrix.protocols.PConversion}
 * @implements {clojure.core.matrix.protocols.PMatrixCloning}
 * @implements {clojure.core.matrix.protocols.PZeroDimensionAccess}
 * @implements {clojure.core.matrix.impl.wrappers.Object}
*/
clojure.core.matrix.impl.wrappers.SliceWrapper = (function (array,slice){
this.array = array;
this.slice = slice;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.toString = (function (){
var self__ = this;
var m = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(m.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1(null));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(self__.array))){
return clojure.core.matrix.protocols.get_1d(self__.array,self__.slice);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors,clojure.core.matrix.protocols.get_major_slice_seq(m__$1));
}
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
var G__9959 = clojure.core.matrix.protocols.clone(self__.array);
var G__9960 = self__.slice;
return (clojure.core.matrix.impl.wrappers.wrap_slice.cljs$core$IFn$_invoke$arity$2 ? clojure.core.matrix.impl.wrappers.wrap_slice.cljs$core$IFn$_invoke$arity$2(G__9959,G__9960) : clojure.core.matrix.impl.wrappers.wrap_slice.call(null,G__9959,G__9960));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_1d(self__.array,self__.slice);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_1d_BANG_(self__.array,self__.slice,value);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(self__.array)) - (1));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return cljs.core.next(clojure.core.matrix.protocols.get_shape(self__.array));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return ((2) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(self__.array)));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,dimension_number){
var self__ = this;
var m__$1 = this;
var dimension_number__$1 = cljs.core.long$(dimension_number);
if((dimension_number__$1 < (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't access negative dimension!",cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.dimension_count(self__.array,(dimension_number__$1 + (1)));
}
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_1d_BANG_$arity$3 = (function (m,row,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_2d_BANG_(self__.array,self__.slice,row,v);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_2d_BANG_$arity$4 = (function (m,row,column,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd_BANG_(self__.array,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.slice,row,column], null),v);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_nd_BANG_$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd_BANG_(self__.array,cljs.core.cons(self__.slice,indexes),v);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,row){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_2d(self__.array,self__.slice,row);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,row,column){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_nd(self__.array,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.slice,row,column], null));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_nd(self__.array,cljs.core.cons(self__.slice,indexes));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var self__ = this;
var m__$1 = this;
var m__$2 = m__$1.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1(null);
clojure.core.matrix.protocols.set_1d_BANG_(m__$2,row,v);

return m__$2;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var self__ = this;
var m__$1 = this;
var m__$2 = m__$1.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1(null);
clojure.core.matrix.protocols.set_2d_BANG_(m__$2,row,column,v);

return m__$2;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
var m__$2 = m__$1.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1(null);
clojure.core.matrix.protocols.set_nd_BANG_(m__$2,indexes,v);

return m__$2;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.is_mutable_QMARK_(self__.array);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_major_slice_seq(m__$1);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return cljs.core.cst$kw$slice_DASH_wrapper;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,"Wraps a row-major slice of an array"], null);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,length);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix(cljs.core.PersistentVector.EMPTY,rows,columns);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,dims);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,data);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return true;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$array,cljs.core.with_meta(cljs.core.cst$sym$slice,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.cljs$lang$type = true;

clojure.core.matrix.impl.wrappers.SliceWrapper.cljs$lang$ctorStr = "clojure.core.matrix.impl.wrappers/SliceWrapper";

clojure.core.matrix.impl.wrappers.SliceWrapper.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"clojure.core.matrix.impl.wrappers/SliceWrapper");
});

/**
 * Positional factory function for clojure.core.matrix.impl.wrappers/SliceWrapper.
 */
clojure.core.matrix.impl.wrappers.__GT_SliceWrapper = (function clojure$core$matrix$impl$wrappers$__GT_SliceWrapper(array,slice){
return (new clojure.core.matrix.impl.wrappers.SliceWrapper(array,slice));
});


/**
* @constructor
 * @implements {clojure.core.matrix.protocols.PDimensionInfo}
 * @implements {clojure.core.matrix.protocols.PIndexedSettingMutable}
 * @implements {cljs.core.IIndexed}
 * @implements {clojure.core.matrix.protocols.PSubVector}
 * @implements {clojure.core.matrix.protocols.PIndexedAccess}
 * @implements {clojure.core.matrix.protocols.PSliceView2}
 * @implements {clojure.core.matrix.protocols.PIndexedSetting}
 * @implements {cljs.core.ICounted}
 * @implements {clojure.core.matrix.protocols.PImplementation}
 * @implements {cljs.core.ISeqable}
 * @implements {clojure.core.matrix.protocols.PZeroDimensionAccess}
 * @implements {clojure.core.matrix.impl.wrappers.Object}
*/
clojure.core.matrix.impl.wrappers.NDWrapper = (function (array,shape,dim_map,index_maps,source_position){
this.array = array;
this.shape = shape;
this.dim_map = dim_map;
this.index_maps = index_maps;
this.source_position = source_position;
this.cljs$lang$protocol_mask$partition0$ = 8388626;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
clojure.core.matrix.impl.wrappers.NDWrapper.prototype.toString = (function (){
var self__ = this;
var m = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.persistent_vector_coerce(m));
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (m,i){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_major_slice(m__$1,i);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (m,i,not_found){
var self__ = this;
var m__$1 = this;
if(((cljs.core.integer_QMARK_(i)) && (((0) <= i)) && ((i < (self__.shape[(0)]))))){
return clojure.core.matrix.protocols.get_major_slice(m__$1,i);
} else {
return not_found;
}
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$ICounted$_count$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (self__.shape[(0)]);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_nd(self__.array,self__.source_position);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd_BANG_(self__.array,self__.source_position,value);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.shape.length;
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.shape;
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return ((1) === self__.shape.length);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,dimension_number){
var self__ = this;
var m__$1 = this;
return (self__.shape[(dimension_number | (0))]);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_1d_BANG_$arity$3 = (function (m,row,v){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var im = (self__.index_maps[(0)]);
var i9962_9970 = (0);
var tdim__9870__auto___9971 = (self__.dim_map[i9962_9970]);
if((tdim__9870__auto___9971 >= (0))){
(ix[tdim__9870__auto___9971] = ((self__.index_maps[i9962_9970])[row]));
} else {
}

return clojure.core.matrix.protocols.set_nd_BANG_(self__.array,ix,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_2d_BANG_$arity$4 = (function (m,row,column,v){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var i9963_9972 = (0);
var tdim__9870__auto___9973 = (self__.dim_map[i9963_9972]);
if((tdim__9870__auto___9973 >= (0))){
(ix[tdim__9870__auto___9973] = ((self__.index_maps[i9963_9972])[row]));
} else {
}

var i9964_9974 = (1);
var tdim__9870__auto___9975 = (self__.dim_map[i9964_9974]);
if((tdim__9870__auto___9975 >= (0))){
(ix[tdim__9870__auto___9975] = ((self__.index_maps[i9964_9974])[column]));
} else {
}

return clojure.core.matrix.protocols.set_nd_BANG_(self__.array,ix,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_nd_BANG_$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var n = self__.shape.length;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.count(indexes))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["set-nd! called with index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(indexes))," indexes on wrapped array of shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4607__auto___9976 = self__.shape.length;
var i_9977 = (0);
while(true){
if((i_9977 < n__4607__auto___9976)){
var i9965_9978 = i_9977;
var tdim__9870__auto___9979 = (self__.dim_map[i9965_9978]);
if((tdim__9870__auto___9979 >= (0))){
(ix[tdim__9870__auto___9979] = ((self__.index_maps[i9965_9978])[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(indexes,i_9977)]));
} else {
}

var G__9980 = (i_9977 + (1));
i_9977 = G__9980;
continue;
} else {
}
break;
}

return clojure.core.matrix.protocols.set_nd_BANG_(self__.array,ix,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSubVector$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 = (function (m,start,length){
var self__ = this;
var m__$1 = this;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),self__.shape.length)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't take subvector: wrong dimensionality = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.shape.length)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var vlen = cljs.core.long$((self__.shape[(0)]));
var start__$1 = cljs.core.long$(start);
var length__$1 = cljs.core.long$(length);
var end = (start__$1 + length__$1);
var old_index_map = (self__.index_maps[(0)]);
var new_index_map = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(length__$1);
if((start__$1 < (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Start index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(start__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if((end > vlen)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["End index out of bounds: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4607__auto___9981 = length__$1;
var i_9982 = (0);
while(true){
if((i_9982 < n__4607__auto___9981)){
(new_index_map[i_9982] = (old_index_map[(start__$1 + i_9982)]));

var G__9983 = (i_9982 + (1));
i_9982 = G__9983;
continue;
} else {
}
break;
}

return (new clojure.core.matrix.impl.wrappers.NDWrapper(self__.array,clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1(length__$1),self__.dim_map,clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1(new_index_map),clojure.core.matrix.utils.copy_long_array(self__.source_position)));
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,row){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var im = (self__.index_maps[(0)]);
var i9966_9984 = (0);
var tdim__9870__auto___9985 = (self__.dim_map[i9966_9984]);
if((tdim__9870__auto___9985 >= (0))){
(ix[tdim__9870__auto___9985] = ((self__.index_maps[i9966_9984])[row]));
} else {
}

return clojure.core.matrix.protocols.get_nd(self__.array,ix);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,row,column){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var i9967_9986 = (0);
var tdim__9870__auto___9987 = (self__.dim_map[i9967_9986]);
if((tdim__9870__auto___9987 >= (0))){
(ix[tdim__9870__auto___9987] = ((self__.index_maps[i9967_9986])[row]));
} else {
}

var i9968_9988 = (1);
var tdim__9870__auto___9989 = (self__.dim_map[i9968_9988]);
if((tdim__9870__auto___9989 >= (0))){
(ix[tdim__9870__auto___9989] = ((self__.index_maps[i9968_9988])[column]));
} else {
}

return clojure.core.matrix.protocols.get_nd(self__.array,ix);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var n__4607__auto___9990 = self__.shape.length;
var i_9991 = (0);
while(true){
if((i_9991 < n__4607__auto___9990)){
var i9969_9992 = i_9991;
var tdim__9870__auto___9993 = (self__.dim_map[i9969_9992]);
if((tdim__9870__auto___9993 >= (0))){
(ix[tdim__9870__auto___9993] = ((self__.index_maps[i9969_9992])[cljs.core.nth.cljs$core$IFn$_invoke$arity$2(indexes,i_9991)]));
} else {
}

var G__9994 = (i_9991 + (1));
i_9991 = G__9994;
continue;
} else {
}
break;
}

return clojure.core.matrix.protocols.get_nd(self__.array,ix);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSliceView2$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 = (function (m,dim,i){
var self__ = this;
var m__$1 = this;
var i__$1 = cljs.core.long$(i);
var dim__$1 = cljs.core.long$(dim);
var nsp = clojure.core.matrix.utils.copy_long_array(self__.source_position);
var sdim = cljs.core.long$((self__.dim_map[dim__$1]));
(nsp[sdim] = i__$1);

return (new clojure.core.matrix.impl.wrappers.NDWrapper(self__.array,(function (){var n__2362__auto__ = self__.shape.length;
var length__2363__auto__ = ((n__2362__auto__ - (1)) | (0));
var new_xs__2364__auto__ = self__.shape.slice((0),length__2363__auto__);
var j__2365__auto___9995 = (dim__$1 | (0));
while(true){
if((j__2365__auto___9995 < (n__2362__auto__ - (1)))){
(new_xs__2364__auto__[(j__2365__auto___9995 | (0))] = (self__.shape[((j__2365__auto___9995 + (1)) | (0))]));

var G__9996 = (j__2365__auto___9995 + (1));
j__2365__auto___9995 = G__9996;
continue;
} else {
}
break;
}


return new_xs__2364__auto__;
})(),(function (){var n__2362__auto__ = self__.dim_map.length;
var length__2363__auto__ = ((n__2362__auto__ - (1)) | (0));
var new_xs__2364__auto__ = self__.dim_map.slice((0),length__2363__auto__);
var j__2365__auto___9997 = (dim__$1 | (0));
while(true){
if((j__2365__auto___9997 < (n__2362__auto__ - (1)))){
(new_xs__2364__auto__[(j__2365__auto___9997 | (0))] = (self__.dim_map[((j__2365__auto___9997 + (1)) | (0))]));

var G__9998 = (j__2365__auto___9997 + (1));
j__2365__auto___9997 = G__9998;
continue;
} else {
}
break;
}


return new_xs__2364__auto__;
})(),(function (){var n__2362__auto__ = self__.index_maps.length;
var length__2363__auto__ = ((n__2362__auto__ - (1)) | (0));
var new_xs__2364__auto__ = self__.index_maps.slice((0),length__2363__auto__);
var j__2365__auto___9999 = (dim__$1 | (0));
while(true){
if((j__2365__auto___9999 < (n__2362__auto__ - (1)))){
(new_xs__2364__auto__[(j__2365__auto___9999 | (0))] = (self__.index_maps[((j__2365__auto___9999 + (1)) | (0))]));

var G__10000 = (j__2365__auto___9999 + (1));
j__2365__auto___9999 = G__10000;
continue;
} else {
}
break;
}


return new_xs__2364__auto__;
})(),nsp));
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,x,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_1d(clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0(),m__$1),x,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,x,y,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_2d(clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0(),m__$1),x,y,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd(clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0(),m__$1),indexes,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.is_mutable_QMARK_(self__.array);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_major_slice_seq(m__$1);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return cljs.core.cst$kw$nd_DASH_wrapper;
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,"Wraps an N-dimensional subset or broadcast of an array"], null);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,length);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix(cljs.core.PersistentVector.EMPTY,rows,columns);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,dims);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,data);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return true;
});

clojure.core.matrix.impl.wrappers.NDWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$array,cljs.core.with_meta(cljs.core.cst$sym$shape,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$longs], null)),cljs.core.with_meta(cljs.core.cst$sym$dim_DASH_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$longs], null)),cljs.core.with_meta(cljs.core.cst$sym$index_DASH_maps,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$objects], null)),cljs.core.with_meta(cljs.core.cst$sym$source_DASH_position,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$longs], null))], null);
});

clojure.core.matrix.impl.wrappers.NDWrapper.cljs$lang$type = true;

clojure.core.matrix.impl.wrappers.NDWrapper.cljs$lang$ctorStr = "clojure.core.matrix.impl.wrappers/NDWrapper";

clojure.core.matrix.impl.wrappers.NDWrapper.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"clojure.core.matrix.impl.wrappers/NDWrapper");
});

/**
 * Positional factory function for clojure.core.matrix.impl.wrappers/NDWrapper.
 */
clojure.core.matrix.impl.wrappers.__GT_NDWrapper = (function clojure$core$matrix$impl$wrappers$__GT_NDWrapper(array,shape,dim_map,index_maps,source_position){
return (new clojure.core.matrix.impl.wrappers.NDWrapper(array,shape,dim_map,index_maps,source_position));
});

/**
 * Creates a view of a major slice of an array.
 */
clojure.core.matrix.impl.wrappers.wrap_slice = (function clojure$core$matrix$impl$wrappers$wrap_slice(m,slice){
var slice__$1 = cljs.core.long$(slice);
if((slice__$1 >= cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Slice ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slice__$1)," does not exist on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return (new clojure.core.matrix.impl.wrappers.SliceWrapper(m,slice__$1));
});
/**
 * Wraps an array in a NDWrapper view. Useful for taking submatrices, subviews etc.
 */
clojure.core.matrix.impl.wrappers.wrap_nd = (function clojure$core$matrix$impl$wrappers$wrap_nd(m){
var shp = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(m));
var dims = shp.length;
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,shp,clojure.core.matrix.utils.long_range(dims),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (shp,dims){
return (function (p1__10001_SHARP_){
return clojure.core.matrix.utils.long_range(clojure.core.matrix.protocols.dimension_count(m,p1__10001_SHARP_));
});})(shp,dims))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(dims))),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(dims)));
});
/**
 * Wraps an array using a selection of indexes for each dimension.
 */
clojure.core.matrix.impl.wrappers.wrap_selection = (function clojure$core$matrix$impl$wrappers$wrap_selection(m,indices){
var shp = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,indices));
var dims = cljs.core.count(shp);
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,shp,cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(dims)),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.long_array,indices)),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dims,(0)))));
});
/**
 * Wraps an array using a selection of [start length] ranges for each dimension.
 */
clojure.core.matrix.impl.wrappers.wrap_submatrix = (function clojure$core$matrix$impl$wrappers$wrap_submatrix(m,dim_ranges){
var shp = clojure.core.matrix.protocols.get_shape(m);
var dims = cljs.core.count(shp);
var _ = (((!((dims === cljs.core.count(dim_ranges)))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["submatrix ranges ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dim_ranges)," do not match matrix dimensionality of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shp)].join(''),cljs.core.PersistentArrayMap.EMPTY)})():null);
var dim_ranges__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (shp,dims,_){
return (function (a,cnt){
if(cljs.core.truth_(a)){
return cljs.core.vec(a);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cnt], null);
}
});})(shp,dims,_))
,dim_ranges,shp);
var new_shape = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (shp,dims,_,dim_ranges__$1){
return (function (p__10002){
var vec__10003 = p__10002;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10003,(0),null);
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10003,(1),null);
return len;
});})(shp,dims,_,dim_ranges__$1))
,dim_ranges__$1));
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,new_shape,cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(shp))),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (shp,dims,_,dim_ranges__$1,new_shape){
return (function (p__10006){
var vec__10007 = p__10006;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10007,(0),null);
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10007,(1),null);
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$2(start,(start + len)));
});})(shp,dims,_,dim_ranges__$1,new_shape))
,dim_ranges__$1)),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dims,(0)))));
});
/**
 * Wraps an array with broadcasting to the given target shape.
 */
clojure.core.matrix.impl.wrappers.wrap_broadcast = (function clojure$core$matrix$impl$wrappers$wrap_broadcast(m,target_shape){
var tshape = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(target_shape);
var tdims = tshape.length;
var mshape = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(m));
var mdims = mshape.length;
var dim_map = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((tdims - mdims),(-1)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(mdims)));
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,tshape,dim_map,cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (tshape,tdims,mshape,mdims,dim_map){
return (function clojure$core$matrix$impl$wrappers$wrap_broadcast_$_iter__10010(s__10011){
return (new cljs.core.LazySeq(null,((function (tshape,tdims,mshape,mdims,dim_map){
return (function (){
var s__10011__$1 = s__10011;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10011__$1);
if(temp__5720__auto__){
var s__10011__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10011__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__10011__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__10013 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__10012 = (0);
while(true){
if((i__10012 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__10012);
cljs.core.chunk_append(b__10013,(function (){var i__$1 = cljs.core.long$(i);
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((tshape[i__$1]));
var mdim = (i__$1 - (tdims - mdims));
if((mdim >= (0))){
var mdc_10014 = (mshape[mdim]);
var tdc_10015 = (tshape[i__$1]);
if((mdc_10014 === (1))){
} else {
if((mdc_10014 === tdc_10015)){
var n__4607__auto___10016 = mdc_10014;
var i_10017__$2 = (0);
while(true){
if((i_10017__$2 < n__4607__auto___10016)){
(arr[i_10017__$2] = i_10017__$2);

var G__10018 = (i_10017__$2 + (1));
i_10017__$2 = G__10018;
continue;
} else {
}
break;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't broadcast shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(mshape))," to target shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(tshape))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
}

return arr;
})());

var G__10019 = (i__10012 + (1));
i__10012 = G__10019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10013),clojure$core$matrix$impl$wrappers$wrap_broadcast_$_iter__10010(cljs.core.chunk_rest(s__10011__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10013),null);
}
} else {
var i = cljs.core.first(s__10011__$2);
return cljs.core.cons((function (){var i__$1 = cljs.core.long$(i);
var arr = cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((tshape[i__$1]));
var mdim = (i__$1 - (tdims - mdims));
if((mdim >= (0))){
var mdc_10020 = (mshape[mdim]);
var tdc_10021 = (tshape[i__$1]);
if((mdc_10020 === (1))){
} else {
if((mdc_10020 === tdc_10021)){
var n__4607__auto___10022 = mdc_10020;
var i_10023__$2 = (0);
while(true){
if((i_10023__$2 < n__4607__auto___10022)){
(arr[i_10023__$2] = i_10023__$2);

var G__10024 = (i_10023__$2 + (1));
i_10023__$2 = G__10024;
continue;
} else {
}
break;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't broadcast shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(mshape))," to target shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(tshape))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
}

return arr;
})(),clojure$core$matrix$impl$wrappers$wrap_broadcast_$_iter__10010(cljs.core.rest(s__10011__$2)));
}
} else {
return null;
}
break;
}
});})(tshape,tdims,mshape,mdims,dim_map))
,null,null));
});})(tshape,tdims,mshape,mdims,dim_map))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(tdims));
})()),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(mdims)));
});
/**
 * Wraps a scalar value into a mutable 0D array.
 */
clojure.core.matrix.impl.wrappers.wrap_scalar = (function clojure$core$matrix$impl$wrappers$wrap_scalar(m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(m));
} else {
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(clojure.core.matrix.protocols.get_0d(m)));

}
});
clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$1((new clojure.core.matrix.impl.wrappers.ScalarWrapper((13))));
clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$1((new clojure.core.matrix.impl.wrappers.NDWrapper(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((0)),cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)))));
