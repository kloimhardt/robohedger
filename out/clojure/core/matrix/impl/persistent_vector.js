// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.matrix.impl.persistent_vector');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.impl.mathsops');
/**
 * Ensures a vector is fully coerced to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.coerce_nested = (function clojure$core$matrix$impl$persistent_vector$coerce_nested(v){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce,v);
});
/**
 * Maps a function over a persistent vector, only modifying the vector if the function
 * returns a different value
 */
clojure.core.matrix.impl.persistent_vector.mapv_identity_check = (function clojure$core$matrix$impl$persistent_vector$mapv_identity_check(f,v){
var n = cljs.core.count(v);
var i = (0);
var v__$1 = v;
while(true){
if((i < n)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v__$1,i);
var y = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
var G__9642 = (i + (1));
var G__9643 = (((x === y))?v__$1:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,i,y));
i = G__9642;
v__$1 = G__9643;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.core.matrix.impl.persistent_vector.check_vector_shape = (function clojure$core$matrix$impl$persistent_vector$check_vector_shape(v,shape){
var and__4120__auto__ = (v instanceof cljs.core.PersistentVector);
if(and__4120__auto__){
var and__4120__auto____$1 = (cljs.core.count(v) === cljs.core.long$(cljs.core.first(shape)));
if(and__4120__auto____$1){
var temp__5718__auto__ = cljs.core.next(shape);
if(temp__5718__auto__){
var ns = temp__5718__auto__;
return cljs.core.every_QMARK_(((function (ns,temp__5718__auto__,and__4120__auto____$1,and__4120__auto__){
return (function (p1__9644_SHARP_){
return (clojure.core.matrix.impl.persistent_vector.check_vector_shape.cljs$core$IFn$_invoke$arity$2 ? clojure.core.matrix.impl.persistent_vector.check_vector_shape.cljs$core$IFn$_invoke$arity$2(p1__9644_SHARP_,ns) : clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,p1__9644_SHARP_,ns));
});})(ns,temp__5718__auto__,and__4120__auto____$1,and__4120__auto__))
,v);
} else {
return cljs.core.every_QMARK_(((function (temp__5718__auto__,and__4120__auto____$1,and__4120__auto__){
return (function (p1__9645_SHARP_){
return (!((p1__9645_SHARP_ instanceof cljs.core.PersistentVector)));
});})(temp__5718__auto__,and__4120__auto____$1,and__4120__auto__))
,v);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Test if array is already in nested persistent vector array format.
 */
clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_ = (function clojure$core$matrix$impl$persistent_vector$is_nested_persistent_vectors_QMARK_(x){
if(typeof x === 'number'){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(x))){
return true;
} else {
if((!((x instanceof cljs.core.PersistentVector)))){
return false;
} else {
return ((cljs.core.every_QMARK_(clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_,x)) && (clojure.core.matrix.impl.persistent_vector.check_vector_shape(x,clojure.core.matrix.protocols.get_shape(x))));

}
}
}
});
/**
 * Coerces to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce = (function clojure$core$matrix$impl$persistent_vector$persistent_vector_coerce(x){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(x));
if((dims > (0))){
return clojure.core.matrix.protocols.convert_to_nested_vectors(x);
} else {
if((((dims === (0))) && (cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(x))))){
return clojure.core.matrix.protocols.get_0d(x);
} else {
if((x == null)){
return x;
} else {
if((x instanceof cljs.core.IIterable)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested(x);
} else {
if(cljs.core.sequential_QMARK_(x)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested(x);
} else {
return x;

}
}
}
}
}
});
/**
 * Calculates the dimensionality (== nesting depth) of nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.vector_dimensionality = (function clojure$core$matrix$impl$persistent_vector$vector_dimensionality(m){
if(cljs.core.vector_QMARK_(m)){
if((cljs.core.count(m) > (0))){
return ((1) + (function (){var G__9646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0));
return (clojure.core.matrix.impl.persistent_vector.vector_dimensionality.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.persistent_vector.vector_dimensionality.cljs$core$IFn$_invoke$arity$1(G__9646) : clojure.core.matrix.impl.persistent_vector.vector_dimensionality.call(null,G__9646));
})());
} else {
return (1);
}
} else {
return cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));

}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cst$kw$persistent_DASH_vector;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,"Implementation for nested Clojure persistent vectors\n             used as matrices"], null);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(length,0.0));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rows,clojure.core.matrix.protocols.new_vector(m__$1,columns)));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
var temp__5718__auto__ = cljs.core.seq(dims);
if(temp__5718__auto__){
var dims__$1 = temp__5718__auto__;
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(dims__$1),clojure.core.matrix.protocols.new_matrix_nd(m__$1,cljs.core.next(dims__$1))));
} else {
return 0.0;
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(data);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,target_shape){
var m__$1 = this;
var mshape = clojure.core.matrix.protocols.get_shape(m__$1);
var dims = cljs.core.long$(cljs.core.count(mshape));
var tdims = cljs.core.long$(cljs.core.count(target_shape));
if((dims > tdims)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't broadcast to a lower dimensional shape",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((!(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ__EQ_,mshape,cljs.core.take_last(dims,target_shape)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Incompatible shapes, cannot broadcast shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(mshape))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(target_shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (mshape,dims,tdims,m__$1){
return (function (m__$2,dup){
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dup,m__$2));
});})(mshape,dims,tdims,m__$1))
,m__$1,cljs.core.reverse(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2(dims,target_shape)));

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast(a,clojure.core.matrix.protocols.get_shape(m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$broadcast_coerce$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(a),clojure.core.matrix.protocols.get_shape(m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(x | (0)));
var x__2050__auto__ = r;
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(x | (0)));
return clojure.core.matrix.protocols.get_1d(row,y);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__5718__auto__ = cljs.core.seq(indexes);
if(temp__5718__auto__){
var indexes__$1 = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.next(indexes__$1);
if(temp__5718__auto____$1){
var next_indexes = temp__5718__auto____$1;
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(cljs.core.first(indexes__$1) | (0)));
return clojure.core.matrix.protocols.get_nd(m__$2,next_indexes);
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(cljs.core.first(indexes__$1) | (0)));
}
} else {
return m__$1;
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,row,v);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,row,clojure.core.matrix.protocols.set_1d((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(row) : m__$1.call(null,row)),column,v));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
var temp__5718__auto__ = cljs.core.seq(indexes);
if(temp__5718__auto__){
var indexes__$1 = temp__5718__auto__;
var fi = cljs.core.first(indexes__$1);
if(((1) === cljs.core.count(indexes__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,fi,v);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,fi,clojure.core.matrix.protocols.set_nd((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(fi) : m__$1.call(null,fi)),cljs.core.next(indexes__$1),v));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Trying to set on a persistent vector with insufficient indexes?",cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_row$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.long$(i));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_column$arity$2 = (function (m,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice(m__$1,(1),i);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_major_slice$arity$2 = (function (m,i){
var m__$1 = this;
var sl = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.long$(i));
return sl;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_slice$arity$3 = (function (m,dimension,i){
var m__$1 = this;
var dimension__$1 = cljs.core.long$(dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.get_major_slice(m__$1,i);
} else {
var sd = (dimension__$1 - (1));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (sd,dimension__$1,m__$1){
return (function (p1__9647_SHARP_){
return clojure.core.matrix.protocols.get_slice(p1__9647_SHARP_,sd,i);
});})(sd,dimension__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec((function (){var iter__4523__auto__ = ((function (m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__9649(s__9650){
return (new cljs.core.LazySeq(null,((function (m__$1){
return (function (){
var s__9650__$1 = s__9650;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9650__$1);
if(temp__5720__auto__){
var s__9650__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9650__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9650__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9652 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9651 = (0);
while(true){
if((i__9651 < size__4522__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9651);
cljs.core.chunk_append(b__9652,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__9651,j,c__4521__auto__,size__4522__auto__,b__9652,s__9650__$2,temp__5720__auto__,m__$1){
return (function (p1__9648_SHARP_){
return clojure.core.matrix.protocols.get_1d(p1__9648_SHARP_,j);
});})(i__9651,j,c__4521__auto__,size__4522__auto__,b__9652,s__9650__$2,temp__5720__auto__,m__$1))
,m__$1));

var G__9653 = (i__9651 + (1));
i__9651 = G__9653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9652),clojure$core$matrix$impl$persistent_vector$iter__9649(cljs.core.chunk_rest(s__9650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9652),null);
}
} else {
var j = cljs.core.first(s__9650__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (j,s__9650__$2,temp__5720__auto__,m__$1){
return (function (p1__9648_SHARP_){
return clojure.core.matrix.protocols.get_1d(p1__9648_SHARP_,j);
});})(j,s__9650__$2,temp__5720__auto__,m__$1))
,m__$1),clojure$core$matrix$impl$persistent_vector$iter__9649(cljs.core.rest(s__9650__$2)));
}
} else {
return null;
}
break;
}
});})(m__$1))
,null,null));
});})(m__$1))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m__$1,(1))));
})());
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 = (function (m,dimension,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice(m__$1,dimension,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$join$arity$2 = (function (m,a){
var m__$1 = this;
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m__$1));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((dims === adims)){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq(m__$1),clojure.core.matrix.protocols.get_major_slice_seq(a)));
} else {
if((dims === (adims + (1)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,a);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Joining with array of incompatible size",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$rotate$arity$3 = (function (m,dim,places){
var m__$1 = this;
var dim__$1 = cljs.core.long$(dim);
var places__$1 = cljs.core.long$(places);
if(((0) === dim__$1)){
var c = cljs.core.long$(cljs.core.count(m__$1));
var sh = cljs.core.long$((((c > (0)))?cljs.core.mod(places__$1,c):(0)));
if((sh === (0))){
return m__$1;
} else {
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(m__$1,sh,c),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(m__$1,(0),sh)));
}
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (dim__$1,places__$1,m__$1){
return (function (s){
return clojure.core.matrix.protocols.rotate(s,(dim__$1 - (1)),places__$1);
});})(dim__$1,places__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$transpose_dims$arity$2 = (function (m,ordering){
var m__$1 = this;
var temp__5718__auto__ = cljs.core.seq(ordering);
if(temp__5718__auto__){
var ordering__$1 = temp__5718__auto__;
var dim = cljs.core.long$(cljs.core.first(ordering__$1));
var next_ordering = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (dim,ordering__$1,temp__5718__auto__,m__$1){
return (function (i){
if((i < dim)){
return i;
} else {
return (i - (1));
}
});})(dim,ordering__$1,temp__5718__auto__,m__$1))
,cljs.core.next(ordering__$1));
var slice_range = cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m__$1,dim));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (dim,next_ordering,slice_range,ordering__$1,temp__5718__auto__,m__$1){
return (function (si){
return clojure.core.matrix.protocols.transpose_dims(clojure.core.matrix.protocols.get_slice(m__$1,dim,si),next_ordering);
});})(dim,next_ordering,slice_range,ordering__$1,temp__5718__auto__,m__$1))
,slice_range);
} else {
return m__$1;
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$2 = (function (m,indices){
var m__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (m__$1){
return (function (p1__9654_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,p1__9654_SHARP_);
});})(m__$1))
,clojure.core.matrix.protocols.element_seq(indices));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$3 = (function (m,dimension,indices){
var m__$1 = this;
var dimension__$1 = cljs.core.long$(dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.order.cljs$core$IFn$_invoke$arity$2(m__$1,indices);
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (dimension__$1,m__$1){
return (function (p1__9655_SHARP_){
return clojure.core.matrix.protocols.order.cljs$core$IFn$_invoke$arity$3(p1__9655_SHARP_,(dimension__$1 - (1)),indices);
});})(dimension__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 = (function (m,start,length){
var m__$1 = this;
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(m__$1,start,(cljs.core.long$(start) + cljs.core.long$(length)));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$1 = (function (m){
var m__$1 = this;
if(clojure.core.matrix.protocols.same_shapes_QMARK_(m__$1)){
return clojure.core.matrix.protocols.get_shape(m__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Inconsistent shape for persistent vector array.",cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$2 = (function (m,shape){
var m__$1 = this;
if(cljs.core.empty_QMARK_(shape)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Expected empty shape for persistent vector: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,cljs.core.next(shape),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.validate_shape,m__$1)))){
return shape;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconsistent shape for persistent vector array, expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)," on array ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_add$arity$2 = (function (m,a){
var m__$1 = this;
var vec__9656 = clojure.core.matrix.protocols.broadcast_compatible(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9656,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9656,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(a__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 = (function (m,a){
var m__$1 = this;
var vec__9659 = clojure.core.matrix.protocols.broadcast_compatible(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9659,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9659,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(cljs.core._,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$vector_dot$arity$2 = (function (a,b){
var a__$1 = this;
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b));
if((((dims === (1))) && (((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))))){
var n = cljs.core.long$(cljs.core.count(a__$1));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.long$(cljs.core.long$(clojure.core.matrix.protocols.dimension_count(b,(0)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mismatched vector sizes",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((b instanceof cljs.core.List)){
var b__$1 = b;
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__9664 = (i + (1));
var G__9665 = (res + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,(i | (0))) * b__$1.get((i | (0)))));
i = G__9664;
res = G__9665;
continue;
}
break;
}
} else {
if((Array === b.constructor)){
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__9666 = (i + (1));
var G__9667 = (res + (cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,(i | (0))) * cljs.core.nth.cljs$core$IFn$_invoke$arity$2(b,i)));
i = G__9666;
res = G__9667;
continue;
}
break;
}
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,a__$1,clojure.core.matrix.protocols.element_seq(b)));

}
}
}
} else {
return clojure.core.matrix.protocols.inner_product(a__$1,b);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first(a__$1) === 'number'){
var n = cljs.core.long$(cljs.core.count(a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,i);
var G__9668 = (i + (1));
var G__9669 = (res + (x * x));
i = G__9668;
res = G__9669;
continue;
} else {
return Math.sqrt(res);
}
break;
}
} else {
var G__9662 = clojure.core.matrix.protocols.length_squared(a__$1);
return Math.sqrt(G__9662);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length_squared$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first(a__$1) === 'number'){
var n = cljs.core.long$(cljs.core.count(a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,i);
var G__9670 = (i + (1));
var G__9671 = (res + (x * x));
i = G__9670;
res = G__9671;
continue;
} else {
return res;
}
break;
}
} else {
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3(a__$1,((function (a__$1){
return (function (r,x){
return (r + (x * x));
});})(a__$1))
,0.0);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$normalise$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.scale(a__$1,(1.0 / (function (){var G__9663 = clojure.core.matrix.protocols.length_squared(a__$1);
return Math.sqrt(G__9663);
})()));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$mutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return null;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$immutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$distance$arity$2 = (function (a,b){
var a__$1 = this;
return clojure.core.matrix.protocols.length(clojure.core.matrix.protocols.matrix_sub(b,a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$element_sum$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$2(a__$1,cljs.core._PLUS_);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$coerce_param$arity$2 = (function (m,param){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce(param);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$matrix_equals$arity$2 = (function (a,b){
var a__$1 = this;
var bdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b));
var acount = cljs.core.long$(cljs.core.count(a__$1));
if((bdims <= (0))){
return false;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(acount,clojure.core.matrix.protocols.dimension_count(b,(0)))){
return false;
} else {
if(((1) === bdims)){
var and__4120__auto__ = ((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a__$1)));
if(and__4120__auto__){
var i = (0);
while(true){
if((i < acount)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,i),clojure.core.matrix.protocols.get_1d(b,i)))){
var G__9672 = (i + (1));
i = G__9672;
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
return and__4120__auto__;
}
} else {
if(cljs.core.vector_QMARK_(b)){
var n = acount;
var i = (0);
while(true){
if((i < n)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,i),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(i) : b.call(null,i))))){
var G__9673 = (i + (1));
i = G__9673;
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
var sa = cljs.core.seq(a__$1);
var sb = clojure.core.matrix.protocols.get_major_slice_seq(b);
while(true){
if(sa){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals(cljs.core.first(sa),cljs.core.first(sb)))){
var G__9674 = cljs.core.next(sa);
var G__9675 = cljs.core.next(sb);
sa = G__9674;
sb = G__9675;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}

}
}
}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$element_multiply$arity$2 = (function (m,a){
var m__$1 = this;
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale(m__$1,a);
} else {
var vec__9677 = clojure.core.matrix.protocols.broadcast_compatible(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9677,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9677,(1),null);
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m__$2,cljs.core._STAR_,a__$1);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$matrix_multiply$arity$2 = (function (m,a){
var m__$1 = this;
var mdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m__$1));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale(m__$1,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
return cljs.core.vec((function (){var iter__4523__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__9680(s__9681){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__9681__$1 = s__9681;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9681__$1);
if(temp__5720__auto__){
var s__9681__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9681__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9681__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9683 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9682 = (0);
while(true){
if((i__9682 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9682);
cljs.core.chunk_append(b__9683,(function (){var r = clojure.core.matrix.protocols.get_column(a,i);
return clojure.core.matrix.protocols.vector_dot(m__$1,r);
})());

var G__9688 = (i__9682 + (1));
i__9682 = G__9688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9683),clojure$core$matrix$impl$persistent_vector$iter__9680(cljs.core.chunk_rest(s__9681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9683),null);
}
} else {
var i = cljs.core.first(s__9681__$2);
return cljs.core.cons((function (){var r = clojure.core.matrix.protocols.get_column(a,i);
return clojure.core.matrix.protocols.vector_dot(m__$1,r);
})(),clojure$core$matrix$impl$persistent_vector$iter__9680(cljs.core.rest(s__9681__$2)));
}
} else {
return null;
}
break;
}
});})(mdims,adims,m__$1))
,null,null));
});})(mdims,adims,m__$1))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(a,(1))));
})());
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot(m__$1,a);
} else {
if((((mdims === (2))) && ((adims === (1))))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (mdims,adims,m__$1){
return (function (p1__9676_SHARP_){
return clojure.core.matrix.protocols.vector_dot(p1__9676_SHARP_,a);
});})(mdims,adims,m__$1))
,m__$1);
} else {
if((((mdims === (2))) && ((adims === (2))))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (mdims,adims,m__$1){
return (function (r){
return cljs.core.vec((function (){var iter__4523__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__9684(s__9685){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__9685__$1 = s__9685;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9685__$1);
if(temp__5720__auto__){
var s__9685__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9685__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9685__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9687 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9686 = (0);
while(true){
if((i__9686 < size__4522__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9686);
cljs.core.chunk_append(b__9687,clojure.core.matrix.protocols.vector_dot(r,clojure.core.matrix.protocols.get_column(a,j)));

var G__9689 = (i__9686 + (1));
i__9686 = G__9689;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9687),clojure$core$matrix$impl$persistent_vector$iter__9684(cljs.core.chunk_rest(s__9685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9687),null);
}
} else {
var j = cljs.core.first(s__9685__$2);
return cljs.core.cons(clojure.core.matrix.protocols.vector_dot(r,clojure.core.matrix.protocols.get_column(a,j)),clojure$core$matrix$impl$persistent_vector$iter__9684(cljs.core.rest(s__9685__$2)));
}
} else {
return null;
}
break;
}
});})(mdims,adims,m__$1))
,null,null));
});})(mdims,adims,m__$1))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(a,(1))));
})());
});})(mdims,adims,m__$1))
,m__$1);
} else {
return clojure.core.matrix.protocols.inner_product(m__$1,a);

}
}
}
}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$inner_product$arity$2 = (function (m,a){
var m__$1 = this;
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
var mdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m__$1));
if(((0) === adims)){
return clojure.core.matrix.protocols.scale(m__$1,clojure.core.matrix.protocols.get_0d(a));
} else {
if((!((cljs.core.long$(cljs.core.last(clojure.core.matrix.protocols.get_shape(m__$1))) === cljs.core.long$(cljs.core.first(clojure.core.matrix.protocols.get_shape(a))))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Incompatible shapes for inner product: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(m__$1))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(a))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(((1) === mdims)){
if(((1) === adims)){
return clojure.core.matrix.protocols.element_sum(clojure.core.matrix.protocols.element_multiply(m__$1,a));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.matrix_add,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (adims,mdims,m__$1){
return (function (sl,x){
return clojure.core.matrix.protocols.scale(sl,x);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq(a),clojure.core.matrix.protocols.get_major_slice_seq(m__$1)));
}
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (adims,mdims,m__$1){
return (function (p1__9690_SHARP_){
return clojure.core.matrix.protocols.inner_product(p1__9690_SHARP_,a);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq(m__$1));

}
}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$outer_product$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m__$1,((function (m__$1){
return (function (v){
return clojure.core.matrix.protocols.pre_scale(a,v);
});})(m__$1))
);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.matrix_multiply(m__$1,a);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.assign_BANG_(a,clojure.core.matrix.protocols.matrix_multiply(m__$1,a));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2(((function (m__$1){
return (function (p1__9691_SHARP_){
return (p1__9691_SHARP_ * a);
});})(m__$1))
,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2(((function (m__$1){
return (function (p1__9692_SHARP_){
return (a * p1__9692_SHARP_);
});})(m__$1))
,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$square$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,m__$1,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$swap_rows$arity$3 = (function (m,i,j){
var m__$1 = this;
var i__$1 = cljs.core.long$(i);
var j__$1 = cljs.core.long$(j);
if((i__$1 === j__$1)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,i__$1,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(j__$1) : m__$1.call(null,j__$1))),j__$1,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i__$1) : m__$1.call(null,i__$1)));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$multiply_row$arity$3 = (function (m,i,factor){
var m__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,i,clojure.core.matrix.protocols.scale((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i) : m__$1.call(null,i)),factor));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$add_row$arity$4 = (function (m,i,j,factor){
var m__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,i,clojure.core.matrix.protocols.matrix_add((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i) : m__$1.call(null,i)),clojure.core.matrix.protocols.matrix_multiply((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(j) : m__$1.call(null,j)),factor)));
});
clojure.core.matrix.impl.persistent_vector.build_maths_function = (function clojure$core$matrix$impl$persistent_vector$build_maths_function(p__9694){
var vec__9695 = p__9694;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9695,(0),null);
var func = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9695,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$m,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$clojure$core$matrix$impl$common_SLASH_mapmatrix,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$x__9693__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_double,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,func,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_double,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$x__9693__auto__,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.cst$sym$m,null,(1),null))], 0)))),null,(1),null))], 0))));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count(m__$1))){
return (1);
} else {
return (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0)))) + (1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
var pv__8853__auto__ = m__$1;
return ((((0) === cljs.core.count(pv__8853__auto__))) || (((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pv__8853__auto__,(0)))))));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.count(m__$1);
return cljs.core.cons(c,(((c > (0)))?clojure.core.matrix.protocols.get_shape(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0))):null));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
var x__$1 = cljs.core.long$(x);
if((x__$1 === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0)),(x__$1 - (1)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$element_count$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.long$(cljs.core.count(m__$1));
if((c === (0))){
return (0);
} else {
return (c * clojure.core.matrix.protocols.element_count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0))));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if(clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_(m__$1)){
return m__$1;
} else {
var m__$2 = clojure.core.matrix.impl.persistent_vector.mapv_identity_check(clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
var m_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,m__$2);
if(cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.first(m_shapes)),cljs.core.rest(m_shapes))){
return m__$2;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't convert to persistent vector array: inconsistent shape.",cljs.core.PersistentArrayMap.EMPTY);
}
}
});
/**
 * Copy an arbitrary array to a region of a double array.
 * Assumes size represents the element count of the array, must be greater than zero.
 */
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_ = (function clojure$core$matrix$impl$persistent_vector$copy_to_double_array_BANG_(m,arr,off,size){
if(typeof m === 'number'){
if((size === (1))){
return (arr[off] = m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid shape while copying to double array",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core.vector_QMARK_(m)){
var m__$1 = m;
var ct = cljs.core.count(m__$1);
var skip = cljs.core.quot(size,ct);
var n__4607__auto__ = ct;
var i = (0);
while(true){
if((i < n__4607__auto__)){
var slc_9704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,i);
var G__9700_9705 = slc_9704;
var G__9701_9706 = arr;
var G__9702_9707 = (off + (i * skip));
var G__9703_9708 = skip;
(clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.cljs$core$IFn$_invoke$arity$4 ? clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.cljs$core$IFn$_invoke$arity$4(G__9700_9705,G__9701_9706,G__9702_9707,G__9703_9708) : clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.call(null,G__9700_9705,G__9701_9706,G__9702_9707,G__9703_9708));

var G__9709 = (i + (1));
i = G__9709;
continue;
} else {
return null;
}
break;
}
} else {
var vals__2015__auto__ = cljs.core.seq(clojure.core.matrix.protocols.element_seq(m));
var i = cljs.core.long$((0));
while(true){
if(vals__2015__auto__){
var v = cljs.core.first(vals__2015__auto__);
(arr[(off + i)] = v);

var G__9710 = cljs.core.next(vals__2015__auto__);
var G__9711 = (i + (1));
vals__2015__auto__ = G__9710;
i = G__9711;
continue;
} else {
return null;
}
break;
}

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$to_double_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$(clojure.core.matrix.protocols.element_count(m__$1));
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(size);
var ct = cljs.core.count(m__$1);
if((size > (0))){
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_(m__$1,arr,(0),size);
} else {
}

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$as_double_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
clojure.core.matrix.impl.persistent_vector.copy_to_object_array = (function clojure$core$matrix$impl$persistent_vector$copy_to_object_array(m,arr,off,size){
var ct = cljs.core.count(m);
if((!(cljs.core.vector_QMARK_(m)))){
var vals__2015__auto___9716 = cljs.core.seq(clojure.core.matrix.protocols.element_seq(m));
var i_9717 = cljs.core.long$((0));
while(true){
if(vals__2015__auto___9716){
var v_9718 = cljs.core.first(vals__2015__auto___9716);
(arr[(off + i_9717)] = v_9718);

var G__9719 = cljs.core.next(vals__2015__auto___9716);
var G__9720 = (i_9717 + (1));
vals__2015__auto___9716 = G__9719;
i_9717 = G__9720;
continue;
} else {
}
break;
}
} else {
if((((size === ct)) && ((!(cljs.core.vector_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(m,(0),null))))))){
var n__4607__auto___9721 = size;
var i_9722 = (0);
while(true){
if((i_9722 < n__4607__auto___9721)){
(arr[(off + i_9722)] = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i_9722));

var G__9723 = (i_9722 + (1));
i_9722 = G__9723;
continue;
} else {
}
break;
}
} else {
var skip_9724 = cljs.core.quot(size,ct);
var n__4607__auto___9725 = ct;
var i_9726 = (0);
while(true){
if((i_9726 < n__4607__auto___9725)){
var G__9712_9727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i_9726);
var G__9713_9728 = arr;
var G__9714_9729 = (off + (i_9726 * skip_9724));
var G__9715_9730 = skip_9724;
(clojure.core.matrix.impl.persistent_vector.copy_to_object_array.cljs$core$IFn$_invoke$arity$4 ? clojure.core.matrix.impl.persistent_vector.copy_to_object_array.cljs$core$IFn$_invoke$arity$4(G__9712_9727,G__9713_9728,G__9714_9729,G__9715_9730) : clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,G__9712_9727,G__9713_9728,G__9714_9729,G__9715_9730));

var G__9731 = (i_9726 + (1));
i_9726 = G__9731;
continue;
} else {
}
break;
}

}
}

return arr;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$to_object_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$(clojure.core.matrix.protocols.element_count(m__$1));
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(size);
var ct = cljs.core.count(m__$1);
clojure.core.matrix.impl.persistent_vector.copy_to_object_array(m__$1,arr,(0),size);

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$as_object_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count(m__$1))){
return null;
} else {
if((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,(0)))) >= (1))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));
} else {
return m__$1;

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2(f,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__9734 = clojure.core.matrix.protocols.broadcast_same_shape(m__$1,a);
var m__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9734,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9734,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(f,m__$2,a__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var arrays = cljs.core.cons(m__$1,cljs.core.cons(a,more));
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__4131__auto__ = clojure.core.matrix.protocols.common_shape(shapes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempt to do element map with incompatible shapes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (arrays,shapes,sh,m__$1){
return (function (p1__9732_SHARP_){
return clojure.core.matrix.protocols.broadcast(p1__9732_SHARP_,sh);
});})(arrays,shapes,sh,m__$1))
,arrays);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var seq__9737_9741 = cljs.core.seq(m__$1);
var chunk__9738_9742 = null;
var count__9739_9743 = (0);
var i__9740_9744 = (0);
while(true){
if((i__9740_9744 < count__9739_9743)){
var s_9745 = chunk__9738_9742.cljs$core$IIndexed$_nth$arity$2(null,i__9740_9744);
clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(s_9745,f);


var G__9746 = seq__9737_9741;
var G__9747 = chunk__9738_9742;
var G__9748 = count__9739_9743;
var G__9749 = (i__9740_9744 + (1));
seq__9737_9741 = G__9746;
chunk__9738_9742 = G__9747;
count__9739_9743 = G__9748;
i__9740_9744 = G__9749;
continue;
} else {
var temp__5720__auto___9750 = cljs.core.seq(seq__9737_9741);
if(temp__5720__auto___9750){
var seq__9737_9751__$1 = temp__5720__auto___9750;
if(cljs.core.chunked_seq_QMARK_(seq__9737_9751__$1)){
var c__4550__auto___9752 = cljs.core.chunk_first(seq__9737_9751__$1);
var G__9753 = cljs.core.chunk_rest(seq__9737_9751__$1);
var G__9754 = c__4550__auto___9752;
var G__9755 = cljs.core.count(c__4550__auto___9752);
var G__9756 = (0);
seq__9737_9741 = G__9753;
chunk__9738_9742 = G__9754;
count__9739_9743 = G__9755;
i__9740_9744 = G__9756;
continue;
} else {
var s_9757 = cljs.core.first(seq__9737_9751__$1);
clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(s_9757,f);


var G__9758 = cljs.core.next(seq__9737_9751__$1);
var G__9759 = null;
var G__9760 = (0);
var G__9761 = (0);
seq__9737_9741 = G__9758;
chunk__9738_9742 = G__9759;
count__9739_9743 = G__9760;
i__9740_9744 = G__9761;
continue;
}
} else {
}
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__4607__auto___9762 = cljs.core.count(m__$1);
var i_9763 = (0);
while(true){
if((i_9763 < n__4607__auto___9762)){
clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$3((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_9763) : m__$1.call(null,i_9763)),f,clojure.core.matrix.protocols.get_major_slice(a,i_9763));

var G__9764 = (i_9763 + (1));
i_9763 = G__9764;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__4607__auto___9765 = cljs.core.count(m__$1);
var i_9766 = (0);
while(true){
if((i_9766 < n__4607__auto___9765)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$5(clojure.core.matrix.protocols.element_map_BANG_,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_9766) : m__$1.call(null,i_9766)),f,clojure.core.matrix.protocols.get_major_slice(a,i_9766),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i_9766,n__4607__auto___9765,m__$1){
return (function (p1__9733_SHARP_){
return clojure.core.matrix.protocols.get_major_slice(p1__9733_SHARP_,i_9766);
});})(i_9766,n__4607__auto___9765,m__$1))
,more));

