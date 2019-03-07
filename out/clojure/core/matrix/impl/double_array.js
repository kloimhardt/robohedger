// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.matrix.impl.double_array');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.wrappers');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.utils');
/**
 * Creates a new zero-filled nested double array of the given shape
 */
clojure.core.matrix.impl.double_array.new_double_array = (function clojure$core$matrix$impl$double_array$new_double_array(shape){
var dims = cljs.core.count(shape);
if(((0) === dims)){
return 0.0;
} else {
if(((1) === dims)){
return cljs.core.double_array.cljs$core$IFn$_invoke$arity$1((cljs.core.first(shape) | (0)));
} else {
var ns = cljs.core.next(shape);
var rn = cljs.core.long$(cljs.core.first(shape));
var r0 = (clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1(ns) : clojure.core.matrix.impl.double_array.new_double_array.call(null,ns));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(r0,(function (){var iter__4523__auto__ = ((function (ns,rn,r0,dims){
return (function clojure$core$matrix$impl$double_array$new_double_array_$_iter__10066(s__10067){
return (new cljs.core.LazySeq(null,((function (ns,rn,r0,dims){
return (function (){
var s__10067__$1 = s__10067;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__10067__$1);
if(temp__5720__auto__){
var s__10067__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10067__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__10067__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__10069 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__10068 = (0);
while(true){
if((i__10068 < size__4522__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__10068);
cljs.core.chunk_append(b__10069,(clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1(ns) : clojure.core.matrix.impl.double_array.new_double_array.call(null,ns)));

var G__10070 = (i__10068 + (1));
i__10068 = G__10070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10069),clojure$core$matrix$impl$double_array$new_double_array_$_iter__10066(cljs.core.chunk_rest(s__10067__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10069),null);
}
} else {
var i = cljs.core.first(s__10067__$2);
return cljs.core.cons((clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1 ? clojure.core.matrix.impl.double_array.new_double_array.cljs$core$IFn$_invoke$arity$1(ns) : clojure.core.matrix.impl.double_array.new_double_array.call(null,ns)),clojure$core$matrix$impl$double_array$new_double_array_$_iter__10066(cljs.core.rest(s__10067__$2)));
}
} else {
return null;
}
break;
}
});})(ns,rn,r0,dims))
,null,null));
});})(ns,rn,r0,dims))
;
return iter__4523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((rn - (1))));
})()));

}
}
});
clojure.core.matrix.impl.double_array.construct_double_array = (function clojure$core$matrix$impl$double_array$construct_double_array(data){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data));
if((dims === (1))){
var n = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(data,(0)));
var r = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(n);
var n__4607__auto___10071 = n;
var i_10072 = (0);
while(true){
if((i_10072 < n__4607__auto___10071)){
(r[i_10072] = clojure.core.matrix.protocols.get_1d(data,i_10072));

var G__10073 = (i_10072 + (1));
i_10072 = G__10073;
continue;
} else {
}
break;
}

return r;
} else {
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d(data);
} else {
return null;

}
}
});
goog.object.set(clojure.core.matrix.protocols.PImmutableAssignment,"array",true);

var G__10074_10077 = clojure.core.matrix.protocols.assign;
var G__10075_10078 = "array";
var G__10076_10079 = ((function (G__10074_10077,G__10075_10078){
return (function (m,source){
return null;
});})(G__10074_10077,G__10075_10078))
;
goog.object.set(G__10074_10077,G__10075_10078,G__10076_10079);
goog.object.set(clojure.core.matrix.protocols.PAssignment,"array",true);

var G__10080_10086 = clojure.core.matrix.protocols.assign_BANG_;
var G__10081_10087 = "array";
var G__10082_10088 = ((function (G__10080_10086,G__10081_10087){
return (function (m,source){
var n__4607__auto___10089 = cljs.core.count(source);
var i_10090 = (0);
while(true){
if((i_10090 < n__4607__auto___10089)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i_10090,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(source,i_10090));

var G__10091 = (i_10090 + (1));
i_10090 = G__10091;
continue;
} else {
}
break;
}

return m;
});})(G__10080_10086,G__10081_10087))
;
goog.object.set(G__10080_10086,G__10081_10087,G__10082_10088);

var G__10083_10092 = clojure.core.matrix.protocols.assign_array_BANG_;
var G__10084_10093 = "array";
var G__10085_10094 = ((function (G__10083_10092,G__10084_10093){
return (function (m,arr,start,length){
var length_10095__$1 = cljs.core.long$(length);
var start_10096__$1 = cljs.core.long$(start);
var n__4607__auto___10097 = length_10095__$1;
var i_10098 = (0);
while(true){
if((i_10098 < n__4607__auto___10097)){
clojure.core.matrix.protocols.set_1d_BANG_(m,i_10098,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(arr,(start_10096__$1 + i_10098)));

var G__10099 = (i_10098 + (1));
i_10098 = G__10099;
continue;
} else {
}
break;
}

return m;
});})(G__10083_10092,G__10084_10093))
;
goog.object.set(G__10083_10092,G__10084_10093,G__10085_10094);
goog.object.set(clojure.core.matrix.protocols.PImplementation,"array",true);

var G__10100_10121 = clojure.core.matrix.protocols.implementation_key;
var G__10101_10122 = "array";
var G__10102_10123 = ((function (G__10100_10121,G__10101_10122){
return (function (m){
return cljs.core.cst$kw$number_DASH_array;
});})(G__10100_10121,G__10101_10122))
;
goog.object.set(G__10100_10121,G__10101_10122,G__10102_10123);

var G__10103_10124 = clojure.core.matrix.protocols.meta_info;
var G__10104_10125 = "array";
var G__10105_10126 = ((function (G__10103_10124,G__10104_10125){
return (function (m){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$doc,"Clojure.core.matrix implementation for JS arrays"], null);
});})(G__10103_10124,G__10104_10125))
;
goog.object.set(G__10103_10124,G__10104_10125,G__10105_10126);

var G__10106_10127 = clojure.core.matrix.protocols.new_vector;
var G__10107_10128 = "array";
var G__10108_10129 = ((function (G__10106_10127,G__10107_10128){
return (function (m,length){
return cljs.core.double_array.cljs$core$IFn$_invoke$arity$1((length | (0)));
});})(G__10106_10127,G__10107_10128))
;
goog.object.set(G__10106_10127,G__10107_10128,G__10108_10129);

