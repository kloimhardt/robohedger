// Compiled by ClojureScript 1.10.520 {}
goog.provide('robohedger.mylib');
goog.require('cljs.core');
goog.require('clojure.core.matrix');
goog.require('clojure.core.matrix.linear');
goog.require('clojure.string');
robohedger.mylib.smallslv = (function robohedger$mylib$smallslv(U,V){
if(cljs.core.empty_QMARK_.call(null,U)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.last.call(null,V) / cljs.core.first.call(null,V))], null);
} else {
return cljs.core.conj.call(null,U,((cljs.core.last.call(null,V) - clojure.core.matrix.mmul.call(null,cljs.core.rest.call(null,cljs.core.butlast.call(null,V)),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,U)))) / cljs.core.first.call(null,V)));
}
});
robohedger.mylib.TriAngSolve = (function robohedger$mylib$TriAngSolve(TriA,B){


return (function (V){
return cljs.core.reverse.call(null,cljs.core.reduce.call(null,robohedger.mylib.smallslv,cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,V)));
}).call(null,(function (p__21552){
var vec__21553 = p__21552;
var RR = cljs.core.nth.call(null,vec__21553,(0),null);
var BB = cljs.core.nth.call(null,vec__21553,(1),null);
return cljs.core.map.call(null,cljs.core.conj,RR,BB);
}).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.reductions.call(null,(function (_1,_2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take_last.call(null,(cljs.core.count.call(null,_1) - (1)),_2));
}),TriA)),B], null)));
});
robohedger.mylib.LinSolve = (function robohedger$mylib$LinSolve(A,B){


return (function (p__21556){
var vec__21557 = p__21556;
var RR = cljs.core.nth.call(null,vec__21557,(0),null);
var BB = cljs.core.nth.call(null,vec__21557,(1),null);
return robohedger.mylib.TriAngSolve.call(null,RR,BB);
}).call(null,(function (p__21560){
var vec__21561 = p__21560;
var QR = cljs.core.nth.call(null,vec__21561,(0),null);
var nofArows = cljs.core.nth.call(null,vec__21561,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take.call(null,nofArows,new cljs.core.Keyword(null,"R","R",-936662523).cljs$core$IFn$_invoke$arity$1(QR)),cljs.core.take.call(null,nofArows,clojure.core.matrix.mmul.call(null,clojure.core.matrix.transpose.call(null,new cljs.core.Keyword(null,"Q","Q",663320520).cljs$core$IFn$_invoke$arity$1(QR)),B))], null);
}).call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.linear.qr.call(null,A),cljs.core.count.call(null,cljs.core.first.call(null,A))], null)));
});
robohedger.mylib.rearrange01 = (function robohedger$mylib$rearrange01(A){

return cljs.core.reduce.call(null,(function (_1,_2){
return cljs.core.map.call(null,(function (_21,_22){
return cljs.core.conj.call(null,_21,_22);
}),_1,_2);
}),cljs.core.repeat.call(null,cljs.core.count.call(null,cljs.core.first.call(null,A)),cljs.core.PersistentVector.EMPTY),A);
});
robohedger.mylib.removecurves = (function robohedger$mylib$removecurves(scens){

return (function (_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,_);
}).call(null,(function (_){
return cljs.core.map.call(null,(function (_11){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.key.call(null,_11),cljs.core.reduce.call(null,cljs.core.conj,cljs.core.val.call(null,_11))]);
}),_);
}).call(null,(function (_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,_);
}).call(null,cljs.core.map.call(null,(function (_11){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.key.call(null,_11),cljs.core.map.call(null,(function (_21){
return cljs.core.val.call(null,_21);
}),cljs.core.val.call(null,_11))]);
}),scens))));
});
robohedger.mylib.getswapnames = (function robohedger$mylib$getswapnames(scens){

return (function (_){
return cljs.core.keys.call(null,_.call(null,cljs.core.first.call(null,cljs.core.keys.call(null,_))));
}).call(null,robohedger.mylib.removecurves.call(null,scens));
});
robohedger.mylib.getcompletelist = (function robohedger$mylib$getcompletelist(scens){
return cljs.core.conj.call(null,robohedger.mylib.getswapnames.call(null,scens),"pls","bid","ask","_______________________PLOT____<GO>");
});
robohedger.mylib.plotlist = (function robohedger$mylib$plotlist(select){

return (function (_){
return cljs.core.map.call(null,(function (_11){
return cljs.core.butlast.call(null,_11);
}),_);
}).call(null,(function (_){
return cljs.core.map.call(null,(function (_11){
return cljs.core.filter.call(null,(function (_111){
return (cljs.core.count.call(null,_111) > (0));
}),_11);
}),_);
}).call(null,(function (_){
return cljs.core.map.call(null,(function (___$1){
return clojure.string.split.call(null,___$1,/, /);
}),_);
}).call(null,(function (_){
return cljs.core.filter.call(null,(function (_11){
return cljs.core.re_matches.call(null,/.*PLOT____<GO/,_11);
}),_);
}).call(null,clojure.string.split.call(null,select,/>/)))));
});
robohedger.mylib.getEquationSystems = (function robohedger$mylib$getEquationSystems(p_plotlist,reduscens,npvs){

return robohedger.mylib.rearrange01.call(null,(function (p__21564){
var vec__21565 = p__21564;
var _A = cljs.core.nth.call(null,vec__21565,(0),null);
var _B = cljs.core.nth.call(null,vec__21565,(1),null);
return cljs.core.map.call(null,((function (vec__21565,_A,_B){
return (function (_1){
return cljs.core.conj.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,_A.call(null,cljs.core.key.call(null,_1))),cljs.core.val.call(null,_1));
});})(vec__21565,_A,_B))
,_B);
}).call(null,(function (p__21568){
var vec__21569 = p__21568;
var _A = cljs.core.nth.call(null,vec__21569,(0),null);
var _B = cljs.core.nth.call(null,vec__21569,(1),null);
var _C = cljs.core.nth.call(null,vec__21569,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (vec__21569,_A,_B,_C){
return (function (_01){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.key.call(null,_01),cljs.core.map.call(null,((function (vec__21569,_A,_B,_C){
return (function (_21){
return cljs.core.map.call(null,((function (vec__21569,_A,_B,_C){
return (function (_11){
return cljs.core.val.call(null,_01).call(null,_11);
});})(vec__21569,_A,_B,_C))
,_21);
});})(vec__21569,_A,_B,_C))
,_A)]);
});})(vec__21569,_A,_B,_C))
,_B)),_C], null);
}).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p_plotlist,reduscens,npvs], null))));
});
robohedger.mylib.solveEquationSystems = (function robohedger$mylib$solveEquationSystems(A){
return cljs.core.map.call(null,(function (_){
return robohedger.mylib.LinSolve.call(null,_,cljs.core.last.call(null,A));
}),cljs.core.butlast.call(null,A));
});
robohedger.mylib.getHedgedPortfolioNPVs = (function robohedger$mylib$getHedgedPortfolioNPVs(A,solutions){
return cljs.core.map.call(null,(function (vec){
return cljs.core.map.call(null,(function (p1__21572_SHARP_,p2__21573_SHARP_){
return (p1__21572_SHARP_ - p2__21573_SHARP_);
}),vec,cljs.core.last.call(null,A));
}),cljs.core.map.call(null,(function (mat,vec){
return cljs.core.map.call(null,(function (row){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,row,vec));
}),mat);
}),A,solutions));
});
robohedger.mylib.cleanup = (function robohedger$mylib$cleanup(data){
return (function (_){
return clojure.string.join.call(null,", ",_);
}).call(null,(function (_){
return cljs.core.map.call(null,clojure.string.trim,_);
}).call(null,clojure.string.split.call(null,data,/,/)));
});
robohedger.mylib.abs = (function robohedger$mylib$abs(n){
var x__4219__auto__ = n;
var y__4220__auto__ = (- n);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
robohedger.mylib.comfgethedgeratios = (function robohedger$mylib$comfgethedgeratios(strswapnames,scens,npvdiffs){

return robohedger.mylib.solveEquationSystems.call(null,robohedger.mylib.getEquationSystems.call(null,robohedger.mylib.plotlist.call(null,strswapnames),robohedger.mylib.removecurves.call(null,scens),npvdiffs));
});
robohedger.mylib.mean = (function robohedger$mylib$mean(vec){
return (function (p1__21574_SHARP_){
return (p1__21574_SHARP_ / (1.0 * cljs.core.count.call(null,vec)));
}).call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,vec));
});
robohedger.mylib.ssddv = (function robohedger$mylib$ssddv(p_mean,vec){
return clojure.core.matrix.sqrt.call(null,(function (p1__21575_SHARP_){
return (p1__21575_SHARP_ - clojure.core.matrix.square.call(null,p_mean));
}).call(null,robohedger.mylib.mean.call(null,clojure.core.matrix.square.call(null,vec))));
});
robohedger.mylib.skew = (function robohedger$mylib$skew(p_sddev,p_mean,vec){
return (((robohedger.mylib.mean.call(null,cljs.core.map.call(null,(function (p1__21576_SHARP_){
return ((p1__21576_SHARP_ * p1__21576_SHARP_) * p1__21576_SHARP_);
}),vec)) - (((3) * p_mean) * (p_sddev * p_sddev))) - ((p_mean * p_mean) * p_mean)) / ((p_sddev * p_sddev) * p_sddev));
});
robohedger.mylib.histo = (function robohedger$mylib$histo(vec,bins){
return cljs.core.map.call(null,cljs.core.count,cljs.core.map.call(null,(function (_1){
return cljs.core.filter.call(null,(function (_11){
return (((_11 >= cljs.core.first.call(null,_1))) && ((_11 < cljs.core.second.call(null,_1))));
}),vec);
}),cljs.core.map.call(null,(function (_1,_2){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_1,_2], null);
}),bins,cljs.core.rest.call(null,bins))));
});
robohedger.mylib.toolow = (function robohedger$mylib$toolow(vec,bins){
return cljs.core.filter.call(null,(function (p1__21577_SHARP_){
return (p1__21577_SHARP_ < cljs.core.first.call(null,bins));
}),vec);
});
robohedger.mylib.toohigh = (function robohedger$mylib$toohigh(vec,bins){
return cljs.core.filter.call(null,(function (p1__21578_SHARP_){
return (p1__21578_SHARP_ >= cljs.core.last.call(null,bins));
}),vec);
});
robohedger.mylib.timeseries = (function robohedger$mylib$timeseries(equation,b){
return cljs.core.map.call(null,cljs.core.reverse,robohedger.mylib.rearrange01.call(null,(function (p__21585){
var vec__21586 = p__21585;
var A = cljs.core.nth.call(null,vec__21586,(0),null);
var B = cljs.core.nth.call(null,vec__21586,(1),null);
var len = cljs.core.nth.call(null,vec__21586,(2),null);
return cljs.core.map.call(null,((function (vec__21586,A,B,len){
return (function (p1__21583_SHARP_,p2__21584_SHARP_){
return robohedger.mylib.LinSolve.call(null,p1__21583_SHARP_,p2__21584_SHARP_);
});})(vec__21586,A,B,len))
,cljs.core.drop.call(null,len,A),cljs.core.drop.call(null,len,B));
}).call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reductions.call(null,(function (p1__21579_SHARP_,p2__21580_SHARP_){
return cljs.core.conj.call(null,p1__21579_SHARP_,p2__21580_SHARP_);
}),cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,equation)),cljs.core.reductions.call(null,(function (p1__21581_SHARP_,p2__21582_SHARP_){
return cljs.core.conj.call(null,p1__21581_SHARP_,p2__21582_SHARP_);
}),cljs.core.PersistentVector.EMPTY,cljs.core.reverse.call(null,b)),(cljs.core.count.call(null,cljs.core.first.call(null,equation)) + ((0.1 * cljs.core.count.call(null,equation)) | (0)))], null))));
});
robohedger.mylib.makeEquationMatrix = (function robohedger$mylib$makeEquationMatrix(swaplist,datelist,redscens){
return cljs.core.map.call(null,(function (dict){
return cljs.core.map.call(null,(function (p1__21590_SHARP_){
return dict.call(null,p1__21590_SHARP_);
}),swaplist);
}),cljs.core.map.call(null,(function (p1__21589_SHARP_){
return redscens.call(null,p1__21589_SHARP_);
}),datelist));
});
robohedger.mylib.formatdate = (function robohedger$mylib$formatdate(datestring){
return cljs.core.first.call(null,clojure.string.split.call(null,datestring,/_/));
});
robohedger.mylib.makeGraphMapSub = (function robohedger$mylib$makeGraphMapSub(swaplist,datelistraw,timeserieslist,factor){
var datelist = cljs.core.map.call(null,robohedger.mylib.formatdate,datelistraw);
var notswapnamebutempty = "";
return cljs.core.mapv.call(null,((function (datelist,notswapnamebutempty){
return (function (swapname,timeseries){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),swapname,new cljs.core.Keyword(null,"values","values",372645556),cljs.core.mapv.call(null,((function (datelist,notswapnamebutempty){
return (function (date,val){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"xx","xx",-1542203733),date,new cljs.core.Keyword(null,"yy","yy",-1432012814),(factor * val)], null);
});})(datelist,notswapnamebutempty))
,datelist,timeseries)], null);
});})(datelist,notswapnamebutempty))
,swaplist,timeserieslist);
});
robohedger.mylib.makeGraphMap = (function robohedger$mylib$makeGraphMap(strswapnames,scens,npvdiffs){
var sortednpvdiffs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),npvdiffs);
var swaplist = cljs.core.first.call(null,robohedger.mylib.plotlist.call(null,strswapnames));
var datelist = cljs.core.keys.call(null,sortednpvdiffs);
var scenred = robohedger.mylib.removecurves.call(null,scens);
var npvvals = cljs.core.vals.call(null,sortednpvdiffs);
var ts = robohedger.mylib.timeseries.call(null,robohedger.mylib.makeEquationMatrix.call(null,swaplist,datelist,scenred),npvvals);
console.log(["in mgm",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join(''));

console.log(npvvals);

console.log(robohedger.mylib.makeEquationMatrix.call(null,swaplist,datelist,scenred));

return robohedger.mylib.makeGraphMapSub.call(null,swaplist,datelist,ts,1.0E-4);
});
robohedger.mylib.calcStatsSub = (function robohedger$mylib$calcStatsSub(vals){
var vvals = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,vals);
var pmean = robohedger.mylib.mean.call(null,vvals);
var pstdv = robohedger.mylib.ssddv.call(null,pmean,vvals);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stdv","stdv",-87899020),pstdv,new cljs.core.Keyword(null,"skew","skew",-595121815),robohedger.mylib.skew.call(null,pstdv,pmean,vvals)], null);
});
robohedger.mylib.calcStats = (function robohedger$mylib$calcStats(strswapnames,scens,npvdiffs){
var sortednpvdiffs = cljs.core.into.call(null,cljs.core.sorted_map.call(null),npvdiffs);
var swaplist = cljs.core.first.call(null,robohedger.mylib.plotlist.call(null,strswapnames));
var datelist = cljs.core.keys.call(null,sortednpvdiffs);
var scenred = robohedger.mylib.removecurves.call(null,scens);
var npvvals = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.vals.call(null,sortednpvdiffs));
var eqmat = robohedger.mylib.makeEquationMatrix.call(null,swaplist,datelist,scenred);
var newnpvs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,((function (sortednpvdiffs,swaplist,datelist,scenred,npvvals,eqmat){
return (function (A){
return cljs.core.map.call(null,cljs.core._,npvvals,A);
});})(sortednpvdiffs,swaplist,datelist,scenred,npvvals,eqmat))
.call(null,cljs.core.map.call(null,((function (sortednpvdiffs,swaplist,datelist,scenred,npvvals,eqmat){
return (function (p1__21591_SHARP_){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,robohedger.mylib.LinSolve.call(null,eqmat,npvvals),p1__21591_SHARP_));
});})(sortednpvdiffs,swaplist,datelist,scenred,npvvals,eqmat))
,eqmat)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"orig","orig",-1678309870),robohedger.mylib.calcStatsSub.call(null,npvvals),new cljs.core.Keyword(null,"hedged","hedged",-11329328),robohedger.mylib.calcStatsSub.call(null,newnpvs)], null);
});
robohedger.mylib.mmap = (function robohedger$mylib$mmap(f,a,b){
return cljs.core.map.call(null,(function (aa){
return (function (ff){
return cljs.core.map.call(null,(function (bb){
return ff.call(null,bb);
}),b);
}).call(null,cljs.core.partial.call(null,f,aa));
}),a);
});
robohedger.mylib.compr = (function robohedger$mylib$compr(txt,patterns){
return cljs.core.reduce.call(null,(function (p1__21594_SHARP_,p2__21595_SHARP_){
return clojure.string.replace.call(null,p1__21594_SHARP_,cljs.core.first.call(null,p2__21595_SHARP_),cljs.core.last.call(null,p2__21595_SHARP_));
}),txt,patterns);
});
robohedger.mylib.decompr = (function robohedger$mylib$decompr(txt,patterns){
return cljs.core.reduce.call(null,(function (p1__21596_SHARP_,p2__21597_SHARP_){
return clojure.string.replace.call(null,p1__21596_SHARP_,cljs.core.last.call(null,p2__21597_SHARP_),cljs.core.first.call(null,p2__21597_SHARP_));
}),txt,patterns);
});

//# sourceMappingURL=mylib.js.map