var G__9767 = (i_9766 + (1));
i_9766 = G__9767;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f,clojure.core.matrix.protocols.element_seq(m__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,init,clojure.core.matrix.protocols.element_seq(m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(ms__$1));
if(((0) === dims)){
var G__9787 = cljs.core.PersistentVector.EMPTY;
var G__9788 = (function (){var x__2050__auto__ = ms__$1;
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
})();
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9787,G__9788) : f.call(null,G__9787,G__9788));
} else {
if(((1) === dims)){
return cljs.core.vec((function (){var iter__4523__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__9789(s__9790){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__9790__$1 = s__9790;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9790__$1);
if(temp__5720__auto__){
var s__9790__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9790__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9790__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9792 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9791 = (0);
while(true){
if((i__9791 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9791);
cljs.core.chunk_append(b__9792,(function (){var G__9793 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null);
var G__9794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms__$1,i);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9793,G__9794) : f.call(null,G__9793,G__9794));
})());

var G__9810 = (i__9791 + (1));
i__9791 = G__9810;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9792),clojure$core$matrix$impl$persistent_vector$iter__9789(cljs.core.chunk_rest(s__9790__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9792),null);
}
} else {
var i = cljs.core.first(s__9790__$2);
return cljs.core.cons((function (){var G__9795 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null);
var G__9796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms__$1,i);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9795,G__9796) : f.call(null,G__9795,G__9796));
})(),clojure$core$matrix$impl$persistent_vector$iter__9789(cljs.core.rest(s__9790__$2)));
}
} else {
return null;
}
break;
}
});})(dims,ms__$1))
,null,null));
});})(dims,ms__$1))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)));
})());
} else {
return cljs.core.vec((function (){var iter__4523__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__9797(s__9798){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__9798__$1 = s__9798;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__9798__$1);
if(temp__5720__auto__){
var s__9798__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__9798__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__9798__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__9800 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__9799 = (0);
while(true){
if((i__9799 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__9799);
cljs.core.chunk_append(b__9800,clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms__$1,i),((function (i__9799,i,c__4521__auto__,size__4522__auto__,b__9800,s__9798__$2,temp__5720__auto__,dims,ms__$1){
return (function (p1__9768_SHARP_,p2__9769_SHARP_){
var G__9801 = cljs.core.cons(i,p1__9768_SHARP_);
var G__9802 = p2__9769_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9801,G__9802) : f.call(null,G__9801,G__9802));
});})(i__9799,i,c__4521__auto__,size__4522__auto__,b__9800,s__9798__$2,temp__5720__auto__,dims,ms__$1))
));

var G__9811 = (i__9799 + (1));
i__9799 = G__9811;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__9800),clojure$core$matrix$impl$persistent_vector$iter__9797(cljs.core.chunk_rest(s__9798__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__9800),null);
}
} else {
var i = cljs.core.first(s__9798__$2);
return cljs.core.cons(clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ms__$1,i),((function (i,s__9798__$2,temp__5720__auto__,dims,ms__$1){
return (function (p1__9768_SHARP_,p2__9769_SHARP_){
var G__9803 = cljs.core.cons(i,p1__9768_SHARP_);
var G__9804 = p2__9769_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9803,G__9804) : f.call(null,G__9803,G__9804));
});})(i,s__9798__$2,temp__5720__auto__,dims,ms__$1))
),clojure$core$matrix$impl$persistent_vector$iter__9797(cljs.core.rest(s__9798__$2)));
}
} else {
return null;
}
break;
}
});})(dims,ms__$1))
,null,null));
});})(dims,ms__$1))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)));
})());

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var as__$1 = clojure.core.matrix.protocols.broadcast_like(ms__$1,as);
var dima = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(as__$1));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(ms__$1))){
if((dima > (1))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("mapping with array of higher dimensionality?",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((((1) === dima)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.dimension_count(ms__$1,(0)),clojure.core.matrix.protocols.dimension_count(as__$1,(0)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Incompatible vector sizes",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((0) === dima)){
var v = (function (){var x__2050__auto__ = as__$1;
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
})();
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (v,as__$1,dima,ms__$1){
return (function (p1__9770_SHARP_,p2__9771_SHARP_){
var G__9805 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9770_SHARP_], null);
var G__9806 = p2__9771_SHARP_;
var G__9807 = v;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__9805,G__9806,G__9807) : f.call(null,G__9805,G__9806,G__9807));
});})(v,as__$1,dima,ms__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)));