var G__10109_10130 = clojure.core.matrix.protocols.new_matrix;
var G__10110_10131 = "array";
var G__10111_10132 = ((function (G__10109_10130,G__10110_10131){
return (function (m,rows,columns){
return clojure.core.matrix.impl.double_array.new_double_array(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,columns], null));
});})(G__10109_10130,G__10110_10131))
;
goog.object.set(G__10109_10130,G__10110_10131,G__10111_10132);

var G__10112_10133 = clojure.core.matrix.protocols.new_matrix_nd;
var G__10113_10134 = "array";
var G__10114_10135 = ((function (G__10112_10133,G__10113_10134){
return (function (m,shape){
return clojure.core.matrix.impl.double_array.new_double_array(shape);
});})(G__10112_10133,G__10113_10134))
;
goog.object.set(G__10112_10133,G__10113_10134,G__10114_10135);

var G__10115_10136 = clojure.core.matrix.protocols.construct_matrix;
var G__10116_10137 = "array";
var G__10117_10138 = ((function (G__10115_10136,G__10116_10137){
return (function (m,data){
var dims = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(data));
if((dims === (2))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Double arrays in cljs only support a single dimension currently - submit a patch!",cljs.core.PersistentArrayMap.EMPTY);
} else {
if((dims === (1))){
var n = cljs.core.long$(clojure.core.matrix.protocols.dimension_count(data,(0)));
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(n);
var n__4607__auto___10139 = n;
var i_10140 = (0);
while(true){
if((i_10140 < n__4607__auto___10139)){
(arr[i_10140] = clojure.core.matrix.protocols.get_1d(data,i_10140));

var G__10141 = (i_10140 + (1));
i_10140 = G__10141;
continue;
} else {
}
break;
}

return arr;
} else {
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d(data);
} else {
return null;

}
}
}
});})(G__10115_10136,G__10116_10137))
;
goog.object.set(G__10115_10136,G__10116_10137,G__10117_10138);

var G__10118_10142 = clojure.core.matrix.protocols.supports_dimensionality_QMARK_;
var G__10119_10143 = "array";
var G__10120_10144 = ((function (G__10118_10142,G__10119_10143){
return (function (m,dims){
var dims__$1 = cljs.core.long$(dims);
return (((dims__$1 === (1))) || ((dims__$1 === (2))));
});})(G__10118_10142,G__10119_10143))
;
goog.object.set(G__10118_10142,G__10119_10143,G__10120_10144);
goog.object.set(clojure.core.matrix.protocols.PDimensionInfo,"array",true);

var G__10145_10160 = clojure.core.matrix.protocols.dimensionality;
var G__10146_10161 = "array";
var G__10147_10162 = ((function (G__10145_10160,G__10146_10161){
return (function (m){
return (1);
});})(G__10145_10160,G__10146_10161))
;
goog.object.set(G__10145_10160,G__10146_10161,G__10147_10162);

var G__10148_10163 = clojure.core.matrix.protocols.is_vector_QMARK_;
var G__10149_10164 = "array";
var G__10150_10165 = ((function (G__10148_10163,G__10149_10164){
return (function (m){
return true;
});})(G__10148_10163,G__10149_10164))
;
goog.object.set(G__10148_10163,G__10149_10164,G__10150_10165);

var G__10151_10166 = clojure.core.matrix.protocols.is_scalar_QMARK_;
var G__10152_10167 = "array";
var G__10153_10168 = ((function (G__10151_10166,G__10152_10167){
return (function (m){
return false;
});})(G__10151_10166,G__10152_10167))
;
goog.object.set(G__10151_10166,G__10152_10167,G__10153_10168);

var G__10154_10169 = clojure.core.matrix.protocols.get_shape;
var G__10155_10170 = "array";
var G__10156_10171 = ((function (G__10154_10169,G__10155_10170){
return (function (m){
return (new cljs.core.List(null,cljs.core.count(m),null,(1),null));
});})(G__10154_10169,G__10155_10170))
;
goog.object.set(G__10154_10169,G__10155_10170,G__10156_10171);

var G__10157_10172 = clojure.core.matrix.protocols.dimension_count;
var G__10158_10173 = "array";
var G__10159_10174 = ((function (G__10157_10172,G__10158_10173){
return (function (m,x){
if((cljs.core.long$(x) === (0))){
return cljs.core.count(m);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Double array does not have dimension: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});})(G__10157_10172,G__10158_10173))
;
goog.object.set(G__10157_10172,G__10158_10173,G__10159_10174);
goog.object.set(clojure.core.matrix.protocols.PReshaping,"array",true);

var G__10176_10179 = clojure.core.matrix.protocols.reshape;
var G__10177_10180 = "array";
var G__10178_10181 = ((function (G__10176_10179,G__10177_10180){
return (function (m,shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.get_shape(m),shape)){
return m;
} else {
var gv = clojure.core.matrix.protocols.generic_value(m);
var es = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.protocols.element_seq(m),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(gv));
var partition_shape = ((function (gv,es,G__10176_10179,G__10177_10180){
return (function clojure$core$matrix$impl$double_array$partition_shape(es__$1,shape__$1){
var temp__5718__auto__ = cljs.core.seq(shape__$1);
if(temp__5718__auto__){
var s = temp__5718__auto__;
var ns = cljs.core.next(s);
var plen = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,(1),ns);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ns,plen,s,temp__5718__auto__,gv,es,G__10176_10179,G__10177_10180){
return (function (p1__10175_SHARP_){
return clojure$core$matrix$impl$double_array$partition_shape(p1__10175_SHARP_,ns);
});})(ns,plen,s,temp__5718__auto__,gv,es,G__10176_10179,G__10177_10180))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(plen,es__$1));
} else {
return cljs.core.first(es__$1);
}
});})(gv,es,G__10176_10179,G__10177_10180))
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
});})(G__10176_10179,G__10177_10180))
;
goog.object.set(G__10176_10179,G__10177_10180,G__10178_10181);
goog.object.set(clojure.core.matrix.protocols.PTypeInfo,"array",true);

