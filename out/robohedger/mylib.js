// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('robohedger.mylib');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.core.matrix');
goog.require('clojure.core.matrix.linear');
goog.require('clojure.string');
robohedger.mylib.smallslv = (function robohedger$mylib$smallslv(U,V){
if(cljs.core.empty_QMARK_(U)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.last(V) / cljs.core.first(V))], null);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(U,((cljs.core.last(V) - clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(cljs.core.butlast(V)),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(U)))) / cljs.core.first(V)));
}
});
robohedger.mylib.TriAngSolve = (function robohedger$mylib$TriAngSolve(TriA,B){


var G__12411 = (function (){var G__12417 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reductions.cljs$core$IFn$_invoke$arity$2((function (_1,_2){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take_last((cljs.core.count(_1) - (1)),_2));
}),TriA)),B], null);
var fexpr__12416 = ((function (G__12417){
return (function (p__12418){
var vec__12419 = p__12418;
var RR = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12419,(0),null);
var BB = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12419,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,RR,BB);
});})(G__12417))
;
return fexpr__12416(G__12417);
})();
var fexpr__12410 = ((function (G__12411){
return (function (V){
return cljs.core.reverse(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(robohedger.mylib.smallslv,cljs.core.PersistentVector.EMPTY,cljs.core.reverse(V)));
});})(G__12411))
;
return fexpr__12410(G__12411);
});
robohedger.mylib.LinSolve = (function robohedger$mylib$LinSolve(A,B){


var G__12427 = (function (){var G__12433 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.linear.qr.cljs$core$IFn$_invoke$arity$1(A),cljs.core.count(cljs.core.first(A))], null);
var fexpr__12432 = ((function (G__12433){
return (function (p__12434){
var vec__12435 = p__12434;
var QR = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12435,(0),null);
var nofArows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12435,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.cljs$core$IFn$_invoke$arity$2(nofArows,cljs.core.cst$kw$R.cljs$core$IFn$_invoke$arity$1(QR)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(nofArows,clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$2(clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$Q.cljs$core$IFn$_invoke$arity$1(QR)),B))], null);
});})(G__12433))
;
return fexpr__12432(G__12433);
})();
var fexpr__12426 = ((function (G__12427){
return (function (p__12438){
var vec__12439 = p__12438;
var RR = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12439,(0),null);
var BB = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12439,(1),null);
return robohedger.mylib.TriAngSolve(RR,BB);
});})(G__12427))
;
return fexpr__12426(G__12427);
});
robohedger.mylib.rearrange01 = (function robohedger$mylib$rearrange01(A){

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_1,_2){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (_21,_22){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(_21,_22);
}),_1,_2);
}),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(A)),cljs.core.PersistentVector.EMPTY),A);
});
robohedger.mylib.removecurves = (function robohedger$mylib$removecurves(scens){

var G__12443 = (function (){var G__12445 = (function (){var G__12447 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_11){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.key(_11),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_21){
return cljs.core.val(_21);
}),cljs.core.val(_11))]);
}),scens);
var fexpr__12446 = ((function (G__12447){
return (function (_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,_);
});})(G__12447))
;
return fexpr__12446(G__12447);
})();
var fexpr__12444 = ((function (G__12445){
return (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__12445){
return (function (_11){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.key(_11),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.val(_11))]);
});})(G__12445))
,_);
});})(G__12445))
;
return fexpr__12444(G__12445);
})();
var fexpr__12442 = ((function (G__12443){
return (function (_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,_);
});})(G__12443))
;
return fexpr__12442(G__12443);
});
robohedger.mylib.getswapnames = (function robohedger$mylib$getswapnames(scens){

var G__12450 = robohedger.mylib.removecurves(scens);
var fexpr__12449 = ((function (G__12450){
return (function (_){
return cljs.core.keys((function (){var G__12451 = cljs.core.first(cljs.core.keys(_));
return (_.cljs$core$IFn$_invoke$arity$1 ? _.cljs$core$IFn$_invoke$arity$1(G__12451) : _.call(null,G__12451));
})());
});})(G__12450))
;
return fexpr__12449(G__12450);
});
robohedger.mylib.getcompletelist = (function robohedger$mylib$getcompletelist(scens){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(robohedger.mylib.getswapnames(scens),"pls",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["bid","ask","_______________________PLOT____<GO>"], 0));
});
robohedger.mylib.plotlist = (function robohedger$mylib$plotlist(select){

var G__12453 = (function (){var G__12455 = (function (){var G__12457 = (function (){var G__12459 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(select,/>/);
var fexpr__12458 = ((function (G__12459){
return (function (_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__12459){
return (function (_11){
return cljs.core.re_matches(/.*PLOT____<GO/,_11);
});})(G__12459))
,_);
});})(G__12459))
;
return fexpr__12458(G__12459);
})();
var fexpr__12456 = ((function (G__12457){
return (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__12457){
return (function (___$1){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(___$1,/, /);
});})(G__12457))
,_);
});})(G__12457))
;
return fexpr__12456(G__12457);
})();
var fexpr__12454 = ((function (G__12455){
return (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__12455){
return (function (_11){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__12455){
return (function (_111){
return (cljs.core.count(_111) > (0));
});})(G__12455))
,_11);
});})(G__12455))
,_);
});})(G__12455))
;
return fexpr__12454(G__12455);
})();
var fexpr__12452 = ((function (G__12453){
return (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__12453){
return (function (_11){
return cljs.core.butlast(_11);
});})(G__12453))
,_);
});})(G__12453))
;
return fexpr__12452(G__12453);
});
robohedger.mylib.getEquationSystems = (function robohedger$mylib$getEquationSystems(p_plotlist,reduscens,npvs){

return robohedger.mylib.rearrange01((function (){var G__12466 = (function (){var G__12473 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_plotlist,reduscens,npvs], null);
var fexpr__12472 = ((function (G__12473){
return (function (p__12474){
var vec__12475 = p__12474;
var _A = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12475,(0),null);
var _B = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12475,(1),null);
var _C = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12475,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12475,_A,_B,_C,G__12473){
return (function (_01){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.key(_01),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12475,_A,_B,_C,G__12473){
return (function (_21){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12475,_A,_B,_C,G__12473){
return (function (_11){
var fexpr__12478 = cljs.core.val(_01);
return (fexpr__12478.cljs$core$IFn$_invoke$arity$1 ? fexpr__12478.cljs$core$IFn$_invoke$arity$1(_11) : fexpr__12478.call(null,_11));
});})(vec__12475,_A,_B,_C,G__12473))
,_21);
});})(vec__12475,_A,_B,_C,G__12473))
,_A)]);
});})(vec__12475,_A,_B,_C,G__12473))
,_B)),_C], null);
});})(G__12473))
;
return fexpr__12472(G__12473);
})();
var fexpr__12465 = ((function (G__12466){
return (function (p__12479){
var vec__12480 = p__12479;
var _A = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12480,(0),null);
var _B = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12480,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12480,_A,_B,G__12466){
return (function (_1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__12483 = cljs.core.key(_1);
return (_A.cljs$core$IFn$_invoke$arity$1 ? _A.cljs$core$IFn$_invoke$arity$1(G__12483) : _A.call(null,G__12483));
})()),cljs.core.val(_1));
});})(vec__12480,_A,_B,G__12466))
,_B);
});})(G__12466))
;
return fexpr__12465(G__12466);
})());
});
robohedger.mylib.solveEquationSystems = (function robohedger$mylib$solveEquationSystems(A){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_){
return robohedger.mylib.LinSolve(_,cljs.core.last(A));
}),cljs.core.butlast(A));
});
robohedger.mylib.getHedgedPortfolioNPVs = (function robohedger$mylib$getHedgedPortfolioNPVs(A,solutions){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (vec){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__12484_SHARP_,p2__12485_SHARP_){
return (p1__12484_SHARP_ - p2__12485_SHARP_);
}),vec,cljs.core.last(A));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (mat,vec){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,row,vec));
}),mat);
}),A,solutions));
});
robohedger.mylib.cleanup = (function robohedger$mylib$cleanup(data){
var G__12487 = (function (){var G__12489 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(data,/,/);
var fexpr__12488 = ((function (G__12489){
return (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,_);
});})(G__12489))
;
return fexpr__12488(G__12489);
})();
var fexpr__12486 = ((function (G__12487){
return (function (_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",_);
});})(G__12487))
;
return fexpr__12486(G__12487);
});
robohedger.mylib.abs = (function robohedger$mylib$abs(n){
var x__4219__auto__ = n;
var y__4220__auto__ = (- n);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
robohedger.mylib.comfgethedgeratios = (function robohedger$mylib$comfgethedgeratios(strswapnames,scens,npvdiffs){

return robohedger.mylib.solveEquationSystems(robohedger.mylib.getEquationSystems(robohedger.mylib.plotlist(strswapnames),robohedger.mylib.removecurves(scens),npvdiffs));
});
robohedger.mylib.mean = (function robohedger$mylib$mean(vec){
var G__12492 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,vec);
var fexpr__12491 = ((function (G__12492){
return (function (p1__12490_SHARP_){
return (p1__12490_SHARP_ / (1.0 * cljs.core.count(vec)));
});})(G__12492))
;
return fexpr__12491(G__12492);
});
robohedger.mylib.ssddv = (function robohedger$mylib$ssddv(p_mean,vec){
return clojure.core.matrix.sqrt((function (){var G__12495 = robohedger.mylib.mean(clojure.core.matrix.square(vec));
var fexpr__12494 = ((function (G__12495){
return (function (p1__12493_SHARP_){
return (p1__12493_SHARP_ - clojure.core.matrix.square(p_mean));
});})(G__12495))
;
return fexpr__12494(G__12495);
})());
});
robohedger.mylib.skew = (function robohedger$mylib$skew(p_sddev,p_mean,vec){
return (((robohedger.mylib.mean(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12496_SHARP_){
return ((p1__12496_SHARP_ * p1__12496_SHARP_) * p1__12496_SHARP_);
}),vec)) - (((3) * p_mean) * (p_sddev * p_sddev))) - ((p_mean * p_mean) * p_mean)) / ((p_sddev * p_sddev) * p_sddev));
});
robohedger.mylib.histo = (function robohedger$mylib$histo(vec,bins){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (_1){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (_11){
return (((_11 >= cljs.core.first(_1))) && ((_11 < cljs.core.second(_1))));
}),vec);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (_1,_2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_1,_2], null);
}),bins,cljs.core.rest(bins))));
});
robohedger.mylib.toolow = (function robohedger$mylib$toolow(vec,bins){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12497_SHARP_){
return (p1__12497_SHARP_ < cljs.core.first(bins));
}),vec);
});
robohedger.mylib.toohigh = (function robohedger$mylib$toohigh(vec,bins){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12498_SHARP_){
return (p1__12498_SHARP_ >= cljs.core.last(bins));
}),vec);
});
robohedger.mylib.timeseries = (function robohedger$mylib$timeseries(equation,b){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,robohedger.mylib.rearrange01((function (){var G__12510 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reductions.cljs$core$IFn$_invoke$arity$3((function (p1__12499_SHARP_,p2__12500_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__12499_SHARP_,p2__12500_SHARP_);
}),cljs.core.PersistentVector.EMPTY,cljs.core.reverse(equation)),cljs.core.reductions.cljs$core$IFn$_invoke$arity$3((function (p1__12501_SHARP_,p2__12502_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__12501_SHARP_,p2__12502_SHARP_);
}),cljs.core.PersistentVector.EMPTY,cljs.core.reverse(b)),(cljs.core.count(cljs.core.first(equation)) + ((0.1 * cljs.core.count(equation)) | (0)))], null);
var fexpr__12509 = ((function (G__12510){
return (function (p__12511){
var vec__12512 = p__12511;
var A = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12512,(0),null);
var B = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12512,(1),null);
var len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12512,(2),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (vec__12512,A,B,len,G__12510){
return (function (p1__12503_SHARP_,p2__12504_SHARP_){
return robohedger.mylib.LinSolve(p1__12503_SHARP_,p2__12504_SHARP_);
});})(vec__12512,A,B,len,G__12510))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(len,A),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(len,B));
});})(G__12510))
;
return fexpr__12509(G__12510);
})()));
});
robohedger.mylib.makeEquationMatrix = (function robohedger$mylib$makeEquationMatrix(swaplist,datelist,redscens){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dict){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12516_SHARP_){
return (dict.cljs$core$IFn$_invoke$arity$1 ? dict.cljs$core$IFn$_invoke$arity$1(p1__12516_SHARP_) : dict.call(null,p1__12516_SHARP_));
}),swaplist);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12515_SHARP_){
return (redscens.cljs$core$IFn$_invoke$arity$1 ? redscens.cljs$core$IFn$_invoke$arity$1(p1__12515_SHARP_) : redscens.call(null,p1__12515_SHARP_));
}),datelist));
});
robohedger.mylib.formatdate = (function robohedger$mylib$formatdate(datestring){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(datestring,/_/));
});
robohedger.mylib.makeGraphMapSub = (function robohedger$mylib$makeGraphMapSub(swaplist,datelistraw,timeserieslist,factor){
var datelist = cljs.core.map.cljs$core$IFn$_invoke$arity$2(robohedger.mylib.formatdate,datelistraw);
var notswapnamebutempty = "";
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (datelist,notswapnamebutempty){
return (function (swapname,timeseries){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,swapname,cljs.core.cst$kw$values,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (datelist,notswapnamebutempty){
return (function (date,val){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$xx,date,cljs.core.cst$kw$yy,(factor * val)], null);
});})(datelist,notswapnamebutempty))
,datelist,timeseries)], null);
});})(datelist,notswapnamebutempty))
,swaplist,timeserieslist);
});
robohedger.mylib.makeGraphMap = (function robohedger$mylib$makeGraphMap(strswapnames,scens,npvdiffs){
var sortednpvdiffs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),npvdiffs);
var swaplist = cljs.core.first(robohedger.mylib.plotlist(strswapnames));
var datelist = cljs.core.keys(sortednpvdiffs);
var scenred = robohedger.mylib.removecurves(scens);
var npvvals = cljs.core.vals(sortednpvdiffs);
var ts = robohedger.mylib.timeseries(robohedger.mylib.makeEquationMatrix(swaplist,datelist,scenred),npvvals);
console.log(["in mgm",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''));