return ms__$1;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4(((function (as__$1,dima,ms__$1){
return (function() { 
var G__9812__delegate = function (p1__9772_SHARP_,rest__9773_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9772_SHARP_], null),rest__9773_SHARP_);
};
var G__9812 = function (p1__9772_SHARP_,var_args){
var rest__9773_SHARP_ = null;
if (arguments.length > 1) {
var G__9813__i = 0, G__9813__a = new Array(arguments.length -  1);
while (G__9813__i < G__9813__a.length) {G__9813__a[G__9813__i] = arguments[G__9813__i + 1]; ++G__9813__i;}
  rest__9773_SHARP_ = new cljs.core.IndexedSeq(G__9813__a,0,null);
} 
return G__9812__delegate.call(this,p1__9772_SHARP_,rest__9773_SHARP_);};
G__9812.cljs$lang$maxFixedArity = 1;
G__9812.cljs$lang$applyTo = (function (arglist__9814){
var p1__9772_SHARP_ = cljs.core.first(arglist__9814);
var rest__9773_SHARP_ = cljs.core.rest(arglist__9814);
return G__9812__delegate(p1__9772_SHARP_,rest__9773_SHARP_);
});
G__9812.cljs$core$IFn$_invoke$arity$variadic = G__9812__delegate;
return G__9812;
})()
;})(as__$1,dima,ms__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1,clojure.core.matrix.protocols.element_seq(as__$1));
}
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4(((function (as__$1,dima,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$3(m,((function (as__$1,dima,ms__$1){
return (function() { 
var G__9815__delegate = function (p1__9774_SHARP_,rest__9775_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i,p1__9774_SHARP_),rest__9775_SHARP_);
};
var G__9815 = function (p1__9774_SHARP_,var_args){
var rest__9775_SHARP_ = null;
if (arguments.length > 1) {
var G__9816__i = 0, G__9816__a = new Array(arguments.length -  1);
while (G__9816__i < G__9816__a.length) {G__9816__a[G__9816__i] = arguments[G__9816__i + 1]; ++G__9816__i;}
  rest__9775_SHARP_ = new cljs.core.IndexedSeq(G__9816__a,0,null);
} 
return G__9815__delegate.call(this,p1__9774_SHARP_,rest__9775_SHARP_);};
G__9815.cljs$lang$maxFixedArity = 1;
G__9815.cljs$lang$applyTo = (function (arglist__9817){
var p1__9774_SHARP_ = cljs.core.first(arglist__9817);
var rest__9775_SHARP_ = cljs.core.rest(arglist__9817);
return G__9815__delegate(p1__9774_SHARP_,rest__9775_SHARP_);
});
G__9815.cljs$core$IFn$_invoke$arity$variadic = G__9815__delegate;
return G__9815;
})()
;})(as__$1,dima,ms__$1))
,a);
});})(as__$1,dima,ms__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1,clojure.core.matrix.protocols.get_major_slice_seq(as__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(ms__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__9818__delegate = function (p1__9776_SHARP_,rest__9777_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9776_SHARP_], null),rest__9777_SHARP_);
};
var G__9818 = function (p1__9776_SHARP_,var_args){
var rest__9777_SHARP_ = null;
if (arguments.length > 1) {
var G__9819__i = 0, G__9819__a = new Array(arguments.length -  1);
while (G__9819__i < G__9819__a.length) {G__9819__a[G__9819__i] = arguments[G__9819__i + 1]; ++G__9819__i;}
  rest__9777_SHARP_ = new cljs.core.IndexedSeq(G__9819__a,0,null);
} 
return G__9818__delegate.call(this,p1__9776_SHARP_,rest__9777_SHARP_);};
G__9818.cljs$lang$maxFixedArity = 1;
G__9818.cljs$lang$applyTo = (function (arglist__9820){
var p1__9776_SHARP_ = cljs.core.first(arglist__9820);
var rest__9777_SHARP_ = cljs.core.rest(arglist__9820);
return G__9818__delegate(p1__9776_SHARP_,rest__9777_SHARP_);
});
G__9818.cljs$core$IFn$_invoke$arity$variadic = G__9818__delegate;
return G__9818;
})()
;})(ms__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1,as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__9821__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$4(m,((function (ms__$1){
return (function() { 
var G__9822__delegate = function (p1__9778_SHARP_,rest__9779_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i,p1__9778_SHARP_),rest__9779_SHARP_);
};
var G__9822 = function (p1__9778_SHARP_,var_args){
var rest__9779_SHARP_ = null;
if (arguments.length > 1) {
var G__9823__i = 0, G__9823__a = new Array(arguments.length -  1);
while (G__9823__i < G__9823__a.length) {G__9823__a[G__9823__i] = arguments[G__9823__i + 1]; ++G__9823__i;}
  rest__9779_SHARP_ = new cljs.core.IndexedSeq(G__9823__a,0,null);
} 
return G__9822__delegate.call(this,p1__9778_SHARP_,rest__9779_SHARP_);};
G__9822.cljs$lang$maxFixedArity = 1;
G__9822.cljs$lang$applyTo = (function (arglist__9824){
var p1__9778_SHARP_ = cljs.core.first(arglist__9824);
var rest__9779_SHARP_ = cljs.core.rest(arglist__9824);
return G__9822__delegate(p1__9778_SHARP_,rest__9779_SHARP_);
});
G__9822.cljs$core$IFn$_invoke$arity$variadic = G__9822__delegate;
return G__9822;
})()
;})(ms__$1))
,a,mr);
};
var G__9821 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__9825__i = 0, G__9825__a = new Array(arguments.length -  3);
while (G__9825__i < G__9825__a.length) {G__9825__a[G__9825__i] = arguments[G__9825__i + 3]; ++G__9825__i;}
  mr = new cljs.core.IndexedSeq(G__9825__a,0,null);
} 
return G__9821__delegate.call(this,i,m,a,mr);};
G__9821.cljs$lang$maxFixedArity = 3;
G__9821.cljs$lang$applyTo = (function (arglist__9826){
var i = cljs.core.first(arglist__9826);
arglist__9826 = cljs.core.next(arglist__9826);
var m = cljs.core.first(arglist__9826);
arglist__9826 = cljs.core.next(arglist__9826);
var a = cljs.core.first(arglist__9826);
var mr = cljs.core.rest(arglist__9826);
return G__9821__delegate(i,m,a,mr);
});
G__9821.cljs$core$IFn$_invoke$arity$variadic = G__9821__delegate;
return G__9821;
})()
;})(ms__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(ms__$1)),ms__$1,as,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var n__4607__auto___9827 = cljs.core.count(m__$1);
var i_9828 = (0);
while(true){
if((i_9828 < n__4607__auto___9827)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$core$IFn$_invoke$arity$2((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_9828) : m__$1.call(null,i_9828)),((function (i_9828,n__4607__auto___9827,m__$1){
return (function (p1__9780_SHARP_,p2__9781_SHARP_){
var G__9808 = cljs.core.cons(i_9828,p1__9780_SHARP_);
var G__9809 = p2__9781_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__9808,G__9809) : f.call(null,G__9808,G__9809));
});})(i_9828,n__4607__auto___9827,m__$1))
);