var G__10182_10185 = clojure.core.matrix.protocols.element_type;
var G__10183_10186 = "array";
var G__10184_10187 = ((function (G__10182_10185,G__10183_10186){
return (function (m){
return Number;
});})(G__10182_10185,G__10183_10186))
;
goog.object.set(G__10182_10185,G__10183_10186,G__10184_10187);
goog.object.set(clojure.core.matrix.protocols.PIndexedAccess,"array",true);

var G__10188_10197 = clojure.core.matrix.protocols.get_1d;
var G__10189_10198 = "array";
var G__10190_10199 = ((function (G__10188_10197,G__10189_10198){
return (function (m,x){
return (m[(x | (0))]);
});})(G__10188_10197,G__10189_10198))
;
goog.object.set(G__10188_10197,G__10189_10198,G__10190_10199);

var G__10191_10200 = clojure.core.matrix.protocols.get_2d;
var G__10192_10201 = "array";
var G__10193_10202 = ((function (G__10191_10200,G__10192_10201){
return (function (m,row,column){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do get-2D from 1D double array",cljs.core.PersistentArrayMap.EMPTY);
});})(G__10191_10200,G__10192_10201))
;
goog.object.set(G__10191_10200,G__10192_10201,G__10193_10202);

var G__10194_10203 = clojure.core.matrix.protocols.get_nd;
var G__10195_10204 = "array";
var G__10196_10205 = ((function (G__10194_10203,G__10195_10204){
return (function (m,indexes){
if(((1) === cljs.core.count(indexes))){
return (m[(cljs.core.first(indexes) | (0))]);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't get from double array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});})(G__10194_10203,G__10195_10204))
;
goog.object.set(G__10194_10203,G__10195_10204,G__10196_10205);
goog.object.set(clojure.core.matrix.protocols.PIndexedSetting,"array",true);

var G__10206_10218 = clojure.core.matrix.protocols.set_1d;
var G__10207_10219 = "array";
var G__10208_10220 = ((function (G__10206_10218,G__10207_10219){
return (function (m,x,v){
var arr = m.slice();
(arr[(x | (0))] = v);

return arr;
});})(G__10206_10218,G__10207_10219))
;
goog.object.set(G__10206_10218,G__10207_10219,G__10208_10220);

var G__10209_10221 = clojure.core.matrix.protocols.set_2d;
var G__10210_10222 = "array";
var G__10211_10223 = ((function (G__10209_10221,G__10210_10222){
return (function (m,x,y,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on double array",cljs.core.PersistentArrayMap.EMPTY);
});})(G__10209_10221,G__10210_10222))
;
goog.object.set(G__10209_10221,G__10210_10222,G__10211_10223);

var G__10212_10224 = clojure.core.matrix.protocols.set_nd;
var G__10213_10225 = "array";
var G__10214_10226 = ((function (G__10212_10224,G__10213_10225){
return (function (m,indexes,v){
if(((1) === cljs.core.count(indexes))){
var arr = m.slice();
var x = (cljs.core.first(indexes) | (0));
(arr[(x | (0))] = v);

return arr;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't set on double array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});})(G__10212_10224,G__10213_10225))
;
goog.object.set(G__10212_10224,G__10213_10225,G__10214_10226);

var G__10215_10227 = clojure.core.matrix.protocols.is_mutable_QMARK_;
var G__10216_10228 = "array";
var G__10217_10229 = ((function (G__10215_10227,G__10216_10228){
return (function (m){
return true;
});})(G__10215_10227,G__10216_10228))
;
goog.object.set(G__10215_10227,G__10216_10228,G__10217_10229);
goog.object.set(clojure.core.matrix.protocols.PIndexedSettingMutable,"array",true);

var G__10230_10239 = clojure.core.matrix.protocols.set_1d_BANG_;
var G__10231_10240 = "array";
var G__10232_10241 = ((function (G__10230_10239,G__10231_10240){
return (function (m,x,v){
(m[(x | (0))] = v);

return m;
});})(G__10230_10239,G__10231_10240))
;
goog.object.set(G__10230_10239,G__10231_10240,G__10232_10241);

var G__10233_10242 = clojure.core.matrix.protocols.set_2d_BANG_;
var G__10234_10243 = "array";
var G__10235_10244 = ((function (G__10233_10242,G__10234_10243){
return (function (m,x,y,v){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Can't do 2D set on double array",cljs.core.PersistentArrayMap.EMPTY);
});})(G__10233_10242,G__10234_10243))
;
goog.object.set(G__10233_10242,G__10234_10243,G__10235_10244);

var G__10236_10245 = clojure.core.matrix.protocols.set_nd_BANG_;
var G__10237_10246 = "array";
var G__10238_10247 = ((function (G__10236_10245,G__10237_10246){
return (function (m,indexes,v){
if(((1) === cljs.core.count(indexes))){
(m[(cljs.core.first(indexes) | (0))] = v);

return m;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't set on double array with dimensionality: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});})(G__10236_10245,G__10237_10246))
;
goog.object.set(G__10236_10245,G__10237_10246,G__10238_10247);
goog.object.set(clojure.core.matrix.protocols.PMutableMatrixConstruction,"array",true);

var G__10248_10251 = clojure.core.matrix.protocols.mutable_matrix;
var G__10249_10252 = "array";
var G__10250_10253 = ((function (G__10248_10251,G__10249_10252){
return (function (m){
return m.slice();
});})(G__10248_10251,G__10249_10252))
;
goog.object.set(G__10248_10251,G__10249_10252,G__10250_10253);
goog.object.set(clojure.core.matrix.protocols.PMatrixScaling,"array",true);

var G__10254_10260 = clojure.core.matrix.protocols.scale;
var G__10255_10261 = "array";
var G__10256_10262 = ((function (G__10254_10260,G__10255_10261){
return (function (m,a){
var m__$1 = m;
var len = m__$1.length;
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(len);
var a__$1 = a;
var n__4607__auto___10263 = len;
var i_10264 = (0);
while(true){
if((i_10264 < n__4607__auto___10263)){
(arr[i_10264] = (a__$1 * (m__$1[i_10264])));

var G__10265 = (i_10264 + (1));
i_10264 = G__10265;
continue;
} else {
}
break;
}

return arr;
});})(G__10254_10260,G__10255_10261))
;
goog.object.set(G__10254_10260,G__10255_10261,G__10256_10262);

var G__10257_10266 = clojure.core.matrix.protocols.pre_scale;
var G__10258_10267 = "array";
var G__10259_10268 = ((function (G__10257_10266,G__10258_10267){
return (function (m,a){
var m__$1 = m;
var len = m__$1.length;
var arr = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(len);
var a__$1 = a;
var n__4607__auto___10269 = len;
var i_10270 = (0);
while(true){
if((i_10270 < n__4607__auto___10269)){
(arr[i_10270] = (a__$1 * (m__$1[i_10270])));

var G__10271 = (i_10270 + (1));
i_10270 = G__10271;
continue;
} else {
}
break;
}

return arr;
});})(G__10257_10266,G__10258_10267))
;
goog.object.set(G__10257_10266,G__10258_10267,G__10259_10268);
goog.object.set(clojure.core.matrix.protocols.PMatrixMutableScaling,"array",true);

var G__10272_10278 = clojure.core.matrix.protocols.scale_BANG_;
var G__10273_10279 = "array";
var G__10274_10280 = ((function (G__10272_10278,G__10273_10279){
return (function (m,a){
var m__$1 = m;
var a__$1 = a;
var n__4607__auto__ = m__$1.length;
var i = (0);
while(true){
if((i < n__4607__auto__)){
(m__$1[i] = (a__$1 * (m__$1[i])));

var G__10281 = (i + (1));
i = G__10281;
continue;
} else {
return null;
}
break;
}
});})(G__10272_10278,G__10273_10279))
;
goog.object.set(G__10272_10278,G__10273_10279,G__10274_10280);

var G__10275_10282 = clojure.core.matrix.protocols.pre_scale_BANG_;
var G__10276_10283 = "array";
var G__10277_10284 = ((function (G__10275_10282,G__10276_10283){
return (function (m,a){
var m__$1 = m;
var a__$1 = a;
var n__4607__auto__ = m__$1.length;
var i = (0);
while(true){
if((i < n__4607__auto__)){
(m__$1[i] = (a__$1 * (m__$1[i])));

var G__10285 = (i + (1));
i = G__10285;
continue;
} else {
return null;
}
break;
}
});})(G__10275_10282,G__10276_10283))
;
goog.object.set(G__10275_10282,G__10276_10283,G__10277_10284);
goog.object.set(clojure.core.matrix.protocols.PConversion,"array",true);

var G__10286_10289 = clojure.core.matrix.protocols.convert_to_nested_vectors;
var G__10287_10290 = "array";
var G__10288_10291 = ((function (G__10286_10289,G__10287_10290){
return (function (m){
return cljs.core.vec(m);
});})(G__10286_10289,G__10287_10290))
;
goog.object.set(G__10286_10289,G__10287_10290,G__10288_10291);
goog.object.set(clojure.core.matrix.protocols.PFunctionalOperations,"array",true);

var G__10293_10308 = clojure.core.matrix.protocols.element_seq;
var G__10294_10309 = "array";
var G__10295_10310 = ((function (G__10293_10308,G__10294_10309){
return (function (m){
return m;
});})(G__10293_10308,G__10294_10309))
;
goog.object.set(G__10293_10308,G__10294_10309,G__10295_10310);

var G__10296_10311 = clojure.core.matrix.protocols.element_map;
var G__10297_10312 = "array";
var G__10298_10313 = ((function (G__10296_10311,G__10297_10312){
return (function() {
var G__10314 = null;
var G__10314__2 = (function (m,f){
var cnt = m.length;
var r = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(cnt);
var n__4607__auto___10315 = cnt;
var i_10316 = (0);
while(true){
if((i_10316 < n__4607__auto___10315)){
(r[i_10316] = (function (){var G__10299 = (m[i_10316]);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10299) : f.call(null,G__10299));
})());

var G__10317 = (i_10316 + (1));
i_10316 = G__10317;
continue;
} else {
}
break;
}

return r;
});
var G__10314__3 = (function (m,f,a){
var r = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(m);
var a__$1 = clojure.core.matrix.protocols.broadcast_coerce(r,a);
var n__4607__auto___10318 = m.length;
var i_10319 = (0);
while(true){
if((i_10319 < n__4607__auto___10318)){
(r[i_10319] = (function (){var G__10300 = (m[i_10319]);
var G__10301 = (a__$1[i_10319]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10300,G__10301) : f.call(null,G__10300,G__10301));
})());

var G__10320 = (i_10319 + (1));
i_10319 = G__10320;
continue;
} else {
}
break;
}

return r;
});
var G__10314__4 = (function (m,f,a,more){
var r = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(m);
var a__$1 = clojure.core.matrix.protocols.broadcast_coerce(m,a);
var more__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (r,a__$1,G__10296_10311,G__10297_10312){
return (function (p1__10292_SHARP_){
return clojure.core.matrix.protocols.broadcast_coerce(m,p1__10292_SHARP_);
});})(r,a__$1,G__10296_10311,G__10297_10312))
,more);
var more_count = cljs.core.long$(cljs.core.count(more__$1));
var vs = cljs.core.double_array.cljs$core$IFn$_invoke$arity$1(more_count);
var n__4607__auto___10321 = m.length;
var i_10322 = (0);
while(true){
if((i_10322 < n__4607__auto___10321)){
var n__4607__auto___10323__$1 = more_count;
var j_10324 = (0);
while(true){
if((j_10324 < n__4607__auto___10323__$1)){
(vs[j_10324] = ((more__$1.cljs$core$IFn$_invoke$arity$1 ? more__$1.cljs$core$IFn$_invoke$arity$1(j_10324) : more__$1.call(null,j_10324))[i_10322]));

var G__10325 = (j_10324 + (1));
j_10324 = G__10325;
continue;
} else {
}
break;
}

(r[i_10322] = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f,(m[i_10322]),(a__$1[i_10322]),vs));

var G__10326 = (i_10322 + (1));
i_10322 = G__10326;
continue;
} else {
}
break;
}

return r;
});
G__10314 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__10314__2.call(this,m,f);
case 3:
return G__10314__3.call(this,m,f,a);
case 4:
return G__10314__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10314.cljs$core$IFn$_invoke$arity$2 = G__10314__2;
G__10314.cljs$core$IFn$_invoke$arity$3 = G__10314__3;
G__10314.cljs$core$IFn$_invoke$arity$4 = G__10314__4;
return G__10314;
})()
;})(G__10296_10311,G__10297_10312))
;
goog.object.set(G__10296_10311,G__10297_10312,G__10298_10313);

var G__10302_10327 = clojure.core.matrix.protocols.element_map_BANG_;
var G__10303_10328 = "array";
var G__10304_10329 = ((function (G__10302_10327,G__10303_10328){
return (function() {
var G__10330 = null;
var G__10330__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,f));
});
var G__10330__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m,f,a));
});
var G__10330__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$4(m,f,a,more));
});
G__10330 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__10330__2.call(this,m,f);
case 3:
return G__10330__3.call(this,m,f,a);
case 4:
return G__10330__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10330.cljs$core$IFn$_invoke$arity$2 = G__10330__2;
G__10330.cljs$core$IFn$_invoke$arity$3 = G__10330__3;
G__10330.cljs$core$IFn$_invoke$arity$4 = G__10330__4;
return G__10330;
})()
;})(G__10302_10327,G__10303_10328))
;
goog.object.set(G__10302_10327,G__10303_10328,G__10304_10329);

