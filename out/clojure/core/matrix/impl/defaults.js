// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.matrix.impl.defaults');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var temp__5718__auto__ = clojure.core.matrix.protocols.get_shape(m);
if(cljs.core.truth_(temp__5718__auto__)){
var sh = temp__5718__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,sh);
} else {
return (1);
}
});
/**
 * Constructs a new mutable matrix with the given data.
 */
clojure.core.matrix.impl.defaults.construct_mutable_matrix = (function clojure$core$matrix$impl$defaults$construct_mutable_matrix(m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var type = clojure.core.matrix.protocols.element_type(m);
var double_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Number,type);
if((dims === (0))){
return clojure.core.matrix.impl.wrappers.wrap_scalar(clojure.core.matrix.protocols.get_0d(m));
} else {
if((((dims === (1))) && (double_QMARK_))){
return clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$aljabr),m);
} else {
if(double_QMARK_){
return clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$aljabr),m);
} else {
return clojure.core.matrix.protocols.coerce_param(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$aljabr),m);

}
}
}
});
goog.object.set(clojure.core.matrix.protocols.PImplementation,"object",true);

var G__13409_13430 = clojure.core.matrix.protocols.implementation_key;
var G__13410_13431 = "object";
var G__13411_13432 = ((function (G__13409_13430,G__13410_13431){
return (function (m){
return cljs.core.cst$kw$default;
});})(G__13409_13430,G__13410_13431))
;
goog.object.set(G__13409_13430,G__13410_13431,G__13411_13432);

var G__13412_13433 = clojure.core.matrix.protocols.meta_info;
var G__13413_13434 = "object";
var G__13414_13435 = ((function (G__13412_13433,G__13413_13434){
return (function (m){
return cljs.core.PersistentArrayMap.EMPTY;
});})(G__13412_13433,G__13413_13434))
;
goog.object.set(G__13412_13433,G__13413_13434,G__13414_13435);

var G__13415_13436 = clojure.core.matrix.protocols.construct_matrix;
var G__13416_13437 = "object";
var G__13417_13438 = ((function (G__13415_13436,G__13416_13437){
return (function (m,data){
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,data);
});})(G__13415_13436,G__13416_13437))
;
goog.object.set(G__13415_13436,G__13416_13437,G__13417_13438);

var G__13418_13439 = clojure.core.matrix.protocols.new_vector;
var G__13419_13440 = "object";
var G__13420_13441 = ((function (G__13418_13439,G__13419_13440){
return (function (m,length){
return clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,length);
});})(G__13418_13439,G__13419_13440))
;
goog.object.set(G__13418_13439,G__13419_13440,G__13420_13441);

var G__13421_13442 = clojure.core.matrix.protocols.new_matrix;
var G__13422_13443 = "object";
var G__13423_13444 = ((function (G__13421_13442,G__13422_13443){
return (function (m,rows,columns){
return clojure.core.matrix.protocols.new_matrix(cljs.core.PersistentVector.EMPTY,rows,columns);
});})(G__13421_13442,G__13422_13443))
;
goog.object.set(G__13421_13442,G__13422_13443,G__13423_13444);

var G__13424_13445 = clojure.core.matrix.protocols.new_matrix_nd;
var G__13425_13446 = "object";
var G__13426_13447 = ((function (G__13424_13445,G__13425_13446){
return (function (m,shape){
return clojure.core.matrix.protocols.new_matrix_nd(cljs.core.PersistentVector.EMPTY,shape);
});})(G__13424_13445,G__13425_13446))
;
goog.object.set(G__13424_13445,G__13425_13446,G__13426_13447);

var G__13427_13448 = clojure.core.matrix.protocols.supports_dimensionality_QMARK_;
var G__13428_13449 = "object";
var G__13429_13450 = ((function (G__13427_13448,G__13428_13449){
return (function (m,dimensions){
return true;
});})(G__13427_13448,G__13428_13449))
;
goog.object.set(G__13427_13448,G__13428_13449,G__13429_13450);

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.protocols.meta_info(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1));
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),data);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),length);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),rows,columns);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,shape){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),shape);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dimensions){
var m__$1 = this;
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_(clojure.core.matrix.implementations.get_canonical_object_or_throw(m__$1),dimensions);
});
goog.object.set(clojure.core.matrix.protocols.PSparse,"null",true);

var G__13451_13463 = clojure.core.matrix.protocols.sparse_coerce;
var G__13452_13464 = "null";
var G__13453_13465 = ((function (G__13451_13463,G__13452_13464){
return (function (m,data){
return clojure.core.matrix.protocols.sparse(data);
});})(G__13451_13463,G__13452_13464))
;
goog.object.set(G__13451_13463,G__13452_13464,G__13453_13465);

var G__13454_13466 = clojure.core.matrix.protocols.sparse;
var G__13455_13467 = "null";
var G__13456_13468 = ((function (G__13454_13466,G__13455_13467){
return (function (m){
return null;
});})(G__13454_13466,G__13455_13467))
;
goog.object.set(G__13454_13466,G__13455_13467,G__13456_13468);

goog.object.set(clojure.core.matrix.protocols.PSparse,"object",true);

var G__13457_13469 = clojure.core.matrix.protocols.sparse_coerce;
var G__13458_13470 = "object";
var G__13459_13471 = ((function (G__13457_13469,G__13458_13470){
return (function (m,data){
return null;
});})(G__13457_13469,G__13458_13470))
;
goog.object.set(G__13457_13469,G__13458_13470,G__13459_13471);

var G__13460_13472 = clojure.core.matrix.protocols.sparse;
var G__13461_13473 = "object";
var G__13462_13474 = ((function (G__13460_13472,G__13461_13473){
return (function (m){
return m;
});})(G__13460_13472,G__13461_13473))
;
goog.object.set(G__13460_13472,G__13461_13473,G__13462_13474);
goog.object.set(clojure.core.matrix.protocols.PNative,"null",true);

var G__13475_13487 = clojure.core.matrix.protocols.native$;
var G__13476_13488 = "null";
var G__13477_13489 = ((function (G__13475_13487,G__13476_13488){
return (function (m){
return null;
});})(G__13475_13487,G__13476_13488))
;
goog.object.set(G__13475_13487,G__13476_13488,G__13477_13489);

var G__13478_13490 = clojure.core.matrix.protocols.native_QMARK_;
var G__13479_13491 = "null";
var G__13480_13492 = ((function (G__13478_13490,G__13479_13491){
return (function (m){
return false;
});})(G__13478_13490,G__13479_13491))
;
goog.object.set(G__13478_13490,G__13479_13491,G__13480_13492);

goog.object.set(clojure.core.matrix.protocols.PNative,"object",true);

var G__13481_13493 = clojure.core.matrix.protocols.native$;
var G__13482_13494 = "object";
var G__13483_13495 = ((function (G__13481_13493,G__13482_13494){
return (function (m){
return null;
});})(G__13481_13493,G__13482_13494))
;
goog.object.set(G__13481_13493,G__13482_13494,G__13483_13495);

var G__13484_13496 = clojure.core.matrix.protocols.native_QMARK_;
var G__13485_13497 = "object";
var G__13486_13498 = ((function (G__13484_13496,G__13485_13497){
return (function (m){
return false;
});})(G__13484_13496,G__13485_13497))
;
goog.object.set(G__13484_13496,G__13485_13497,G__13486_13498);
goog.object.set(clojure.core.matrix.protocols.PNewSparseArray,"object",true);

var G__13499_13502 = clojure.core.matrix.protocols.new_sparse_array;
var G__13500_13503 = "object";
var G__13501_13504 = ((function (G__13499_13502,G__13500_13503){
return (function (m,shape){
return null;
});})(G__13499_13502,G__13500_13503))
;
goog.object.set(G__13499_13502,G__13500_13503,G__13501_13504);
goog.object.set(clojure.core.matrix.protocols.PDense,"null",true);

var G__13505_13517 = clojure.core.matrix.protocols.dense_coerce;
var G__13506_13518 = "null";
var G__13507_13519 = ((function (G__13505_13517,G__13506_13518){
return (function (m,data){
return clojure.core.matrix.protocols.dense(data);
});})(G__13505_13517,G__13506_13518))
;
goog.object.set(G__13505_13517,G__13506_13518,G__13507_13519);

var G__13508_13520 = clojure.core.matrix.protocols.dense;
var G__13509_13521 = "null";
var G__13510_13522 = ((function (G__13508_13520,G__13509_13521){
return (function (m){
return null;
});})(G__13508_13520,G__13509_13521))
;
goog.object.set(G__13508_13520,G__13509_13521,G__13510_13522);

goog.object.set(clojure.core.matrix.protocols.PDense,"object",true);

var G__13511_13523 = clojure.core.matrix.protocols.dense_coerce;
var G__13512_13524 = "object";
var G__13513_13525 = ((function (G__13511_13523,G__13512_13524){
return (function (m,data){
return null;
});})(G__13511_13523,G__13512_13524))
;
goog.object.set(G__13511_13523,G__13512_13524,G__13513_13525);

var G__13514_13526 = clojure.core.matrix.protocols.dense;
var G__13515_13527 = "object";
var G__13516_13528 = ((function (G__13514_13526,G__13515_13527){
return (function (m){
return m;
});})(G__13514_13526,G__13515_13527))
;
goog.object.set(G__13514_13526,G__13515_13527,G__13516_13528);
goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"null",true);

var G__13529_13556 = clojure.core.matrix.protocols.get_1d;
var G__13530_13557 = "null";
var G__13531_13558 = ((function (G__13529_13556,G__13530_13557){
return (function (m,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D get on nil",cljs.core.PersistentArrayMap.EMPTY);
});})(G__13529_13556,G__13530_13557))
;
goog.object.set(G__13529_13556,G__13530_13557,G__13531_13558);

var G__13532_13559 = clojure.core.matrix.protocols.get_2d;
var G__13533_13560 = "null";
var G__13534_13561 = ((function (G__13532_13559,G__13533_13560){
return (function (m,x,y){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D get on nil",cljs.core.PersistentArrayMap.EMPTY);
});})(G__13532_13559,G__13533_13560))
;
goog.object.set(G__13532_13559,G__13533_13560,G__13534_13561);

var G__13535_13562 = clojure.core.matrix.protocols.get_nd;
var G__13536_13563 = "null";
var G__13537_13564 = ((function (G__13535_13562,G__13536_13563){
return (function (m,indexes){
var temp__5718__auto__ = cljs.core.seq(indexes);
if(temp__5718__auto__){
var s = temp__5718__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't do ND get on nil with indexes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
});})(G__13535_13562,G__13536_13563))
;
goog.object.set(G__13535_13562,G__13536_13563,G__13537_13564);

goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"number",true);

var G__13538_13565 = clojure.core.matrix.protocols.get_1d;
var G__13539_13566 = "number";
var G__13540_13567 = ((function (G__13538_13565,G__13539_13566){
return (function (m,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D get on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});})(G__13538_13565,G__13539_13566))
;
goog.object.set(G__13538_13565,G__13539_13566,G__13540_13567);

var G__13541_13568 = clojure.core.matrix.protocols.get_2d;
var G__13542_13569 = "number";
var G__13543_13570 = ((function (G__13541_13568,G__13542_13569){
return (function (m,x,y){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D get on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});})(G__13541_13568,G__13542_13569))
;
goog.object.set(G__13541_13568,G__13542_13569,G__13543_13570);

var G__13544_13571 = clojure.core.matrix.protocols.get_nd;
var G__13545_13572 = "number";
var G__13546_13573 = ((function (G__13544_13571,G__13545_13572){
return (function (m,indexes){
var temp__5718__auto__ = cljs.core.seq(indexes);
if(temp__5718__auto__){
var s = temp__5718__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't do ND get on a scalar number with indexes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
});})(G__13544_13571,G__13545_13572))
;
goog.object.set(G__13544_13571,G__13545_13572,G__13546_13573);

goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"object",true);

var G__13547_13574 = clojure.core.matrix.protocols.get_1d;
var G__13548_13575 = "object";
var G__13549_13576 = ((function (G__13547_13574,G__13548_13575){
return (function (m,x){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_0d(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,x));
} else {
return clojure.core.matrix.protocols.get_nd(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));

}
});})(G__13547_13574,G__13548_13575))
;
goog.object.set(G__13547_13574,G__13548_13575,G__13549_13576);

var G__13550_13577 = clojure.core.matrix.protocols.get_2d;
var G__13551_13578 = "object";
var G__13552_13579 = ((function (G__13550_13577,G__13551_13578){
return (function (m,x,y){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_1d(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,x),y);
} else {
return clojure.core.matrix.protocols.get_nd(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

}
});})(G__13550_13577,G__13551_13578))
;
goog.object.set(G__13550_13577,G__13551_13578,G__13552_13579);

var G__13553_13580 = clojure.core.matrix.protocols.get_nd;
var G__13554_13581 = "object";
var G__13555_13582 = ((function (G__13553_13580,G__13554_13581){
return (function (m,indexes){
if(cljs.core.seq(indexes)){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_nd(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(indexes)),cljs.core.next(indexes));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Indexed get failed, not defined for:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
} else {
return clojure.core.matrix.protocols.get_0d(m);
}
});})(G__13553_13580,G__13554_13581))
;
goog.object.set(G__13553_13580,G__13554_13581,G__13555_13582);

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,x);
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
if(cljs.core.seqable_QMARK_(cljs.core.first(m__$1))){
return clojure.core.matrix.protocols.get_1d(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,x),y);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D get on a lazy seq",cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq(indexes)){
return clojure.core.matrix.protocols.get_nd(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.first(indexes)),cljs.core.next(indexes));
} else {
return clojure.core.matrix.protocols.get_0d(m__$1);
}
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,x);
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D get on a range",cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq(indexes)){
return clojure.core.matrix.protocols.get_nd(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.first(indexes)),cljs.core.next(indexes));
} else {
return clojure.core.matrix.protocols.get_0d(m__$1);
}
});
goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"null",true);

var G__13583_13592 = clojure.core.matrix.protocols.nonzero_count;
var G__13584_13593 = "null";
var G__13585_13594 = ((function (G__13583_13592,G__13584_13593){
return (function (m){
return (1);
});})(G__13583_13592,G__13584_13593))
;
goog.object.set(G__13583_13592,G__13584_13593,G__13585_13594);

goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"number",true);

var G__13586_13595 = clojure.core.matrix.protocols.nonzero_count;
var G__13587_13596 = "number";
var G__13588_13597 = ((function (G__13586_13595,G__13587_13596){
return (function (m){
if((m === (0))){
return (0);
} else {
return (1);
}
});})(G__13586_13595,G__13587_13596))
;
goog.object.set(G__13586_13595,G__13587_13596,G__13588_13597);

goog.object.set(clojure.core.matrix.protocols.PArrayMetrics,"object",true);

var G__13589_13598 = clojure.core.matrix.protocols.nonzero_count;
var G__13590_13599 = "object";
var G__13591_13600 = ((function (G__13589_13598,G__13590_13599){
return (function (m){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3(m,((function (G__13589_13598,G__13590_13599){
return (function (cnt,e){
if((e === (0))){
return cnt;
} else {
return (cnt + (1));
}
});})(G__13589_13598,G__13590_13599))
,(0));
});})(G__13589_13598,G__13590_13599))
;
goog.object.set(G__13589_13598,G__13590_13599,G__13591_13600);
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionConstruction,"null",true);

var G__13601_13607 = clojure.core.matrix.protocols.new_scalar_array;
var G__13602_13608 = "null";
var G__13603_13609 = ((function (G__13601_13607,G__13602_13608){
return (function() {
var G__13610 = null;
var G__13610__1 = (function (m){
return 0.0;
});
var G__13610__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar(value);
});
G__13610 = function(m,value){
switch(arguments.length){
case 1:
return G__13610__1.call(this,m);
case 2:
return G__13610__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13610.cljs$core$IFn$_invoke$arity$1 = G__13610__1;
G__13610.cljs$core$IFn$_invoke$arity$2 = G__13610__2;
return G__13610;
})()
;})(G__13601_13607,G__13602_13608))
;
goog.object.set(G__13601_13607,G__13602_13608,G__13603_13609);

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionConstruction,"object",true);

var G__13604_13611 = clojure.core.matrix.protocols.new_scalar_array;
var G__13605_13612 = "object";
var G__13606_13613 = ((function (G__13604_13611,G__13605_13612){
return (function() {
var G__13614 = null;
var G__13614__1 = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(0.0);
});
var G__13614__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar(value);
});
G__13614 = function(m,value){
switch(arguments.length){
case 1:
return G__13614__1.call(this,m);
case 2:
return G__13614__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13614.cljs$core$IFn$_invoke$arity$1 = G__13614__1;
G__13614.cljs$core$IFn$_invoke$arity$2 = G__13614__2;
return G__13614;
})()
;})(G__13604_13611,G__13605_13612))
;
goog.object.set(G__13604_13611,G__13605_13612,G__13606_13613);
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"null",true);

var G__13615_13639 = clojure.core.matrix.protocols.get_0d;
var G__13616_13640 = "null";
var G__13617_13641 = ((function (G__13615_13639,G__13616_13640){
return (function (m){
return null;
});})(G__13615_13639,G__13616_13640))
;
goog.object.set(G__13615_13639,G__13616_13640,G__13617_13641);

var G__13618_13642 = clojure.core.matrix.protocols.set_0d_BANG_;
var G__13619_13643 = "null";
var G__13620_13644 = ((function (G__13618_13642,G__13619_13643){
return (function (m,value){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't set the value of nil!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__13618_13642,G__13619_13643))
;
goog.object.set(G__13618_13642,G__13619_13643,G__13620_13644);

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"string",true);

var G__13621_13645 = clojure.core.matrix.protocols.get_0d;
var G__13622_13646 = "string";
var G__13623_13647 = ((function (G__13621_13645,G__13622_13646){
return (function (m){
return m;
});})(G__13621_13645,G__13622_13646))
;
goog.object.set(G__13621_13645,G__13622_13646,G__13623_13647);

var G__13624_13648 = clojure.core.matrix.protocols.set_0d_BANG_;
var G__13625_13649 = "string";
var G__13626_13650 = ((function (G__13624_13648,G__13625_13649){
return (function (m,value){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't set a string value!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__13624_13648,G__13625_13649))
;
goog.object.set(G__13624_13648,G__13625_13649,G__13626_13650);

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var m__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't set a keyword!",cljs.core.PersistentArrayMap.EMPTY);
});

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"number",true);

var G__13627_13651 = clojure.core.matrix.protocols.get_0d;
var G__13628_13652 = "number";
var G__13629_13653 = ((function (G__13627_13651,G__13628_13652){
return (function (m){
return m;
});})(G__13627_13651,G__13628_13652))
;
goog.object.set(G__13627_13651,G__13628_13652,G__13629_13653);

var G__13630_13654 = clojure.core.matrix.protocols.set_0d_BANG_;
var G__13631_13655 = "number";
var G__13632_13656 = ((function (G__13630_13654,G__13631_13655){
return (function (m,value){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't set a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__13630_13654,G__13631_13655))
;
goog.object.set(G__13630_13654,G__13631_13655,G__13632_13656);

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionAccess,"object",true);

var G__13633_13657 = clojure.core.matrix.protocols.get_0d;
var G__13634_13658 = "object";
var G__13635_13659 = ((function (G__13633_13657,G__13634_13658){
return (function (m){
return m;
});})(G__13633_13657,G__13634_13658))
;
goog.object.set(G__13633_13657,G__13634_13658,G__13635_13659);

var G__13636_13660 = clojure.core.matrix.protocols.set_0d_BANG_;
var G__13637_13661 = "object";
var G__13638_13662 = ((function (G__13636_13660,G__13637_13661){
return (function (m,value){
return clojure.core.matrix.protocols.set_nd_BANG_(m,cljs.core.PersistentVector.EMPTY,value);
});})(G__13636_13660,G__13637_13661))
;
goog.object.set(G__13636_13660,G__13637_13661,G__13638_13662);
goog.object.set(clojure.core.matrix.protocols.PZeroDimensionSet,"null",true);

var G__13663_13669 = clojure.core.matrix.protocols.set_0d;
var G__13664_13670 = "null";
var G__13665_13671 = ((function (G__13663_13669,G__13664_13670){
return (function (m,value){
return value;
});})(G__13663_13669,G__13664_13670))
;
goog.object.set(G__13663_13669,G__13664_13670,G__13665_13671);

goog.object.set(clojure.core.matrix.protocols.PZeroDimensionSet,"object",true);

var G__13666_13672 = clojure.core.matrix.protocols.set_0d;
var G__13667_13673 = "object";
var G__13668_13674 = ((function (G__13666_13672,G__13667_13673){
return (function (m,value){
return value;
});})(G__13666_13672,G__13667_13673))
;
goog.object.set(G__13666_13672,G__13667_13673,G__13668_13674);
goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"null",true);

var G__13675_13711 = clojure.core.matrix.protocols.set_1d;
var G__13676_13712 = "null";
var G__13677_13713 = ((function (G__13675_13711,G__13676_13712){
return (function (m,row,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D set on nil",cljs.core.PersistentArrayMap.EMPTY);
});})(G__13675_13711,G__13676_13712))
;
goog.object.set(G__13675_13711,G__13676_13712,G__13677_13713);

var G__13678_13714 = clojure.core.matrix.protocols.set_2d;
var G__13679_13715 = "null";
var G__13680_13716 = ((function (G__13678_13714,G__13679_13715){
return (function (m,row,column,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on nil",cljs.core.PersistentArrayMap.EMPTY);
});})(G__13678_13714,G__13679_13715))
;
goog.object.set(G__13678_13714,G__13679_13715,G__13680_13716);

var G__13681_13717 = clojure.core.matrix.protocols.set_nd;
var G__13682_13718 = "null";
var G__13683_13719 = ((function (G__13681_13717,G__13682_13718){
return (function (m,indexes,v){
if(cljs.core.seq(indexes)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes)),"D set on nil"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
});})(G__13681_13717,G__13682_13718))
;
goog.object.set(G__13681_13717,G__13682_13718,G__13683_13719);

var G__13684_13720 = clojure.core.matrix.protocols.is_mutable_QMARK_;
var G__13685_13721 = "null";
var G__13686_13722 = ((function (G__13684_13720,G__13685_13721){
return (function (m){
return false;
});})(G__13684_13720,G__13685_13721))
;
goog.object.set(G__13684_13720,G__13685_13721,G__13686_13722);

goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"number",true);

var G__13687_13723 = clojure.core.matrix.protocols.set_1d;
var G__13688_13724 = "number";
var G__13689_13725 = ((function (G__13687_13723,G__13688_13724){
return (function (m,row,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 1D set on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});})(G__13687_13723,G__13688_13724))
;
goog.object.set(G__13687_13723,G__13688_13724,G__13689_13725);

var G__13690_13726 = clojure.core.matrix.protocols.set_2d;
var G__13691_13727 = "number";
var G__13692_13728 = ((function (G__13690_13726,G__13691_13727){
return (function (m,row,column,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});})(G__13690_13726,G__13691_13727))
;
goog.object.set(G__13690_13726,G__13691_13727,G__13692_13728);

var G__13693_13729 = clojure.core.matrix.protocols.set_nd;
var G__13694_13730 = "number";
var G__13695_13731 = ((function (G__13693_13729,G__13694_13730){
return (function (m,indexes,v){
if(cljs.core.seq(indexes)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't do ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes)),"D set on a scalar number"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
});})(G__13693_13729,G__13694_13730))
;
goog.object.set(G__13693_13729,G__13694_13730,G__13695_13731);

var G__13696_13732 = clojure.core.matrix.protocols.is_mutable_QMARK_;
var G__13697_13733 = "number";
var G__13698_13734 = ((function (G__13696_13732,G__13697_13733){
return (function (m){
return false;
});})(G__13696_13732,G__13697_13733))
;
goog.object.set(G__13696_13732,G__13697_13733,G__13698_13734);

goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"object",true);

var G__13699_13735 = clojure.core.matrix.protocols.set_1d;
var G__13700_13736 = "object";
var G__13701_13737 = ((function (G__13699_13735,G__13700_13736){
return (function (m,row,v){
var m__$1 = clojure.core.matrix.protocols.clone(m);
clojure.core.matrix.protocols.set_1d_BANG_(m__$1,row,v);

return m__$1;
});})(G__13699_13735,G__13700_13736))
;
goog.object.set(G__13699_13735,G__13700_13736,G__13701_13737);

var G__13702_13738 = clojure.core.matrix.protocols.set_2d;
var G__13703_13739 = "object";
var G__13704_13740 = ((function (G__13702_13738,G__13703_13739){
return (function (m,row,column,v){
var m__$1 = clojure.core.matrix.protocols.clone(m);
clojure.core.matrix.protocols.set_2d_BANG_(m__$1,row,column,v);

return m__$1;
});})(G__13702_13738,G__13703_13739))
;
goog.object.set(G__13702_13738,G__13703_13739,G__13704_13740);

var G__13705_13741 = clojure.core.matrix.protocols.set_nd;
var G__13706_13742 = "object";
var G__13707_13743 = ((function (G__13705_13741,G__13706_13742){
return (function (m,indexes,v){
var m__$1 = clojure.core.matrix.protocols.clone(m);
clojure.core.matrix.protocols.set_nd_BANG_(m__$1,indexes,v);

return m__$1;
});})(G__13705_13741,G__13706_13742))
;
goog.object.set(G__13705_13741,G__13706_13742,G__13707_13743);

var G__13708_13744 = clojure.core.matrix.protocols.is_mutable_QMARK_;
var G__13709_13745 = "object";
var G__13710_13746 = ((function (G__13708_13744,G__13709_13745){
return (function (m){
return true;
});})(G__13708_13744,G__13709_13745))
;
goog.object.set(G__13708_13744,G__13709_13745,G__13710_13746);
goog.object.set(clojure.core.matrix.protocols.PNumerical,"number",true);

var G__13747_13756 = clojure.core.matrix.protocols.numerical_QMARK_;
var G__13748_13757 = "number";
var G__13749_13758 = ((function (G__13747_13756,G__13748_13757){
return (function (m){
return true;
});})(G__13747_13756,G__13748_13757))
;
goog.object.set(G__13747_13756,G__13748_13757,G__13749_13758);

goog.object.set(clojure.core.matrix.protocols.PNumerical,"null",true);

var G__13750_13759 = clojure.core.matrix.protocols.numerical_QMARK_;
var G__13751_13760 = "null";
var G__13752_13761 = ((function (G__13750_13759,G__13751_13760){
return (function (m){
return false;
});})(G__13750_13759,G__13751_13760))
;
goog.object.set(G__13750_13759,G__13751_13760,G__13752_13761);

goog.object.set(clojure.core.matrix.protocols.PNumerical,"object",true);

var G__13753_13762 = clojure.core.matrix.protocols.numerical_QMARK_;
var G__13754_13763 = "object";
var G__13755_13764 = ((function (G__13753_13762,G__13754_13763){
return (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return false;
} else {
return cljs.core.every_QMARK_(cljs.core.number_QMARK_,clojure.core.matrix.protocols.element_seq(m));
}
});})(G__13753_13762,G__13754_13763))
;
goog.object.set(G__13753_13762,G__13754_13763,G__13755_13764);
goog.object.set(clojure.core.matrix.protocols.PVectorOps,"number",true);

var G__13765_13792 = clojure.core.matrix.protocols.vector_dot;
var G__13766_13793 = "number";
var G__13767_13794 = ((function (G__13765_13792,G__13766_13793){
return (function (a,b){
return clojure.core.matrix.protocols.pre_scale(b,a);
});})(G__13765_13792,G__13766_13793))
;
goog.object.set(G__13765_13792,G__13766_13793,G__13767_13794);

var G__13768_13795 = clojure.core.matrix.protocols.length;
var G__13769_13796 = "number";
var G__13770_13797 = ((function (G__13768_13795,G__13769_13796){
return (function (a){
var G__13771 = a;
return Math.abs(G__13771);
});})(G__13768_13795,G__13769_13796))
;
goog.object.set(G__13768_13795,G__13769_13796,G__13770_13797);

var G__13772_13798 = clojure.core.matrix.protocols.length_squared;
var G__13773_13799 = "number";
var G__13774_13800 = ((function (G__13772_13798,G__13773_13799){
return (function (a){
var a__$1 = a;
return (a__$1 * a__$1);
});})(G__13772_13798,G__13773_13799))
;
goog.object.set(G__13772_13798,G__13773_13799,G__13774_13800);

var G__13775_13801 = clojure.core.matrix.protocols.normalise;
var G__13776_13802 = "number";
var G__13777_13803 = ((function (G__13775_13801,G__13776_13802){
return (function (a){
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
});})(G__13775_13801,G__13776_13802))
;
goog.object.set(G__13775_13801,G__13776_13802,G__13777_13803);

goog.object.set(clojure.core.matrix.protocols.PVectorOps,"object",true);

var G__13778_13804 = clojure.core.matrix.protocols.vector_dot;
var G__13779_13805 = "object";
var G__13780_13806 = ((function (G__13778_13804,G__13779_13805){
return (function (a,b){
if(((((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a)))) && (((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))))){
return clojure.core.matrix.protocols.element_sum(clojure.core.matrix.protocols.element_multiply(a,b));
} else {
return null;
}
});})(G__13778_13804,G__13779_13805))
;
goog.object.set(G__13778_13804,G__13779_13805,G__13780_13806);

var G__13781_13807 = clojure.core.matrix.protocols.length;
var G__13782_13808 = "object";
var G__13783_13809 = ((function (G__13781_13807,G__13782_13808){
return (function (a){
var G__13784 = clojure.core.matrix.protocols.length_squared(a);
return Math.sqrt(G__13784);
});})(G__13781_13807,G__13782_13808))
;
goog.object.set(G__13781_13807,G__13782_13808,G__13783_13809);

var G__13785_13810 = clojure.core.matrix.protocols.length_squared;
var G__13786_13811 = "object";
var G__13787_13812 = ((function (G__13785_13810,G__13786_13811){
return (function (a){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3(a,((function (G__13785_13810,G__13786_13811){
return (function (r,x){
return (r + (x * x));
});})(G__13785_13810,G__13786_13811))
,0.0);
});})(G__13785_13810,G__13786_13811))
;
goog.object.set(G__13785_13810,G__13786_13811,G__13787_13812);

var G__13788_13813 = clojure.core.matrix.protocols.normalise;
var G__13789_13814 = "object";
var G__13790_13815 = ((function (G__13788_13813,G__13789_13814){
return (function (a){
return clojure.core.matrix.protocols.scale(a,(1.0 / (function (){var G__13791 = clojure.core.matrix.protocols.length_squared(a);
return Math.sqrt(G__13791);
})()));
});})(G__13788_13813,G__13789_13814))
;
goog.object.set(G__13788_13813,G__13789_13814,G__13790_13815);
goog.object.set(clojure.core.matrix.protocols.PVectorDistance,"number",true);

var G__13816_13823 = clojure.core.matrix.protocols.distance;
var G__13817_13824 = "number";
var G__13818_13825 = ((function (G__13816_13823,G__13817_13824){
return (function (a,b){
if(typeof b === 'number'){
var G__13819 = (b - a);
return Math.abs(G__13819);
} else {
return clojure.core.matrix.protocols.distance(b,a);
}
});})(G__13816_13823,G__13817_13824))
;
goog.object.set(G__13816_13823,G__13817_13824,G__13818_13825);

goog.object.set(clojure.core.matrix.protocols.PVectorDistance,"object",true);

var G__13820_13826 = clojure.core.matrix.protocols.distance;
var G__13821_13827 = "object";
var G__13822_13828 = ((function (G__13820_13826,G__13821_13827){
return (function (a,b){
return clojure.core.matrix.protocols.length(clojure.core.matrix.protocols.matrix_sub(a,b));
});})(G__13820_13826,G__13821_13827))
;
goog.object.set(G__13820_13826,G__13821_13827,G__13822_13828);
goog.object.set(clojure.core.matrix.protocols.PVectorCross,"object",true);

var G__13829_13835 = clojure.core.matrix.protocols.cross_product;
var G__13830_13836 = "object";
var G__13831_13837 = ((function (G__13829_13835,G__13830_13836){
return (function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d(a,(0));
var y1 = clojure.core.matrix.protocols.get_1d(a,(1));
var z1 = clojure.core.matrix.protocols.get_1d(a,(2));
var x2 = clojure.core.matrix.protocols.get_1d(b,(0));
var y2 = clojure.core.matrix.protocols.get_1d(b,(1));
var z2 = clojure.core.matrix.protocols.get_1d(b,(2));
return clojure.core.matrix.protocols.construct_matrix(a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y1 * z2) - (z1 * y2)),((z1 * x2) - (x1 * z2)),((x1 * y2) - (y1 * x2))], null));
});})(G__13829_13835,G__13830_13836))
;
goog.object.set(G__13829_13835,G__13830_13836,G__13831_13837);

var G__13832_13838 = clojure.core.matrix.protocols.cross_product_BANG_;
var G__13833_13839 = "object";
var G__13834_13840 = ((function (G__13832_13838,G__13833_13839){
return (function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d(a,(0));
var y1 = clojure.core.matrix.protocols.get_1d(a,(1));
var z1 = clojure.core.matrix.protocols.get_1d(a,(2));
var x2 = clojure.core.matrix.protocols.get_1d(b,(0));
var y2 = clojure.core.matrix.protocols.get_1d(b,(1));
var z2 = clojure.core.matrix.protocols.get_1d(b,(2));
clojure.core.matrix.protocols.set_1d_BANG_(a,(0),((y1 * z2) - (z1 * y2)));

clojure.core.matrix.protocols.set_1d_BANG_(a,(1),((z1 * x2) - (x1 * z2)));

clojure.core.matrix.protocols.set_1d_BANG_(a,(2),((x1 * y2) - (y1 * x2)));

return a;
});})(G__13832_13838,G__13833_13839))
;
goog.object.set(G__13832_13838,G__13833_13839,G__13834_13840);
goog.object.set(clojure.core.matrix.protocols.PMutableVectorOps,"object",true);

var G__13841_13845 = clojure.core.matrix.protocols.normalise_BANG_;
var G__13842_13846 = "object";
var G__13843_13847 = ((function (G__13841_13845,G__13842_13846){
return (function (a){
return clojure.core.matrix.protocols.scale_BANG_(a,(1.0 / (function (){var G__13844 = clojure.core.matrix.protocols.length_squared(a);
return Math.sqrt(G__13844);
})()));
});})(G__13841_13845,G__13842_13846))
;
goog.object.set(G__13841_13845,G__13842_13846,G__13843_13847);
goog.object.set(clojure.core.matrix.protocols.PAssignment,"object",true);

var G__13848_13858 = clojure.core.matrix.protocols.assign_BANG_;
var G__13849_13859 = "object";
var G__13850_13860 = ((function (G__13848_13858,G__13849_13859){
return (function (m,x){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if(((0) === dims)){
return clojure.core.matrix.protocols.set_0d_BANG_(m,clojure.core.matrix.protocols.get_0d(x));
} else {
if(((1) === dims)){
if((x instanceof cljs.core.ISeq)){
var x__$1 = cljs.core.seq(x);
var msize = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var i = (0);
var s = cljs.core.seq(x__$1);
while(true){
if((i >= msize)){
if(s){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Mismatches size of sequence in assign!",cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
clojure.core.matrix.protocols.set_1d_BANG_(m,i,cljs.core.first(s));

var G__13861 = (i + (1));
var G__13862 = cljs.core.next(s);
i = G__13861;
s = G__13862;
continue;
}
break;
}
} else {
var xdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(x));
var msize = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
if(((0) === xdims)){
var value = clojure.core.matrix.protocols.get_0d(x);
var n__4607__auto__ = msize;
var i = (0);
while(true){
if((i < n__4607__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i,value);

var G__13863 = (i + (1));
i = G__13863;
continue;
} else {
return null;
}
break;
}
} else {
if(((1) === xdims)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(msize,cljs.core.long$(clojure.core.matrix.protocols.dimension_count(x,(0))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Mismatched shapes in assign to array of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(m))," with argument of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.get_shape(x))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4607__auto__ = msize;
var i = (0);
while(true){
if((i < n__4607__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i,clojure.core.matrix.protocols.get_1d(x,i));

var G__13864 = (i + (1));
i = G__13864;
continue;
} else {
return null;
}
break;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't assign! with an argument of higher dimensionality",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
var xdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(x));
if((dims === xdims)){
var xss = clojure.core.matrix.protocols.get_major_slice_seq(x);
var _ = (function (){var or__4131__auto__ = clojure.core.matrix.protocols.same_shapes_QMARK_(xss);
if(or__4131__auto__){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Inconsistent slice shapes for assign!",cljs.core.PersistentArrayMap.EMPTY);
}
})();
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (xss,_,xdims,dims,G__13848_13858,G__13849_13859){
return (function (a,b){
return clojure.core.matrix.protocols.assign_BANG_(a,b);
});})(xss,_,xdims,dims,G__13848_13858,G__13849_13859))
,clojure.core.matrix.protocols.get_major_slice_view_seq(m),xss));
} else {
var seq__13851 = cljs.core.seq(clojure.core.matrix.protocols.get_major_slice_view_seq(m));
var chunk__13852 = null;
var count__13853 = (0);
var i__13854 = (0);
while(true){
if((i__13854 < count__13853)){
var ms = chunk__13852.cljs$core$IIndexed$_nth$arity$2(null,i__13854);
clojure.core.matrix.protocols.assign_BANG_(ms,x);


var G__13865 = seq__13851;
var G__13866 = chunk__13852;
var G__13867 = count__13853;
var G__13868 = (i__13854 + (1));
seq__13851 = G__13865;
chunk__13852 = G__13866;
count__13853 = G__13867;
i__13854 = G__13868;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__13851);
if(temp__5720__auto__){
var seq__13851__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13851__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13851__$1);
var G__13869 = cljs.core.chunk_rest(seq__13851__$1);
var G__13870 = c__4550__auto__;
var G__13871 = cljs.core.count(c__4550__auto__);
var G__13872 = (0);
seq__13851 = G__13869;
chunk__13852 = G__13870;
count__13853 = G__13871;
i__13854 = G__13872;
continue;
} else {
var ms = cljs.core.first(seq__13851__$1);
clojure.core.matrix.protocols.assign_BANG_(ms,x);


var G__13873 = cljs.core.next(seq__13851__$1);
var G__13874 = null;
var G__13875 = (0);
var G__13876 = (0);
seq__13851 = G__13873;
chunk__13852 = G__13874;
count__13853 = G__13875;
i__13854 = G__13876;
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
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't assign to a non-array object: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});})(G__13848_13858,G__13849_13859))
;
goog.object.set(G__13848_13858,G__13849_13859,G__13850_13860);

var G__13855_13877 = clojure.core.matrix.protocols.assign_array_BANG_;
var G__13856_13878 = "object";
var G__13857_13879 = ((function (G__13855_13877,G__13856_13878){
return (function() {
var G__13880 = null;
var G__13880__2 = (function (m,arr){
var alen = cljs.core.long$(cljs.core.count(arr));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(m))){
var n__4607__auto__ = alen;
var i = (0);
while(true){
if((i < n__4607__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arr,i));

var G__13881 = (i + (1));
i = G__13881;
continue;
} else {
return null;
}
break;
}
} else {
return clojure.core.matrix.protocols.assign_array_BANG_.cljs$core$IFn$_invoke$arity$4(m,arr,(0),alen);
}
});
var G__13880__4 = (function (m,arr,start,length){
var length__$1 = cljs.core.long$(length);
var start__$1 = cljs.core.long$(start);
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(m))){
var n__4607__auto__ = length__$1;
var i = (0);
while(true){
if((i < n__4607__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arr,(start__$1 + i)));

var G__13882 = (i + (1));
i = G__13882;
continue;
} else {
return null;
}
break;
}
} else {
var ss = cljs.core.seq(clojure.core.matrix.protocols.get_major_slice_seq(m));
var skip = cljs.core.long$(((ss)?clojure.core.matrix.impl.defaults.calc_element_count(cljs.core.first(clojure.core.matrix.protocols.get_major_slice_seq(m))):(0)));
var vals__2015__auto__ = cljs.core.seq(ss);
var i = cljs.core.long$((0));
while(true){
if(vals__2015__auto__){
var s = cljs.core.first(vals__2015__auto__);
clojure.core.matrix.protocols.assign_array_BANG_.cljs$core$IFn$_invoke$arity$4(s,arr,(start__$1 + (skip * i)),skip);

var G__13883 = cljs.core.next(vals__2015__auto__);
var G__13884 = (i + (1));
vals__2015__auto__ = G__13883;
i = G__13884;
continue;
} else {
return null;
}
break;
}
}
});
G__13880 = function(m,arr,start,length){
switch(arguments.length){
case 2:
return G__13880__2.call(this,m,arr);
case 4:
return G__13880__4.call(this,m,arr,start,length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13880.cljs$core$IFn$_invoke$arity$2 = G__13880__2;
G__13880.cljs$core$IFn$_invoke$arity$4 = G__13880__4;
return G__13880;
})()
;})(G__13855_13877,G__13856_13878))
;
goog.object.set(G__13855_13877,G__13856_13878,G__13857_13879);
goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"null",true);

var G__13885_13894 = clojure.core.matrix.protocols.assign;
var G__13886_13895 = "null";
var G__13887_13896 = ((function (G__13885_13894,G__13886_13895){
return (function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce(m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone(r);
} else {
return r;
}
});})(G__13885_13894,G__13886_13895))
;
goog.object.set(G__13885_13894,G__13886_13895,G__13887_13896);

goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"number",true);

var G__13888_13897 = clojure.core.matrix.protocols.assign;
var G__13889_13898 = "number";
var G__13890_13899 = ((function (G__13888_13897,G__13889_13898){
return (function (m,source){
return source;
});})(G__13888_13897,G__13889_13898))
;
goog.object.set(G__13888_13897,G__13889_13898,G__13890_13899);

goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"object",true);

var G__13891_13900 = clojure.core.matrix.protocols.assign;
var G__13892_13901 = "object";
var G__13893_13902 = ((function (G__13891_13900,G__13892_13901){
return (function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce(m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone(r);
} else {
return r;
}
});})(G__13891_13900,G__13892_13901))
;
goog.object.set(G__13891_13900,G__13892_13901,G__13893_13902);
goog.object.set(clojure.core.matrix.protocols.PMutableFill,"object",true);

var G__13903_13906 = clojure.core.matrix.protocols.fill_BANG_;
var G__13904_13907 = "object";
var G__13905_13908 = ((function (G__13903_13906,G__13904_13907){
return (function (m,value){
return clojure.core.matrix.protocols.assign_BANG_(m,value);
});})(G__13903_13906,G__13904_13907))
;
goog.object.set(G__13903_13906,G__13904_13907,G__13905_13908);
goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"null",true);

var G__13909_13918 = clojure.core.matrix.protocols.clone;
var G__13910_13919 = "null";
var G__13911_13920 = ((function (G__13909_13918,G__13910_13919){
return (function (m){
return m;
});})(G__13909_13918,G__13910_13919))
;
goog.object.set(G__13909_13918,G__13910_13919,G__13911_13920);

goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"number",true);

var G__13912_13921 = clojure.core.matrix.protocols.clone;
var G__13913_13922 = "number";
var G__13914_13923 = ((function (G__13912_13921,G__13913_13922){
return (function (m){
return m;
});})(G__13912_13921,G__13913_13922))
;
goog.object.set(G__13912_13921,G__13913_13922,G__13914_13923);

goog.object.set(clojure.core.matrix.protocols.PMatrixCloning,"object",true);

var G__13915_13924 = clojure.core.matrix.protocols.clone;
var G__13916_13925 = "object";
var G__13917_13926 = ((function (G__13915_13924,G__13916_13925){
return (function (m){
return clojure.core.matrix.protocols.construct_matrix(m,m);
});})(G__13915_13924,G__13916_13925))
;
goog.object.set(G__13915_13924,G__13916_13925,G__13917_13926);
goog.object.set(clojure.core.matrix.protocols.PSparseArray,"object",true);

var G__13927_13930 = clojure.core.matrix.protocols.is_sparse_QMARK_;
var G__13928_13931 = "object";
var G__13929_13932 = ((function (G__13927_13930,G__13928_13931){
return (function (m){
return false;
});})(G__13927_13930,G__13928_13931))
;
goog.object.set(G__13927_13930,G__13928_13931,G__13929_13932);
goog.object.set(clojure.core.matrix.protocols.PImmutableMatrixConstruction,"null",true);

var G__13933_13939 = clojure.core.matrix.protocols.immutable_matrix;
var G__13934_13940 = "null";
var G__13935_13941 = ((function (G__13933_13939,G__13934_13940){
return (function (m){
return null;
});})(G__13933_13939,G__13934_13940))
;
goog.object.set(G__13933_13939,G__13934_13940,G__13935_13941);

goog.object.set(clojure.core.matrix.protocols.PImmutableMatrixConstruction,"object",true);

var G__13936_13942 = clojure.core.matrix.protocols.immutable_matrix;
var G__13937_13943 = "object";
var G__13938_13944 = ((function (G__13936_13942,G__13937_13943){
return (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_(m))){
return clojure.core.matrix.protocols.convert_to_nested_vectors(m);
} else {
return m;
}
});})(G__13936_13942,G__13937_13943))
;
goog.object.set(G__13936_13942,G__13937_13943,G__13938_13944);
goog.object.set(clojure.core.matrix.protocols.PZeroCount,"null",true);

var G__13945_13954 = clojure.core.matrix.protocols.zero_count;
var G__13946_13955 = "null";
var G__13947_13956 = ((function (G__13945_13954,G__13946_13955){
return (function (m){
return (0);
});})(G__13945_13954,G__13946_13955))
;
goog.object.set(G__13945_13954,G__13946_13955,G__13947_13956);

goog.object.set(clojure.core.matrix.protocols.PZeroCount,"number",true);

var G__13948_13957 = clojure.core.matrix.protocols.zero_count;
var G__13949_13958 = "number";
var G__13950_13959 = ((function (G__13948_13957,G__13949_13958){
return (function (m){
if((m === (0))){
return (1);
} else {
return (0);
}
});})(G__13948_13957,G__13949_13958))
;
goog.object.set(G__13948_13957,G__13949_13958,G__13950_13959);

goog.object.set(clojure.core.matrix.protocols.PZeroCount,"object",true);

var G__13951_13960 = clojure.core.matrix.protocols.zero_count;
var G__13952_13961 = "object";
var G__13953_13962 = ((function (G__13951_13960,G__13952_13961){
return (function (m){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3(m,((function (G__13951_13960,G__13952_13961){
return (function (acc,e){
if((e === (0))){
return (acc + (1));
} else {
return acc;
}
});})(G__13951_13960,G__13952_13961))
,(0));
});})(G__13951_13960,G__13952_13961))
;
goog.object.set(G__13951_13960,G__13952_13961,G__13953_13962);
goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"null",true);

var G__13963_13972 = clojure.core.matrix.protocols.mutable_matrix;
var G__13964_13973 = "null";
var G__13965_13974 = ((function (G__13963_13972,G__13964_13973){
return (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(m);
});})(G__13963_13972,G__13964_13973))
;
goog.object.set(G__13963_13972,G__13964_13973,G__13965_13974);

goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"number",true);

var G__13966_13975 = clojure.core.matrix.protocols.mutable_matrix;
var G__13967_13976 = "number";
var G__13968_13977 = ((function (G__13966_13975,G__13967_13976){
return (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(m);
});})(G__13966_13975,G__13967_13976))
;
goog.object.set(G__13966_13975,G__13967_13976,G__13968_13977);

goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"object",true);

var G__13969_13978 = clojure.core.matrix.protocols.mutable_matrix;
var G__13970_13979 = "object";
var G__13971_13980 = ((function (G__13969_13978,G__13970_13979){
return (function (m){
return clojure.core.matrix.impl.defaults.construct_mutable_matrix(m);
});})(G__13969_13978,G__13970_13979))
;
goog.object.set(G__13969_13978,G__13970_13979,G__13971_13980);
goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"null",true);

var G__13981_13990 = clojure.core.matrix.protocols.ensure_mutable;
var G__13982_13991 = "null";
var G__13983_13992 = ((function (G__13981_13990,G__13982_13991){
return (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(m);
});})(G__13981_13990,G__13982_13991))
;
goog.object.set(G__13981_13990,G__13982_13991,G__13983_13992);

goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"number",true);

var G__13984_13993 = clojure.core.matrix.protocols.ensure_mutable;
var G__13985_13994 = "number";
var G__13986_13995 = ((function (G__13984_13993,G__13985_13994){
return (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar(m);
});})(G__13984_13993,G__13985_13994))
;
goog.object.set(G__13984_13993,G__13985_13994,G__13986_13995);

goog.object.set(clojure.core.matrix.protocols.PMutableCoercion,"object",true);

var G__13987_13996 = clojure.core.matrix.protocols.ensure_mutable;
var G__13988_13997 = "object";
var G__13989_13998 = ((function (G__13987_13996,G__13988_13997){
return (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_(m))){
return m;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix(m);
}
});})(G__13987_13996,G__13988_13997))
;
goog.object.set(G__13987_13996,G__13988_13997,G__13989_13998);
goog.object.set(clojure.core.matrix.protocols.PComputeMatrix,"object",true);

var G__13999_14002 = clojure.core.matrix.protocols.compute_matrix;
var G__14000_14003 = "object";
var G__14001_14004 = ((function (G__13999_14002,G__14000_14003){
return (function (m,shape,f){
var m__$1 = clojure.core.matrix.protocols.new_matrix_nd(m,shape);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (m__$1,G__13999_14002,G__14000_14003){
return (function (m__$2,ix){
return clojure.core.matrix.protocols.set_nd(m__$2,ix,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,ix));
});})(m__$1,G__13999_14002,G__14000_14003))
,m__$1,clojure.core.matrix.utils.base_index_seq_for_shape(shape));
});})(G__13999_14002,G__14000_14003))
;
goog.object.set(G__13999_14002,G__14000_14003,G__14001_14004);
goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"null",true);

var G__14005_14065 = clojure.core.matrix.protocols.dimensionality;
var G__14006_14066 = "null";
var G__14007_14067 = ((function (G__14005_14065,G__14006_14066){
return (function (m){
return (0);
});})(G__14005_14065,G__14006_14066))
;
goog.object.set(G__14005_14065,G__14006_14066,G__14007_14067);

var G__14008_14068 = clojure.core.matrix.protocols.is_scalar_QMARK_;
var G__14009_14069 = "null";
var G__14010_14070 = ((function (G__14008_14068,G__14009_14069){
return (function (m){
return true;
});})(G__14008_14068,G__14009_14069))
;
goog.object.set(G__14008_14068,G__14009_14069,G__14010_14070);

var G__14011_14071 = clojure.core.matrix.protocols.is_vector_QMARK_;
var G__14012_14072 = "null";
var G__14013_14073 = ((function (G__14011_14071,G__14012_14072){
return (function (m){
return false;
});})(G__14011_14071,G__14012_14072))
;
goog.object.set(G__14011_14071,G__14012_14072,G__14013_14073);

var G__14014_14074 = clojure.core.matrix.protocols.get_shape;
var G__14015_14075 = "null";
var G__14016_14076 = ((function (G__14014_14074,G__14015_14075){
return (function (m){
return null;
});})(G__14014_14074,G__14015_14075))
;
goog.object.set(G__14014_14074,G__14015_14075,G__14016_14076);

var G__14017_14077 = clojure.core.matrix.protocols.dimension_count;
var G__14018_14078 = "null";
var G__14019_14079 = ((function (G__14017_14077,G__14018_14078){
return (function (m,i){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["nil has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});})(G__14017_14077,G__14018_14078))
;
goog.object.set(G__14017_14077,G__14018_14078,G__14019_14079);

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
});

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"object",true);

var G__14020_14080 = clojure.core.matrix.protocols.dimensionality;
var G__14021_14081 = "object";
var G__14022_14082 = ((function (G__14020_14080,G__14021_14081){
return (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
var n = cljs.core.long$(cljs.core.count(m));
if((n > (0))){
return (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0)))) + (1));
} else {
return (1);
}
} else {
return (0);

}
});})(G__14020_14080,G__14021_14081))
;
goog.object.set(G__14020_14080,G__14021_14081,G__14022_14082);

var G__14023_14083 = clojure.core.matrix.protocols.is_vector_QMARK_;
var G__14024_14084 = "object";
var G__14025_14085 = ((function (G__14023_14083,G__14024_14084){
return (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
var n = cljs.core.long$(cljs.core.count(m));
return (((n === (0))) || (((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0)))))));
} else {
return false;

}
});})(G__14023_14083,G__14024_14084))
;
goog.object.set(G__14023_14083,G__14024_14084,G__14025_14085);

var G__14026_14086 = clojure.core.matrix.protocols.is_scalar_QMARK_;
var G__14027_14087 = "object";
var G__14028_14088 = ((function (G__14026_14086,G__14027_14087){
return (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
return false;
} else {
return true;

}
});})(G__14026_14086,G__14027_14087))
;
goog.object.set(G__14026_14086,G__14027_14087,G__14028_14088);

var G__14029_14089 = clojure.core.matrix.protocols.get_shape;
var G__14030_14090 = "object";
var G__14031_14091 = ((function (G__14029_14089,G__14030_14090){
return (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
var n = cljs.core.count(m);
if((n === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
} else {
return cljs.core.cons(n,clojure.core.matrix.protocols.get_shape(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0))));
}
} else {
return null;

}
});})(G__14029_14089,G__14030_14090))
;
goog.object.set(G__14029_14089,G__14030_14090,G__14031_14091);

var G__14032_14092 = clojure.core.matrix.protocols.dimension_count;
var G__14033_14093 = "object";
var G__14034_14094 = ((function (G__14032_14092,G__14033_14093){
return (function (m,i){
var i__$1 = cljs.core.long$(i);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
if((i__$1 === (0))){
return cljs.core.count(m);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,(0)),(i__$1 - (1)));
}
} else {
if(((0) === i__$1)){
return cljs.core.count(m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't determine count of dimension ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__$1)," on Object: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
});})(G__14032_14092,G__14033_14093))
;
goog.object.set(G__14032_14092,G__14033_14093,G__14034_14094);

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
});

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"number",true);

var G__14035_14095 = clojure.core.matrix.protocols.dimensionality;
var G__14036_14096 = "number";
var G__14037_14097 = ((function (G__14035_14095,G__14036_14096){
return (function (m){
return (0);
});})(G__14035_14095,G__14036_14096))
;
goog.object.set(G__14035_14095,G__14036_14096,G__14037_14097);

var G__14038_14098 = clojure.core.matrix.protocols.is_scalar_QMARK_;
var G__14039_14099 = "number";
var G__14040_14100 = ((function (G__14038_14098,G__14039_14099){
return (function (m){
return true;
});})(G__14038_14098,G__14039_14099))
;
goog.object.set(G__14038_14098,G__14039_14099,G__14040_14100);

var G__14041_14101 = clojure.core.matrix.protocols.is_vector_QMARK_;
var G__14042_14102 = "number";
var G__14043_14103 = ((function (G__14041_14101,G__14042_14102){
return (function (m){
return false;
});})(G__14041_14101,G__14042_14102))
;
goog.object.set(G__14041_14101,G__14042_14102,G__14043_14103);

var G__14044_14104 = clojure.core.matrix.protocols.get_shape;
var G__14045_14105 = "number";
var G__14046_14106 = ((function (G__14044_14104,G__14045_14105){
return (function (m){
return null;
});})(G__14044_14104,G__14045_14105))
;
goog.object.set(G__14044_14104,G__14045_14105,G__14046_14106);

var G__14047_14107 = clojure.core.matrix.protocols.dimension_count;
var G__14048_14108 = "number";
var G__14049_14109 = ((function (G__14047_14107,G__14048_14108){
return (function (m,i){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Number has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});})(G__14047_14107,G__14048_14108))
;
goog.object.set(G__14047_14107,G__14048_14108,G__14049_14109);

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
}
});

goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"string",true);

var G__14050_14110 = clojure.core.matrix.protocols.dimensionality;
var G__14051_14111 = "string";
var G__14052_14112 = ((function (G__14050_14110,G__14051_14111){
return (function (m){
return (0);
});})(G__14050_14110,G__14051_14111))
;
goog.object.set(G__14050_14110,G__14051_14111,G__14052_14112);

var G__14053_14113 = clojure.core.matrix.protocols.is_scalar_QMARK_;
var G__14054_14114 = "string";
var G__14055_14115 = ((function (G__14053_14113,G__14054_14114){
return (function (m){
return true;
});})(G__14053_14113,G__14054_14114))
;
goog.object.set(G__14053_14113,G__14054_14114,G__14055_14115);

var G__14056_14116 = clojure.core.matrix.protocols.is_vector_QMARK_;
var G__14057_14117 = "string";
var G__14058_14118 = ((function (G__14056_14116,G__14057_14117){
return (function (m){
return false;
});})(G__14056_14116,G__14057_14117))
;
goog.object.set(G__14056_14116,G__14057_14117,G__14058_14118);

var G__14059_14119 = clojure.core.matrix.protocols.get_shape;
var G__14060_14120 = "string";
var G__14061_14121 = ((function (G__14059_14119,G__14060_14120){
return (function (m){
return null;
});})(G__14059_14119,G__14060_14120))
;
goog.object.set(G__14059_14119,G__14060_14120,G__14061_14121);

var G__14062_14122 = clojure.core.matrix.protocols.dimension_count;
var G__14063_14123 = "string";
var G__14064_14124 = ((function (G__14062_14122,G__14063_14123){
return (function (m,i){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["String has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});})(G__14062_14122,G__14063_14123))
;
goog.object.set(G__14062_14122,G__14063_14123,G__14064_14124);

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)) + (1));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality(cljs.core.first(m__$1)));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons(cljs.core.count(m__$1),clojure.core.matrix.protocols.get_shape(cljs.core.first(m__$1)));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count(m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count(cljs.core.first(m__$1),(x - (1)));
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
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Keyword has zero dimensionality, cannot get count for dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
goog.object.set(clojure.core.matrix.protocols.PSameShape,"null",true);

var G__14125_14137 = clojure.core.matrix.protocols.same_shape_QMARK_;
var G__14126_14138 = "null";
var G__14127_14139 = ((function (G__14125_14137,G__14126_14138){
return (function (a,b){
return ((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)));
});})(G__14125_14137,G__14126_14138))
;
goog.object.set(G__14125_14137,G__14126_14138,G__14127_14139);

goog.object.set(clojure.core.matrix.protocols.PSameShape,"string",true);

var G__14128_14140 = clojure.core.matrix.protocols.same_shape_QMARK_;
var G__14129_14141 = "string";
var G__14130_14142 = ((function (G__14128_14140,G__14129_14141){
return (function (a,b){
return ((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)));
});})(G__14128_14140,G__14129_14141))
;
goog.object.set(G__14128_14140,G__14129_14141,G__14130_14142);

goog.object.set(clojure.core.matrix.protocols.PSameShape,"number",true);

var G__14131_14143 = clojure.core.matrix.protocols.same_shape_QMARK_;
var G__14132_14144 = "number";
var G__14133_14145 = ((function (G__14131_14143,G__14132_14144){
return (function (a,b){
return ((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)));
});})(G__14131_14143,G__14132_14144))
;
goog.object.set(G__14131_14143,G__14132_14144,G__14133_14145);

goog.object.set(clojure.core.matrix.protocols.PSameShape,"object",true);

var G__14134_14146 = clojure.core.matrix.protocols.same_shape_QMARK_;
var G__14135_14147 = "object";
var G__14136_14148 = ((function (G__14134_14146,G__14135_14147){
return (function (a,b){
return clojure.core.matrix.utils.same_shape_object_QMARK_(clojure.core.matrix.protocols.get_shape(a),clojure.core.matrix.protocols.get_shape(b));
});})(G__14134_14146,G__14135_14147))
;
goog.object.set(G__14134_14146,G__14135_14147,G__14136_14148);
goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"null",true);

var G__14149_14167 = clojure.core.matrix.protocols.trace;
var G__14150_14168 = "null";
var G__14151_14169 = ((function (G__14149_14167,G__14150_14168){
return (function (m){
return m;
});})(G__14149_14167,G__14150_14168))
;
goog.object.set(G__14149_14167,G__14150_14168,G__14151_14169);

goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"number",true);

var G__14152_14170 = clojure.core.matrix.protocols.trace;
var G__14153_14171 = "number";
var G__14154_14172 = ((function (G__14152_14170,G__14153_14171){
return (function (m){
return m;
});})(G__14152_14170,G__14153_14171))
;
goog.object.set(G__14152_14170,G__14153_14171,G__14154_14172);

var G__14155_14173 = clojure.core.matrix.protocols.inverse;
var G__14156_14174 = "number";
var G__14157_14175 = ((function (G__14155_14173,G__14156_14174){
return (function (m){
return ((1) / m);
});})(G__14155_14173,G__14156_14174))
;
goog.object.set(G__14155_14173,G__14156_14174,G__14157_14175);

goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"object",true);

var G__14158_14176 = clojure.core.matrix.protocols.trace;
var G__14159_14177 = "object";
var G__14160_14178 = ((function (G__14158_14176,G__14159_14177){
return (function (m){
if(((2) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Trace requires a 2D matrix",cljs.core.PersistentArrayMap.EMPTY);
}

var rc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var cc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1)));
var dims = Math.min(rc,cc);
var i = (0);
var res = 0.0;
while(true){
if((i >= dims)){
return res;
} else {
var G__14179 = (i + (1));
var G__14180 = (res + clojure.core.matrix.protocols.get_2d(m,i,i));
i = G__14179;
res = G__14180;
continue;
}
break;
}
});})(G__14158_14176,G__14159_14177))
;
goog.object.set(G__14158_14176,G__14159_14177,G__14160_14178);

var G__14161_14181 = clojure.core.matrix.protocols.determinant;
var G__14162_14182 = "object";
var G__14163_14183 = ((function (G__14161_14181,G__14162_14182){
return (function (m){
var imp = (function (){var or__4131__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$vectorz);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("(let Need to load an implementation which supports determinant, e.g. vectorz-clj",cljs.core.PersistentArrayMap.EMPTY);
}
})();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp,m);
return clojure.core.matrix.protocols.determinant(m__$1);
});})(G__14161_14181,G__14162_14182))
;
goog.object.set(G__14161_14181,G__14162_14182,G__14163_14183);

var G__14164_14184 = clojure.core.matrix.protocols.inverse;
var G__14165_14185 = "object";
var G__14166_14186 = ((function (G__14164_14184,G__14165_14185){
return (function (m){
var imp = (function (){var or__4131__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$vectorz);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Need to load an implementation which supports inverse, e.g. vectorz-clj",cljs.core.PersistentArrayMap.EMPTY);
}
})();
var mm = clojure.core.matrix.protocols.coerce_param(imp,m);
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.inverse(mm));
});})(G__14164_14184,G__14165_14185))
;
goog.object.set(G__14164_14184,G__14165_14185,G__14166_14186);
goog.object.set(clojure.core.matrix.protocols.PTranspose,"null",true);

var G__14187_14197 = clojure.core.matrix.protocols.transpose;
var G__14188_14198 = "null";
var G__14189_14199 = ((function (G__14187_14197,G__14188_14198){
return (function (m){
return m;
});})(G__14187_14197,G__14188_14198))
;
goog.object.set(G__14187_14197,G__14188_14198,G__14189_14199);

goog.object.set(clojure.core.matrix.protocols.PTranspose,"number",true);

var G__14190_14200 = clojure.core.matrix.protocols.transpose;
var G__14191_14201 = "number";
var G__14192_14202 = ((function (G__14190_14200,G__14191_14201){
return (function (m){
return m;
});})(G__14190_14200,G__14191_14201))
;
goog.object.set(G__14190_14200,G__14191_14201,G__14192_14202);

goog.object.set(clojure.core.matrix.protocols.PTranspose,"object",true);

var G__14193_14203 = clojure.core.matrix.protocols.transpose;
var G__14194_14204 = "object";
var G__14195_14205 = ((function (G__14193_14203,G__14194_14204){
return (function (m){
return clojure.core.matrix.protocols.coerce_param(m,(function (){var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var G__14196 = dims;
switch (G__14196) {
case (0):
return m;

break;
case (1):
return m;

break;
case (2):
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.mapv,cljs.core.vector,clojure.core.matrix.protocols.convert_to_nested_vectors(m));

break;
default:
return clojure.core.matrix.protocols.transpose_dims(m,cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1(dims)));

}
})());
});})(G__14193_14203,G__14194_14204))
;
goog.object.set(G__14193_14203,G__14194_14204,G__14195_14205);
goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"null",true);

var G__14207_14216 = clojure.core.matrix.protocols.transpose_dims;
var G__14208_14217 = "null";
var G__14209_14218 = ((function (G__14207_14216,G__14208_14217){
return (function (m,ordering){
return m;
});})(G__14207_14216,G__14208_14217))
;
goog.object.set(G__14207_14216,G__14208_14217,G__14209_14218);

goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"number",true);

var G__14210_14219 = clojure.core.matrix.protocols.transpose_dims;
var G__14211_14220 = "number";
var G__14212_14221 = ((function (G__14210_14219,G__14211_14220){
return (function (m,ordering){
return m;
});})(G__14210_14219,G__14211_14220))
;
goog.object.set(G__14210_14219,G__14211_14220,G__14212_14221);

goog.object.set(clojure.core.matrix.protocols.PTransposeDims,"object",true);

var G__14213_14222 = clojure.core.matrix.protocols.transpose_dims;
var G__14214_14223 = "object";
var G__14215_14224 = ((function (G__14213_14222,G__14214_14223){
return (function (m,ordering){
return clojure.core.matrix.protocols.transpose_dims(clojure.core.matrix.protocols.convert_to_nested_vectors(m),ordering);
});})(G__14213_14222,G__14214_14223))
;
goog.object.set(G__14213_14222,G__14214_14223,G__14215_14224);
goog.object.set(clojure.core.matrix.protocols.PTransposeInPlace,"object",true);

var G__14225_14228 = clojure.core.matrix.protocols.transpose_BANG_;
var G__14226_14229 = "object";
var G__14227_14230 = ((function (G__14225_14228,G__14226_14229){
return (function (m){
var n_14231 = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(n_14231,cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("transpose! requires a quare matrix",cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__4607__auto___14232 = n_14231;
var i_14233 = (0);
while(true){
if((i_14233 < n__4607__auto___14232)){
var n__4607__auto___14234__$1 = i_14233;
var j_14235 = (0);
while(true){
if((j_14235 < n__4607__auto___14234__$1)){
var t_14236 = clojure.core.matrix.protocols.get_2d(m,i_14233,j_14235);
clojure.core.matrix.protocols.set_2d_BANG_(m,i_14233,j_14235,clojure.core.matrix.protocols.get_2d(m,j_14235,i_14233));

clojure.core.matrix.protocols.set_2d_BANG_(m,j_14235,i_14233,t_14236);

var G__14237 = (j_14235 + (1));
j_14235 = G__14237;
continue;
} else {
}
break;
}

var G__14238 = (i_14233 + (1));
i_14233 = G__14238;
continue;
} else {
}
break;
}

return m;
});})(G__14225_14228,G__14226_14229))
;
goog.object.set(G__14225_14228,G__14226_14229,G__14227_14230);
goog.object.set(clojure.core.matrix.protocols.PRotate,"null",true);

var G__14239_14248 = clojure.core.matrix.protocols.rotate;
var G__14240_14249 = "null";
var G__14241_14250 = ((function (G__14239_14248,G__14240_14249){
return (function (m,dim,places){
return null;
});})(G__14239_14248,G__14240_14249))
;
goog.object.set(G__14239_14248,G__14240_14249,G__14241_14250);

goog.object.set(clojure.core.matrix.protocols.PRotate,"number",true);

var G__14242_14251 = clojure.core.matrix.protocols.rotate;
var G__14243_14252 = "number";
var G__14244_14253 = ((function (G__14242_14251,G__14243_14252){
return (function (m,dim,places){
return m;
});})(G__14242_14251,G__14243_14252))
;
goog.object.set(G__14242_14251,G__14243_14252,G__14244_14253);

goog.object.set(clojure.core.matrix.protocols.PRotate,"object",true);

var G__14245_14254 = clojure.core.matrix.protocols.rotate;
var G__14246_14255 = "object";
var G__14247_14256 = ((function (G__14245_14254,G__14246_14255){
return (function (m,dim,places){
var dim__$1 = cljs.core.long$(dim);
var places__$1 = cljs.core.long$(places);
if((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) <= (0))){
return m;
} else {
if(((0) === dim__$1)){
var ss = clojure.core.matrix.protocols.get_major_slice_seq(m);
var c = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var sh = cljs.core.long$((((c > (0)))?cljs.core.long$(cljs.core.mod(places__$1,c)):(0)));
if((sh === (0))){
return m;
} else {
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take_last((c - sh),ss),cljs.core.take.cljs$core$IFn$_invoke$arity$2(sh,ss)));
}
} else {
return clojure.core.matrix.protocols.rotate(clojure.core.matrix.protocols.convert_to_nested_vectors(m),dim__$1,places__$1);

}
}
});})(G__14245_14254,G__14246_14255))
;
goog.object.set(G__14245_14254,G__14246_14255,G__14247_14256);
goog.object.set(clojure.core.matrix.protocols.PRotateAll,"null",true);

var G__14257_14270 = clojure.core.matrix.protocols.rotate_all;
var G__14258_14271 = "null";
var G__14259_14272 = ((function (G__14257_14270,G__14258_14271){
return (function (m,shifts){
return null;
});})(G__14257_14270,G__14258_14271))
;
goog.object.set(G__14257_14270,G__14258_14271,G__14259_14272);

goog.object.set(clojure.core.matrix.protocols.PRotateAll,"number",true);

var G__14260_14273 = clojure.core.matrix.protocols.rotate_all;
var G__14261_14274 = "number";
var G__14262_14275 = ((function (G__14260_14273,G__14261_14274){
return (function (m,shifts){
return m;
});})(G__14260_14273,G__14261_14274))
;
goog.object.set(G__14260_14273,G__14261_14274,G__14262_14275);

goog.object.set(clojure.core.matrix.protocols.PRotateAll,"object",true);

var G__14263_14276 = clojure.core.matrix.protocols.rotate_all;
var G__14264_14277 = "object";
var G__14265_14278 = ((function (G__14263_14276,G__14264_14277){
return (function (m,shifts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__14263_14276,G__14264_14277){
return (function (m__$1,p__14266){
var vec__14267 = p__14266;
var dim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14267,(0),null);
var shift = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14267,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.rotate(m__$1,dim,shift);
}
});})(G__14263_14276,G__14264_14277))
,m,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__14263_14276,G__14264_14277){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(G__14263_14276,G__14264_14277))
,shifts));
});})(G__14263_14276,G__14264_14277))
;
goog.object.set(G__14263_14276,G__14264_14277,G__14265_14278);
goog.object.set(clojure.core.matrix.protocols.PShift,"object",true);

var G__14279_14289 = clojure.core.matrix.protocols.shift;
var G__14280_14290 = "object";
var G__14281_14291 = ((function (G__14279_14289,G__14280_14290){
return (function (m,dim,shift){
var shift__$1 = cljs.core.long$(shift);
var z = clojure.core.matrix.protocols.generic_zero(m);
var c = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,dim));
var sh = cljs.core.vec(clojure.core.matrix.protocols.get_shape(m));
if((shift__$1 === (0))){
return m;
} else {
if((shift__$1 >= c)){
return clojure.core.matrix.protocols.broadcast_coerce(m,z);
} else {
if((shift__$1 <= (- c))){
return clojure.core.matrix.protocols.broadcast_coerce(m,z);
} else {
if((shift__$1 < (0))){
return clojure.core.matrix.protocols.join_along(clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.construct_matrix(m,z),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sh,dim,(- shift__$1))),clojure.core.matrix.protocols.submatrix(m,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sh),(0))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sh,dim,(c + shift__$1)))),dim);
} else {
if((shift__$1 > (0))){
return clojure.core.matrix.protocols.join_along(clojure.core.matrix.protocols.submatrix(m,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sh),(0))),dim,shift__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sh,dim,(c - shift__$1)))),clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.construct_matrix(m,z),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sh,dim,shift__$1)),dim);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Shouldn't be possible!!",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
});})(G__14279_14289,G__14280_14290))
;
goog.object.set(G__14279_14289,G__14280_14290,G__14281_14291);

var G__14282_14292 = clojure.core.matrix.protocols.shift_all;
var G__14283_14293 = "object";
var G__14284_14294 = ((function (G__14282_14292,G__14283_14293){
return (function (m,shifts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__14282_14292,G__14283_14293){
return (function (m__$1,p__14285){
var vec__14286 = p__14285;
var dim = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14286,(0),null);
var shift = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14286,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.shift(m__$1,dim,shift);
}
});})(G__14282_14292,G__14283_14293))
,m,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__14282_14292,G__14283_14293){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(G__14282_14292,G__14283_14293))
,shifts));
});})(G__14282_14292,G__14283_14293))
;
goog.object.set(G__14282_14292,G__14283_14293,G__14284_14294);
goog.object.set(clojure.core.matrix.protocols.POrder,"null",true);

var G__14298_14307 = clojure.core.matrix.protocols.order;
var G__14299_14308 = "null";
var G__14300_14309 = ((function (G__14298_14307,G__14299_14308){
return (function() {
var G__14310 = null;
var G__14310__2 = (function (m,indices){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't reorder a scalar nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__14310__3 = (function (m,dim,indices){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't reorder a scalar nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__14310 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__14310__2.call(this,m,dim);
case 3:
return G__14310__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14310.cljs$core$IFn$_invoke$arity$2 = G__14310__2;
G__14310.cljs$core$IFn$_invoke$arity$3 = G__14310__3;
return G__14310;
})()
;})(G__14298_14307,G__14299_14308))
;
goog.object.set(G__14298_14307,G__14299_14308,G__14300_14309);

goog.object.set(clojure.core.matrix.protocols.POrder,"number",true);

var G__14301_14311 = clojure.core.matrix.protocols.order;
var G__14302_14312 = "number";
var G__14303_14313 = ((function (G__14301_14311,G__14302_14312){
return (function() {
var G__14314 = null;
var G__14314__2 = (function (m,indices){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't reorder a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
var G__14314__3 = (function (m,dim,indices){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't reorder a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
G__14314 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__14314__2.call(this,m,dim);
case 3:
return G__14314__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14314.cljs$core$IFn$_invoke$arity$2 = G__14314__2;
G__14314.cljs$core$IFn$_invoke$arity$3 = G__14314__3;
return G__14314;
})()
;})(G__14301_14311,G__14302_14312))
;
goog.object.set(G__14301_14311,G__14302_14312,G__14303_14313);

goog.object.set(clojure.core.matrix.protocols.POrder,"object",true);

var G__14304_14315 = clojure.core.matrix.protocols.order;
var G__14305_14316 = "object";
var G__14306_14317 = ((function (G__14304_14315,G__14305_14316){
return (function() {
var G__14318 = null;
var G__14318__2 = (function (m,indices){
var mshape = cljs.core.vec(clojure.core.matrix.protocols.get_shape(m));
var subshape = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,(0),(1));
var ss = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (mshape,subshape,G__14304_14315,G__14305_14316){
return (function (p1__14295_SHARP_){
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.protocols.get_major_slice(m,p1__14295_SHARP_),subshape);
});})(mshape,subshape,G__14304_14315,G__14305_14316))
,indices);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (mshape,subshape,ss,G__14304_14315,G__14305_14316){
return (function (p1__14296_SHARP_,p2__14297_SHARP_){
return clojure.core.matrix.protocols.join(p1__14296_SHARP_,p2__14297_SHARP_);
});})(mshape,subshape,ss,G__14304_14315,G__14305_14316))
,ss);
});
var G__14318__3 = (function (m,dim,indices){
return clojure.core.matrix.protocols.order.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.protocols.convert_to_nested_vectors(m),dim,indices);
});
G__14318 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__14318__2.call(this,m,dim);
case 3:
return G__14318__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14318.cljs$core$IFn$_invoke$arity$2 = G__14318__2;
G__14318.cljs$core$IFn$_invoke$arity$3 = G__14318__3;
return G__14318;
})()
;})(G__14304_14315,G__14305_14316))
;
goog.object.set(G__14304_14315,G__14305_14316,G__14306_14317);
/**
 * Outputs a vector containing the rank of array elements, given a sorted sequence of [index value] pairs and a length
 */
clojure.core.matrix.impl.defaults.output_rank = (function clojure$core$matrix$impl$defaults$output_rank(pairs,n){
var dest = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n);
var i_14319 = cljs.core.long$((0));
var pairs_14320__$1 = cljs.core.seq(pairs);
while(true){
if((i_14319 < n)){
(dest[cljs.core.first(cljs.core.first(pairs_14320__$1))] = Long.valueOf(i_14319));

var G__14321 = (i_14319 + (1));
var G__14322 = cljs.core.next(pairs_14320__$1);
i_14319 = G__14321;
pairs_14320__$1 = G__14322;
continue;
} else {
}
break;
}

return cljs.core.vec(dest);
});
goog.object.set(clojure.core.matrix.protocols.PIndexRank,"object",true);

var G__14324_14329 = clojure.core.matrix.protocols.index_rank;
var G__14325_14330 = "object";
var G__14326_14331 = ((function (G__14324_14329,G__14325_14330){
return (function() {
var G__14332 = null;
var G__14332__1 = (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var G__14327 = dims;
switch (G__14327) {
case (0):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get indexed rank of a scalar value",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
var n = cljs.core.long$(clojure.core.matrix.protocols.element_count(m));
return clojure.core.matrix.impl.defaults.output_rank(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_count(m)),clojure.core.matrix.protocols.element_seq(m))),n);

break;
default:
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.index_rank,clojure.core.matrix.protocols.get_major_slice_seq(m));

}
});
var G__14332__2 = (function (m,comp){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var G__14328 = dims;
switch (G__14328) {
case (0):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get indexed rank of a scalar value",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
var n = cljs.core.long$(clojure.core.matrix.protocols.element_count(m));
return clojure.core.matrix.impl.defaults.output_rank(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.second,comp,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_count(m)),clojure.core.matrix.protocols.element_seq(m))),n);

break;
default:
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__14328,dims,G__14324_14329,G__14325_14330){
return (function (p1__14323_SHARP_){
return clojure.core.matrix.protocols.index_rank.cljs$core$IFn$_invoke$arity$2(p1__14323_SHARP_,comp);
});})(G__14328,dims,G__14324_14329,G__14325_14330))
,clojure.core.matrix.protocols.get_major_slice_seq(m));

}
});
G__14332 = function(m,comp){
switch(arguments.length){
case 1:
return G__14332__1.call(this,m);
case 2:
return G__14332__2.call(this,m,comp);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14332.cljs$core$IFn$_invoke$arity$1 = G__14332__1;
G__14332.cljs$core$IFn$_invoke$arity$2 = G__14332__2;
return G__14332;
})()
;})(G__14324_14329,G__14325_14330))
;
goog.object.set(G__14324_14329,G__14325_14330,G__14326_14331);
goog.object.set(clojure.core.matrix.protocols.PMatrixProducts,"number",true);

var G__14336_14348 = clojure.core.matrix.protocols.inner_product;
var G__14337_14349 = "number";
var G__14338_14350 = ((function (G__14336_14348,G__14337_14349){
return (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale(a,m);
}
});})(G__14336_14348,G__14337_14349))
;
goog.object.set(G__14336_14348,G__14337_14349,G__14338_14350);

var G__14339_14351 = clojure.core.matrix.protocols.outer_product;
var G__14340_14352 = "number";
var G__14341_14353 = ((function (G__14339_14351,G__14340_14352){
return (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale(a,m);
}
});})(G__14339_14351,G__14340_14352))
;
goog.object.set(G__14339_14351,G__14340_14352,G__14341_14353);

goog.object.set(clojure.core.matrix.protocols.PMatrixProducts,"object",true);

var G__14342_14354 = clojure.core.matrix.protocols.inner_product;
var G__14343_14355 = "object";
var G__14344_14356 = ((function (G__14342_14354,G__14343_14355){
return (function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return clojure.core.matrix.protocols.pre_scale(a,m);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(a))){
return clojure.core.matrix.protocols.scale(m,a);
} else {
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a)))){
return clojure.core.matrix.protocols.element_sum(clojure.core.matrix.protocols.element_multiply(m,a));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.matrix_add,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (G__14342_14354,G__14343_14355){
return (function (sl,x){
return clojure.core.matrix.protocols.scale(sl,x);
});})(G__14342_14354,G__14343_14355))
,clojure.core.matrix.protocols.get_major_slice_seq(a),clojure.core.matrix.protocols.get_major_slice_seq(m)));
}
} else {
return clojure.core.matrix.protocols.construct_matrix(clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__14342_14354,G__14343_14355){
return (function (p1__14335_SHARP_){
return clojure.core.matrix.protocols.inner_product(p1__14335_SHARP_,a);
});})(G__14342_14354,G__14343_14355))
,clojure.core.matrix.protocols.get_major_slice_seq(m)));

}
}
}
});})(G__14342_14354,G__14343_14355))
;
goog.object.set(G__14342_14354,G__14343_14355,G__14344_14356);

var G__14345_14357 = clojure.core.matrix.protocols.outer_product;
var G__14346_14358 = "object";
var G__14347_14359 = ((function (G__14345_14357,G__14346_14358){
return (function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return clojure.core.matrix.protocols.pre_scale(a,m);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors(m),((function (G__14345_14357,G__14346_14358){
return (function (x){
return clojure.core.matrix.protocols.pre_scale(a,x);
});})(G__14345_14357,G__14346_14358))
);

}
});})(G__14345_14357,G__14346_14358))
;
goog.object.set(G__14345_14357,G__14346_14358,G__14347_14359);
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiply,"number",true);

var G__14360_14387 = clojure.core.matrix.protocols.element_multiply;
var G__14361_14388 = "number";
var G__14362_14389 = ((function (G__14360_14387,G__14361_14388){
return (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale(a,m);
}
});})(G__14360_14387,G__14361_14388))
;
goog.object.set(G__14360_14387,G__14361_14388,G__14362_14389);

var G__14363_14390 = clojure.core.matrix.protocols.matrix_multiply;
var G__14364_14391 = "number";
var G__14365_14392 = ((function (G__14363_14390,G__14364_14391){
return (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(a))){
return clojure.core.matrix.protocols.pre_scale(a,m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to multiply number with: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(a))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
});})(G__14363_14390,G__14364_14391))
;
goog.object.set(G__14363_14390,G__14364_14391,G__14365_14392);

goog.object.set(clojure.core.matrix.protocols.PMatrixMultiply,"object",true);

var G__14366_14393 = clojure.core.matrix.protocols.matrix_multiply;
var G__14367_14394 = "object";
var G__14368_14395 = ((function (G__14366_14393,G__14367_14394){
return (function (m,a){
var mdims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale(m,a);
} else {
if((((mdims === (1))) && ((adims === (1))))){
return clojure.core.matrix.protocols.vector_dot(m,a);
} else {
if((((mdims === (1))) && ((adims === (2))))){
var vec__14369 = clojure.core.matrix.protocols.get_shape(a);
var arows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(0),null);
var acols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,(1),null);
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.matrix_multiply(clojure.core.matrix.protocols.reshape(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),arows], null)),a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acols], null));
} else {
if((((mdims === (2))) && ((adims === (1))))){
var mshape = clojure.core.matrix.protocols.get_shape(m);
var vec__14372 = mshape;
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14372,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14372,(1),null);
var acount = clojure.core.matrix.protocols.element_count(a);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(mcols,acount)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't multiply matrix of shape: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mshape)," with a vector of length ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(acount)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.matrix_multiply(m,clojure.core.matrix.protocols.reshape(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols,(1)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows], null));
} else {
if((((mdims === (2))) && ((adims === (2))))){
var mutable = clojure.core.matrix.protocols.is_mutable_QMARK_(m);
var vec__14375 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14375,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14375,(1),null);
var vec__14378 = clojure.core.matrix.protocols.get_shape(a);
var arows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378,(0),null);
var acols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14378,(1),null);
var new_m_type = (cljs.core.truth_(mutable)?m:clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ndarray));
var new_m = clojure.core.matrix.protocols.new_matrix(new_m_type,mrows,acols);
var i_14396 = cljs.core.long$((0));
while(true){
if((i_14396 < mrows)){
var j_14397 = cljs.core.long$((0));
while(true){
if((j_14397 < acols)){
clojure.core.matrix.protocols.set_2d_BANG_(new_m,i_14396,j_14397,(0));

var G__14398 = (j_14397 + (1));
j_14397 = G__14398;
continue;
} else {
}
break;
}

var G__14399 = (i_14396 + (1));
i_14396 = G__14399;
continue;
} else {
}
break;
}


var i_14400 = cljs.core.long$((0));
while(true){
if((i_14400 < mrows)){
var j_14401 = cljs.core.long$((0));
while(true){
if((j_14401 < acols)){
var k_14402 = cljs.core.long$((0));
while(true){
if((k_14402 < mcols)){
clojure.core.matrix.protocols.set_2d_BANG_(new_m,i_14400,j_14401,(clojure.core.matrix.protocols.get_2d(new_m,i_14400,j_14401) + (clojure.core.matrix.protocols.get_2d(m,i_14400,k_14402) * clojure.core.matrix.protocols.get_2d(a,k_14402,j_14401))));

var G__14403 = (k_14402 + (1));
k_14402 = G__14403;
continue;
} else {
}
break;
}

var G__14404 = (j_14401 + (1));
j_14401 = G__14404;
continue;
} else {
}
break;
}

var G__14405 = (i_14400 + (1));
i_14400 = G__14405;
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
});})(G__14366_14393,G__14367_14394))
;
goog.object.set(G__14366_14393,G__14367_14394,G__14368_14395);

var G__14381_14406 = clojure.core.matrix.protocols.element_multiply;
var G__14382_14407 = "object";
var G__14383_14408 = ((function (G__14381_14406,G__14382_14407){
return (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale(m,a);
} else {
var vec__14384 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14384,(1),null);
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core._STAR_,a__$1);
}
});})(G__14381_14406,G__14382_14407))
;
goog.object.set(G__14381_14406,G__14382_14407,G__14383_14408);
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiplyMutable,"number",true);

var G__14409_14421 = clojure.core.matrix.protocols.element_multiply_BANG_;
var G__14410_14422 = "number";
var G__14411_14423 = ((function (G__14409_14421,G__14410_14422){
return (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable multiply on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});})(G__14409_14421,G__14410_14422))
;
goog.object.set(G__14409_14421,G__14410_14422,G__14411_14423);

var G__14412_14424 = clojure.core.matrix.protocols.matrix_multiply_BANG_;
var G__14413_14425 = "number";
var G__14414_14426 = ((function (G__14412_14424,G__14413_14425){
return (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable multiply on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});})(G__14412_14424,G__14413_14425))
;
goog.object.set(G__14412_14424,G__14413_14425,G__14414_14426);

goog.object.set(clojure.core.matrix.protocols.PMatrixMultiplyMutable,"object",true);

var G__14415_14427 = clojure.core.matrix.protocols.element_multiply_BANG_;
var G__14416_14428 = "object";
var G__14417_14429 = ((function (G__14415_14427,G__14416_14428){
return (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_multiply(m,a));
});})(G__14415_14427,G__14416_14428))
;
goog.object.set(G__14415_14427,G__14416_14428,G__14417_14429);

var G__14418_14430 = clojure.core.matrix.protocols.matrix_multiply_BANG_;
var G__14419_14431 = "object";
var G__14420_14432 = ((function (G__14418_14430,G__14419_14431){
return (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.matrix_multiply(m,a));
});})(G__14418_14430,G__14419_14431))
;
goog.object.set(G__14418_14430,G__14419_14431,G__14420_14432);
goog.object.set(clojure.core.matrix.protocols.PMatrixDivide,"number",true);

var G__14433_14439 = clojure.core.matrix.protocols.element_divide;
var G__14434_14440 = "number";
var G__14435_14441 = ((function (G__14433_14439,G__14434_14440){
return (function() {
var G__14442 = null;
var G__14442__1 = (function (m){
return ((1) / m);
});
var G__14442__2 = (function (m,a){
return clojure.core.matrix.protocols.pre_scale(clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$1(a),m);
});
G__14442 = function(m,a){
switch(arguments.length){
case 1:
return G__14442__1.call(this,m);
case 2:
return G__14442__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14442.cljs$core$IFn$_invoke$arity$1 = G__14442__1;
G__14442.cljs$core$IFn$_invoke$arity$2 = G__14442__2;
return G__14442;
})()
;})(G__14433_14439,G__14434_14440))
;
goog.object.set(G__14433_14439,G__14434_14440,G__14435_14441);

goog.object.set(clojure.core.matrix.protocols.PMatrixDivide,"object",true);

var G__14436_14443 = clojure.core.matrix.protocols.element_divide;
var G__14437_14444 = "object";
var G__14438_14445 = ((function (G__14436_14443,G__14437_14444){
return (function() {
var G__14446 = null;
var G__14446__1 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.get_shape(m))){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.element_divide);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to take reciprocal of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
var G__14446__2 = (function (m,a){
return clojure.core.matrix.protocols.element_multiply(m,clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$1(a));
});
G__14446 = function(m,a){
switch(arguments.length){
case 1:
return G__14446__1.call(this,m);
case 2:
return G__14446__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14446.cljs$core$IFn$_invoke$arity$1 = G__14446__1;
G__14446.cljs$core$IFn$_invoke$arity$2 = G__14446__2;
return G__14446;
})()
;})(G__14436_14443,G__14437_14444))
;
goog.object.set(G__14436_14443,G__14437_14444,G__14438_14445);
goog.object.set(clojure.core.matrix.protocols.PMatrixDivideMutable,"number",true);

var G__14447_14456 = clojure.core.matrix.protocols.element_divide_BANG_;
var G__14448_14457 = "number";
var G__14449_14458 = ((function (G__14447_14456,G__14448_14457){
return (function() {
var G__14459 = null;
var G__14459__1 = (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable divide on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});
var G__14459__2 = (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable divide on a scalar numer",cljs.core.PersistentArrayMap.EMPTY);
});
G__14459 = function(m,a){
switch(arguments.length){
case 1:
return G__14459__1.call(this,m);
case 2:
return G__14459__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14459.cljs$core$IFn$_invoke$arity$1 = G__14459__1;
G__14459.cljs$core$IFn$_invoke$arity$2 = G__14459__2;
return G__14459;
})()
;})(G__14447_14456,G__14448_14457))
;
goog.object.set(G__14447_14456,G__14448_14457,G__14449_14458);

goog.object.set(clojure.core.matrix.protocols.PMatrixDivideMutable,"object",true);

var G__14450_14460 = clojure.core.matrix.protocols.element_divide_BANG_;
var G__14451_14461 = "object";
var G__14452_14462 = ((function (G__14450_14460,G__14451_14461){
return (function() {
var G__14463 = null;
var G__14463__1 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,cljs.core._SLASH_);
});
var G__14463__2 = (function (m,a){
var vec__14453 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14453,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14453,(1),null);
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core._SLASH_,a__$1);
});
G__14463 = function(m,a){
switch(arguments.length){
case 1:
return G__14463__1.call(this,m);
case 2:
return G__14463__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14463.cljs$core$IFn$_invoke$arity$1 = G__14463__1;
G__14463.cljs$core$IFn$_invoke$arity$2 = G__14463__2;
return G__14463;
})()
;})(G__14450_14460,G__14451_14461))
;
goog.object.set(G__14450_14460,G__14451_14461,G__14452_14462);
goog.object.set(clojure.core.matrix.protocols.PSummable,"number",true);

var G__14464_14470 = clojure.core.matrix.protocols.element_sum;
var G__14465_14471 = "number";
var G__14466_14472 = ((function (G__14464_14470,G__14465_14471){
return (function (a){
return a;
});})(G__14464_14470,G__14465_14471))
;
goog.object.set(G__14464_14470,G__14465_14471,G__14466_14472);

goog.object.set(clojure.core.matrix.protocols.PSummable,"object",true);

var G__14467_14473 = clojure.core.matrix.protocols.element_sum;
var G__14468_14474 = "object";
var G__14469_14475 = ((function (G__14467_14473,G__14468_14474){
return (function (a){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$2(a,(cljs.core.truth_(clojure.core.matrix.protocols.numerical_QMARK_(a))?cljs.core._PLUS_:clojure.core.matrix.protocols.matrix_add));
});})(G__14467_14473,G__14468_14474))
;
goog.object.set(G__14467_14473,G__14468_14474,G__14469_14475);
goog.object.set(clojure.core.matrix.protocols.PElementMinMax,"number",true);

var G__14477_14495 = clojure.core.matrix.protocols.element_min;
var G__14478_14496 = "number";
var G__14479_14497 = ((function (G__14477_14495,G__14478_14496){
return (function (m){
return m;
});})(G__14477_14495,G__14478_14496))
;
goog.object.set(G__14477_14495,G__14478_14496,G__14479_14497);

var G__14480_14498 = clojure.core.matrix.protocols.element_max;
var G__14481_14499 = "number";
var G__14482_14500 = ((function (G__14480_14498,G__14481_14499){
return (function (m){
return m;
});})(G__14480_14498,G__14481_14499))
;
goog.object.set(G__14480_14498,G__14481_14499,G__14482_14500);

var G__14483_14501 = clojure.core.matrix.protocols.element_clamp;
var G__14484_14502 = "number";
var G__14485_14503 = ((function (G__14483_14501,G__14484_14502){
return (function (m,a,b){
if((!((a <= b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["min argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," should be <= max argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
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
});})(G__14483_14501,G__14484_14502))
;
goog.object.set(G__14483_14501,G__14484_14502,G__14485_14503);

goog.object.set(clojure.core.matrix.protocols.PElementMinMax,"object",true);

var G__14486_14504 = clojure.core.matrix.protocols.element_min;
var G__14487_14505 = "object";
var G__14488_14506 = ((function (G__14486_14504,G__14487_14505){
return (function (m){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3(m,((function (G__14486_14504,G__14487_14505){
return (function (best,v){
if(((cljs.core.not(best)) || ((v < best)))){
return v;
} else {
return best;
}
});})(G__14486_14504,G__14487_14505))
,null);
});})(G__14486_14504,G__14487_14505))
;
goog.object.set(G__14486_14504,G__14487_14505,G__14488_14506);

var G__14489_14507 = clojure.core.matrix.protocols.element_max;
var G__14490_14508 = "object";
var G__14491_14509 = ((function (G__14489_14507,G__14490_14508){
return (function (m){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$3(m,((function (G__14489_14507,G__14490_14508){
return (function (best,v){
if(((cljs.core.not(best)) || ((v > best)))){
return v;
} else {
return best;
}
});})(G__14489_14507,G__14490_14508))
,null);
});})(G__14489_14507,G__14490_14508))
;
goog.object.set(G__14489_14507,G__14490_14508,G__14491_14509);

var G__14492_14510 = clojure.core.matrix.protocols.element_clamp;
var G__14493_14511 = "object";
var G__14494_14512 = ((function (G__14492_14510,G__14493_14511){
return (function (m,a,b){
if((!((a <= b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["min argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)," should be <= max argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__14492_14510,G__14493_14511){
return (function (p1__14476_SHARP_){
if((p1__14476_SHARP_ < a)){
return a;
} else {
if((p1__14476_SHARP_ > b)){
return b;
} else {
return p1__14476_SHARP_;
}
}
});})(G__14492_14510,G__14493_14511))
);
}
});})(G__14492_14510,G__14493_14511))
;
goog.object.set(G__14492_14510,G__14493_14511,G__14494_14512);
goog.object.set(clojure.core.matrix.protocols.PCompare,"number",true);

var G__14540_14591 = clojure.core.matrix.protocols.element_compare;
var G__14541_14592 = "number";
var G__14542_14593 = ((function (G__14540_14591,G__14541_14592){
return (function (a,b){
if(typeof b === 'number'){
return cljs.core.long$(clojure.core.matrix.impl.mathsops.signum((a - b)));
} else {
return clojure.core.matrix.protocols.signum(clojure.core.matrix.protocols.matrix_sub(a,b));
}
});})(G__14540_14591,G__14541_14592))
;
goog.object.set(G__14540_14591,G__14541_14592,G__14542_14593);

var G__14543_14594 = clojure.core.matrix.protocols.element_if;
var G__14544_14595 = "number";
var G__14545_14596 = ((function (G__14543_14594,G__14544_14595){
return (function (m,a,b){
var vec__14546 = clojure.core.matrix.protocols.broadcast_same_shape(a,b);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14546,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14546,(1),null);
if((m > (0))){
return a__$1;
} else {
return b__$1;
}
});})(G__14543_14594,G__14544_14595))
;
goog.object.set(G__14543_14594,G__14544_14595,G__14545_14596);

var G__14549_14597 = clojure.core.matrix.protocols.element_lt;
var G__14550_14598 = "number";
var G__14551_14599 = ((function (G__14549_14597,G__14550_14598){
return (function (m,a){
if(typeof a === 'number'){
if((m < a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_gt(a,m);
}
});})(G__14549_14597,G__14550_14598))
;
goog.object.set(G__14549_14597,G__14550_14598,G__14551_14599);

var G__14552_14600 = clojure.core.matrix.protocols.element_le;
var G__14553_14601 = "number";
var G__14554_14602 = ((function (G__14552_14600,G__14553_14601){
return (function (m,a){
if(typeof a === 'number'){
if((m <= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ge(a,m);
}
});})(G__14552_14600,G__14553_14601))
;
goog.object.set(G__14552_14600,G__14553_14601,G__14554_14602);

var G__14555_14603 = clojure.core.matrix.protocols.element_gt;
var G__14556_14604 = "number";
var G__14557_14605 = ((function (G__14555_14603,G__14556_14604){
return (function (m,a){
if(typeof a === 'number'){
if((m > a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_lt(a,m);
}
});})(G__14555_14603,G__14556_14604))
;
goog.object.set(G__14555_14603,G__14556_14604,G__14557_14605);

var G__14558_14606 = clojure.core.matrix.protocols.element_ge;
var G__14559_14607 = "number";
var G__14560_14608 = ((function (G__14558_14606,G__14559_14607){
return (function (m,a){
if(typeof a === 'number'){
if((m >= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_le(a,m);
}
});})(G__14558_14606,G__14559_14607))
;
goog.object.set(G__14558_14606,G__14559_14607,G__14560_14608);

var G__14561_14609 = clojure.core.matrix.protocols.element_ne;
var G__14562_14610 = "number";
var G__14563_14611 = ((function (G__14561_14609,G__14562_14610){
return (function (m,a){
if(typeof a === 'number'){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ne(a,m);
}
});})(G__14561_14609,G__14562_14610))
;
goog.object.set(G__14561_14609,G__14562_14610,G__14563_14611);

var G__14564_14612 = clojure.core.matrix.protocols.element_eq;
var G__14565_14613 = "number";
var G__14566_14614 = ((function (G__14564_14612,G__14565_14613){
return (function (m,a){
if(typeof a === 'number'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_eq(a,m);
}
});})(G__14564_14612,G__14565_14613))
;
goog.object.set(G__14564_14612,G__14565_14613,G__14566_14614);

goog.object.set(clojure.core.matrix.protocols.PCompare,"object",true);

var G__14567_14615 = clojure.core.matrix.protocols.element_compare;
var G__14568_14616 = "object";
var G__14569_14617 = ((function (G__14567_14615,G__14568_14616){
return (function (a,b){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.matrix_sub(a,b),((function (G__14567_14615,G__14568_14616){
return (function (p1__14513_SHARP_){
return cljs.core.long$(clojure.core.matrix.impl.mathsops.signum(p1__14513_SHARP_));
});})(G__14567_14615,G__14568_14616))
);
});})(G__14567_14615,G__14568_14616))
;
goog.object.set(G__14567_14615,G__14568_14616,G__14569_14617);

var G__14570_14618 = clojure.core.matrix.protocols.element_if;
var G__14571_14619 = "object";
var G__14572_14620 = ((function (G__14570_14618,G__14571_14619){
return (function (m,a,b){
if(((typeof a === 'number') && (typeof b === 'number'))){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__14570_14618,G__14571_14619){
return (function (p1__14514_SHARP_){
if((p1__14514_SHARP_ > (0))){
return a;
} else {
return b;
}
});})(G__14570_14618,G__14571_14619))
);
} else {
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,((function (G__14570_14618,G__14571_14619){
return (function (p1__14515_SHARP_,p2__14516_SHARP_){
if((p1__14515_SHARP_ > (0))){
return a;
} else {
return p2__14516_SHARP_;
}
});})(G__14570_14618,G__14571_14619))
,b);
} else {
if(typeof b === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,((function (G__14570_14618,G__14571_14619){
return (function (p1__14517_SHARP_,p2__14518_SHARP_){
if((p1__14517_SHARP_ > (0))){
return p2__14518_SHARP_;
} else {
return b;
}
});})(G__14570_14618,G__14571_14619))
,a);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(m,((function (G__14570_14618,G__14571_14619){
return (function (p1__14519_SHARP_,p2__14520_SHARP_,p3__14521_SHARP_){
if((p1__14519_SHARP_ > (0))){
return p2__14520_SHARP_;
} else {
return p3__14521_SHARP_;
}
});})(G__14570_14618,G__14571_14619))
,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null));

}
}
}
});})(G__14570_14618,G__14571_14619))
;
goog.object.set(G__14570_14618,G__14571_14619,G__14572_14620);

var G__14573_14621 = clojure.core.matrix.protocols.element_lt;
var G__14574_14622 = "object";
var G__14575_14623 = ((function (G__14573_14621,G__14574_14622){
return (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__14573_14621,G__14574_14622){
return (function (p1__14522_SHARP_){
if((p1__14522_SHARP_ < a)){
return (1);
} else {
return (0);
}
});})(G__14573_14621,G__14574_14622))
);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,((function (G__14573_14621,G__14574_14622){
return (function (p1__14523_SHARP_,p2__14524_SHARP_){
if((p1__14523_SHARP_ < p2__14524_SHARP_)){
return (1);
} else {
return (0);
}
});})(G__14573_14621,G__14574_14622))
,a);
}
});})(G__14573_14621,G__14574_14622))
;
goog.object.set(G__14573_14621,G__14574_14622,G__14575_14623);

var G__14576_14624 = clojure.core.matrix.protocols.element_le;
var G__14577_14625 = "object";
var G__14578_14626 = ((function (G__14576_14624,G__14577_14625){
return (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__14576_14624,G__14577_14625){
return (function (p1__14525_SHARP_){
if((p1__14525_SHARP_ <= a)){
return (1);
} else {
return (0);
}
});})(G__14576_14624,G__14577_14625))
);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,((function (G__14576_14624,G__14577_14625){
return (function (p1__14526_SHARP_,p2__14527_SHARP_){
if((p1__14526_SHARP_ <= p2__14527_SHARP_)){
return (1);
} else {
return (0);
}
});})(G__14576_14624,G__14577_14625))
,a);
}
});})(G__14576_14624,G__14577_14625))
;
goog.object.set(G__14576_14624,G__14577_14625,G__14578_14626);

var G__14579_14627 = clojure.core.matrix.protocols.element_gt;
var G__14580_14628 = "object";
var G__14581_14629 = ((function (G__14579_14627,G__14580_14628){
return (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__14579_14627,G__14580_14628){
return (function (p1__14528_SHARP_){
if((p1__14528_SHARP_ > a)){
return (1);
} else {
return (0);
}
});})(G__14579_14627,G__14580_14628))
);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,((function (G__14579_14627,G__14580_14628){
return (function (p1__14529_SHARP_,p2__14530_SHARP_){
if((p1__14529_SHARP_ > p2__14530_SHARP_)){
return (1);
} else {
return (0);
}
});})(G__14579_14627,G__14580_14628))
,a);
}
});})(G__14579_14627,G__14580_14628))
;
goog.object.set(G__14579_14627,G__14580_14628,G__14581_14629);

var G__14582_14630 = clojure.core.matrix.protocols.element_ge;
var G__14583_14631 = "object";
var G__14584_14632 = ((function (G__14582_14630,G__14583_14631){
return (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__14582_14630,G__14583_14631){
return (function (p1__14531_SHARP_){
if((p1__14531_SHARP_ >= a)){
return (1);
} else {
return (0);
}
});})(G__14582_14630,G__14583_14631))
);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,((function (G__14582_14630,G__14583_14631){
return (function (p1__14532_SHARP_,p2__14533_SHARP_){
if((p1__14532_SHARP_ >= p2__14533_SHARP_)){
return (1);
} else {
return (0);
}
});})(G__14582_14630,G__14583_14631))
,a);
}
});})(G__14582_14630,G__14583_14631))
;
goog.object.set(G__14582_14630,G__14583_14631,G__14584_14632);

var G__14585_14633 = clojure.core.matrix.protocols.element_ne;
var G__14586_14634 = "object";
var G__14587_14635 = ((function (G__14585_14633,G__14586_14634){
return (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__14585_14633,G__14586_14634){
return (function (p1__14534_SHARP_){
if((!((p1__14534_SHARP_ === a)))){
return (1);
} else {
return (0);
}
});})(G__14585_14633,G__14586_14634))
);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,((function (G__14585_14633,G__14586_14634){
return (function (p1__14535_SHARP_,p2__14536_SHARP_){
if((!((p1__14535_SHARP_ === p2__14536_SHARP_)))){
return (1);
} else {
return (0);
}
});})(G__14585_14633,G__14586_14634))
,a);
}
});})(G__14585_14633,G__14586_14634))
;
goog.object.set(G__14585_14633,G__14586_14634,G__14587_14635);

var G__14588_14636 = clojure.core.matrix.protocols.element_eq;
var G__14589_14637 = "object";
var G__14590_14638 = ((function (G__14588_14636,G__14589_14637){
return (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__14588_14636,G__14589_14637){
return (function (p1__14537_SHARP_){
if((p1__14537_SHARP_ === a)){
return (1);
} else {
return (0);
}
});})(G__14588_14636,G__14589_14637))
);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,((function (G__14588_14636,G__14589_14637){
return (function (p1__14538_SHARP_,p2__14539_SHARP_){
if((p1__14538_SHARP_ === p2__14539_SHARP_)){
return (1);
} else {
return (0);
}
});})(G__14588_14636,G__14589_14637))
,a);
}
});})(G__14588_14636,G__14589_14637))
;
goog.object.set(G__14588_14636,G__14589_14637,G__14590_14638);
goog.object.set(clojure.core.matrix.protocols.PAddProduct,"number",true);

var G__14639_14645 = clojure.core.matrix.protocols.add_product;
var G__14640_14646 = "number";
var G__14641_14647 = ((function (G__14639_14645,G__14640_14646){
return (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add(clojure.core.matrix.protocols.element_multiply(a,b),m);
});})(G__14639_14645,G__14640_14646))
;
goog.object.set(G__14639_14645,G__14640_14646,G__14641_14647);

goog.object.set(clojure.core.matrix.protocols.PAddProduct,"object",true);

var G__14642_14648 = clojure.core.matrix.protocols.add_product;
var G__14643_14649 = "object";
var G__14644_14650 = ((function (G__14642_14648,G__14643_14649){
return (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add(m,clojure.core.matrix.protocols.element_multiply(a,b));
});})(G__14642_14648,G__14643_14649))
;
goog.object.set(G__14642_14648,G__14643_14649,G__14644_14650);
goog.object.set(clojure.core.matrix.protocols.PAddProductMutable,"number",true);

var G__14651_14657 = clojure.core.matrix.protocols.add_product_BANG_;
var G__14652_14658 = "number";
var G__14653_14659 = ((function (G__14651_14657,G__14652_14658){
return (function (m,a,b){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
});})(G__14651_14657,G__14652_14658))
;
goog.object.set(G__14651_14657,G__14652_14658,G__14653_14659);

goog.object.set(clojure.core.matrix.protocols.PAddProductMutable,"object",true);

var G__14654_14660 = clojure.core.matrix.protocols.add_product_BANG_;
var G__14655_14661 = "object";
var G__14656_14662 = ((function (G__14654_14660,G__14655_14661){
return (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.element_multiply(a,b));
});})(G__14654_14660,G__14655_14661))
;
goog.object.set(G__14654_14660,G__14655_14661,G__14656_14662);
goog.object.set(clojure.core.matrix.protocols.PAddScaled,"number",true);

var G__14663_14669 = clojure.core.matrix.protocols.add_scaled;
var G__14664_14670 = "number";
var G__14665_14671 = ((function (G__14663_14669,G__14664_14670){
return (function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add(clojure.core.matrix.protocols.scale(a,factor),m);
});})(G__14663_14669,G__14664_14670))
;
goog.object.set(G__14663_14669,G__14664_14670,G__14665_14671);

goog.object.set(clojure.core.matrix.protocols.PAddScaled,"object",true);

var G__14666_14672 = clojure.core.matrix.protocols.add_scaled;
var G__14667_14673 = "object";
var G__14668_14674 = ((function (G__14666_14672,G__14667_14673){
return (function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add(m,clojure.core.matrix.protocols.scale(a,factor));
});})(G__14666_14672,G__14667_14673))
;
goog.object.set(G__14666_14672,G__14667_14673,G__14668_14674);
goog.object.set(clojure.core.matrix.protocols.PAddScaledMutable,"number",true);

var G__14675_14681 = clojure.core.matrix.protocols.add_scaled_BANG_;
var G__14676_14682 = "number";
var G__14677_14683 = ((function (G__14675_14681,G__14676_14682){
return (function (m,a,factor){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
});})(G__14675_14681,G__14676_14682))
;
goog.object.set(G__14675_14681,G__14676_14682,G__14677_14683);

goog.object.set(clojure.core.matrix.protocols.PAddScaledMutable,"object",true);

var G__14678_14684 = clojure.core.matrix.protocols.add_scaled_BANG_;
var G__14679_14685 = "object";
var G__14680_14686 = ((function (G__14678_14684,G__14679_14685){
return (function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.scale(a,factor));
});})(G__14678_14684,G__14679_14685))
;
goog.object.set(G__14678_14684,G__14679_14685,G__14680_14686);
goog.object.set(clojure.core.matrix.protocols.PAddScaledProduct,"number",true);

var G__14687_14693 = clojure.core.matrix.protocols.add_scaled_product;
var G__14688_14694 = "number";
var G__14689_14695 = ((function (G__14687_14693,G__14688_14694){
return (function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add(clojure.core.matrix.protocols.scale(clojure.core.matrix.protocols.element_multiply(a,b),factor),m);
});})(G__14687_14693,G__14688_14694))
;
goog.object.set(G__14687_14693,G__14688_14694,G__14689_14695);

goog.object.set(clojure.core.matrix.protocols.PAddScaledProduct,"object",true);

var G__14690_14696 = clojure.core.matrix.protocols.add_scaled_product;
var G__14691_14697 = "object";
var G__14692_14698 = ((function (G__14690_14696,G__14691_14697){
return (function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add(m,clojure.core.matrix.protocols.scale(clojure.core.matrix.protocols.element_multiply(a,b),factor));
});})(G__14690_14696,G__14691_14697))
;
goog.object.set(G__14690_14696,G__14691_14697,G__14692_14698);
goog.object.set(clojure.core.matrix.protocols.PAddScaledProductMutable,"number",true);

var G__14699_14705 = clojure.core.matrix.protocols.add_scaled_product_BANG_;
var G__14700_14706 = "number";
var G__14701_14707 = ((function (G__14699_14705,G__14700_14706){
return (function (m,a,b,factor){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Numbers are not mutable",cljs.core.PersistentArrayMap.EMPTY);
});})(G__14699_14705,G__14700_14706))
;
goog.object.set(G__14699_14705,G__14700_14706,G__14701_14707);

goog.object.set(clojure.core.matrix.protocols.PAddScaledProductMutable,"object",true);

var G__14702_14708 = clojure.core.matrix.protocols.add_scaled_product_BANG_;
var G__14703_14709 = "object";
var G__14704_14710 = ((function (G__14702_14708,G__14703_14709){
return (function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.scale(clojure.core.matrix.protocols.element_multiply(a,b),factor));
});})(G__14702_14708,G__14703_14709))
;
goog.object.set(G__14702_14708,G__14703_14709,G__14704_14710);
goog.object.set(clojure.core.matrix.protocols.PScaleAdd,"object",true);

var G__14711_14714 = clojure.core.matrix.protocols.scale_add_BANG_;
var G__14712_14715 = "object";
var G__14713_14716 = ((function (G__14711_14714,G__14712_14715){
return (function (m1,a,m2,b,constant){
clojure.core.matrix.protocols.element_multiply_BANG_(m1,a);

if(((typeof b === 'number') && ((b === (0))))){
} else {
clojure.core.matrix.protocols.add_product_BANG_(m1,m2,b);
}

if(((typeof constant === 'number') && ((constant === (0))))){
} else {
clojure.core.matrix.protocols.matrix_add_BANG_(m1,constant);
}

return m1;
});})(G__14711_14714,G__14712_14715))
;
goog.object.set(G__14711_14714,G__14712_14715,G__14713_14716);
goog.object.set(clojure.core.matrix.protocols.PScaleAdd2,"object",true);

var G__14717_14720 = clojure.core.matrix.protocols.scale_add;
var G__14718_14721 = "object";
var G__14719_14722 = ((function (G__14717_14720,G__14718_14721){
return (function (m1,a,m2,b,constant){
var r = clojure.core.matrix.protocols.matrix_add(clojure.core.matrix.protocols.scale(m1,a),clojure.core.matrix.protocols.scale(m2,b));
if((0.0 === constant)){
return r;
} else {
return clojure.core.matrix.protocols.matrix_add(r,constant);
}
});})(G__14717_14720,G__14718_14721))
;
goog.object.set(G__14717_14720,G__14718_14721,G__14719_14722);
goog.object.set(clojure.core.matrix.protocols.PLerp,"object",true);

var G__14723_14729 = clojure.core.matrix.protocols.lerp;
var G__14724_14730 = "object";
var G__14725_14731 = ((function (G__14723_14729,G__14724_14730){
return (function (a,b,factor){
return clojure.core.matrix.protocols.scale_add(a,(1.0 - factor),b,factor,0.0);
});})(G__14723_14729,G__14724_14730))
;
goog.object.set(G__14723_14729,G__14724_14730,G__14725_14731);

var G__14726_14732 = clojure.core.matrix.protocols.lerp_BANG_;
var G__14727_14733 = "object";
var G__14728_14734 = ((function (G__14726_14732,G__14727_14733){
return (function (a,b,factor){
return clojure.core.matrix.protocols.scale_add_BANG_(a,(1.0 - factor),b,factor,0.0);
});})(G__14726_14732,G__14727_14733))
;
goog.object.set(G__14726_14732,G__14727_14733,G__14728_14734);
goog.object.set(clojure.core.matrix.protocols.PAddInnerProductMutable,"object",true);

var G__14735_14738 = clojure.core.matrix.protocols.add_inner_product_BANG_;
var G__14736_14739 = "object";
var G__14737_14740 = ((function (G__14735_14738,G__14736_14739){
return (function() {
var G__14741 = null;
var G__14741__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.inner_product(a,b));
});
var G__14741__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_(m,clojure.core.matrix.protocols.inner_product(a,b),factor);
});
G__14741 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__14741__3.call(this,m,a,b);
case 4:
return G__14741__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14741.cljs$core$IFn$_invoke$arity$3 = G__14741__3;
G__14741.cljs$core$IFn$_invoke$arity$4 = G__14741__4;
return G__14741;
})()
;})(G__14735_14738,G__14736_14739))
;
goog.object.set(G__14735_14738,G__14736_14739,G__14737_14740);
goog.object.set(clojure.core.matrix.protocols.PAddOuterProductMutable,"object",true);

var G__14742_14745 = clojure.core.matrix.protocols.add_outer_product_BANG_;
var G__14743_14746 = "object";
var G__14744_14747 = ((function (G__14742_14745,G__14743_14746){
return (function() {
var G__14748 = null;
var G__14748__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_(m,clojure.core.matrix.protocols.outer_product(a,b));
});
var G__14748__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_(m,clojure.core.matrix.protocols.outer_product(a,b),factor);
});
G__14748 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__14748__3.call(this,m,a,b);
case 4:
return G__14748__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14748.cljs$core$IFn$_invoke$arity$3 = G__14748__3;
G__14748.cljs$core$IFn$_invoke$arity$4 = G__14748__4;
return G__14748;
})()
;})(G__14742_14745,G__14743_14746))
;
goog.object.set(G__14742_14745,G__14743_14746,G__14744_14747);
goog.object.set(clojure.core.matrix.protocols.PSetInnerProductMutable,"object",true);

var G__14749_14752 = clojure.core.matrix.protocols.set_inner_product_BANG_;
var G__14750_14753 = "object";
var G__14751_14754 = ((function (G__14749_14752,G__14750_14753){
return (function() {
var G__14755 = null;
var G__14755__3 = (function (m,a,b){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.inner_product(a,b));
});
var G__14755__4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.inner_product(a,b));

return clojure.core.matrix.protocols.scale_BANG_(m,factor);
});
G__14755 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__14755__3.call(this,m,a,b);
case 4:
return G__14755__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__14755.cljs$core$IFn$_invoke$arity$3 = G__14755__3;
G__14755.cljs$core$IFn$_invoke$arity$4 = G__14755__4;
return G__14755;
})()
;})(G__14749_14752,G__14750_14753))
;
goog.object.set(G__14749_14752,G__14750_14753,G__14751_14754);
goog.object.set(clojure.core.matrix.protocols.PTypeInfo,"null",true);

var G__14756_14762 = clojure.core.matrix.protocols.element_type;
var G__14757_14763 = "null";
var G__14758_14764 = ((function (G__14756_14762,G__14757_14763){
return (function (a){
return Object;
});})(G__14756_14762,G__14757_14763))
;
goog.object.set(G__14756_14762,G__14757_14763,G__14758_14764);

goog.object.set(clojure.core.matrix.protocols.PTypeInfo,"object",true);

var G__14759_14765 = clojure.core.matrix.protocols.element_type;
var G__14760_14766 = "object";
var G__14761_14767 = ((function (G__14759_14765,G__14760_14766){
return (function (a){
if((Array === a.constructor)){
return cljs.core.type(a).getComponentType();
} else {
return Object;
}
});})(G__14759_14765,G__14760_14766))
;
goog.object.set(G__14759_14765,G__14760_14766,G__14761_14767);
goog.object.set(clojure.core.matrix.protocols.PGenericValues,"object",true);

var G__14768_14777 = clojure.core.matrix.protocols.generic_zero;
var G__14769_14778 = "object";
var G__14770_14779 = ((function (G__14768_14777,G__14769_14778){
return (function (m){
return (0);
});})(G__14768_14777,G__14769_14778))
;
goog.object.set(G__14768_14777,G__14769_14778,G__14770_14779);

var G__14771_14780 = clojure.core.matrix.protocols.generic_one;
var G__14772_14781 = "object";
var G__14773_14782 = ((function (G__14771_14780,G__14772_14781){
return (function (m){
return (1);
});})(G__14771_14780,G__14772_14781))
;
goog.object.set(G__14771_14780,G__14772_14781,G__14773_14782);

var G__14774_14783 = clojure.core.matrix.protocols.generic_value;
var G__14775_14784 = "object";
var G__14776_14785 = ((function (G__14774_14783,G__14775_14784){
return (function (m){
return (0);
});})(G__14774_14783,G__14775_14784))
;
goog.object.set(G__14774_14783,G__14775_14784,G__14776_14785);
cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_(m__$1)){
return clojure.core.matrix.protocols.matrix_multiply(m__$1,a);
} else {
return (m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(a) : m__$1.call(null,a));
}
});

cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_(m__$1)){
return clojure.core.matrix.protocols.assign_BANG_(a,clojure.core.matrix.protocols.matrix_multiply(m__$1,a));
} else {
return clojure.core.matrix.protocols.assign_BANG_(a,(m__$1.cljs$core$IFn$_invoke$arity$1 ? m__$1.cljs$core$IFn$_invoke$arity$1(a) : m__$1.call(null,a)));
}
});

goog.object.set(clojure.core.matrix.protocols.PVectorTransform,"object",true);

var G__14786_14792 = clojure.core.matrix.protocols.vector_transform;
var G__14787_14793 = "object";
var G__14788_14794 = ((function (G__14786_14792,G__14787_14793){
return (function (m,a){
if(((2) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
return clojure.core.matrix.protocols.matrix_multiply(m,a);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to transform using: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
});})(G__14786_14792,G__14787_14793))
;
goog.object.set(G__14786_14792,G__14787_14793,G__14788_14794);

var G__14789_14795 = clojure.core.matrix.protocols.vector_transform_BANG_;
var G__14790_14796 = "object";
var G__14791_14797 = ((function (G__14789_14795,G__14790_14796){
return (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(a,clojure.core.matrix.protocols.vector_transform(m,a));
});})(G__14789_14795,G__14790_14796))
;
goog.object.set(G__14789_14795,G__14790_14796,G__14791_14797);
goog.object.set(clojure.core.matrix.protocols.PMatrixScaling,"number",true);

var G__14799_14811 = clojure.core.matrix.protocols.scale;
var G__14800_14812 = "number";
var G__14801_14813 = ((function (G__14799_14811,G__14800_14812){
return (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale(a,m);
}
});})(G__14799_14811,G__14800_14812))
;
goog.object.set(G__14799_14811,G__14800_14812,G__14801_14813);

var G__14802_14814 = clojure.core.matrix.protocols.pre_scale;
var G__14803_14815 = "number";
var G__14804_14816 = ((function (G__14802_14814,G__14803_14815){
return (function (m,a){
if(typeof a === 'number'){
return (a * m);
} else {
return clojure.core.matrix.protocols.scale(a,m);
}
});})(G__14802_14814,G__14803_14815))
;
goog.object.set(G__14802_14814,G__14803_14815,G__14804_14816);

goog.object.set(clojure.core.matrix.protocols.PMatrixScaling,"object",true);

var G__14805_14817 = clojure.core.matrix.protocols.scale;
var G__14806_14818 = "object";
var G__14807_14819 = ((function (G__14805_14817,G__14806_14818){
return (function (m,a){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__14805_14817,G__14806_14818){
return (function (p1__14798_SHARP_){
return (p1__14798_SHARP_ * a);
});})(G__14805_14817,G__14806_14818))
);
});})(G__14805_14817,G__14806_14818))
;
goog.object.set(G__14805_14817,G__14806_14818,G__14807_14819);

var G__14808_14820 = clojure.core.matrix.protocols.pre_scale;
var G__14809_14821 = "object";
var G__14810_14822 = ((function (G__14808_14820,G__14809_14821){
return (function (m,a){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,a));
});})(G__14808_14820,G__14809_14821))
;
goog.object.set(G__14808_14820,G__14809_14821,G__14810_14822);
goog.object.set(clojure.core.matrix.protocols.PMatrixMutableScaling,"number",true);

var G__14824_14836 = clojure.core.matrix.protocols.scale_BANG_;
var G__14825_14837 = "number";
var G__14826_14838 = ((function (G__14824_14836,G__14825_14837){
return (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't scale! a numeric value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});})(G__14824_14836,G__14825_14837))
;
goog.object.set(G__14824_14836,G__14825_14837,G__14826_14838);

var G__14827_14839 = clojure.core.matrix.protocols.pre_scale_BANG_;
var G__14828_14840 = "number";
var G__14829_14841 = ((function (G__14827_14839,G__14828_14840){
return (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't pre-scale! a numeric value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});})(G__14827_14839,G__14828_14840))
;
goog.object.set(G__14827_14839,G__14828_14840,G__14829_14841);

goog.object.set(clojure.core.matrix.protocols.PMatrixMutableScaling,"object",true);

var G__14830_14842 = clojure.core.matrix.protocols.scale_BANG_;
var G__14831_14843 = "object";
var G__14832_14844 = ((function (G__14830_14842,G__14831_14843){
return (function (m,a){
clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__14830_14842,G__14831_14843){
return (function (p1__14823_SHARP_){
return (p1__14823_SHARP_ * a);
});})(G__14830_14842,G__14831_14843))
);

return m;
});})(G__14830_14842,G__14831_14843))
;
goog.object.set(G__14830_14842,G__14831_14843,G__14832_14844);

var G__14833_14845 = clojure.core.matrix.protocols.pre_scale_BANG_;
var G__14834_14846 = "object";
var G__14835_14847 = ((function (G__14833_14845,G__14834_14846){
return (function (m,a){
clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,a));

return m;
});})(G__14833_14845,G__14834_14846))
;
goog.object.set(G__14833_14845,G__14834_14846,G__14835_14847);
goog.object.set(clojure.core.matrix.protocols.PMatrixAdd,"number",true);

var G__14848_14866 = clojure.core.matrix.protocols.matrix_add;
var G__14849_14867 = "number";
var G__14850_14868 = ((function (G__14848_14866,G__14849_14867){
return (function (m,a){
if(typeof a === 'number'){
return (m + a);
} else {
return clojure.core.matrix.protocols.matrix_add(a,m);
}
});})(G__14848_14866,G__14849_14867))
;
goog.object.set(G__14848_14866,G__14849_14867,G__14850_14868);

var G__14851_14869 = clojure.core.matrix.protocols.matrix_sub;
var G__14852_14870 = "number";
var G__14853_14871 = ((function (G__14851_14869,G__14852_14870){
return (function (m,a){
if(typeof a === 'number'){
return (m - a);
} else {
return clojure.core.matrix.protocols.negate(clojure.core.matrix.protocols.matrix_sub(a,m));
}
});})(G__14851_14869,G__14852_14870))
;
goog.object.set(G__14851_14869,G__14852_14870,G__14853_14871);

goog.object.set(clojure.core.matrix.protocols.PMatrixAdd,"object",true);

var G__14854_14872 = clojure.core.matrix.protocols.matrix_add;
var G__14855_14873 = "object";
var G__14856_14874 = ((function (G__14854_14872,G__14855_14873){
return (function (m,a){
var vec__14857 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14857,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14857,(1),null);
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core._PLUS_,a__$1);
});})(G__14854_14872,G__14855_14873))
;
goog.object.set(G__14854_14872,G__14855_14873,G__14856_14874);

var G__14860_14875 = clojure.core.matrix.protocols.matrix_sub;
var G__14861_14876 = "object";
var G__14862_14877 = ((function (G__14860_14875,G__14861_14876){
return (function (m,a){
var vec__14863 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14863,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14863,(1),null);
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core._,a__$1);
});})(G__14860_14875,G__14861_14876))
;
goog.object.set(G__14860_14875,G__14861_14876,G__14862_14877);
goog.object.set(clojure.core.matrix.protocols.PMatrixAddMutable,"number",true);

var G__14878_14890 = clojure.core.matrix.protocols.matrix_add_BANG_;
var G__14879_14891 = "number";
var G__14880_14892 = ((function (G__14878_14890,G__14879_14891){
return (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable add! on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});})(G__14878_14890,G__14879_14891))
;
goog.object.set(G__14878_14890,G__14879_14891,G__14880_14892);

var G__14881_14893 = clojure.core.matrix.protocols.matrix_sub_BANG_;
var G__14882_14894 = "number";
var G__14883_14895 = ((function (G__14881_14893,G__14882_14894){
return (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do mutable sub! on a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});})(G__14881_14893,G__14882_14894))
;
goog.object.set(G__14881_14893,G__14882_14894,G__14883_14895);

goog.object.set(clojure.core.matrix.protocols.PMatrixAddMutable,"object",true);

var G__14884_14896 = clojure.core.matrix.protocols.matrix_add_BANG_;
var G__14885_14897 = "object";
var G__14886_14898 = ((function (G__14884_14896,G__14885_14897){
return (function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core._PLUS_,a);
});})(G__14884_14896,G__14885_14897))
;
goog.object.set(G__14884_14896,G__14885_14897,G__14886_14898);

var G__14887_14899 = clojure.core.matrix.protocols.matrix_sub_BANG_;
var G__14888_14900 = "object";
var G__14889_14901 = ((function (G__14887_14899,G__14888_14900){
return (function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core._,a);
});})(G__14887_14899,G__14888_14900))
;
goog.object.set(G__14887_14899,G__14888_14900,G__14889_14901);
goog.object.set(clojure.core.matrix.protocols.PNegation,"null",true);

var G__14902_14911 = clojure.core.matrix.protocols.negate;
var G__14903_14912 = "null";
var G__14904_14913 = ((function (G__14902_14911,G__14903_14912){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't negate nil!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__14902_14911,G__14903_14912))
;
goog.object.set(G__14902_14911,G__14903_14912,G__14904_14913);

goog.object.set(clojure.core.matrix.protocols.PNegation,"number",true);

var G__14905_14914 = clojure.core.matrix.protocols.negate;
var G__14906_14915 = "number";
var G__14907_14916 = ((function (G__14905_14914,G__14906_14915){
return (function (m){
return (- m);
});})(G__14905_14914,G__14906_14915))
;
goog.object.set(G__14905_14914,G__14906_14915,G__14907_14916);

goog.object.set(clojure.core.matrix.protocols.PNegation,"object",true);

var G__14908_14917 = clojure.core.matrix.protocols.negate;
var G__14909_14918 = "object";
var G__14910_14919 = ((function (G__14908_14917,G__14909_14918){
return (function (m){
return clojure.core.matrix.protocols.scale(m,-1.0);
});})(G__14908_14917,G__14909_14918))
;
goog.object.set(G__14908_14917,G__14909_14918,G__14910_14919);
goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"null",true);

var G__14920_14929 = clojure.core.matrix.protocols.matrix_equals;
var G__14921_14930 = "null";
var G__14922_14931 = ((function (G__14920_14929,G__14921_14930){
return (function (a,b){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nil is not a valid numerical value in equality testing",cljs.core.PersistentArrayMap.EMPTY);
});})(G__14920_14929,G__14921_14930))
;
goog.object.set(G__14920_14929,G__14921_14930,G__14922_14931);

goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"number",true);

var G__14923_14932 = clojure.core.matrix.protocols.matrix_equals;
var G__14924_14933 = "number";
var G__14925_14934 = ((function (G__14923_14932,G__14924_14933){
return (function (a,b){
if(typeof b === 'number'){
return (a === b);
} else {
if(((0) === clojure.core.matrix.protocols.dimensionality(b))){
return clojure.core.matrix.protocols.matrix_equals(b,a);
} else {
return false;

}
}
});})(G__14923_14932,G__14924_14933))
;
goog.object.set(G__14923_14932,G__14924_14933,G__14925_14934);

goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"object",true);

var G__14926_14935 = clojure.core.matrix.protocols.matrix_equals;
var G__14927_14936 = "object";
var G__14928_14937 = ((function (G__14926_14935,G__14927_14936){
return (function (a,b){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_(a,b))){
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a)))){
return (clojure.core.matrix.protocols.get_0d(a) === (function (){var x__2050__auto__ = b;
if(typeof x__2050__auto__ === 'number'){
return x__2050__auto__;
} else {
return clojure.core.matrix.protocols.get_0d(x__2050__auto__);

}
})());
} else {
return cljs.core.not_any_QMARK_(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ__EQ_,clojure.core.matrix.protocols.element_seq(a),clojure.core.matrix.protocols.element_seq(b)));
}
} else {
return false;

}
}
});})(G__14926_14935,G__14927_14936))
;
goog.object.set(G__14926_14935,G__14927_14936,G__14928_14937);
goog.object.set(clojure.core.matrix.protocols.PValueEquality,"null",true);

var G__14938_14947 = clojure.core.matrix.protocols.value_equals;
var G__14939_14948 = "null";
var G__14940_14949 = ((function (G__14938_14947,G__14939_14948){
return (function (a,b){
return (((b == null)) || (((((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))) && ((clojure.core.matrix.protocols.get_0d(b) == null)))));
});})(G__14938_14947,G__14939_14948))
;
goog.object.set(G__14938_14947,G__14939_14948,G__14940_14949);

goog.object.set(clojure.core.matrix.protocols.PValueEquality,"number",true);

var G__14941_14950 = clojure.core.matrix.protocols.value_equals;
var G__14942_14951 = "number";
var G__14943_14952 = ((function (G__14941_14950,G__14942_14951){
return (function (a,b){
return ((((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))) && ((a === clojure.core.matrix.protocols.get_0d(b))));
});})(G__14941_14950,G__14942_14951))
;
goog.object.set(G__14941_14950,G__14942_14951,G__14943_14952);

goog.object.set(clojure.core.matrix.protocols.PValueEquality,"object",true);

var G__14944_14953 = clojure.core.matrix.protocols.value_equals;
var G__14945_14954 = "object";
var G__14946_14955 = ((function (G__14944_14953,G__14945_14954){
return (function (a,b){
var and__4120__auto__ = clojure.core.matrix.protocols.same_shape_QMARK_(a,b);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,clojure.core.matrix.protocols.element_seq(a),clojure.core.matrix.protocols.element_seq(b)));
} else {
return and__4120__auto__;
}
});})(G__14944_14953,G__14945_14954))
;
goog.object.set(G__14944_14953,G__14945_14954,G__14946_14955);
goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"null",true);

var G__14957_14967 = clojure.core.matrix.protocols.matrix_equals_epsilon;
var G__14958_14968 = "null";
var G__14959_14969 = ((function (G__14957_14967,G__14958_14968){
return (function (a,b,eps){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("nil is not a valid numerical value in equality testing",cljs.core.PersistentArrayMap.EMPTY);
});})(G__14957_14967,G__14958_14968))
;
goog.object.set(G__14957_14967,G__14958_14968,G__14959_14969);

goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"number",true);

var G__14960_14970 = clojure.core.matrix.protocols.matrix_equals_epsilon;
var G__14961_14971 = "number";
var G__14962_14972 = ((function (G__14960_14970,G__14961_14971){
return (function (a,b,eps){
if(typeof b === 'number'){
return (Math.abs((a - b)) <= eps);
} else {
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(b)))){
return (Math.abs((a - clojure.core.matrix.protocols.get_0d(b))) <= eps);
} else {
return false;

}
}
});})(G__14960_14970,G__14961_14971))
;
goog.object.set(G__14960_14970,G__14961_14971,G__14962_14972);

goog.object.set(clojure.core.matrix.protocols.PMatrixEqualityEpsilon,"object",true);

var G__14963_14973 = clojure.core.matrix.protocols.matrix_equals_epsilon;
var G__14964_14974 = "object";
var G__14965_14975 = ((function (G__14963_14973,G__14964_14974){
return (function (a,b,eps){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_(a,b))){
var eps__$1 = eps;
return cljs.core.every_QMARK_(((function (eps__$1,G__14963_14973,G__14964_14974){
return (function (p1__14956_SHARP_){
return ((function (){var G__14966 = p1__14956_SHARP_;
return Math.abs(G__14966);
})() <= eps__$1);
});})(eps__$1,G__14963_14973,G__14964_14974))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,clojure.core.matrix.protocols.element_seq(a),clojure.core.matrix.protocols.element_seq(b)));
} else {
return false;

}
}
});})(G__14963_14973,G__14964_14974))
;
goog.object.set(G__14963_14973,G__14964_14974,G__14965_14975);
goog.object.set(clojure.core.matrix.protocols.PDoubleArrayOutput,"number",true);

var G__14976_14988 = clojure.core.matrix.protocols.to_double_array;
var G__14977_14989 = "number";
var G__14978_14990 = ((function (G__14976_14988,G__14977_14989){
return (function (m){
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1((1));
(arr[(0)] = m);

return arr;
});})(G__14976_14988,G__14977_14989))
;
goog.object.set(G__14976_14988,G__14977_14989,G__14978_14990);

var G__14979_14991 = clojure.core.matrix.protocols.as_double_array;
var G__14980_14992 = "number";
var G__14981_14993 = ((function (G__14979_14991,G__14980_14992){
return (function (m){
return null;
});})(G__14979_14991,G__14980_14992))
;
goog.object.set(G__14979_14991,G__14980_14992,G__14981_14993);

goog.object.set(clojure.core.matrix.protocols.PDoubleArrayOutput,"object",true);

var G__14982_14994 = clojure.core.matrix.protocols.to_double_array;
var G__14983_14995 = "object";
var G__14984_14996 = ((function (G__14982_14994,G__14983_14995){
return (function (m){
return cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_seq(m));
});})(G__14982_14994,G__14983_14995))
;
goog.object.set(G__14982_14994,G__14983_14995,G__14984_14996);

var G__14985_14997 = clojure.core.matrix.protocols.as_double_array;
var G__14986_14998 = "object";
var G__14987_14999 = ((function (G__14985_14997,G__14986_14998){
return (function (m){
return null;
});})(G__14985_14997,G__14986_14998))
;
goog.object.set(G__14985_14997,G__14986_14998,G__14987_14999);
goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"null",true);

var G__15000_15018 = clojure.core.matrix.protocols.to_object_array;
var G__15001_15019 = "null";
var G__15002_15020 = ((function (G__15000_15018,G__15001_15019){
return (function (m){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
return arr;
});})(G__15000_15018,G__15001_15019))
;
goog.object.set(G__15000_15018,G__15001_15019,G__15002_15020);

var G__15003_15021 = clojure.core.matrix.protocols.as_object_array;
var G__15004_15022 = "null";
var G__15005_15023 = ((function (G__15003_15021,G__15004_15022){
return (function (m){
return null;
});})(G__15003_15021,G__15004_15022))
;
goog.object.set(G__15003_15021,G__15004_15022,G__15005_15023);

goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"number",true);

var G__15006_15024 = clojure.core.matrix.protocols.to_object_array;
var G__15007_15025 = "number";
var G__15008_15026 = ((function (G__15006_15024,G__15007_15025){
return (function (m){
var arr = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1((1));
(arr[(0)] = m);

return arr;
});})(G__15006_15024,G__15007_15025))
;
goog.object.set(G__15006_15024,G__15007_15025,G__15008_15026);

var G__15009_15027 = clojure.core.matrix.protocols.as_object_array;
var G__15010_15028 = "number";
var G__15011_15029 = ((function (G__15009_15027,G__15010_15028){
return (function (m){
return null;
});})(G__15009_15027,G__15010_15028))
;
goog.object.set(G__15009_15027,G__15010_15028,G__15011_15029);

goog.object.set(clojure.core.matrix.protocols.PObjectArrayOutput,"object",true);

var G__15012_15030 = clojure.core.matrix.protocols.to_object_array;
var G__15013_15031 = "object";
var G__15014_15032 = ((function (G__15012_15030,G__15013_15031){
return (function (m){
return cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_seq(m));
});})(G__15012_15030,G__15013_15031))
;
goog.object.set(G__15012_15030,G__15013_15031,G__15014_15032);

var G__15015_15033 = clojure.core.matrix.protocols.as_object_array;
var G__15016_15034 = "object";
var G__15017_15035 = ((function (G__15015_15033,G__15016_15034){
return (function (m){
return null;
});})(G__15015_15033,G__15016_15034))
;
goog.object.set(G__15015_15033,G__15016_15034,G__15017_15035);
goog.object.set(clojure.core.matrix.protocols.PRowOperations,"object",true);

var G__15036_15045 = clojure.core.matrix.protocols.swap_rows;
var G__15037_15046 = "object";
var G__15038_15047 = ((function (G__15036_15045,G__15037_15046){
return (function (m,i,j){
return clojure.core.matrix.protocols.swap_rows(clojure.core.matrix.protocols.convert_to_nested_vectors(m),i,j);
});})(G__15036_15045,G__15037_15046))
;
goog.object.set(G__15036_15045,G__15037_15046,G__15038_15047);

var G__15039_15048 = clojure.core.matrix.protocols.multiply_row;
var G__15040_15049 = "object";
var G__15041_15050 = ((function (G__15039_15048,G__15040_15049){
return (function (m,i,k){
return clojure.core.matrix.protocols.multiply_row(clojure.core.matrix.protocols.convert_to_nested_vectors(m),i,k);
});})(G__15039_15048,G__15040_15049))
;
goog.object.set(G__15039_15048,G__15040_15049,G__15041_15050);

var G__15042_15051 = clojure.core.matrix.protocols.add_row;
var G__15043_15052 = "object";
var G__15044_15053 = ((function (G__15042_15051,G__15043_15052){
return (function (m,i,j,k){
return clojure.core.matrix.protocols.add_row(clojure.core.matrix.protocols.convert_to_nested_vectors(m),i,j,k);
});})(G__15042_15051,G__15043_15052))
;
goog.object.set(G__15042_15051,G__15043_15052,G__15044_15053);
goog.object.set(clojure.core.matrix.protocols.PRowSetting,"object",true);

var G__15054_15060 = clojure.core.matrix.protocols.set_row;
var G__15055_15061 = "object";
var G__15056_15062 = ((function (G__15054_15060,G__15055_15061){
return (function (m,i,row){
var svec = cljs.core.vec(clojure.core.matrix.protocols.get_major_slice_seq(m));
var row__$1 = clojure.core.matrix.protocols.broadcast_like((svec.cljs$core$IFn$_invoke$arity$1 ? svec.cljs$core$IFn$_invoke$arity$1((0)) : svec.call(null,(0))),row);
return clojure.core.matrix.protocols.coerce_param(m,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(svec,i,row__$1));
});})(G__15054_15060,G__15055_15061))
;
goog.object.set(G__15054_15060,G__15055_15061,G__15056_15062);

var G__15057_15063 = clojure.core.matrix.protocols.set_row_BANG_;
var G__15058_15064 = "object";
var G__15059_15065 = ((function (G__15057_15063,G__15058_15064){
return (function (m,i,row){
var sl = clojure.core.matrix.protocols.get_major_slice_view(m,i);
var row__$1 = clojure.core.matrix.protocols.broadcast_like(sl,row);
clojure.core.matrix.protocols.assign_BANG_(sl,row__$1);

return m;
});})(G__15057_15063,G__15058_15064))
;
goog.object.set(G__15057_15063,G__15058_15064,G__15059_15065);
goog.object.set(clojure.core.matrix.protocols.PColumnSetting,"object",true);

var G__15066_15072 = clojure.core.matrix.protocols.set_column;
var G__15067_15073 = "object";
var G__15068_15074 = ((function (G__15066_15072,G__15067_15073){
return (function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column(m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like(scol,column);
var indices = cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(column__$1,(0)));
var new_m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scol,column__$1,indices,G__15066_15072,G__15067_15073){
return (function (acc,idx){
return clojure.core.matrix.protocols.set_2d(acc,idx,i,clojure.core.matrix.protocols.get_1d(column__$1,idx));
});})(scol,column__$1,indices,G__15066_15072,G__15067_15073))
,m,indices);
return clojure.core.matrix.protocols.coerce_param(m,new_m);
});})(G__15066_15072,G__15067_15073))
;
goog.object.set(G__15066_15072,G__15067_15073,G__15068_15074);

var G__15069_15075 = clojure.core.matrix.protocols.set_column_BANG_;
var G__15070_15076 = "object";
var G__15071_15077 = ((function (G__15069_15075,G__15070_15076){
return (function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column(m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like(scol,column);
var n__4607__auto__ = clojure.core.matrix.protocols.dimension_count(column__$1,(0));
var j = (0);
while(true){
if((j < n__4607__auto__)){
clojure.core.matrix.protocols.set_2d_BANG_(m,j,i,clojure.core.matrix.protocols.get_1d(column__$1,j));

var G__15078 = (j + (1));
j = G__15078;
continue;
} else {
return null;
}
break;
}
});})(G__15069_15075,G__15070_15076))
;
goog.object.set(G__15069_15075,G__15070_15076,G__15071_15077);
goog.object.set(clojure.core.matrix.protocols.PSliceMap,"object",true);

var G__15079_15082 = clojure.core.matrix.protocols.slice_map;
var G__15080_15083 = "object";
var G__15081_15084 = ((function (G__15079_15082,G__15080_15083){
return (function() {
var G__15085 = null;
var G__15085__2 = (function (m,f){
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,clojure.core.matrix.protocols.get_major_slice_seq(m)));
});
var G__15085__3 = (function (m,f,a){
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(f,clojure.core.matrix.protocols.get_major_slice_seq(m),clojure.core.matrix.protocols.get_major_slice_seq(a)));
});
var G__15085__4 = (function (m,f,a,more){
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.mapv,f,clojure.core.matrix.protocols.get_major_slice_seq(m),clojure.core.matrix.protocols.get_major_slice_seq(a),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq,more)));
});
G__15085 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__15085__2.call(this,m,f);
case 3:
return G__15085__3.call(this,m,f,a);
case 4:
return G__15085__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15085.cljs$core$IFn$_invoke$arity$2 = G__15085__2;
G__15085.cljs$core$IFn$_invoke$arity$3 = G__15085__3;
G__15085.cljs$core$IFn$_invoke$arity$4 = G__15085__4;
return G__15085;
})()
;})(G__15079_15082,G__15080_15083))
;
goog.object.set(G__15079_15082,G__15080_15083,G__15081_15084);
goog.object.set(clojure.core.matrix.protocols.PFilterSlices,"object",true);

var G__15086_15089 = clojure.core.matrix.protocols.filter_slices;
var G__15087_15090 = "object";
var G__15088_15091 = ((function (G__15086_15089,G__15087_15090){
return (function (m,f){
var slcs = cljs.core.filterv(f,clojure.core.matrix.protocols.get_major_slice_seq(m));
if(cljs.core.seq(slcs)){
return slcs;
} else {
return null;
}
});})(G__15086_15089,G__15087_15090))
;
goog.object.set(G__15086_15089,G__15087_15090,G__15088_15091);
goog.object.set(clojure.core.matrix.protocols.PAddEmap,"object",true);

var G__15092_15095 = clojure.core.matrix.protocols.add_emap_BANG_;
var G__15093_15096 = "object";
var G__15094_15097 = ((function (G__15092_15095,G__15093_15096){
return (function() {
var G__15098 = null;
var G__15098__3 = (function (dest,f,a){
return clojure.core.matrix.protocols.matrix_add_BANG_(dest,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(a,f));
});
var G__15098__4 = (function (dest,f,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_(dest,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(a,f,b));
});
var G__15098__5 = (function (dest,f,a,b,more){
return clojure.core.matrix.protocols.matrix_add_BANG_(dest,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(a,f,b,more));
});
G__15098 = function(dest,f,a,b,more){
switch(arguments.length){
case 3:
return G__15098__3.call(this,dest,f,a);
case 4:
return G__15098__4.call(this,dest,f,a,b);
case 5:
return G__15098__5.call(this,dest,f,a,b,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15098.cljs$core$IFn$_invoke$arity$3 = G__15098__3;
G__15098.cljs$core$IFn$_invoke$arity$4 = G__15098__4;
G__15098.cljs$core$IFn$_invoke$arity$5 = G__15098__5;
return G__15098;
})()
;})(G__15092_15095,G__15093_15096))
;
goog.object.set(G__15092_15095,G__15093_15096,G__15094_15097);
goog.object.set(clojure.core.matrix.protocols.PSetEmap,"object",true);

var G__15099_15102 = clojure.core.matrix.protocols.set_emap_BANG_;
var G__15100_15103 = "object";
var G__15101_15104 = ((function (G__15099_15102,G__15100_15103){
return (function() {
var G__15105 = null;
var G__15105__3 = (function (dest,f,a){
return clojure.core.matrix.protocols.assign_BANG_(dest,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(a,f));
});
var G__15105__4 = (function (dest,f,a,b){
return clojure.core.matrix.protocols.assign_BANG_(dest,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(a,f,b));
});
var G__15105__5 = (function (dest,f,a,b,more){
return clojure.core.matrix.protocols.assign_BANG_(dest,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(a,f,b,more));
});
G__15105 = function(dest,f,a,b,more){
switch(arguments.length){
case 3:
return G__15105__3.call(this,dest,f,a);
case 4:
return G__15105__4.call(this,dest,f,a,b);
case 5:
return G__15105__5.call(this,dest,f,a,b,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15105.cljs$core$IFn$_invoke$arity$3 = G__15105__3;
G__15105.cljs$core$IFn$_invoke$arity$4 = G__15105__4;
G__15105.cljs$core$IFn$_invoke$arity$5 = G__15105__5;
return G__15105;
})()
;})(G__15099_15102,G__15100_15103))
;
goog.object.set(G__15099_15102,G__15100_15103,G__15101_15104);
goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"number",true);

var G__15113_15152 = clojure.core.matrix.protocols.element_seq;
var G__15114_15153 = "number";
var G__15115_15154 = ((function (G__15113_15152,G__15114_15153){
return (function (m){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[m],null));
});})(G__15113_15152,G__15114_15153))
;
goog.object.set(G__15113_15152,G__15114_15153,G__15115_15154);

var G__15116_15155 = clojure.core.matrix.protocols.element_map;
var G__15117_15156 = "number";
var G__15118_15157 = ((function (G__15116_15155,G__15117_15156){
return (function() {
var G__15158 = null;
var G__15158__2 = (function (m,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
});
var G__15158__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(a,((function (G__15116_15155,G__15117_15156){
return (function (p1__15106_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(m,p1__15106_SHARP_) : f.call(null,m,p1__15106_SHARP_));
});})(G__15116_15155,G__15117_15156))
);
});
var G__15158__4 = (function (m,f,a,more){
var temp__5718__auto__ = cljs.core.next(more);
if(temp__5718__auto__){
var moremore = temp__5718__auto__;
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(a,((function (moremore,temp__5718__auto__,G__15116_15155,G__15117_15156){
return (function() { 
var G__15159__delegate = function (p1__15107_SHARP_,p2__15108_SHARP_,rest__15109_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,m,p1__15107_SHARP_,p2__15108_SHARP_,rest__15109_SHARP_);
};
var G__15159 = function (p1__15107_SHARP_,p2__15108_SHARP_,var_args){
var rest__15109_SHARP_ = null;
if (arguments.length > 2) {
var G__15160__i = 0, G__15160__a = new Array(arguments.length -  2);
while (G__15160__i < G__15160__a.length) {G__15160__a[G__15160__i] = arguments[G__15160__i + 2]; ++G__15160__i;}
  rest__15109_SHARP_ = new cljs.core.IndexedSeq(G__15160__a,0,null);
} 
return G__15159__delegate.call(this,p1__15107_SHARP_,p2__15108_SHARP_,rest__15109_SHARP_);};
G__15159.cljs$lang$maxFixedArity = 2;
G__15159.cljs$lang$applyTo = (function (arglist__15161){
var p1__15107_SHARP_ = cljs.core.first(arglist__15161);
arglist__15161 = cljs.core.next(arglist__15161);
var p2__15108_SHARP_ = cljs.core.first(arglist__15161);
var rest__15109_SHARP_ = cljs.core.rest(arglist__15161);
return G__15159__delegate(p1__15107_SHARP_,p2__15108_SHARP_,rest__15109_SHARP_);
});
G__15159.cljs$core$IFn$_invoke$arity$variadic = G__15159__delegate;
return G__15159;
})()
;})(moremore,temp__5718__auto__,G__15116_15155,G__15117_15156))
,cljs.core.first(more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(a,((function (temp__5718__auto__,G__15116_15155,G__15117_15156){
return (function (p1__15110_SHARP_,p2__15111_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(m,p1__15110_SHARP_,p2__15111_SHARP_) : f.call(null,m,p1__15110_SHARP_,p2__15111_SHARP_));
});})(temp__5718__auto__,G__15116_15155,G__15117_15156))
,cljs.core.first(more));
}
});
G__15158 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__15158__2.call(this,m,f);
case 3:
return G__15158__3.call(this,m,f,a);
case 4:
return G__15158__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15158.cljs$core$IFn$_invoke$arity$2 = G__15158__2;
G__15158.cljs$core$IFn$_invoke$arity$3 = G__15158__3;
G__15158.cljs$core$IFn$_invoke$arity$4 = G__15158__4;
return G__15158;
})()
;})(G__15116_15155,G__15117_15156))
;
goog.object.set(G__15116_15155,G__15117_15156,G__15118_15157);

var G__15119_15162 = clojure.core.matrix.protocols.element_map_BANG_;
var G__15120_15163 = "number";
var G__15121_15164 = ((function (G__15119_15162,G__15120_15163){
return (function() {
var G__15165 = null;
var G__15165__2 = (function (m,f){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__15165__3 = (function (m,f,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__15165__4 = (function (m,f,a,more){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
G__15165 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__15165__2.call(this,m,f);
case 3:
return G__15165__3.call(this,m,f,a);
case 4:
return G__15165__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15165.cljs$core$IFn$_invoke$arity$2 = G__15165__2;
G__15165.cljs$core$IFn$_invoke$arity$3 = G__15165__3;
G__15165.cljs$core$IFn$_invoke$arity$4 = G__15165__4;
return G__15165;
})()
;})(G__15119_15162,G__15120_15163))
;
goog.object.set(G__15119_15162,G__15120_15163,G__15121_15164);

var G__15122_15166 = clojure.core.matrix.protocols.element_reduce;
var G__15123_15167 = "number";
var G__15124_15168 = ((function (G__15122_15166,G__15123_15167){
return (function() {
var G__15169 = null;
var G__15169__2 = (function (m,f){
return m;
});
var G__15169__3 = (function (m,f,init){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(init,m) : f.call(null,init,m));
});
G__15169 = function(m,f,init){
switch(arguments.length){
case 2:
return G__15169__2.call(this,m,f);
case 3:
return G__15169__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15169.cljs$core$IFn$_invoke$arity$2 = G__15169__2;
G__15169.cljs$core$IFn$_invoke$arity$3 = G__15169__3;
return G__15169;
})()
;})(G__15122_15166,G__15123_15167))
;
goog.object.set(G__15122_15166,G__15123_15167,G__15124_15168);

goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"object",true);

var G__15125_15170 = clojure.core.matrix.protocols.element_seq;
var G__15126_15171 = "object";
var G__15127_15172 = ((function (G__15125_15170,G__15126_15171){
return (function (m){
var c = cljs.core.type(m);
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if((dims > (1))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.core.matrix.protocols.get_major_slice_seq(m)], 0));
} else {
if(cljs.core.seq_QMARK_(m)){
return m;
} else {
if(((0) === dims)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.core.matrix.protocols.get_0d(m)],null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,c)){
return m;
} else {
if(((1) === dims)){
return clojure.core.matrix.protocols.convert_to_nested_vectors(m);
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.element_seq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.core.matrix.protocols.get_major_slice_seq(m)], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to create element-seq from: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}
});})(G__15125_15170,G__15126_15171))
;
goog.object.set(G__15125_15170,G__15126_15171,G__15127_15172);

var G__15128_15173 = clojure.core.matrix.protocols.element_map;
var G__15129_15174 = "object";
var G__15130_15175 = ((function (G__15128_15173,G__15129_15174){
return (function() {
var G__15176 = null;
var G__15176__2 = (function (m,f){
return clojure.core.matrix.impl.common.construct_matrix(m,clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2(f,m));
});
var G__15176__3 = (function (m,f,a){
var vec__15131 = clojure.core.matrix.protocols.broadcast_same_shape(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15131,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15131,(1),null);
return clojure.core.matrix.impl.common.construct_matrix(m__$1,clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3(f,m__$1,a__$1));
});
var G__15176__4 = (function (m,f,a,more){
var arrays = cljs.core.cons(m,cljs.core.cons(a,more));
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__4131__auto__ = clojure.core.matrix.protocols.common_shape(shapes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempt to do element map with incompatible shapes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (arrays,shapes,sh,G__15128_15173,G__15129_15174){
return (function (p1__15112_SHARP_){
return clojure.core.matrix.protocols.broadcast(p1__15112_SHARP_,sh);
});})(arrays,shapes,sh,G__15128_15173,G__15129_15174))
,arrays);
return clojure.core.matrix.impl.common.construct_matrix(m,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1));
});
G__15176 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__15176__2.call(this,m,f);
case 3:
return G__15176__3.call(this,m,f,a);
case 4:
return G__15176__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15176.cljs$core$IFn$_invoke$arity$2 = G__15176__2;
G__15176.cljs$core$IFn$_invoke$arity$3 = G__15176__3;
G__15176.cljs$core$IFn$_invoke$arity$4 = G__15176__4;
return G__15176;
})()
;})(G__15128_15173,G__15129_15174))
;
goog.object.set(G__15128_15173,G__15129_15174,G__15130_15175);

var G__15134_15177 = clojure.core.matrix.protocols.element_map_BANG_;
var G__15135_15178 = "object";
var G__15136_15179 = ((function (G__15134_15177,G__15135_15178){
return (function() {
var G__15180 = null;
var G__15180__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,f));
});
var G__15180__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,f,a));
});
var G__15180__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(m,f,a,more));
});
G__15180 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__15180__2.call(this,m,f);
case 3:
return G__15180__3.call(this,m,f,a);
case 4:
return G__15180__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15180.cljs$core$IFn$_invoke$arity$2 = G__15180__2;
G__15180.cljs$core$IFn$_invoke$arity$3 = G__15180__3;
G__15180.cljs$core$IFn$_invoke$arity$4 = G__15180__4;
return G__15180;
})()
;})(G__15134_15177,G__15135_15178))
;
goog.object.set(G__15134_15177,G__15135_15178,G__15136_15179);

var G__15137_15181 = clojure.core.matrix.protocols.element_reduce;
var G__15138_15182 = "object";
var G__15139_15183 = ((function (G__15137_15181,G__15138_15182){
return (function() {
var G__15184 = null;
var G__15184__2 = (function (m,f){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f,clojure.core.matrix.protocols.element_seq(m));
});
var G__15184__3 = (function (m,f,init){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,init,clojure.core.matrix.protocols.element_seq(m));
});
G__15184 = function(m,f,init){
switch(arguments.length){
case 2:
return G__15184__2.call(this,m,f);
case 3:
return G__15184__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15184.cljs$core$IFn$_invoke$arity$2 = G__15184__2;
G__15184.cljs$core$IFn$_invoke$arity$3 = G__15184__3;
return G__15184;
})()
;})(G__15137_15181,G__15138_15182))
;
goog.object.set(G__15137_15181,G__15138_15182,G__15139_15183);

goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"null",true);

var G__15140_15185 = clojure.core.matrix.protocols.element_seq;
var G__15141_15186 = "null";
var G__15142_15187 = ((function (G__15140_15185,G__15141_15186){
return (function (m){
return cljs.core.list(null);
});})(G__15140_15185,G__15141_15186))
;
goog.object.set(G__15140_15185,G__15141_15186,G__15142_15187);

var G__15143_15188 = clojure.core.matrix.protocols.element_map;
var G__15144_15189 = "null";
var G__15145_15190 = ((function (G__15143_15188,G__15144_15189){
return (function() {
var G__15191 = null;
var G__15191__2 = (function (m,f){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
});
var G__15191__3 = (function (m,f,a){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,a) : f.call(null,null,a));
});
var G__15191__4 = (function (m,f,a,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,null,a,more);
});
G__15191 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__15191__2.call(this,m,f);
case 3:
return G__15191__3.call(this,m,f,a);
case 4:
return G__15191__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15191.cljs$core$IFn$_invoke$arity$2 = G__15191__2;
G__15191.cljs$core$IFn$_invoke$arity$3 = G__15191__3;
G__15191.cljs$core$IFn$_invoke$arity$4 = G__15191__4;
return G__15191;
})()
;})(G__15143_15188,G__15144_15189))
;
goog.object.set(G__15143_15188,G__15144_15189,G__15145_15190);

var G__15146_15192 = clojure.core.matrix.protocols.element_map_BANG_;
var G__15147_15193 = "null";
var G__15148_15194 = ((function (G__15146_15192,G__15147_15193){
return (function() {
var G__15195 = null;
var G__15195__2 = (function (m,f){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__15195__3 = (function (m,f,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__15195__4 = (function (m,f,a,more){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__15195 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__15195__2.call(this,m,f);
case 3:
return G__15195__3.call(this,m,f,a);
case 4:
return G__15195__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15195.cljs$core$IFn$_invoke$arity$2 = G__15195__2;
G__15195.cljs$core$IFn$_invoke$arity$3 = G__15195__3;
G__15195.cljs$core$IFn$_invoke$arity$4 = G__15195__4;
return G__15195;
})()
;})(G__15146_15192,G__15147_15193))
;
goog.object.set(G__15146_15192,G__15147_15193,G__15148_15194);

var G__15149_15196 = clojure.core.matrix.protocols.element_reduce;
var G__15150_15197 = "null";
var G__15151_15198 = ((function (G__15149_15196,G__15150_15197){
return (function() {
var G__15199 = null;
var G__15199__2 = (function (m,f){
return null;
});
var G__15199__3 = (function (m,f,init){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(init,null) : f.call(null,init,null));
});
G__15199 = function(m,f,init){
switch(arguments.length){
case 2:
return G__15199__2.call(this,m,f);
case 3:
return G__15199__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15199.cljs$core$IFn$_invoke$arity$2 = G__15199__2;
G__15199.cljs$core$IFn$_invoke$arity$3 = G__15199__3;
return G__15199;
})()
;})(G__15149_15196,G__15150_15197))
;
goog.object.set(G__15149_15196,G__15150_15197,G__15151_15198);

cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
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
clojure.core.matrix.impl.defaults.cart = (function clojure$core$matrix$impl$defaults$cart(colls){
if(cljs.core.empty_QMARK_(colls)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
var iter__4523__auto__ = (function clojure$core$matrix$impl$defaults$cart_$_iter__15200(s__15201){
return (new cljs.core.LazySeq(null,(function (){
var s__15201__$1 = s__15201;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__15201__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var x = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__15201__$1,x,xs__6277__auto__,temp__5720__auto__){
return (function clojure$core$matrix$impl$defaults$cart_$_iter__15200_$_iter__15202(s__15203){
return (new cljs.core.LazySeq(null,((function (s__15201__$1,x,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__15203__$1 = s__15203;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__15203__$1);
if(temp__5720__auto____$1){
var s__15203__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__15203__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15203__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15205 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15204 = (0);
while(true){
if((i__15204 < size__4522__auto__)){
var more = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15204);
cljs.core.chunk_append(b__15205,cljs.core.cons(x,more));

var G__15207 = (i__15204 + (1));
i__15204 = G__15207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15205),clojure$core$matrix$impl$defaults$cart_$_iter__15200_$_iter__15202(cljs.core.chunk_rest(s__15203__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15205),null);
}
} else {
var more = cljs.core.first(s__15203__$2);
return cljs.core.cons(cljs.core.cons(x,more),clojure$core$matrix$impl$defaults$cart_$_iter__15200_$_iter__15202(cljs.core.rest(s__15203__$2)));
}
} else {
return null;
}
break;
}
});})(s__15201__$1,x,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__15201__$1,x,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__((function (){var G__15206 = cljs.core.rest(colls);
return (clojure.core.matrix.impl.defaults.cart.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.defaults.cart.cljs$core$IFn$_invoke$arity$1(G__15206) : clojure.core.matrix.impl.defaults.cart.call(null,G__15206));
})()));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,clojure$core$matrix$impl$defaults$cart_$_iter__15200(cljs.core.rest(s__15201__$1)));
} else {
var G__15208 = cljs.core.rest(s__15201__$1);
s__15201__$1 = G__15208;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.first(colls));
}
});
clojure.core.matrix.impl.defaults.indices_seq = (function clojure$core$matrix$impl$defaults$indices_seq(m){
return clojure.core.matrix.impl.defaults.cart(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.range,clojure.core.matrix.protocols.get_shape(m)));
});
goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"number",true);

var G__15217_15254 = clojure.core.matrix.protocols.element_map_indexed;
var G__15218_15255 = "number";
var G__15219_15256 = ((function (G__15217_15254,G__15218_15255){
return (function() {
var G__15257 = null;
var G__15257__2 = (function (m,f){
var G__15220 = cljs.core.PersistentVector.EMPTY;
var G__15221 = m;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15220,G__15221) : f.call(null,G__15220,G__15221));
});
var G__15257__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(a,((function (G__15217_15254,G__15218_15255){
return (function (p1__15209_SHARP_){
var G__15222 = cljs.core.PersistentVector.EMPTY;
var G__15223 = m;
var G__15224 = p1__15209_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15222,G__15223,G__15224) : f.call(null,G__15222,G__15223,G__15224));
});})(G__15217_15254,G__15218_15255))
);
});
var G__15257__4 = (function (m,f,a,more){
var temp__5718__auto__ = cljs.core.next(more);
if(temp__5718__auto__){
var moremore = temp__5718__auto__;
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(a,((function (moremore,temp__5718__auto__,G__15217_15254,G__15218_15255){
return (function() { 
var G__15258__delegate = function (p1__15210_SHARP_,p2__15211_SHARP_,rest__15212_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.PersistentVector.EMPTY,m,p1__15210_SHARP_,p2__15211_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__15212_SHARP_], 0));
};
var G__15258 = function (p1__15210_SHARP_,p2__15211_SHARP_,var_args){
var rest__15212_SHARP_ = null;
if (arguments.length > 2) {
var G__15259__i = 0, G__15259__a = new Array(arguments.length -  2);
while (G__15259__i < G__15259__a.length) {G__15259__a[G__15259__i] = arguments[G__15259__i + 2]; ++G__15259__i;}
  rest__15212_SHARP_ = new cljs.core.IndexedSeq(G__15259__a,0,null);
} 
return G__15258__delegate.call(this,p1__15210_SHARP_,p2__15211_SHARP_,rest__15212_SHARP_);};
G__15258.cljs$lang$maxFixedArity = 2;
G__15258.cljs$lang$applyTo = (function (arglist__15260){
var p1__15210_SHARP_ = cljs.core.first(arglist__15260);
arglist__15260 = cljs.core.next(arglist__15260);
var p2__15211_SHARP_ = cljs.core.first(arglist__15260);
var rest__15212_SHARP_ = cljs.core.rest(arglist__15260);
return G__15258__delegate(p1__15210_SHARP_,p2__15211_SHARP_,rest__15212_SHARP_);
});
G__15258.cljs$core$IFn$_invoke$arity$variadic = G__15258__delegate;
return G__15258;
})()
;})(moremore,temp__5718__auto__,G__15217_15254,G__15218_15255))
,cljs.core.first(more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(a,((function (temp__5718__auto__,G__15217_15254,G__15218_15255){
return (function (p1__15213_SHARP_,p2__15214_SHARP_){
var G__15225 = cljs.core.PersistentVector.EMPTY;
var G__15226 = m;
var G__15227 = p1__15213_SHARP_;
var G__15228 = p2__15214_SHARP_;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__15225,G__15226,G__15227,G__15228) : f.call(null,G__15225,G__15226,G__15227,G__15228));
});})(temp__5718__auto__,G__15217_15254,G__15218_15255))
,cljs.core.first(more));
}
});
G__15257 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__15257__2.call(this,m,f);
case 3:
return G__15257__3.call(this,m,f,a);
case 4:
return G__15257__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15257.cljs$core$IFn$_invoke$arity$2 = G__15257__2;
G__15257.cljs$core$IFn$_invoke$arity$3 = G__15257__3;
G__15257.cljs$core$IFn$_invoke$arity$4 = G__15257__4;
return G__15257;
})()
;})(G__15217_15254,G__15218_15255))
;
goog.object.set(G__15217_15254,G__15218_15255,G__15219_15256);

var G__15229_15261 = clojure.core.matrix.protocols.element_map_indexed_BANG_;
var G__15230_15262 = "number";
var G__15231_15263 = ((function (G__15229_15261,G__15230_15262){
return (function() {
var G__15264 = null;
var G__15264__2 = (function (m,f){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__15264__3 = (function (m,f,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
var G__15264__4 = (function (m,f,a,more){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("java.lang.Number instance is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});
G__15264 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__15264__2.call(this,m,f);
case 3:
return G__15264__3.call(this,m,f,a);
case 4:
return G__15264__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15264.cljs$core$IFn$_invoke$arity$2 = G__15264__2;
G__15264.cljs$core$IFn$_invoke$arity$3 = G__15264__3;
G__15264.cljs$core$IFn$_invoke$arity$4 = G__15264__4;
return G__15264;
})()
;})(G__15229_15261,G__15230_15262))
;
goog.object.set(G__15229_15261,G__15230_15262,G__15231_15263);

goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"object",true);

var G__15232_15265 = clojure.core.matrix.protocols.element_map_indexed;
var G__15233_15266 = "object";
var G__15234_15267 = ((function (G__15232_15265,G__15233_15266){
return (function() {
var G__15268 = null;
var G__15268__2 = (function (m,f){
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
var G__15235 = cljs.core.PersistentVector.EMPTY;
var G__15236 = clojure.core.matrix.protocols.get_0d(m);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15235,G__15236) : f.call(null,G__15235,G__15236));
} else {
var s = cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,clojure.core.matrix.impl.defaults.indices_seq(m),clojure.core.matrix.protocols.element_seq(m));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m,s),clojure.core.matrix.protocols.get_shape(m));
}
});
var G__15268__3 = (function (m,f,a){
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
var v = clojure.core.matrix.protocols.get_0d(m);
return clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$2(a,((function (v,G__15232_15265,G__15233_15266){
return (function (p1__15215_SHARP_,p2__15216_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(p1__15215_SHARP_,v,p2__15216_SHARP_) : f.call(null,p1__15215_SHARP_,v,p2__15216_SHARP_));
});})(v,G__15232_15265,G__15233_15266))
);
} else {
var vec__15237 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15237,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15237,(1),null);
var s = cljs.core.map.cljs$core$IFn$_invoke$arity$4(f,clojure.core.matrix.impl.defaults.indices_seq(m__$1),clojure.core.matrix.protocols.element_seq(m__$1),clojure.core.matrix.protocols.element_seq(a__$1));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m__$1,s),clojure.core.matrix.protocols.get_shape(m__$1));
}
});
var G__15268__4 = (function (m,f,a,more){
var s = cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,clojure.core.matrix.protocols.element_seq(m),clojure.core.matrix.protocols.element_seq(a));
var s__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,f,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(clojure.core.matrix.impl.defaults.indices_seq(m),clojure.core.matrix.protocols.element_seq(m),clojure.core.matrix.protocols.element_seq(a),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,more)));
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.coerce_param(m,s__$1),clojure.core.matrix.protocols.get_shape(m));
});
G__15268 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__15268__2.call(this,m,f);
case 3:
return G__15268__3.call(this,m,f,a);
case 4:
return G__15268__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15268.cljs$core$IFn$_invoke$arity$2 = G__15268__2;
G__15268.cljs$core$IFn$_invoke$arity$3 = G__15268__3;
G__15268.cljs$core$IFn$_invoke$arity$4 = G__15268__4;
return G__15268;
})()
;})(G__15232_15265,G__15233_15266))
;
goog.object.set(G__15232_15265,G__15233_15266,G__15234_15267);

var G__15240_15269 = clojure.core.matrix.protocols.element_map_indexed_BANG_;
var G__15241_15270 = "object";
var G__15242_15271 = ((function (G__15240_15269,G__15241_15270){
return (function() {
var G__15272 = null;
var G__15272__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$2(m,f));
});
var G__15272__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$3(m,f,a));
});
var G__15272__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map_indexed.cljs$core$IFn$_invoke$arity$4(m,f,a,more));
});
G__15272 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__15272__2.call(this,m,f);
case 3:
return G__15272__3.call(this,m,f,a);
case 4:
return G__15272__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15272.cljs$core$IFn$_invoke$arity$2 = G__15272__2;
G__15272.cljs$core$IFn$_invoke$arity$3 = G__15272__3;
G__15272.cljs$core$IFn$_invoke$arity$4 = G__15272__4;
return G__15272;
})()
;})(G__15240_15269,G__15241_15270))
;
goog.object.set(G__15240_15269,G__15241_15270,G__15242_15271);

goog.object.set(clojure.core.matrix.protocols.PMapIndexed,"null",true);

var G__15243_15273 = clojure.core.matrix.protocols.element_map_indexed;
var G__15244_15274 = "null";
var G__15245_15275 = ((function (G__15243_15273,G__15244_15274){
return (function() {
var G__15276 = null;
var G__15276__2 = (function (m,f){
var G__15246 = cljs.core.PersistentVector.EMPTY;
var G__15247 = null;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__15246,G__15247) : f.call(null,G__15246,G__15247));
});
var G__15276__3 = (function (m,f,a){
var G__15248 = cljs.core.PersistentVector.EMPTY;
var G__15249 = null;
var G__15250 = a;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__15248,G__15249,G__15250) : f.call(null,G__15248,G__15249,G__15250));
});
var G__15276__4 = (function (m,f,a,more){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.PersistentVector.EMPTY,null,a,more);
});
G__15276 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__15276__2.call(this,m,f);
case 3:
return G__15276__3.call(this,m,f,a);
case 4:
return G__15276__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15276.cljs$core$IFn$_invoke$arity$2 = G__15276__2;
G__15276.cljs$core$IFn$_invoke$arity$3 = G__15276__3;
G__15276.cljs$core$IFn$_invoke$arity$4 = G__15276__4;
return G__15276;
})()
;})(G__15243_15273,G__15244_15274))
;
goog.object.set(G__15243_15273,G__15244_15274,G__15245_15275);

var G__15251_15277 = clojure.core.matrix.protocols.element_map_indexed_BANG_;
var G__15252_15278 = "null";
var G__15253_15279 = ((function (G__15251_15277,G__15252_15278){
return (function() {
var G__15280 = null;
var G__15280__2 = (function (m,f){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__15280__3 = (function (m,f,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
var G__15280__4 = (function (m,f,a,more){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do element-map-indexed! on nil",cljs.core.PersistentArrayMap.EMPTY);
});
G__15280 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__15280__2.call(this,m,f);
case 3:
return G__15280__3.call(this,m,f,a);
case 4:
return G__15280__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15280.cljs$core$IFn$_invoke$arity$2 = G__15280__2;
G__15280.cljs$core$IFn$_invoke$arity$3 = G__15280__3;
G__15280.cljs$core$IFn$_invoke$arity$4 = G__15280__4;
return G__15280;
})()
;})(G__15251_15277,G__15252_15278))
;
goog.object.set(G__15251_15277,G__15252_15278,G__15253_15279);
goog.object.set(clojure.core.matrix.protocols.PElementCount,"null",true);

var G__15281_15290 = clojure.core.matrix.protocols.element_count;
var G__15282_15291 = "null";
var G__15283_15292 = ((function (G__15281_15290,G__15282_15291){
return (function (m){
return (1);
});})(G__15281_15290,G__15282_15291))
;
goog.object.set(G__15281_15290,G__15282_15291,G__15283_15292);

goog.object.set(clojure.core.matrix.protocols.PElementCount,"number",true);

var G__15284_15293 = clojure.core.matrix.protocols.element_count;
var G__15285_15294 = "number";
var G__15286_15295 = ((function (G__15284_15293,G__15285_15294){
return (function (m){
return (1);
});})(G__15284_15293,G__15285_15294))
;
goog.object.set(G__15284_15293,G__15285_15294,G__15286_15295);

goog.object.set(clojure.core.matrix.protocols.PElementCount,"object",true);

var G__15287_15296 = clojure.core.matrix.protocols.element_count;
var G__15288_15297 = "object";
var G__15289_15298 = ((function (G__15287_15296,G__15288_15297){
return (function (m){
return clojure.core.matrix.impl.defaults.calc_element_count(m);
});})(G__15287_15296,G__15288_15297))
;
goog.object.set(G__15287_15296,G__15288_15297,G__15289_15298);
goog.object.set(clojure.core.matrix.protocols.PValidateShape,"null",true);

var G__15300_15306 = clojure.core.matrix.protocols.validate_shape;
var G__15301_15307 = "null";
var G__15302_15308 = ((function (G__15300_15306,G__15301_15307){
return (function() {
var G__15309 = null;
var G__15309__1 = (function (m){
return null;
});
var G__15309__2 = (function (m,shape){
if((shape == null)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Shape validation failed, was scalar but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
G__15309 = function(m,shape){
switch(arguments.length){
case 1:
return G__15309__1.call(this,m);
case 2:
return G__15309__2.call(this,m,shape);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15309.cljs$core$IFn$_invoke$arity$1 = G__15309__1;
G__15309.cljs$core$IFn$_invoke$arity$2 = G__15309__2;
return G__15309;
})()
;})(G__15300_15306,G__15301_15307))
;
goog.object.set(G__15300_15306,G__15301_15307,G__15302_15308);

goog.object.set(clojure.core.matrix.protocols.PValidateShape,"object",true);

var G__15303_15310 = clojure.core.matrix.protocols.validate_shape;
var G__15304_15311 = "object";
var G__15305_15312 = ((function (G__15303_15310,G__15304_15311){
return (function() {
var G__15313 = null;
var G__15313__1 = (function (m){
return clojure.core.matrix.protocols.validate_shape.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.get_shape(m));
});
var G__15313__2 = (function (m,expected_shape){
if(((0) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
var sh = clojure.core.matrix.protocols.get_shape(m);
if((sh == null)){
if((expected_shape == null)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Shape validation failed, was scalar but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sh),cljs.core.vec(expected_shape))){
return sh;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Shape validation failed, was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)," but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
} else {
var sh = clojure.core.matrix.protocols.get_shape(m);
var ss = clojure.core.matrix.protocols.get_major_slice_seq(m);
var efirst = (function (){var or__4131__auto__ = cljs.core.first(expected_shape);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Shape validation failed, was ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sh)," but expected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected_shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var enext = cljs.core.next(expected_shape);
var shapes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (sh,ss,efirst,enext,G__15303_15310,G__15304_15311){
return (function (p1__15299_SHARP_){
return clojure.core.matrix.protocols.validate_shape.cljs$core$IFn$_invoke$arity$2(p1__15299_SHARP_,enext);
});})(sh,ss,efirst,enext,G__15303_15310,G__15304_15311))
,ss);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,enext,shapes))){
return cljs.core.vec(cljs.core.cons(clojure.core.matrix.protocols.dimension_count(m,(0)),cljs.core.first(shapes)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconsistent shapes for sub arrays in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

}
});
G__15313 = function(m,expected_shape){
switch(arguments.length){
case 1:
return G__15313__1.call(this,m);
case 2:
return G__15313__2.call(this,m,expected_shape);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__15313.cljs$core$IFn$_invoke$arity$1 = G__15313__1;
G__15313.cljs$core$IFn$_invoke$arity$2 = G__15313__2;
return G__15313;
})()
;})(G__15303_15310,G__15304_15311))
;
goog.object.set(G__15303_15310,G__15304_15311,G__15305_15312);
goog.object.set(clojure.core.matrix.protocols.PMatrixSlices,"object",true);

var G__15314_15326 = clojure.core.matrix.protocols.get_row;
var G__15315_15327 = "object";
var G__15316_15328 = ((function (G__15314_15326,G__15315_15327){
return (function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i);
} else {
return clojure.core.matrix.protocols.get_major_slice(m,i);
}
});})(G__15314_15326,G__15315_15327))
;
goog.object.set(G__15314_15326,G__15315_15327,G__15316_15328);

var G__15317_15329 = clojure.core.matrix.protocols.get_column;
var G__15318_15330 = "object";
var G__15319_15331 = ((function (G__15317_15329,G__15318_15330){
return (function (m,i){
return clojure.core.matrix.protocols.get_slice(m,(1),i);
});})(G__15317_15329,G__15318_15330))
;
goog.object.set(G__15317_15329,G__15318_15330,G__15319_15331);

var G__15320_15332 = clojure.core.matrix.protocols.get_major_slice;
var G__15321_15333 = "object";
var G__15322_15334 = ((function (G__15320_15332,G__15321_15333){
return (function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i);
} else {
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)))){
return clojure.core.matrix.protocols.get_1d(m,i);
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice(m,i);

}
}
});})(G__15320_15332,G__15321_15333))
;
goog.object.set(G__15320_15332,G__15321_15333,G__15322_15334);

var G__15323_15335 = clojure.core.matrix.protocols.get_slice;
var G__15324_15336 = "object";
var G__15325_15337 = ((function (G__15323_15335,G__15324_15336){
return (function (m,dimension,i){
var ldimension = cljs.core.long$(dimension);
if(((0) === ldimension)){
return clojure.core.matrix.protocols.get_major_slice(m,i);
} else {
return clojure.core.matrix.protocols.get_slice(clojure.core.matrix.protocols.convert_to_nested_vectors(m),dimension,i);

}
});})(G__15323_15335,G__15324_15336))
;
goog.object.set(G__15323_15335,G__15324_15336,G__15325_15337);
goog.object.set(clojure.core.matrix.protocols.PBLASBase,"object",true);

var G__15338_15344 = clojure.core.matrix.protocols.gemm_BANG_;
var G__15339_15345 = "object";
var G__15340_15346 = ((function (G__15338_15344,G__15339_15345){
return (function (c,trans_a_QMARK_,trans_b_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose(a):a);
var b__$1 = (cljs.core.truth_(trans_b_QMARK_)?clojure.core.matrix.protocols.transpose(b):b);
if((!((1.0 === beta)))){
clojure.core.matrix.protocols.scale_BANG_(c,beta);
} else {
}

return clojure.core.matrix.protocols.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4(c,a__$1,b__$1,alpha);
});})(G__15338_15344,G__15339_15345))
;
goog.object.set(G__15338_15344,G__15339_15345,G__15340_15346);

var G__15341_15347 = clojure.core.matrix.protocols.gemv_BANG_;
var G__15342_15348 = "object";
var G__15343_15349 = ((function (G__15341_15347,G__15342_15348){
return (function (c,trans_a_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose(a):a);
if((!((1.0 === beta)))){
clojure.core.matrix.protocols.scale_BANG_(c,beta);
} else {
}

return clojure.core.matrix.protocols.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4(c,a__$1,b,alpha);
});})(G__15341_15347,G__15342_15348))
;
goog.object.set(G__15341_15347,G__15342_15348,G__15343_15349);
goog.object.set(clojure.core.matrix.protocols.PMatrixColumns,"object",true);

var G__15350_15354 = clojure.core.matrix.protocols.get_columns;
var G__15351_15355 = "object";
var G__15352_15356 = ((function (G__15350_15354,G__15351_15355){
return (function (m){
var G__15353 = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
switch (G__15353) {
case (0):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get columns of a 0-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get columns of a 1-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return cljs.core.vec(clojure.core.matrix.protocols.get_slice_seq(m,(1)));

break;
default:
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.get_columns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.core.matrix.protocols.get_major_slice_seq(m)], 0)));

}
});})(G__15350_15354,G__15351_15355))
;
goog.object.set(G__15350_15354,G__15351_15355,G__15352_15356);
goog.object.set(clojure.core.matrix.protocols.PMatrixRows,"object",true);

var G__15358_15362 = clojure.core.matrix.protocols.get_rows;
var G__15359_15363 = "object";
var G__15360_15364 = ((function (G__15358_15362,G__15359_15363){
return (function (m){
var G__15361 = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
switch (G__15361) {
case (0):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get rows of a 0-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't get rows of a 1-dimensional object",cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return cljs.core.vec(clojure.core.matrix.protocols.get_major_slice_seq(m));

break;
default:
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(clojure.core.matrix.protocols.get_rows,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.core.matrix.protocols.get_major_slice_seq(m)], 0)));

}
});})(G__15358_15362,G__15359_15363))
;
goog.object.set(G__15358_15362,G__15359_15363,G__15360_15364);
goog.object.set(clojure.core.matrix.protocols.PSliceView,"object",true);

var G__15366_15369 = clojure.core.matrix.protocols.get_major_slice_view;
var G__15367_15370 = "object";
var G__15368_15371 = ((function (G__15366_15369,G__15367_15370){
return (function (m,i){
if((Array === m.constructor)){
var ss = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m,i);
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(ss))){
return ss;
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice(m,i);
}
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice(m,i);

}
});})(G__15366_15369,G__15367_15370))
;
goog.object.set(G__15366_15369,G__15367_15370,G__15368_15371);
goog.object.set(clojure.core.matrix.protocols.PSliceView2,"object",true);

var G__15372_15375 = clojure.core.matrix.protocols.get_slice_view;
var G__15373_15376 = "object";
var G__15374_15377 = ((function (G__15372_15375,G__15373_15376){
return (function (m,dim,i){
if((dim === (0))){
return clojure.core.matrix.protocols.get_major_slice_view(m,i);
} else {
return clojure.core.matrix.impl.wrappers.wrap_nd(m).clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3(null,dim,i);
}
});})(G__15372_15375,G__15373_15376))
;
goog.object.set(G__15372_15375,G__15373_15376,G__15374_15377);
goog.object.set(clojure.core.matrix.protocols.PSliceSeq,"object",true);

var G__15379_15386 = clojure.core.matrix.protocols.get_major_slice_seq;
var G__15380_15387 = "object";
var G__15381_15388 = ((function (G__15379_15386,G__15380_15387){
return (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if((dims <= (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't get slices on [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dims),"]-dimensional object"].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(Array,cljs.core.type(m))){
return cljs.core.seq(m);
} else {
if((dims === (1))){
var iter__4523__auto__ = ((function (dims,G__15379_15386,G__15380_15387){
return (function clojure$core$matrix$impl$defaults$iter__15382(s__15383){
return (new cljs.core.LazySeq(null,((function (dims,G__15379_15386,G__15380_15387){
return (function (){
var s__15383__$1 = s__15383;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__15383__$1);
if(temp__5720__auto__){
var s__15383__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15383__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15383__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15385 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15384 = (0);
while(true){
if((i__15384 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15384);
cljs.core.chunk_append(b__15385,clojure.core.matrix.protocols.get_1d(m,i));

var G__15389 = (i__15384 + (1));
i__15384 = G__15389;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15385),clojure$core$matrix$impl$defaults$iter__15382(cljs.core.chunk_rest(s__15383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15385),null);
}
} else {
var i = cljs.core.first(s__15383__$2);
return cljs.core.cons(clojure.core.matrix.protocols.get_1d(m,i),clojure$core$matrix$impl$defaults$iter__15382(cljs.core.rest(s__15383__$2)));
}
} else {
return null;
}
break;
}
});})(dims,G__15379_15386,G__15380_15387))
,null,null));
});})(dims,G__15379_15386,G__15380_15387))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,(0))));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (dims,G__15379_15386,G__15380_15387){
return (function (p1__15378_SHARP_){
return clojure.core.matrix.protocols.get_major_slice(m,p1__15378_SHARP_);
});})(dims,G__15379_15386,G__15380_15387))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,(0))));

}
}
}
});})(G__15379_15386,G__15380_15387))
;
goog.object.set(G__15379_15386,G__15380_15387,G__15381_15388);
goog.object.set(clojure.core.matrix.protocols.PSliceSeq2,"object",true);

var G__15391_15394 = clojure.core.matrix.protocols.get_slice_seq;
var G__15392_15395 = "object";
var G__15393_15396 = ((function (G__15391_15394,G__15392_15395){
return (function (m,dimension){
var ldimension = cljs.core.long$(dimension);
if((ldimension === (0))){
return clojure.core.matrix.protocols.get_major_slice_seq(m);
} else {
if((ldimension < (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't get slices of a negative dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dimension)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ldimension,G__15391_15394,G__15392_15395){
return (function (p1__15390_SHARP_){
return clojure.core.matrix.protocols.get_slice(m,dimension,p1__15390_SHARP_);
});})(ldimension,G__15391_15394,G__15392_15395))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,dimension)));

}
}
});})(G__15391_15394,G__15392_15395))
;
goog.object.set(G__15391_15394,G__15392_15395,G__15393_15396);
goog.object.set(clojure.core.matrix.protocols.PSliceViewSeq,"object",true);

var G__15397_15404 = clojure.core.matrix.protocols.get_major_slice_view_seq;
var G__15398_15405 = "object";
var G__15399_15406 = ((function (G__15397_15404,G__15398_15405){
return (function (m){
var n = clojure.core.matrix.protocols.dimension_count(m,(0));
var iter__4523__auto__ = ((function (n,G__15397_15404,G__15398_15405){
return (function clojure$core$matrix$impl$defaults$iter__15400(s__15401){
return (new cljs.core.LazySeq(null,((function (n,G__15397_15404,G__15398_15405){
return (function (){
var s__15401__$1 = s__15401;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__15401__$1);
if(temp__5720__auto__){
var s__15401__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__15401__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__15401__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__15403 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__15402 = (0);
while(true){
if((i__15402 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__15402);
cljs.core.chunk_append(b__15403,clojure.core.matrix.protocols.get_major_slice_view(m,i));

var G__15407 = (i__15402 + (1));
i__15402 = G__15407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__15403),clojure$core$matrix$impl$defaults$iter__15400(cljs.core.chunk_rest(s__15401__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__15403),null);
}
} else {
var i = cljs.core.first(s__15401__$2);
return cljs.core.cons(clojure.core.matrix.protocols.get_major_slice_view(m,i),clojure$core$matrix$impl$defaults$iter__15400(cljs.core.rest(s__15401__$2)));
}
} else {
return null;
}
break;
}
});})(n,G__15397_15404,G__15398_15405))
,null,null));
});})(n,G__15397_15404,G__15398_15405))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});})(G__15397_15404,G__15398_15405))
;
goog.object.set(G__15397_15404,G__15398_15405,G__15399_15406);
goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"null",true);

var G__15408_15417 = clojure.core.matrix.protocols.join;
var G__15409_15418 = "null";
var G__15410_15419 = ((function (G__15408_15417,G__15409_15418){
return (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join an array to a nil value!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__15408_15417,G__15409_15418))
;
goog.object.set(G__15408_15417,G__15409_15418,G__15410_15419);

goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"number",true);

var G__15411_15420 = clojure.core.matrix.protocols.join;
var G__15412_15421 = "number";
var G__15413_15422 = ((function (G__15411_15420,G__15412_15421){
return (function (m,a){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join an array to a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__15411_15420,G__15412_15421))
;
goog.object.set(G__15411_15420,G__15412_15421,G__15413_15422);

goog.object.set(clojure.core.matrix.protocols.PSliceJoin,"object",true);

var G__15414_15423 = clojure.core.matrix.protocols.join;
var G__15415_15424 = "object";
var G__15416_15425 = ((function (G__15414_15423,G__15415_15424){
return (function (m,a){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
var adims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(a));
if((dims === (0))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join to a 0-dimensional array!",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((dims === adims)){
return clojure.core.matrix.protocols.coerce_param(m,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq(m),clojure.core.matrix.protocols.get_major_slice_seq(a)));
} else {
if((dims === (adims + (1)))){
return clojure.core.matrix.protocols.coerce_param(m,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_major_slice_seq(m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Joining with array of incompatible size",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});})(G__15414_15423,G__15415_15424))
;
goog.object.set(G__15414_15423,G__15415_15424,G__15416_15425);
goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"null",true);

var G__15428_15437 = clojure.core.matrix.protocols.join_along;
var G__15429_15438 = "null";
var G__15430_15439 = ((function (G__15428_15437,G__15429_15438){
return (function (m,a,dim){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join an array to a nil value!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__15428_15437,G__15429_15438))
;
goog.object.set(G__15428_15437,G__15429_15438,G__15430_15439);

goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"number",true);

var G__15431_15440 = clojure.core.matrix.protocols.join_along;
var G__15432_15441 = "number";
var G__15433_15442 = ((function (G__15431_15440,G__15432_15441){
return (function (m,a,dim){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't join an array to a scalar number!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__15431_15440,G__15432_15441))
;
goog.object.set(G__15431_15440,G__15432_15441,G__15433_15442);

goog.object.set(clojure.core.matrix.protocols.PSliceJoinAlong,"object",true);

var G__15434_15443 = clojure.core.matrix.protocols.join_along;
var G__15435_15444 = "object";
var G__15436_15445 = ((function (G__15434_15443,G__15435_15444){
return (function (m,a,dim){
return clojure.core.matrix.protocols.coerce_param(m,(function (){var dim__$1 = cljs.core.long$(dim);
if((dim__$1 === (0))){
return clojure.core.matrix.protocols.join(m,a);
} else {
var ddim = (dim__$1 - (1));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (ddim,dim__$1,G__15434_15443,G__15435_15444){
return (function (p1__15426_SHARP_,p2__15427_SHARP_){
return clojure.core.matrix.protocols.join_along(p1__15426_SHARP_,p2__15427_SHARP_,ddim);
});})(ddim,dim__$1,G__15434_15443,G__15435_15444))
,clojure.core.matrix.protocols.get_major_slice_seq(m),clojure.core.matrix.protocols.get_major_slice_seq(a));

}
})());
});})(G__15434_15443,G__15435_15444))
;
goog.object.set(G__15434_15443,G__15435_15444,G__15436_15445);
goog.object.set(clojure.core.matrix.protocols.PSubVector,"null",true);

var G__15446_15455 = clojure.core.matrix.protocols.subvector;
var G__15447_15456 = "null";
var G__15448_15457 = ((function (G__15446_15455,G__15447_15456){
return (function (m,start,length){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't take subvector of nil",cljs.core.PersistentArrayMap.EMPTY);
});})(G__15446_15455,G__15447_15456))
;
goog.object.set(G__15446_15455,G__15447_15456,G__15448_15457);

goog.object.set(clojure.core.matrix.protocols.PSubVector,"number",true);

var G__15449_15458 = clojure.core.matrix.protocols.subvector;
var G__15450_15459 = "number";
var G__15451_15460 = ((function (G__15449_15458,G__15450_15459){
return (function (m,start,length){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't take subvector of a scalar number",cljs.core.PersistentArrayMap.EMPTY);
});})(G__15449_15458,G__15450_15459))
;
goog.object.set(G__15449_15458,G__15450_15459,G__15451_15460);

goog.object.set(clojure.core.matrix.protocols.PSubVector,"object",true);

var G__15452_15461 = clojure.core.matrix.protocols.subvector;
var G__15453_15462 = "object";
var G__15454_15463 = ((function (G__15452_15461,G__15453_15462){
return (function (m,start,length){
return clojure.core.matrix.impl.wrappers.wrap_nd(m).clojure$core$matrix$protocols$PSubVector$subvector$arity$3(null,start,length);
});})(G__15452_15461,G__15453_15462))
;
goog.object.set(G__15452_15461,G__15453_15462,G__15454_15463);
goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"null",true);

var G__15464_15473 = clojure.core.matrix.protocols.submatrix;
var G__15465_15474 = "null";
var G__15466_15475 = ((function (G__15464_15473,G__15465_15474){
return (function (m,index_ranges){
if(cljs.core.seq(index_ranges)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't take partial submatrix of nil",cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
});})(G__15464_15473,G__15465_15474))
;
goog.object.set(G__15464_15473,G__15465_15474,G__15466_15475);

goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"number",true);

var G__15467_15476 = clojure.core.matrix.protocols.submatrix;
var G__15468_15477 = "number";
var G__15469_15478 = ((function (G__15467_15476,G__15468_15477){
return (function (m,index_ranges){
if(cljs.core.seq(index_ranges)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't take partial submatrix of a scalar number",cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
});})(G__15467_15476,G__15468_15477))
;
goog.object.set(G__15467_15476,G__15468_15477,G__15469_15478);

goog.object.set(clojure.core.matrix.protocols.PSubMatrix,"object",true);

var G__15470_15479 = clojure.core.matrix.protocols.submatrix;
var G__15471_15480 = "object";
var G__15472_15481 = ((function (G__15470_15479,G__15471_15480){
return (function (m,index_ranges){
return clojure.core.matrix.impl.wrappers.wrap_submatrix(m,index_ranges);
});})(G__15470_15479,G__15471_15480))
;
goog.object.set(G__15470_15479,G__15471_15480,G__15472_15481);
goog.object.set(clojure.core.matrix.protocols.PBroadcast,"null",true);

var G__15482_15491 = clojure.core.matrix.protocols.broadcast;
var G__15483_15492 = "null";
var G__15484_15493 = ((function (G__15482_15491,G__15483_15492){
return (function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast(m,new_shape);
});})(G__15482_15491,G__15483_15492))
;
goog.object.set(G__15482_15491,G__15483_15492,G__15484_15493);

goog.object.set(clojure.core.matrix.protocols.PBroadcast,"number",true);

var G__15485_15494 = clojure.core.matrix.protocols.broadcast;
var G__15486_15495 = "number";
var G__15487_15496 = ((function (G__15485_15494,G__15486_15495){
return (function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast(m,new_shape);
});})(G__15485_15494,G__15486_15495))
;
goog.object.set(G__15485_15494,G__15486_15495,G__15487_15496);

goog.object.set(clojure.core.matrix.protocols.PBroadcast,"object",true);

var G__15488_15497 = clojure.core.matrix.protocols.broadcast;
var G__15489_15498 = "object";
var G__15490_15499 = ((function (G__15488_15497,G__15489_15498){
return (function (m,new_shape){
var nshape = new_shape;
var mshape = clojure.core.matrix.protocols.get_shape(m);
var mdims = cljs.core.count(mshape);
var ndims = cljs.core.count(nshape);
if((((mdims === ndims)) && (clojure.core.matrix.utils.same_shape_object_QMARK_(nshape,mshape)))){
return m;
} else {
return clojure.core.matrix.impl.wrappers.wrap_broadcast(m,new_shape);

}
});})(G__15488_15497,G__15489_15498))
;
goog.object.set(G__15488_15497,G__15489_15498,G__15490_15499);
goog.object.set(clojure.core.matrix.protocols.PBroadcastLike,"null",true);

var G__15500_15506 = clojure.core.matrix.protocols.broadcast_like;
var G__15501_15507 = "null";
var G__15502_15508 = ((function (G__15500_15506,G__15501_15507){
return (function (m,a){
return clojure.core.matrix.impl.wrappers.wrap_broadcast(a,clojure.core.matrix.protocols.get_shape(m));
});})(G__15500_15506,G__15501_15507))
;
goog.object.set(G__15500_15506,G__15501_15507,G__15502_15508);

goog.object.set(clojure.core.matrix.protocols.PBroadcastLike,"object",true);

var G__15503_15509 = clojure.core.matrix.protocols.broadcast_like;
var G__15504_15510 = "object";
var G__15505_15511 = ((function (G__15503_15509,G__15504_15510){
return (function (m,a){
var sm = clojure.core.matrix.protocols.get_shape(m);
var sa = clojure.core.matrix.protocols.get_shape(a);
if(clojure.core.matrix.utils.same_shape_object_QMARK_(sm,sa)){
return a;
} else {
return clojure.core.matrix.protocols.broadcast(a,sm);
}
});})(G__15503_15509,G__15504_15510))
;
goog.object.set(G__15503_15509,G__15504_15510,G__15505_15511);
goog.object.set(clojure.core.matrix.protocols.PBroadcastCoerce,"null",true);

var G__15512_15518 = clojure.core.matrix.protocols.broadcast_coerce;
var G__15513_15519 = "null";
var G__15514_15520 = ((function (G__15512_15518,G__15513_15519){
return (function (m,a){
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.broadcast_like(m,a));
});})(G__15512_15518,G__15513_15519))
;
goog.object.set(G__15512_15518,G__15513_15519,G__15514_15520);

goog.object.set(clojure.core.matrix.protocols.PBroadcastCoerce,"object",true);

var G__15515_15521 = clojure.core.matrix.protocols.broadcast_coerce;
var G__15516_15522 = "object";
var G__15517_15523 = ((function (G__15515_15521,G__15516_15522){
return (function (m,a){
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.broadcast_like(m,a));
});})(G__15515_15521,G__15516_15522))
;
goog.object.set(G__15515_15521,G__15516_15522,G__15517_15523);
goog.object.set(clojure.core.matrix.protocols.PPack,"null",true);

var G__15524_15530 = clojure.core.matrix.protocols.pack;
var G__15525_15531 = "null";
var G__15526_15532 = ((function (G__15524_15530,G__15525_15531){
return (function (m){
return null;
});})(G__15524_15530,G__15525_15531))
;
goog.object.set(G__15524_15530,G__15525_15531,G__15526_15532);

goog.object.set(clojure.core.matrix.protocols.PPack,"object",true);

var G__15527_15533 = clojure.core.matrix.protocols.pack;
var G__15528_15534 = "object";
var G__15529_15535 = ((function (G__15527_15533,G__15528_15534){
return (function (m){
return m;
});})(G__15527_15533,G__15528_15534))
;
goog.object.set(G__15527_15533,G__15528_15534,G__15529_15535);
goog.object.set(clojure.core.matrix.protocols.PConversion,"null",true);

var G__15536_15545 = clojure.core.matrix.protocols.convert_to_nested_vectors;
var G__15537_15546 = "null";
var G__15538_15547 = ((function (G__15536_15545,G__15537_15546){
return (function (m){
return null;
});})(G__15536_15545,G__15537_15546))
;
goog.object.set(G__15536_15545,G__15537_15546,G__15538_15547);

goog.object.set(clojure.core.matrix.protocols.PConversion,"number",true);

var G__15539_15548 = clojure.core.matrix.protocols.convert_to_nested_vectors;
var G__15540_15549 = "number";
var G__15541_15550 = ((function (G__15539_15548,G__15540_15549){
return (function (m){
return m;
});})(G__15539_15548,G__15540_15549))
;
goog.object.set(G__15539_15548,G__15540_15549,G__15541_15550);

goog.object.set(clojure.core.matrix.protocols.PConversion,"object",true);

var G__15542_15551 = clojure.core.matrix.protocols.convert_to_nested_vectors;
var G__15543_15552 = "object";
var G__15544_15553 = ((function (G__15542_15551,G__15543_15552){
return (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d(m);
} else {
if(((1) === dims)){
if(((cljs.core.seq_QMARK_(m)) || (cljs.core.sequential_QMARK_(m)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_0d,m);
} else {
var n = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var i = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < n)){
var G__15554 = (i + (1));
var G__15555 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,clojure.core.matrix.protocols.get_1d(m,i));
i = G__15554;
res = G__15555;
continue;
} else {
return res;
}
break;
}
}
} else {
if(cljs.core.sequential_QMARK_(m)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(m))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors,clojure.core.matrix.protocols.get_major_slice_seq(m));
} else {
if(cljs.core.seq_QMARK_(m)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't work out how to convert to nested vectors: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
});})(G__15542_15551,G__15543_15552))
;
goog.object.set(G__15542_15551,G__15543_15552,G__15544_15553);
goog.object.set(clojure.core.matrix.protocols.PRowColMatrix,"null",true);

var G__15556_15568 = clojure.core.matrix.protocols.column_matrix;
var G__15557_15569 = "null";
var G__15558_15570 = ((function (G__15556_15568,G__15557_15569){
return (function (m,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create a column matrix from nil",cljs.core.PersistentArrayMap.EMPTY);
});})(G__15556_15568,G__15557_15569))
;
goog.object.set(G__15556_15568,G__15557_15569,G__15558_15570);

var G__15559_15571 = clojure.core.matrix.protocols.row_matrix;
var G__15560_15572 = "null";
var G__15561_15573 = ((function (G__15559_15571,G__15560_15572){
return (function (m,data){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create a column matrix from nil",cljs.core.PersistentArrayMap.EMPTY);
});})(G__15559_15571,G__15560_15572))
;
goog.object.set(G__15559_15571,G__15560_15572,G__15561_15573);

goog.object.set(clojure.core.matrix.protocols.PRowColMatrix,"object",true);

var G__15562_15574 = clojure.core.matrix.protocols.column_matrix;
var G__15563_15575 = "object";
var G__15564_15576 = ((function (G__15562_15574,G__15563_15575){
return (function (m,data){
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data)))){
return clojure.core.matrix.protocols.coerce_param(m,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,clojure.core.matrix.protocols.element_seq(data)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create a column matrix: input must be 1D vector",cljs.core.PersistentArrayMap.EMPTY);
}
});})(G__15562_15574,G__15563_15575))
;
goog.object.set(G__15562_15574,G__15563_15575,G__15564_15576);

var G__15565_15577 = clojure.core.matrix.protocols.row_matrix;
var G__15566_15578 = "object";
var G__15567_15579 = ((function (G__15565_15577,G__15566_15578){
return (function (m,data){
if(((1) === cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data)))){
return clojure.core.matrix.protocols.coerce_param(m,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[data],null)));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't create a row matrix: input must be 1D vector",cljs.core.PersistentArrayMap.EMPTY);
}
});})(G__15565_15577,G__15566_15578))
;
goog.object.set(G__15565_15577,G__15566_15578,G__15567_15579);
goog.object.set(clojure.core.matrix.protocols.PVectorView,"null",true);

var G__15580_15589 = clojure.core.matrix.protocols.as_vector;
var G__15581_15590 = "null";
var G__15582_15591 = ((function (G__15580_15589,G__15581_15590){
return (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
});})(G__15580_15589,G__15581_15590))
;
goog.object.set(G__15580_15589,G__15581_15590,G__15582_15591);

goog.object.set(clojure.core.matrix.protocols.PVectorView,"number",true);

var G__15583_15592 = clojure.core.matrix.protocols.as_vector;
var G__15584_15593 = "number";
var G__15585_15594 = ((function (G__15583_15592,G__15584_15593){
return (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
});})(G__15583_15592,G__15584_15593))
;
goog.object.set(G__15583_15592,G__15584_15593,G__15585_15594);

goog.object.set(clojure.core.matrix.protocols.PVectorView,"object",true);

var G__15586_15595 = clojure.core.matrix.protocols.as_vector;
var G__15587_15596 = "object";
var G__15588_15597 = ((function (G__15586_15595,G__15587_15596){
return (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if((dims === (0))){
return clojure.core.matrix.protocols.broadcast(clojure.core.matrix.impl.wrappers.wrap_nd(m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
} else {
if((dims === (1))){
return m;
} else {
if(cljs.core.not(clojure.core.matrix.protocols.is_mutable_QMARK_(m))){
return clojure.core.matrix.protocols.to_vector(m);
} else {
return null;

}
}
}
});})(G__15586_15595,G__15587_15596))
;
goog.object.set(G__15586_15595,G__15587_15596,G__15588_15597);
goog.object.set(clojure.core.matrix.protocols.PVectorisable,"null",true);

var G__15598_15607 = clojure.core.matrix.protocols.to_vector;
var G__15599_15608 = "null";
var G__15600_15609 = ((function (G__15598_15607,G__15599_15608){
return (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
});})(G__15598_15607,G__15599_15608))
;
goog.object.set(G__15598_15607,G__15599_15608,G__15600_15609);

goog.object.set(clojure.core.matrix.protocols.PVectorisable,"number",true);

var G__15601_15610 = clojure.core.matrix.protocols.to_vector;
var G__15602_15611 = "number";
var G__15603_15612 = ((function (G__15601_15610,G__15602_15611){
return (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
});})(G__15601_15610,G__15602_15611))
;
goog.object.set(G__15601_15610,G__15602_15611,G__15603_15612);

goog.object.set(clojure.core.matrix.protocols.PVectorisable,"object",true);

var G__15604_15613 = clojure.core.matrix.protocols.to_vector;
var G__15605_15614 = "object";
var G__15606_15615 = ((function (G__15604_15613,G__15605_15614){
return (function (m){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
if(((0) === dims)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.protocols.get_0d(m)], null);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(m))){
return clojure.core.matrix.protocols.clone(m);
} else {
return cljs.core.vec(clojure.core.matrix.protocols.element_seq(m));

}
}
});})(G__15604_15613,G__15605_15614))
;
goog.object.set(G__15604_15613,G__15605_15614,G__15606_15615);
goog.object.set(clojure.core.matrix.protocols.PReshaping,"null",true);

var G__15617_15626 = clojure.core.matrix.protocols.reshape;
var G__15618_15627 = "null";
var G__15619_15628 = ((function (G__15617_15626,G__15618_15627){
return (function (m,shape){
return clojure.core.matrix.protocols.reshape(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),shape);
});})(G__15617_15626,G__15618_15627))
;
goog.object.set(G__15617_15626,G__15618_15627,G__15619_15628);

goog.object.set(clojure.core.matrix.protocols.PReshaping,"number",true);

var G__15620_15629 = clojure.core.matrix.protocols.reshape;
var G__15621_15630 = "number";
var G__15622_15631 = ((function (G__15620_15629,G__15621_15630){
return (function (m,shape){
return clojure.core.matrix.protocols.reshape(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null),shape);
});})(G__15620_15629,G__15621_15630))
;
goog.object.set(G__15620_15629,G__15621_15630,G__15622_15631);

goog.object.set(clojure.core.matrix.protocols.PReshaping,"object",true);

var G__15623_15632 = clojure.core.matrix.protocols.reshape;
var G__15624_15633 = "object";
var G__15625_15634 = ((function (G__15623_15632,G__15624_15633){
return (function (m,shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape(m),shape)){
return m;
} else {
var gv = clojure.core.matrix.protocols.generic_value(m);
var es = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq(m),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(gv));
var partition_shape = ((function (gv,es,G__15623_15632,G__15624_15633){
return (function clojure$core$matrix$impl$defaults$partition_shape(es__$1,shape__$1){
var temp__5718__auto__ = cljs.core.seq(shape__$1);
if(temp__5718__auto__){
var s = temp__5718__auto__;
var ns = cljs.core.next(s);
var plen = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,(1),ns);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns,plen,s,temp__5718__auto__,gv,es,G__15623_15632,G__15624_15633){
return (function (p1__15616_SHARP_){
return clojure$core$matrix$impl$defaults$partition_shape(p1__15616_SHARP_,ns);
});})(ns,plen,s,temp__5718__auto__,gv,es,G__15623_15632,G__15624_15633))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(plen,es__$1));
} else {
return cljs.core.first(es__$1);
}
});})(gv,es,G__15623_15632,G__15624_15633))
;
var temp__5718__auto__ = cljs.core.seq(shape);
if(temp__5718__auto__){
var shape__$1 = temp__5718__auto__;
var fs = cljs.core.long$(cljs.core.first(shape__$1));
var parts = partition_shape(es,shape__$1);
var or__4131__auto__ = clojure.core.matrix.protocols.construct_matrix(m,cljs.core.take.cljs$core$IFn$_invoke$arity$2(fs,parts));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2(fs,parts));
}
} else {
return cljs.core.first(es);
}
}
});})(G__15623_15632,G__15624_15633))
;
goog.object.set(G__15623_15632,G__15624_15633,G__15625_15634);
goog.object.set(clojure.core.matrix.protocols.PReshapeView,"null",true);

var G__15635_15644 = clojure.core.matrix.protocols.reshape_view;
var G__15636_15645 = "null";
var G__15637_15646 = ((function (G__15635_15644,G__15636_15645){
return (function (m,shape){
return clojure.core.matrix.protocols.broadcast(null,shape);
});})(G__15635_15644,G__15636_15645))
;
goog.object.set(G__15635_15644,G__15636_15645,G__15637_15646);

goog.object.set(clojure.core.matrix.protocols.PReshapeView,"number",true);

var G__15638_15647 = clojure.core.matrix.protocols.reshape_view;
var G__15639_15648 = "number";
var G__15640_15649 = ((function (G__15638_15647,G__15639_15648){
return (function (m,shape){
return clojure.core.matrix.protocols.broadcast(m,shape);
});})(G__15638_15647,G__15639_15648))
;
goog.object.set(G__15638_15647,G__15639_15648,G__15640_15649);

goog.object.set(clojure.core.matrix.protocols.PReshapeView,"object",true);

var G__15641_15650 = clojure.core.matrix.protocols.reshape_view;
var G__15642_15651 = "object";
var G__15643_15652 = ((function (G__15641_15650,G__15642_15651){
return (function (m,shape){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_(m))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["TODO: ","reshape-view not supported on mutable array of type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((clojure.core.matrix.impl.defaults.class$.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.defaults.class$.cljs$core$IFn$_invoke$arity$1(m) : clojure.core.matrix.impl.defaults.class$.call(null,m)))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.reshape(m,shape);
}
});})(G__15641_15650,G__15642_15651))
;
goog.object.set(G__15641_15650,G__15642_15651,G__15643_15652);
goog.object.set(clojure.core.matrix.protocols.PCoercion,"null",true);

var G__15653_15662 = clojure.core.matrix.protocols.coerce_param;
var G__15654_15663 = "null";
var G__15655_15664 = ((function (G__15653_15662,G__15654_15663){
return (function (m,param){
return param;
});})(G__15653_15662,G__15654_15663))
;
goog.object.set(G__15653_15662,G__15654_15663,G__15655_15664);

goog.object.set(clojure.core.matrix.protocols.PCoercion,"number",true);

var G__15656_15665 = clojure.core.matrix.protocols.coerce_param;
var G__15657_15666 = "number";
var G__15658_15667 = ((function (G__15656_15665,G__15657_15666){
return (function (m,param){
return param;
});})(G__15656_15665,G__15657_15666))
;
goog.object.set(G__15656_15665,G__15657_15666,G__15658_15667);

goog.object.set(clojure.core.matrix.protocols.PCoercion,"object",true);

var G__15659_15668 = clojure.core.matrix.protocols.coerce_param;
var G__15660_15669 = "object";
var G__15661_15670 = ((function (G__15659_15668,G__15660_15669){
return (function (m,param){
var param__$1 = (((param instanceof cljs.core.ISeq))?clojure.core.matrix.protocols.convert_to_nested_vectors(param):param);
var or__4131__auto__ = clojure.core.matrix.protocols.construct_matrix(m,param__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return param__$1;
}
});})(G__15659_15668,G__15660_15669))
;
goog.object.set(G__15659_15668,G__15660_15669,G__15661_15670);
goog.object.set(clojure.core.matrix.protocols.PExponent,"number",true);

var G__15679_15685 = clojure.core.matrix.protocols.element_pow;
var G__15680_15686 = "number";
var G__15681_15687 = ((function (G__15679_15685,G__15680_15686){
return (function (m,exponent){
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(exponent))){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(exponent,((function (G__15679_15685,G__15680_15686){
return (function (p1__15672_SHARP_){
return Math.pow(m,p1__15672_SHARP_);
});})(G__15679_15685,G__15680_15686))
);
} else {
return Math.pow(m,exponent);
}
});})(G__15679_15685,G__15680_15686))
;
goog.object.set(G__15679_15685,G__15680_15686,G__15681_15687);

goog.object.set(clojure.core.matrix.protocols.PExponent,"object",true);

var G__15682_15688 = clojure.core.matrix.protocols.element_pow;
var G__15683_15689 = "object";
var G__15684_15690 = ((function (G__15682_15688,G__15683_15689){
return (function (m,exponent){
if(cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(exponent))){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,((function (G__15682_15688,G__15683_15689){
return (function (p1__15676_SHARP_,p2__15677_SHARP_){
return Math.pow(p1__15676_SHARP_,p2__15677_SHARP_);
});})(G__15682_15688,G__15683_15689))
,exponent);
} else {
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15682_15688,G__15683_15689){
return (function (p1__15678_SHARP_){
return Math.pow(p1__15678_SHARP_,exponent);
});})(G__15682_15688,G__15683_15689))
);
}
});})(G__15682_15688,G__15683_15689))
;
goog.object.set(G__15682_15688,G__15683_15689,G__15684_15690);
goog.object.set(clojure.core.matrix.protocols.PSquare,"number",true);

var G__15691_15697 = clojure.core.matrix.protocols.square;
var G__15692_15698 = "number";
var G__15693_15699 = ((function (G__15691_15697,G__15692_15698){
return (function (m){
return (m * m);
});})(G__15691_15697,G__15692_15698))
;
goog.object.set(G__15691_15697,G__15692_15698,G__15693_15699);

goog.object.set(clojure.core.matrix.protocols.PSquare,"object",true);

var G__15694_15700 = clojure.core.matrix.protocols.square;
var G__15695_15701 = "object";
var G__15696_15702 = ((function (G__15694_15700,G__15695_15701){
return (function (m){
return clojure.core.matrix.protocols.element_multiply(m,m);
});})(G__15694_15700,G__15695_15701))
;
goog.object.set(G__15694_15700,G__15695_15701,G__15696_15702);
goog.object.set(clojure.core.matrix.protocols.PLogistic,"number",true);

var G__15703_15710 = clojure.core.matrix.protocols.logistic;
var G__15704_15711 = "number";
var G__15705_15712 = ((function (G__15703_15710,G__15704_15711){
return (function (m){
var e_t = (function (){var G__15706 = (- m);
return Math.exp(G__15706);
})();
return (1.0 / (1.0 + e_t));
});})(G__15703_15710,G__15704_15711))
;
goog.object.set(G__15703_15710,G__15704_15711,G__15705_15712);

goog.object.set(clojure.core.matrix.protocols.PLogistic,"object",true);

var G__15707_15713 = clojure.core.matrix.protocols.logistic;
var G__15708_15714 = "object";
var G__15709_15715 = ((function (G__15707_15713,G__15708_15714){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.logistic_fn);
});})(G__15707_15713,G__15708_15714))
;
goog.object.set(G__15707_15713,G__15708_15714,G__15709_15715);
goog.object.set(clojure.core.matrix.protocols.PLogisticMutable,"object",true);

var G__15716_15719 = clojure.core.matrix.protocols.logistic_BANG_;
var G__15717_15720 = "object";
var G__15718_15721 = ((function (G__15716_15719,G__15717_15720){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.logistic_fn);
});})(G__15716_15719,G__15717_15720))
;
goog.object.set(G__15716_15719,G__15717_15720,G__15718_15721);
goog.object.set(clojure.core.matrix.protocols.PSoftplus,"number",true);

var G__15722_15730 = clojure.core.matrix.protocols.softplus;
var G__15723_15731 = "number";
var G__15724_15732 = ((function (G__15722_15730,G__15723_15731){
return (function (m){
var et = (function (){var G__15725 = m;
return Math.exp(G__15725);
})();
var G__15726 = (1.0 + et);
return Math.log(G__15726);
});})(G__15722_15730,G__15723_15731))
;
goog.object.set(G__15722_15730,G__15723_15731,G__15724_15732);

goog.object.set(clojure.core.matrix.protocols.PSoftplus,"object",true);

var G__15727_15733 = clojure.core.matrix.protocols.softplus;
var G__15728_15734 = "object";
var G__15729_15735 = ((function (G__15727_15733,G__15728_15734){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.softplus_fn);
});})(G__15727_15733,G__15728_15734))
;
goog.object.set(G__15727_15733,G__15728_15734,G__15729_15735);
goog.object.set(clojure.core.matrix.protocols.PSoftmax,"object",true);

var G__15736_15739 = clojure.core.matrix.protocols.softmax;
var G__15737_15740 = "object";
var G__15738_15741 = ((function (G__15736_15739,G__15737_15740){
return (function (m){
var em = clojure.core.matrix.protocols.exp(m);
return clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$2(em,clojure.core.matrix.protocols.element_sum(em));
});})(G__15736_15739,G__15737_15740))
;
goog.object.set(G__15736_15739,G__15737_15740,G__15738_15741);
goog.object.set(clojure.core.matrix.protocols.PSoftmaxMutable,"object",true);

var G__15742_15745 = clojure.core.matrix.protocols.softmax_BANG_;
var G__15743_15746 = "object";
var G__15744_15747 = ((function (G__15742_15745,G__15743_15746){
return (function (m){
clojure.core.matrix.protocols.exp_BANG_(m);

clojure.core.matrix.protocols.element_divide_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.element_sum(m));

return m;
});})(G__15742_15745,G__15743_15746))
;
goog.object.set(G__15742_15745,G__15743_15746,G__15744_15747);
goog.object.set(clojure.core.matrix.protocols.PSoftplusMutable,"object",true);

var G__15748_15751 = clojure.core.matrix.protocols.softplus_BANG_;
var G__15749_15752 = "object";
var G__15750_15753 = ((function (G__15748_15751,G__15749_15752){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.softplus_fn);
});})(G__15748_15751,G__15749_15752))
;
goog.object.set(G__15748_15751,G__15749_15752,G__15750_15753);
goog.object.set(clojure.core.matrix.protocols.PReLU,"number",true);

var G__15754_15762 = clojure.core.matrix.protocols.relu;
var G__15755_15763 = "number";
var G__15756_15764 = ((function (G__15754_15762,G__15755_15763){
return (function (m){
var G__15757 = 0.0;
var G__15758 = m;
return Math.max(G__15757,G__15758);
});})(G__15754_15762,G__15755_15763))
;
goog.object.set(G__15754_15762,G__15755_15763,G__15756_15764);

goog.object.set(clojure.core.matrix.protocols.PReLU,"object",true);

var G__15759_15765 = clojure.core.matrix.protocols.relu;
var G__15760_15766 = "object";
var G__15761_15767 = ((function (G__15759_15765,G__15760_15766){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.relu_fn);
});})(G__15759_15765,G__15760_15766))
;
goog.object.set(G__15759_15765,G__15760_15766,G__15761_15767);
goog.object.set(clojure.core.matrix.protocols.PReLUMutable,"object",true);

var G__15768_15771 = clojure.core.matrix.protocols.relu_BANG_;
var G__15769_15772 = "object";
var G__15770_15773 = ((function (G__15768_15771,G__15769_15772){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.relu_fn);
});})(G__15768_15771,G__15769_15772))
;
goog.object.set(G__15768_15771,G__15769_15772,G__15770_15773);
goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"number",true);

var G__15782_16028 = clojure.core.matrix.protocols.abs;
var G__15783_16029 = "number";
var G__15784_16030 = ((function (G__15782_16028,G__15783_16029){
return (function (m){
var G__15785 = m;
return Math.abs(G__15785);
});})(G__15782_16028,G__15783_16029))
;
goog.object.set(G__15782_16028,G__15783_16029,G__15784_16030);

var G__15786_16031 = clojure.core.matrix.protocols.acos;
var G__15787_16032 = "number";
var G__15788_16033 = ((function (G__15786_16031,G__15787_16032){
return (function (m){
var G__15789 = m;
return Math.acos(G__15789);
});})(G__15786_16031,G__15787_16032))
;
goog.object.set(G__15786_16031,G__15787_16032,G__15788_16033);

var G__15790_16034 = clojure.core.matrix.protocols.asin;
var G__15791_16035 = "number";
var G__15792_16036 = ((function (G__15790_16034,G__15791_16035){
return (function (m){
var G__15793 = m;
return Math.asin(G__15793);
});})(G__15790_16034,G__15791_16035))
;
goog.object.set(G__15790_16034,G__15791_16035,G__15792_16036);

var G__15794_16037 = clojure.core.matrix.protocols.atan;
var G__15795_16038 = "number";
var G__15796_16039 = ((function (G__15794_16037,G__15795_16038){
return (function (m){
var G__15797 = m;
return Math.atan(G__15797);
});})(G__15794_16037,G__15795_16038))
;
goog.object.set(G__15794_16037,G__15795_16038,G__15796_16039);

var G__15798_16040 = clojure.core.matrix.protocols.cbrt;
var G__15799_16041 = "number";
var G__15800_16042 = ((function (G__15798_16040,G__15799_16041){
return (function (m){
var G__15801 = m;
return Math.cbrt(G__15801);
});})(G__15798_16040,G__15799_16041))
;
goog.object.set(G__15798_16040,G__15799_16041,G__15800_16042);

var G__15802_16043 = clojure.core.matrix.protocols.ceil;
var G__15803_16044 = "number";
var G__15804_16045 = ((function (G__15802_16043,G__15803_16044){
return (function (m){
var G__15805 = m;
return Math.ceil(G__15805);
});})(G__15802_16043,G__15803_16044))
;
goog.object.set(G__15802_16043,G__15803_16044,G__15804_16045);

var G__15806_16046 = clojure.core.matrix.protocols.cos;
var G__15807_16047 = "number";
var G__15808_16048 = ((function (G__15806_16046,G__15807_16047){
return (function (m){
var G__15809 = m;
return Math.cos(G__15809);
});})(G__15806_16046,G__15807_16047))
;
goog.object.set(G__15806_16046,G__15807_16047,G__15808_16048);

var G__15810_16049 = clojure.core.matrix.protocols.cosh;
var G__15811_16050 = "number";
var G__15812_16051 = ((function (G__15810_16049,G__15811_16050){
return (function (m){
var G__15813 = m;
return Math.cosh(G__15813);
});})(G__15810_16049,G__15811_16050))
;
goog.object.set(G__15810_16049,G__15811_16050,G__15812_16051);

var G__15814_16052 = clojure.core.matrix.protocols.exp;
var G__15815_16053 = "number";
var G__15816_16054 = ((function (G__15814_16052,G__15815_16053){
return (function (m){
var G__15817 = m;
return Math.exp(G__15817);
});})(G__15814_16052,G__15815_16053))
;
goog.object.set(G__15814_16052,G__15815_16053,G__15816_16054);

var G__15818_16055 = clojure.core.matrix.protocols.floor;
var G__15819_16056 = "number";
var G__15820_16057 = ((function (G__15818_16055,G__15819_16056){
return (function (m){
var G__15821 = m;
return Math.floor(G__15821);
});})(G__15818_16055,G__15819_16056))
;
goog.object.set(G__15818_16055,G__15819_16056,G__15820_16057);

var G__15822_16058 = clojure.core.matrix.protocols.log;
var G__15823_16059 = "number";
var G__15824_16060 = ((function (G__15822_16058,G__15823_16059){
return (function (m){
var G__15825 = m;
return Math.log(G__15825);
});})(G__15822_16058,G__15823_16059))
;
goog.object.set(G__15822_16058,G__15823_16059,G__15824_16060);

var G__15826_16061 = clojure.core.matrix.protocols.log10;
var G__15827_16062 = "number";
var G__15828_16063 = ((function (G__15826_16061,G__15827_16062){
return (function (m){
var G__15829 = m;
return Math.log10(G__15829);
});})(G__15826_16061,G__15827_16062))
;
goog.object.set(G__15826_16061,G__15827_16062,G__15828_16063);

var G__15830_16064 = clojure.core.matrix.protocols.round;
var G__15831_16065 = "number";
var G__15832_16066 = ((function (G__15830_16064,G__15831_16065){
return (function (m){
var G__15833 = m;
return Math.rint(G__15833);
});})(G__15830_16064,G__15831_16065))
;
goog.object.set(G__15830_16064,G__15831_16065,G__15832_16066);

var G__15834_16067 = clojure.core.matrix.protocols.signum;
var G__15835_16068 = "number";
var G__15836_16069 = ((function (G__15834_16067,G__15835_16068){
return (function (m){
var G__15837 = m;
return Math.sign(G__15837);
});})(G__15834_16067,G__15835_16068))
;
goog.object.set(G__15834_16067,G__15835_16068,G__15836_16069);

var G__15838_16070 = clojure.core.matrix.protocols.sin;
var G__15839_16071 = "number";
var G__15840_16072 = ((function (G__15838_16070,G__15839_16071){
return (function (m){
var G__15841 = m;
return Math.sin(G__15841);
});})(G__15838_16070,G__15839_16071))
;
goog.object.set(G__15838_16070,G__15839_16071,G__15840_16072);

var G__15842_16073 = clojure.core.matrix.protocols.sinh;
var G__15843_16074 = "number";
var G__15844_16075 = ((function (G__15842_16073,G__15843_16074){
return (function (m){
var G__15845 = m;
return Math.sinh(G__15845);
});})(G__15842_16073,G__15843_16074))
;
goog.object.set(G__15842_16073,G__15843_16074,G__15844_16075);

var G__15846_16076 = clojure.core.matrix.protocols.sqrt;
var G__15847_16077 = "number";
var G__15848_16078 = ((function (G__15846_16076,G__15847_16077){
return (function (m){
var G__15849 = m;
return Math.sqrt(G__15849);
});})(G__15846_16076,G__15847_16077))
;
goog.object.set(G__15846_16076,G__15847_16077,G__15848_16078);

var G__15850_16079 = clojure.core.matrix.protocols.tan;
var G__15851_16080 = "number";
var G__15852_16081 = ((function (G__15850_16079,G__15851_16080){
return (function (m){
var G__15853 = m;
return Math.tan(G__15853);
});})(G__15850_16079,G__15851_16080))
;
goog.object.set(G__15850_16079,G__15851_16080,G__15852_16081);

var G__15854_16082 = clojure.core.matrix.protocols.tanh;
var G__15855_16083 = "number";
var G__15856_16084 = ((function (G__15854_16082,G__15855_16083){
return (function (m){
var G__15857 = m;
return Math.tanh(G__15857);
});})(G__15854_16082,G__15855_16083))
;
goog.object.set(G__15854_16082,G__15855_16083,G__15856_16084);

var G__15858_16085 = clojure.core.matrix.protocols.to_degrees;
var G__15859_16086 = "number";
var G__15860_16087 = ((function (G__15858_16085,G__15859_16086){
return (function (m){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(m);
});})(G__15858_16085,G__15859_16086))
;
goog.object.set(G__15858_16085,G__15859_16086,G__15860_16087);

var G__15861_16088 = clojure.core.matrix.protocols.to_radians;
var G__15862_16089 = "number";
var G__15863_16090 = ((function (G__15861_16088,G__15862_16089){
return (function (m){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(m);
});})(G__15861_16088,G__15862_16089))
;
goog.object.set(G__15861_16088,G__15862_16089,G__15863_16090);

goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"object",true);

var G__15864_16091 = clojure.core.matrix.protocols.abs;
var G__15865_16092 = "object";
var G__15866_16093 = ((function (G__15864_16091,G__15865_16092){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15864_16091,G__15865_16092){
return (function (p1__12714__12715__auto__){
var G__15867 = p1__12714__12715__auto__;
return Math.abs(G__15867);
});})(G__15864_16091,G__15865_16092))
);
});})(G__15864_16091,G__15865_16092))
;
goog.object.set(G__15864_16091,G__15865_16092,G__15866_16093);

var G__15868_16094 = clojure.core.matrix.protocols.acos;
var G__15869_16095 = "object";
var G__15870_16096 = ((function (G__15868_16094,G__15869_16095){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15868_16094,G__15869_16095){
return (function (p1__12714__12715__auto__){
var G__15871 = p1__12714__12715__auto__;
return Math.acos(G__15871);
});})(G__15868_16094,G__15869_16095))
);
});})(G__15868_16094,G__15869_16095))
;
goog.object.set(G__15868_16094,G__15869_16095,G__15870_16096);

var G__15872_16097 = clojure.core.matrix.protocols.asin;
var G__15873_16098 = "object";
var G__15874_16099 = ((function (G__15872_16097,G__15873_16098){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15872_16097,G__15873_16098){
return (function (p1__12714__12715__auto__){
var G__15875 = p1__12714__12715__auto__;
return Math.asin(G__15875);
});})(G__15872_16097,G__15873_16098))
);
});})(G__15872_16097,G__15873_16098))
;
goog.object.set(G__15872_16097,G__15873_16098,G__15874_16099);

var G__15876_16100 = clojure.core.matrix.protocols.atan;
var G__15877_16101 = "object";
var G__15878_16102 = ((function (G__15876_16100,G__15877_16101){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15876_16100,G__15877_16101){
return (function (p1__12714__12715__auto__){
var G__15879 = p1__12714__12715__auto__;
return Math.atan(G__15879);
});})(G__15876_16100,G__15877_16101))
);
});})(G__15876_16100,G__15877_16101))
;
goog.object.set(G__15876_16100,G__15877_16101,G__15878_16102);

var G__15880_16103 = clojure.core.matrix.protocols.cbrt;
var G__15881_16104 = "object";
var G__15882_16105 = ((function (G__15880_16103,G__15881_16104){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15880_16103,G__15881_16104){
return (function (p1__12714__12715__auto__){
var G__15883 = p1__12714__12715__auto__;
return Math.cbrt(G__15883);
});})(G__15880_16103,G__15881_16104))
);
});})(G__15880_16103,G__15881_16104))
;
goog.object.set(G__15880_16103,G__15881_16104,G__15882_16105);

var G__15884_16106 = clojure.core.matrix.protocols.ceil;
var G__15885_16107 = "object";
var G__15886_16108 = ((function (G__15884_16106,G__15885_16107){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15884_16106,G__15885_16107){
return (function (p1__12714__12715__auto__){
var G__15887 = p1__12714__12715__auto__;
return Math.ceil(G__15887);
});})(G__15884_16106,G__15885_16107))
);
});})(G__15884_16106,G__15885_16107))
;
goog.object.set(G__15884_16106,G__15885_16107,G__15886_16108);

var G__15888_16109 = clojure.core.matrix.protocols.cos;
var G__15889_16110 = "object";
var G__15890_16111 = ((function (G__15888_16109,G__15889_16110){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15888_16109,G__15889_16110){
return (function (p1__12714__12715__auto__){
var G__15891 = p1__12714__12715__auto__;
return Math.cos(G__15891);
});})(G__15888_16109,G__15889_16110))
);
});})(G__15888_16109,G__15889_16110))
;
goog.object.set(G__15888_16109,G__15889_16110,G__15890_16111);

var G__15892_16112 = clojure.core.matrix.protocols.cosh;
var G__15893_16113 = "object";
var G__15894_16114 = ((function (G__15892_16112,G__15893_16113){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15892_16112,G__15893_16113){
return (function (p1__12714__12715__auto__){
var G__15895 = p1__12714__12715__auto__;
return Math.cosh(G__15895);
});})(G__15892_16112,G__15893_16113))
);
});})(G__15892_16112,G__15893_16113))
;
goog.object.set(G__15892_16112,G__15893_16113,G__15894_16114);

var G__15896_16115 = clojure.core.matrix.protocols.exp;
var G__15897_16116 = "object";
var G__15898_16117 = ((function (G__15896_16115,G__15897_16116){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15896_16115,G__15897_16116){
return (function (p1__12714__12715__auto__){
var G__15899 = p1__12714__12715__auto__;
return Math.exp(G__15899);
});})(G__15896_16115,G__15897_16116))
);
});})(G__15896_16115,G__15897_16116))
;
goog.object.set(G__15896_16115,G__15897_16116,G__15898_16117);

var G__15900_16118 = clojure.core.matrix.protocols.floor;
var G__15901_16119 = "object";
var G__15902_16120 = ((function (G__15900_16118,G__15901_16119){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15900_16118,G__15901_16119){
return (function (p1__12714__12715__auto__){
var G__15903 = p1__12714__12715__auto__;
return Math.floor(G__15903);
});})(G__15900_16118,G__15901_16119))
);
});})(G__15900_16118,G__15901_16119))
;
goog.object.set(G__15900_16118,G__15901_16119,G__15902_16120);

var G__15904_16121 = clojure.core.matrix.protocols.log;
var G__15905_16122 = "object";
var G__15906_16123 = ((function (G__15904_16121,G__15905_16122){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15904_16121,G__15905_16122){
return (function (p1__12714__12715__auto__){
var G__15907 = p1__12714__12715__auto__;
return Math.log(G__15907);
});})(G__15904_16121,G__15905_16122))
);
});})(G__15904_16121,G__15905_16122))
;
goog.object.set(G__15904_16121,G__15905_16122,G__15906_16123);

var G__15908_16124 = clojure.core.matrix.protocols.log10;
var G__15909_16125 = "object";
var G__15910_16126 = ((function (G__15908_16124,G__15909_16125){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15908_16124,G__15909_16125){
return (function (p1__12714__12715__auto__){
var G__15911 = p1__12714__12715__auto__;
return Math.log10(G__15911);
});})(G__15908_16124,G__15909_16125))
);
});})(G__15908_16124,G__15909_16125))
;
goog.object.set(G__15908_16124,G__15909_16125,G__15910_16126);

var G__15912_16127 = clojure.core.matrix.protocols.round;
var G__15913_16128 = "object";
var G__15914_16129 = ((function (G__15912_16127,G__15913_16128){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15912_16127,G__15913_16128){
return (function (p1__12714__12715__auto__){
var G__15915 = p1__12714__12715__auto__;
return Math.rint(G__15915);
});})(G__15912_16127,G__15913_16128))
);
});})(G__15912_16127,G__15913_16128))
;
goog.object.set(G__15912_16127,G__15913_16128,G__15914_16129);

var G__15916_16130 = clojure.core.matrix.protocols.signum;
var G__15917_16131 = "object";
var G__15918_16132 = ((function (G__15916_16130,G__15917_16131){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15916_16130,G__15917_16131){
return (function (p1__12714__12715__auto__){
var G__15919 = p1__12714__12715__auto__;
return Math.sign(G__15919);
});})(G__15916_16130,G__15917_16131))
);
});})(G__15916_16130,G__15917_16131))
;
goog.object.set(G__15916_16130,G__15917_16131,G__15918_16132);

var G__15920_16133 = clojure.core.matrix.protocols.sin;
var G__15921_16134 = "object";
var G__15922_16135 = ((function (G__15920_16133,G__15921_16134){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15920_16133,G__15921_16134){
return (function (p1__12714__12715__auto__){
var G__15923 = p1__12714__12715__auto__;
return Math.sin(G__15923);
});})(G__15920_16133,G__15921_16134))
);
});})(G__15920_16133,G__15921_16134))
;
goog.object.set(G__15920_16133,G__15921_16134,G__15922_16135);

var G__15924_16136 = clojure.core.matrix.protocols.sinh;
var G__15925_16137 = "object";
var G__15926_16138 = ((function (G__15924_16136,G__15925_16137){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15924_16136,G__15925_16137){
return (function (p1__12714__12715__auto__){
var G__15927 = p1__12714__12715__auto__;
return Math.sinh(G__15927);
});})(G__15924_16136,G__15925_16137))
);
});})(G__15924_16136,G__15925_16137))
;
goog.object.set(G__15924_16136,G__15925_16137,G__15926_16138);

var G__15928_16139 = clojure.core.matrix.protocols.sqrt;
var G__15929_16140 = "object";
var G__15930_16141 = ((function (G__15928_16139,G__15929_16140){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15928_16139,G__15929_16140){
return (function (p1__12714__12715__auto__){
var G__15931 = p1__12714__12715__auto__;
return Math.sqrt(G__15931);
});})(G__15928_16139,G__15929_16140))
);
});})(G__15928_16139,G__15929_16140))
;
goog.object.set(G__15928_16139,G__15929_16140,G__15930_16141);

var G__15932_16142 = clojure.core.matrix.protocols.tan;
var G__15933_16143 = "object";
var G__15934_16144 = ((function (G__15932_16142,G__15933_16143){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15932_16142,G__15933_16143){
return (function (p1__12714__12715__auto__){
var G__15935 = p1__12714__12715__auto__;
return Math.tan(G__15935);
});})(G__15932_16142,G__15933_16143))
);
});})(G__15932_16142,G__15933_16143))
;
goog.object.set(G__15932_16142,G__15933_16143,G__15934_16144);

var G__15936_16145 = clojure.core.matrix.protocols.tanh;
var G__15937_16146 = "object";
var G__15938_16147 = ((function (G__15936_16145,G__15937_16146){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15936_16145,G__15937_16146){
return (function (p1__12714__12715__auto__){
var G__15939 = p1__12714__12715__auto__;
return Math.tanh(G__15939);
});})(G__15936_16145,G__15937_16146))
);
});})(G__15936_16145,G__15937_16146))
;
goog.object.set(G__15936_16145,G__15937_16146,G__15938_16147);

var G__15940_16148 = clojure.core.matrix.protocols.to_degrees;
var G__15941_16149 = "object";
var G__15942_16150 = ((function (G__15940_16148,G__15941_16149){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15940_16148,G__15941_16149){
return (function (p1__12714__12715__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(p1__12714__12715__auto__);
});})(G__15940_16148,G__15941_16149))
);
});})(G__15940_16148,G__15941_16149))
;
goog.object.set(G__15940_16148,G__15941_16149,G__15942_16150);

var G__15943_16151 = clojure.core.matrix.protocols.to_radians;
var G__15944_16152 = "object";
var G__15945_16153 = ((function (G__15943_16151,G__15944_16152){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15943_16151,G__15944_16152){
return (function (p1__12714__12715__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(p1__12714__12715__auto__);
});})(G__15943_16151,G__15944_16152))
);
});})(G__15943_16151,G__15944_16152))
;
goog.object.set(G__15943_16151,G__15944_16152,G__15945_16153);

goog.object.set(clojure.core.matrix.protocols.PMathsFunctions,"array",true);

var G__15946_16154 = clojure.core.matrix.protocols.abs;
var G__15947_16155 = "array";
var G__15948_16156 = ((function (G__15946_16154,G__15947_16155){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15946_16154,G__15947_16155){
return (function (p1__12716__12717__auto__){
var G__15949 = p1__12716__12717__auto__;
return Math.abs(G__15949);
});})(G__15946_16154,G__15947_16155))
);
});})(G__15946_16154,G__15947_16155))
;
goog.object.set(G__15946_16154,G__15947_16155,G__15948_16156);

var G__15950_16157 = clojure.core.matrix.protocols.acos;
var G__15951_16158 = "array";
var G__15952_16159 = ((function (G__15950_16157,G__15951_16158){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15950_16157,G__15951_16158){
return (function (p1__12716__12717__auto__){
var G__15953 = p1__12716__12717__auto__;
return Math.acos(G__15953);
});})(G__15950_16157,G__15951_16158))
);
});})(G__15950_16157,G__15951_16158))
;
goog.object.set(G__15950_16157,G__15951_16158,G__15952_16159);

var G__15954_16160 = clojure.core.matrix.protocols.asin;
var G__15955_16161 = "array";
var G__15956_16162 = ((function (G__15954_16160,G__15955_16161){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15954_16160,G__15955_16161){
return (function (p1__12716__12717__auto__){
var G__15957 = p1__12716__12717__auto__;
return Math.asin(G__15957);
});})(G__15954_16160,G__15955_16161))
);
});})(G__15954_16160,G__15955_16161))
;
goog.object.set(G__15954_16160,G__15955_16161,G__15956_16162);

var G__15958_16163 = clojure.core.matrix.protocols.atan;
var G__15959_16164 = "array";
var G__15960_16165 = ((function (G__15958_16163,G__15959_16164){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15958_16163,G__15959_16164){
return (function (p1__12716__12717__auto__){
var G__15961 = p1__12716__12717__auto__;
return Math.atan(G__15961);
});})(G__15958_16163,G__15959_16164))
);
});})(G__15958_16163,G__15959_16164))
;
goog.object.set(G__15958_16163,G__15959_16164,G__15960_16165);

var G__15962_16166 = clojure.core.matrix.protocols.cbrt;
var G__15963_16167 = "array";
var G__15964_16168 = ((function (G__15962_16166,G__15963_16167){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15962_16166,G__15963_16167){
return (function (p1__12716__12717__auto__){
var G__15965 = p1__12716__12717__auto__;
return Math.cbrt(G__15965);
});})(G__15962_16166,G__15963_16167))
);
});})(G__15962_16166,G__15963_16167))
;
goog.object.set(G__15962_16166,G__15963_16167,G__15964_16168);

var G__15966_16169 = clojure.core.matrix.protocols.ceil;
var G__15967_16170 = "array";
var G__15968_16171 = ((function (G__15966_16169,G__15967_16170){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15966_16169,G__15967_16170){
return (function (p1__12716__12717__auto__){
var G__15969 = p1__12716__12717__auto__;
return Math.ceil(G__15969);
});})(G__15966_16169,G__15967_16170))
);
});})(G__15966_16169,G__15967_16170))
;
goog.object.set(G__15966_16169,G__15967_16170,G__15968_16171);

var G__15970_16172 = clojure.core.matrix.protocols.cos;
var G__15971_16173 = "array";
var G__15972_16174 = ((function (G__15970_16172,G__15971_16173){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15970_16172,G__15971_16173){
return (function (p1__12716__12717__auto__){
var G__15973 = p1__12716__12717__auto__;
return Math.cos(G__15973);
});})(G__15970_16172,G__15971_16173))
);
});})(G__15970_16172,G__15971_16173))
;
goog.object.set(G__15970_16172,G__15971_16173,G__15972_16174);

var G__15974_16175 = clojure.core.matrix.protocols.cosh;
var G__15975_16176 = "array";
var G__15976_16177 = ((function (G__15974_16175,G__15975_16176){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15974_16175,G__15975_16176){
return (function (p1__12716__12717__auto__){
var G__15977 = p1__12716__12717__auto__;
return Math.cosh(G__15977);
});})(G__15974_16175,G__15975_16176))
);
});})(G__15974_16175,G__15975_16176))
;
goog.object.set(G__15974_16175,G__15975_16176,G__15976_16177);

var G__15978_16178 = clojure.core.matrix.protocols.exp;
var G__15979_16179 = "array";
var G__15980_16180 = ((function (G__15978_16178,G__15979_16179){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15978_16178,G__15979_16179){
return (function (p1__12716__12717__auto__){
var G__15981 = p1__12716__12717__auto__;
return Math.exp(G__15981);
});})(G__15978_16178,G__15979_16179))
);
});})(G__15978_16178,G__15979_16179))
;
goog.object.set(G__15978_16178,G__15979_16179,G__15980_16180);

var G__15982_16181 = clojure.core.matrix.protocols.floor;
var G__15983_16182 = "array";
var G__15984_16183 = ((function (G__15982_16181,G__15983_16182){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15982_16181,G__15983_16182){
return (function (p1__12716__12717__auto__){
var G__15985 = p1__12716__12717__auto__;
return Math.floor(G__15985);
});})(G__15982_16181,G__15983_16182))
);
});})(G__15982_16181,G__15983_16182))
;
goog.object.set(G__15982_16181,G__15983_16182,G__15984_16183);

var G__15986_16184 = clojure.core.matrix.protocols.log;
var G__15987_16185 = "array";
var G__15988_16186 = ((function (G__15986_16184,G__15987_16185){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15986_16184,G__15987_16185){
return (function (p1__12716__12717__auto__){
var G__15989 = p1__12716__12717__auto__;
return Math.log(G__15989);
});})(G__15986_16184,G__15987_16185))
);
});})(G__15986_16184,G__15987_16185))
;
goog.object.set(G__15986_16184,G__15987_16185,G__15988_16186);

var G__15990_16187 = clojure.core.matrix.protocols.log10;
var G__15991_16188 = "array";
var G__15992_16189 = ((function (G__15990_16187,G__15991_16188){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15990_16187,G__15991_16188){
return (function (p1__12716__12717__auto__){
var G__15993 = p1__12716__12717__auto__;
return Math.log10(G__15993);
});})(G__15990_16187,G__15991_16188))
);
});})(G__15990_16187,G__15991_16188))
;
goog.object.set(G__15990_16187,G__15991_16188,G__15992_16189);

var G__15994_16190 = clojure.core.matrix.protocols.round;
var G__15995_16191 = "array";
var G__15996_16192 = ((function (G__15994_16190,G__15995_16191){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15994_16190,G__15995_16191){
return (function (p1__12716__12717__auto__){
var G__15997 = p1__12716__12717__auto__;
return Math.rint(G__15997);
});})(G__15994_16190,G__15995_16191))
);
});})(G__15994_16190,G__15995_16191))
;
goog.object.set(G__15994_16190,G__15995_16191,G__15996_16192);

var G__15998_16193 = clojure.core.matrix.protocols.signum;
var G__15999_16194 = "array";
var G__16000_16195 = ((function (G__15998_16193,G__15999_16194){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__15998_16193,G__15999_16194){
return (function (p1__12716__12717__auto__){
var G__16001 = p1__12716__12717__auto__;
return Math.sign(G__16001);
});})(G__15998_16193,G__15999_16194))
);
});})(G__15998_16193,G__15999_16194))
;
goog.object.set(G__15998_16193,G__15999_16194,G__16000_16195);

var G__16002_16196 = clojure.core.matrix.protocols.sin;
var G__16003_16197 = "array";
var G__16004_16198 = ((function (G__16002_16196,G__16003_16197){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__16002_16196,G__16003_16197){
return (function (p1__12716__12717__auto__){
var G__16005 = p1__12716__12717__auto__;
return Math.sin(G__16005);
});})(G__16002_16196,G__16003_16197))
);
});})(G__16002_16196,G__16003_16197))
;
goog.object.set(G__16002_16196,G__16003_16197,G__16004_16198);

var G__16006_16199 = clojure.core.matrix.protocols.sinh;
var G__16007_16200 = "array";
var G__16008_16201 = ((function (G__16006_16199,G__16007_16200){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__16006_16199,G__16007_16200){
return (function (p1__12716__12717__auto__){
var G__16009 = p1__12716__12717__auto__;
return Math.sinh(G__16009);
});})(G__16006_16199,G__16007_16200))
);
});})(G__16006_16199,G__16007_16200))
;
goog.object.set(G__16006_16199,G__16007_16200,G__16008_16201);

var G__16010_16202 = clojure.core.matrix.protocols.sqrt;
var G__16011_16203 = "array";
var G__16012_16204 = ((function (G__16010_16202,G__16011_16203){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__16010_16202,G__16011_16203){
return (function (p1__12716__12717__auto__){
var G__16013 = p1__12716__12717__auto__;
return Math.sqrt(G__16013);
});})(G__16010_16202,G__16011_16203))
);
});})(G__16010_16202,G__16011_16203))
;
goog.object.set(G__16010_16202,G__16011_16203,G__16012_16204);

var G__16014_16205 = clojure.core.matrix.protocols.tan;
var G__16015_16206 = "array";
var G__16016_16207 = ((function (G__16014_16205,G__16015_16206){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__16014_16205,G__16015_16206){
return (function (p1__12716__12717__auto__){
var G__16017 = p1__12716__12717__auto__;
return Math.tan(G__16017);
});})(G__16014_16205,G__16015_16206))
);
});})(G__16014_16205,G__16015_16206))
;
goog.object.set(G__16014_16205,G__16015_16206,G__16016_16207);

var G__16018_16208 = clojure.core.matrix.protocols.tanh;
var G__16019_16209 = "array";
var G__16020_16210 = ((function (G__16018_16208,G__16019_16209){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__16018_16208,G__16019_16209){
return (function (p1__12716__12717__auto__){
var G__16021 = p1__12716__12717__auto__;
return Math.tanh(G__16021);
});})(G__16018_16208,G__16019_16209))
);
});})(G__16018_16208,G__16019_16209))
;
goog.object.set(G__16018_16208,G__16019_16209,G__16020_16210);

var G__16022_16211 = clojure.core.matrix.protocols.to_degrees;
var G__16023_16212 = "array";
var G__16024_16213 = ((function (G__16022_16211,G__16023_16212){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__16022_16211,G__16023_16212){
return (function (p1__12716__12717__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(p1__12716__12717__auto__);
});})(G__16022_16211,G__16023_16212))
);
});})(G__16022_16211,G__16023_16212))
;
goog.object.set(G__16022_16211,G__16023_16212,G__16024_16213);

var G__16025_16214 = clojure.core.matrix.protocols.to_radians;
var G__16026_16215 = "array";
var G__16027_16216 = ((function (G__16025_16214,G__16026_16215){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,((function (G__16025_16214,G__16026_16215){
return (function (p1__12716__12717__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(p1__12716__12717__auto__);
});})(G__16025_16214,G__16026_16215))
);
});})(G__16025_16214,G__16026_16215))
;
goog.object.set(G__16025_16214,G__16026_16215,G__16027_16216);
goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"number",true);

var G__16217_16444 = clojure.core.matrix.protocols.abs_BANG_;
var G__16218_16445 = "number";
var G__16219_16446 = ((function (G__16217_16444,G__16218_16445){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16217_16444,G__16218_16445))
;
goog.object.set(G__16217_16444,G__16218_16445,G__16219_16446);

var G__16220_16447 = clojure.core.matrix.protocols.acos_BANG_;
var G__16221_16448 = "number";
var G__16222_16449 = ((function (G__16220_16447,G__16221_16448){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16220_16447,G__16221_16448))
;
goog.object.set(G__16220_16447,G__16221_16448,G__16222_16449);

var G__16223_16450 = clojure.core.matrix.protocols.asin_BANG_;
var G__16224_16451 = "number";
var G__16225_16452 = ((function (G__16223_16450,G__16224_16451){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16223_16450,G__16224_16451))
;
goog.object.set(G__16223_16450,G__16224_16451,G__16225_16452);

var G__16226_16453 = clojure.core.matrix.protocols.atan_BANG_;
var G__16227_16454 = "number";
var G__16228_16455 = ((function (G__16226_16453,G__16227_16454){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16226_16453,G__16227_16454))
;
goog.object.set(G__16226_16453,G__16227_16454,G__16228_16455);

var G__16229_16456 = clojure.core.matrix.protocols.cbrt_BANG_;
var G__16230_16457 = "number";
var G__16231_16458 = ((function (G__16229_16456,G__16230_16457){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16229_16456,G__16230_16457))
;
goog.object.set(G__16229_16456,G__16230_16457,G__16231_16458);

var G__16232_16459 = clojure.core.matrix.protocols.ceil_BANG_;
var G__16233_16460 = "number";
var G__16234_16461 = ((function (G__16232_16459,G__16233_16460){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16232_16459,G__16233_16460))
;
goog.object.set(G__16232_16459,G__16233_16460,G__16234_16461);

var G__16235_16462 = clojure.core.matrix.protocols.cos_BANG_;
var G__16236_16463 = "number";
var G__16237_16464 = ((function (G__16235_16462,G__16236_16463){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16235_16462,G__16236_16463))
;
goog.object.set(G__16235_16462,G__16236_16463,G__16237_16464);

var G__16238_16465 = clojure.core.matrix.protocols.cosh_BANG_;
var G__16239_16466 = "number";
var G__16240_16467 = ((function (G__16238_16465,G__16239_16466){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16238_16465,G__16239_16466))
;
goog.object.set(G__16238_16465,G__16239_16466,G__16240_16467);

var G__16241_16468 = clojure.core.matrix.protocols.exp_BANG_;
var G__16242_16469 = "number";
var G__16243_16470 = ((function (G__16241_16468,G__16242_16469){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16241_16468,G__16242_16469))
;
goog.object.set(G__16241_16468,G__16242_16469,G__16243_16470);

var G__16244_16471 = clojure.core.matrix.protocols.floor_BANG_;
var G__16245_16472 = "number";
var G__16246_16473 = ((function (G__16244_16471,G__16245_16472){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16244_16471,G__16245_16472))
;
goog.object.set(G__16244_16471,G__16245_16472,G__16246_16473);

var G__16247_16474 = clojure.core.matrix.protocols.log_BANG_;
var G__16248_16475 = "number";
var G__16249_16476 = ((function (G__16247_16474,G__16248_16475){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16247_16474,G__16248_16475))
;
goog.object.set(G__16247_16474,G__16248_16475,G__16249_16476);

var G__16250_16477 = clojure.core.matrix.protocols.log10_BANG_;
var G__16251_16478 = "number";
var G__16252_16479 = ((function (G__16250_16477,G__16251_16478){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16250_16477,G__16251_16478))
;
goog.object.set(G__16250_16477,G__16251_16478,G__16252_16479);

var G__16253_16480 = clojure.core.matrix.protocols.round_BANG_;
var G__16254_16481 = "number";
var G__16255_16482 = ((function (G__16253_16480,G__16254_16481){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16253_16480,G__16254_16481))
;
goog.object.set(G__16253_16480,G__16254_16481,G__16255_16482);

var G__16256_16483 = clojure.core.matrix.protocols.signum_BANG_;
var G__16257_16484 = "number";
var G__16258_16485 = ((function (G__16256_16483,G__16257_16484){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16256_16483,G__16257_16484))
;
goog.object.set(G__16256_16483,G__16257_16484,G__16258_16485);

var G__16259_16486 = clojure.core.matrix.protocols.sin_BANG_;
var G__16260_16487 = "number";
var G__16261_16488 = ((function (G__16259_16486,G__16260_16487){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16259_16486,G__16260_16487))
;
goog.object.set(G__16259_16486,G__16260_16487,G__16261_16488);

var G__16262_16489 = clojure.core.matrix.protocols.sinh_BANG_;
var G__16263_16490 = "number";
var G__16264_16491 = ((function (G__16262_16489,G__16263_16490){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16262_16489,G__16263_16490))
;
goog.object.set(G__16262_16489,G__16263_16490,G__16264_16491);

var G__16265_16492 = clojure.core.matrix.protocols.sqrt_BANG_;
var G__16266_16493 = "number";
var G__16267_16494 = ((function (G__16265_16492,G__16266_16493){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16265_16492,G__16266_16493))
;
goog.object.set(G__16265_16492,G__16266_16493,G__16267_16494);

var G__16268_16495 = clojure.core.matrix.protocols.tan_BANG_;
var G__16269_16496 = "number";
var G__16270_16497 = ((function (G__16268_16495,G__16269_16496){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16268_16495,G__16269_16496))
;
goog.object.set(G__16268_16495,G__16269_16496,G__16270_16497);

var G__16271_16498 = clojure.core.matrix.protocols.tanh_BANG_;
var G__16272_16499 = "number";
var G__16273_16500 = ((function (G__16271_16498,G__16272_16499){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16271_16498,G__16272_16499))
;
goog.object.set(G__16271_16498,G__16272_16499,G__16273_16500);

var G__16274_16501 = clojure.core.matrix.protocols.to_degrees_BANG_;
var G__16275_16502 = "number";
var G__16276_16503 = ((function (G__16274_16501,G__16275_16502){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16274_16501,G__16275_16502))
;
goog.object.set(G__16274_16501,G__16275_16502,G__16276_16503);

var G__16277_16504 = clojure.core.matrix.protocols.to_radians_BANG_;
var G__16278_16505 = "number";
var G__16279_16506 = ((function (G__16277_16504,G__16278_16505){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Number is not mutable!",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16277_16504,G__16278_16505))
;
goog.object.set(G__16277_16504,G__16278_16505,G__16279_16506);

goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"object",true);

var G__16280_16507 = clojure.core.matrix.protocols.abs_BANG_;
var G__16281_16508 = "object";
var G__16282_16509 = ((function (G__16280_16507,G__16281_16508){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16280_16507,G__16281_16508){
return (function (p1__12718__12719__auto__){
var G__16283 = p1__12718__12719__auto__;
return Math.abs(G__16283);
});})(G__16280_16507,G__16281_16508))
);
});})(G__16280_16507,G__16281_16508))
;
goog.object.set(G__16280_16507,G__16281_16508,G__16282_16509);

var G__16284_16510 = clojure.core.matrix.protocols.acos_BANG_;
var G__16285_16511 = "object";
var G__16286_16512 = ((function (G__16284_16510,G__16285_16511){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16284_16510,G__16285_16511){
return (function (p1__12718__12719__auto__){
var G__16287 = p1__12718__12719__auto__;
return Math.acos(G__16287);
});})(G__16284_16510,G__16285_16511))
);
});})(G__16284_16510,G__16285_16511))
;
goog.object.set(G__16284_16510,G__16285_16511,G__16286_16512);

var G__16288_16513 = clojure.core.matrix.protocols.asin_BANG_;
var G__16289_16514 = "object";
var G__16290_16515 = ((function (G__16288_16513,G__16289_16514){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16288_16513,G__16289_16514){
return (function (p1__12718__12719__auto__){
var G__16291 = p1__12718__12719__auto__;
return Math.asin(G__16291);
});})(G__16288_16513,G__16289_16514))
);
});})(G__16288_16513,G__16289_16514))
;
goog.object.set(G__16288_16513,G__16289_16514,G__16290_16515);

var G__16292_16516 = clojure.core.matrix.protocols.atan_BANG_;
var G__16293_16517 = "object";
var G__16294_16518 = ((function (G__16292_16516,G__16293_16517){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16292_16516,G__16293_16517){
return (function (p1__12718__12719__auto__){
var G__16295 = p1__12718__12719__auto__;
return Math.atan(G__16295);
});})(G__16292_16516,G__16293_16517))
);
});})(G__16292_16516,G__16293_16517))
;
goog.object.set(G__16292_16516,G__16293_16517,G__16294_16518);

var G__16296_16519 = clojure.core.matrix.protocols.cbrt_BANG_;
var G__16297_16520 = "object";
var G__16298_16521 = ((function (G__16296_16519,G__16297_16520){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16296_16519,G__16297_16520){
return (function (p1__12718__12719__auto__){
var G__16299 = p1__12718__12719__auto__;
return Math.cbrt(G__16299);
});})(G__16296_16519,G__16297_16520))
);
});})(G__16296_16519,G__16297_16520))
;
goog.object.set(G__16296_16519,G__16297_16520,G__16298_16521);

var G__16300_16522 = clojure.core.matrix.protocols.ceil_BANG_;
var G__16301_16523 = "object";
var G__16302_16524 = ((function (G__16300_16522,G__16301_16523){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16300_16522,G__16301_16523){
return (function (p1__12718__12719__auto__){
var G__16303 = p1__12718__12719__auto__;
return Math.ceil(G__16303);
});})(G__16300_16522,G__16301_16523))
);
});})(G__16300_16522,G__16301_16523))
;
goog.object.set(G__16300_16522,G__16301_16523,G__16302_16524);

var G__16304_16525 = clojure.core.matrix.protocols.cos_BANG_;
var G__16305_16526 = "object";
var G__16306_16527 = ((function (G__16304_16525,G__16305_16526){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16304_16525,G__16305_16526){
return (function (p1__12718__12719__auto__){
var G__16307 = p1__12718__12719__auto__;
return Math.cos(G__16307);
});})(G__16304_16525,G__16305_16526))
);
});})(G__16304_16525,G__16305_16526))
;
goog.object.set(G__16304_16525,G__16305_16526,G__16306_16527);

var G__16308_16528 = clojure.core.matrix.protocols.cosh_BANG_;
var G__16309_16529 = "object";
var G__16310_16530 = ((function (G__16308_16528,G__16309_16529){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16308_16528,G__16309_16529){
return (function (p1__12718__12719__auto__){
var G__16311 = p1__12718__12719__auto__;
return Math.cosh(G__16311);
});})(G__16308_16528,G__16309_16529))
);
});})(G__16308_16528,G__16309_16529))
;
goog.object.set(G__16308_16528,G__16309_16529,G__16310_16530);

var G__16312_16531 = clojure.core.matrix.protocols.exp_BANG_;
var G__16313_16532 = "object";
var G__16314_16533 = ((function (G__16312_16531,G__16313_16532){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16312_16531,G__16313_16532){
return (function (p1__12718__12719__auto__){
var G__16315 = p1__12718__12719__auto__;
return Math.exp(G__16315);
});})(G__16312_16531,G__16313_16532))
);
});})(G__16312_16531,G__16313_16532))
;
goog.object.set(G__16312_16531,G__16313_16532,G__16314_16533);

var G__16316_16534 = clojure.core.matrix.protocols.floor_BANG_;
var G__16317_16535 = "object";
var G__16318_16536 = ((function (G__16316_16534,G__16317_16535){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16316_16534,G__16317_16535){
return (function (p1__12718__12719__auto__){
var G__16319 = p1__12718__12719__auto__;
return Math.floor(G__16319);
});})(G__16316_16534,G__16317_16535))
);
});})(G__16316_16534,G__16317_16535))
;
goog.object.set(G__16316_16534,G__16317_16535,G__16318_16536);

var G__16320_16537 = clojure.core.matrix.protocols.log_BANG_;
var G__16321_16538 = "object";
var G__16322_16539 = ((function (G__16320_16537,G__16321_16538){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16320_16537,G__16321_16538){
return (function (p1__12718__12719__auto__){
var G__16323 = p1__12718__12719__auto__;
return Math.log(G__16323);
});})(G__16320_16537,G__16321_16538))
);
});})(G__16320_16537,G__16321_16538))
;
goog.object.set(G__16320_16537,G__16321_16538,G__16322_16539);

var G__16324_16540 = clojure.core.matrix.protocols.log10_BANG_;
var G__16325_16541 = "object";
var G__16326_16542 = ((function (G__16324_16540,G__16325_16541){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16324_16540,G__16325_16541){
return (function (p1__12718__12719__auto__){
var G__16327 = p1__12718__12719__auto__;
return Math.log10(G__16327);
});})(G__16324_16540,G__16325_16541))
);
});})(G__16324_16540,G__16325_16541))
;
goog.object.set(G__16324_16540,G__16325_16541,G__16326_16542);

var G__16328_16543 = clojure.core.matrix.protocols.round_BANG_;
var G__16329_16544 = "object";
var G__16330_16545 = ((function (G__16328_16543,G__16329_16544){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16328_16543,G__16329_16544){
return (function (p1__12718__12719__auto__){
var G__16331 = p1__12718__12719__auto__;
return Math.rint(G__16331);
});})(G__16328_16543,G__16329_16544))
);
});})(G__16328_16543,G__16329_16544))
;
goog.object.set(G__16328_16543,G__16329_16544,G__16330_16545);

var G__16332_16546 = clojure.core.matrix.protocols.signum_BANG_;
var G__16333_16547 = "object";
var G__16334_16548 = ((function (G__16332_16546,G__16333_16547){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16332_16546,G__16333_16547){
return (function (p1__12718__12719__auto__){
var G__16335 = p1__12718__12719__auto__;
return Math.sign(G__16335);
});})(G__16332_16546,G__16333_16547))
);
});})(G__16332_16546,G__16333_16547))
;
goog.object.set(G__16332_16546,G__16333_16547,G__16334_16548);

var G__16336_16549 = clojure.core.matrix.protocols.sin_BANG_;
var G__16337_16550 = "object";
var G__16338_16551 = ((function (G__16336_16549,G__16337_16550){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16336_16549,G__16337_16550){
return (function (p1__12718__12719__auto__){
var G__16339 = p1__12718__12719__auto__;
return Math.sin(G__16339);
});})(G__16336_16549,G__16337_16550))
);
});})(G__16336_16549,G__16337_16550))
;
goog.object.set(G__16336_16549,G__16337_16550,G__16338_16551);

var G__16340_16552 = clojure.core.matrix.protocols.sinh_BANG_;
var G__16341_16553 = "object";
var G__16342_16554 = ((function (G__16340_16552,G__16341_16553){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16340_16552,G__16341_16553){
return (function (p1__12718__12719__auto__){
var G__16343 = p1__12718__12719__auto__;
return Math.sinh(G__16343);
});})(G__16340_16552,G__16341_16553))
);
});})(G__16340_16552,G__16341_16553))
;
goog.object.set(G__16340_16552,G__16341_16553,G__16342_16554);

var G__16344_16555 = clojure.core.matrix.protocols.sqrt_BANG_;
var G__16345_16556 = "object";
var G__16346_16557 = ((function (G__16344_16555,G__16345_16556){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16344_16555,G__16345_16556){
return (function (p1__12718__12719__auto__){
var G__16347 = p1__12718__12719__auto__;
return Math.sqrt(G__16347);
});})(G__16344_16555,G__16345_16556))
);
});})(G__16344_16555,G__16345_16556))
;
goog.object.set(G__16344_16555,G__16345_16556,G__16346_16557);

var G__16348_16558 = clojure.core.matrix.protocols.tan_BANG_;
var G__16349_16559 = "object";
var G__16350_16560 = ((function (G__16348_16558,G__16349_16559){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16348_16558,G__16349_16559){
return (function (p1__12718__12719__auto__){
var G__16351 = p1__12718__12719__auto__;
return Math.tan(G__16351);
});})(G__16348_16558,G__16349_16559))
);
});})(G__16348_16558,G__16349_16559))
;
goog.object.set(G__16348_16558,G__16349_16559,G__16350_16560);

var G__16352_16561 = clojure.core.matrix.protocols.tanh_BANG_;
var G__16353_16562 = "object";
var G__16354_16563 = ((function (G__16352_16561,G__16353_16562){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16352_16561,G__16353_16562){
return (function (p1__12718__12719__auto__){
var G__16355 = p1__12718__12719__auto__;
return Math.tanh(G__16355);
});})(G__16352_16561,G__16353_16562))
);
});})(G__16352_16561,G__16353_16562))
;
goog.object.set(G__16352_16561,G__16353_16562,G__16354_16563);

var G__16356_16564 = clojure.core.matrix.protocols.to_degrees_BANG_;
var G__16357_16565 = "object";
var G__16358_16566 = ((function (G__16356_16564,G__16357_16565){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16356_16564,G__16357_16565){
return (function (p1__12718__12719__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(p1__12718__12719__auto__);
});})(G__16356_16564,G__16357_16565))
);
});})(G__16356_16564,G__16357_16565))
;
goog.object.set(G__16356_16564,G__16357_16565,G__16358_16566);

var G__16359_16567 = clojure.core.matrix.protocols.to_radians_BANG_;
var G__16360_16568 = "object";
var G__16361_16569 = ((function (G__16359_16567,G__16360_16568){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16359_16567,G__16360_16568){
return (function (p1__12718__12719__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(p1__12718__12719__auto__);
});})(G__16359_16567,G__16360_16568))
);
});})(G__16359_16567,G__16360_16568))
;
goog.object.set(G__16359_16567,G__16360_16568,G__16361_16569);

goog.object.set(clojure.core.matrix.protocols.PMathsFunctionsMutable,"array",true);

var G__16362_16570 = clojure.core.matrix.protocols.abs_BANG_;
var G__16363_16571 = "array";
var G__16364_16572 = ((function (G__16362_16570,G__16363_16571){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16362_16570,G__16363_16571){
return (function (p1__12720__12721__auto__){
var G__16365 = p1__12720__12721__auto__;
return Math.abs(G__16365);
});})(G__16362_16570,G__16363_16571))
);
});})(G__16362_16570,G__16363_16571))
;
goog.object.set(G__16362_16570,G__16363_16571,G__16364_16572);

var G__16366_16573 = clojure.core.matrix.protocols.acos_BANG_;
var G__16367_16574 = "array";
var G__16368_16575 = ((function (G__16366_16573,G__16367_16574){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16366_16573,G__16367_16574){
return (function (p1__12720__12721__auto__){
var G__16369 = p1__12720__12721__auto__;
return Math.acos(G__16369);
});})(G__16366_16573,G__16367_16574))
);
});})(G__16366_16573,G__16367_16574))
;
goog.object.set(G__16366_16573,G__16367_16574,G__16368_16575);

var G__16370_16576 = clojure.core.matrix.protocols.asin_BANG_;
var G__16371_16577 = "array";
var G__16372_16578 = ((function (G__16370_16576,G__16371_16577){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16370_16576,G__16371_16577){
return (function (p1__12720__12721__auto__){
var G__16373 = p1__12720__12721__auto__;
return Math.asin(G__16373);
});})(G__16370_16576,G__16371_16577))
);
});})(G__16370_16576,G__16371_16577))
;
goog.object.set(G__16370_16576,G__16371_16577,G__16372_16578);

var G__16374_16579 = clojure.core.matrix.protocols.atan_BANG_;
var G__16375_16580 = "array";
var G__16376_16581 = ((function (G__16374_16579,G__16375_16580){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16374_16579,G__16375_16580){
return (function (p1__12720__12721__auto__){
var G__16377 = p1__12720__12721__auto__;
return Math.atan(G__16377);
});})(G__16374_16579,G__16375_16580))
);
});})(G__16374_16579,G__16375_16580))
;
goog.object.set(G__16374_16579,G__16375_16580,G__16376_16581);

var G__16378_16582 = clojure.core.matrix.protocols.cbrt_BANG_;
var G__16379_16583 = "array";
var G__16380_16584 = ((function (G__16378_16582,G__16379_16583){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16378_16582,G__16379_16583){
return (function (p1__12720__12721__auto__){
var G__16381 = p1__12720__12721__auto__;
return Math.cbrt(G__16381);
});})(G__16378_16582,G__16379_16583))
);
});})(G__16378_16582,G__16379_16583))
;
goog.object.set(G__16378_16582,G__16379_16583,G__16380_16584);

var G__16382_16585 = clojure.core.matrix.protocols.ceil_BANG_;
var G__16383_16586 = "array";
var G__16384_16587 = ((function (G__16382_16585,G__16383_16586){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16382_16585,G__16383_16586){
return (function (p1__12720__12721__auto__){
var G__16385 = p1__12720__12721__auto__;
return Math.ceil(G__16385);
});})(G__16382_16585,G__16383_16586))
);
});})(G__16382_16585,G__16383_16586))
;
goog.object.set(G__16382_16585,G__16383_16586,G__16384_16587);

var G__16386_16588 = clojure.core.matrix.protocols.cos_BANG_;
var G__16387_16589 = "array";
var G__16388_16590 = ((function (G__16386_16588,G__16387_16589){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16386_16588,G__16387_16589){
return (function (p1__12720__12721__auto__){
var G__16389 = p1__12720__12721__auto__;
return Math.cos(G__16389);
});})(G__16386_16588,G__16387_16589))
);
});})(G__16386_16588,G__16387_16589))
;
goog.object.set(G__16386_16588,G__16387_16589,G__16388_16590);

var G__16390_16591 = clojure.core.matrix.protocols.cosh_BANG_;
var G__16391_16592 = "array";
var G__16392_16593 = ((function (G__16390_16591,G__16391_16592){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16390_16591,G__16391_16592){
return (function (p1__12720__12721__auto__){
var G__16393 = p1__12720__12721__auto__;
return Math.cosh(G__16393);
});})(G__16390_16591,G__16391_16592))
);
});})(G__16390_16591,G__16391_16592))
;
goog.object.set(G__16390_16591,G__16391_16592,G__16392_16593);

var G__16394_16594 = clojure.core.matrix.protocols.exp_BANG_;
var G__16395_16595 = "array";
var G__16396_16596 = ((function (G__16394_16594,G__16395_16595){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16394_16594,G__16395_16595){
return (function (p1__12720__12721__auto__){
var G__16397 = p1__12720__12721__auto__;
return Math.exp(G__16397);
});})(G__16394_16594,G__16395_16595))
);
});})(G__16394_16594,G__16395_16595))
;
goog.object.set(G__16394_16594,G__16395_16595,G__16396_16596);

var G__16398_16597 = clojure.core.matrix.protocols.floor_BANG_;
var G__16399_16598 = "array";
var G__16400_16599 = ((function (G__16398_16597,G__16399_16598){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16398_16597,G__16399_16598){
return (function (p1__12720__12721__auto__){
var G__16401 = p1__12720__12721__auto__;
return Math.floor(G__16401);
});})(G__16398_16597,G__16399_16598))
);
});})(G__16398_16597,G__16399_16598))
;
goog.object.set(G__16398_16597,G__16399_16598,G__16400_16599);

var G__16402_16600 = clojure.core.matrix.protocols.log_BANG_;
var G__16403_16601 = "array";
var G__16404_16602 = ((function (G__16402_16600,G__16403_16601){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16402_16600,G__16403_16601){
return (function (p1__12720__12721__auto__){
var G__16405 = p1__12720__12721__auto__;
return Math.log(G__16405);
});})(G__16402_16600,G__16403_16601))
);
});})(G__16402_16600,G__16403_16601))
;
goog.object.set(G__16402_16600,G__16403_16601,G__16404_16602);

var G__16406_16603 = clojure.core.matrix.protocols.log10_BANG_;
var G__16407_16604 = "array";
var G__16408_16605 = ((function (G__16406_16603,G__16407_16604){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16406_16603,G__16407_16604){
return (function (p1__12720__12721__auto__){
var G__16409 = p1__12720__12721__auto__;
return Math.log10(G__16409);
});})(G__16406_16603,G__16407_16604))
);
});})(G__16406_16603,G__16407_16604))
;
goog.object.set(G__16406_16603,G__16407_16604,G__16408_16605);

var G__16410_16606 = clojure.core.matrix.protocols.round_BANG_;
var G__16411_16607 = "array";
var G__16412_16608 = ((function (G__16410_16606,G__16411_16607){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16410_16606,G__16411_16607){
return (function (p1__12720__12721__auto__){
var G__16413 = p1__12720__12721__auto__;
return Math.rint(G__16413);
});})(G__16410_16606,G__16411_16607))
);
});})(G__16410_16606,G__16411_16607))
;
goog.object.set(G__16410_16606,G__16411_16607,G__16412_16608);

var G__16414_16609 = clojure.core.matrix.protocols.signum_BANG_;
var G__16415_16610 = "array";
var G__16416_16611 = ((function (G__16414_16609,G__16415_16610){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16414_16609,G__16415_16610){
return (function (p1__12720__12721__auto__){
var G__16417 = p1__12720__12721__auto__;
return Math.sign(G__16417);
});})(G__16414_16609,G__16415_16610))
);
});})(G__16414_16609,G__16415_16610))
;
goog.object.set(G__16414_16609,G__16415_16610,G__16416_16611);

var G__16418_16612 = clojure.core.matrix.protocols.sin_BANG_;
var G__16419_16613 = "array";
var G__16420_16614 = ((function (G__16418_16612,G__16419_16613){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16418_16612,G__16419_16613){
return (function (p1__12720__12721__auto__){
var G__16421 = p1__12720__12721__auto__;
return Math.sin(G__16421);
});})(G__16418_16612,G__16419_16613))
);
});})(G__16418_16612,G__16419_16613))
;
goog.object.set(G__16418_16612,G__16419_16613,G__16420_16614);

var G__16422_16615 = clojure.core.matrix.protocols.sinh_BANG_;
var G__16423_16616 = "array";
var G__16424_16617 = ((function (G__16422_16615,G__16423_16616){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16422_16615,G__16423_16616){
return (function (p1__12720__12721__auto__){
var G__16425 = p1__12720__12721__auto__;
return Math.sinh(G__16425);
});})(G__16422_16615,G__16423_16616))
);
});})(G__16422_16615,G__16423_16616))
;
goog.object.set(G__16422_16615,G__16423_16616,G__16424_16617);

var G__16426_16618 = clojure.core.matrix.protocols.sqrt_BANG_;
var G__16427_16619 = "array";
var G__16428_16620 = ((function (G__16426_16618,G__16427_16619){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16426_16618,G__16427_16619){
return (function (p1__12720__12721__auto__){
var G__16429 = p1__12720__12721__auto__;
return Math.sqrt(G__16429);
});})(G__16426_16618,G__16427_16619))
);
});})(G__16426_16618,G__16427_16619))
;
goog.object.set(G__16426_16618,G__16427_16619,G__16428_16620);

var G__16430_16621 = clojure.core.matrix.protocols.tan_BANG_;
var G__16431_16622 = "array";
var G__16432_16623 = ((function (G__16430_16621,G__16431_16622){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16430_16621,G__16431_16622){
return (function (p1__12720__12721__auto__){
var G__16433 = p1__12720__12721__auto__;
return Math.tan(G__16433);
});})(G__16430_16621,G__16431_16622))
);
});})(G__16430_16621,G__16431_16622))
;
goog.object.set(G__16430_16621,G__16431_16622,G__16432_16623);

var G__16434_16624 = clojure.core.matrix.protocols.tanh_BANG_;
var G__16435_16625 = "array";
var G__16436_16626 = ((function (G__16434_16624,G__16435_16625){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16434_16624,G__16435_16625){
return (function (p1__12720__12721__auto__){
var G__16437 = p1__12720__12721__auto__;
return Math.tanh(G__16437);
});})(G__16434_16624,G__16435_16625))
);
});})(G__16434_16624,G__16435_16625))
;
goog.object.set(G__16434_16624,G__16435_16625,G__16436_16626);

var G__16438_16627 = clojure.core.matrix.protocols.to_degrees_BANG_;
var G__16439_16628 = "array";
var G__16440_16629 = ((function (G__16438_16627,G__16439_16628){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16438_16627,G__16439_16628){
return (function (p1__12720__12721__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_(p1__12720__12721__auto__);
});})(G__16438_16627,G__16439_16628))
);
});})(G__16438_16627,G__16439_16628))
;
goog.object.set(G__16438_16627,G__16439_16628,G__16440_16629);

var G__16441_16630 = clojure.core.matrix.protocols.to_radians_BANG_;
var G__16442_16631 = "array";
var G__16443_16632 = ((function (G__16441_16630,G__16442_16631){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,((function (G__16441_16630,G__16442_16631){
return (function (p1__12720__12721__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_(p1__12720__12721__auto__);
});})(G__16441_16630,G__16442_16631))
);
});})(G__16441_16630,G__16442_16631))
;
goog.object.set(G__16441_16630,G__16442_16631,G__16443_16632);
goog.object.set(clojure.core.matrix.protocols.PMatrixSubComponents,"object",true);

var G__16633_16640 = clojure.core.matrix.protocols.main_diagonal;
var G__16634_16641 = "object";
var G__16635_16642 = ((function (G__16633_16640,G__16634_16641){
return (function (m){
var sh = clojure.core.matrix.protocols.get_shape(m);
var rank = cljs.core.count(sh);
var dims = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,sh);
var diag_vals = (function (){var iter__4523__auto__ = ((function (sh,rank,dims,G__16633_16640,G__16634_16641){
return (function clojure$core$matrix$impl$defaults$iter__16636(s__16637){
return (new cljs.core.LazySeq(null,((function (sh,rank,dims,G__16633_16640,G__16634_16641){
return (function (){
var s__16637__$1 = s__16637;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16637__$1);
if(temp__5720__auto__){
var s__16637__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16637__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16637__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16639 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16638 = (0);
while(true){
if((i__16638 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16638);
cljs.core.chunk_append(b__16639,clojure.core.matrix.protocols.get_nd(m,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rank,i)));

var G__16643 = (i__16638 + (1));
i__16638 = G__16643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16639),clojure$core$matrix$impl$defaults$iter__16636(cljs.core.chunk_rest(s__16637__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16639),null);
}
} else {
var i = cljs.core.first(s__16637__$2);
return cljs.core.cons(clojure.core.matrix.protocols.get_nd(m,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(rank,i)),clojure$core$matrix$impl$defaults$iter__16636(cljs.core.rest(s__16637__$2)));
}
} else {
return null;
}
break;
}
});})(sh,rank,dims,G__16633_16640,G__16634_16641))
,null,null));
});})(sh,rank,dims,G__16633_16640,G__16634_16641))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(dims));
})();
return clojure.core.matrix.implementations.construct(m,diag_vals);
});})(G__16633_16640,G__16634_16641))
;
goog.object.set(G__16633_16640,G__16634_16641,G__16635_16642);
goog.object.set(clojure.core.matrix.protocols.PSpecialisedConstructors,"object",true);

var G__16644_16654 = clojure.core.matrix.protocols.identity_matrix;
var G__16645_16655 = "object";
var G__16646_16656 = ((function (G__16644_16654,G__16645_16655){
return (function (m,dims){
return clojure.core.matrix.protocols.diagonal_matrix(m,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dims,1.0));
});})(G__16644_16654,G__16645_16655))
;
goog.object.set(G__16644_16654,G__16645_16655,G__16646_16656);

var G__16647_16657 = clojure.core.matrix.protocols.diagonal_matrix;
var G__16648_16658 = "object";
var G__16649_16659 = ((function (G__16647_16657,G__16648_16658){
return (function (m,diagonal_values){
var dims = cljs.core.count(diagonal_values);
var diagonal_values__$1 = clojure.core.matrix.protocols.convert_to_nested_vectors(diagonal_values);
var zs = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(dims,0.0));
var dm = cljs.core.vec((function (){var iter__4523__auto__ = ((function (dims,diagonal_values__$1,zs,G__16647_16657,G__16648_16658){
return (function clojure$core$matrix$impl$defaults$iter__16650(s__16651){
return (new cljs.core.LazySeq(null,((function (dims,diagonal_values__$1,zs,G__16647_16657,G__16648_16658){
return (function (){
var s__16651__$1 = s__16651;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16651__$1);
if(temp__5720__auto__){
var s__16651__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16651__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16651__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16653 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16652 = (0);
while(true){
if((i__16652 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16652);
cljs.core.chunk_append(b__16653,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zs,i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(diagonal_values__$1,i)));

var G__16660 = (i__16652 + (1));
i__16652 = G__16660;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16653),clojure$core$matrix$impl$defaults$iter__16650(cljs.core.chunk_rest(s__16651__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16653),null);
}
} else {
var i = cljs.core.first(s__16651__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(zs,i,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(diagonal_values__$1,i)),clojure$core$matrix$impl$defaults$iter__16650(cljs.core.rest(s__16651__$2)));
}
} else {
return null;
}
break;
}
});})(dims,diagonal_values__$1,zs,G__16647_16657,G__16648_16658))
,null,null));
});})(dims,diagonal_values__$1,zs,G__16647_16657,G__16648_16658))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(dims));
})());
return clojure.core.matrix.protocols.coerce_param(m,dm);
});})(G__16647_16657,G__16648_16658))
;
goog.object.set(G__16647_16657,G__16648_16658,G__16649_16659);
goog.object.set(clojure.core.matrix.protocols.PPermutationMatrix,"object",true);

var G__16661_16664 = clojure.core.matrix.protocols.permutation_matrix;
var G__16662_16665 = "object";
var G__16663_16666 = ((function (G__16661_16664,G__16662_16665){
return (function (m,permutation){
var v = clojure.core.matrix.protocols.convert_to_nested_vectors(permutation);
var n = cljs.core.count(v);
var r = clojure.core.matrix.protocols.new_matrix(m,n,n);
var r__$1 = (cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_(r))?r:clojure.core.matrix.impl.defaults.construct_mutable_matrix(r));
var n__4607__auto___16667 = n;
var i_16668 = (0);
while(true){
if((i_16668 < n__4607__auto___16667)){
clojure.core.matrix.protocols.set_2d_BANG_(r__$1,i_16668,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i_16668) : v.call(null,i_16668)),1.0);

var G__16669 = (i_16668 + (1));
i_16668 = G__16669;
continue;
} else {
}
break;
}

return r__$1;
});})(G__16661_16664,G__16662_16665))
;
goog.object.set(G__16661_16664,G__16662_16665,G__16663_16666);
goog.object.set(clojure.core.matrix.protocols.PBlockDiagonalMatrix,"object",true);

var G__16670_16679 = clojure.core.matrix.protocols.block_diagonal_matrix;
var G__16671_16680 = "object";
var G__16672_16681 = ((function (G__16670_16679,G__16671_16680){
return (function (m,blocks){
var aux = ((function (G__16670_16679,G__16671_16680){
return (function clojure$core$matrix$impl$defaults$aux(acc,blocks__$1){
if(cljs.core.empty_QMARK_(blocks__$1)){
return acc;
} else {
var acc_dim = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(acc,(0)));
var new_block = (blocks__$1.cljs$core$IFn$_invoke$arity$1 ? blocks__$1.cljs$core$IFn$_invoke$arity$1((0)) : blocks__$1.call(null,(0)));
var new_block_dim = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(new_block,(0)));
var new_dim = (acc_dim + new_block_dim);
var dm = cljs.core.vec((function (){var iter__4523__auto__ = ((function (acc_dim,new_block,new_block_dim,new_dim,G__16670_16679,G__16671_16680){
return (function clojure$core$matrix$impl$defaults$aux_$_iter__16673(s__16674){
return (new cljs.core.LazySeq(null,((function (acc_dim,new_block,new_block_dim,new_dim,G__16670_16679,G__16671_16680){
return (function (){
var s__16674__$1 = s__16674;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16674__$1);
if(temp__5720__auto__){
var s__16674__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16674__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16674__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16676 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16675 = (0);
while(true){
if((i__16675 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16675);
cljs.core.chunk_append(b__16676,(((i < acc_dim))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((acc.cljs$core$IFn$_invoke$arity$1 ? acc.cljs$core$IFn$_invoke$arity$1(i) : acc.call(null,i)),clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,acc_dim),(function (){var G__16677 = (i - acc_dim);
return (new_block.cljs$core$IFn$_invoke$arity$1 ? new_block.cljs$core$IFn$_invoke$arity$1(G__16677) : new_block.call(null,G__16677));
})()))));

var G__16682 = (i__16675 + (1));
i__16675 = G__16682;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16676),clojure$core$matrix$impl$defaults$aux_$_iter__16673(cljs.core.chunk_rest(s__16674__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16676),null);
}
} else {
var i = cljs.core.first(s__16674__$2);
return cljs.core.cons((((i < acc_dim))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2((acc.cljs$core$IFn$_invoke$arity$1 ? acc.cljs$core$IFn$_invoke$arity$1(i) : acc.call(null,i)),clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.new_vector(cljs.core.PersistentVector.EMPTY,acc_dim),(function (){var G__16678 = (i - acc_dim);
return (new_block.cljs$core$IFn$_invoke$arity$1 ? new_block.cljs$core$IFn$_invoke$arity$1(G__16678) : new_block.call(null,G__16678));
})()))),clojure$core$matrix$impl$defaults$aux_$_iter__16673(cljs.core.rest(s__16674__$2)));
}
} else {
return null;
}
break;
}
});})(acc_dim,new_block,new_block_dim,new_dim,G__16670_16679,G__16671_16680))
,null,null));
});})(acc_dim,new_block,new_block_dim,new_dim,G__16670_16679,G__16671_16680))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(new_dim));
})());
return clojure$core$matrix$impl$defaults$aux(dm,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(blocks__$1,(1)));
}
});})(G__16670_16679,G__16671_16680))
;
return aux(cljs.core.PersistentVector.EMPTY,blocks);
});})(G__16670_16679,G__16671_16680))
;
goog.object.set(G__16670_16679,G__16671_16680,G__16672_16681);
goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"object",true);

var G__16684_16703 = clojure.core.matrix.protocols.identity_matrix_QMARK_;
var G__16685_16704 = "object";
var G__16686_16705 = ((function (G__16684_16703,G__16685_16704){
return (function (m){
var rc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(0)));
var cc = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,(1)));
if((((cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) === (2))) && ((rc === cc)))){
var i = cljs.core.long$((0));
while(true){
if((i < rc)){
if((function (){var j = cljs.core.long$((0));
while(true){
if((j < cc)){
var elem = clojure.core.matrix.protocols.get_2d(m,i,j);
if(typeof elem === 'number'){
if((i === j)){
if((elem === 1.0)){
var G__16706 = (j + (1));
j = G__16706;
continue;
} else {
return false;
}
} else {
if((elem === (0))){
var G__16707 = (j + (1));
j = G__16707;
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
var G__16708 = (i + (1));
i = G__16708;
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
});})(G__16684_16703,G__16685_16704))
;
goog.object.set(G__16684_16703,G__16685_16704,G__16686_16705);

var G__16687_16709 = clojure.core.matrix.protocols.zero_matrix_QMARK_;
var G__16688_16710 = "object";
var G__16689_16711 = ((function (G__16687_16709,G__16688_16710){
return (function (m){
return cljs.core.every_QMARK_(((function (G__16687_16709,G__16688_16710){
return (function (p1__16683_SHARP_){
return ((typeof p1__16683_SHARP_ === 'number') && ((p1__16683_SHARP_ === (0))));
});})(G__16687_16709,G__16688_16710))
,clojure.core.matrix.protocols.element_seq(m));
});})(G__16687_16709,G__16688_16710))
;
goog.object.set(G__16687_16709,G__16688_16710,G__16689_16711);

var G__16690_16712 = clojure.core.matrix.protocols.symmetric_QMARK_;
var G__16691_16713 = "object";
var G__16692_16714 = ((function (G__16690_16712,G__16691_16713){
return (function (m){
var G__16693 = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
switch (G__16693) {
case (0):
return true;

break;
case (1):
return true;

break;
case (2):
var and__4120__auto__ = clojure.core.matrix.impl.common.square_QMARK_(m);
if(and__4120__auto__){
return clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_(m);
} else {
return and__4120__auto__;
}

break;
default:
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.transpose(m));

}
});})(G__16690_16712,G__16691_16713))
;
goog.object.set(G__16690_16712,G__16691_16713,G__16692_16714);

goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"null",true);

var G__16694_16716 = clojure.core.matrix.protocols.identity_matrix_QMARK_;
var G__16695_16717 = "null";
var G__16696_16718 = ((function (G__16694_16716,G__16695_16717){
return (function (m){
return false;
});})(G__16694_16716,G__16695_16717))
;
goog.object.set(G__16694_16716,G__16695_16717,G__16696_16718);

var G__16697_16719 = clojure.core.matrix.protocols.zero_matrix_QMARK_;
var G__16698_16720 = "null";
var G__16699_16721 = ((function (G__16697_16719,G__16698_16720){
return (function (m){
return false;
});})(G__16697_16719,G__16698_16720))
;
goog.object.set(G__16697_16719,G__16698_16720,G__16699_16721);

var G__16700_16722 = clojure.core.matrix.protocols.symmetric_QMARK_;
var G__16701_16723 = "null";
var G__16702_16724 = ((function (G__16700_16722,G__16701_16723){
return (function (m){
return true;
});})(G__16700_16722,G__16701_16723))
;
goog.object.set(G__16700_16722,G__16701_16723,G__16702_16724);
goog.object.set(clojure.core.matrix.protocols.PIndicesAccess,"object",true);

var G__16726_16729 = clojure.core.matrix.protocols.get_indices;
var G__16727_16730 = "object";
var G__16728_16731 = ((function (G__16726_16729,G__16727_16730){
return (function (a,indices){
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__16726_16729,G__16727_16730){
return (function (p1__16725_SHARP_){
return clojure.core.matrix.protocols.get_nd(a,p1__16725_SHARP_);
});})(G__16726_16729,G__16727_16730))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,indices));
var or__4131__auto__ = ((cljs.core.not(clojure.core.matrix.protocols.is_scalar_QMARK_(a)))?clojure.core.matrix.protocols.construct_matrix(a,vals):null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix(cljs.core.PersistentVector.EMPTY,vals);
}
});})(G__16726_16729,G__16727_16730))
;
goog.object.set(G__16726_16729,G__16727_16730,G__16728_16731);
goog.object.set(clojure.core.matrix.protocols.PIndicesSetting,"object",true);

var G__16732_16790 = clojure.core.matrix.protocols.set_indices;
var G__16733_16791 = "object";
var G__16734_16792 = ((function (G__16732_16790,G__16733_16791){
return (function (a,indices,values){
var indices__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq(clojure.core.matrix.protocols.broadcast(values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(indices__$1)], null)));
var a__$1 = a;
var G__16741 = indices__$1;
var vec__16743 = G__16741;
var seq__16744 = cljs.core.seq(vec__16743);
var first__16745 = cljs.core.first(seq__16744);
var seq__16744__$1 = cljs.core.next(seq__16744);
var id = first__16745;
var idx = seq__16744__$1;
var G__16742 = values__$1;
var vec__16746 = G__16742;
var seq__16747 = cljs.core.seq(vec__16746);
var first__16748 = cljs.core.first(seq__16747);
var seq__16747__$1 = cljs.core.next(seq__16747);
var v = first__16748;
var vs = seq__16747__$1;
var a__$2 = a__$1;
var G__16741__$1 = G__16741;
var G__16742__$1 = G__16742;
while(true){
var a__$3 = a__$2;
var vec__16755 = G__16741__$1;
var seq__16756 = cljs.core.seq(vec__16755);
var first__16757 = cljs.core.first(seq__16756);
var seq__16756__$1 = cljs.core.next(seq__16756);
var id__$1 = first__16757;
var idx__$1 = seq__16756__$1;
var vec__16758 = G__16742__$1;
var seq__16759 = cljs.core.seq(vec__16758);
var first__16760 = cljs.core.first(seq__16759);
var seq__16759__$1 = cljs.core.next(seq__16759);
var v__$1 = first__16760;
var vs__$1 = seq__16759__$1;
if(cljs.core.truth_(id__$1)){
var G__16793 = clojure.core.matrix.protocols.set_nd(a__$3,id__$1,v__$1);
var G__16794 = idx__$1;
var G__16795 = vs__$1;
a__$2 = G__16793;
G__16741__$1 = G__16794;
G__16742__$1 = G__16795;
continue;
} else {
return a__$3;
}
break;
}
});})(G__16732_16790,G__16733_16791))
;
goog.object.set(G__16732_16790,G__16733_16791,G__16734_16792);

var G__16761_16796 = clojure.core.matrix.protocols.set_indices_BANG_;
var G__16762_16797 = "object";
var G__16763_16798 = ((function (G__16761_16796,G__16762_16797){
return (function (a,indices,values){
var indices__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq(clojure.core.matrix.protocols.broadcast(values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(indices__$1)], null)));
var G__16770 = indices__$1;
var vec__16772 = G__16770;
var seq__16773 = cljs.core.seq(vec__16772);
var first__16774 = cljs.core.first(seq__16773);
var seq__16773__$1 = cljs.core.next(seq__16773);
var id = first__16774;
var idx = seq__16773__$1;
var G__16771 = values__$1;
var vec__16775 = G__16771;
var seq__16776 = cljs.core.seq(vec__16775);
var first__16777 = cljs.core.first(seq__16776);
var seq__16776__$1 = cljs.core.next(seq__16776);
var v = first__16777;
var vs = seq__16776__$1;
var G__16770__$1 = G__16770;
var G__16771__$1 = G__16771;
while(true){
var vec__16784 = G__16770__$1;
var seq__16785 = cljs.core.seq(vec__16784);
var first__16786 = cljs.core.first(seq__16785);
var seq__16785__$1 = cljs.core.next(seq__16785);
var id__$1 = first__16786;
var idx__$1 = seq__16785__$1;
var vec__16787 = G__16771__$1;
var seq__16788 = cljs.core.seq(vec__16787);
var first__16789 = cljs.core.first(seq__16788);
var seq__16788__$1 = cljs.core.next(seq__16788);
var v__$1 = first__16789;
var vs__$1 = seq__16788__$1;
if(cljs.core.truth_(id__$1)){
clojure.core.matrix.protocols.set_nd_BANG_(a,id__$1,v__$1);

var G__16799 = idx__$1;
var G__16800 = vs__$1;
G__16770__$1 = G__16799;
G__16771__$1 = G__16800;
continue;
} else {
return null;
}
break;
}
});})(G__16761_16796,G__16762_16797))
;
goog.object.set(G__16761_16796,G__16762_16797,G__16763_16798);
goog.object.set(clojure.core.matrix.protocols.PNonZeroIndices,"object",true);

var G__16801_16812 = clojure.core.matrix.protocols.non_zero_indices;
var G__16802_16813 = "object";
var G__16803_16814 = ((function (G__16801_16812,G__16802_16813){
return (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_(m))){
return cljs.core.vec((function (){var iter__4523__auto__ = ((function (G__16801_16812,G__16802_16813){
return (function clojure$core$matrix$impl$defaults$iter__16804(s__16805){
return (new cljs.core.LazySeq(null,((function (G__16801_16812,G__16802_16813){
return (function (){
var s__16805__$1 = s__16805;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16805__$1);
if(temp__5720__auto__){
var s__16805__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16805__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16805__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16807 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16806 = (0);
while(true){
if((i__16806 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16806);
if((!((clojure.core.matrix.protocols.get_1d(m,i) === (0))))){
cljs.core.chunk_append(b__16807,i);

var G__16815 = (i__16806 + (1));
i__16806 = G__16815;
continue;
} else {
var G__16816 = (i__16806 + (1));
i__16806 = G__16816;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16807),clojure$core$matrix$impl$defaults$iter__16804(cljs.core.chunk_rest(s__16805__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16807),null);
}
} else {
var i = cljs.core.first(s__16805__$2);
if((!((clojure.core.matrix.protocols.get_1d(m,i) === (0))))){
return cljs.core.cons(i,clojure$core$matrix$impl$defaults$iter__16804(cljs.core.rest(s__16805__$2)));
} else {
var G__16817 = cljs.core.rest(s__16805__$2);
s__16805__$1 = G__16817;
continue;
}
}
} else {
return null;
}
break;
}
});})(G__16801_16812,G__16802_16813))
,null,null));
});})(G__16801_16812,G__16802_16813))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,(0))));
})());
} else {
return cljs.core.vec((function (){var iter__4523__auto__ = ((function (G__16801_16812,G__16802_16813){
return (function clojure$core$matrix$impl$defaults$iter__16808(s__16809){
return (new cljs.core.LazySeq(null,((function (G__16801_16812,G__16802_16813){
return (function (){
var s__16809__$1 = s__16809;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16809__$1);
if(temp__5720__auto__){
var s__16809__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16809__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16809__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16811 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16810 = (0);
while(true){
if((i__16810 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16810);
cljs.core.chunk_append(b__16811,clojure.core.matrix.protocols.non_zero_indices(clojure.core.matrix.protocols.get_major_slice(m,i)));

var G__16818 = (i__16810 + (1));
i__16810 = G__16818;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16811),clojure$core$matrix$impl$defaults$iter__16808(cljs.core.chunk_rest(s__16809__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16811),null);
}
} else {
var i = cljs.core.first(s__16809__$2);
return cljs.core.cons(clojure.core.matrix.protocols.non_zero_indices(clojure.core.matrix.protocols.get_major_slice(m,i)),clojure$core$matrix$impl$defaults$iter__16808(cljs.core.rest(s__16809__$2)));
}
} else {
return null;
}
break;
}
});})(G__16801_16812,G__16802_16813))
,null,null));
});})(G__16801_16812,G__16802_16813))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.dimension_count(m,(0))));
})());
}
});})(G__16801_16812,G__16802_16813))
;
goog.object.set(G__16801_16812,G__16802_16813,G__16803_16814);
goog.object.set(clojure.core.matrix.protocols.PMatrixTypes,"object",true);

var G__16819_16852 = clojure.core.matrix.protocols.diagonal_QMARK_;
var G__16820_16853 = "object";
var G__16821_16854 = ((function (G__16819_16852,G__16820_16853){
return (function (m){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)),(2))){
var vec__16822 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16822,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16822,(1),null);
return cljs.core.every_QMARK_(((function (vec__16822,mrows,mcols,G__16819_16852,G__16820_16853){
return (function (p__16825){
var vec__16826 = p__16825;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16826,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16826,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16826,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,j)){
return true;
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(i,j)) && ((v === (0))))){
return true;
} else {
return false;

}
}
});})(vec__16822,mrows,mcols,G__16819_16852,G__16820_16853))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (vec__16822,mrows,mcols,G__16819_16852,G__16820_16853){
return (function (i,elem){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.quot(i,mcols),cljs.core.rem(i,mcols),elem],null));
});})(vec__16822,mrows,mcols,G__16819_16852,G__16820_16853))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1((mrows * mcols)),clojure.core.matrix.protocols.element_seq(m)));
} else {
return false;
}
});})(G__16819_16852,G__16820_16853))
;
goog.object.set(G__16819_16852,G__16820_16853,G__16821_16854);

var G__16829_16855 = clojure.core.matrix.protocols.upper_triangular_QMARK_;
var G__16830_16856 = "object";
var G__16831_16857 = ((function (G__16829_16855,G__16830_16856){
return (function (m){
if(clojure.core.matrix.impl.common.square_QMARK_(m)){
return cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__16829_16855,G__16830_16856){
return (function (p__16832){
var vec__16833 = p__16832;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16833,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16833,(1),null);
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(idx,xs);
});})(G__16829_16855,G__16830_16856))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),clojure.core.matrix.protocols.get_slice_seq(m,(0)))], 0)));
} else {
return false;
}
});})(G__16829_16855,G__16830_16856))
;
goog.object.set(G__16829_16855,G__16830_16856,G__16831_16857);

var G__16836_16858 = clojure.core.matrix.protocols.lower_triangular_QMARK_;
var G__16837_16859 = "object";
var G__16838_16860 = ((function (G__16836_16858,G__16837_16859){
return (function (m){
if(clojure.core.matrix.impl.common.square_QMARK_(m)){
return cljs.core.every_QMARK_(cljs.core.zero_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__16836_16858,G__16837_16859){
return (function (p__16839){
var vec__16840 = p__16839;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16840,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16840,(1),null);
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((idx + (1)),xs);
});})(G__16836_16858,G__16837_16859))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),clojure.core.matrix.protocols.get_slice_seq(m,(0)))], 0)));
} else {
return false;
}
});})(G__16836_16858,G__16837_16859))
;
goog.object.set(G__16836_16858,G__16837_16859,G__16838_16860);

var G__16843_16861 = clojure.core.matrix.protocols.positive_definite_QMARK_;
var G__16844_16862 = "object";
var G__16845_16863 = ((function (G__16843_16861,G__16844_16862){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("TODO: Not yet implemented",cljs.core.PersistentArrayMap.EMPTY);

return clojure.core.matrix.protocols.positive_definite_QMARK_(clojure.core.matrix.protocols.convert_to_nested_vectors(m));
});})(G__16843_16861,G__16844_16862))
;
goog.object.set(G__16843_16861,G__16844_16862,G__16845_16863);

var G__16846_16864 = clojure.core.matrix.protocols.positive_semidefinite_QMARK_;
var G__16847_16865 = "object";
var G__16848_16866 = ((function (G__16846_16864,G__16847_16865){
return (function (m){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("TODO: Not yet implemented",cljs.core.PersistentArrayMap.EMPTY);
});})(G__16846_16864,G__16847_16865))
;
goog.object.set(G__16846_16864,G__16847_16865,G__16848_16866);

var G__16849_16867 = clojure.core.matrix.protocols.orthogonal_QMARK_;
var G__16850_16868 = "object";
var G__16851_16869 = ((function (G__16849_16867,G__16850_16868){
return (function (m,eps){
var and__4120__auto__ = clojure.core.matrix.impl.common.square_QMARK_(m);
if(and__4120__auto__){
return clojure.core.matrix.protocols.matrix_equals_epsilon(clojure.core.matrix.protocols.matrix_multiply(m,clojure.core.matrix.protocols.transpose(m)),clojure.core.matrix.protocols.identity_matrix(m,clojure.core.matrix.protocols.dimension_count(m,(0))),eps);
} else {
return and__4120__auto__;
}
});})(G__16849_16867,G__16850_16868))
;
goog.object.set(G__16849_16867,G__16850_16868,G__16851_16869);
goog.object.set(clojure.core.matrix.protocols.PSelect,"null",true);

var G__16870_16879 = clojure.core.matrix.protocols.select;
var G__16871_16880 = "null";
var G__16872_16881 = ((function (G__16870_16879,G__16871_16880){
return (function (a,area){
if(cljs.core.seq(area)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Trying to select on nil with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
});})(G__16870_16879,G__16871_16880))
;
goog.object.set(G__16870_16879,G__16871_16880,G__16872_16881);

goog.object.set(clojure.core.matrix.protocols.PSelect,"number",true);

var G__16873_16882 = clojure.core.matrix.protocols.select;
var G__16874_16883 = "number";
var G__16875_16884 = ((function (G__16873_16882,G__16874_16883){
return (function (a,area){
if(cljs.core.seq(area)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Trying to select on numerical scalar with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
});})(G__16873_16882,G__16874_16883))
;
goog.object.set(G__16873_16882,G__16874_16883,G__16875_16884);

goog.object.set(clojure.core.matrix.protocols.PSelect,"object",true);

var G__16876_16885 = clojure.core.matrix.protocols.select;
var G__16877_16886 = "object";
var G__16878_16887 = ((function (G__16876_16885,G__16877_16886){
return (function (a,area){
var or__4131__auto__ = clojure.core.matrix.protocols.select_view(a,area);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection(a,area);
}
});})(G__16876_16885,G__16877_16886))
;
goog.object.set(G__16876_16885,G__16877_16886,G__16878_16887);
goog.object.set(clojure.core.matrix.protocols.PSelectView,"null",true);

var G__16888_16897 = clojure.core.matrix.protocols.select_view;
var G__16889_16898 = "null";
var G__16890_16899 = ((function (G__16888_16897,G__16889_16898){
return (function (a,area){
if(cljs.core.seq(area)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Trying to select on nil with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
});})(G__16888_16897,G__16889_16898))
;
goog.object.set(G__16888_16897,G__16889_16898,G__16890_16899);

goog.object.set(clojure.core.matrix.protocols.PSelectView,"object",true);

var G__16891_16900 = clojure.core.matrix.protocols.select_view;
var G__16892_16901 = "object";
var G__16893_16902 = ((function (G__16891_16900,G__16892_16901){
return (function (a,area){
return clojure.core.matrix.impl.wrappers.wrap_selection(a,area);
});})(G__16891_16900,G__16892_16901))
;
goog.object.set(G__16891_16900,G__16892_16901,G__16893_16902);

goog.object.set(clojure.core.matrix.protocols.PSelectView,"number",true);

var G__16894_16903 = clojure.core.matrix.protocols.select_view;
var G__16895_16904 = "number";
var G__16896_16905 = ((function (G__16894_16903,G__16895_16904){
return (function (a,area){
if(cljs.core.seq(area)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Trying to select on numerical scalar with selection: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
});})(G__16894_16903,G__16895_16904))
;
goog.object.set(G__16894_16903,G__16895_16904,G__16896_16905);
goog.object.set(clojure.core.matrix.protocols.PSelect,"number",true);

var G__16906_16909 = clojure.core.matrix.protocols.select;
var G__16907_16910 = "number";
var G__16908_16911 = ((function (G__16906_16909,G__16907_16910){
return (function (a,area){
if(cljs.core.empty_QMARK_(area)){
return a;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Non empty area argument in select, called on Number ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});})(G__16906_16909,G__16907_16910))
;
goog.object.set(G__16906_16909,G__16907_16910,G__16908_16911);
clojure.core.matrix.impl.defaults.area_indices = (function clojure$core$matrix$impl$defaults$area_indices(area){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (io,in$){
var iter__4523__auto__ = (function clojure$core$matrix$impl$defaults$area_indices_$_iter__16912(s__16913){
return (new cljs.core.LazySeq(null,(function (){
var s__16913__$1 = s__16913;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__16913__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var a = cljs.core.first(xs__6277__auto__);
var iterys__4519__auto__ = ((function (s__16913__$1,a,xs__6277__auto__,temp__5720__auto__){
return (function clojure$core$matrix$impl$defaults$area_indices_$_iter__16912_$_iter__16914(s__16915){
return (new cljs.core.LazySeq(null,((function (s__16913__$1,a,xs__6277__auto__,temp__5720__auto__){
return (function (){
var s__16915__$1 = s__16915;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__16915__$1);
if(temp__5720__auto____$1){
var s__16915__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16915__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__16915__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__16917 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__16916 = (0);
while(true){
if((i__16916 < size__4522__auto__)){
var b = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__16916);
cljs.core.chunk_append(b__16917,cljs.core.cons(a,b));

var G__16918 = (i__16916 + (1));
i__16916 = G__16918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16917),clojure$core$matrix$impl$defaults$area_indices_$_iter__16912_$_iter__16914(cljs.core.chunk_rest(s__16915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16917),null);
}
} else {
var b = cljs.core.first(s__16915__$2);
return cljs.core.cons(cljs.core.cons(a,b),clojure$core$matrix$impl$defaults$area_indices_$_iter__16912_$_iter__16914(cljs.core.rest(s__16915__$2)));
}
} else {
return null;
}
break;
}
});})(s__16913__$1,a,xs__6277__auto__,temp__5720__auto__))
,null,null));
});})(s__16913__$1,a,xs__6277__auto__,temp__5720__auto__))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(io));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,clojure$core$matrix$impl$defaults$area_indices_$_iter__16912(cljs.core.rest(s__16913__$1)));
} else {
var G__16919 = cljs.core.rest(s__16913__$1);
s__16913__$1 = G__16919;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(in$);
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.last(area)),cljs.core.rest(cljs.core.reverse(area)));
});
clojure.core.matrix.impl.defaults.indices = (function clojure$core$matrix$impl$defaults$indices(vals){
return clojure.core.matrix.impl.defaults.area_indices(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.range,clojure.core.matrix.protocols.get_shape(vals)));
});
goog.object.set(clojure.core.matrix.protocols.PSetSelection,"object",true);

var G__16920_16923 = clojure.core.matrix.protocols.set_selection;
var G__16921_16924 = "object";
var G__16922_16925 = ((function (G__16920_16923,G__16921_16924){
return (function (m,area,vals){
var mm = (function (){var or__4131__auto__ = clojure.core.matrix.protocols.mutable_matrix(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix(m);
}
})();
var v = clojure.core.matrix.protocols.select_view(m,area);
clojure.core.matrix.protocols.assign_BANG_(v,vals);

return mm;
});})(G__16920_16923,G__16921_16924))
;
goog.object.set(G__16920_16923,G__16921_16924,G__16922_16925);
goog.object.set(clojure.core.matrix.protocols.PIndexImplementation,"object",true);

var G__16926_16944 = clojure.core.matrix.protocols.index_QMARK_;
var G__16927_16945 = "object";
var G__16928_16946 = ((function (G__16926_16944,G__16927_16945){
return (function (m){
return false;
});})(G__16926_16944,G__16927_16945))
;
goog.object.set(G__16926_16944,G__16927_16945,G__16928_16946);

var G__16929_16947 = clojure.core.matrix.protocols.index_to_longs;
var G__16930_16948 = "object";
var G__16931_16949 = ((function (G__16929_16947,G__16930_16948){
return (function (m){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_seq(m));
});})(G__16929_16947,G__16930_16948))
;
goog.object.set(G__16929_16947,G__16930_16948,G__16931_16949);

var G__16932_16950 = clojure.core.matrix.protocols.index_to_ints;
var G__16933_16951 = "object";
var G__16934_16952 = ((function (G__16932_16950,G__16933_16951){
return (function (m){
return cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(clojure.core.matrix.protocols.element_seq(m));
});})(G__16932_16950,G__16933_16951))
;
goog.object.set(G__16932_16950,G__16933_16951,G__16934_16952);

var G__16935_16953 = clojure.core.matrix.protocols.index_from_longs;
var G__16936_16954 = "object";
var G__16937_16955 = ((function (G__16935_16953,G__16936_16954){
return (function (m,xs){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(xs);
});})(G__16935_16953,G__16936_16954))
;
goog.object.set(G__16935_16953,G__16936_16954,G__16937_16955);

var G__16938_16956 = clojure.core.matrix.protocols.index_from_ints;
var G__16939_16957 = "object";
var G__16940_16958 = ((function (G__16938_16956,G__16939_16957){
return (function (m,xs){
return cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(xs);
});})(G__16938_16956,G__16939_16957))
;
goog.object.set(G__16938_16956,G__16939_16957,G__16940_16958);

var G__16941_16959 = clojure.core.matrix.protocols.index_coerce;
var G__16942_16960 = "object";
var G__16943_16961 = ((function (G__16941_16959,G__16942_16960){
return (function (m,a){
return clojure.core.matrix.protocols.index_to_longs(m);
});})(G__16941_16959,G__16942_16960))
;
goog.object.set(G__16941_16959,G__16942_16960,G__16943_16961);
goog.object.set(clojure.core.matrix.protocols.PDimensionLabels,"object",true);

var G__16962_16968 = clojure.core.matrix.protocols.label;
var G__16963_16969 = "object";
var G__16964_16970 = ((function (G__16962_16968,G__16963_16969){
return (function (m,dim,i){
if(((((0) <= cljs.core.long$(i))) && ((cljs.core.long$(i) <= (cljs.core.long$(clojure.core.matrix.protocols.dimension_count(m,dim)) - (1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Dimension index out of range: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});})(G__16962_16968,G__16963_16969))
;
goog.object.set(G__16962_16968,G__16963_16969,G__16964_16970);

var G__16965_16971 = clojure.core.matrix.protocols.labels;
var G__16966_16972 = "object";
var G__16967_16973 = ((function (G__16965_16971,G__16966_16972){
return (function (m,dim){
if(((((0) <= cljs.core.long$(dim))) && ((cljs.core.long$(dim) <= (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) - (1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Dimension out of range: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dim)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});})(G__16965_16971,G__16966_16972))
;
goog.object.set(G__16965_16971,G__16966_16972,G__16967_16973);
goog.object.set(clojure.core.matrix.protocols.PColumnNames,"object",true);

var G__16974_16980 = clojure.core.matrix.protocols.column_name;
var G__16975_16981 = "object";
var G__16976_16982 = ((function (G__16974_16980,G__16975_16981){
return (function (m,i){
var dim = (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) - (1));
return clojure.core.matrix.protocols.label(m,dim,i);
});})(G__16974_16980,G__16975_16981))
;
goog.object.set(G__16974_16980,G__16975_16981,G__16976_16982);

var G__16977_16983 = clojure.core.matrix.protocols.column_names;
var G__16978_16984 = "object";
var G__16979_16985 = ((function (G__16977_16983,G__16978_16984){
return (function (m){
var dim = (cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m)) - (1));
return clojure.core.matrix.protocols.labels(m,dim);
});})(G__16977_16983,G__16978_16984))
;
goog.object.set(G__16977_16983,G__16978_16984,G__16979_16985);
goog.object.set(clojure.core.matrix.protocols.PNorm,"object",true);

var G__16986_16994 = clojure.core.matrix.protocols.norm;
var G__16987_16995 = "object";
var G__16988_16996 = ((function (G__16986_16994,G__16987_16995){
return (function (m,p){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,Number.POSITIVE_INFINITY)){
return clojure.core.matrix.protocols.element_max(clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.mathsops.abs));
} else {
if(typeof p === 'number'){
var sum_of_element_powers = clojure.core.matrix.protocols.element_sum(clojure.core.matrix.protocols.element_pow(clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.mathsops.abs),p));
var pred__16989 = cljs.core._EQ__EQ_;
var expr__16990 = p;
if(cljs.core.truth_((pred__16989.cljs$core$IFn$_invoke$arity$2 ? pred__16989.cljs$core$IFn$_invoke$arity$2((1),expr__16990) : pred__16989.call(null,(1),expr__16990)))){
return sum_of_element_powers;
} else {
if(cljs.core.truth_((pred__16989.cljs$core$IFn$_invoke$arity$2 ? pred__16989.cljs$core$IFn$_invoke$arity$2((2),expr__16990) : pred__16989.call(null,(2),expr__16990)))){
return Math.sqrt(sum_of_element_powers);
} else {
if(cljs.core.truth_((pred__16989.cljs$core$IFn$_invoke$arity$2 ? pred__16989.cljs$core$IFn$_invoke$arity$2((3),expr__16990) : pred__16989.call(null,(3),expr__16990)))){
return Math.cbrt(sum_of_element_powers);
} else {
var G__16992 = sum_of_element_powers;
var G__16993 = (1.0 / p);
return Math.pow(G__16992,G__16993);
}
}
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("p must be a number",cljs.core.PersistentArrayMap.EMPTY);

}
}
});})(G__16986_16994,G__16987_16995))
;
goog.object.set(G__16986_16994,G__16987_16995,G__16988_16996);
clojure.core.matrix.impl.defaults.compute_q = (function clojure$core$matrix$impl$defaults$compute_q(m,qr_data,mcols,mrows,min_len,us,vs,gammas){
var q = clojure.core.matrix.protocols.to_double_array(clojure.core.matrix.protocols.identity_matrix(cljs.core.PersistentVector.EMPTY,mrows));
var mcols__$1 = cljs.core.long$(mcols);
var mrows__$1 = cljs.core.long$(mrows);
var min_len__$1 = cljs.core.long$(min_len);
var i_16997 = (min_len__$1 - (1));
while(true){
if((i_16997 > (-1))){
var gamma_16998 = (gammas[i_16997]);
(us[i_16997] = 1.0);

var j_16999 = (i_16997 + (1));
while(true){
if((j_16999 < mrows__$1)){
(us[j_16999] = (qr_data[((j_16999 * mcols__$1) + i_16997)]));

var G__17000 = (j_16999 + (1));
j_16999 = G__17000;
continue;
} else {
}
break;
}


var j_17001 = i_16997;
while(true){
if((j_17001 < mrows__$1)){
(vs[j_17001] = ((us[i_16997]) * (q[((i_16997 * mrows__$1) + j_17001)])));

var G__17002 = (j_17001 + (1));
j_17001 = G__17002;
continue;
} else {
}
break;
}


var j_17003 = (i_16997 + (1));
while(true){
if((j_17003 < mrows__$1)){
var u_17004 = (us[j_17003]);
var k_17005 = i_16997;
while(true){
if((k_17005 < mrows__$1)){
var q_idx_17006 = (((j_17003 * mrows__$1) + i_16997) + (k_17005 - i_16997));
(vs[k_17005] = ((vs[k_17005]) + (u_17004 * (q[q_idx_17006]))));

var G__17007 = (k_17005 + (1));
k_17005 = G__17007;
continue;
} else {
}
break;
}


var G__17008 = (j_17003 + (1));
j_17003 = G__17008;
continue;
} else {
}
break;
}


var j_17009 = i_16997;
while(true){
if((j_17009 < mrows__$1)){
(vs[j_17009] = ((vs[j_17009]) * gamma_16998));

var G__17010 = (j_17009 + (1));
j_17009 = G__17010;
continue;
} else {
}
break;
}


var j_17011 = i_16997;
while(true){
if((j_17011 < mrows__$1)){
var u_17012 = (us[j_17011]);
var k_17013 = i_16997;
while(true){
if((k_17013 < mrows__$1)){
var qr_idx_17014 = (((j_17011 * mrows__$1) + i_16997) + (k_17013 - i_16997));
(q[qr_idx_17014] = ((q[qr_idx_17014]) - (u_17012 * (vs[k_17013]))));

var G__17015 = (k_17013 + (1));
k_17013 = G__17015;
continue;
} else {
}
break;
}


var G__17016 = (j_17011 + (1));
j_17011 = G__17016;
continue;
} else {
}
break;
}


var G__17017 = (i_16997 - (1));
i_16997 = G__17017;
continue;
} else {
}
break;
}


return clojure.core.matrix.protocols.compute_matrix(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mrows__$1], null),((function (q,mcols__$1,mrows__$1,min_len__$1){
return (function (i,j){
return (q[((i * mrows__$1) + j)]);
});})(q,mcols__$1,mrows__$1,min_len__$1))
);
});
clojure.core.matrix.impl.defaults.compute_r = (function clojure$core$matrix$impl$defaults$compute_r(m,data,mcols,mrows,min_len,compact_QMARK_){
var mrows__$1 = cljs.core.long$(mrows);
var mcols__$1 = cljs.core.long$(mcols);
var min_len__$1 = cljs.core.long$(min_len);
var cm = clojure.core.matrix.protocols.compute_matrix(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mcols__$1], null),((function (mrows__$1,mcols__$1,min_len__$1){
return (function (i,j){
if((((i < min_len__$1)) && ((j >= i)) && ((j < mcols__$1)))){
return (data[((i * mcols__$1) + j)]);
} else {
return (0);
}
});})(mrows__$1,mcols__$1,min_len__$1))
);
if(cljs.core.truth_(compact_QMARK_)){
var slcs = clojure.core.matrix.protocols.get_major_slice_seq(cm);
var non_zero_rows = cljs.core.long$(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (slcs,mrows__$1,mcols__$1,min_len__$1,cm){
return (function (cnt,slice){
if(cljs.core.every_QMARK_(cljs.core.zero_QMARK_,slice)){
return (cnt + (1));
} else {
return cnt;
}
});})(slcs,mrows__$1,mcols__$1,min_len__$1,cm))
,(0),slcs));
return clojure.core.matrix.protocols.reshape(cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols__$1,(mrows__$1 - non_zero_rows)], null));
} else {
return cm;
}
});
clojure.core.matrix.impl.defaults.householder_qr = (function clojure$core$matrix$impl$defaults$householder_qr(qr_data,idx,mcols,mrows,us,gammas){
var idx__$1 = cljs.core.long$(idx);
var mcols__$1 = cljs.core.long$(mcols);
var mrows__$1 = cljs.core.long$(mrows);
var qr_idx_17021 = cljs.core.long$((idx__$1 + (idx__$1 * mcols__$1)));
var i_17022 = cljs.core.long$(idx__$1);
while(true){
if((i_17022 < mrows__$1)){
(us[i_17022] = (qr_data[qr_idx_17021]));

var G__17023 = (qr_idx_17021 + mcols__$1);
var G__17024 = (i_17022 + (1));
qr_idx_17021 = G__17023;
i_17022 = G__17024;
continue;
} else {
}
break;
}

var max_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (idx__$1,mcols__$1,mrows__$1){
return (function (p1__17018_SHARP_){
var G__17019 = p1__17018_SHARP_;
return Math.abs(G__17019);
});})(idx__$1,mcols__$1,mrows__$1))
,clojure.core.matrix.protocols.subvector(us,idx__$1,(mrows__$1 - idx__$1))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_,0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,true], null);
} else {
var _ = (function (){
var i_17025 = idx__$1;
while(true){
if((i_17025 < mrows__$1)){
(us[i_17025] = ((us[i_17025]) / max_));

var G__17026 = (i_17025 + (1));
i_17025 = G__17026;
continue;
} else {
}
break;
}

return null;
})()
;
var tau = (function (){var G__17020 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_,max_,idx__$1,mcols__$1,mrows__$1){
return (function (acc,x){
return (acc + (x * x));
});})(_,max_,idx__$1,mcols__$1,mrows__$1))
,0.0,clojure.core.matrix.protocols.subvector(us,idx__$1,(mrows__$1 - idx__$1)));
return Math.sqrt(G__17020);
})();
var u_idx = (us[idx__$1]);
var tau__$1 = (((u_idx < (0)))?(- tau):tau);
var u_0 = (u_idx + tau__$1);
var gamma = (u_0 / tau__$1);
var tau__$2 = (tau__$1 * max_);
(gammas[idx__$1] = gamma);

var i_17027 = (idx__$1 + (1));
while(true){
if((i_17027 < mrows__$1)){
(us[i_17027] = ((us[i_17027]) / u_0));

var G__17028 = (i_17027 + (1));
i_17027 = G__17028;
continue;
} else {
}
break;
}


(us[idx__$1] = 1.0);

return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$gamma,gamma,cljs.core.cst$kw$gammas,gammas,cljs.core.cst$kw$us,us,cljs.core.cst$kw$tau,tau__$2,cljs.core.cst$kw$error,false], null);
}
});
clojure.core.matrix.impl.defaults.update_qr = (function clojure$core$matrix$impl$defaults$update_qr(qr_data,idx,mcols,mrows,vs,us,gamma,tau){
var idx__$1 = cljs.core.long$(idx);
var mrows__$1 = cljs.core.long$(mrows);
var mcols__$1 = cljs.core.long$(mcols);
var u = (us[idx__$1]);
var idx_PLUS_1 = (idx__$1 + (1));
var gamma__$1 = gamma;
var tau__$1 = tau;
var i_17029 = idx_PLUS_1;
while(true){
if((i_17029 < mcols__$1)){
(vs[i_17029] = (qr_data[(i_17029 + (idx__$1 * mcols__$1))]));

var G__17030 = (i_17029 + (1));
i_17029 = G__17030;
continue;
} else {
}
break;
}


var i_17031 = idx_PLUS_1;
while(true){
if((i_17031 < mrows__$1)){
var qr_idx_17032 = (idx_PLUS_1 + (i_17031 * mcols__$1));
var j_17033 = idx_PLUS_1;
while(true){
if((j_17033 < mcols__$1)){
(vs[j_17033] = ((vs[j_17033]) + ((us[i_17031]) * (qr_data[(qr_idx_17032 + (j_17033 - idx_PLUS_1))]))));

var G__17034 = (j_17033 + (1));
j_17033 = G__17034;
continue;
} else {
}
break;
}


var G__17035 = (i_17031 + (1));
i_17031 = G__17035;
continue;
} else {
}
break;
}


var i_17036 = idx_PLUS_1;
while(true){
if((i_17036 < mcols__$1)){
(vs[i_17036] = ((vs[i_17036]) * gamma__$1));

var G__17037 = (i_17036 + (1));
i_17036 = G__17037;
continue;
} else {
}
break;
}


var i_17038 = idx__$1;
while(true){
if((i_17038 < mrows__$1)){
var u_17039__$1 = (us[i_17038]);
var j_17040 = idx_PLUS_1;
while(true){
if((j_17040 < mcols__$1)){
var qr_idx_17041 = (((i_17038 * mcols__$1) + idx_PLUS_1) + (j_17040 - idx_PLUS_1));
(qr_data[qr_idx_17041] = ((qr_data[qr_idx_17041]) - (u_17039__$1 * (vs[j_17040]))));

var G__17042 = (j_17040 + (1));
j_17040 = G__17042;
continue;
} else {
}
break;
}


var G__17043 = (i_17038 + (1));
i_17038 = G__17043;
continue;
} else {
}
break;
}


if((idx__$1 < mcols__$1)){
(qr_data[(idx__$1 + (idx__$1 * mcols__$1))] = (- tau__$1));
} else {
}

var i_17044 = idx_PLUS_1;
while(true){
if((i_17044 < mrows__$1)){
(qr_data[(idx__$1 + (i_17044 * mcols__$1))] = (us[i_17044]));

var G__17045 = (i_17044 + (1));
i_17044 = G__17045;
continue;
} else {
}
break;
}


return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$qr_DASH_data,qr_data,cljs.core.cst$kw$vs,vs], null);
});
goog.object.set(clojure.core.matrix.protocols.PQRDecomposition,"object",true);

var G__17046_17068 = clojure.core.matrix.protocols.qr;
var G__17047_17069 = "object";
var G__17048_17070 = ((function (G__17046_17068,G__17047_17069){
return (function (m,options){
var vec__17049 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17049,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17049,(1),null);
var mrows__$1 = cljs.core.long$(mrows);
var mcols__$1 = cljs.core.long$(mcols);
var min_len = (function (){var x__4222__auto__ = mcols__$1;
var y__4223__auto__ = mrows__$1;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var max_len = (function (){var x__4219__auto__ = mcols__$1;
var y__4220__auto__ = mrows__$1;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var qr_data = clojure.core.matrix.protocols.to_double_array(m);
var vs = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(max_len);
var us = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(max_len);
var gammas = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(min_len);
var gamma = 0.0;
var tau = 0.0;
var i = (0);
while(true){
if((i < min_len)){
var map__17060 = clojure.core.matrix.impl.defaults.householder_qr(qr_data,i,mcols__$1,mrows__$1,us,gammas);
var map__17060__$1 = (((((!((map__17060 == null))))?(((((map__17060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17060):map__17060);
var us__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17060__$1,cljs.core.cst$kw$us);
var gamma__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17060__$1,cljs.core.cst$kw$gamma);
var gammas__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17060__$1,cljs.core.cst$kw$gammas);
var tau__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17060__$1,cljs.core.cst$kw$tau);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17060__$1,cljs.core.cst$kw$error);
if(cljs.core.truth_(error)){
return null;
} else {
var map__17062 = clojure.core.matrix.impl.defaults.update_qr(qr_data,i,mcols__$1,mrows__$1,vs,us__$1,gamma__$1,tau__$1);
var map__17062__$1 = (((((!((map__17062 == null))))?(((((map__17062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17062):map__17062);
var qr_data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17062__$1,cljs.core.cst$kw$qr_DASH_data);
var vs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17062__$1,cljs.core.cst$kw$vs);
var G__17071 = qr_data__$1;
var G__17072 = vs__$1;
var G__17073 = us__$1;
var G__17074 = gammas__$1;
var G__17075 = gamma__$1;
var G__17076 = tau__$1;
var G__17077 = (i + (1));
qr_data = G__17071;
vs = G__17072;
us = G__17073;
gammas = G__17074;
gamma = G__17075;
tau = G__17076;
i = G__17077;
continue;
}
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (qr_data,vs,us,gammas,gamma,tau,i,vec__17049,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len,G__17046_17068,G__17047_17069){
return (function (p__17064){
var vec__17065 = p__17064;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17065,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17065,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(v.cljs$core$IFn$_invoke$arity$0 ? v.cljs$core$IFn$_invoke$arity$0() : v.call(null))], null);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__17049,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len,G__17046_17068,G__17047_17069))
,cljs.core.select_keys(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$Q,((function (qr_data,vs,us,gammas,gamma,tau,i,vec__17049,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len,G__17046_17068,G__17047_17069){
return (function (){
return clojure.core.matrix.impl.defaults.compute_q(m,qr_data,mcols__$1,mrows__$1,min_len,us,vs,gammas);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__17049,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len,G__17046_17068,G__17047_17069))
,cljs.core.cst$kw$R,((function (qr_data,vs,us,gammas,gamma,tau,i,vec__17049,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len,G__17046_17068,G__17047_17069){
return (function (){
return clojure.core.matrix.impl.defaults.compute_r(m,qr_data,mcols__$1,mrows__$1,min_len,cljs.core.cst$kw$compact.cljs$core$IFn$_invoke$arity$1(options));
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__17049,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len,G__17046_17068,G__17047_17069))
], null),cljs.core.cst$kw$return.cljs$core$IFn$_invoke$arity$1(options))));
}
break;
}
});})(G__17046_17068,G__17047_17069))
;
goog.object.set(G__17046_17068,G__17047_17069,G__17048_17070);
goog.object.set(clojure.core.matrix.protocols.PCholeskyDecomposition,"object",true);

var G__17078_17083 = clojure.core.matrix.protocols.cholesky;
var G__17079_17084 = "object";
var G__17080_17085 = ((function (G__17078_17083,G__17079_17084){
return (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__17081 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__17082 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__17082;

try{var imp__2381__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp__2381__auto__,m);
return clojure.core.matrix.protocols.cholesky(m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__17081;
}} else {
return null;
}
});})(G__17078_17083,G__17079_17084))
;
goog.object.set(G__17078_17083,G__17079_17084,G__17080_17085);
goog.object.set(clojure.core.matrix.protocols.PLUDecomposition,"object",true);

var G__17086_17091 = clojure.core.matrix.protocols.lu;
var G__17087_17092 = "object";
var G__17088_17093 = ((function (G__17086_17091,G__17087_17092){
return (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__17089 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__17090 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__17090;

try{var imp__2381__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp__2381__auto__,m);
return clojure.core.matrix.protocols.lu(m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__17089;
}} else {
return null;
}
});})(G__17086_17091,G__17087_17092))
;
goog.object.set(G__17086_17091,G__17087_17092,G__17088_17093);
goog.object.set(clojure.core.matrix.protocols.PSVDDecomposition,"object",true);

var G__17094_17099 = clojure.core.matrix.protocols.svd;
var G__17095_17100 = "object";
var G__17096_17101 = ((function (G__17094_17099,G__17095_17100){
return (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__17097 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__17098 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__17098;

try{var imp__2381__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp__2381__auto__,m);
return clojure.core.matrix.protocols.svd(m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__17097;
}} else {
return null;
}
});})(G__17094_17099,G__17095_17100))
;
goog.object.set(G__17094_17099,G__17095_17100,G__17096_17101);
goog.object.set(clojure.core.matrix.protocols.PEigenDecomposition,"object",true);

var G__17102_17107 = clojure.core.matrix.protocols.eigen;
var G__17103_17108 = "object";
var G__17104_17109 = ((function (G__17102_17107,G__17103_17108){
return (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__17105 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__17106 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__17106;

try{var imp__2381__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var m__$1 = clojure.core.matrix.protocols.coerce_param(imp__2381__auto__,m);
return clojure.core.matrix.protocols.eigen(m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__17105;
}} else {
return null;
}
});})(G__17102_17107,G__17103_17108))
;
goog.object.set(G__17102_17107,G__17103_17108,G__17104_17109);
goog.object.set(clojure.core.matrix.protocols.PSolveLinear,"object",true);

var G__17110_17115 = clojure.core.matrix.protocols.solve;
var G__17111_17116 = "object";
var G__17112_17117 = ((function (G__17110_17115,G__17111_17116){
return (function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__17113 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__17114 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__17114;

try{var imp__2381__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var a__$1 = clojure.core.matrix.protocols.coerce_param(imp__2381__auto__,a);
return clojure.core.matrix.protocols.solve(a__$1,b);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__17113;
}} else {
return null;
}
});})(G__17110_17115,G__17111_17116))
;
goog.object.set(G__17110_17115,G__17111_17116,G__17112_17117);
goog.object.set(clojure.core.matrix.protocols.PLeastSquares,"object",true);

var G__17118_17123 = clojure.core.matrix.protocols.least_squares;
var G__17119_17124 = "object";
var G__17120_17125 = ((function (G__17118_17123,G__17119_17124){
return (function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR__orig_val__17121 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
var _STAR_trying_current_implementation_STAR__temp_val__17122 = true;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__temp_val__17122;

try{var imp__2381__auto__ = clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$0();
var a__$1 = clojure.core.matrix.protocols.coerce_param(imp__2381__auto__,a);
return clojure.core.matrix.protocols.least_squares(a__$1,b);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR__orig_val__17121;
}} else {
return null;
}
});})(G__17118_17123,G__17119_17124))
;
goog.object.set(G__17118_17123,G__17119_17124,G__17120_17125);
