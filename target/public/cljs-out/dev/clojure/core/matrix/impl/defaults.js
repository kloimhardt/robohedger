// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.core.matrix.impl.defaults');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.impl.wrappers');
goog.require('clojure.core.matrix.impl.mathsops');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.double_array');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.utils');
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = null;
/**
 * Returns the total count of elements in an array
 */
clojure.core.matrix.impl.defaults.calc_element_count = (function clojure$core$matrix$impl$defaults$calc_element_count(m){
var temp__5718__auto__ = clojure.core.matrix.protocols.get_shape.call(null,m);
if(cljs.core.truth_(temp__5718__auto__)){
var sh = temp__5718__auto__;
return cljs.core.reduce.call(null,cljs.core._STAR_,sh);
} else {
return (1);
}
});
/**
 * Constructs a new mutable matrix with the given data.
 */
clojure.core.matrix.impl.defaults.construct_mutable_matrix = (function clojure$core$matrix$impl$defaults$construct_mutable_matrix(m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var type = clojure.core.matrix.protocols.element_type.call(null,m);
var double_QMARK_ = cljs.core._EQ_.call(null,Number,type);
if((dims === (0))){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,clojure.core.matrix.protocols.get_0d.call(null,m));
} else {
if((((dims === (1))) && (double_QMARK_))){
return clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);
} else {
if(double_QMARK_){
return clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);

}
}
}
});
goog.object.set(clojure.core.matrix.protocols.PImplementation,"object",true);

goog.object.set(clojure.core.matrix.protocols.implementation_key,"object",(function (m){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));

goog.object.set(clojure.core.matrix.protocols.meta_info,"object",(function (m){
return cljs.core.PersistentArrayMap.EMPTY;
}));

goog.object.set(clojure.core.matrix.protocols.construct_matrix,"object",(function (m,data){
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,data);
}));

goog.object.set(clojure.core.matrix.protocols.new_vector,"object",(function (m,length){
return clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,length);
}));

goog.object.set(clojure.core.matrix.protocols.new_matrix,"object",(function (m,rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,cljs.core.PersistentVector.EMPTY,rows,columns);
}));

goog.object.set(clojure.core.matrix.protocols.new_matrix_nd,"object",(function (m,shape){
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}));

goog.object.set(clojure.core.matrix.protocols.supports_dimensionality_QMARK_,"object",(function (m,dimensions){
return true;
}));

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.protocols.meta_info.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1));
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),data);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),length);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),rows,columns);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,shape){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),shape);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dimensions){
var m__$1 = this;
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),dimensions);
});
goog.object.set(clojure.core.matrix.protocols.PSparse,"null",true);

goog.object.set(clojure.core.matrix.protocols.sparse_coerce,"null",(function (m,data){
return clojure.core.matrix.protocols.sparse.call(null,data);
}));

goog.object.set(clojure.core.matrix.protocols.sparse,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PSparse,"object",true);

goog.object.set(clojure.core.matrix.protocols.sparse_coerce,"object",(function (m,data){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.sparse,"object",(function (m){
return m;
}));
goog.object.set(clojure.core.matrix.protocols.PNative,"null",true);

goog.object.set(clojure.core.matrix.protocols.native$,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.native_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.PNative,"object",true);

goog.object.set(clojure.core.matrix.protocols.native$,"object",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.native_QMARK_,"object",(function (m){
return false;
}));
goog.object.set(clojure.core.matrix.protocols.PNewSparseArray,"object",true);

goog.object.set(clojure.core.matrix.protocols.new_sparse_array,"object",(function (m,shape){
return null;
}));
goog.object.set(clojure.core.matrix.protocols.PDense,"null",true);

goog.object.set(clojure.core.matrix.protocols.dense_coerce,"null",(function (m,data){
return clojure.core.matrix.protocols.dense.call(null,data);
}));

goog.object.set(clojure.core.matrix.protocols.dense,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PDense,"object",true);

goog.object.set(clojure.core.matrix.protocols.dense_coerce,"object",(function (m,data){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.dense,"object",(function (m){
return m;
}));
goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"null",true);

goog.object.set(clojure.core.matrix.protocols.get_1d,"null",(function (m,x){
throw cljs.core.ex_info.call(null,"Can't do 1D get on nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.get_2d,"null",(function (m,x,y){
throw cljs.core.ex_info.call(null,"Can't do 2D get on nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.get_nd,"null",(function (m,indexes){
var temp__5718__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5718__auto__){
var s = temp__5718__auto__;
throw cljs.core.ex_info.call(null,["Can't do ND get on nil with indexes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"number",true);

goog.object.set(clojure.core.matrix.protocols.get_1d,"number",(function (m,x){
throw cljs.core.ex_info.call(null,"Can't do 1D get on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.get_2d,"number",(function (m,x,y){
throw cljs.core.ex_info.call(null,"Can't do 2D get on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.get_nd,"number",(function (m,indexes){
var temp__5718__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5718__auto__){
var s = temp__5718__auto__;
throw cljs.core.ex_info.call(null,["Can't do ND get on a scalar number with indexes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_1d,"object",(function (m,x){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_0d.call(null,cljs.core.nth.call(null,m,x));
} else {
return clojure.core.matrix.protocols.get_nd.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));

}
}));

goog.object.set(clojure.core.matrix.protocols.get_2d,"object",(function (m,x,y){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_1d.call(null,cljs.core.nth.call(null,m,x),y);
} else {
return clojure.core.matrix.protocols.get_nd.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

}
}));

goog.object.set(clojure.core.matrix.protocols.get_nd,"object",(function (m,indexes){
if(cljs.core.seq.call(null,indexes)){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_nd.call(null,cljs.core.nth.call(null,m,cljs.core.first.call(null,indexes)),cljs.core.next.call(null,indexes));
} else {
throw cljs.core.ex_info.call(null,["Indexed get failed, not defined for:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
} else {
return clojure.core.matrix.protocols.get_0d.call(null,m);
}
}));

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,x);
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
if(cljs.core.seqable_QMARK_.call(null,cljs.core.first.call(null,m__$1))){
return clojure.core.matrix.protocols.get_1d.call(null,cljs.core.nth.call(null,m__$1,x),y);
} else {
throw cljs.core.ex_info.call(null,"Can't do 2D get on a lazy seq",cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq.call(null,indexes)){
return clojure.core.matrix.protocols.get_nd.call(null,cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes)),cljs.core.next.call(null,indexes));
} else {
return clojure.core.matrix.protocols.get_0d.call(null,m__$1);
}
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,x);
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
throw cljs.core.ex_info.call(null,"Can't do 2D get on a range",cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq.call(null,indexes)){
return clojure.core.matrix.protocols.get_nd.call(null,cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes)),cljs.core.next.call(null,indexes));
} else {
return clojure.core.matrix.protocols.get_0d.call(null,m__$1);
}
});
goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"null",true);

goog.object.set(clojure.core.matrix.protocols.nonzero_count,"null",(function (m){
return (1);
}));

goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"number",true);

goog.object.set(clojure.core.matrix.protocols.nonzero_count,"number",(function (m){
if((m === (0))){
return (0);
} else {
return (1);
}
}));

goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"object",true);

goog.object.set(clojure.core.matrix.protocols.nonzero_count,"object",(function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (cnt,e){
if((e === (0))){
return cnt;
} else {
return (cnt + (1));
}
}),(0));
}));
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionConstruction,"null",true);

goog.object.set(clojure.core.matrix.protocols.new_scalar_array,"null",(function() {
var G__19543 = null;
var G__19543__1 = (function (m){
return 0.0;
});
var G__19543__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,value);
});
G__19543 = function(m,value){
switch(arguments.length){
case 1:
return G__19543__1.call(this,m);
case 2:
return G__19543__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19543.cljs$core$IFn$_invoke$arity$1 = G__19543__1;
G__19543.cljs$core$IFn$_invoke$arity$2 = G__19543__2;
return G__19543;
})()
);

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionConstruction,"object",true);

goog.object.set(clojure.core.matrix.protocols.new_scalar_array,"object",(function() {
var G__19544 = null;
var G__19544__1 = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,0.0);
});
var G__19544__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,value);
});
G__19544 = function(m,value){
switch(arguments.length){
case 1:
return G__19544__1.call(this,m);
case 2:
return G__19544__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19544.cljs$core$IFn$_invoke$arity$1 = G__19544__1;
G__19544.cljs$core$IFn$_invoke$arity$2 = G__19544__2;
return G__19544;
})()
);
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"null",true);

goog.object.set(clojure.core.matrix.protocols.get_0d,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.set_0d_BANG_,"null",(function (m,value){
throw cljs.core.ex_info.call(null,"Can't set the value of nil!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"string",true);

goog.object.set(clojure.core.matrix.protocols.get_0d,"string",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.set_0d_BANG_,"string",(function (m,value){
throw cljs.core.ex_info.call(null,"Can't set a string value!",cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var m__$1 = this;
throw cljs.core.ex_info.call(null,"Can't set a keyword!",cljs.core.PersistentArrayMap.EMPTY);
});

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"number",true);

goog.object.set(clojure.core.matrix.protocols.get_0d,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.set_0d_BANG_,"number",(function (m,value){
throw cljs.core.ex_info.call(null,"Can't set a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_0d,"object",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.set_0d_BANG_,"object",(function (m,value){
return clojure.core.matrix.protocols.set_nd_BANG_.call(null,m,cljs.core.PersistentVector.EMPTY,value);
}));
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionSet,"null",true);

goog.object.set(clojure.core.matrix.protocols.set_0d,"null",(function (m,value){
return value;
}));

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionSet,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_0d,"object",(function (m,value){
return value;
}));
goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"null",true);

goog.object.set(clojure.core.matrix.protocols.set_1d,"null",(function (m,row,v){
throw cljs.core.ex_info.call(null,"Can't do 1D set on nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_2d,"null",(function (m,row,column,v){
throw cljs.core.ex_info.call(null,"Can't do 2D set on nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_nd,"null",(function (m,indexes,v){
if(cljs.core.seq.call(null,indexes)){
throw cljs.core.ex_info.call(null,["Can't do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,indexes)),"D set on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
}));

goog.object.set(clojure.core.matrix.protocols.is_mutable_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"number",true);

goog.object.set(clojure.core.matrix.protocols.set_1d,"number",(function (m,row,v){
throw cljs.core.ex_info.call(null,"Can't do 1D set on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_2d,"number",(function (m,row,column,v){
throw cljs.core.ex_info.call(null,"Can't do 2D set on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.set_nd,"number",(function (m,indexes,v){
if(cljs.core.seq.call(null,indexes)){
throw cljs.core.ex_info.call(null,["Can't do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,indexes)),"D set on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
}));

goog.object.set(clojure.core.matrix.protocols.is_mutable_QMARK_,"number",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_1d,"object",(function (m,row,v){
var m__$1 = clojure.core.matrix.protocols.clone.call(null,m);
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m__$1,row,v);

return m__$1;
}));

goog.object.set(clojure.core.matrix.protocols.set_2d,"object",(function (m,row,column,v){
var m__$1 = clojure.core.matrix.protocols.clone.call(null,m);
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m__$1,row,column,v);

return m__$1;
}));

goog.object.set(clojure.core.matrix.protocols.set_nd,"object",(function (m,indexes,v){
var m__$1 = clojure.core.matrix.protocols.clone.call(null,m);
clojure.core.matrix.protocols.set_nd_BANG_.call(null,m__$1,indexes,v);

return m__$1;
}));

goog.object.set(clojure.core.matrix.protocols.is_mutable_QMARK_,"object",(function (m){
return true;
}));
goog.object.set(clojure.core.matrix.protocols.PNumerical,"number",true);

goog.object.set(clojure.core.matrix.protocols.numerical_QMARK_,"number",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.PNumerical,"null",true);

goog.object.set(clojure.core.matrix.protocols.numerical_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.PNumerical,"object",true);

goog.object.set(clojure.core.matrix.protocols.numerical_QMARK_,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return false;
} else {
return cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,clojure.core.matrix.protocols.element_seq.call(null,m));
}
}));
goog.object.set(clojure.core.matrix.protocols.PVectorOps,"number",true);

goog.object.set(clojure.core.matrix.protocols.vector_dot,"number",(function (a,b){
return clojure.core.matrix.protocols.pre_scale.call(null,b,a);
}));

goog.object.set(clojure.core.matrix.protocols.length,"number",(function (a){
return Math.abs(a);
}));

goog.object.set(clojure.core.matrix.protocols.length_squared,"number",(function (a){
var a__$1 = a;
return (a__$1 * a__$1);
}));

goog.object.set(clojure.core.matrix.protocols.normalise,"number",(function (a){
var a__$1 = a;
if((a__$1 > 0.0)){
return 1.0;
} else {
if((a__$1 < 0.0)){
return -1.0;
} else {
return 0.0;

}
}
}));

goog.object.set(clojure.core.matrix.protocols.PVectorOps,"object",true);

goog.object.set(clojure.core.matrix.protocols.vector_dot,"object",(function (a,b){
if(((((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a)))) && (((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))))){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b));
} else {
return null;
}
}));

goog.object.set(clojure.core.matrix.protocols.length,"object",(function (a){
return Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a));
}));

goog.object.set(clojure.core.matrix.protocols.length_squared,"object",(function (a){
return clojure.core.matrix.protocols.element_reduce.call(null,a,(function (r,x){
return (r + (x * x));
}),0.0);
}));

goog.object.set(clojure.core.matrix.protocols.normalise,"object",(function (a){
return clojure.core.matrix.protocols.scale.call(null,a,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a))));
}));
goog.object.set(clojure.core.matrix.protocols.PVectorDistance,"number",true);

goog.object.set(clojure.core.matrix.protocols.distance,"number",(function (a,b){
if(typeof b === 'number'){
return Math.abs((b - a));
} else {
return clojure.core.matrix.protocols.distance.call(null,b,a);
}
}));

goog.object.set(clojure.core.matrix.protocols.PVectorDistance,"object",true);

goog.object.set(clojure.core.matrix.protocols.distance,"object",(function (a,b){
return clojure.core.matrix.protocols.length.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,b));
}));
goog.object.set(clojure.core.matrix.protocols.PVectorCross,"object",true);

goog.object.set(clojure.core.matrix.protocols.cross_product,"object",(function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d.call(null,a,(0));
var y1 = clojure.core.matrix.protocols.get_1d.call(null,a,(1));
var z1 = clojure.core.matrix.protocols.get_1d.call(null,a,(2));
var x2 = clojure.core.matrix.protocols.get_1d.call(null,b,(0));
var y2 = clojure.core.matrix.protocols.get_1d.call(null,b,(1));
var z2 = clojure.core.matrix.protocols.get_1d.call(null,b,(2));
return clojure.core.matrix.protocols.construct_matrix.call(null,a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y1 * z2) - (z1 * y2)),((z1 * x2) - (x1 * z2)),((x1 * y2) - (y1 * x2))], null));
}));

goog.object.set(clojure.core.matrix.protocols.cross_product_BANG_,"object",(function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d.call(null,a,(0));
var y1 = clojure.core.matrix.protocols.get_1d.call(null,a,(1));
var z1 = clojure.core.matrix.protocols.get_1d.call(null,a,(2));
var x2 = clojure.core.matrix.protocols.get_1d.call(null,b,(0));
var y2 = clojure.core.matrix.protocols.get_1d.call(null,b,(1));
var z2 = clojure.core.matrix.protocols.get_1d.call(null,b,(2));
clojure.core.matrix.protocols.set_1d_BANG_.call(null,a,(0),((y1 * z2) - (z1 * y2)));

clojure.core.matrix.protocols.set_1d_BANG_.call(null,a,(1),((z1 * x2) - (x1 * z2)));

clojure.core.matrix.protocols.set_1d_BANG_.call(null,a,(2),((x1 * y2) - (y1 * x2)));

return a;
}));
goog.object.set(clojure.core.matrix.protocols.PMutableVectorOps,"object",true);

goog.object.set(clojure.core.matrix.protocols.normalise_BANG_,"object",(function (a){
return clojure.core.matrix.protocols.scale_BANG_.call(null,a,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a))));
}));
goog.object.set(clojure.core.matrix.protocols.PAssignment,"object",true);

goog.object.set(clojure.core.matrix.protocols.assign_BANG_,"object",(function (m,x){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if(((0) === dims)){
return clojure.core.matrix.protocols.set_0d_BANG_.call(null,m,clojure.core.matrix.protocols.get_0d.call(null,x));
} else {
if(((1) === dims)){
if((x instanceof cljs.core.ISeq)){
var x__$1 = cljs.core.seq.call(null,x);
var msize = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var i = (0);
var s = cljs.core.seq.call(null,x__$1);
while(true){
if((i >= msize)){
if(s){
throw cljs.core.ex_info.call(null,"Mismatches size of sequence in assign!",cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.first.call(null,s));

var G__19549 = (i + (1));
var G__19550 = cljs.core.next.call(null,s);
i = G__19549;
s = G__19550;
continue;
}
break;
}
} else {
var xdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
var msize = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
if(((0) === xdims)){
var value = clojure.core.matrix.protocols.get_0d.call(null,x);
var n__4607__auto__ = msize;
var i = (0);
while(true){
if((i < n__4607__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,value);

var G__19551 = (i + (1));
i = G__19551;
continue;
} else {
return null;
}
break;
}
} else {
if(((1) === xdims)){
if(cljs.core.not_EQ_.call(null,msize,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,x,(0))))){
throw cljs.core.ex_info.call(null,["Mismatched shapes in assign to array of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,m))," with argument of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,x))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4607__auto__ = msize;
var i = (0);
while(true){
if((i < n__4607__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,clojure.core.matrix.protocols.get_1d.call(null,x,i));

var G__19552 = (i + (1));
i = G__19552;
continue;
} else {
return null;
}
break;
}
} else {
throw cljs.core.ex_info.call(null,"Can't assign! with an argument of higher dimensionality",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
var xdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
if((dims === xdims)){
var xss = clojure.core.matrix.protocols.get_major_slice_seq.call(null,x);
var _ = (function (){var or__4131__auto__ = clojure.core.matrix.protocols.same_shapes_QMARK_.call(null,xss);
if(or__4131__auto__){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,"Inconsistent slice shapes for assign!",cljs.core.PersistentArrayMap.EMPTY);
}
})();
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (xss,_,xdims,dims){
return (function (a,b){
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,b);
});})(xss,_,xdims,dims))
,clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m),xss));
} else {
var seq__19545 = cljs.core.seq.call(null,clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m));
var chunk__19546 = null;
var count__19547 = (0);
var i__19548 = (0);
while(true){
if((i__19548 < count__19547)){
var ms = cljs.core._nth.call(null,chunk__19546,i__19548);
clojure.core.matrix.protocols.assign_BANG_.call(null,ms,x);


var G__19553 = seq__19545;
var G__19554 = chunk__19546;
var G__19555 = count__19547;
var G__19556 = (i__19548 + (1));
seq__19545 = G__19553;
chunk__19546 = G__19554;
count__19547 = G__19555;
i__19548 = G__19556;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__19545);
if(temp__5720__auto__){
var seq__19545__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19545__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__19545__$1);
var G__19557 = cljs.core.chunk_rest.call(null,seq__19545__$1);
var G__19558 = c__4550__auto__;
var G__19559 = cljs.core.count.call(null,c__4550__auto__);
var G__19560 = (0);
seq__19545 = G__19557;
chunk__19546 = G__19558;
count__19547 = G__19559;
i__19548 = G__19560;
continue;
} else {
var ms = cljs.core.first.call(null,seq__19545__$1);
clojure.core.matrix.protocols.assign_BANG_.call(null,ms,x);


var G__19561 = cljs.core.next.call(null,seq__19545__$1);
var G__19562 = null;
var G__19563 = (0);
var G__19564 = (0);
seq__19545 = G__19561;
chunk__19546 = G__19562;
count__19547 = G__19563;
i__19548 = G__19564;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
throw cljs.core.ex_info.call(null,["Can't assign to a non-array object: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.assign_array_BANG_,"object",(function() {
var G__19565 = null;
var G__19565__2 = (function (m,arr){
var alen = cljs.core.long$.call(null,cljs.core.count.call(null,arr));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
var n__4607__auto__ = alen;
var i = (0);
while(true){
if((i < n__4607__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.nth.call(null,arr,i));

var G__19566 = (i + (1));
i = G__19566;
continue;
} else {
return null;
}
break;
}
} else {
return clojure.core.matrix.protocols.assign_array_BANG_.call(null,m,arr,(0),alen);
}
});
var G__19565__4 = (function (m,arr,start,length){
var length__$1 = cljs.core.long$.call(null,length);
var start__$1 = cljs.core.long$.call(null,start);
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
var n__4607__auto__ = length__$1;
var i = (0);
while(true){
if((i < n__4607__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.nth.call(null,arr,(start__$1 + i)));

var G__19567 = (i + (1));
i = G__19567;
continue;
} else {
return null;
}
break;
}
} else {
var ss = cljs.core.seq.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
var skip = cljs.core.long$.call(null,((ss)?clojure.core.matrix.impl.defaults.calc_element_count.call(null,cljs.core.first.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m))):(0)));
var vals__8636__auto__ = cljs.core.seq.call(null,ss);
var i = cljs.core.long$.call(null,(0));
while(true){
if(vals__8636__auto__){
var s = cljs.core.first.call(null,vals__8636__auto__);
clojure.core.matrix.protocols.assign_array_BANG_.call(null,s,arr,(start__$1 + (skip * i)),skip);

var G__19568 = cljs.core.next.call(null,vals__8636__auto__);
var G__19569 = (i + (1));
vals__8636__auto__ = G__19568;
i = G__19569;
continue;
} else {
return null;
}
break;
}
}
});
G__19565 = function(m,arr,start,length){
switch(arguments.length){
case 2:
return G__19565__2.call(this,m,arr);
case 4:
return G__19565__4.call(this,m,arr,start,length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19565.cljs$core$IFn$_invoke$arity$2 = G__19565__2;
G__19565.cljs$core$IFn$_invoke$arity$4 = G__19565__4;
return G__19565;
})()
);
goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"null",true);