var G__10305_10331 = clojure.core.matrix.protocols.element_reduce;
var G__10306_10332 = "array";
var G__10307_10333 = ((function (G__10305_10331,G__10306_10332){
return (function() {
var G__10334 = null;
var G__10334__2 = (function (m,f){
var m__$1 = m;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(f,m__$1);
});
var G__10334__3 = (function (m,f,init){
var m__$1 = m;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,init,m__$1);
});
G__10334 = function(m,f,init){
switch(arguments.length){
case 2:
return G__10334__2.call(this,m,f);
case 3:
return G__10334__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10334.cljs$core$IFn$_invoke$arity$2 = G__10334__2;
G__10334.cljs$core$IFn$_invoke$arity$3 = G__10334__3;
return G__10334;
})()
;})(G__10305_10331,G__10306_10332))
;
goog.object.set(G__10305_10331,G__10306_10332,G__10307_10333);
goog.object.set(clojure.core.matrix.protocols.PIndexImplementation,"array",true);

var G__10335_10353 = clojure.core.matrix.protocols.index_QMARK_;
var G__10336_10354 = "array";
var G__10337_10355 = ((function (G__10335_10353,G__10336_10354){
return (function (m){
return true;
});})(G__10335_10353,G__10336_10354))
;
goog.object.set(G__10335_10353,G__10336_10354,G__10337_10355);

var G__10338_10356 = clojure.core.matrix.protocols.index_to_longs;
var G__10339_10357 = "array";
var G__10340_10358 = ((function (G__10338_10356,G__10339_10357){
return (function (m){
return m;
});})(G__10338_10356,G__10339_10357))
;
goog.object.set(G__10338_10356,G__10339_10357,G__10340_10358);

var G__10341_10359 = clojure.core.matrix.protocols.index_to_ints;
var G__10342_10360 = "array";
var G__10343_10361 = ((function (G__10341_10359,G__10342_10360){
return (function (m){
return m;
});})(G__10341_10359,G__10342_10360))
;
goog.object.set(G__10341_10359,G__10342_10360,G__10343_10361);

var G__10344_10362 = clojure.core.matrix.protocols.index_from_longs;
var G__10345_10363 = "array";
var G__10346_10364 = ((function (G__10344_10362,G__10345_10363){
return (function (m,xs){
return cljs.core.long_array.cljs$core$IFn$_invoke$arity$1(xs);
});})(G__10344_10362,G__10345_10363))
;
goog.object.set(G__10344_10362,G__10345_10363,G__10346_10364);

var G__10347_10365 = clojure.core.matrix.protocols.index_from_ints;
var G__10348_10366 = "array";
var G__10349_10367 = ((function (G__10347_10365,G__10348_10366){
return (function (m,xs){
return cljs.core.int_array.cljs$core$IFn$_invoke$arity$1(xs);
});})(G__10347_10365,G__10348_10366))
;
goog.object.set(G__10347_10365,G__10348_10366,G__10349_10367);

var G__10350_10368 = clojure.core.matrix.protocols.index_coerce;
var G__10351_10369 = "array";
var G__10352_10370 = ((function (G__10350_10368,G__10351_10369){
return (function (m,a){
return m;
});})(G__10350_10368,G__10351_10369))
;
goog.object.set(G__10350_10368,G__10351_10369,G__10352_10370);
goog.object.set(clojure.core.matrix.protocols.PBroadcast,"array",true);

var G__10371_10374 = clojure.core.matrix.protocols.broadcast;
var G__10372_10375 = "array";
var G__10373_10376 = ((function (G__10371_10374,G__10372_10375){
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
});})(G__10371_10374,G__10372_10375))
;
goog.object.set(G__10371_10374,G__10372_10375,G__10373_10376);
goog.object.set(clojure.core.matrix.protocols.PNumerical,"array",true);