console.log(npvvals);

console.log(robohedger.mylib.makeEquationMatrix(swaplist,datelist,scenred));

return robohedger.mylib.makeGraphMapSub(swaplist,datelist,ts,1.0E-4);
});
robohedger.mylib.calcStatsSub = (function robohedger$mylib$calcStatsSub(vals){
var vvals = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,vals);
var pmean = robohedger.mylib.mean(vvals);
var pstdv = robohedger.mylib.ssddv(pmean,vvals);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stdv,pstdv,cljs.core.cst$kw$skew,robohedger.mylib.skew(pstdv,pmean,vvals)], null);
});
robohedger.mylib.calcStats = (function robohedger$mylib$calcStats(strswapnames,scens,npvdiffs){
var sortednpvdiffs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),npvdiffs);
var swaplist = cljs.core.first(robohedger.mylib.plotlist(strswapnames));
var datelist = cljs.core.keys(sortednpvdiffs);
var scenred = robohedger.mylib.removecurves(scens);
var npvvals = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.vals(sortednpvdiffs));
var eqmat = robohedger.mylib.makeEquationMatrix(swaplist,datelist,scenred);
var newnpvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var G__12519 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sortednpvdiffs,swaplist,datelist,scenred,npvvals,eqmat){
return (function (p1__12517_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,robohedger.mylib.LinSolve(eqmat,npvvals),p1__12517_SHARP_));
});})(sortednpvdiffs,swaplist,datelist,scenred,npvvals,eqmat))
,eqmat);
var fexpr__12518 = ((function (G__12519,sortednpvdiffs,swaplist,datelist,scenred,npvvals,eqmat){
return (function (A){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,npvvals,A);
});})(G__12519,sortednpvdiffs,swaplist,datelist,scenred,npvvals,eqmat))
;
return fexpr__12518(G__12519);
})());
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$orig,robohedger.mylib.calcStatsSub(npvvals),cljs.core.cst$kw$hedged,robohedger.mylib.calcStatsSub(newnpvs)], null);
});
robohedger.mylib.mmap = (function robohedger$mylib$mmap(f,a,b){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (aa){
var G__12523 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f,aa);
var fexpr__12522 = ((function (G__12523){
return (function (ff){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__12523){
return (function (bb){
return (ff.cljs$core$IFn$_invoke$arity$1 ? ff.cljs$core$IFn$_invoke$arity$1(bb) : ff.call(null,bb));
});})(G__12523))
,b);
});})(G__12523))
;
return fexpr__12522(G__12523);
}),a);
});
robohedger.mylib.compr = (function robohedger$mylib$compr(txt,patterns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12524_SHARP_,p2__12525_SHARP_){
return clojure.string.replace(p1__12524_SHARP_,cljs.core.first(p2__12525_SHARP_),cljs.core.last(p2__12525_SHARP_));
}),txt,patterns);
});
robohedger.mylib.decompr = (function robohedger$mylib$decompr(txt,patterns){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__12526_SHARP_,p2__12527_SHARP_){
return clojure.string.replace(p1__12526_SHARP_,cljs.core.last(p2__12527_SHARP_),cljs.core.first(p2__12527_SHARP_));
}),txt,patterns);
});