goog.object.set(clojure.core.matrix.protocols.assign,"null",(function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce.call(null,m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone.call(null,r);
} else {
return r;
}
}));

goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"number",true);

goog.object.set(clojure.core.matrix.protocols.assign,"number",(function (m,source){
return source;
}));

goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"object",true);

goog.object.set(clojure.core.matrix.protocols.assign,"object",(function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce.call(null,m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone.call(null,r);
} else {
return r;
}
}));
goog.object.set(clojure.core.matrix.protocols.PMutableFill,"object",true);

goog.object.set(clojure.core.matrix.protocols.fill_BANG_,"object",(function (m,value){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,value);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"null",true);

goog.object.set(clojure.core.matrix.protocols.clone,"null",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"number",true);

goog.object.set(clojure.core.matrix.protocols.clone,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"object",true);

goog.object.set(clojure.core.matrix.protocols.clone,"object",(function (m){
return clojure.core.matrix.protocols.construct_matrix.call(null,m,m);
}));
goog.object.set(clojure.core.matrix.protocols.PSparseArray,"object",true);

goog.object.set(clojure.core.matrix.protocols.is_sparse_QMARK_,"object",(function (m){
return false;
}));
goog.object.set(clojure.core.matrix.protocols.PImmutableMatrixConstruction,"null",true);

goog.object.set(clojure.core.matrix.protocols.immutable_matrix,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PImmutableMatrixConstruction,"object",true);

goog.object.set(clojure.core.matrix.protocols.immutable_matrix,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m);
} else {
return m;
}
}));
goog.object.set(clojure.core.matrix.protocols.PZeroCount,"null",true);

goog.object.set(clojure.core.matrix.protocols.zero_count,"null",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.PZeroCount,"number",true);

goog.object.set(clojure.core.matrix.protocols.zero_count,"number",(function (m){
if((m === (0))){
return (1);
} else {
return (0);
}
}));

goog.object.set(clojure.core.matrix.protocols.PZeroCount,"object",true);

goog.object.set(clojure.core.matrix.protocols.zero_count,"object",(function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (acc,e){
if((e === (0))){
return (acc + (1));
} else {
return acc;
}
}),(0));
}));
goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"null",true);

goog.object.set(clojure.core.matrix.protocols.mutable_matrix,"null",(function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"number",true);

goog.object.set(clojure.core.matrix.protocols.mutable_matrix,"number",(function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"object",true);

goog.object.set(clojure.core.matrix.protocols.mutable_matrix,"object",(function (m){
return clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,m);
}));
goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"null",true);

goog.object.set(clojure.core.matrix.protocols.ensure_mutable,"null",(function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"number",true);

goog.object.set(clojure.core.matrix.protocols.ensure_mutable,"number",(function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"object",true);

goog.object.set(clojure.core.matrix.protocols.ensure_mutable,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
return m;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,m);
}
}));
goog.object.set(clojure.core.matrix.protocols.PComputeMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.compute_matrix,"object",(function (m,shape,f){
var m__$1 = clojure.core.matrix.protocols.new_matrix_nd.call(null,m,shape);
return cljs.core.reduce.call(null,((function (m__$1){
return (function (m__$2,ix){
return clojure.core.matrix.protocols.set_nd.call(null,m__$2,ix,cljs.core.apply.call(null,f,ix));
});})(m__$1))
,m__$1,clojure.core.matrix.utils.base_index_seq_for_shape.call(null,shape));
}));
goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"null",true);

goog.object.set(clojure.core.matrix.protocols.dimensionality,"null",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.is_scalar_QMARK_,"null",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.is_vector_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.get_shape,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.dimension_count,"null",(function (m,i){
throw cljs.core.ex_info.call(null,["nil has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"object",true);

goog.object.set(clojure.core.matrix.protocols.dimensionality,"object",(function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,m));
if((n > (0))){
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m,(0)))) + (1));
} else {
return (1);
}
} else {
return (0);

}
}));

goog.object.set(clojure.core.matrix.protocols.is_vector_QMARK_,"object",(function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,m));
return (((n === (0))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m,(0)))))));
} else {
return false;

}
}));

goog.object.set(clojure.core.matrix.protocols.is_scalar_QMARK_,"object",(function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
return false;
} else {
return true;

}
}));

goog.object.set(clojure.core.matrix.protocols.get_shape,"object",(function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
var n = cljs.core.count.call(null,m);
if((n === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
} else {
return cljs.core.cons.call(null,n,clojure.core.matrix.protocols.get_shape.call(null,cljs.core.nth.call(null,m,(0))));
}
} else {
return null;

}
}));

goog.object.set(clojure.core.matrix.protocols.dimension_count,"object",(function (m,i){
var i__$1 = cljs.core.long$.call(null,i);
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
if((i__$1 === (0))){
return cljs.core.count.call(null,m);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.nth.call(null,m,(0)),(i__$1 - (1)));
}
} else {
if(((0) === i__$1)){
return cljs.core.count.call(null,m);
} else {
throw cljs.core.ex_info.call(null,["Can't determine count of dimension ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1)," on Object: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}));

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"number",true);

goog.object.set(clojure.core.matrix.protocols.dimensionality,"number",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.is_scalar_QMARK_,"number",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.is_vector_QMARK_,"number",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.get_shape,"number",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.dimension_count,"number",(function (m,i){
throw cljs.core.ex_info.call(null,["Number has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"string",true);

goog.object.set(clojure.core.matrix.protocols.dimensionality,"string",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.is_scalar_QMARK_,"string",(function (m){
return true;
}));

goog.object.set(clojure.core.matrix.protocols.is_vector_QMARK_,"string",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.get_shape,"string",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.dimension_count,"string",(function (m,i){
throw cljs.core.ex_info.call(null,["String has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (0);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return null;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,i){
var m__$1 = this;
throw cljs.core.ex_info.call(null,["Keyword has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(clojure.core.matrix.protocols.PSameShape,"null",true);

goog.object.set(clojure.core.matrix.protocols.same_shape_QMARK_,"null",(function (a,b){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)));
}));

goog.object.set(clojure.core.matrix.protocols.PSameShape,"string",true);

goog.object.set(clojure.core.matrix.protocols.same_shape_QMARK_,"string",(function (a,b){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)));
}));

goog.object.set(clojure.core.matrix.protocols.PSameShape,"number",true);

goog.object.set(clojure.core.matrix.protocols.same_shape_QMARK_,"number",(function (a,b){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)));
}));

goog.object.set(clojure.core.matrix.protocols.PSameShape,"object",true);

goog.object.set(clojure.core.matrix.protocols.same_shape_QMARK_,"object",(function (a,b){
return clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,clojure.core.matrix.protocols.get_shape.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,b));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"null",true);

goog.object.set(clojure.core.matrix.protocols.trace,"null",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"number",true);

goog.object.set(clojure.core.matrix.protocols.trace,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.inverse,"number",(function (m){
return ((1) / m);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"object",true);

goog.object.set(clojure.core.matrix.protocols.trace,"object",(function (m){
if(((2) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
} else {
throw cljs.core.ex_info.call(null,"Trace requires a 2D matrix",cljs.core.PersistentArrayMap.EMPTY);
}

var rc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var cc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1)));
var dims = Math.min(rc,cc);
var i = (0);
var res = 0.0;
while(true){
if((i >= dims)){
return res;
} else {
var G__19570 = (i + (1));
var G__19571 = (res + clojure.core.matrix.protocols.get_2d.call(null,m,i,i));
i = G__19570;
res = G__19571;
continue;
}
break;
}
}));

goog.object.set(clojure.core.matrix.protocols.determinant,"object",(function (m){
var imp = (function (){var or__4131__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"vectorz","vectorz",1550942815));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,"(let Need to load an implementation which supports determinant, e.g. vectorz-clj",cljs.core.PersistentArrayMap.EMPTY);
}
})();
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp,m);
return clojure.core.matrix.protocols.determinant.call(null,m__$1);
}));

goog.object.set(clojure.core.matrix.protocols.inverse,"object",(function (m){
var imp = (function (){var or__4131__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"vectorz","vectorz",1550942815));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,"Need to load an implementation which supports inverse, e.g. vectorz-clj",cljs.core.PersistentArrayMap.EMPTY);
}
})();
var mm = clojure.core.matrix.protocols.coerce_param.call(null,imp,m);
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.inverse.call(null,mm));
}));
goog.object.set(clojure.core.matrix.protocols.PTranspose,"null",true);

goog.object.set(clojure.core.matrix.protocols.transpose,"null",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PTranspose,"number",true);

goog.object.set(clojure.core.matrix.protocols.transpose,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PTranspose,"object",true);

goog.object.set(clojure.core.matrix.protocols.transpose,"object",(function (m){
return clojure.core.matrix.protocols.coerce_param.call(null,m,(function (){var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var G__19572 = dims;
switch (G__19572) {
case (0):
return m;

break;
case (1):
return m;

break;
case (2):
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m));

break;
default:
return clojure.core.matrix.protocols.transpose_dims.call(null,m,cljs.core.reverse.call(null,cljs.core.range.call(null,dims)));

}
})());
}));
goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"null",true);

goog.object.set(clojure.core.matrix.protocols.transpose_dims,"null",(function (m,ordering){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"number",true);

goog.object.set(clojure.core.matrix.protocols.transpose_dims,"number",(function (m,ordering){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"object",true);

goog.object.set(clojure.core.matrix.protocols.transpose_dims,"object",(function (m,ordering){
return clojure.core.matrix.protocols.transpose_dims.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),ordering);
}));
goog.object.set(clojure.core.matrix.protocols.PTransposeInPlace,"object",true);

goog.object.set(clojure.core.matrix.protocols.transpose_BANG_,"object",(function (m){
var n_19574 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
if(cljs.core.not_EQ_.call(null,n_19574,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1))))){
throw cljs.core.ex_info.call(null,"transpose! requires a quare matrix",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4607__auto___19575 = n_19574;
var i_19576 = (0);
while(true){
if((i_19576 < n__4607__auto___19575)){
var n__4607__auto___19577__$1 = i_19576;
var j_19578 = (0);
while(true){
if((j_19578 < n__4607__auto___19577__$1)){
var t_19579 = clojure.core.matrix.protocols.get_2d.call(null,m,i_19576,j_19578);
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,i_19576,j_19578,clojure.core.matrix.protocols.get_2d.call(null,m,j_19578,i_19576));

clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,j_19578,i_19576,t_19579);

var G__19580 = (j_19578 + (1));
j_19578 = G__19580;
continue;
} else {
}
break;
}

var G__19581 = (i_19576 + (1));
i_19576 = G__19581;
continue;
} else {
}
break;
}

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PRotate,"null",true);

goog.object.set(clojure.core.matrix.protocols.rotate,"null",(function (m,dim,places){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PRotate,"number",true);

goog.object.set(clojure.core.matrix.protocols.rotate,"number",(function (m,dim,places){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PRotate,"object",true);

goog.object.set(clojure.core.matrix.protocols.rotate,"object",(function (m,dim,places){
var dim__$1 = cljs.core.long$.call(null,dim);
var places__$1 = cljs.core.long$.call(null,places);
if((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) <= (0))){
return m;
} else {
if(((0) === dim__$1)){
var ss = clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
var c = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var sh = cljs.core.long$.call(null,(((c > (0)))?cljs.core.long$.call(null,cljs.core.mod.call(null,places__$1,c)):(0)));
if((sh === (0))){
return m;
} else {
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.take_last.call(null,(c - sh),ss),cljs.core.take.call(null,sh,ss)));
}
} else {
return clojure.core.matrix.protocols.rotate.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),dim__$1,places__$1);

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PRotateAll,"null",true);

goog.object.set(clojure.core.matrix.protocols.rotate_all,"null",(function (m,shifts){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PRotateAll,"number",true);

goog.object.set(clojure.core.matrix.protocols.rotate_all,"number",(function (m,shifts){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PRotateAll,"object",true);

goog.object.set(clojure.core.matrix.protocols.rotate_all,"object",(function (m,shifts){
return cljs.core.reduce.call(null,(function (m__$1,p__19582){
var vec__19583 = p__19582;
var dim = cljs.core.nth.call(null,vec__19583,(0),null);
var shift = cljs.core.nth.call(null,vec__19583,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.rotate.call(null,m__$1,dim,shift);
}
}),m,cljs.core.map_indexed.call(null,(function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
}),shifts));
}));
goog.object.set(clojure.core.matrix.protocols.PShift,"object",true);

goog.object.set(clojure.core.matrix.protocols.shift,"object",(function (m,dim,shift){
var shift__$1 = cljs.core.long$.call(null,shift);
var z = clojure.core.matrix.protocols.generic_zero.call(null,m);
var c = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dim));
var sh = cljs.core.vec.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
if((shift__$1 === (0))){
return m;
} else {
if((shift__$1 >= c)){
return clojure.core.matrix.protocols.broadcast_coerce.call(null,m,z);
} else {
if((shift__$1 <= (- c))){
return clojure.core.matrix.protocols.broadcast_coerce.call(null,m,z);
} else {
if((shift__$1 < (0))){
return clojure.core.matrix.protocols.join_along.call(null,clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.construct_matrix.call(null,m,z),cljs.core.assoc.call(null,sh,dim,(- shift__$1))),clojure.core.matrix.protocols.submatrix.call(null,m,cljs.core.map.call(null,cljs.core.vector,cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,sh),(0))),cljs.core.assoc.call(null,sh,dim,(c + shift__$1)))),dim);
} else {
if((shift__$1 > (0))){
return clojure.core.matrix.protocols.join_along.call(null,clojure.core.matrix.protocols.submatrix.call(null,m,cljs.core.map.call(null,cljs.core.vector,cljs.core.assoc.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,sh),(0))),dim,shift__$1),cljs.core.assoc.call(null,sh,dim,(c - shift__$1)))),clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.construct_matrix.call(null,m,z),cljs.core.assoc.call(null,sh,dim,shift__$1)),dim);
} else {
throw cljs.core.ex_info.call(null,"Shouldn't be possible!!",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.shift_all,"object",(function (m,shifts){
return cljs.core.reduce.call(null,(function (m__$1,p__19586){
var vec__19587 = p__19586;
var dim = cljs.core.nth.call(null,vec__19587,(0),null);
var shift = cljs.core.nth.call(null,vec__19587,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.shift.call(null,m__$1,dim,shift);
}
}),m,cljs.core.map_indexed.call(null,(function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
}),shifts));
}));
goog.object.set(clojure.core.matrix.protocols.POrder,"null",true);

goog.object.set(clojure.core.matrix.protocols.order,"null",(function() {
var G__19593 = null;
var G__19593__2 = (function (m,indices){
throw cljs.core.ex_info.call(null,"Can't reorder a scalar nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19593__3 = (function (m,dim,indices){
throw cljs.core.ex_info.call(null,"Can't reorder a scalar nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__19593 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__19593__2.call(this,m,dim);
case 3:
return G__19593__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19593.cljs$core$IFn$_invoke$arity$2 = G__19593__2;
G__19593.cljs$core$IFn$_invoke$arity$3 = G__19593__3;
return G__19593;
})()
);

goog.object.set(clojure.core.matrix.protocols.POrder,"number",true);

goog.object.set(clojure.core.matrix.protocols.order,"number",(function() {
var G__19594 = null;
var G__19594__2 = (function (m,indices){
throw cljs.core.ex_info.call(null,"Can't reorder a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19594__3 = (function (m,dim,indices){
throw cljs.core.ex_info.call(null,"Can't reorder a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
G__19594 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__19594__2.call(this,m,dim);
case 3:
return G__19594__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19594.cljs$core$IFn$_invoke$arity$2 = G__19594__2;
G__19594.cljs$core$IFn$_invoke$arity$3 = G__19594__3;
return G__19594;
})()
);

goog.object.set(clojure.core.matrix.protocols.POrder,"object",true);

goog.object.set(clojure.core.matrix.protocols.order,"object",(function() {
var G__19595 = null;
var G__19595__2 = (function (m,indices){
var mshape = cljs.core.vec.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
var subshape = cljs.core.assoc.call(null,m,(0),(1));
var ss = cljs.core.map.call(null,((function (mshape,subshape){
return (function (p1__19590_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,p1__19590_SHARP_),subshape);
});})(mshape,subshape))
,indices);
return cljs.core.reduce.call(null,((function (mshape,subshape,ss){
return (function (p1__19591_SHARP_,p2__19592_SHARP_){
return clojure.core.matrix.protocols.join.call(null,p1__19591_SHARP_,p2__19592_SHARP_);
});})(mshape,subshape,ss))
,ss);
});
var G__19595__3 = (function (m,dim,indices){
return clojure.core.matrix.protocols.order.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),dim,indices);
});
G__19595 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__19595__2.call(this,m,dim);
case 3:
return G__19595__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19595.cljs$core$IFn$_invoke$arity$2 = G__19595__2;
G__19595.cljs$core$IFn$_invoke$arity$3 = G__19595__3;
return G__19595;
})()
);
/**
 * Outputs a vector containing the rank of array elements, given a sorted sequence of [index value] pairs and a length
 */
clojure.core.matrix.impl.defaults.output_rank = (function clojure$core$matrix$impl$defaults$output_rank(pairs,n){
var dest = cljs.core.object_array.call(null,n);
var i_19596 = cljs.core.long$.call(null,(0));
var pairs_19597__$1 = cljs.core.seq.call(null,pairs);
while(true){
if((i_19596 < n)){
(dest[cljs.core.first.call(null,cljs.core.first.call(null,pairs_19597__$1))] = Long.valueOf(i_19596));

var G__19598 = (i_19596 + (1));
var G__19599 = cljs.core.next.call(null,pairs_19597__$1);
i_19596 = G__19598;
pairs_19597__$1 = G__19599;
continue;
} else {
}
break;
}

return cljs.core.vec.call(null,dest);
});
goog.object.set(clojure.core.matrix.protocols.PIndexRank,"object",true);

goog.object.set(clojure.core.matrix.protocols.index_rank,"object",(function() {
var G__19603 = null;
var G__19603__1 = (function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var G__19601 = dims;
switch (G__19601) {
case (0):
throw cljs.core.ex_info.call(null,"Can't get indexed rank of a scalar value",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m));
return clojure.core.matrix.impl.defaults.output_rank.call(null,cljs.core.sort_by.call(null,cljs.core.second,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,clojure.core.matrix.protocols.element_count.call(null,m)),clojure.core.matrix.protocols.element_seq.call(null,m))),n);

break;
default:
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.index_rank,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));

}
});
var G__19603__2 = (function (m,comp){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var G__19602 = dims;
switch (G__19602) {
case (0):
throw cljs.core.ex_info.call(null,"Can't get indexed rank of a scalar value",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m));
return clojure.core.matrix.impl.defaults.output_rank.call(null,cljs.core.sort_by.call(null,cljs.core.second,comp,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,clojure.core.matrix.protocols.element_count.call(null,m)),clojure.core.matrix.protocols.element_seq.call(null,m))),n);

break;
default:
return cljs.core.mapv.call(null,((function (G__19602,dims){
return (function (p1__19600_SHARP_){
return clojure.core.matrix.protocols.index_rank.call(null,p1__19600_SHARP_,comp);
});})(G__19602,dims))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));

}
});
G__19603 = function(m,comp){
switch(arguments.length){
case 1:
return G__19603__1.call(this,m);
case 2:
return G__19603__2.call(this,m,comp);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19603.cljs$core$IFn$_invoke$arity$1 = G__19603__1;
G__19603.cljs$core$IFn$_invoke$arity$2 = G__19603__2;
return G__19603;
})()
);
goog.object.set(clojure.core.matrix.protocols.PMatrixProducts,"number",true);