var G__10377_10380 = clojure.core.matrix.protocols.numerical_QMARK_;
var G__10378_10381 = "array";
var G__10379_10382 = ((function (G__10377_10380,G__10378_10381){
return (function (m){
return true;
});})(G__10377_10380,G__10378_10381))
;
goog.object.set(G__10377_10380,G__10378_10381,G__10379_10382);
goog.object.set(clojure.core.matrix.protocols.PSubVector,"array",true);

var G__10383_10386 = clojure.core.matrix.protocols.subvector;
var G__10384_10387 = "array";
var G__10385_10388 = ((function (G__10383_10386,G__10384_10387){
return (function (m,start,length){
return clojure.core.matrix.impl.wrappers.wrap_nd(m).clojure$core$matrix$protocols$PSubVector$subvector$arity$3(null,start,length);
});})(G__10383_10386,G__10384_10387))
;
goog.object.set(G__10383_10386,G__10384_10387,G__10385_10388);
goog.object.set(clojure.core.matrix.protocols.PMatrixEquality,"array",true);

var G__10389_10392 = clojure.core.matrix.protocols.matrix_equals;
var G__10390_10393 = "array";
var G__10391_10394 = ((function (G__10389_10392,G__10390_10393){
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
});})(G__10389_10392,G__10390_10393))
;
goog.object.set(G__10389_10392,G__10390_10393,G__10391_10394);
goog.object.set(clojure.core.matrix.protocols.PSameShape,"array",true);