var G__9829 = (i_9828 + (1));
i_9828 = G__9829;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__4607__auto___9830 = cljs.core.count(m__$1);
var i_9831 = (0);
while(true){
if((i_9831 < n__4607__auto___9830)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.cljs$core$IFn$_invoke$arity$3((m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_9831) : m__$1.call(null,i_9831)),((function (i_9831,n__4607__auto___9830,m__$1){
return (function() { 
var G__9832__delegate = function (p1__9782_SHARP_,rest__9783_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i_9831,p1__9782_SHARP_),rest__9783_SHARP_);
};
var G__9832 = function (p1__9782_SHARP_,var_args){
var rest__9783_SHARP_ = null;
if (arguments.length > 1) {
var G__9833__i = 0, G__9833__a = new Array(arguments.length -  1);
while (G__9833__i < G__9833__a.length) {G__9833__a[G__9833__i] = arguments[G__9833__i + 1]; ++G__9833__i;}
  rest__9783_SHARP_ = new cljs.core.IndexedSeq(G__9833__a,0,null);
} 
return G__9832__delegate.call(this,p1__9782_SHARP_,rest__9783_SHARP_);};
G__9832.cljs$lang$maxFixedArity = 1;
G__9832.cljs$lang$applyTo = (function (arglist__9834){
var p1__9782_SHARP_ = cljs.core.first(arglist__9834);
var rest__9783_SHARP_ = cljs.core.rest(arglist__9834);
return G__9832__delegate(p1__9782_SHARP_,rest__9783_SHARP_);
});
G__9832.cljs$core$IFn$_invoke$arity$variadic = G__9832__delegate;
return G__9832;
})()
;})(i_9831,n__4607__auto___9830,m__$1))
,clojure.core.matrix.protocols.get_major_slice(a,i_9831));