goog.object.set(clojure.core.matrix.protocols.inner_product,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.outer_product,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixProducts,"object",true);

goog.object.set(clojure.core.matrix.protocols.inner_product,"object",(function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,a))){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a)))){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,m,a));
} else {
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_add,cljs.core.map.call(null,(function (sl,x){
return clojure.core.matrix.protocols.scale.call(null,sl,x);
}),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));
}
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null),cljs.core.map.call(null,(function (p1__19606_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__19606_SHARP_,a);
}),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));

}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.outer_product,"object",(function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
} else {
return clojure.core.matrix.protocols.element_map.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),(function (x){
return clojure.core.matrix.protocols.pre_scale.call(null,a,x);
}));

}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiply,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_multiply,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.matrix_multiply,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,a))){
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
} else {
throw cljs.core.ex_info.call(null,["Don't know how to multiply number with: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,a))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixMultiply,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_multiply,"object",(function (m,a){
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot.call(null,m,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
var vec__19607 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__19607,(0),null);
var acols = cljs.core.nth.call(null,vec__19607,(1),null);
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,clojure.core.matrix.protocols.reshape.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),arows], null)),a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acols], null));
} else {
if((((mdims === (2))) && ((adims === (1))))){
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m);
var vec__19610 = mshape;
var mrows = cljs.core.nth.call(null,vec__19610,(0),null);
var mcols = cljs.core.nth.call(null,vec__19610,(1),null);
var acount = clojure.core.matrix.protocols.element_count.call(null,a);
if(cljs.core.not_EQ_.call(null,mcols,acount)){
throw cljs.core.ex_info.call(null,["Can't multiply matrix of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mshape)," with a vector of length ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(acount)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,m,clojure.core.matrix.protocols.reshape.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols,(1)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows], null));
} else {
if((((mdims === (2))) && ((adims === (2))))){
var mutable = clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m);
var vec__19613 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__19613,(0),null);
var mcols = cljs.core.nth.call(null,vec__19613,(1),null);
var vec__19616 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__19616,(0),null);
var acols = cljs.core.nth.call(null,vec__19616,(1),null);
var new_m_type = (cljs.core.truth_(mutable)?m:clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"ndarray","ndarray",1659822393)));
var new_m = clojure.core.matrix.protocols.new_matrix.call(null,new_m_type,mrows,acols);
var i_19622 = cljs.core.long$.call(null,(0));
while(true){
if((i_19622 < mrows)){
var j_19623 = cljs.core.long$.call(null,(0));
while(true){
if((j_19623 < acols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_19622,j_19623,(0));

var G__19624 = (j_19623 + (1));
j_19623 = G__19624;
continue;
} else {
}
break;
}

var G__19625 = (i_19622 + (1));
i_19622 = G__19625;
continue;
} else {
}
break;
}


var i_19626 = cljs.core.long$.call(null,(0));
while(true){
if((i_19626 < mrows)){
var j_19627 = cljs.core.long$.call(null,(0));
while(true){
if((j_19627 < acols)){
var k_19628 = cljs.core.long$.call(null,(0));
while(true){
if((k_19628 < mcols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_19626,j_19627,(clojure.core.matrix.protocols.get_2d.call(null,new_m,i_19626,j_19627) + (clojure.core.matrix.protocols.get_2d.call(null,m,i_19626,k_19628) * clojure.core.matrix.protocols.get_2d.call(null,a,k_19628,j_19627))));

var G__19629 = (k_19628 + (1));
k_19628 = G__19629;
continue;
} else {
}
break;
}

var G__19630 = (j_19627 + (1));
j_19627 = G__19630;
continue;
} else {
}
break;
}

var G__19631 = (i_19626 + (1));
i_19626 = G__19631;
continue;
} else {
}
break;
}


return new_m;
} else {
return null;
}
}
}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.element_multiply,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
var vec__19619 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__19619,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__19619,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._STAR_,a__$1);
}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiplyMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_multiply_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,"Can't do mutable multiply on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.matrix_multiply_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,"Can't do mutable multiply on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixMultiplyMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_multiply_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,m,a));
}));

goog.object.set(clojure.core.matrix.protocols.matrix_multiply_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.matrix_multiply.call(null,m,a));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixDivide,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_divide,"number",(function() {
var G__19632 = null;
var G__19632__1 = (function (m){
return ((1) / m);
});
var G__19632__2 = (function (m,a){
return clojure.core.matrix.protocols.pre_scale.call(null,clojure.core.matrix.protocols.element_divide.call(null,a),m);
});
G__19632 = function(m,a){
switch(arguments.length){
case 1:
return G__19632__1.call(this,m);
case 2:
return G__19632__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19632.cljs$core$IFn$_invoke$arity$1 = G__19632__1;
G__19632.cljs$core$IFn$_invoke$arity$2 = G__19632__2;
return G__19632;
})()
);

goog.object.set(clojure.core.matrix.protocols.PMatrixDivide,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_divide,"object",(function() {
var G__19633 = null;
var G__19633__1 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.get_shape.call(null,m))){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.protocols.element_divide);
} else {
throw cljs.core.ex_info.call(null,["Don't know how to take reciprocal of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
var G__19633__2 = (function (m,a){
return clojure.core.matrix.protocols.element_multiply.call(null,m,clojure.core.matrix.protocols.element_divide.call(null,a));
});
G__19633 = function(m,a){
switch(arguments.length){
case 1:
return G__19633__1.call(this,m);
case 2:
return G__19633__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19633.cljs$core$IFn$_invoke$arity$1 = G__19633__1;
G__19633.cljs$core$IFn$_invoke$arity$2 = G__19633__2;
return G__19633;
})()
);
goog.object.set(clojure.core.matrix.protocols.PMatrixDivideMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_divide_BANG_,"number",(function() {
var G__19637 = null;
var G__19637__1 = (function (m){
throw cljs.core.ex_info.call(null,"Can't do mutable divide on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19637__2 = (function (m,a){
throw cljs.core.ex_info.call(null,"Can't do mutable divide on a scalar numer",cljs.core.PersistentArrayMap.EMPTY);
});
G__19637 = function(m,a){
switch(arguments.length){
case 1:
return G__19637__1.call(this,m);
case 2:
return G__19637__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19637.cljs$core$IFn$_invoke$arity$1 = G__19637__1;
G__19637.cljs$core$IFn$_invoke$arity$2 = G__19637__2;
return G__19637;
})()
);

goog.object.set(clojure.core.matrix.protocols.PMatrixDivideMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_divide_BANG_,"object",(function() {
var G__19638 = null;
var G__19638__1 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._SLASH_);
});
var G__19638__2 = (function (m,a){
var vec__19634 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__19634,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__19634,(1),null);
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1,cljs.core._SLASH_,a__$1);
});
G__19638 = function(m,a){
switch(arguments.length){
case 1:
return G__19638__1.call(this,m);
case 2:
return G__19638__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19638.cljs$core$IFn$_invoke$arity$1 = G__19638__1;
G__19638.cljs$core$IFn$_invoke$arity$2 = G__19638__2;
return G__19638;
})()
);
goog.object.set(clojure.core.matrix.protocols.PSummable,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_sum,"number",(function (a){
return a;
}));

goog.object.set(clojure.core.matrix.protocols.PSummable,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_sum,"object",(function (a){
return clojure.core.matrix.protocols.element_reduce.call(null,a,(cljs.core.truth_(clojure.core.matrix.protocols.numerical_QMARK_.call(null,a))?cljs.core._PLUS_:clojure.core.matrix.protocols.matrix_add));
}));
goog.object.set(clojure.core.matrix.protocols.PElementMinMax,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_min,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.element_max,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.element_clamp,"number",(function (m,a,b){
if((!((a <= b)))){
throw cljs.core.ex_info.call(null,["min argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," should be <= max argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((m < a)){
return a;
} else {
if((m > b)){
return b;
} else {
return m;
}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.PElementMinMax,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_min,"object",(function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (best,v){
if(((cljs.core.not.call(null,best)) || ((v < best)))){
return v;
} else {
return best;
}
}),null);
}));

goog.object.set(clojure.core.matrix.protocols.element_max,"object",(function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (best,v){
if(((cljs.core.not.call(null,best)) || ((v > best)))){
return v;
} else {
return best;
}
}),null);
}));

goog.object.set(clojure.core.matrix.protocols.element_clamp,"object",(function (m,a,b){
if((!((a <= b)))){
throw cljs.core.ex_info.call(null,["min argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," should be <= max argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19639_SHARP_){
if((p1__19639_SHARP_ < a)){
return a;
} else {
if((p1__19639_SHARP_ > b)){
return b;
} else {
return p1__19639_SHARP_;
}
}
}));
}
}));
goog.object.set(clojure.core.matrix.protocols.PCompare,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_compare,"number",(function (a,b){
if(typeof b === 'number'){
return cljs.core.long$.call(null,clojure.core.matrix.impl.mathsops.signum.call(null,(a - b)));
} else {
return clojure.core.matrix.protocols.signum.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,b));
}
}));

goog.object.set(clojure.core.matrix.protocols.element_if,"number",(function (m,a,b){
var vec__19667 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,a,b);
var a__$1 = cljs.core.nth.call(null,vec__19667,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__19667,(1),null);
if((m > (0))){
return a__$1;
} else {
return b__$1;
}
}));

goog.object.set(clojure.core.matrix.protocols.element_lt,"number",(function (m,a){
if(typeof a === 'number'){
if((m < a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_gt.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_le,"number",(function (m,a){
if(typeof a === 'number'){
if((m <= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ge.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_gt,"number",(function (m,a){
if(typeof a === 'number'){
if((m > a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_lt.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_ge,"number",(function (m,a){
if(typeof a === 'number'){
if((m >= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_le.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_ne,"number",(function (m,a){
if(typeof a === 'number'){
if(cljs.core.not_EQ_.call(null,m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ne.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_eq,"number",(function (m,a){
if(typeof a === 'number'){
if(cljs.core._EQ_.call(null,m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_eq.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.PCompare,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_compare,"object",(function (a,b){
return clojure.core.matrix.protocols.element_map.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,b),(function (p1__19640_SHARP_){
return cljs.core.long$.call(null,clojure.core.matrix.impl.mathsops.signum.call(null,p1__19640_SHARP_));
}));
}));

goog.object.set(clojure.core.matrix.protocols.element_if,"object",(function (m,a,b){
if(((typeof a === 'number') && (typeof b === 'number'))){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19641_SHARP_){
if((p1__19641_SHARP_ > (0))){
return a;
} else {
return b;
}
}));
} else {
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19642_SHARP_,p2__19643_SHARP_){
if((p1__19642_SHARP_ > (0))){
return a;
} else {
return p2__19643_SHARP_;
}
}),b);
} else {
if(typeof b === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19644_SHARP_,p2__19645_SHARP_){
if((p1__19644_SHARP_ > (0))){
return p2__19645_SHARP_;
} else {
return b;
}
}),a);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19646_SHARP_,p2__19647_SHARP_,p3__19648_SHARP_){
if((p1__19646_SHARP_ > (0))){
return p2__19647_SHARP_;
} else {
return p3__19648_SHARP_;
}
}),a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null));

}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.element_lt,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19649_SHARP_){
if((p1__19649_SHARP_ < a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19650_SHARP_,p2__19651_SHARP_){
if((p1__19650_SHARP_ < p2__19651_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_le,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19652_SHARP_){
if((p1__19652_SHARP_ <= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19653_SHARP_,p2__19654_SHARP_){
if((p1__19653_SHARP_ <= p2__19654_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_gt,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19655_SHARP_){
if((p1__19655_SHARP_ > a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19656_SHARP_,p2__19657_SHARP_){
if((p1__19656_SHARP_ > p2__19657_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_ge,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19658_SHARP_){
if((p1__19658_SHARP_ >= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19659_SHARP_,p2__19660_SHARP_){
if((p1__19659_SHARP_ >= p2__19660_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_ne,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19661_SHARP_){
if((!((p1__19661_SHARP_ === a)))){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19662_SHARP_,p2__19663_SHARP_){
if((!((p1__19662_SHARP_ === p2__19663_SHARP_)))){
return (1);
} else {
return (0);
}
}),a);
}
}));

goog.object.set(clojure.core.matrix.protocols.element_eq,"object",(function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19664_SHARP_){
if((p1__19664_SHARP_ === a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19665_SHARP_,p2__19666_SHARP_){
if((p1__19665_SHARP_ === p2__19666_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));
goog.object.set(clojure.core.matrix.protocols.PAddProduct,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_product,"number",(function (m,a,b){
return clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),m);
}));

goog.object.set(clojure.core.matrix.protocols.PAddProduct,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_product,"object",(function (m,a,b){
return clojure.core.matrix.protocols.matrix_add.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,a,b));
}));
goog.object.set(clojure.core.matrix.protocols.PAddProductMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_product_BANG_,"number",(function (m,a,b){
throw cljs.core.ex_info.call(null,"Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PAddProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_product_BANG_,"object",(function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,a,b));
}));
goog.object.set(clojure.core.matrix.protocols.PAddScaled,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled,"number",(function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.scale.call(null,a,factor),m);
}));

goog.object.set(clojure.core.matrix.protocols.PAddScaled,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled,"object",(function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,m,clojure.core.matrix.protocols.scale.call(null,a,factor));
}));
goog.object.set(clojure.core.matrix.protocols.PAddScaledMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_BANG_,"number",(function (m,a,factor){
throw cljs.core.ex_info.call(null,"Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PAddScaledMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_BANG_,"object",(function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.scale.call(null,a,factor));
}));
goog.object.set(clojure.core.matrix.protocols.PAddScaledProduct,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_product,"number",(function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.scale.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),factor),m);
}));

goog.object.set(clojure.core.matrix.protocols.PAddScaledProduct,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_product,"object",(function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,m,clojure.core.matrix.protocols.scale.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),factor));
}));
goog.object.set(clojure.core.matrix.protocols.PAddScaledProductMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_product_BANG_,"number",(function (m,a,b,factor){
throw cljs.core.ex_info.call(null,"Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PAddScaledProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_scaled_product_BANG_,"object",(function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.scale.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),factor));
}));
goog.object.set(clojure.core.matrix.protocols.PScaleAdd,"object",true);

goog.object.set(clojure.core.matrix.protocols.scale_add_BANG_,"object",(function (m1,a,m2,b,constant){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,m1,a);

if(((typeof b === 'number') && ((b === (0))))){
} else {
clojure.core.matrix.protocols.add_product_BANG_.call(null,m1,m2,b);
}

if(((typeof constant === 'number') && ((constant === (0))))){
} else {
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m1,constant);
}

return m1;
}));
goog.object.set(clojure.core.matrix.protocols.PScaleAdd2,"object",true);

goog.object.set(clojure.core.matrix.protocols.scale_add,"object",(function (m1,a,m2,b,constant){
var r = clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.scale.call(null,m1,a),clojure.core.matrix.protocols.scale.call(null,m2,b));
if((0.0 === constant)){
return r;
} else {
return clojure.core.matrix.protocols.matrix_add.call(null,r,constant);
}
}));
goog.object.set(clojure.core.matrix.protocols.PLerp,"object",true);

goog.object.set(clojure.core.matrix.protocols.lerp,"object",(function (a,b,factor){
return clojure.core.matrix.protocols.scale_add.call(null,a,(1.0 - factor),b,factor,0.0);
}));

goog.object.set(clojure.core.matrix.protocols.lerp_BANG_,"object",(function (a,b,factor){
return clojure.core.matrix.protocols.scale_add_BANG_.call(null,a,(1.0 - factor),b,factor,0.0);
}));
goog.object.set(clojure.core.matrix.protocols.PAddInnerProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_inner_product_BANG_,"object",(function() {
var G__19670 = null;
var G__19670__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));
});
var G__19670__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b),factor);
});
G__19670 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__19670__3.call(this,m,a,b);
case 4:
return G__19670__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19670.cljs$core$IFn$_invoke$arity$3 = G__19670__3;
G__19670.cljs$core$IFn$_invoke$arity$4 = G__19670__4;
return G__19670;
})()
);
goog.object.set(clojure.core.matrix.protocols.PAddOuterProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_outer_product_BANG_,"object",(function() {
var G__19671 = null;
var G__19671__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.outer_product.call(null,a,b));
});
var G__19671__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_.call(null,m,clojure.core.matrix.protocols.outer_product.call(null,a,b),factor);
});
G__19671 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__19671__3.call(this,m,a,b);
case 4:
return G__19671__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19671.cljs$core$IFn$_invoke$arity$3 = G__19671__3;
G__19671.cljs$core$IFn$_invoke$arity$4 = G__19671__4;
return G__19671;
})()
);
goog.object.set(clojure.core.matrix.protocols.PSetInnerProductMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_inner_product_BANG_,"object",(function() {
var G__19672 = null;
var G__19672__3 = (function (m,a,b){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));
});
var G__19672__4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));

return clojure.core.matrix.protocols.scale_BANG_.call(null,m,factor);
});
G__19672 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__19672__3.call(this,m,a,b);
case 4:
return G__19672__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19672.cljs$core$IFn$_invoke$arity$3 = G__19672__3;
G__19672.cljs$core$IFn$_invoke$arity$4 = G__19672__4;
return G__19672;
})()
);
goog.object.set(clojure.core.matrix.protocols.PTypeInfo,"null",true);

goog.object.set(clojure.core.matrix.protocols.element_type,"null",(function (a){
return Object;
}));

goog.object.set(clojure.core.matrix.protocols.PTypeInfo,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_type,"object",(function (a){
if((Array === a.constructor)){
return cljs.core.type.call(null,a).getComponentType();
} else {
return Object;
}
}));
goog.object.set(clojure.core.matrix.protocols.PGenericValues,"object",true);

goog.object.set(clojure.core.matrix.protocols.generic_zero,"object",(function (m){
return (0);
}));

goog.object.set(clojure.core.matrix.protocols.generic_one,"object",(function (m){
return (1);
}));

goog.object.set(clojure.core.matrix.protocols.generic_value,"object",(function (m){
return (0);
}));
cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_.call(null,m__$1)){
return clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a);
} else {
return m__$1.call(null,a);
}
});

cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_.call(null,m__$1)){
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a));
} else {
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,m__$1.call(null,a));
}
});

goog.object.set(clojure.core.matrix.protocols.PVectorTransform,"object",true);