var G__10395_10398 = clojure.core.matrix.protocols.same_shape_QMARK_;
var G__10396_10399 = "array";
var G__10397_10400 = ((function (G__10395_10398,G__10396_10399){
return (function (a,b){
return clojure.core.matrix.utils.same_shape_object_QMARK_(clojure.core.matrix.protocols.get_shape(a),clojure.core.matrix.protocols.get_shape(b));
});})(G__10395_10398,G__10396_10399))
;
goog.object.set(G__10395_10398,G__10396_10399,G__10397_10400);
goog.object.set(clojure.core.matrix.protocols.PSelect,"array",true);

var G__10401_10404 = clojure.core.matrix.protocols.select;
var G__10402_10405 = "array";
var G__10403_10406 = ((function (G__10401_10404,G__10402_10405){
return (function (a,area){
var or__4131__auto__ = clojure.core.matrix.protocols.select_view(a,area);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection(a,area);
}
});})(G__10401_10404,G__10402_10405))
;
goog.object.set(G__10401_10404,G__10402_10405,G__10403_10406);
goog.object.set(clojure.core.matrix.protocols.PLogistic,"array",true);

var G__10407_10410 = clojure.core.matrix.protocols.logistic;
var G__10408_10411 = "array";
var G__10409_10412 = ((function (G__10407_10410,G__10408_10411){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.logistic_fn);
});})(G__10407_10410,G__10408_10411))
;
goog.object.set(G__10407_10410,G__10408_10411,G__10409_10412);
goog.object.set(clojure.core.matrix.protocols.PLogisticMutable,"array",true);

var G__10413_10416 = clojure.core.matrix.protocols.logistic_BANG_;
var G__10414_10417 = "array";
var G__10415_10418 = ((function (G__10413_10416,G__10414_10417){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.logistic_fn);
});})(G__10413_10416,G__10414_10417))
;
goog.object.set(G__10413_10416,G__10414_10417,G__10415_10418);
goog.object.set(clojure.core.matrix.protocols.PSoftplus,"array",true);

var G__10419_10422 = clojure.core.matrix.protocols.softplus;
var G__10420_10423 = "array";
var G__10421_10424 = ((function (G__10419_10422,G__10420_10423){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.softplus_fn);
});})(G__10419_10422,G__10420_10423))
;
goog.object.set(G__10419_10422,G__10420_10423,G__10421_10424);
goog.object.set(clojure.core.matrix.protocols.PSoftmax,"array",true);

var G__10425_10428 = clojure.core.matrix.protocols.softmax;
var G__10426_10429 = "array";
var G__10427_10430 = ((function (G__10425_10428,G__10426_10429){
return (function (m){
var em = clojure.core.matrix.protocols.exp(m);
return clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$2(em,clojure.core.matrix.protocols.element_sum(em));
});})(G__10425_10428,G__10426_10429))
;
goog.object.set(G__10425_10428,G__10426_10429,G__10427_10430);
goog.object.set(clojure.core.matrix.protocols.PSoftmaxMutable,"array",true);

var G__10431_10434 = clojure.core.matrix.protocols.softmax_BANG_;
var G__10432_10435 = "array";
var G__10433_10436 = ((function (G__10431_10434,G__10432_10435){
return (function (m){
clojure.core.matrix.protocols.exp_BANG_(m);

clojure.core.matrix.protocols.element_divide_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.element_sum(m));

return m;
});})(G__10431_10434,G__10432_10435))
;
goog.object.set(G__10431_10434,G__10432_10435,G__10433_10436);
goog.object.set(clojure.core.matrix.protocols.PSoftplusMutable,"array",true);

var G__10437_10440 = clojure.core.matrix.protocols.softplus_BANG_;
var G__10438_10441 = "array";
var G__10439_10442 = ((function (G__10437_10440,G__10438_10441){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.softplus_fn);
});})(G__10437_10440,G__10438_10441))
;
goog.object.set(G__10437_10440,G__10438_10441,G__10439_10442);
goog.object.set(clojure.core.matrix.protocols.PReLU,"array",true);

var G__10443_10446 = clojure.core.matrix.protocols.relu;
var G__10444_10447 = "array";
var G__10445_10448 = ((function (G__10443_10446,G__10444_10447){
return (function (m){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.relu_fn);
});})(G__10443_10446,G__10444_10447))
;
goog.object.set(G__10443_10446,G__10444_10447,G__10445_10448);
goog.object.set(clojure.core.matrix.protocols.PReLUMutable,"array",true);

var G__10449_10452 = clojure.core.matrix.protocols.relu_BANG_;
var G__10450_10453 = "array";
var G__10451_10454 = ((function (G__10449_10452,G__10450_10453){
return (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.impl.common.relu_fn);
});})(G__10449_10452,G__10450_10453))
;
goog.object.set(G__10449_10452,G__10450_10453,G__10451_10454);
goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"array",true);

var G__10456_10475 = clojure.core.matrix.protocols.identity_matrix_QMARK_;
var G__10457_10476 = "array";
var G__10458_10477 = ((function (G__10456_10475,G__10457_10476){
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
var G__10478 = (j + (1));
j = G__10478;
continue;
} else {
return false;
}
} else {
if((elem === (0))){
var G__10479 = (j + (1));
j = G__10479;
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
var G__10480 = (i + (1));
i = G__10480;
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
});})(G__10456_10475,G__10457_10476))
;
goog.object.set(G__10456_10475,G__10457_10476,G__10458_10477);

var G__10459_10481 = clojure.core.matrix.protocols.zero_matrix_QMARK_;
var G__10460_10482 = "array";
var G__10461_10483 = ((function (G__10459_10481,G__10460_10482){
return (function (m){
return cljs.core.every_QMARK_(((function (G__10459_10481,G__10460_10482){
return (function (p1__10455_SHARP_){
return ((typeof p1__10455_SHARP_ === 'number') && ((p1__10455_SHARP_ === (0))));
});})(G__10459_10481,G__10460_10482))
,clojure.core.matrix.protocols.element_seq(m));
});})(G__10459_10481,G__10460_10482))
;
goog.object.set(G__10459_10481,G__10460_10482,G__10461_10483);

