// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38569){
var map__38570 = p__38569;
var map__38570__$1 = (((((!((map__38570 == null))))?(((((map__38570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38570):map__38570);
var m = map__38570__$1;
var n = cljs.core.get.call(null,map__38570__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38570__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38572_38604 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38573_38605 = null;
var count__38574_38606 = (0);
var i__38575_38607 = (0);
while(true){
if((i__38575_38607 < count__38574_38606)){
var f_38608 = cljs.core._nth.call(null,chunk__38573_38605,i__38575_38607);
cljs.core.println.call(null,"  ",f_38608);


var G__38609 = seq__38572_38604;
var G__38610 = chunk__38573_38605;
var G__38611 = count__38574_38606;
var G__38612 = (i__38575_38607 + (1));
seq__38572_38604 = G__38609;
chunk__38573_38605 = G__38610;
count__38574_38606 = G__38611;
i__38575_38607 = G__38612;
continue;
} else {
var temp__5720__auto___38613 = cljs.core.seq.call(null,seq__38572_38604);
if(temp__5720__auto___38613){
var seq__38572_38614__$1 = temp__5720__auto___38613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38572_38614__$1)){
var c__4550__auto___38615 = cljs.core.chunk_first.call(null,seq__38572_38614__$1);
var G__38616 = cljs.core.chunk_rest.call(null,seq__38572_38614__$1);
var G__38617 = c__4550__auto___38615;
var G__38618 = cljs.core.count.call(null,c__4550__auto___38615);
var G__38619 = (0);
seq__38572_38604 = G__38616;
chunk__38573_38605 = G__38617;
count__38574_38606 = G__38618;
i__38575_38607 = G__38619;
continue;
} else {
var f_38620 = cljs.core.first.call(null,seq__38572_38614__$1);
cljs.core.println.call(null,"  ",f_38620);


var G__38621 = cljs.core.next.call(null,seq__38572_38614__$1);
var G__38622 = null;
var G__38623 = (0);
var G__38624 = (0);
seq__38572_38604 = G__38621;
chunk__38573_38605 = G__38622;
count__38574_38606 = G__38623;
i__38575_38607 = G__38624;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38625 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38625);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38625)))?cljs.core.second.call(null,arglists_38625):arglists_38625));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38576_38626 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38577_38627 = null;
var count__38578_38628 = (0);
var i__38579_38629 = (0);
while(true){
if((i__38579_38629 < count__38578_38628)){
var vec__38590_38630 = cljs.core._nth.call(null,chunk__38577_38627,i__38579_38629);
var name_38631 = cljs.core.nth.call(null,vec__38590_38630,(0),null);
var map__38593_38632 = cljs.core.nth.call(null,vec__38590_38630,(1),null);
var map__38593_38633__$1 = (((((!((map__38593_38632 == null))))?(((((map__38593_38632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38593_38632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38593_38632):map__38593_38632);
var doc_38634 = cljs.core.get.call(null,map__38593_38633__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38635 = cljs.core.get.call(null,map__38593_38633__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38631);

cljs.core.println.call(null," ",arglists_38635);

if(cljs.core.truth_(doc_38634)){
cljs.core.println.call(null," ",doc_38634);
} else {
}


var G__38636 = seq__38576_38626;
var G__38637 = chunk__38577_38627;
var G__38638 = count__38578_38628;
var G__38639 = (i__38579_38629 + (1));
seq__38576_38626 = G__38636;
chunk__38577_38627 = G__38637;
count__38578_38628 = G__38638;
i__38579_38629 = G__38639;
continue;
} else {
var temp__5720__auto___38640 = cljs.core.seq.call(null,seq__38576_38626);
if(temp__5720__auto___38640){
var seq__38576_38641__$1 = temp__5720__auto___38640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38576_38641__$1)){
var c__4550__auto___38642 = cljs.core.chunk_first.call(null,seq__38576_38641__$1);
var G__38643 = cljs.core.chunk_rest.call(null,seq__38576_38641__$1);
var G__38644 = c__4550__auto___38642;
var G__38645 = cljs.core.count.call(null,c__4550__auto___38642);
var G__38646 = (0);
seq__38576_38626 = G__38643;
chunk__38577_38627 = G__38644;
count__38578_38628 = G__38645;
i__38579_38629 = G__38646;
continue;
} else {
var vec__38595_38647 = cljs.core.first.call(null,seq__38576_38641__$1);
var name_38648 = cljs.core.nth.call(null,vec__38595_38647,(0),null);
var map__38598_38649 = cljs.core.nth.call(null,vec__38595_38647,(1),null);
var map__38598_38650__$1 = (((((!((map__38598_38649 == null))))?(((((map__38598_38649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38598_38649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38598_38649):map__38598_38649);
var doc_38651 = cljs.core.get.call(null,map__38598_38650__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38652 = cljs.core.get.call(null,map__38598_38650__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38648);

cljs.core.println.call(null," ",arglists_38652);

if(cljs.core.truth_(doc_38651)){
cljs.core.println.call(null," ",doc_38651);
} else {
}


var G__38653 = cljs.core.next.call(null,seq__38576_38641__$1);
var G__38654 = null;
var G__38655 = (0);
var G__38656 = (0);
seq__38576_38626 = G__38653;
chunk__38577_38627 = G__38654;
count__38578_38628 = G__38655;
i__38579_38629 = G__38656;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__38600 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38601 = null;
var count__38602 = (0);
var i__38603 = (0);
while(true){
if((i__38603 < count__38602)){
var role = cljs.core._nth.call(null,chunk__38601,i__38603);
var temp__5720__auto___38657__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___38657__$1)){
var spec_38658 = temp__5720__auto___38657__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38658));
} else {
}


var G__38659 = seq__38600;
var G__38660 = chunk__38601;
var G__38661 = count__38602;
var G__38662 = (i__38603 + (1));
seq__38600 = G__38659;
chunk__38601 = G__38660;
count__38602 = G__38661;
i__38603 = G__38662;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__38600);
if(temp__5720__auto____$1){
var seq__38600__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38600__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__38600__$1);
var G__38663 = cljs.core.chunk_rest.call(null,seq__38600__$1);
var G__38664 = c__4550__auto__;
var G__38665 = cljs.core.count.call(null,c__4550__auto__);
var G__38666 = (0);
seq__38600 = G__38663;
chunk__38601 = G__38664;
count__38602 = G__38665;
i__38603 = G__38666;
continue;
} else {
var role = cljs.core.first.call(null,seq__38600__$1);
var temp__5720__auto___38667__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___38667__$2)){
var spec_38668 = temp__5720__auto___38667__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38668));
} else {
}


var G__38669 = cljs.core.next.call(null,seq__38600__$1);
var G__38670 = null;
var G__38671 = (0);
var G__38672 = (0);
seq__38600 = G__38669;
chunk__38601 = G__38670;
count__38602 = G__38671;
i__38603 = G__38672;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38673 = cljs.core.conj.call(null,via,t);
var G__38674 = cljs.core.ex_cause.call(null,t);
via = G__38673;
t = G__38674;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38677 = datafied_throwable;
var map__38677__$1 = (((((!((map__38677 == null))))?(((((map__38677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38677):map__38677);
var via = cljs.core.get.call(null,map__38677__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__38677__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__38677__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38678 = cljs.core.last.call(null,via);
var map__38678__$1 = (((((!((map__38678 == null))))?(((((map__38678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38678):map__38678);
var type = cljs.core.get.call(null,map__38678__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__38678__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__38678__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38679 = data;
var map__38679__$1 = (((((!((map__38679 == null))))?(((((map__38679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38679):map__38679);
var problems = cljs.core.get.call(null,map__38679__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__38679__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__38679__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38680 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__38680__$1 = (((((!((map__38680 == null))))?(((((map__38680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38680):map__38680);
var top_data = map__38680__$1;
var source = cljs.core.get.call(null,map__38680__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__38685 = phase;
var G__38685__$1 = (((G__38685 instanceof cljs.core.Keyword))?G__38685.fqn:null);
switch (G__38685__$1) {
case "read-source":
var map__38686 = data;
var map__38686__$1 = (((((!((map__38686 == null))))?(((((map__38686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38686):map__38686);
var line = cljs.core.get.call(null,map__38686__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__38686__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38688 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__38688__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__38688,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38688);
var G__38688__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__38688__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38688__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__38688__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38688__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38689 = top_data;
var G__38689__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__38689,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38689);
var G__38689__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__38689__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38689__$1);
var G__38689__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__38689__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38689__$2);
var G__38689__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__38689__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38689__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__38689__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38689__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38690 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__38690,(0),null);
var method = cljs.core.nth.call(null,vec__38690,(1),null);
var file = cljs.core.nth.call(null,vec__38690,(2),null);
var line = cljs.core.nth.call(null,vec__38690,(3),null);
var G__38693 = top_data;
var G__38693__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__38693,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38693);
var G__38693__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__38693__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38693__$1);
var G__38693__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__38693__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38693__$2);
var G__38693__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__38693__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38693__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__38693__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38693__$4;
}

break;
case "execution":
var vec__38694 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__38694,(0),null);
var method = cljs.core.nth.call(null,vec__38694,(1),null);
var file = cljs.core.nth.call(null,vec__38694,(2),null);
var line = cljs.core.nth.call(null,vec__38694,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__38694,source__$1,method,file,line,G__38685,G__38685__$1,map__38677,map__38677__$1,via,trace,phase,map__38678,map__38678__$1,type,message,data,map__38679,map__38679__$1,problems,fn,caller,map__38680,map__38680__$1,top_data,source){
return (function (p1__38676_SHARP_){
var or__4131__auto__ = (p1__38676_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__38676_SHARP_);
}
});})(vec__38694,source__$1,method,file,line,G__38685,G__38685__$1,map__38677,map__38677__$1,via,trace,phase,map__38678,map__38678__$1,type,message,data,map__38679,map__38679__$1,problems,fn,caller,map__38680,map__38680__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__38697 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38697__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__38697,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38697);
var G__38697__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__38697__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38697__$1);
var G__38697__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__38697__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38697__$2);
var G__38697__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__38697__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38697__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__38697__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38697__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38685__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38701){
var map__38702 = p__38701;
var map__38702__$1 = (((((!((map__38702 == null))))?(((((map__38702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38702):map__38702);
var triage_data = map__38702__$1;
var phase = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__38702__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38704 = phase;
var G__38704__$1 = (((G__38704 instanceof cljs.core.Keyword))?G__38704.fqn:null);
switch (G__38704__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38705_38714 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38706_38715 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38707_38716 = true;
var _STAR_print_fn_STAR__temp_val__38708_38717 = ((function (_STAR_print_newline_STAR__orig_val__38705_38714,_STAR_print_fn_STAR__orig_val__38706_38715,_STAR_print_newline_STAR__temp_val__38707_38716,sb__4661__auto__,G__38704,G__38704__$1,loc,class_name,simple_class,cause_type,format,map__38702,map__38702__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__38705_38714,_STAR_print_fn_STAR__orig_val__38706_38715,_STAR_print_newline_STAR__temp_val__38707_38716,sb__4661__auto__,G__38704,G__38704__$1,loc,class_name,simple_class,cause_type,format,map__38702,map__38702__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38707_38716;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38708_38717;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__38705_38714,_STAR_print_fn_STAR__orig_val__38706_38715,_STAR_print_newline_STAR__temp_val__38707_38716,_STAR_print_fn_STAR__temp_val__38708_38717,sb__4661__auto__,G__38704,G__38704__$1,loc,class_name,simple_class,cause_type,format,map__38702,map__38702__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__38705_38714,_STAR_print_fn_STAR__orig_val__38706_38715,_STAR_print_newline_STAR__temp_val__38707_38716,_STAR_print_fn_STAR__temp_val__38708_38717,sb__4661__auto__,G__38704,G__38704__$1,loc,class_name,simple_class,cause_type,format,map__38702,map__38702__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__38699_SHARP_){
return cljs.core.dissoc.call(null,p1__38699_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__38705_38714,_STAR_print_fn_STAR__orig_val__38706_38715,_STAR_print_newline_STAR__temp_val__38707_38716,_STAR_print_fn_STAR__temp_val__38708_38717,sb__4661__auto__,G__38704,G__38704__$1,loc,class_name,simple_class,cause_type,format,map__38702,map__38702__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__38705_38714,_STAR_print_fn_STAR__orig_val__38706_38715,_STAR_print_newline_STAR__temp_val__38707_38716,_STAR_print_fn_STAR__temp_val__38708_38717,sb__4661__auto__,G__38704,G__38704__$1,loc,class_name,simple_class,cause_type,format,map__38702,map__38702__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38706_38715;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38705_38714;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38709_38718 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38710_38719 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38711_38720 = true;
var _STAR_print_fn_STAR__temp_val__38712_38721 = ((function (_STAR_print_newline_STAR__orig_val__38709_38718,_STAR_print_fn_STAR__orig_val__38710_38719,_STAR_print_newline_STAR__temp_val__38711_38720,sb__4661__auto__,G__38704,G__38704__$1,loc,class_name,simple_class,cause_type,format,map__38702,map__38702__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__38709_38718,_STAR_print_fn_STAR__orig_val__38710_38719,_STAR_print_newline_STAR__temp_val__38711_38720,sb__4661__auto__,G__38704,G__38704__$1,loc,class_name,simple_class,cause_type,format,map__38702,map__38702__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38711_38720;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38712_38721;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__38709_38718,_STAR_print_fn_STAR__orig_val__38710_38719,_STAR_print_newline_STAR__temp_val__38711_38720,_STAR_print_fn_STAR__temp_val__38712_38721,sb__4661__auto__,G__38704,G__38704__$1,loc,class_name,simple_class,cause_type,format,map__38702,map__38702__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__38709_38718,_STAR_print_fn_STAR__orig_val__38710_38719,_STAR_print_newline_STAR__temp_val__38711_38720,_STAR_print_fn_STAR__temp_val__38712_38721,sb__4661__auto__,G__38704,G__38704__$1,loc,class_name,simple_class,cause_type,format,map__38702,map__38702__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__38700_SHARP_){
return cljs.core.dissoc.call(null,p1__38700_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__38709_38718,_STAR_print_fn_STAR__orig_val__38710_38719,_STAR_print_newline_STAR__temp_val__38711_38720,_STAR_print_fn_STAR__temp_val__38712_38721,sb__4661__auto__,G__38704,G__38704__$1,loc,class_name,simple_class,cause_type,format,map__38702,map__38702__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__38709_38718,_STAR_print_fn_STAR__orig_val__38710_38719,_STAR_print_newline_STAR__temp_val__38711_38720,_STAR_print_fn_STAR__temp_val__38712_38721,sb__4661__auto__,G__38704,G__38704__$1,loc,class_name,simple_class,cause_type,format,map__38702,map__38702__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38710_38719;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38709_38718;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38704__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