goog.object.set(clojure.core.matrix.protocols.vector_transform,"object",(function (m,a){
if(((2) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
return clojure.core.matrix.protocols.matrix_multiply.call(null,m,a);
} else {
throw cljs.core.ex_info.call(null,["Don't know how to transform using: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}));

goog.object.set(clojure.core.matrix.protocols.vector_transform_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.vector_transform.call(null,m,a));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixScaling,"number",true);

goog.object.set(clojure.core.matrix.protocols.scale,"number",(function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale,"number",(function (m,a){
if(typeof a === 'number'){
return (a * m);
} else {
return clojure.core.matrix.protocols.scale.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixScaling,"object",true);

goog.object.set(clojure.core.matrix.protocols.scale,"object",(function (m,a){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19673_SHARP_){
return (p1__19673_SHARP_ * a);
}));
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale,"object",(function (m,a){
return clojure.core.matrix.protocols.element_map.call(null,m,cljs.core.partial.call(null,cljs.core._STAR_,a));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixMutableScaling,"number",true);

goog.object.set(clojure.core.matrix.protocols.scale_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,["Can't scale! a numeric value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,["Can't pre-scale! a numeric value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixMutableScaling,"object",true);

goog.object.set(clojure.core.matrix.protocols.scale_BANG_,"object",(function (m,a){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__19674_SHARP_){
return (p1__19674_SHARP_ * a);
}));

return m;
}));

goog.object.set(clojure.core.matrix.protocols.pre_scale_BANG_,"object",(function (m,a){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core.partial.call(null,cljs.core._STAR_,a));

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixAdd,"number",true);

goog.object.set(clojure.core.matrix.protocols.matrix_add,"number",(function (m,a){
if(typeof a === 'number'){
return (m + a);
} else {
return clojure.core.matrix.protocols.matrix_add.call(null,a,m);
}
}));

goog.object.set(clojure.core.matrix.protocols.matrix_sub,"number",(function (m,a){
if(typeof a === 'number'){
return (m - a);
} else {
return clojure.core.matrix.protocols.negate.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,m));
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixAdd,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_add,"object",(function (m,a){
var vec__19675 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__19675,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__19675,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._PLUS_,a__$1);
}));

goog.object.set(clojure.core.matrix.protocols.matrix_sub,"object",(function (m,a){
var vec__19678 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__19678,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__19678,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._,a__$1);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixAddMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.matrix_add_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,"Can't do mutable add! on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.matrix_sub_BANG_,"number",(function (m,a){
throw cljs.core.ex_info.call(null,"Can't do mutable sub! on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixAddMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_add_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._PLUS_,a);
}));

goog.object.set(clojure.core.matrix.protocols.matrix_sub_BANG_,"object",(function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._,a);
}));
goog.object.set(clojure.core.matrix.protocols.PNegation,"null",true);

goog.object.set(clojure.core.matrix.protocols.negate,"null",(function (m){
throw cljs.core.ex_info.call(null,"Can't negate nil!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PNegation,"number",true);

goog.object.set(clojure.core.matrix.protocols.negate,"number",(function (m){
return (- m);
}));

goog.object.set(clojure.core.matrix.protocols.PNegation,"object",true);

goog.object.set(clojure.core.matrix.protocols.negate,"object",(function (m){
return clojure.core.matrix.protocols.scale.call(null,m,-1.0);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"null",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals,"null",(function (a,b){
throw cljs.core.ex_info.call(null,"nil is not a valid numerical value in equality testing",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"number",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals,"number",(function (a,b){
if(typeof b === 'number'){
return (a === b);
} else {
if(((0) === clojure.core.matrix.protocols.dimensionality.call(null,b))){
return clojure.core.matrix.protocols.matrix_equals.call(null,b,a);
} else {
return false;

}
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals,"object",(function (a,b){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b))){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a)))){
return (clojure.core.matrix.protocols.get_0d.call(null,a) === (function (){var x__8671__auto__ = b;
if(typeof x__8671__auto__ === 'number'){
return x__8671__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__8671__auto__);

}
})());
} else {
return cljs.core.not_any_QMARK_.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs.core._EQ__EQ_,clojure.core.matrix.protocols.element_seq.call(null,a),clojure.core.matrix.protocols.element_seq.call(null,b)));
}
} else {
return false;

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PValueEquality,"null",true);

goog.object.set(clojure.core.matrix.protocols.value_equals,"null",(function (a,b){
return (((b == null)) || (((((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))) && ((clojure.core.matrix.protocols.get_0d.call(null,b) == null)))));
}));

goog.object.set(clojure.core.matrix.protocols.PValueEquality,"number",true);

goog.object.set(clojure.core.matrix.protocols.value_equals,"number",(function (a,b){
return ((((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))) && ((a === clojure.core.matrix.protocols.get_0d.call(null,b))));
}));

goog.object.set(clojure.core.matrix.protocols.PValueEquality,"object",true);

goog.object.set(clojure.core.matrix.protocols.value_equals,"object",(function (a,b){
var and__4120__auto__ = clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,cljs.core._EQ_,clojure.core.matrix.protocols.element_seq.call(null,a),clojure.core.matrix.protocols.element_seq.call(null,b)));
} else {
return and__4120__auto__;
}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"null",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals_epsilon,"null",(function (a,b,eps){
throw cljs.core.ex_info.call(null,"nil is not a valid numerical value in equality testing",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"number",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals_epsilon,"number",(function (a,b,eps){
if(typeof b === 'number'){
return (Math.abs((a - b)) <= eps);
} else {
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))){
return (Math.abs((a - clojure.core.matrix.protocols.get_0d.call(null,b))) <= eps);
} else {
return false;

}
}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"object",true);

goog.object.set(clojure.core.matrix.protocols.matrix_equals_epsilon,"object",(function (a,b,eps){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b))){
var eps__$1 = eps;
return cljs.core.every_QMARK_.call(null,((function (eps__$1){
return (function (p1__19681_SHARP_){
return (Math.abs(p1__19681_SHARP_) <= eps__$1);
});})(eps__$1))
,cljs.core.map.call(null,cljs.core._,clojure.core.matrix.protocols.element_seq.call(null,a),clojure.core.matrix.protocols.element_seq.call(null,b)));
} else {
return false;

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PDoubleArrayOutput,"number",true);

goog.object.set(clojure.core.matrix.protocols.to_double_array,"number",(function (m){
var arr = cljs.core.double_array.call(null,(1));
(arr[(0)] = m);

return arr;
}));

goog.object.set(clojure.core.matrix.protocols.as_double_array,"number",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PDoubleArrayOutput,"object",true);

goog.object.set(clojure.core.matrix.protocols.to_double_array,"object",(function (m){
return cljs.core.double_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.as_double_array,"object",(function (m){
return null;
}));
goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"null",true);

goog.object.set(clojure.core.matrix.protocols.to_object_array,"null",(function (m){
var arr = cljs.core.object_array.call(null,(1));
return arr;
}));

goog.object.set(clojure.core.matrix.protocols.as_object_array,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"number",true);

goog.object.set(clojure.core.matrix.protocols.to_object_array,"number",(function (m){
var arr = cljs.core.object_array.call(null,(1));
(arr[(0)] = m);

return arr;
}));

goog.object.set(clojure.core.matrix.protocols.as_object_array,"number",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"object",true);

goog.object.set(clojure.core.matrix.protocols.to_object_array,"object",(function (m){
return cljs.core.object_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.as_object_array,"object",(function (m){
return null;
}));
goog.object.set(clojure.core.matrix.protocols.PRowOperations,"object",true);

goog.object.set(clojure.core.matrix.protocols.swap_rows,"object",(function (m,i,j){
return clojure.core.matrix.protocols.swap_rows.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),i,j);
}));

goog.object.set(clojure.core.matrix.protocols.multiply_row,"object",(function (m,i,k){
return clojure.core.matrix.protocols.multiply_row.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),i,k);
}));

goog.object.set(clojure.core.matrix.protocols.add_row,"object",(function (m,i,j,k){
return clojure.core.matrix.protocols.add_row.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),i,j,k);
}));
goog.object.set(clojure.core.matrix.protocols.PRowSetting,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_row,"object",(function (m,i,row){
var svec = cljs.core.vec.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
var row__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,svec.call(null,(0)),row);
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.assoc.call(null,svec,i,row__$1));
}));

goog.object.set(clojure.core.matrix.protocols.set_row_BANG_,"object",(function (m,i,row){
var sl = clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
var row__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,sl,row);
clojure.core.matrix.protocols.assign_BANG_.call(null,sl,row__$1);

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PColumnSetting,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_column,"object",(function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column.call(null,m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,scol,column);
var indices = cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,column__$1,(0)));
var new_m = cljs.core.reduce.call(null,((function (scol,column__$1,indices){
return (function (acc,idx){
return clojure.core.matrix.protocols.set_2d.call(null,acc,idx,i,clojure.core.matrix.protocols.get_1d.call(null,column__$1,idx));
});})(scol,column__$1,indices))
,m,indices);
return clojure.core.matrix.protocols.coerce_param.call(null,m,new_m);
}));

goog.object.set(clojure.core.matrix.protocols.set_column_BANG_,"object",(function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column.call(null,m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,scol,column);
var n__4607__auto__ = clojure.core.matrix.protocols.dimension_count.call(null,column__$1,(0));
var j = (0);
while(true){
if((j < n__4607__auto__)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,j,i,clojure.core.matrix.protocols.get_1d.call(null,column__$1,j));

var G__19682 = (j + (1));
j = G__19682;
continue;
} else {
return null;
}
break;
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceMap,"object",true);

goog.object.set(clojure.core.matrix.protocols.slice_map,"object",(function() {
var G__19683 = null;
var G__19683__2 = (function (m,f){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,cljs.core.mapv.call(null,f,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));
});
var G__19683__3 = (function (m,f,a){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,cljs.core.mapv.call(null,f,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a)));
});
var G__19683__4 = (function (m,f,a,more){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,cljs.core.apply.call(null,cljs.core.mapv,f,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a),cljs.core.map.call(null,clojure.core.matrix.protocols.get_major_slice_seq,more)));
});
G__19683 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19683__2.call(this,m,f);
case 3:
return G__19683__3.call(this,m,f,a);
case 4:
return G__19683__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19683.cljs$core$IFn$_invoke$arity$2 = G__19683__2;
G__19683.cljs$core$IFn$_invoke$arity$3 = G__19683__3;
G__19683.cljs$core$IFn$_invoke$arity$4 = G__19683__4;
return G__19683;
})()
);
goog.object.set(clojure.core.matrix.protocols.PFilterSlices,"object",true);

goog.object.set(clojure.core.matrix.protocols.filter_slices,"object",(function (m,f){
var slcs = cljs.core.filterv.call(null,f,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
if(cljs.core.seq.call(null,slcs)){
return slcs;
} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PAddEmap,"object",true);

goog.object.set(clojure.core.matrix.protocols.add_emap_BANG_,"object",(function() {
var G__19684 = null;
var G__19684__3 = (function (dest,f,a){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f));
});
var G__19684__4 = (function (dest,f,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f,b));
});
var G__19684__5 = (function (dest,f,a,b,more){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f,b,more));
});
G__19684 = function(dest,f,a,b,more){
switch(arguments.length){
case 3:
return G__19684__3.call(this,dest,f,a);
case 4:
return G__19684__4.call(this,dest,f,a,b);
case 5:
return G__19684__5.call(this,dest,f,a,b,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19684.cljs$core$IFn$_invoke$arity$3 = G__19684__3;
G__19684.cljs$core$IFn$_invoke$arity$4 = G__19684__4;
G__19684.cljs$core$IFn$_invoke$arity$5 = G__19684__5;
return G__19684;
})()
);
goog.object.set(clojure.core.matrix.protocols.PSetEmap,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_emap_BANG_,"object",(function() {
var G__19685 = null;
var G__19685__3 = (function (dest,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f));
});
var G__19685__4 = (function (dest,f,a,b){
return clojure.core.matrix.protocols.assign_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f,b));
});
var G__19685__5 = (function (dest,f,a,b,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,dest,clojure.core.matrix.protocols.element_map.call(null,a,f,b,more));
});
G__19685 = function(dest,f,a,b,more){
switch(arguments.length){
case 3:
return G__19685__3.call(this,dest,f,a);
case 4:
return G__19685__4.call(this,dest,f,a,b);
case 5:
return G__19685__5.call(this,dest,f,a,b,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19685.cljs$core$IFn$_invoke$arity$3 = G__19685__3;
G__19685.cljs$core$IFn$_invoke$arity$4 = G__19685__4;
G__19685.cljs$core$IFn$_invoke$arity$5 = G__19685__5;
return G__19685;
})()
);
goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_seq,"number",(function (m){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[m],null));
}));

goog.object.set(clojure.core.matrix.protocols.element_map,"number",(function() {
var G__19696 = null;
var G__19696__2 = (function (m,f){
return f.call(null,m);
});
var G__19696__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.call(null,a,(function (p1__19686_SHARP_){
return f.call(null,m,p1__19686_SHARP_);
}));
});
var G__19696__4 = (function (m,f,a,more){
var temp__5718__auto__ = cljs.core.next.call(null,more);
if(temp__5718__auto__){
var moremore = temp__5718__auto__;
return clojure.core.matrix.protocols.element_map.call(null,a,((function (moremore,temp__5718__auto__){
return (function() { 
var G__19697__delegate = function (p1__19687_SHARP_,p2__19688_SHARP_,rest__19689_SHARP_){
return cljs.core.apply.call(null,f,m,p1__19687_SHARP_,p2__19688_SHARP_,rest__19689_SHARP_);
};
var G__19697 = function (p1__19687_SHARP_,p2__19688_SHARP_,var_args){
var rest__19689_SHARP_ = null;
if (arguments.length > 2) {
var G__19698__i = 0, G__19698__a = new Array(arguments.length -  2);
while (G__19698__i < G__19698__a.length) {G__19698__a[G__19698__i] = arguments[G__19698__i + 2]; ++G__19698__i;}
  rest__19689_SHARP_ = new cljs.core.IndexedSeq(G__19698__a,0,null);
} 
return G__19697__delegate.call(this,p1__19687_SHARP_,p2__19688_SHARP_,rest__19689_SHARP_);};
G__19697.cljs$lang$maxFixedArity = 2;
G__19697.cljs$lang$applyTo = (function (arglist__19699){
var p1__19687_SHARP_ = cljs.core.first(arglist__19699);
arglist__19699 = cljs.core.next(arglist__19699);
var p2__19688_SHARP_ = cljs.core.first(arglist__19699);
var rest__19689_SHARP_ = cljs.core.rest(arglist__19699);
return G__19697__delegate(p1__19687_SHARP_,p2__19688_SHARP_,rest__19689_SHARP_);
});
G__19697.cljs$core$IFn$_invoke$arity$variadic = G__19697__delegate;
return G__19697;
})()
;})(moremore,temp__5718__auto__))
,cljs.core.first.call(null,more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.call(null,a,((function (temp__5718__auto__){
return (function (p1__19690_SHARP_,p2__19691_SHARP_){
return f.call(null,m,p1__19690_SHARP_,p2__19691_SHARP_);
});})(temp__5718__auto__))
,cljs.core.first.call(null,more));
}
});
G__19696 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19696__2.call(this,m,f);
case 3:
return G__19696__3.call(this,m,f,a);
case 4:
return G__19696__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19696.cljs$core$IFn$_invoke$arity$2 = G__19696__2;
G__19696.cljs$core$IFn$_invoke$arity$3 = G__19696__3;
G__19696.cljs$core$IFn$_invoke$arity$4 = G__19696__4;
return G__19696;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_BANG_,"number",(function() {
var G__19700 = null;
var G__19700__2 = (function (m,f){
throw cljs.core.ex_info.call(null,"java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19700__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,"java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19700__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,"java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
G__19700 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19700__2.call(this,m,f);
case 3:
return G__19700__3.call(this,m,f,a);
case 4:
return G__19700__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19700.cljs$core$IFn$_invoke$arity$2 = G__19700__2;
G__19700.cljs$core$IFn$_invoke$arity$3 = G__19700__3;
G__19700.cljs$core$IFn$_invoke$arity$4 = G__19700__4;
return G__19700;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_reduce,"number",(function() {
var G__19701 = null;
var G__19701__2 = (function (m,f){
return m;
});
var G__19701__3 = (function (m,f,init){
return f.call(null,init,m);
});
G__19701 = function(m,f,init){
switch(arguments.length){
case 2:
return G__19701__2.call(this,m,f);
case 3:
return G__19701__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19701.cljs$core$IFn$_invoke$arity$2 = G__19701__2;
G__19701.cljs$core$IFn$_invoke$arity$3 = G__19701__3;
return G__19701;
})()
);

goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_seq,"object",(function (m){
var c = cljs.core.type.call(null,m);
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims > (1))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
} else {
if(cljs.core.seq_QMARK_.call(null,m)){
return m;
} else {
if(((0) === dims)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.core.matrix.protocols.get_0d.call(null,m)],null));
} else {
if(cljs.core._EQ_.call(null,Array,c)){
return m;
} else {
if(((1) === dims)){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m);
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
} else {
throw cljs.core.ex_info.call(null,["Don't know how to create element-seq from: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}
}));

goog.object.set(clojure.core.matrix.protocols.element_map,"object",(function() {
var G__19702 = null;
var G__19702__2 = (function (m,f){
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,clojure.core.matrix.impl.common.mapmatrix.call(null,f,m));
});
var G__19702__3 = (function (m,f,a){
var vec__19693 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__19693,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__19693,(1),null);
return clojure.core.matrix.impl.common.construct_matrix.call(null,m__$1,clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$1,a__$1));
});
var G__19702__4 = (function (m,f,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
var shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__4131__auto__ = clojure.core.matrix.protocols.common_shape.call(null,shapes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,["Attempt to do element map with incompatible shapes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.call(null,((function (arrays,shapes,sh){
return (function (p1__19692_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__19692_SHARP_,sh);
});})(arrays,shapes,sh))
,arrays);
return clojure.core.matrix.impl.common.construct_matrix.call(null,m,cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1));
});
G__19702 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19702__2.call(this,m,f);
case 3:
return G__19702__3.call(this,m,f,a);
case 4:
return G__19702__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19702.cljs$core$IFn$_invoke$arity$2 = G__19702__2;
G__19702.cljs$core$IFn$_invoke$arity$3 = G__19702__3;
G__19702.cljs$core$IFn$_invoke$arity$4 = G__19702__4;
return G__19702;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_BANG_,"object",(function() {
var G__19703 = null;
var G__19703__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f));
});
var G__19703__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a));
});
var G__19703__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a,more));
});
G__19703 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19703__2.call(this,m,f);
case 3:
return G__19703__3.call(this,m,f,a);
case 4:
return G__19703__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19703.cljs$core$IFn$_invoke$arity$2 = G__19703__2;
G__19703.cljs$core$IFn$_invoke$arity$3 = G__19703__3;
G__19703.cljs$core$IFn$_invoke$arity$4 = G__19703__4;
return G__19703;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_reduce,"object",(function() {
var G__19704 = null;
var G__19704__2 = (function (m,f){
return cljs.core.reduce.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m));
});
var G__19704__3 = (function (m,f,init){
return cljs.core.reduce.call(null,f,init,clojure.core.matrix.protocols.element_seq.call(null,m));
});
G__19704 = function(m,f,init){
switch(arguments.length){
case 2:
return G__19704__2.call(this,m,f);
case 3:
return G__19704__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19704.cljs$core$IFn$_invoke$arity$2 = G__19704__2;
G__19704.cljs$core$IFn$_invoke$arity$3 = G__19704__3;
return G__19704;
})()
);

goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"null",true);

goog.object.set(clojure.core.matrix.protocols.element_seq,"null",(function (m){
return cljs.core.list(null);
}));