var G__10462_10484 = clojure.core.matrix.protocols.symmetric_QMARK_;
var G__10463_10485 = "array";
var G__10464_10486 = ((function (G__10462_10484,G__10463_10485){
return (function (m){
var G__10465 = cljs.core.long$(clojure.core.matrix.protocols.dimensionality(m));
switch (G__10465) {
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
});})(G__10462_10484,G__10463_10485))
;
goog.object.set(G__10462_10484,G__10463_10485,G__10464_10486);

goog.object.set(clojure.core.matrix.protocols.PMatrixPredicates,"number",true);

var G__10466_10488 = clojure.core.matrix.protocols.identity_matrix_QMARK_;
var G__10467_10489 = "number";
var G__10468_10490 = ((function (G__10466_10488,G__10467_10489){
return (function (m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),m);
});})(G__10466_10488,G__10467_10489))
;
goog.object.set(G__10466_10488,G__10467_10489,G__10468_10490);

var G__10469_10491 = clojure.core.matrix.protocols.zero_matrix_QMARK_;
var G__10470_10492 = "number";
var G__10471_10493 = ((function (G__10469_10491,G__10470_10492){
return (function (m){
return (m === (0));
});})(G__10469_10491,G__10470_10492))
;
goog.object.set(G__10469_10491,G__10470_10492,G__10471_10493);

var G__10472_10494 = clojure.core.matrix.protocols.symmetric_QMARK_;
var G__10473_10495 = "number";
var G__10474_10496 = ((function (G__10472_10494,G__10473_10495){
return (function (m){
return true;
});})(G__10472_10494,G__10473_10495))
;
goog.object.set(G__10472_10494,G__10473_10495,G__10474_10496);
goog.object.set(clojure.core.matrix.protocols.PSummable,"array",true);

var G__10497_10500 = clojure.core.matrix.protocols.element_sum;
var G__10498_10501 = "array";
var G__10499_10502 = ((function (G__10497_10500,G__10498_10501){
return (function (a){
return clojure.core.matrix.protocols.element_reduce.cljs$core$IFn$_invoke$arity$2(a,(cljs.core.truth_(clojure.core.matrix.protocols.numerical_QMARK_(a))?cljs.core._PLUS_:clojure.core.matrix.protocols.matrix_add));
});})(G__10497_10500,G__10498_10501))
;
goog.object.set(G__10497_10500,G__10498_10501,G__10499_10502);
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiply,"array",true);

var G__10503_10524 = clojure.core.matrix.protocols.matrix_multiply;
var G__10504_10525 = "array";
var G__10505_10526 = ((function (G__10503_10524,G__10504_10525){
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
var vec__10506 = clojure.core.matrix.protocols.get_shape(a);
var arows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10506,(0),null);
var acols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10506,(1),null);
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.matrix_multiply(clojure.core.matrix.protocols.reshape(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),arows], null)),a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acols], null));
} else {
if((((mdims === (2))) && ((adims === (1))))){
var vec__10509 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10509,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10509,(1),null);
return clojure.core.matrix.protocols.reshape(clojure.core.matrix.protocols.matrix_multiply(m,clojure.core.matrix.protocols.reshape(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols,(1)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols], null));
} else {
if((((mdims === (2))) && ((adims === (2))))){
var mutable = clojure.core.matrix.protocols.is_mutable_QMARK_(m);
var vec__10512 = clojure.core.matrix.protocols.get_shape(m);
var mrows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10512,(0),null);
var mcols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10512,(1),null);
var vec__10515 = clojure.core.matrix.protocols.get_shape(a);
var arows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10515,(0),null);
var acols = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10515,(1),null);
var new_m_type = (cljs.core.truth_(mutable)?m:clojure.core.matrix.implementations.get_canonical_object.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$ndarray));
var new_m = clojure.core.matrix.protocols.new_matrix(new_m_type,mrows,acols);
var i_10527 = cljs.core.long$((0));
while(true){
if((i_10527 < mrows)){
var j_10528 = cljs.core.long$((0));
while(true){
if((j_10528 < acols)){
clojure.core.matrix.protocols.set_2d_BANG_(new_m,i_10527,j_10528,(0));

var G__10529 = (j_10528 + (1));
j_10528 = G__10529;
continue;
} else {
}
break;
}

var G__10530 = (i_10527 + (1));
i_10527 = G__10530;
continue;
} else {
}
break;
}


var i_10531 = cljs.core.long$((0));
while(true){
if((i_10531 < mrows)){
var j_10532 = cljs.core.long$((0));
while(true){
if((j_10532 < acols)){
var k_10533 = cljs.core.long$((0));
while(true){
if((k_10533 < mcols)){
clojure.core.matrix.protocols.set_2d_BANG_(new_m,i_10531,j_10532,(clojure.core.matrix.protocols.get_2d(new_m,i_10531,j_10532) + (clojure.core.matrix.protocols.get_2d(m,i_10531,k_10533) * clojure.core.matrix.protocols.get_2d(a,k_10533,j_10532))));

var G__10534 = (k_10533 + (1));
k_10533 = G__10534;
continue;
} else {
}
break;
}

var G__10535 = (j_10532 + (1));
j_10532 = G__10535;
continue;
} else {
}
break;
}

var G__10536 = (i_10531 + (1));
i_10531 = G__10536;
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
});})(G__10503_10524,G__10504_10525))
;
goog.object.set(G__10503_10524,G__10504_10525,G__10505_10526);

var G__10518_10537 = clojure.core.matrix.protocols.element_multiply;
var G__10519_10538 = "array";
var G__10520_10539 = ((function (G__10518_10537,G__10519_10538){
return (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale(m,a);
} else {
var vec__10521 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10521,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10521,(1),null);
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core._STAR_,a__$1);
}
});})(G__10518_10537,G__10519_10538))
;
goog.object.set(G__10518_10537,G__10519_10538,G__10520_10539);
goog.object.set(clojure.core.matrix.protocols.PMatrixMultiplyMutable,"array",true);

var G__10540_10546 = clojure.core.matrix.protocols.element_multiply_BANG_;
var G__10541_10547 = "array";
var G__10542_10548 = ((function (G__10540_10546,G__10541_10547){
return (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.element_multiply(m,a));
});})(G__10540_10546,G__10541_10547))
;
goog.object.set(G__10540_10546,G__10541_10547,G__10542_10548);

