// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.core.matrix.impl.persistent_vector');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.impl.mathsops');
/**
 * Ensures a vector is fully coerced to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.coerce_nested = (function clojure$core$matrix$impl$persistent_vector$coerce_nested(v){
return cljs.core.mapv.call(null,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce,v);
});
/**
 * Maps a function over a persistent vector, only modifying the vector if the function
 * returns a different value
 */
clojure.core.matrix.impl.persistent_vector.mapv_identity_check = (function clojure$core$matrix$impl$persistent_vector$mapv_identity_check(f,v){
var n = cljs.core.count.call(null,v);
var i = (0);
var v__$1 = v;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,v__$1,i);
var y = f.call(null,x);
var G__16271 = (i + (1));
var G__16272 = (((x === y))?v__$1:cljs.core.assoc.call(null,v__$1,i,y));
i = G__16271;
v__$1 = G__16272;
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
var and__4120__auto____$1 = (cljs.core.count.call(null,v) === cljs.core.long$.call(null,cljs.core.first.call(null,shape)));
if(and__4120__auto____$1){
var temp__5718__auto__ = cljs.core.next.call(null,shape);
if(temp__5718__auto__){
var ns = temp__5718__auto__;
return cljs.core.every_QMARK_.call(null,((function (ns,temp__5718__auto__,and__4120__auto____$1,and__4120__auto__){
return (function (p1__16273_SHARP_){
return clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,p1__16273_SHARP_,ns);
});})(ns,temp__5718__auto__,and__4120__auto____$1,and__4120__auto__))
,v);
} else {
return cljs.core.every_QMARK_.call(null,((function (temp__5718__auto__,and__4120__auto____$1,and__4120__auto__){
return (function (p1__16274_SHARP_){
return (!((p1__16274_SHARP_ instanceof cljs.core.PersistentVector)));
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
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,x))){
return true;
} else {
if((!((x instanceof cljs.core.PersistentVector)))){
return false;
} else {
return ((cljs.core.every_QMARK_.call(null,clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_,x)) && (clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,x,clojure.core.matrix.protocols.get_shape.call(null,x))));

}
}
}
});
/**
 * Coerces to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce = (function clojure$core$matrix$impl$persistent_vector$persistent_vector_coerce(x){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
if((dims > (0))){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,x);
} else {
if((((dims === (0))) && (cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,x))))){
return clojure.core.matrix.protocols.get_0d.call(null,x);
} else {
if((x == null)){
return x;
} else {
if((x instanceof cljs.core.IIterable)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested.call(null,x);
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested.call(null,x);
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
if(cljs.core.vector_QMARK_.call(null,m)){
if((cljs.core.count.call(null,m) > (0))){
return ((1) + clojure.core.matrix.impl.persistent_vector.vector_dimensionality.call(null,cljs.core.nth.call(null,m,(0))));
} else {
return (1);
}
} else {
return cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));

}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Implementation for nested Clojure persistent vectors\n             used as matrices"], null);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,length,0.0));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,rows,clojure.core.matrix.protocols.new_vector.call(null,m__$1,columns)));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
var temp__5718__auto__ = cljs.core.seq.call(null,dims);
if(temp__5718__auto__){
var dims__$1 = temp__5718__auto__;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.first.call(null,dims__$1),clojure.core.matrix.protocols.new_matrix_nd.call(null,m__$1,cljs.core.next.call(null,dims__$1))));
} else {
return 0.0;
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,data);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,target_shape){
var m__$1 = this;
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m__$1);
var dims = cljs.core.long$.call(null,cljs.core.count.call(null,mshape));
var tdims = cljs.core.long$.call(null,cljs.core.count.call(null,target_shape));
if((dims > tdims)){
throw cljs.core.ex_info.call(null,"Can't broadcast to a lower dimensional shape",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((!(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core._EQ__EQ_,mshape,cljs.core.take_last.call(null,dims,target_shape)))))){
throw cljs.core.ex_info.call(null,["Incompatible shapes, cannot broadcast shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,mshape))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,target_shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.reduce.call(null,((function (mshape,dims,tdims,m__$1){
return (function (m__$2,dup){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,dup,m__$2));
});})(mshape,dims,tdims,m__$1))
,m__$1,cljs.core.reverse.call(null,cljs.core.drop_last.call(null,dims,target_shape)));

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,a,clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$broadcast_coerce$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var r = cljs.core.nth.call(null,m__$1,(x | (0)));
var x__8671__auto__ = r;
if(typeof x__8671__auto__ === 'number'){
return x__8671__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__8671__auto__);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.call(null,m__$1,(x | (0)));
return clojure.core.matrix.protocols.get_1d.call(null,row,y);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__5718__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5718__auto__){
var indexes__$1 = temp__5718__auto__;
var temp__5718__auto____$1 = cljs.core.next.call(null,indexes__$1);
if(temp__5718__auto____$1){
var next_indexes = temp__5718__auto____$1;
var m__$2 = cljs.core.nth.call(null,m__$1,(cljs.core.first.call(null,indexes__$1) | (0)));
return clojure.core.matrix.protocols.get_nd.call(null,m__$2,next_indexes);
} else {
return cljs.core.nth.call(null,m__$1,(cljs.core.first.call(null,indexes__$1) | (0)));
}
} else {
return m__$1;
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,row,v);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,row,clojure.core.matrix.protocols.set_1d.call(null,m__$1.call(null,row),column,v));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
var temp__5718__auto__ = cljs.core.seq.call(null,indexes);
if(temp__5718__auto__){
var indexes__$1 = temp__5718__auto__;
var fi = cljs.core.first.call(null,indexes__$1);
if(((1) === cljs.core.count.call(null,indexes__$1))){
return cljs.core.assoc.call(null,m__$1,fi,v);
} else {
return cljs.core.assoc.call(null,m__$1,fi,clojure.core.matrix.protocols.set_nd.call(null,m__$1.call(null,fi),cljs.core.next.call(null,indexes__$1),v));
}
} else {
throw cljs.core.ex_info.call(null,"Trying to set on a persistent vector with insufficient indexes?",cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_row$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,cljs.core.long$.call(null,i));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_column$arity$2 = (function (m,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,(1),i);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_major_slice$arity$2 = (function (m,i){
var m__$1 = this;
var sl = cljs.core.nth.call(null,m__$1,cljs.core.long$.call(null,i));
return sl;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_slice$arity$3 = (function (m,dimension,i){
var m__$1 = this;
var dimension__$1 = cljs.core.long$.call(null,dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.get_major_slice.call(null,m__$1,i);
} else {
var sd = (dimension__$1 - (1));
return cljs.core.mapv.call(null,((function (sd,dimension__$1,m__$1){
return (function (p1__16275_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,p1__16275_SHARP_,sd,i);
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
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__16277(s__16278){
return (new cljs.core.LazySeq(null,((function (m__$1){
return (function (){
var s__16278__$1 = s__16278;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16278__$1);
if(temp__5720__auto__){
var s__16278__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16278__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16278__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16280 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16279 = (0);
while(true){
if((i__16279 < size__4522__auto__)){
var j = cljs.core._nth.call(null,c__4521__auto__,i__16279);
cljs.core.chunk_append.call(null,b__16280,cljs.core.mapv.call(null,((function (i__16279,j,c__4521__auto__,size__4522__auto__,b__16280,s__16278__$2,temp__5720__auto__,m__$1){
return (function (p1__16276_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__16276_SHARP_,j);
});})(i__16279,j,c__4521__auto__,size__4522__auto__,b__16280,s__16278__$2,temp__5720__auto__,m__$1))
,m__$1));

var G__16281 = (i__16279 + (1));
i__16279 = G__16281;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16280),clojure$core$matrix$impl$persistent_vector$iter__16277.call(null,cljs.core.chunk_rest.call(null,s__16278__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16280),null);
}
} else {
var j = cljs.core.first.call(null,s__16278__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (j,s__16278__$2,temp__5720__auto__,m__$1){
return (function (p1__16276_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__16276_SHARP_,j);
});})(j,s__16278__$2,temp__5720__auto__,m__$1))
,m__$1),clojure$core$matrix$impl$persistent_vector$iter__16277.call(null,cljs.core.rest.call(null,s__16278__$2)));
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
return iter__4523__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,(1))));
})());
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 = (function (m,dimension,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,dimension,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$join$arity$2 = (function (m,a){
var m__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((dims === adims)){
return cljs.core.vec.call(null,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a)));
} else {
if((dims === (adims + (1)))){
return cljs.core.conj.call(null,m__$1,a);
} else {
throw cljs.core.ex_info.call(null,"Joining with array of incompatible size",cljs.core.PersistentArrayMap.EMPTY);

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$rotate$arity$3 = (function (m,dim,places){
var m__$1 = this;
var dim__$1 = cljs.core.long$.call(null,dim);
var places__$1 = cljs.core.long$.call(null,places);
if(((0) === dim__$1)){
var c = cljs.core.long$.call(null,cljs.core.count.call(null,m__$1));
var sh = cljs.core.long$.call(null,(((c > (0)))?cljs.core.mod.call(null,places__$1,c):(0)));
if((sh === (0))){
return m__$1;
} else {
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,m__$1,sh,c),cljs.core.subvec.call(null,m__$1,(0),sh)));
}
} else {
return cljs.core.mapv.call(null,((function (dim__$1,places__$1,m__$1){
return (function (s){
return clojure.core.matrix.protocols.rotate.call(null,s,(dim__$1 - (1)),places__$1);
});})(dim__$1,places__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PTransposeDims$transpose_dims$arity$2 = (function (m,ordering){
var m__$1 = this;
var temp__5718__auto__ = cljs.core.seq.call(null,ordering);
if(temp__5718__auto__){
var ordering__$1 = temp__5718__auto__;
var dim = cljs.core.long$.call(null,cljs.core.first.call(null,ordering__$1));
var next_ordering = cljs.core.map.call(null,((function (dim,ordering__$1,temp__5718__auto__,m__$1){
return (function (i){
if((i < dim)){
return i;
} else {
return (i - (1));
}
});})(dim,ordering__$1,temp__5718__auto__,m__$1))
,cljs.core.next.call(null,ordering__$1));
var slice_range = cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,dim));
return cljs.core.mapv.call(null,((function (dim,next_ordering,slice_range,ordering__$1,temp__5718__auto__,m__$1){
return (function (si){
return clojure.core.matrix.protocols.transpose_dims.call(null,clojure.core.matrix.protocols.get_slice.call(null,m__$1,dim,si),next_ordering);
});})(dim,next_ordering,slice_range,ordering__$1,temp__5718__auto__,m__$1))
,slice_range);
} else {
return m__$1;
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$2 = (function (m,indices){
var m__$1 = this;
return cljs.core.mapv.call(null,((function (m__$1){
return (function (p1__16282_SHARP_){
return cljs.core.nth.call(null,m__$1,p1__16282_SHARP_);
});})(m__$1))
,clojure.core.matrix.protocols.element_seq.call(null,indices));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$3 = (function (m,dimension,indices){
var m__$1 = this;
var dimension__$1 = cljs.core.long$.call(null,dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.order.call(null,m__$1,indices);
} else {
return cljs.core.mapv.call(null,((function (dimension__$1,m__$1){
return (function (p1__16283_SHARP_){
return clojure.core.matrix.protocols.order.call(null,p1__16283_SHARP_,(dimension__$1 - (1)),indices);
});})(dimension__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 = (function (m,start,length){
var m__$1 = this;
return cljs.core.subvec.call(null,m__$1,start,(cljs.core.long$.call(null,start) + cljs.core.long$.call(null,length)));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$1 = (function (m){
var m__$1 = this;
if(clojure.core.matrix.protocols.same_shapes_QMARK_.call(null,m__$1)){
return clojure.core.matrix.protocols.get_shape.call(null,m__$1);
} else {
throw cljs.core.ex_info.call(null,"Inconsistent shape for persistent vector array.",cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$2 = (function (m,shape){
var m__$1 = this;
if(cljs.core.empty_QMARK_.call(null,shape)){
throw cljs.core.ex_info.call(null,["Expected empty shape for persistent vector: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(cljs.core.truth_(cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.next.call(null,shape),cljs.core.map.call(null,clojure.core.matrix.protocols.validate_shape,m__$1)))){
return shape;
} else {
throw cljs.core.ex_info.call(null,["Inconsistent shape for persistent vector array, expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)," on array ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_add$arity$2 = (function (m,a){
var m__$1 = this;
var vec__16284 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__16284,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__16284,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._PLUS_,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 = (function (m,a){
var m__$1 = this;
var vec__16287 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__16287,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__16287,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$vector_dot$arity$2 = (function (a,b){
var a__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b));
if((((dims === (1))) && (((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
if(cljs.core.not_EQ_.call(null,n,cljs.core.long$.call(null,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,b,(0)))))){
throw cljs.core.ex_info.call(null,"Mismatched vector sizes",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((b instanceof cljs.core.List)){
var b__$1 = b;
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__16290 = (i + (1));
var G__16291 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * b__$1.get((i | (0)))));
i = G__16290;
res = G__16291;
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
var G__16292 = (i + (1));
var G__16293 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * cljs.core.nth.call(null,b,i)));
i = G__16292;
res = G__16293;
continue;
}
break;
}
} else {
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,a__$1,clojure.core.matrix.protocols.element_seq.call(null,b)));

}
}
}
} else {
return clojure.core.matrix.protocols.inner_product.call(null,a__$1,b);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first.call(null,a__$1) === 'number'){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__16294 = (i + (1));
var G__16295 = (res + (x * x));
i = G__16294;
res = G__16295;
continue;
} else {
return Math.sqrt(res);
}
break;
}
} else {
return Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length_squared$arity$1 = (function (a){
var a__$1 = this;
if(typeof cljs.core.first.call(null,a__$1) === 'number'){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__16296 = (i + (1));
var G__16297 = (res + (x * x));
i = G__16296;
res = G__16297;
continue;
} else {
return res;
}
break;
}
} else {
return clojure.core.matrix.protocols.element_reduce.call(null,a__$1,((function (a__$1){
return (function (r,x){
return (r + (x * x));
});})(a__$1))
,0.0);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$normalise$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.scale.call(null,a__$1,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a__$1))));
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
return clojure.core.matrix.protocols.length.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,b,a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$element_sum$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.element_reduce.call(null,a__$1,cljs.core._PLUS_);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$coerce_param$arity$2 = (function (m,param){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,param);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$matrix_equals$arity$2 = (function (a,b){
var a__$1 = this;
var bdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b));
var acount = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
if((bdims <= (0))){
return false;
} else {
if(cljs.core.not_EQ_.call(null,acount,clojure.core.matrix.protocols.dimension_count.call(null,b,(0)))){
return false;
} else {
if(((1) === bdims)){
var and__4120__auto__ = ((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a__$1)));
if(and__4120__auto__){
var i = (0);
while(true){
if((i < acount)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.nth.call(null,a__$1,i),clojure.core.matrix.protocols.get_1d.call(null,b,i)))){
var G__16298 = (i + (1));
i = G__16298;
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
if(cljs.core.vector_QMARK_.call(null,b)){
var n = acount;
var i = (0);
while(true){
if((i < n)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.nth.call(null,a__$1,i),b.call(null,i)))){
var G__16299 = (i + (1));
i = G__16299;
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
var sa = cljs.core.seq.call(null,a__$1);
var sb = clojure.core.matrix.protocols.get_major_slice_seq.call(null,b);
while(true){
if(sa){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.first.call(null,sa),cljs.core.first.call(null,sb)))){
var G__16300 = cljs.core.next.call(null,sa);
var G__16301 = cljs.core.next.call(null,sb);
sa = G__16300;
sb = G__16301;
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
return clojure.core.matrix.protocols.scale.call(null,m__$1,a);
} else {
var vec__16303 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__16303,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__16303,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$2,cljs.core._STAR_,a__$1);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$matrix_multiply$arity$2 = (function (m,a){
var m__$1 = this;
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale.call(null,m__$1,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__16306(s__16307){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__16307__$1 = s__16307;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16307__$1);
if(temp__5720__auto__){
var s__16307__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16307__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16307__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16309 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16308 = (0);
while(true){
if((i__16308 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__16308);
cljs.core.chunk_append.call(null,b__16309,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})());

var G__16314 = (i__16308 + (1));
i__16308 = G__16314;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16309),clojure$core$matrix$impl$persistent_vector$iter__16306.call(null,cljs.core.chunk_rest.call(null,s__16307__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16309),null);
}
} else {
var i = cljs.core.first.call(null,s__16307__$2);
return cljs.core.cons.call(null,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})(),clojure$core$matrix$impl$persistent_vector$iter__16306.call(null,cljs.core.rest.call(null,s__16307__$2)));
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
return iter__4523__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,a);
} else {
if((((mdims === (2))) && ((adims === (1))))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (p1__16302_SHARP_){
return clojure.core.matrix.protocols.vector_dot.call(null,p1__16302_SHARP_,a);
});})(mdims,adims,m__$1))
,m__$1);
} else {
if((((mdims === (2))) && ((adims === (2))))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (r){
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__16310(s__16311){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__16311__$1 = s__16311;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16311__$1);
if(temp__5720__auto__){
var s__16311__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16311__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16311__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16313 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16312 = (0);
while(true){
if((i__16312 < size__4522__auto__)){
var j = cljs.core._nth.call(null,c__4521__auto__,i__16312);
cljs.core.chunk_append.call(null,b__16313,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)));

var G__16315 = (i__16312 + (1));
i__16312 = G__16315;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16313),clojure$core$matrix$impl$persistent_vector$iter__16310.call(null,cljs.core.chunk_rest.call(null,s__16311__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16313),null);
}
} else {
var j = cljs.core.first.call(null,s__16311__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)),clojure$core$matrix$impl$persistent_vector$iter__16310.call(null,cljs.core.rest.call(null,s__16311__$2)));
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
return iter__4523__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
});})(mdims,adims,m__$1))
,m__$1);
} else {
return clojure.core.matrix.protocols.inner_product.call(null,m__$1,a);

}
}
}
}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$inner_product$arity$2 = (function (m,a){
var m__$1 = this;
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
if(((0) === adims)){
return clojure.core.matrix.protocols.scale.call(null,m__$1,clojure.core.matrix.protocols.get_0d.call(null,a));
} else {
if((!((cljs.core.long$.call(null,cljs.core.last.call(null,clojure.core.matrix.protocols.get_shape.call(null,m__$1))) === cljs.core.long$.call(null,cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,a))))))){
throw cljs.core.ex_info.call(null,["Incompatible shapes for inner product: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,m__$1))," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape.call(null,a))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(((1) === mdims)){
if(((1) === adims)){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,m__$1,a));
} else {
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_add,cljs.core.map.call(null,((function (adims,mdims,m__$1){
return (function (sl,x){
return clojure.core.matrix.protocols.scale.call(null,sl,x);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1)));
}
} else {
return cljs.core.mapv.call(null,((function (adims,mdims,m__$1){
return (function (p1__16316_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__16316_SHARP_,a);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1));

}
}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$outer_product$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.element_map.call(null,m__$1,((function (m__$1){
return (function (v){
return clojure.core.matrix.protocols.pre_scale.call(null,a,v);
});})(m__$1))
);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__16317_SHARP_){
return (p1__16317_SHARP_ * a);
});})(m__$1))
,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__16318_SHARP_){
return (a * p1__16318_SHARP_);
});})(m__$1))
,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$square$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._STAR_,m__$1,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$swap_rows$arity$3 = (function (m,i,j){
var m__$1 = this;
var i__$1 = cljs.core.long$.call(null,i);
var j__$1 = cljs.core.long$.call(null,j);
if((i__$1 === j__$1)){
return m__$1;
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,m__$1,i__$1,m__$1.call(null,j__$1)),j__$1,m__$1.call(null,i__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$multiply_row$arity$3 = (function (m,i,factor){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,i,clojure.core.matrix.protocols.scale.call(null,m__$1.call(null,i),factor));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$add_row$arity$4 = (function (m,i,j,factor){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,i,clojure.core.matrix.protocols.matrix_add.call(null,m__$1.call(null,i),clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1.call(null,j),factor)));
});
clojure.core.matrix.impl.persistent_vector.build_maths_function = (function clojure$core$matrix$impl$persistent_vector$build_maths_function(p__16320){
var vec__16321 = p__16320;
var name = cljs.core.nth.call(null,vec__16321,(0),null);
var func = cljs.core.nth.call(null,vec__16321,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m","m",-1021758608,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core.matrix.impl.common","mapmatrix","clojure.core.matrix.impl.common/mapmatrix",1588740294,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__16319__auto__","x__16319__auto__",368495494,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,func,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__16319__auto__","x__16319__auto__",368495494,null),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m","m",-1021758608,null),null,(1),null))))),null,(1),null)))));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count.call(null,m__$1))){
return (1);
} else {
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m__$1,(0)))) + (1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
var pv__15482__auto__ = m__$1;
return ((((0) === cljs.core.count.call(null,pv__15482__auto__))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,pv__15482__auto__,(0)))))));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.count.call(null,m__$1);
return cljs.core.cons.call(null,c,(((c > (0)))?clojure.core.matrix.protocols.get_shape.call(null,cljs.core.nth.call(null,m__$1,(0))):null));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
var x__$1 = cljs.core.long$.call(null,x);
if((x__$1 === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.nth.call(null,m__$1,(0)),(x__$1 - (1)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$element_count$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.long$.call(null,cljs.core.count.call(null,m__$1));
if((c === (0))){
return (0);
} else {
return (c * clojure.core.matrix.protocols.element_count.call(null,cljs.core.nth.call(null,m__$1,(0))));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if(clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_.call(null,m__$1)){
return m__$1;
} else {
var m__$2 = clojure.core.matrix.impl.persistent_vector.mapv_identity_check.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
var m_shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,m__$2);
if(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,m_shapes)),cljs.core.rest.call(null,m_shapes))){
return m__$2;
} else {
throw cljs.core.ex_info.call(null,"Can't convert to persistent vector array: inconsistent shape.",cljs.core.PersistentArrayMap.EMPTY);
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
throw cljs.core.ex_info.call(null,"Invalid shape while copying to double array",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
var m__$1 = m;
var ct = cljs.core.count.call(null,m__$1);
var skip = cljs.core.quot.call(null,size,ct);
var n__4607__auto__ = ct;
var i = (0);
while(true){
if((i < n__4607__auto__)){
var slc_16326 = cljs.core.nth.call(null,m__$1,i);
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.call(null,slc_16326,arr,(off + (i * skip)),skip);

var G__16327 = (i + (1));
i = G__16327;
continue;
} else {
return null;
}
break;
}
} else {
var vals__8636__auto__ = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i = cljs.core.long$.call(null,(0));
while(true){
if(vals__8636__auto__){
var v = cljs.core.first.call(null,vals__8636__auto__);
(arr[(off + i)] = v);

var G__16328 = cljs.core.next.call(null,vals__8636__auto__);
var G__16329 = (i + (1));
vals__8636__auto__ = G__16328;
i = G__16329;
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
var size = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m__$1));
var arr = cljs.core.double_array.call(null,size);
var ct = cljs.core.count.call(null,m__$1);
if((size > (0))){
clojure.core.matrix.impl.persistent_vector.copy_to_double_array_BANG_.call(null,m__$1,arr,(0),size);
} else {
}

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$as_double_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
clojure.core.matrix.impl.persistent_vector.copy_to_object_array = (function clojure$core$matrix$impl$persistent_vector$copy_to_object_array(m,arr,off,size){
var ct = cljs.core.count.call(null,m);
if((!(cljs.core.vector_QMARK_.call(null,m)))){
var vals__8636__auto___16330 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_16331 = cljs.core.long$.call(null,(0));
while(true){
if(vals__8636__auto___16330){
var v_16332 = cljs.core.first.call(null,vals__8636__auto___16330);
(arr[(off + i_16331)] = v_16332);

var G__16333 = cljs.core.next.call(null,vals__8636__auto___16330);
var G__16334 = (i_16331 + (1));
vals__8636__auto___16330 = G__16333;
i_16331 = G__16334;
continue;
} else {
}
break;
}
} else {
if((((size === ct)) && ((!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null))))))){
var n__4607__auto___16335 = size;
var i_16336 = (0);
while(true){
if((i_16336 < n__4607__auto___16335)){
(arr[(off + i_16336)] = cljs.core.nth.call(null,m,i_16336));

var G__16337 = (i_16336 + (1));
i_16336 = G__16337;
continue;
} else {
}
break;
}
} else {
var skip_16338 = cljs.core.quot.call(null,size,ct);
var n__4607__auto___16339 = ct;
var i_16340 = (0);
while(true){
if((i_16340 < n__4607__auto___16339)){
clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,cljs.core.nth.call(null,m,i_16340),arr,(off + (i_16340 * skip_16338)),skip_16338);

var G__16341 = (i_16340 + (1));
i_16340 = G__16341;
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
var size = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m__$1));
var arr = cljs.core.object_array.call(null,size);
var ct = cljs.core.count.call(null,m__$1);
clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,m__$1,arr,(0),size);

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$as_object_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
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

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__16344 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__16344,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__16344,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$2,a__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var arrays = cljs.core.cons.call(null,m__$1,cljs.core.cons.call(null,a,more));
var shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__4131__auto__ = clojure.core.matrix.protocols.common_shape.call(null,shapes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.call(null,["Attempt to do element map with incompatible shapes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.call(null,((function (arrays,shapes,sh,m__$1){
return (function (p1__16342_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__16342_SHARP_,sh);
});})(arrays,shapes,sh,m__$1))
,arrays);
return cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var seq__16347_16351 = cljs.core.seq.call(null,m__$1);
var chunk__16348_16352 = null;
var count__16349_16353 = (0);
var i__16350_16354 = (0);
while(true){
if((i__16350_16354 < count__16349_16353)){
var s_16355 = cljs.core._nth.call(null,chunk__16348_16352,i__16350_16354);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_16355,f);


var G__16356 = seq__16347_16351;
var G__16357 = chunk__16348_16352;
var G__16358 = count__16349_16353;
var G__16359 = (i__16350_16354 + (1));
seq__16347_16351 = G__16356;
chunk__16348_16352 = G__16357;
count__16349_16353 = G__16358;
i__16350_16354 = G__16359;
continue;
} else {
var temp__5720__auto___16360 = cljs.core.seq.call(null,seq__16347_16351);
if(temp__5720__auto___16360){
var seq__16347_16361__$1 = temp__5720__auto___16360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16347_16361__$1)){
var c__4550__auto___16362 = cljs.core.chunk_first.call(null,seq__16347_16361__$1);
var G__16363 = cljs.core.chunk_rest.call(null,seq__16347_16361__$1);
var G__16364 = c__4550__auto___16362;
var G__16365 = cljs.core.count.call(null,c__4550__auto___16362);
var G__16366 = (0);
seq__16347_16351 = G__16363;
chunk__16348_16352 = G__16364;
count__16349_16353 = G__16365;
i__16350_16354 = G__16366;
continue;
} else {
var s_16367 = cljs.core.first.call(null,seq__16347_16361__$1);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_16367,f);


var G__16368 = cljs.core.next.call(null,seq__16347_16361__$1);
var G__16369 = null;
var G__16370 = (0);
var G__16371 = (0);
seq__16347_16351 = G__16368;
chunk__16348_16352 = G__16369;
count__16349_16353 = G__16370;
i__16350_16354 = G__16371;
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
var n__4607__auto___16372 = cljs.core.count.call(null,m__$1);
var i_16373 = (0);
while(true){
if((i_16373 < n__4607__auto___16372)){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1.call(null,i_16373),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_16373));

var G__16374 = (i_16373 + (1));
i_16373 = G__16374;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__4607__auto___16375 = cljs.core.count.call(null,m__$1);
var i_16376 = (0);
while(true){
if((i_16376 < n__4607__auto___16375)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_BANG_,m__$1.call(null,i_16376),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_16376),cljs.core.map.call(null,((function (i_16376,n__4607__auto___16375,m__$1){
return (function (p1__16343_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__16343_SHARP_,i_16376);
});})(i_16376,n__4607__auto___16375,m__$1))
,more));

var G__16377 = (i_16376 + (1));
i_16376 = G__16377;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.call(null,f,init,clojure.core.matrix.protocols.element_seq.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,ms__$1));
if(((0) === dims)){
return f.call(null,cljs.core.PersistentVector.EMPTY,(function (){var x__8671__auto__ = ms__$1;
if(typeof x__8671__auto__ === 'number'){
return x__8671__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__8671__auto__);

}
})());
} else {
if(((1) === dims)){
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__16397(s__16398){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__16398__$1 = s__16398;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16398__$1);
if(temp__5720__auto__){
var s__16398__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16398__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16398__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16400 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16399 = (0);
while(true){
if((i__16399 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__16399);
cljs.core.chunk_append.call(null,b__16400,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)));

var G__16405 = (i__16399 + (1));
i__16399 = G__16405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16400),clojure$core$matrix$impl$persistent_vector$iter__16397.call(null,cljs.core.chunk_rest.call(null,s__16398__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16400),null);
}
} else {
var i = cljs.core.first.call(null,s__16398__$2);
return cljs.core.cons.call(null,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)),clojure$core$matrix$impl$persistent_vector$iter__16397.call(null,cljs.core.rest.call(null,s__16398__$2)));
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
return iter__4523__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());
} else {
return cljs.core.vec.call(null,(function (){var iter__4523__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__16401(s__16402){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__16402__$1 = s__16402;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16402__$1);
if(temp__5720__auto__){
var s__16402__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16402__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__16402__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__16404 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__16403 = (0);
while(true){
if((i__16403 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__16403);
cljs.core.chunk_append.call(null,b__16404,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i__16403,i,c__4521__auto__,size__4522__auto__,b__16404,s__16402__$2,temp__5720__auto__,dims,ms__$1){
return (function (p1__16378_SHARP_,p2__16379_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__16378_SHARP_),p2__16379_SHARP_);
});})(i__16403,i,c__4521__auto__,size__4522__auto__,b__16404,s__16402__$2,temp__5720__auto__,dims,ms__$1))
));

var G__16406 = (i__16403 + (1));
i__16403 = G__16406;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16404),clojure$core$matrix$impl$persistent_vector$iter__16401.call(null,cljs.core.chunk_rest.call(null,s__16402__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16404),null);
}
} else {
var i = cljs.core.first.call(null,s__16402__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i,s__16402__$2,temp__5720__auto__,dims,ms__$1){
return (function (p1__16378_SHARP_,p2__16379_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__16378_SHARP_),p2__16379_SHARP_);
});})(i,s__16402__$2,temp__5720__auto__,dims,ms__$1))
),clojure$core$matrix$impl$persistent_vector$iter__16401.call(null,cljs.core.rest.call(null,s__16402__$2)));
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
return iter__4523__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var as__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,ms__$1,as);
var dima = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,as__$1));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,ms__$1))){
if((dima > (1))){
throw cljs.core.ex_info.call(null,"mapping with array of higher dimensionality?",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((((1) === dima)) && (cljs.core.not_EQ_.call(null,clojure.core.matrix.protocols.dimension_count.call(null,ms__$1,(0)),clojure.core.matrix.protocols.dimension_count.call(null,as__$1,(0)))))){
throw cljs.core.ex_info.call(null,"Incompatible vector sizes",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((0) === dima)){
var v = (function (){var x__8671__auto__ = as__$1;
if(typeof x__8671__auto__ === 'number'){
return x__8671__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__8671__auto__);

}
})();
cljs.core.mapv.call(null,((function (v,as__$1,dima,ms__$1){
return (function (p1__16380_SHARP_,p2__16381_SHARP_){
return f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16380_SHARP_], null),p2__16381_SHARP_,v);
});})(v,as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));

return ms__$1;
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function() { 
var G__16407__delegate = function (p1__16382_SHARP_,rest__16383_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16382_SHARP_], null),rest__16383_SHARP_);
};
var G__16407 = function (p1__16382_SHARP_,var_args){
var rest__16383_SHARP_ = null;
if (arguments.length > 1) {
var G__16408__i = 0, G__16408__a = new Array(arguments.length -  1);
while (G__16408__i < G__16408__a.length) {G__16408__a[G__16408__i] = arguments[G__16408__i + 1]; ++G__16408__i;}
  rest__16383_SHARP_ = new cljs.core.IndexedSeq(G__16408__a,0,null);
} 
return G__16407__delegate.call(this,p1__16382_SHARP_,rest__16383_SHARP_);};
G__16407.cljs$lang$maxFixedArity = 1;
G__16407.cljs$lang$applyTo = (function (arglist__16409){
var p1__16382_SHARP_ = cljs.core.first(arglist__16409);
var rest__16383_SHARP_ = cljs.core.rest(arglist__16409);
return G__16407__delegate(p1__16382_SHARP_,rest__16383_SHARP_);
});
G__16407.cljs$core$IFn$_invoke$arity$variadic = G__16407__delegate;
return G__16407;
})()
;})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.element_seq.call(null,as__$1));
}
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (as__$1,dima,ms__$1){
return (function() { 
var G__16410__delegate = function (p1__16384_SHARP_,rest__16385_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__16384_SHARP_),rest__16385_SHARP_);
};
var G__16410 = function (p1__16384_SHARP_,var_args){
var rest__16385_SHARP_ = null;
if (arguments.length > 1) {
var G__16411__i = 0, G__16411__a = new Array(arguments.length -  1);
while (G__16411__i < G__16411__a.length) {G__16411__a[G__16411__i] = arguments[G__16411__i + 1]; ++G__16411__i;}
  rest__16385_SHARP_ = new cljs.core.IndexedSeq(G__16411__a,0,null);
} 
return G__16410__delegate.call(this,p1__16384_SHARP_,rest__16385_SHARP_);};
G__16410.cljs$lang$maxFixedArity = 1;
G__16410.cljs$lang$applyTo = (function (arglist__16412){
var p1__16384_SHARP_ = cljs.core.first(arglist__16412);
var rest__16385_SHARP_ = cljs.core.rest(arglist__16412);
return G__16410__delegate(p1__16384_SHARP_,rest__16385_SHARP_);
});
G__16410.cljs$core$IFn$_invoke$arity$variadic = G__16410__delegate;
return G__16410;
})()
;})(as__$1,dima,ms__$1))
,a);
});})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,ms__$1))){
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__16413__delegate = function (p1__16386_SHARP_,rest__16387_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16386_SHARP_], null),rest__16387_SHARP_);
};
var G__16413 = function (p1__16386_SHARP_,var_args){
var rest__16387_SHARP_ = null;
if (arguments.length > 1) {
var G__16414__i = 0, G__16414__a = new Array(arguments.length -  1);
while (G__16414__i < G__16414__a.length) {G__16414__a[G__16414__i] = arguments[G__16414__i + 1]; ++G__16414__i;}
  rest__16387_SHARP_ = new cljs.core.IndexedSeq(G__16414__a,0,null);
} 
return G__16413__delegate.call(this,p1__16386_SHARP_,rest__16387_SHARP_);};
G__16413.cljs$lang$maxFixedArity = 1;
G__16413.cljs$lang$applyTo = (function (arglist__16415){
var p1__16386_SHARP_ = cljs.core.first(arglist__16415);
var rest__16387_SHARP_ = cljs.core.rest(arglist__16415);
return G__16413__delegate(p1__16386_SHARP_,rest__16387_SHARP_);
});
G__16413.cljs$core$IFn$_invoke$arity$variadic = G__16413__delegate;
return G__16413;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
} else {
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__16416__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (ms__$1){
return (function() { 
var G__16417__delegate = function (p1__16388_SHARP_,rest__16389_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__16388_SHARP_),rest__16389_SHARP_);
};
var G__16417 = function (p1__16388_SHARP_,var_args){
var rest__16389_SHARP_ = null;
if (arguments.length > 1) {
var G__16418__i = 0, G__16418__a = new Array(arguments.length -  1);
while (G__16418__i < G__16418__a.length) {G__16418__a[G__16418__i] = arguments[G__16418__i + 1]; ++G__16418__i;}
  rest__16389_SHARP_ = new cljs.core.IndexedSeq(G__16418__a,0,null);
} 
return G__16417__delegate.call(this,p1__16388_SHARP_,rest__16389_SHARP_);};
G__16417.cljs$lang$maxFixedArity = 1;
G__16417.cljs$lang$applyTo = (function (arglist__16419){
var p1__16388_SHARP_ = cljs.core.first(arglist__16419);
var rest__16389_SHARP_ = cljs.core.rest(arglist__16419);
return G__16417__delegate(p1__16388_SHARP_,rest__16389_SHARP_);
});
G__16417.cljs$core$IFn$_invoke$arity$variadic = G__16417__delegate;
return G__16417;
})()
;})(ms__$1))
,a,mr);
};
var G__16416 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__16420__i = 0, G__16420__a = new Array(arguments.length -  3);
while (G__16420__i < G__16420__a.length) {G__16420__a[G__16420__i] = arguments[G__16420__i + 3]; ++G__16420__i;}
  mr = new cljs.core.IndexedSeq(G__16420__a,0,null);
} 
return G__16416__delegate.call(this,i,m,a,mr);};
G__16416.cljs$lang$maxFixedArity = 3;
G__16416.cljs$lang$applyTo = (function (arglist__16421){
var i = cljs.core.first(arglist__16421);
arglist__16421 = cljs.core.next(arglist__16421);
var m = cljs.core.first(arglist__16421);
arglist__16421 = cljs.core.next(arglist__16421);
var a = cljs.core.first(arglist__16421);
var mr = cljs.core.rest(arglist__16421);
return G__16416__delegate(i,m,a,mr);
});
G__16416.cljs$core$IFn$_invoke$arity$variadic = G__16416__delegate;
return G__16416;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var n__4607__auto___16422 = cljs.core.count.call(null,m__$1);
var i_16423 = (0);
while(true){
if((i_16423 < n__4607__auto___16422)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_16423),((function (i_16423,n__4607__auto___16422,m__$1){
return (function (p1__16390_SHARP_,p2__16391_SHARP_){
return f.call(null,cljs.core.cons.call(null,i_16423,p1__16390_SHARP_),p2__16391_SHARP_);
});})(i_16423,n__4607__auto___16422,m__$1))
);

var G__16424 = (i_16423 + (1));
i_16423 = G__16424;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__4607__auto___16425 = cljs.core.count.call(null,m__$1);
var i_16426 = (0);
while(true){
if((i_16426 < n__4607__auto___16425)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_16426),((function (i_16426,n__4607__auto___16425,m__$1){
return (function() { 
var G__16427__delegate = function (p1__16392_SHARP_,rest__16393_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_16426,p1__16392_SHARP_),rest__16393_SHARP_);
};
var G__16427 = function (p1__16392_SHARP_,var_args){
var rest__16393_SHARP_ = null;
if (arguments.length > 1) {
var G__16428__i = 0, G__16428__a = new Array(arguments.length -  1);
while (G__16428__i < G__16428__a.length) {G__16428__a[G__16428__i] = arguments[G__16428__i + 1]; ++G__16428__i;}
  rest__16393_SHARP_ = new cljs.core.IndexedSeq(G__16428__a,0,null);
} 
return G__16427__delegate.call(this,p1__16392_SHARP_,rest__16393_SHARP_);};
G__16427.cljs$lang$maxFixedArity = 1;
G__16427.cljs$lang$applyTo = (function (arglist__16429){
var p1__16392_SHARP_ = cljs.core.first(arglist__16429);
var rest__16393_SHARP_ = cljs.core.rest(arglist__16429);
return G__16427__delegate(p1__16392_SHARP_,rest__16393_SHARP_);
});
G__16427.cljs$core$IFn$_invoke$arity$variadic = G__16427__delegate;
return G__16427;
})()
;})(i_16426,n__4607__auto___16425,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_16426));

var G__16430 = (i_16426 + (1));
i_16426 = G__16430;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__4607__auto___16431 = cljs.core.count.call(null,m__$1);
var i_16432 = (0);
while(true){
if((i_16432 < n__4607__auto___16431)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_indexed_BANG_,m__$1.call(null,i_16432),((function (i_16432,n__4607__auto___16431,m__$1){
return (function() { 
var G__16433__delegate = function (p1__16394_SHARP_,rest__16395_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_16432,p1__16394_SHARP_),rest__16395_SHARP_);
};
var G__16433 = function (p1__16394_SHARP_,var_args){
var rest__16395_SHARP_ = null;
if (arguments.length > 1) {
var G__16434__i = 0, G__16434__a = new Array(arguments.length -  1);
while (G__16434__i < G__16434__a.length) {G__16434__a[G__16434__i] = arguments[G__16434__i + 1]; ++G__16434__i;}
  rest__16395_SHARP_ = new cljs.core.IndexedSeq(G__16434__a,0,null);
} 
return G__16433__delegate.call(this,p1__16394_SHARP_,rest__16395_SHARP_);};
G__16433.cljs$lang$maxFixedArity = 1;
G__16433.cljs$lang$applyTo = (function (arglist__16435){
var p1__16394_SHARP_ = cljs.core.first(arglist__16435);
var rest__16395_SHARP_ = cljs.core.rest(arglist__16435);
return G__16433__delegate(p1__16394_SHARP_,rest__16395_SHARP_);
});
G__16433.cljs$core$IFn$_invoke$arity$variadic = G__16433__delegate;
return G__16433;
})()
;})(i_16432,n__4607__auto___16431,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_16432),cljs.core.map.call(null,((function (i_16432,n__4607__auto___16431,m__$1){
return (function (p1__16396_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__16396_SHARP_,i_16432);
});})(i_16432,n__4607__auto___16431,m__$1))
,more));

var G__16436 = (i_16432 + (1));
i_16432 = G__16436;
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
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
if(cljs.core._EQ_.call(null,(1),clojure.core.matrix.protocols.dimensionality.call(null,a__$1))){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__16437_SHARP_){
return cljs.core.nth.call(null,a__$1,p1__16437_SHARP_);
});})(a__$1))
,cljs.core.first.call(null,args)));
} else {
throw cljs.core.ex_info.call(null,"Array dimension does not match length of args",cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__16438_SHARP_){
return clojure.core.matrix.protocols.select.call(null,cljs.core.nth.call(null,a__$1,p1__16438_SHARP_),cljs.core.next.call(null,args));
});})(a__$1))
,cljs.core.first.call(null,args)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$index_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
});
clojure.core.matrix.implementations.register_implementation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));

//# sourceMappingURL=persistent_vector.js.map