goog.object.set(clojure.core.matrix.protocols.element_map,"null",(function() {
var G__19705 = null;
var G__19705__2 = (function (m,f){
return f.call(null,null);
});
var G__19705__3 = (function (m,f,a){
return f.call(null,null,a);
});
var G__19705__4 = (function (m,f,a,more){
return cljs.core.apply.call(null,f,null,a,more);
});
G__19705 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19705__2.call(this,m,f);
case 3:
return G__19705__3.call(this,m,f,a);
case 4:
return G__19705__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19705.cljs$core$IFn$_invoke$arity$2 = G__19705__2;
G__19705.cljs$core$IFn$_invoke$arity$3 = G__19705__3;
G__19705.cljs$core$IFn$_invoke$arity$4 = G__19705__4;
return G__19705;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_BANG_,"null",(function() {
var G__19706 = null;
var G__19706__2 = (function (m,f){
throw cljs.core.ex_info.call(null,"Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19706__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,"Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19706__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,"Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__19706 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19706__2.call(this,m,f);
case 3:
return G__19706__3.call(this,m,f,a);
case 4:
return G__19706__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19706.cljs$core$IFn$_invoke$arity$2 = G__19706__2;
G__19706.cljs$core$IFn$_invoke$arity$3 = G__19706__3;
G__19706.cljs$core$IFn$_invoke$arity$4 = G__19706__4;
return G__19706;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_reduce,"null",(function() {
var G__19707 = null;
var G__19707__2 = (function (m,f){
return null;
});
var G__19707__3 = (function (m,f,init){
return f.call(null,init,null);
});
G__19707 = function(m,f,init){
switch(arguments.length){
case 2:
return G__19707__2.call(this,m,f);
case 3:
return G__19707__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19707.cljs$core$IFn$_invoke$arity$2 = G__19707__2;
G__19707.cljs$core$IFn$_invoke$arity$3 = G__19707__3;
return G__19707;
})()
);

cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count.call(null,m__$1))){
return null;
} else {
if((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m__$1,(0)))) >= (1))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1);
} else {
return m__$1;

}
}
});
clojure.core.matrix.impl.defaults.cart = (function clojure$core$matrix$impl$defaults$cart(colls){
if(cljs.core.empty_QMARK_.call(null,colls)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
var iter__4523__auto__ = (function clojure$core$matrix$impl$defaults$cart_$_iter__19708(s__19709){
return (new cljs.core.LazySeq(null,(function (){
var s__19709__$1 = s__19709;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19709__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__19709__$1,x,xs__6277__auto__,temp__5720__auto__){
return (function clojure$core$matrix$impl$defaults$cart_$_iter__19708_$_iter__19710(s__19711){
return (new cljs.core.LazySeq(null,((function (s__19709__$1,x,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__19711__$1 = s__19711;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__19711__$1);
if(temp__5720__auto____$1){
var s__19711__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19711__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19711__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19713 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19712 = (0);
while(true){
if((i__19712 < size__4522__auto__)){
var more = cljs.core._nth.call(null,c__4521__auto__,i__19712);
cljs.core.chunk_append.call(null,b__19713,cljs.core.cons.call(null,x,more));

var G__19714 = (i__19712 + (1));
i__19712 = G__19714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19713),clojure$core$matrix$impl$defaults$cart_$_iter__19708_$_iter__19710.call(null,cljs.core.chunk_rest.call(null,s__19711__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19713),null);
}
} else {
var more = cljs.core.first.call(null,s__19711__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,x,more),clojure$core$matrix$impl$defaults$cart_$_iter__19708_$_iter__19710.call(null,cljs.core.rest.call(null,s__19711__$2)));
}
} else {
return null;
}
break;
}
});})(s__19709__$1,x,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__19709__$1,x,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,clojure.core.matrix.impl.defaults.cart.call(null,cljs.core.rest.call(null,colls))));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,clojure$core$matrix$impl$defaults$cart_$_iter__19708.call(null,cljs.core.rest.call(null,s__19709__$1)));
} else {
var G__19715 = cljs.core.rest.call(null,s__19709__$1);
s__19709__$1 = G__19715;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.first.call(null,colls));
}
});
clojure.core.matrix.impl.defaults.indices_seq = (function clojure$core$matrix$impl$defaults$indices_seq(m){
return clojure.core.matrix.impl.defaults.cart.call(null,cljs.core.map.call(null,cljs.core.range,clojure.core.matrix.protocols.get_shape.call(null,m)));
});
goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed,"number",(function() {
var G__19727 = null;
var G__19727__2 = (function (m,f){
return f.call(null,cljs.core.PersistentVector.EMPTY,m);
});
var G__19727__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.call(null,a,(function (p1__19716_SHARP_){
return f.call(null,cljs.core.PersistentVector.EMPTY,m,p1__19716_SHARP_);
}));
});
var G__19727__4 = (function (m,f,a,more){
var temp__5718__auto__ = cljs.core.next.call(null,more);
if(temp__5718__auto__){
var moremore = temp__5718__auto__;
return clojure.core.matrix.protocols.element_map.call(null,a,((function (moremore,temp__5718__auto__){
return (function() { 
var G__19728__delegate = function (p1__19717_SHARP_,p2__19718_SHARP_,rest__19719_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.PersistentVector.EMPTY,m,p1__19717_SHARP_,p2__19718_SHARP_,rest__19719_SHARP_);
};
var G__19728 = function (p1__19717_SHARP_,p2__19718_SHARP_,var_args){
var rest__19719_SHARP_ = null;
if (arguments.length > 2) {
var G__19729__i = 0, G__19729__a = new Array(arguments.length -  2);
while (G__19729__i < G__19729__a.length) {G__19729__a[G__19729__i] = arguments[G__19729__i + 2]; ++G__19729__i;}
  rest__19719_SHARP_ = new cljs.core.IndexedSeq(G__19729__a,0,null);
} 
return G__19728__delegate.call(this,p1__19717_SHARP_,p2__19718_SHARP_,rest__19719_SHARP_);};
G__19728.cljs$lang$maxFixedArity = 2;
G__19728.cljs$lang$applyTo = (function (arglist__19730){
var p1__19717_SHARP_ = cljs.core.first(arglist__19730);
arglist__19730 = cljs.core.next(arglist__19730);
var p2__19718_SHARP_ = cljs.core.first(arglist__19730);
var rest__19719_SHARP_ = cljs.core.rest(arglist__19730);
return G__19728__delegate(p1__19717_SHARP_,p2__19718_SHARP_,rest__19719_SHARP_);
});
G__19728.cljs$core$IFn$_invoke$arity$variadic = G__19728__delegate;
return G__19728;
})()
;})(moremore,temp__5718__auto__))
,cljs.core.first.call(null,more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.call(null,a,((function (temp__5718__auto__){
return (function (p1__19720_SHARP_,p2__19721_SHARP_){
return f.call(null,cljs.core.PersistentVector.EMPTY,m,p1__19720_SHARP_,p2__19721_SHARP_);
});})(temp__5718__auto__))
,cljs.core.first.call(null,more));
}
});
G__19727 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19727__2.call(this,m,f);
case 3:
return G__19727__3.call(this,m,f,a);
case 4:
return G__19727__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19727.cljs$core$IFn$_invoke$arity$2 = G__19727__2;
G__19727.cljs$core$IFn$_invoke$arity$3 = G__19727__3;
G__19727.cljs$core$IFn$_invoke$arity$4 = G__19727__4;
return G__19727;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed_BANG_,"number",(function() {
var G__19731 = null;
var G__19731__2 = (function (m,f){
throw cljs.core.ex_info.call(null,"java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19731__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,"java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19731__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,"java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
G__19731 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19731__2.call(this,m,f);
case 3:
return G__19731__3.call(this,m,f,a);
case 4:
return G__19731__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19731.cljs$core$IFn$_invoke$arity$2 = G__19731__2;
G__19731.cljs$core$IFn$_invoke$arity$3 = G__19731__3;
G__19731.cljs$core$IFn$_invoke$arity$4 = G__19731__4;
return G__19731;
})()
);

goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed,"object",(function() {
var G__19732 = null;
var G__19732__2 = (function (m,f){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
return f.call(null,cljs.core.PersistentVector.EMPTY,clojure.core.matrix.protocols.get_0d.call(null,m));
} else {
var s = cljs.core.map.call(null,f,clojure.core.matrix.impl.defaults.indices_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,m));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m,s),clojure.core.matrix.protocols.get_shape.call(null,m));
}
});
var G__19732__3 = (function (m,f,a){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
var v = clojure.core.matrix.protocols.get_0d.call(null,m);
return clojure.core.matrix.protocols.element_map_indexed.call(null,a,((function (v){
return (function (p1__19722_SHARP_,p2__19723_SHARP_){
return f.call(null,p1__19722_SHARP_,v,p2__19723_SHARP_);
});})(v))
);
} else {
var vec__19724 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__19724,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__19724,(1),null);
var s = cljs.core.map.call(null,f,clojure.core.matrix.impl.defaults.indices_seq.call(null,m__$1),clojure.core.matrix.protocols.element_seq.call(null,m__$1),clojure.core.matrix.protocols.element_seq.call(null,a__$1));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m__$1,s),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
}
});
var G__19732__4 = (function (m,f,a,more){
var s = cljs.core.map.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,a));
var s__$1 = cljs.core.apply.call(null,cljs.core.map,f,cljs.core.list_STAR_.call(null,clojure.core.matrix.impl.defaults.indices_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,a),cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,more)));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m,s__$1),clojure.core.matrix.protocols.get_shape.call(null,m));
});
G__19732 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19732__2.call(this,m,f);
case 3:
return G__19732__3.call(this,m,f,a);
case 4:
return G__19732__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19732.cljs$core$IFn$_invoke$arity$2 = G__19732__2;
G__19732.cljs$core$IFn$_invoke$arity$3 = G__19732__3;
G__19732.cljs$core$IFn$_invoke$arity$4 = G__19732__4;
return G__19732;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed_BANG_,"object",(function() {
var G__19733 = null;
var G__19733__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f));
});
var G__19733__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a));
});
var G__19733__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a,more));
});
G__19733 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19733__2.call(this,m,f);
case 3:
return G__19733__3.call(this,m,f,a);
case 4:
return G__19733__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19733.cljs$core$IFn$_invoke$arity$2 = G__19733__2;
G__19733.cljs$core$IFn$_invoke$arity$3 = G__19733__3;
G__19733.cljs$core$IFn$_invoke$arity$4 = G__19733__4;
return G__19733;
})()
);

goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"null",true);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed,"null",(function() {
var G__19734 = null;
var G__19734__2 = (function (m,f){
return f.call(null,cljs.core.PersistentVector.EMPTY,null);
});
var G__19734__3 = (function (m,f,a){
return f.call(null,cljs.core.PersistentVector.EMPTY,null,a);
});
var G__19734__4 = (function (m,f,a,more){
return cljs.core.apply.call(null,f,cljs.core.PersistentVector.EMPTY,null,a,more);
});
G__19734 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19734__2.call(this,m,f);
case 3:
return G__19734__3.call(this,m,f,a);
case 4:
return G__19734__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19734.cljs$core$IFn$_invoke$arity$2 = G__19734__2;
G__19734.cljs$core$IFn$_invoke$arity$3 = G__19734__3;
G__19734.cljs$core$IFn$_invoke$arity$4 = G__19734__4;
return G__19734;
})()
);

goog.object.set(clojure.core.matrix.protocols.element_map_indexed_BANG_,"null",(function() {
var G__19735 = null;
var G__19735__2 = (function (m,f){
throw cljs.core.ex_info.call(null,"Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19735__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,"Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__19735__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,"Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__19735 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__19735__2.call(this,m,f);
case 3:
return G__19735__3.call(this,m,f,a);
case 4:
return G__19735__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19735.cljs$core$IFn$_invoke$arity$2 = G__19735__2;
G__19735.cljs$core$IFn$_invoke$arity$3 = G__19735__3;
G__19735.cljs$core$IFn$_invoke$arity$4 = G__19735__4;
return G__19735;
})()
);
goog.object.set(clojure.core.matrix.protocols.PElementCount,"null",true);

goog.object.set(clojure.core.matrix.protocols.element_count,"null",(function (m){
return (1);
}));

goog.object.set(clojure.core.matrix.protocols.PElementCount,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_count,"number",(function (m){
return (1);
}));

goog.object.set(clojure.core.matrix.protocols.PElementCount,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_count,"object",(function (m){
return clojure.core.matrix.impl.defaults.calc_element_count.call(null,m);
}));
goog.object.set(clojure.core.matrix.protocols.PValidateShape,"null",true);

goog.object.set(clojure.core.matrix.protocols.validate_shape,"null",(function() {
var G__19737 = null;
var G__19737__1 = (function (m){
return null;
});
var G__19737__2 = (function (m,shape){
if((shape == null)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Shape validation failed, was scalar but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
G__19737 = function(m,shape){
switch(arguments.length){
case 1:
return G__19737__1.call(this,m);
case 2:
return G__19737__2.call(this,m,shape);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19737.cljs$core$IFn$_invoke$arity$1 = G__19737__1;
G__19737.cljs$core$IFn$_invoke$arity$2 = G__19737__2;
return G__19737;
})()
);

goog.object.set(clojure.core.matrix.protocols.PValidateShape,"object",true);

goog.object.set(clojure.core.matrix.protocols.validate_shape,"object",(function() {
var G__19738 = null;
var G__19738__1 = (function (m){
return clojure.core.matrix.protocols.validate_shape.call(null,m,clojure.core.matrix.protocols.get_shape.call(null,m));
});
var G__19738__2 = (function (m,expected_shape){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
var sh = clojure.core.matrix.protocols.get_shape.call(null,m);
if((sh == null)){
if((expected_shape == null)){
return null;
} else {
throw cljs.core.ex_info.call(null,["Shape validation failed, was scalar but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.vec.call(null,sh),cljs.core.vec.call(null,expected_shape))){
return sh;
} else {
throw cljs.core.ex_info.call(null,["Shape validation failed, was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)," but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
} else {
var sh = clojure.core.matrix.protocols.get_shape.call(null,m);
var ss = clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
var efirst = (function (){var or__4131__auto__ = cljs.core.first.call(null,expected_shape);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,["Shape validation failed, was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)," but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var enext = cljs.core.next.call(null,expected_shape);
var shapes = cljs.core.mapv.call(null,((function (sh,ss,efirst,enext){
return (function (p1__19736_SHARP_){
return clojure.core.matrix.protocols.validate_shape.call(null,p1__19736_SHARP_,enext);
});})(sh,ss,efirst,enext))
,ss);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,enext,shapes))){
return cljs.core.vec.call(null,cljs.core.cons.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)),cljs.core.first.call(null,shapes)));
} else {
throw cljs.core.ex_info.call(null,["Inconsistent shapes for sub arrays in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

}
});
G__19738 = function(m,expected_shape){
switch(arguments.length){
case 1:
return G__19738__1.call(this,m);
case 2:
return G__19738__2.call(this,m,expected_shape);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19738.cljs$core$IFn$_invoke$arity$1 = G__19738__1;
G__19738.cljs$core$IFn$_invoke$arity$2 = G__19738__2;
return G__19738;
})()
);
goog.object.set(clojure.core.matrix.protocols.PMatrixSlices,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_row,"object",(function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_major_slice.call(null,m,i);
}
}));

goog.object.set(clojure.core.matrix.protocols.get_column,"object",(function (m,i){
return clojure.core.matrix.protocols.get_slice.call(null,m,(1),i);
}));

goog.object.set(clojure.core.matrix.protocols.get_major_slice,"object",(function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.call(null,m,i);
} else {
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
return clojure.core.matrix.protocols.get_1d.call(null,m,i);
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,m,i);

}
}
}));

goog.object.set(clojure.core.matrix.protocols.get_slice,"object",(function (m,dimension,i){
var ldimension = cljs.core.long$.call(null,dimension);
if(((0) === ldimension)){
return clojure.core.matrix.protocols.get_major_slice.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_slice.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),dimension,i);

}
}));
goog.object.set(clojure.core.matrix.protocols.PBLASBase,"object",true);

goog.object.set(clojure.core.matrix.protocols.gemm_BANG_,"object",(function (c,trans_a_QMARK_,trans_b_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose.call(null,a):a);
var b__$1 = (cljs.core.truth_(trans_b_QMARK_)?clojure.core.matrix.protocols.transpose.call(null,b):b);
if((!((1.0 === beta)))){
clojure.core.matrix.protocols.scale_BANG_.call(null,c,beta);
} else {
}

return clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,c,a__$1,b__$1,alpha);
}));

goog.object.set(clojure.core.matrix.protocols.gemv_BANG_,"object",(function (c,trans_a_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose.call(null,a):a);
if((!((1.0 === beta)))){
clojure.core.matrix.protocols.scale_BANG_.call(null,c,beta);
} else {
}

return clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,c,a__$1,b,alpha);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixColumns,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_columns,"object",(function (m){
var G__19739 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__19739) {
case (0):
throw cljs.core.ex_info.call(null,"Can't get columns of a 0-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.call(null,"Can't get columns of a 1-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return cljs.core.vec.call(null,clojure.core.matrix.protocols.get_slice_seq.call(null,m,(1)));

break;
default:
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,clojure.core.matrix.protocols.get_columns,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));

}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixRows,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_rows,"object",(function (m){
var G__19741 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__19741) {
case (0):
throw cljs.core.ex_info.call(null,"Can't get rows of a 0-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.call(null,"Can't get rows of a 1-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return cljs.core.vec.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));

break;
default:
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,clojure.core.matrix.protocols.get_rows,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));

}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceView,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_major_slice_view,"object",(function (m,i){
if((Array === m.constructor)){
var ss = cljs.core.nth.call(null,m,i);
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,ss))){
return ss;
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,m,i);
}
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,m,i);

}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceView2,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_slice_view,"object",(function (m,dim,i){
if((dim === (0))){
return clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_slice_view.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),dim,i);
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceSeq,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_major_slice_seq,"object",(function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims <= (0))){
throw cljs.core.ex_info.call(null,["Can't get slices on [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dims),"]-dimensional object"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
return cljs.core.seq.call(null,m);
} else {
if((dims === (1))){
var iter__4523__auto__ = ((function (dims){
return (function clojure$core$matrix$impl$defaults$iter__19744(s__19745){
return (new cljs.core.LazySeq(null,((function (dims){
return (function (){
var s__19745__$1 = s__19745;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19745__$1);
if(temp__5720__auto__){
var s__19745__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19745__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19745__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19747 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19746 = (0);
while(true){
if((i__19746 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__19746);
cljs.core.chunk_append.call(null,b__19747,clojure.core.matrix.protocols.get_1d.call(null,m,i));

var G__19748 = (i__19746 + (1));
i__19746 = G__19748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19747),clojure$core$matrix$impl$defaults$iter__19744.call(null,cljs.core.chunk_rest.call(null,s__19745__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19747),null);
}
} else {
var i = cljs.core.first.call(null,s__19745__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_1d.call(null,m,i),clojure$core$matrix$impl$defaults$iter__19744.call(null,cljs.core.rest.call(null,s__19745__$2)));
}
} else {
return null;
}
break;
}
});})(dims))
,null,null));
});})(dims))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));
} else {
return cljs.core.map.call(null,((function (dims){
return (function (p1__19743_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,m,p1__19743_SHARP_);
});})(dims))
,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));

}
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceSeq2,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_slice_seq,"object",(function (m,dimension){
var ldimension = cljs.core.long$.call(null,dimension);
if((ldimension === (0))){
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
} else {
if((ldimension < (0))){
throw cljs.core.ex_info.call(null,["Can't get slices of a negative dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dimension)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.map.call(null,((function (ldimension){
return (function (p1__19749_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,m,dimension,p1__19749_SHARP_);
});})(ldimension))
,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dimension)));

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceViewSeq,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_major_slice_view_seq,"object",(function (m){
var n = clojure.core.matrix.protocols.dimension_count.call(null,m,(0));
var iter__4523__auto__ = ((function (n){
return (function clojure$core$matrix$impl$defaults$iter__19750(s__19751){
return (new cljs.core.LazySeq(null,((function (n){
return (function (){
var s__19751__$1 = s__19751;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19751__$1);
if(temp__5720__auto__){
var s__19751__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19751__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19751__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19753 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19752 = (0);
while(true){
if((i__19752 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__19752);
cljs.core.chunk_append.call(null,b__19753,clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i));

var G__19754 = (i__19752 + (1));
i__19752 = G__19754;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19753),clojure$core$matrix$impl$defaults$iter__19750.call(null,cljs.core.chunk_rest.call(null,s__19751__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19753),null);
}
} else {
var i = cljs.core.first.call(null,s__19751__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i),clojure$core$matrix$impl$defaults$iter__19750.call(null,cljs.core.rest.call(null,s__19751__$2)));
}
} else {
return null;
}
break;
}
});})(n))
,null,null));
});})(n))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,n));
}));
goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"null",true);