var G__10543_10549 = clojure.core.matrix.protocols.matrix_multiply_BANG_;
var G__10544_10550 = "array";
var G__10545_10551 = ((function (G__10543_10549,G__10544_10550){
return (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_(m,clojure.core.matrix.protocols.matrix_multiply(m,a));
});})(G__10543_10549,G__10544_10550))
;
goog.object.set(G__10543_10549,G__10544_10550,G__10545_10551);
goog.object.set(clojure.core.matrix.protocols.PMatrixDivide,"array",true);

var G__10552_10555 = clojure.core.matrix.protocols.element_divide;
var G__10553_10556 = "array";
var G__10554_10557 = ((function (G__10552_10555,G__10553_10556){
return (function() {
var G__10558 = null;
var G__10558__1 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.get_shape(m))){
return clojure.core.matrix.protocols.element_map.cljs$core$IFn$_invoke$arity$2(m,clojure.core.matrix.protocols.element_divide);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Don't know how to take reciprocal of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
var G__10558__2 = (function (m,a){
return clojure.core.matrix.protocols.element_multiply(m,clojure.core.matrix.protocols.element_divide.cljs$core$IFn$_invoke$arity$1(a));
});
G__10558 = function(m,a){
switch(arguments.length){
case 1:
return G__10558__1.call(this,m);
case 2:
return G__10558__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10558.cljs$core$IFn$_invoke$arity$1 = G__10558__1;
G__10558.cljs$core$IFn$_invoke$arity$2 = G__10558__2;
return G__10558;
})()
;})(G__10552_10555,G__10553_10556))
;
goog.object.set(G__10552_10555,G__10553_10556,G__10554_10557);
goog.object.set(clojure.core.matrix.protocols.PMatrixDivideMutable,"array",true);

var G__10559_10565 = clojure.core.matrix.protocols.element_divide_BANG_;
var G__10560_10566 = "array";
var G__10561_10567 = ((function (G__10559_10565,G__10560_10566){
return (function() {
var G__10568 = null;
var G__10568__1 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$2(m,cljs.core._SLASH_);
});
var G__10568__2 = (function (m,a){
var vec__10562 = clojure.core.matrix.protocols.broadcast_compatible(m,a);
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10562,(0),null);
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10562,(1),null);
return clojure.core.matrix.protocols.element_map_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,cljs.core._SLASH_,a__$1);
});
G__10568 = function(m,a){
switch(arguments.length){
case 1:
return G__10568__1.call(this,m);
case 2:
return G__10568__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10568.cljs$core$IFn$_invoke$arity$1 = G__10568__1;
G__10568.cljs$core$IFn$_invoke$arity$2 = G__10568__2;
return G__10568;
})()
;})(G__10559_10565,G__10560_10566))
;
goog.object.set(G__10559_10565,G__10560_10566,G__10561_10567);
goog.object.set(clojure.core.matrix.protocols.PBroadcastCoerce,"array",true);

var G__10569_10572 = clojure.core.matrix.protocols.broadcast_coerce;
var G__10570_10573 = "array";
var G__10571_10574 = ((function (G__10569_10572,G__10570_10573){
return (function (m,a){
return clojure.core.matrix.protocols.coerce_param(m,clojure.core.matrix.protocols.broadcast_like(m,a));
});})(G__10569_10572,G__10570_10573))
;
goog.object.set(G__10569_10572,G__10570_10573,G__10571_10574);
goog.object.set(clojure.core.matrix.protocols.PCoercion,"array",true);

var G__10575_10578 = clojure.core.matrix.protocols.coerce_param;
var G__10576_10579 = "array";
var G__10577_10580 = ((function (G__10575_10578,G__10576_10579){
return (function (m,param){
var param__$1 = (((param instanceof cljs.core.ISeq))?clojure.core.matrix.protocols.convert_to_nested_vectors(param):param);
var or__4131__auto__ = clojure.core.matrix.protocols.construct_matrix(m,param__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return param__$1;
}
});})(G__10575_10578,G__10576_10579))
;
goog.object.set(G__10575_10578,G__10576_10579,G__10577_10580);
goog.object.set(clojure.core.matrix.protocols.PBroadcastLike,"array",true);

var G__10581_10584 = clojure.core.matrix.protocols.broadcast_like;
var G__10582_10585 = "array";
var G__10583_10586 = ((function (G__10581_10584,G__10582_10585){
return (function (m,a){
var sm = clojure.core.matrix.protocols.get_shape(m);
var sa = clojure.core.matrix.protocols.get_shape(a);
if(clojure.core.matrix.utils.same_shape_object_QMARK_(sm,sa)){
return a;
} else {
return clojure.core.matrix.protocols.broadcast(a,sm);
}
});})(G__10581_10584,G__10582_10585))
;
goog.object.set(G__10581_10584,G__10582_10585,G__10583_10586);
goog.object.set(clojure.core.matrix.protocols.PMatrixOps,"array",true);

var G__10587_10596 = clojure.core.matrix.protocols.trace;
var G__10588_10597 = "array";
var G__10589_10598 = ((function (G__10587_10596,G__10588_10597){
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
var G__10599 = (i + (1));
var G__10600 = (res + clojure.core.matrix.protocols.get_2d(m,i,i));
i = G__10599;
res = G__10600;
continue;
}
break;
}
});})(G__10587_10596,G__10588_10597))
;
goog.object.set(G__10587_10596,G__10588_10597,G__10589_10598);

var G__10590_10601 = clojure.core.matrix.protocols.determinant;
var G__10591_10602 = "array";
var G__10592_10603 = ((function (G__10590_10601,G__10591_10602){
return (function (m){
return null;
});})(G__10590_10601,G__10591_10602))
;
goog.object.set(G__10590_10601,G__10591_10602,G__10592_10603);

var G__10593_10604 = clojure.core.matrix.protocols.inverse;
var G__10594_10605 = "array";
var G__10595_10606 = ((function (G__10593_10604,G__10594_10605){
return (function (m){
return null;
});})(G__10593_10604,G__10594_10605))
;
goog.object.set(G__10593_10604,G__10594_10605,G__10595_10606);