var G__9835 = (i_9831 + (1));
i_9831 = G__9835;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__4607__auto___9836 = cljs.core.count(m__$1);
var i_9837 = (0);
while(true){
if((i_9837 < n__4607__auto___9836)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$5(clojure.core.matrix.protocols.element_map_indexed_BANG_,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(i_9837) : m__$1.call(null,i_9837)),((function (i_9837,n__4607__auto___9836,m__$1){
return (function() { 
var G__9838__delegate = function (p1__9784_SHARP_,rest__9785_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.cons(i_9837,p1__9784_SHARP_),rest__9785_SHARP_);
};
var G__9838 = function (p1__9784_SHARP_,var_args){
var rest__9785_SHARP_ = null;
if (arguments.length > 1) {
var G__9839__i = 0, G__9839__a = new Array(arguments.length -  1);
while (G__9839__i < G__9839__a.length) {G__9839__a[G__9839__i] = arguments[G__9839__i + 1]; ++G__9839__i;}
  rest__9785_SHARP_ = new cljs.core.IndexedSeq(G__9839__a,0,null);
} 
return G__9838__delegate.call(this,p1__9784_SHARP_,rest__9785_SHARP_);};
G__9838.cljs$lang$maxFixedArity = 1;
G__9838.cljs$lang$applyTo = (function (arglist__9840){
var p1__9784_SHARP_ = cljs.core.first(arglist__9840);
var rest__9785_SHARP_ = cljs.core.rest(arglist__9840);
return G__9838__delegate(p1__9784_SHARP_,rest__9785_SHARP_);
});
G__9838.cljs$core$IFn$_invoke$arity$variadic = G__9838__delegate;
return G__9838;
})()
;})(i_9837,n__4607__auto___9836,m__$1))
,clojure.core.matrix.protocols.get_major_slice(a,i_9837),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i_9837,n__4607__auto___9836,m__$1){
return (function (p1__9786_SHARP_){
return clojure.core.matrix.protocols.get_major_slice(p1__9786_SHARP_,i_9837);
});})(i_9837,n__4607__auto___9836,m__$1))
,more));

var G__9841 = (i_9837 + (1));
i_9837 = G__9841;
continue;
} else {
}
break;
}

return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$select$arity$2 = (function (a,args){
var a__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),clojure.core.matrix.protocols.dimensionality(a__$1))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (a__$1){
return (function (p1__9842_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,p1__9842_SHARP_);
});})(a__$1))
,cljs.core.first(args)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Array dimension does not match length of args",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (a__$1){
return (function (p1__9843_SHARP_){
return clojure.core.matrix.protocols.select(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(a__$1,p1__9843_SHARP_),cljs.core.next(args));
});})(a__$1))
,cljs.core.first(args)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$index_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
});
clojure.core.matrix.implementations.register_implementation.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