goog.object.set(clojure.core.matrix.protocols.join,"null",(function (m,a){
throw cljs.core.ex_info.call(null,"Can't join an array to a nil value!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"number",true);

goog.object.set(clojure.core.matrix.protocols.join,"number",(function (m,a){
throw cljs.core.ex_info.call(null,"Can't join an array to a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"object",true);

goog.object.set(clojure.core.matrix.protocols.join,"object",(function (m,a){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((dims === (0))){
throw cljs.core.ex_info.call(null,"Can't join to a 0-dimensional array!",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((dims === adims)){
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a)));
} else {
if((dims === (adims + (1)))){
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null)));
} else {
throw cljs.core.ex_info.call(null,"Joining with array of incompatible size",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"null",true);

goog.object.set(clojure.core.matrix.protocols.join_along,"null",(function (m,a,dim){
throw cljs.core.ex_info.call(null,"Can't join an array to a nil value!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"number",true);

goog.object.set(clojure.core.matrix.protocols.join_along,"number",(function (m,a,dim){
throw cljs.core.ex_info.call(null,"Can't join an array to a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"object",true);

goog.object.set(clojure.core.matrix.protocols.join_along,"object",(function (m,a,dim){
return clojure.core.matrix.protocols.coerce_param.call(null,m,(function (){var dim__$1 = cljs.core.long$.call(null,dim);
if((dim__$1 === (0))){
return clojure.core.matrix.protocols.join.call(null,m,a);
} else {
var ddim = (dim__$1 - (1));
return cljs.core.mapv.call(null,((function (ddim,dim__$1){
return (function (p1__19755_SHARP_,p2__19756_SHARP_){
return clojure.core.matrix.protocols.join_along.call(null,p1__19755_SHARP_,p2__19756_SHARP_,ddim);
});})(ddim,dim__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a));

}
})());
}));
goog.object.set(clojure.core.matrix.protocols.PSubVector,"null",true);

goog.object.set(clojure.core.matrix.protocols.subvector,"null",(function (m,start,length){
throw cljs.core.ex_info.call(null,"Can't take subvector of nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSubVector,"number",true);

goog.object.set(clojure.core.matrix.protocols.subvector,"number",(function (m,start,length){
throw cljs.core.ex_info.call(null,"Can't take subvector of a scalar number",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PSubVector,"object",true);

goog.object.set(clojure.core.matrix.protocols.subvector,"object",(function (m,start,length){
return clojure.core.matrix.protocols.subvector.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),start,length);
}));
goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"null",true);

goog.object.set(clojure.core.matrix.protocols.submatrix,"null",(function (m,index_ranges){
if(cljs.core.seq.call(null,index_ranges)){
throw cljs.core.ex_info.call(null,"Can't take partial submatrix of nil",cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"number",true);

goog.object.set(clojure.core.matrix.protocols.submatrix,"number",(function (m,index_ranges){
if(cljs.core.seq.call(null,index_ranges)){
throw cljs.core.ex_info.call(null,"Can't take partial submatrix of a scalar number",cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.submatrix,"object",(function (m,index_ranges){
return clojure.core.matrix.impl.wrappers.wrap_submatrix.call(null,m,index_ranges);
}));
goog.object.set(clojure.core.matrix.protocols.PBroadcast,"null",true);

goog.object.set(clojure.core.matrix.protocols.broadcast,"null",(function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);
}));

goog.object.set(clojure.core.matrix.protocols.PBroadcast,"number",true);

goog.object.set(clojure.core.matrix.protocols.broadcast,"number",(function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);
}));

goog.object.set(clojure.core.matrix.protocols.PBroadcast,"object",true);

goog.object.set(clojure.core.matrix.protocols.broadcast,"object",(function (m,new_shape){
var nshape = new_shape;
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m);
var mdims = cljs.core.count.call(null,mshape);
var ndims = cljs.core.count.call(null,nshape);
if((((mdims === ndims)) && (clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,nshape,mshape)))){
return m;
} else {
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);

}
}));
goog.object.set(clojure.core.matrix.protocols.PBroadcastLike,"null",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_like,"null",(function (m,a){
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,a,clojure.core.matrix.protocols.get_shape.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.PBroadcastLike,"object",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_like,"object",(function (m,a){
var sm = clojure.core.matrix.protocols.get_shape.call(null,m);
var sa = clojure.core.matrix.protocols.get_shape.call(null,a);
if(clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,sm,sa)){
return a;
} else {
return clojure.core.matrix.protocols.broadcast.call(null,a,sm);
}
}));
goog.object.set(clojure.core.matrix.protocols.PBroadcastCoerce,"null",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_coerce,"null",(function (m,a){
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.broadcast_like.call(null,m,a));
}));

goog.object.set(clojure.core.matrix.protocols.PBroadcastCoerce,"object",true);

goog.object.set(clojure.core.matrix.protocols.broadcast_coerce,"object",(function (m,a){
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.broadcast_like.call(null,m,a));
}));
goog.object.set(clojure.core.matrix.protocols.PPack,"null",true);

goog.object.set(clojure.core.matrix.protocols.pack,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PPack,"object",true);

goog.object.set(clojure.core.matrix.protocols.pack,"object",(function (m){
return m;
}));
goog.object.set(clojure.core.matrix.protocols.PConversion,"null",true);

goog.object.set(clojure.core.matrix.protocols.convert_to_nested_vectors,"null",(function (m){
return null;
}));

goog.object.set(clojure.core.matrix.protocols.PConversion,"number",true);

goog.object.set(clojure.core.matrix.protocols.convert_to_nested_vectors,"number",(function (m){
return m;
}));

goog.object.set(clojure.core.matrix.protocols.PConversion,"object",true);

goog.object.set(clojure.core.matrix.protocols.convert_to_nested_vectors,"object",(function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d.call(null,m);
} else {
if(((1) === dims)){
if(((cljs.core.seq_QMARK_.call(null,m)) || (cljs.core.sequential_QMARK_.call(null,m)))){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_0d,m);
} else {
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var i = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < n)){
var G__19757 = (i + (1));
var G__19758 = cljs.core.conj.call(null,res,clojure.core.matrix.protocols.get_1d.call(null,m,i));
i = G__19757;
res = G__19758;
continue;
} else {
return res;
}
break;
}
}
} else {
if(cljs.core.sequential_QMARK_.call(null,m)){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
} else {
if(cljs.core.seq_QMARK_.call(null,m)){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
throw cljs.core.ex_info.call(null,["Can't work out how to convert to nested vectors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,m))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PRowColMatrix,"null",true);

goog.object.set(clojure.core.matrix.protocols.column_matrix,"null",(function (m,data){
throw cljs.core.ex_info.call(null,"Can't create a column matrix from nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.row_matrix,"null",(function (m,data){
throw cljs.core.ex_info.call(null,"Can't create a column matrix from nil",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PRowColMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.column_matrix,"object",(function (m,data){
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data)))){
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.mapv.call(null,cljs.core.vector,clojure.core.matrix.protocols.element_seq.call(null,data)));
} else {
throw cljs.core.ex_info.call(null,"Can't create a column matrix: input must be 1D vector",cljs.core.PersistentArrayMap.EMPTY);
}
}));

goog.object.set(clojure.core.matrix.protocols.row_matrix,"object",(function (m,data){
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data)))){
return clojure.core.matrix.protocols.coerce_param.call(null,m,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[data],null)));
} else {
throw cljs.core.ex_info.call(null,"Can't create a row matrix: input must be 1D vector",cljs.core.PersistentArrayMap.EMPTY);
}
}));
goog.object.set(clojure.core.matrix.protocols.PVectorView,"null",true);

goog.object.set(clojure.core.matrix.protocols.as_vector,"null",(function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}));

goog.object.set(clojure.core.matrix.protocols.PVectorView,"number",true);

goog.object.set(clojure.core.matrix.protocols.as_vector,"number",(function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
}));

goog.object.set(clojure.core.matrix.protocols.PVectorView,"object",true);

goog.object.set(clojure.core.matrix.protocols.as_vector,"object",(function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims === (0))){
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
} else {
if((dims === (1))){
return m;
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.to_vector.call(null,m);
} else {
return null;

}
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PVectorisable,"null",true);

goog.object.set(clojure.core.matrix.protocols.to_vector,"null",(function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}));

goog.object.set(clojure.core.matrix.protocols.PVectorisable,"number",true);

goog.object.set(clojure.core.matrix.protocols.to_vector,"number",(function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
}));

goog.object.set(clojure.core.matrix.protocols.PVectorisable,"object",true);

goog.object.set(clojure.core.matrix.protocols.to_vector,"object",(function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if(((0) === dims)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.protocols.get_0d.call(null,m)], null);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.clone.call(null,m);
} else {
return cljs.core.vec.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));

}
}
}));
goog.object.set(clojure.core.matrix.protocols.PReshaping,"null",true);

goog.object.set(clojure.core.matrix.protocols.reshape,"null",(function (m,shape){
return clojure.core.matrix.protocols.reshape.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),shape);
}));

goog.object.set(clojure.core.matrix.protocols.PReshaping,"number",true);

goog.object.set(clojure.core.matrix.protocols.reshape,"number",(function (m,shape){
return clojure.core.matrix.protocols.reshape.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null),shape);
}));

goog.object.set(clojure.core.matrix.protocols.PReshaping,"object",true);

goog.object.set(clojure.core.matrix.protocols.reshape,"object",(function (m,shape){
if(cljs.core._EQ_.call(null,clojure.core.matrix.protocols.get_shape.call(null,m),shape)){
return m;
} else {
var gv = clojure.core.matrix.protocols.generic_value.call(null,m);
var es = cljs.core.concat.call(null,clojure.core.matrix.protocols.element_seq.call(null,m),cljs.core.repeat.call(null,gv));
var partition_shape = ((function (gv,es){
return (function clojure$core$matrix$impl$defaults$partition_shape(es__$1,shape__$1){
var temp__5718__auto__ = cljs.core.seq.call(null,shape__$1);
if(temp__5718__auto__){
var s = temp__5718__auto__;
var ns = cljs.core.next.call(null,s);
var plen = cljs.core.reduce.call(null,cljs.core._STAR_,(1),ns);
return cljs.core.map.call(null,((function (ns,plen,s,temp__5718__auto__,gv,es){
return (function (p1__19759_SHARP_){
return clojure$core$matrix$impl$defaults$partition_shape.call(null,p1__19759_SHARP_,ns);
});})(ns,plen,s,temp__5718__auto__,gv,es))
,cljs.core.partition.call(null,plen,es__$1));
} else {
return cljs.core.first.call(null,es__$1);
}
});})(gv,es))
;
var temp__5718__auto__ = cljs.core.seq.call(null,shape);
if(temp__5718__auto__){
var shape__$1 = temp__5718__auto__;
var fs = cljs.core.long$.call(null,cljs.core.first.call(null,shape__$1));
var parts = partition_shape.call(null,es,shape__$1);
var or__4131__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,m,cljs.core.take.call(null,fs,parts));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,fs,parts));
}
} else {
return cljs.core.first.call(null,es);
}
}
}));
goog.object.set(clojure.core.matrix.protocols.PReshapeView,"null",true);

goog.object.set(clojure.core.matrix.protocols.reshape_view,"null",(function (m,shape){
return clojure.core.matrix.protocols.broadcast.call(null,null,shape);
}));

goog.object.set(clojure.core.matrix.protocols.PReshapeView,"number",true);

goog.object.set(clojure.core.matrix.protocols.reshape_view,"number",(function (m,shape){
return clojure.core.matrix.protocols.broadcast.call(null,m,shape);
}));

goog.object.set(clojure.core.matrix.protocols.PReshapeView,"object",true);

goog.object.set(clojure.core.matrix.protocols.reshape_view,"object",(function (m,shape){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
throw cljs.core.ex_info.call(null,["TODO: ","reshape-view not supported on mutable array of type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.impl.defaults.class$.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.reshape.call(null,m,shape);
}
}));
goog.object.set(clojure.core.matrix.protocols.PCoercion,"null",true);

goog.object.set(clojure.core.matrix.protocols.coerce_param,"null",(function (m,param){
return param;
}));

goog.object.set(clojure.core.matrix.protocols.PCoercion,"number",true);

goog.object.set(clojure.core.matrix.protocols.coerce_param,"number",(function (m,param){
return param;
}));

goog.object.set(clojure.core.matrix.protocols.PCoercion,"object",true);

goog.object.set(clojure.core.matrix.protocols.coerce_param,"object",(function (m,param){
var param__$1 = (((param instanceof cljs.core.ISeq))?clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param):param);
var or__4131__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,m,param__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return param__$1;
}
}));
goog.object.set(clojure.core.matrix.protocols.PExponent,"number",true);

goog.object.set(clojure.core.matrix.protocols.element_pow,"number",(function (m,exponent){
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,exponent))){
return clojure.core.matrix.protocols.element_map.call(null,exponent,(function (p1__19761_SHARP_){
return Math.pow(m,p1__19761_SHARP_);
}));
} else {
return Math.pow(m,exponent);
}
}));

goog.object.set(clojure.core.matrix.protocols.PExponent,"object",true);

goog.object.set(clojure.core.matrix.protocols.element_pow,"object",(function (m,exponent){
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,exponent))){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19765_SHARP_,p2__19766_SHARP_){
return Math.pow(p1__19765_SHARP_,p2__19766_SHARP_);
}),exponent);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__19767_SHARP_){
return Math.pow(p1__19767_SHARP_,exponent);
}));
}
}));
goog.object.set(clojure.core.matrix.protocols.PSquare,"number",true);

goog.object.set(clojure.core.matrix.protocols.square,"number",(function (m){
return (m * m);
}));

goog.object.set(clojure.core.matrix.protocols.PSquare,"object",true);

goog.object.set(clojure.core.matrix.protocols.square,"object",(function (m){
return clojure.core.matrix.protocols.element_multiply.call(null,m,m);
}));
goog.object.set(clojure.core.matrix.protocols.PLogistic,"number",true);

goog.object.set(clojure.core.matrix.protocols.logistic,"number",(function (m){
var e_t = Math.exp((- m));
return (1.0 / (1.0 + e_t));
}));

goog.object.set(clojure.core.matrix.protocols.PLogistic,"object",true);

goog.object.set(clojure.core.matrix.protocols.logistic,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.logistic_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PLogisticMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.logistic_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.logistic_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PSoftplus,"number",true);

goog.object.set(clojure.core.matrix.protocols.softplus,"number",(function (m){
var et = Math.exp(m);
return Math.log((1.0 + et));
}));

goog.object.set(clojure.core.matrix.protocols.PSoftplus,"object",true);

goog.object.set(clojure.core.matrix.protocols.softplus,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.softplus_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PSoftmax,"object",true);

goog.object.set(clojure.core.matrix.protocols.softmax,"object",(function (m){
var em = clojure.core.matrix.protocols.exp.call(null,m);
return clojure.core.matrix.protocols.element_divide.call(null,em,clojure.core.matrix.protocols.element_sum.call(null,em));
}));
goog.object.set(clojure.core.matrix.protocols.PSoftmaxMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.softmax_BANG_,"object",(function (m){
clojure.core.matrix.protocols.exp_BANG_.call(null,m);

clojure.core.matrix.protocols.element_divide_BANG_.call(null,m,clojure.core.matrix.protocols.element_sum.call(null,m));

return m;
}));
goog.object.set(clojure.core.matrix.protocols.PSoftplusMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.softplus_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.softplus_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PReLU,"number",true);

goog.object.set(clojure.core.matrix.protocols.relu,"number",(function (m){
return Math.max(0.0,m);
}));

goog.object.set(clojure.core.matrix.protocols.PReLU,"object",true);

goog.object.set(clojure.core.matrix.protocols.relu,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.relu_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PReLUMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.relu_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.relu_fn);
}));
goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"number",true);

goog.object.set(clojure.core.matrix.protocols.abs,"number",(function (m){
return Math.abs(m);
}));

goog.object.set(clojure.core.matrix.protocols.acos,"number",(function (m){
return Math.acos(m);
}));

goog.object.set(clojure.core.matrix.protocols.asin,"number",(function (m){
return Math.asin(m);
}));

goog.object.set(clojure.core.matrix.protocols.atan,"number",(function (m){
return Math.atan(m);
}));

goog.object.set(clojure.core.matrix.protocols.cbrt,"number",(function (m){
return Math.cbrt(m);
}));

goog.object.set(clojure.core.matrix.protocols.ceil,"number",(function (m){
return Math.ceil(m);
}));

goog.object.set(clojure.core.matrix.protocols.cos,"number",(function (m){
return Math.cos(m);
}));

goog.object.set(clojure.core.matrix.protocols.cosh,"number",(function (m){
return Math.cosh(m);
}));

goog.object.set(clojure.core.matrix.protocols.exp,"number",(function (m){
return Math.exp(m);
}));

goog.object.set(clojure.core.matrix.protocols.floor,"number",(function (m){
return Math.floor(m);
}));

goog.object.set(clojure.core.matrix.protocols.log,"number",(function (m){
return Math.log(m);
}));

goog.object.set(clojure.core.matrix.protocols.log10,"number",(function (m){
return Math.log10(m);
}));

goog.object.set(clojure.core.matrix.protocols.round,"number",(function (m){
return Math.rint(m);
}));

goog.object.set(clojure.core.matrix.protocols.signum,"number",(function (m){
return Math.sign(m);
}));

goog.object.set(clojure.core.matrix.protocols.sin,"number",(function (m){
return Math.sin(m);
}));

goog.object.set(clojure.core.matrix.protocols.sinh,"number",(function (m){
return Math.sinh(m);
}));

goog.object.set(clojure.core.matrix.protocols.sqrt,"number",(function (m){
return Math.sqrt(m);
}));

goog.object.set(clojure.core.matrix.protocols.tan,"number",(function (m){
return Math.tan(m);
}));

goog.object.set(clojure.core.matrix.protocols.tanh,"number",(function (m){
return Math.tanh(m);
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees,"number",(function (m){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.to_radians,"number",(function (m){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,m);
}));

goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"object",true);

goog.object.set(clojure.core.matrix.protocols.abs,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.abs(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.acos,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.acos(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.asin,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.asin(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.atan,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.atan(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cbrt,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.cbrt(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.ceil,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.ceil(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cos,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.cos(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cosh,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.cosh(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.exp,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.exp(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.floor,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.floor(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.log(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log10,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.log10(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.round,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.rint(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.signum,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.sign(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sin,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.sin(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sinh,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.sinh(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sqrt,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.sqrt(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tan,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.tan(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tanh,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return Math.tanh(p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_radians,"object",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18848__18849__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__18848__18849__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"array",true);

goog.object.set(clojure.core.matrix.protocols.abs,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.abs(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.acos,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.acos(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.asin,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.asin(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.atan,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.atan(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cbrt,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.cbrt(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.ceil,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.ceil(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cos,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.cos(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cosh,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.cosh(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.exp,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.exp(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.floor,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.floor(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.log(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log10,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.log10(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.round,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.rint(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.signum,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.sign(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sin,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.sin(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sinh,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.sinh(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sqrt,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.sqrt(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tan,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.tan(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tanh,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return Math.tanh(p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__18850__18851__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_radians,"array",(function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__18850__18851__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__18850__18851__auto__);
}));
}));
goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"number",true);

goog.object.set(clojure.core.matrix.protocols.abs_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.acos_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.asin_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.atan_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.cbrt_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.ceil_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.cos_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.cosh_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.exp_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.floor_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.log_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.log10_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.round_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.signum_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.sin_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.sinh_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.sqrt_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.tan_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.tanh_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.to_radians_BANG_,"number",(function (m){
throw cljs.core.ex_info.call(null,"Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"object",true);

goog.object.set(clojure.core.matrix.protocols.abs_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.abs(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.acos_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.acos(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.asin_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.asin(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.atan_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.atan(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cbrt_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.cbrt(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.ceil_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.ceil(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cos_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.cos(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cosh_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.cosh(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.exp_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.exp(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.floor_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.floor(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.log(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log10_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.log10(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.round_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.rint(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.signum_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.sign(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sin_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.sin(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sinh_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.sinh(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sqrt_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.sqrt(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tan_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.tan(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tanh_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return Math.tanh(p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_radians_BANG_,"object",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18852__18853__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__18852__18853__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"array",true);

goog.object.set(clojure.core.matrix.protocols.abs_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.abs(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.acos_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.acos(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.asin_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.asin(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.atan_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.atan(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cbrt_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.cbrt(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.ceil_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.ceil(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cos_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.cos(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.cosh_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.cosh(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.exp_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.exp(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.floor_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.floor(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.log(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.log10_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.log10(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.round_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.rint(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.signum_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.sign(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sin_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.sin(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sinh_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.sinh(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.sqrt_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.sqrt(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tan_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.tan(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.tanh_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return Math.tanh(p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_degrees_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__18854__18855__auto__);
}));
}));

goog.object.set(clojure.core.matrix.protocols.to_radians_BANG_,"array",(function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__18854__18855__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__18854__18855__auto__);
}));
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixSubComponents,"object",true);

goog.object.set(clojure.core.matrix.protocols.main_diagonal,"object",(function (m){
var sh = clojure.core.matrix.protocols.get_shape.call(null,m);
var rank = cljs.core.count.call(null,sh);
var dims = cljs.core.apply.call(null,cljs.core.min,sh);
var diag_vals = (function (){var iter__4523__auto__ = ((function (sh,rank,dims){
return (function clojure$core$matrix$impl$defaults$iter__19776(s__19777){
return (new cljs.core.LazySeq(null,((function (sh,rank,dims){
return (function (){
var s__19777__$1 = s__19777;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19777__$1);
if(temp__5720__auto__){
var s__19777__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19777__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19777__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19779 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19778 = (0);
while(true){
if((i__19778 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__19778);
cljs.core.chunk_append.call(null,b__19779,clojure.core.matrix.protocols.get_nd.call(null,m,cljs.core.repeat.call(null,rank,i)));

var G__19780 = (i__19778 + (1));
i__19778 = G__19780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19779),clojure$core$matrix$impl$defaults$iter__19776.call(null,cljs.core.chunk_rest.call(null,s__19777__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19779),null);
}
} else {
var i = cljs.core.first.call(null,s__19777__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_nd.call(null,m,cljs.core.repeat.call(null,rank,i)),clojure$core$matrix$impl$defaults$iter__19776.call(null,cljs.core.rest.call(null,s__19777__$2)));
}
} else {
return null;
}
break;
}
});})(sh,rank,dims))
,null,null));
});})(sh,rank,dims))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,dims));
})();
return clojure.core.matrix.implementations.construct.call(null,m,diag_vals);
}));
goog.object.set(clojure.core.matrix.protocols.PSpecialisedConstructors,"object",true);

goog.object.set(clojure.core.matrix.protocols.identity_matrix,"object",(function (m,dims){
return clojure.core.matrix.protocols.diagonal_matrix.call(null,m,cljs.core.repeat.call(null,dims,1.0));
}));

goog.object.set(clojure.core.matrix.protocols.diagonal_matrix,"object",(function (m,diagonal_values){
var dims = cljs.core.count.call(null,diagonal_values);
var diagonal_values__$1 = clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,diagonal_values);
var zs = cljs.core.vec.call(null,cljs.core.repeat.call(null,dims,0.0));
var dm = cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (dims,diagonal_values__$1,zs){
return (function clojure$core$matrix$impl$defaults$iter__19781(s__19782){
return (new cljs.core.LazySeq(null,((function (dims,diagonal_values__$1,zs){
return (function (){
var s__19782__$1 = s__19782;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19782__$1);
if(temp__5720__auto__){
var s__19782__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19782__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19782__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19784 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19783 = (0);
while(true){
if((i__19783 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__19783);
cljs.core.chunk_append.call(null,b__19784,cljs.core.assoc.call(null,zs,i,cljs.core.nth.call(null,diagonal_values__$1,i)));

var G__19785 = (i__19783 + (1));
i__19783 = G__19785;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19784),clojure$core$matrix$impl$defaults$iter__19781.call(null,cljs.core.chunk_rest.call(null,s__19782__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19784),null);
}
} else {
var i = cljs.core.first.call(null,s__19782__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,zs,i,cljs.core.nth.call(null,diagonal_values__$1,i)),clojure$core$matrix$impl$defaults$iter__19781.call(null,cljs.core.rest.call(null,s__19782__$2)));
}
} else {
return null;
}
break;
}
});})(dims,diagonal_values__$1,zs))
,null,null));
});})(dims,diagonal_values__$1,zs))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,dims));
})());
return clojure.core.matrix.protocols.coerce_param.call(null,m,dm);
}));
goog.object.set(clojure.core.matrix.protocols.PPermutationMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.permutation_matrix,"object",(function (m,permutation){
var v = clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,permutation);
var n = cljs.core.count.call(null,v);
var r = clojure.core.matrix.protocols.new_matrix.call(null,m,n,n);
var r__$1 = (cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,r))?r:clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,r));
var n__4607__auto___19786 = n;
var i_19787 = (0);
while(true){
if((i_19787 < n__4607__auto___19786)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,r__$1,i_19787,v.call(null,i_19787),1.0);

var G__19788 = (i_19787 + (1));
i_19787 = G__19788;
continue;
} else {
}
break;
}

return r__$1;
}));
goog.object.set(clojure.core.matrix.protocols.PBlockDiagonalMatrix,"object",true);

goog.object.set(clojure.core.matrix.protocols.block_diagonal_matrix,"object",(function (m,blocks){
var aux = (function clojure$core$matrix$impl$defaults$aux(acc,blocks__$1){
if(cljs.core.empty_QMARK_.call(null,blocks__$1)){
return acc;
} else {
var acc_dim = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,acc,(0)));
var new_block = blocks__$1.call(null,(0));
var new_block_dim = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,new_block,(0)));
var new_dim = (acc_dim + new_block_dim);
var dm = cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (acc_dim,new_block,new_block_dim,new_dim){
return (function clojure$core$matrix$impl$defaults$aux_$_iter__19789(s__19790){
return (new cljs.core.LazySeq(null,((function (acc_dim,new_block,new_block_dim,new_dim){
return (function (){
var s__19790__$1 = s__19790;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19790__$1);
if(temp__5720__auto__){
var s__19790__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19790__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19790__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19792 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19791 = (0);
while(true){
if((i__19791 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__19791);
cljs.core.chunk_append.call(null,b__19792,(((i < acc_dim))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,acc.call(null,i),clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,acc_dim),new_block.call(null,(i - acc_dim))))));

var G__19793 = (i__19791 + (1));
i__19791 = G__19793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19792),clojure$core$matrix$impl$defaults$aux_$_iter__19789.call(null,cljs.core.chunk_rest.call(null,s__19790__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19792),null);
}
} else {
var i = cljs.core.first.call(null,s__19790__$2);
return cljs.core.cons.call(null,(((i < acc_dim))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,acc.call(null,i),clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,acc_dim),new_block.call(null,(i - acc_dim))))),clojure$core$matrix$impl$defaults$aux_$_iter__19789.call(null,cljs.core.rest.call(null,s__19790__$2)));
}
} else {
return null;
}
break;
}
});})(acc_dim,new_block,new_block_dim,new_dim))
,null,null));
});})(acc_dim,new_block,new_block_dim,new_dim))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,new_dim));
})());
return clojure$core$matrix$impl$defaults$aux.call(null,dm,cljs.core.subvec.call(null,blocks__$1,(1)));
}
});
return aux.call(null,cljs.core.PersistentVector.EMPTY,blocks);
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"object",true);

goog.object.set(clojure.core.matrix.protocols.identity_matrix_QMARK_,"object",(function (m){
var rc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var cc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1)));
if((((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2))) && ((rc === cc)))){
var i = cljs.core.long$.call(null,(0));
while(true){
if((i < rc)){
if((function (){var j = cljs.core.long$.call(null,(0));
while(true){
if((j < cc)){
var elem = clojure.core.matrix.protocols.get_2d.call(null,m,i,j);
if(typeof elem === 'number'){
if((i === j)){
if((elem === 1.0)){
var G__19796 = (j + (1));
j = G__19796;
continue;
} else {
return false;
}
} else {
if((elem === (0))){
var G__19797 = (j + (1));
j = G__19797;
continue;
} else {
return false;
}
}
} else {
return false;
}
} else {
return true;
}
break;
}
})()){
var G__19798 = (i + (1));
i = G__19798;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
}));

goog.object.set(clojure.core.matrix.protocols.zero_matrix_QMARK_,"object",(function (m){
return cljs.core.every_QMARK_.call(null,(function (p1__19794_SHARP_){
return ((typeof p1__19794_SHARP_ === 'number') && ((p1__19794_SHARP_ === (0))));
}),clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.symmetric_QMARK_,"object",(function (m){
var G__19795 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__19795) {
case (0):
return true;

break;
case (1):
return true;

break;
case (2):
var and__4120__auto__ = clojure.core.matrix.impl.common.square_QMARK_.call(null,m);
if(and__4120__auto__){
return clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_.call(null,m);
} else {
return and__4120__auto__;
}

break;
default:
return cljs.core._EQ_.call(null,m,clojure.core.matrix.protocols.transpose.call(null,m));

}
}));

goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"null",true);

goog.object.set(clojure.core.matrix.protocols.identity_matrix_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.zero_matrix_QMARK_,"null",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.symmetric_QMARK_,"null",(function (m){
return true;
}));
goog.object.set(clojure.core.matrix.protocols.PIndicesAccess,"object",true);

goog.object.set(clojure.core.matrix.protocols.get_indices,"object",(function (a,indices){
var vals = cljs.core.map.call(null,(function (p1__19800_SHARP_){
return clojure.core.matrix.protocols.get_nd.call(null,a,p1__19800_SHARP_);
}),cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,indices));
var or__4131__auto__ = ((cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,a)))?clojure.core.matrix.protocols.construct_matrix.call(null,a,vals):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,vals);
}
}));
goog.object.set(clojure.core.matrix.protocols.PIndicesSetting,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_indices,"object",(function (a,indices,values){
var indices__$1 = cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq.call(null,clojure.core.matrix.protocols.broadcast.call(null,values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,indices__$1)], null)));
var a__$1 = a;
var G__19807 = indices__$1;
var vec__19809 = G__19807;
var seq__19810 = cljs.core.seq.call(null,vec__19809);
var first__19811 = cljs.core.first.call(null,seq__19810);
var seq__19810__$1 = cljs.core.next.call(null,seq__19810);
var id = first__19811;
var idx = seq__19810__$1;
var G__19808 = values__$1;
var vec__19812 = G__19808;
var seq__19813 = cljs.core.seq.call(null,vec__19812);
var first__19814 = cljs.core.first.call(null,seq__19813);
var seq__19813__$1 = cljs.core.next.call(null,seq__19813);
var v = first__19814;
var vs = seq__19813__$1;
var a__$2 = a__$1;
var G__19807__$1 = G__19807;
var G__19808__$1 = G__19808;
while(true){
var a__$3 = a__$2;
var vec__19821 = G__19807__$1;
var seq__19822 = cljs.core.seq.call(null,vec__19821);
var first__19823 = cljs.core.first.call(null,seq__19822);
var seq__19822__$1 = cljs.core.next.call(null,seq__19822);
var id__$1 = first__19823;
var idx__$1 = seq__19822__$1;
var vec__19824 = G__19808__$1;
var seq__19825 = cljs.core.seq.call(null,vec__19824);
var first__19826 = cljs.core.first.call(null,seq__19825);
var seq__19825__$1 = cljs.core.next.call(null,seq__19825);
var v__$1 = first__19826;
var vs__$1 = seq__19825__$1;
if(cljs.core.truth_(id__$1)){
var G__19853 = clojure.core.matrix.protocols.set_nd.call(null,a__$3,id__$1,v__$1);
var G__19854 = idx__$1;
var G__19855 = vs__$1;
a__$2 = G__19853;
G__19807__$1 = G__19854;
G__19808__$1 = G__19855;
continue;
} else {
return a__$3;
}
break;
}
}));

goog.object.set(clojure.core.matrix.protocols.set_indices_BANG_,"object",(function (a,indices,values){
var indices__$1 = cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq.call(null,clojure.core.matrix.protocols.broadcast.call(null,values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,indices__$1)], null)));
var G__19833 = indices__$1;
var vec__19835 = G__19833;
var seq__19836 = cljs.core.seq.call(null,vec__19835);
var first__19837 = cljs.core.first.call(null,seq__19836);
var seq__19836__$1 = cljs.core.next.call(null,seq__19836);
var id = first__19837;
var idx = seq__19836__$1;
var G__19834 = values__$1;
var vec__19838 = G__19834;
var seq__19839 = cljs.core.seq.call(null,vec__19838);
var first__19840 = cljs.core.first.call(null,seq__19839);
var seq__19839__$1 = cljs.core.next.call(null,seq__19839);
var v = first__19840;
var vs = seq__19839__$1;
var G__19833__$1 = G__19833;
var G__19834__$1 = G__19834;
while(true){
var vec__19847 = G__19833__$1;
var seq__19848 = cljs.core.seq.call(null,vec__19847);
var first__19849 = cljs.core.first.call(null,seq__19848);
var seq__19848__$1 = cljs.core.next.call(null,seq__19848);
var id__$1 = first__19849;
var idx__$1 = seq__19848__$1;
var vec__19850 = G__19834__$1;
var seq__19851 = cljs.core.seq.call(null,vec__19850);
var first__19852 = cljs.core.first.call(null,seq__19851);
var seq__19851__$1 = cljs.core.next.call(null,seq__19851);
var v__$1 = first__19852;
var vs__$1 = seq__19851__$1;
if(cljs.core.truth_(id__$1)){
clojure.core.matrix.protocols.set_nd_BANG_.call(null,a,id__$1,v__$1);

var G__19856 = idx__$1;
var G__19857 = vs__$1;
G__19833__$1 = G__19856;
G__19834__$1 = G__19857;
continue;
} else {
return null;
}
break;
}
}));
goog.object.set(clojure.core.matrix.protocols.PNonZeroIndices,"object",true);

goog.object.set(clojure.core.matrix.protocols.non_zero_indices,"object",(function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function clojure$core$matrix$impl$defaults$iter__19858(s__19859){
return (new cljs.core.LazySeq(null,(function (){
var s__19859__$1 = s__19859;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19859__$1);
if(temp__5720__auto__){
var s__19859__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19859__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19859__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19861 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19860 = (0);
while(true){
if((i__19860 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__19860);
if((!((clojure.core.matrix.protocols.get_1d.call(null,m,i) === (0))))){
cljs.core.chunk_append.call(null,b__19861,i);

var G__19866 = (i__19860 + (1));
i__19860 = G__19866;
continue;
} else {
var G__19867 = (i__19860 + (1));
i__19860 = G__19867;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19861),clojure$core$matrix$impl$defaults$iter__19858.call(null,cljs.core.chunk_rest.call(null,s__19859__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19861),null);
}
} else {
var i = cljs.core.first.call(null,s__19859__$2);
if((!((clojure.core.matrix.protocols.get_1d.call(null,m,i) === (0))))){
return cljs.core.cons.call(null,i,clojure$core$matrix$impl$defaults$iter__19858.call(null,cljs.core.rest.call(null,s__19859__$2)));
} else {
var G__19868 = cljs.core.rest.call(null,s__19859__$2);
s__19859__$1 = G__19868;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));
})());
} else {
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = (function clojure$core$matrix$impl$defaults$iter__19862(s__19863){
return (new cljs.core.LazySeq(null,(function (){
var s__19863__$1 = s__19863;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19863__$1);
if(temp__5720__auto__){
var s__19863__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19863__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19863__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19865 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19864 = (0);
while(true){
if((i__19864 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__19864);
cljs.core.chunk_append.call(null,b__19865,clojure.core.matrix.protocols.non_zero_indices.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,i)));

var G__19869 = (i__19864 + (1));
i__19864 = G__19869;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19865),clojure$core$matrix$impl$defaults$iter__19862.call(null,cljs.core.chunk_rest.call(null,s__19863__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19865),null);
}
} else {
var i = cljs.core.first.call(null,s__19863__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.non_zero_indices.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,i)),clojure$core$matrix$impl$defaults$iter__19862.call(null,cljs.core.rest.call(null,s__19863__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));
})());
}
}));
goog.object.set(clojure.core.matrix.protocols.PMatrixTypes,"object",true);

goog.object.set(clojure.core.matrix.protocols.diagonal_QMARK_,"object",(function (m){
if(cljs.core._EQ_.call(null,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)),(2))){
var vec__19870 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__19870,(0),null);
var mcols = cljs.core.nth.call(null,vec__19870,(1),null);
return cljs.core.every_QMARK_.call(null,((function (vec__19870,mrows,mcols){
return (function (p__19873){
var vec__19874 = p__19873;
var i = cljs.core.nth.call(null,vec__19874,(0),null);
var j = cljs.core.nth.call(null,vec__19874,(1),null);
var v = cljs.core.nth.call(null,vec__19874,(2),null);
if(cljs.core._EQ_.call(null,i,j)){
return true;
} else {
if(((cljs.core.not_EQ_.call(null,i,j)) && ((v === (0))))){
return true;
} else {
return false;

}
}
});})(vec__19870,mrows,mcols))
,cljs.core.map.call(null,((function (vec__19870,mrows,mcols){
return (function (i,elem){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.quot.call(null,i,mcols),cljs.core.rem.call(null,i,mcols),elem],null));
});})(vec__19870,mrows,mcols))
,cljs.core.range.call(null,(mrows * mcols)),clojure.core.matrix.protocols.element_seq.call(null,m)));
} else {
return false;
}
}));

goog.object.set(clojure.core.matrix.protocols.upper_triangular_QMARK_,"object",(function (m){
if(clojure.core.matrix.impl.common.square_QMARK_.call(null,m)){
return cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,cljs.core.mapcat.call(null,(function (p__19877){
var vec__19878 = p__19877;
var idx = cljs.core.nth.call(null,vec__19878,(0),null);
var xs = cljs.core.nth.call(null,vec__19878,(1),null);
return cljs.core.take.call(null,idx,xs);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),clojure.core.matrix.protocols.get_slice_seq.call(null,m,(0)))));
} else {
return false;
}
}));

goog.object.set(clojure.core.matrix.protocols.lower_triangular_QMARK_,"object",(function (m){
if(clojure.core.matrix.impl.common.square_QMARK_.call(null,m)){
return cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,cljs.core.mapcat.call(null,(function (p__19881){
var vec__19882 = p__19881;
var idx = cljs.core.nth.call(null,vec__19882,(0),null);
var xs = cljs.core.nth.call(null,vec__19882,(1),null);
return cljs.core.drop.call(null,(idx + (1)),xs);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),clojure.core.matrix.protocols.get_slice_seq.call(null,m,(0)))));
} else {
return false;
}
}));

goog.object.set(clojure.core.matrix.protocols.positive_definite_QMARK_,"object",(function (m){
throw cljs.core.ex_info.call(null,"TODO: Not yet implemented",cljs.core.PersistentArrayMap.EMPTY);

return clojure.core.matrix.protocols.positive_definite_QMARK_.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.positive_semidefinite_QMARK_,"object",(function (m){
throw cljs.core.ex_info.call(null,"TODO: Not yet implemented",cljs.core.PersistentArrayMap.EMPTY);
}));

goog.object.set(clojure.core.matrix.protocols.orthogonal_QMARK_,"object",(function (m,eps){
var and__4120__auto__ = clojure.core.matrix.impl.common.square_QMARK_.call(null,m);
if(and__4120__auto__){
return clojure.core.matrix.protocols.matrix_equals_epsilon.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,m,clojure.core.matrix.protocols.transpose.call(null,m)),clojure.core.matrix.protocols.identity_matrix.call(null,m,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))),eps);
} else {
return and__4120__auto__;
}
}));
goog.object.set(clojure.core.matrix.protocols.PSelect,"null",true);

goog.object.set(clojure.core.matrix.protocols.select,"null",(function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,["Trying to select on nil with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
}));

goog.object.set(clojure.core.matrix.protocols.PSelect,"number",true);

goog.object.set(clojure.core.matrix.protocols.select,"number",(function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,["Trying to select on numerical scalar with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
}));

goog.object.set(clojure.core.matrix.protocols.PSelect,"object",true);

goog.object.set(clojure.core.matrix.protocols.select,"object",(function (a,area){
var or__4131__auto__ = clojure.core.matrix.protocols.select_view.call(null,a,area);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a,area);
}
}));
goog.object.set(clojure.core.matrix.protocols.PSelectView,"null",true);

goog.object.set(clojure.core.matrix.protocols.select_view,"null",(function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,["Trying to select on nil with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
}));

goog.object.set(clojure.core.matrix.protocols.PSelectView,"object",true);

goog.object.set(clojure.core.matrix.protocols.select_view,"object",(function (a,area){
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a,area);
}));

goog.object.set(clojure.core.matrix.protocols.PSelectView,"number",true);

goog.object.set(clojure.core.matrix.protocols.select_view,"number",(function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,["Trying to select on numerical scalar with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
}));
goog.object.set(clojure.core.matrix.protocols.PSelect,"number",true);

goog.object.set(clojure.core.matrix.protocols.select,"number",(function (a,area){
if(cljs.core.empty_QMARK_.call(null,area)){
return a;
} else {
throw cljs.core.ex_info.call(null,["Non empty area argument in select, called on Number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
clojure.core.matrix.impl.defaults.area_indices = (function clojure$core$matrix$impl$defaults$area_indices(area){
return cljs.core.reduce.call(null,(function (io,in$){
var iter__4523__auto__ = (function clojure$core$matrix$impl$defaults$area_indices_$_iter__19885(s__19886){
return (new cljs.core.LazySeq(null,(function (){
var s__19886__$1 = s__19886;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__19886__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var a = cljs.core.first.call(null,xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__19886__$1,a,xs__6277__auto__,temp__5720__auto__){
return (function clojure$core$matrix$impl$defaults$area_indices_$_iter__19885_$_iter__19887(s__19888){
return (new cljs.core.LazySeq(null,((function (s__19886__$1,a,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__19888__$1 = s__19888;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__19888__$1);
if(temp__5720__auto____$1){
var s__19888__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19888__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19888__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19890 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19889 = (0);
while(true){
if((i__19889 < size__4522__auto__)){
var b = cljs.core._nth.call(null,c__4521__auto__,i__19889);
cljs.core.chunk_append.call(null,b__19890,cljs.core.cons.call(null,a,b));

var G__19891 = (i__19889 + (1));
i__19889 = G__19891;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19890),clojure$core$matrix$impl$defaults$area_indices_$_iter__19885_$_iter__19887.call(null,cljs.core.chunk_rest.call(null,s__19888__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19890),null);
}
} else {
var b = cljs.core.first.call(null,s__19888__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,a,b),clojure$core$matrix$impl$defaults$area_indices_$_iter__19885_$_iter__19887.call(null,cljs.core.rest.call(null,s__19888__$2)));
}
} else {
return null;
}
break;
}
});})(s__19886__$1,a,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__19886__$1,a,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq.call(null,iterys__4519__auto__.call(null,io));
if(fs__4520__auto__){
return cljs.core.concat.call(null,fs__4520__auto__,clojure$core$matrix$impl$defaults$area_indices_$_iter__19885.call(null,cljs.core.rest.call(null,s__19886__$1)));
} else {
var G__19892 = cljs.core.rest.call(null,s__19886__$1);
s__19886__$1 = G__19892;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,in$);
}),cljs.core.mapv.call(null,cljs.core.vector,cljs.core.last.call(null,area)),cljs.core.rest.call(null,cljs.core.reverse.call(null,area)));
});
clojure.core.matrix.impl.defaults.indices = (function clojure$core$matrix$impl$defaults$indices(vals){
return clojure.core.matrix.impl.defaults.area_indices.call(null,cljs.core.mapv.call(null,cljs.core.range,clojure.core.matrix.protocols.get_shape.call(null,vals)));
});
goog.object.set(clojure.core.matrix.protocols.PSetSelection,"object",true);

goog.object.set(clojure.core.matrix.protocols.set_selection,"object",(function (m,area,vals){
var mm = (function (){var or__4131__auto__ = clojure.core.matrix.protocols.mutable_matrix.call(null,m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,m);
}
})();
var v = clojure.core.matrix.protocols.select_view.call(null,m,area);
clojure.core.matrix.protocols.assign_BANG_.call(null,v,vals);

return mm;
}));
goog.object.set(clojure.core.matrix.protocols.PIndexImplementation,"object",true);

goog.object.set(clojure.core.matrix.protocols.index_QMARK_,"object",(function (m){
return false;
}));

goog.object.set(clojure.core.matrix.protocols.index_to_longs,"object",(function (m){
return cljs.core.long_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.index_to_ints,"object",(function (m){
return cljs.core.int_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

goog.object.set(clojure.core.matrix.protocols.index_from_longs,"object",(function (m,xs){
return cljs.core.long_array.call(null,xs);
}));

goog.object.set(clojure.core.matrix.protocols.index_from_ints,"object",(function (m,xs){
return cljs.core.int_array.call(null,xs);
}));

goog.object.set(clojure.core.matrix.protocols.index_coerce,"object",(function (m,a){
return clojure.core.matrix.protocols.index_to_longs.call(null,m);
}));
goog.object.set(clojure.core.matrix.protocols.PDimensionLabels,"object",true);

goog.object.set(clojure.core.matrix.protocols.label,"object",(function (m,dim,i){
if(((((0) <= cljs.core.long$.call(null,i))) && ((cljs.core.long$.call(null,i) <= (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dim)) - (1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Dimension index out of range: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

goog.object.set(clojure.core.matrix.protocols.labels,"object",(function (m,dim){
if(((((0) <= cljs.core.long$.call(null,dim))) && ((cljs.core.long$.call(null,dim) <= (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) - (1)))))){
return null;
} else {
throw cljs.core.ex_info.call(null,["Dimension out of range: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dim)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
goog.object.set(clojure.core.matrix.protocols.PColumnNames,"object",true);

goog.object.set(clojure.core.matrix.protocols.column_name,"object",(function (m,i){
var dim = (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) - (1));
return clojure.core.matrix.protocols.label.call(null,m,dim,i);
}));

goog.object.set(clojure.core.matrix.protocols.column_names,"object",(function (m){
var dim = (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) - (1));
return clojure.core.matrix.protocols.labels.call(null,m,dim);
}));
goog.object.set(clojure.core.matrix.protocols.PNorm,"object",true);

goog.object.set(clojure.core.matrix.protocols.norm,"object",(function (m,p){
if(cljs.core._EQ_.call(null,p,Number.POSITIVE_INFINITY)){
return clojure.core.matrix.protocols.element_max.call(null,clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.mathsops.abs));
} else {
if(typeof p === 'number'){
var sum_of_element_powers = clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_pow.call(null,clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.mathsops.abs),p));
var pred__19893 = cljs.core._EQ__EQ_;
var expr__19894 = p;
if(cljs.core.truth_(pred__19893.call(null,(1),expr__19894))){
return sum_of_element_powers;
} else {
if(cljs.core.truth_(pred__19893.call(null,(2),expr__19894))){
return Math.sqrt(sum_of_element_powers);
} else {
if(cljs.core.truth_(pred__19893.call(null,(3),expr__19894))){
return Math.cbrt(sum_of_element_powers);
} else {
return Math.pow(sum_of_element_powers,(1.0 / p));
}
}
}
} else {
throw cljs.core.ex_info.call(null,"p must be a number",cljs.core.PersistentArrayMap.EMPTY);

}
}
}));
clojure.core.matrix.impl.defaults.compute_q = (function clojure$core$matrix$impl$defaults$compute_q(m,qr_data,mcols,mrows,min_len,us,vs,gammas){
var q = clojure.core.matrix.protocols.to_double_array.call(null,clojure.core.matrix.protocols.identity_matrix.call(null,cljs.core.PersistentVector.EMPTY,mrows));
var mcols__$1 = cljs.core.long$.call(null,mcols);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var min_len__$1 = cljs.core.long$.call(null,min_len);
var i_19896 = (min_len__$1 - (1));
while(true){
if((i_19896 > (-1))){
var gamma_19897 = (gammas[i_19896]);
(us[i_19896] = 1.0);

var j_19898 = (i_19896 + (1));
while(true){
if((j_19898 < mrows__$1)){
(us[j_19898] = (qr_data[((j_19898 * mcols__$1) + i_19896)]));

var G__19899 = (j_19898 + (1));
j_19898 = G__19899;
continue;
} else {
}
break;
}


var j_19900 = i_19896;
while(true){
if((j_19900 < mrows__$1)){
(vs[j_19900] = ((us[i_19896]) * (q[((i_19896 * mrows__$1) + j_19900)])));

var G__19901 = (j_19900 + (1));
j_19900 = G__19901;
continue;
} else {
}
break;
}


var j_19902 = (i_19896 + (1));
while(true){
if((j_19902 < mrows__$1)){
var u_19903 = (us[j_19902]);
var k_19904 = i_19896;
while(true){
if((k_19904 < mrows__$1)){
var q_idx_19905 = (((j_19902 * mrows__$1) + i_19896) + (k_19904 - i_19896));
(vs[k_19904] = ((vs[k_19904]) + (u_19903 * (q[q_idx_19905]))));

var G__19906 = (k_19904 + (1));
k_19904 = G__19906;
continue;
} else {
}
break;
}


var G__19907 = (j_19902 + (1));
j_19902 = G__19907;
continue;
} else {
}
break;
}


var j_19908 = i_19896;
while(true){
if((j_19908 < mrows__$1)){
(vs[j_19908] = ((vs[j_19908]) * gamma_19897));

var G__19909 = (j_19908 + (1));
j_19908 = G__19909;
continue;
} else {
}
break;
}


var j_19910 = i_19896;
while(true){
if((j_19910 < mrows__$1)){
var u_19911 = (us[j_19910]);
var k_19912 = i_19896;
while(true){
if((k_19912 < mrows__$1)){
var qr_idx_19913 = (((j_19910 * mrows__$1) + i_19896) + (k_19912 - i_19896));
(q[qr_idx_19913] = ((q[qr_idx_19913]) - (u_19911 * (vs[k_19912]))));

var G__19914 = (k_19912 + (1));
k_19912 = G__19914;
continue;
} else {
}
break;
}


var G__19915 = (j_19910 + (1));
j_19910 = G__19915;
continue;
} else {
}
break;
}


var G__19916 = (i_19896 - (1));
i_19896 = G__19916;
continue;
} else {
}
break;
}


return clojure.core.matrix.protocols.compute_matrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mrows__$1], null),((function (q,mcols__$1,mrows__$1,min_len__$1){
return (function (i,j){
return (q[((i * mrows__$1) + j)]);
});})(q,mcols__$1,mrows__$1,min_len__$1))
);
});
clojure.core.matrix.impl.defaults.compute_r = (function clojure$core$matrix$impl$defaults$compute_r(m,data,mcols,mrows,min_len,compact_QMARK_){
var mrows__$1 = cljs.core.long$.call(null,mrows);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var min_len__$1 = cljs.core.long$.call(null,min_len);
var cm = clojure.core.matrix.protocols.compute_matrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mcols__$1], null),((function (mrows__$1,mcols__$1,min_len__$1){
return (function (i,j){
if((((i < min_len__$1)) && ((j >= i)) && ((j < mcols__$1)))){
return (data[((i * mcols__$1) + j)]);
} else {
return (0);
}
});})(mrows__$1,mcols__$1,min_len__$1))
);
if(cljs.core.truth_(compact_QMARK_)){
var slcs = clojure.core.matrix.protocols.get_major_slice_seq.call(null,cm);
var non_zero_rows = cljs.core.long$.call(null,cljs.core.reduce.call(null,((function (slcs,mrows__$1,mcols__$1,min_len__$1,cm){
return (function (cnt,slice){
if(cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,slice)){
return (cnt + (1));
} else {
return cnt;
}
});})(slcs,mrows__$1,mcols__$1,min_len__$1,cm))
,(0),slcs));
return clojure.core.matrix.protocols.reshape.call(null,cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols__$1,(mrows__$1 - non_zero_rows)], null));
} else {
return cm;
}
});
clojure.core.matrix.impl.defaults.householder_qr = (function clojure$core$matrix$impl$defaults$householder_qr(qr_data,idx,mcols,mrows,us,gammas){
var idx__$1 = cljs.core.long$.call(null,idx);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var qr_idx_19918 = cljs.core.long$.call(null,(idx__$1 + (idx__$1 * mcols__$1)));
var i_19919 = cljs.core.long$.call(null,idx__$1);
while(true){
if((i_19919 < mrows__$1)){
(us[i_19919] = (qr_data[qr_idx_19918]));

var G__19920 = (qr_idx_19918 + mcols__$1);
var G__19921 = (i_19919 + (1));
qr_idx_19918 = G__19920;
i_19919 = G__19921;
continue;
} else {
}
break;
}

var max_ = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (idx__$1,mcols__$1,mrows__$1){
return (function (p1__19917_SHARP_){
return Math.abs(p1__19917_SHARP_);
});})(idx__$1,mcols__$1,mrows__$1))
,clojure.core.matrix.protocols.subvector.call(null,us,idx__$1,(mrows__$1 - idx__$1))));
if(cljs.core._EQ_.call(null,max_,0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null);
} else {
var _ = (function (){
var i_19922 = idx__$1;
while(true){
if((i_19922 < mrows__$1)){
(us[i_19922] = ((us[i_19922]) / max_));

var G__19923 = (i_19922 + (1));
i_19922 = G__19923;
continue;
} else {
}
break;
}

return null;
})()
;
var tau = Math.sqrt(cljs.core.reduce.call(null,((function (_,max_,idx__$1,mcols__$1,mrows__$1){
return (function (acc,x){
return (acc + (x * x));
});})(_,max_,idx__$1,mcols__$1,mrows__$1))
,0.0,clojure.core.matrix.protocols.subvector.call(null,us,idx__$1,(mrows__$1 - idx__$1))));
var u_idx = (us[idx__$1]);
var tau__$1 = (((u_idx < (0)))?(- tau):tau);
var u_0 = (u_idx + tau__$1);
var gamma = (u_0 / tau__$1);
var tau__$2 = (tau__$1 * max_);
(gammas[idx__$1] = gamma);

var i_19924 = (idx__$1 + (1));
while(true){
if((i_19924 < mrows__$1)){
(us[i_19924] = ((us[i_19924]) / u_0));

var G__19925 = (i_19924 + (1));
i_19924 = G__19925;
continue;
} else {
}
break;
}


(us[idx__$1] = 1.0);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gamma","gamma",1883969687),gamma,new cljs.core.Keyword(null,"gammas","gammas",-195052461),gammas,new cljs.core.Keyword(null,"us","us",746429226),us,new cljs.core.Keyword(null,"tau","tau",89782904),tau__$2,new cljs.core.Keyword(null,"error","error",-978969032),false], null);
}
});
clojure.core.matrix.impl.defaults.update_qr = (function clojure$core$matrix$impl$defaults$update_qr(qr_data,idx,mcols,mrows,vs,us,gamma,tau){
var idx__$1 = cljs.core.long$.call(null,idx);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var u = (us[idx__$1]);
var idx_PLUS_1 = (idx__$1 + (1));
var gamma__$1 = gamma;
var tau__$1 = tau;
var i_19926 = idx_PLUS_1;
while(true){
if((i_19926 < mcols__$1)){
(vs[i_19926] = (qr_data[(i_19926 + (idx__$1 * mcols__$1))]));

var G__19927 = (i_19926 + (1));
i_19926 = G__19927;
continue;
} else {
}
break;
}


var i_19928 = idx_PLUS_1;
while(true){
if((i_19928 < mrows__$1)){
var qr_idx_19929 = (idx_PLUS_1 + (i_19928 * mcols__$1));
var j_19930 = idx_PLUS_1;
while(true){
if((j_19930 < mcols__$1)){
(vs[j_19930] = ((vs[j_19930]) + ((us[i_19928]) * (qr_data[(qr_idx_19929 + (j_19930 - idx_PLUS_1))]))));

var G__19931 = (j_19930 + (1));
j_19930 = G__19931;
continue;
} else {
}
break;
}


var G__19932 = (i_19928 + (1));
i_19928 = G__19932;
continue;
} else {
}
break;
}


var i_19933 = idx_PLUS_1;
while(true){
if((i_19933 < mcols__$1)){
(vs[i_19933] = ((vs[i_19933]) * gamma__$1));

var G__19934 = (i_19933 + (1));
i_19933 = G__19934;
continue;
} else {
}
break;
}


var i_19935 = idx__$1;
while(true){
if((i_19935 < mrows__$1)){
var u_19936__$1 = (us[i_19935]);
var j_19937 = idx_PLUS_1;
while(true){
if((j_19937 < mcols__$1)){
var qr_idx_19938 = (((i_19935 * mcols__$1) + idx_PLUS_1) + (j_19937 - idx_PLUS_1));
(qr_data[qr_idx_19938] = ((qr_data[qr_idx_19938]) - (u_19936__$1 * (vs[j_19937]))));

var G__19939 = (j_19937 + (1));
j_19937 = G__19939;
continue;
} else {
}
break;
}


var G__19940 = (i_19935 + (1));
i_19935 = G__19940;
continue;
} else {
}
break;
}


if((idx__$1 < mcols__$1)){
(qr_data[(idx__$1 + (idx__$1 * mcols__$1))] = (- tau__$1));
} else {
}

var i_19941 = idx_PLUS_1;
while(true){
if((i_19941 < mrows__$1)){
(qr_data[(idx__$1 + (i_19941 * mcols__$1))] = (us[i_19941]));

var G__19942 = (i_19941 + (1));
i_19941 = G__19942;
continue;
} else {
}
break;
}


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qr-data","qr-data",-504970292),qr_data,new cljs.core.Keyword(null,"vs","vs",-2022097090),vs], null);
});
goog.object.set(clojure.core.matrix.protocols.PQRDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.qr,"object",(function (m,options){
var vec__19943 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__19943,(0),null);
var mcols = cljs.core.nth.call(null,vec__19943,(1),null);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var min_len = (function (){var x__4222__auto__ = mcols__$1;
var y__4223__auto__ = mrows__$1;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var max_len = (function (){var x__4219__auto__ = mcols__$1;
var y__4220__auto__ = mrows__$1;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var qr_data = clojure.core.matrix.protocols.to_double_array.call(null,m);
var vs = cljs.core.double_array.call(null,max_len);
var us = cljs.core.double_array.call(null,max_len);
var gammas = cljs.core.double_array.call(null,min_len);
var gamma = 0.0;
var tau = 0.0;
var i = (0);
while(true){
if((i < min_len)){
var map__19954 = clojure.core.matrix.impl.defaults.householder_qr.call(null,qr_data,i,mcols__$1,mrows__$1,us,gammas);
var map__19954__$1 = (((((!((map__19954 == null))))?(((((map__19954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19954):map__19954);
var us__$1 = cljs.core.get.call(null,map__19954__$1,new cljs.core.Keyword(null,"us","us",746429226));
var gamma__$1 = cljs.core.get.call(null,map__19954__$1,new cljs.core.Keyword(null,"gamma","gamma",1883969687));
var gammas__$1 = cljs.core.get.call(null,map__19954__$1,new cljs.core.Keyword(null,"gammas","gammas",-195052461));
var tau__$1 = cljs.core.get.call(null,map__19954__$1,new cljs.core.Keyword(null,"tau","tau",89782904));
var error = cljs.core.get.call(null,map__19954__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return null;
} else {
var map__19956 = clojure.core.matrix.impl.defaults.update_qr.call(null,qr_data,i,mcols__$1,mrows__$1,vs,us__$1,gamma__$1,tau__$1);
var map__19956__$1 = (((((!((map__19956 == null))))?(((((map__19956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19956):map__19956);
var qr_data__$1 = cljs.core.get.call(null,map__19956__$1,new cljs.core.Keyword(null,"qr-data","qr-data",-504970292));
var vs__$1 = cljs.core.get.call(null,map__19956__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var G__19962 = qr_data__$1;
var G__19963 = vs__$1;
var G__19964 = us__$1;
var G__19965 = gammas__$1;
var G__19966 = gamma__$1;
var G__19967 = tau__$1;
var G__19968 = (i + (1));
qr_data = G__19962;
vs = G__19963;
us = G__19964;
gammas = G__19965;
gamma = G__19966;
tau = G__19967;
i = G__19968;
continue;
}
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (qr_data,vs,us,gammas,gamma,tau,i,vec__19943,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (p__19958){
var vec__19959 = p__19958;
var k = cljs.core.nth.call(null,vec__19959,(0),null);
var v = cljs.core.nth.call(null,vec__19959,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v.call(null)], null);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__19943,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
,cljs.core.select_keys.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Q","Q",663320520),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__19943,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (){
return clojure.core.matrix.impl.defaults.compute_q.call(null,m,qr_data,mcols__$1,mrows__$1,min_len,us,vs,gammas);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__19943,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
,new cljs.core.Keyword(null,"R","R",-936662523),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__19943,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (){
return clojure.core.matrix.impl.defaults.compute_r.call(null,m,qr_data,mcols__$1,mrows__$1,min_len,new cljs.core.Keyword(null,"compact","compact",-348732150).cljs$core$IFn$_invoke$arity$1(options));
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__19943,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
], null),new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(options))));
}
break;
}
}));
goog.object.set(clojure.core.matrix.protocols.PCholeskyDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.cholesky,"object",(function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__19969 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__19970 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__19970;

try{var imp__9010__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__9010__auto__,m);
return clojure.core.matrix.protocols.cholesky.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__19969;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PLUDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.lu,"object",(function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__19971 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__19972 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__19972;

try{var imp__9010__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__9010__auto__,m);
return clojure.core.matrix.protocols.lu.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__19971;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PSVDDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.svd,"object",(function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__19973 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__19974 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__19974;

try{var imp__9010__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__9010__auto__,m);
return clojure.core.matrix.protocols.svd.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__19973;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PEigenDecomposition,"object",true);

goog.object.set(clojure.core.matrix.protocols.eigen,"object",(function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__19975 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__19976 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__19976;

try{var imp__9010__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__9010__auto__,m);
return clojure.core.matrix.protocols.eigen.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__19975;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PSolveLinear,"object",true);

goog.object.set(clojure.core.matrix.protocols.solve,"object",(function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__19977 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__19978 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__19978;

try{var imp__9010__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var a__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__9010__auto__,a);
return clojure.core.matrix.protocols.solve.call(null,a__$1,b);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__19977;
}} else {
return null;
}
}));
goog.object.set(clojure.core.matrix.protocols.PLeastSquares,"object",true);

goog.object.set(clojure.core.matrix.protocols.least_squares,"object",(function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__19979 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__19980 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__19980;

try{var imp__9010__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var a__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__9010__auto__,a);
return clojure.core.matrix.protocols.least_squares.call(null,a__$1,b);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__19979;
}} else {
return null;
}
}));

//# sourceMappingURL=defaults.js.map
