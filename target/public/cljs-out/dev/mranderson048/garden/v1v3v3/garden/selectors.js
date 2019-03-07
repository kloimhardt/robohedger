// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.garden.v1v3v3.garden.selectors');
goog.require('cljs.core');
goog.require('clojure.string');

/**
 * @interface
 */
mranderson048.garden.v1v3v3.garden.selectors.ICSSSelector = function(){};

mranderson048.garden.v1v3v3.garden.selectors.css_selector = (function mranderson048$garden$v1v3v3$garden$selectors$css_selector(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1 == null)))))){
return this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (mranderson048.garden.v1v3v3.garden.selectors.css_selector[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (mranderson048.garden.v1v3v3.garden.selectors.css_selector["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ICSSSelector.css-selector",this$);
}
}
}
});

mranderson048.garden.v1v3v3.garden.selectors.selector_QMARK_ = (function mranderson048$garden$v1v3v3$garden$selectors$selector_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,mranderson048.garden.v1v3v3.garden.selectors.ICSSSelector,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,mranderson048.garden.v1v3v3.garden.selectors.ICSSSelector,x);
}
});
goog.object.set(mranderson048.garden.v1v3v3.garden.selectors.ICSSSelector,"string",true);

goog.object.set(mranderson048.garden.v1v3v3.garden.selectors.css_selector,"string",(function (this$){
return this$;
}));

cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

cljs.core.Symbol.prototype.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {mranderson048.garden.v1v3v3.garden.selectors.ICSSSelector}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson048.garden.v1v3v3.garden.selectors.CSSSelector = (function (selector,__meta,__extmap,__hash){
this.selector = selector;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k31413,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__31418 = k31413;
var G__31418__$1 = (((G__31418 instanceof cljs.core.Keyword))?G__31418.fqn:null);
switch (G__31418__$1) {
case "selector":
return self__.selector;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31413,else__4388__auto__);

}
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__31419){
var vec__31420 = p__31419;
var k__4408__auto__ = cljs.core.nth.call(null,vec__31420,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__31420,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#mranderson048.garden.v1v3v3.garden.selectors.CSSSelector{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null))], null),self__.__extmap));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31412){
var self__ = this;
var G__31412__$1 = this;
return (new cljs.core.RecordIter((0),G__31412__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selector","selector",762528866)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector(self__.selector,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (1516986032 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31414,other31415){
var self__ = this;
var this31414__$1 = this;
return (((!((other31415 == null)))) && ((this31414__$1.constructor === other31415.constructor)) && (cljs.core._EQ_.call(null,this31414__$1.selector,other31415.selector)) && (cljs.core._EQ_.call(null,this31414__$1.__extmap,other31415.__extmap)));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selector","selector",762528866),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector(self__.selector,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__31412){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__31423 = cljs.core.keyword_identical_QMARK_;
var expr__31424 = k__4393__auto__;
if(cljs.core.truth_(pred__31423.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__31424))){
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector(G__31412,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector(self__.selector,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__31412),null));
}
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector,null))], null),self__.__extmap));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__31412){
var self__ = this;
var this__4384__auto____$1 = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector(self__.selector,G__31412,self__.__extmap,self__.__hash));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.call = (function() {
var G__31428 = null;
var G__31428__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$;
});
var G__31428__2 = (function (self__,a){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a))].join(''),null,null,null));
});
var G__31428__3 = (function (self__,a,b){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b))].join(''),null,null,null));
});
var G__31428__4 = (function (self__,a,b,c){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c))].join(''),null,null,null));
});
var G__31428__5 = (function (self__,a,b,c,d){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d))].join(''),null,null,null));
});
var G__31428__6 = (function (self__,a,b,c,d,e){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e))].join(''),null,null,null));
});
var G__31428__7 = (function (self__,a,b,c,d,e,f){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f))].join(''),null,null,null));
});
var G__31428__8 = (function (self__,a,b,c,d,e,f,g){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g))].join(''),null,null,null));
});
var G__31428__9 = (function (self__,a,b,c,d,e,f,g,h){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h))].join(''),null,null,null));
});
var G__31428__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i))].join(''),null,null,null));
});
var G__31428__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j))].join(''),null,null,null));
});
var G__31428__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k))].join(''),null,null,null));
});
var G__31428__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l))].join(''),null,null,null));
});
var G__31428__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m))].join(''),null,null,null));
});
var G__31428__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n))].join(''),null,null,null));
});
var G__31428__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,o))].join(''),null,null,null));
});
var G__31428__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,p))].join(''),null,null,null));
});
var G__31428__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,q))].join(''),null,null,null));
});
var G__31428__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,r))].join(''),null,null,null));
});
var G__31428__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,s))].join(''),null,null,null));
});
var G__31428__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,t))].join(''),null,null,null));
});
G__31428 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
switch(arguments.length){
case 1:
return G__31428__1.call(this,self__);
case 2:
return G__31428__2.call(this,self__,a);
case 3:
return G__31428__3.call(this,self__,a,b);
case 4:
return G__31428__4.call(this,self__,a,b,c);
case 5:
return G__31428__5.call(this,self__,a,b,c,d);
case 6:
return G__31428__6.call(this,self__,a,b,c,d,e);
case 7:
return G__31428__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__31428__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__31428__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__31428__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__31428__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__31428__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__31428__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__31428__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__31428__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__31428__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__31428__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__31428__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__31428__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__31428__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__31428__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31428.cljs$core$IFn$_invoke$arity$1 = G__31428__1;
G__31428.cljs$core$IFn$_invoke$arity$2 = G__31428__2;
G__31428.cljs$core$IFn$_invoke$arity$3 = G__31428__3;
G__31428.cljs$core$IFn$_invoke$arity$4 = G__31428__4;
G__31428.cljs$core$IFn$_invoke$arity$5 = G__31428__5;
G__31428.cljs$core$IFn$_invoke$arity$6 = G__31428__6;
G__31428.cljs$core$IFn$_invoke$arity$7 = G__31428__7;
G__31428.cljs$core$IFn$_invoke$arity$8 = G__31428__8;
G__31428.cljs$core$IFn$_invoke$arity$9 = G__31428__9;
G__31428.cljs$core$IFn$_invoke$arity$10 = G__31428__10;
G__31428.cljs$core$IFn$_invoke$arity$11 = G__31428__11;
G__31428.cljs$core$IFn$_invoke$arity$12 = G__31428__12;
G__31428.cljs$core$IFn$_invoke$arity$13 = G__31428__13;
G__31428.cljs$core$IFn$_invoke$arity$14 = G__31428__14;
G__31428.cljs$core$IFn$_invoke$arity$15 = G__31428__15;
G__31428.cljs$core$IFn$_invoke$arity$16 = G__31428__16;
G__31428.cljs$core$IFn$_invoke$arity$17 = G__31428__17;
G__31428.cljs$core$IFn$_invoke$arity$18 = G__31428__18;
G__31428.cljs$core$IFn$_invoke$arity$19 = G__31428__19;
G__31428.cljs$core$IFn$_invoke$arity$20 = G__31428__20;
G__31428.cljs$core$IFn$_invoke$arity$21 = G__31428__21;
return G__31428;
})()
;

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.apply = (function (self__,args31417){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31417)));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,o))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,p))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,q))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,r))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,s))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self__ = this;
var this$ = this;
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$css_selector$arity$1(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,d)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,g)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,h)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,j)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,l)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,m)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,o)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,p)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,q)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,s)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,t))].join(''),null,null,null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"selector","selector",-1891906903,null)], null);
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.cljs$lang$type = true;

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"mranderson048.garden.v1v3v3.garden.selectors/CSSSelector",null,(1),null));
});

mranderson048.garden.v1v3v3.garden.selectors.CSSSelector.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"mranderson048.garden.v1v3v3.garden.selectors/CSSSelector");
});

/**
 * Positional factory function for mranderson048.garden.v1v3v3.garden.selectors/CSSSelector.
 */
mranderson048.garden.v1v3v3.garden.selectors.__GT_CSSSelector = (function mranderson048$garden$v1v3v3$garden$selectors$__GT_CSSSelector(selector){
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector(selector,null,null,null));
});

/**
 * Factory function for mranderson048.garden.v1v3v3.garden.selectors/CSSSelector, taking a map of keywords to field values.
 */
mranderson048.garden.v1v3v3.garden.selectors.map__GT_CSSSelector = (function mranderson048$garden$v1v3v3$garden$selectors$map__GT_CSSSelector(G__31416){
var extmap__4424__auto__ = (function (){var G__31426 = cljs.core.dissoc.call(null,G__31416,new cljs.core.Keyword(null,"selector","selector",762528866));
if(cljs.core.record_QMARK_.call(null,G__31416)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31426);
} else {
return G__31426;
}
})();
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector(new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__31416),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

mranderson048.garden.v1v3v3.garden.selectors.selector = (function mranderson048$garden$v1v3v3$garden$selectors$selector(x){
return (new mranderson048.garden.v1v3v3.garden.selectors.CSSSelector(x,null,null,null));
});
mranderson048.garden.v1v3v3.garden.selectors.html_tags = cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"abbr","abbr",-565843885,null),new cljs.core.Symbol(null,"address","address",-2094936343,null),new cljs.core.Symbol(null,"area","area",2112538783,null),new cljs.core.Symbol(null,"article","article",1618846482,null),new cljs.core.Symbol(null,"aside","aside",-1240038232,null),new cljs.core.Symbol(null,"audio","audio",-835308448,null),new cljs.core.Symbol(null,"b","b",-1172211299,null),new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"bdi","bdi",317505641,null),new cljs.core.Symbol(null,"bdo","bdo",-490616675,null),new cljs.core.Symbol(null,"blockquote","blockquote",2012795717,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"br","br",-1720330977,null),new cljs.core.Symbol(null,"button","button",-1197855826,null),new cljs.core.Symbol(null,"canvas","canvas",-158285962,null),new cljs.core.Symbol(null,"caption","caption",785147625,null),new cljs.core.Symbol(null,"cite","cite",-744995773,null),new cljs.core.Symbol(null,"code","code",-1068142627,null),new cljs.core.Symbol(null,"col","col",-318831557,null),new cljs.core.Symbol(null,"colgroup","colgroup",-2003317124,null),new cljs.core.Symbol(null,"command","command",745990803,null),new cljs.core.Symbol(null,"datalist","datalist",405488053,null),new cljs.core.Symbol(null,"dd","dd",300093898,null),new cljs.core.Symbol(null,"del","del",-2079460185,null),new cljs.core.Symbol(null,"details","details",-697640358,null),new cljs.core.Symbol(null,"dfn","dfn",1882439694,null),new cljs.core.Symbol(null,"div","div",-1597244137,null),new cljs.core.Symbol(null,"dl","dl",-499620186,null),new cljs.core.Symbol(null,"dt","dt",1272086768,null),new cljs.core.Symbol(null,"em","em",-1946622734,null),new cljs.core.Symbol(null,"embed","embed",285618178,null),new cljs.core.Symbol(null,"fieldset","fieldset",-309239289,null),new cljs.core.Symbol(null,"figcaption","figcaption",-149590520,null),new cljs.core.Symbol(null,"figure","figure",1079137448,null),new cljs.core.Symbol(null,"footer","footer",-1047990379,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"h1","h1",-256355935,null),new cljs.core.Symbol(null,"h2","h2",1267868799,null),new cljs.core.Symbol(null,"h3","h3",-586824606,null),new cljs.core.Symbol(null,"h4","h4",-649572776,null),new cljs.core.Symbol(null,"h5","h5",-188625098,null),new cljs.core.Symbol(null,"h6","h6",-2097141989,null),new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.Symbol(null,"header","header",1759972661,null),new cljs.core.Symbol(null,"hgroup","hgroup",-1525585280,null),new cljs.core.Symbol(null,"hr","hr",-1276695702,null),new cljs.core.Symbol(null,"html","html",641734630,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"iframe","iframe",-1770013743,null),new cljs.core.Symbol(null,"img","img",-1211748411,null),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"ins","ins",618547957,null),new cljs.core.Symbol(null,"kbd","kbd",1956688402,null),new cljs.core.Symbol(null,"keygen","keygen",1068838274,null),new cljs.core.Symbol(null,"label","label",-936024965,null),new cljs.core.Symbol(null,"legend","legend",613339282,null),new cljs.core.Symbol(null,"li","li",-1930876848,null),new cljs.core.Symbol(null,"link","link",-128631941,null),new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"mark","mark",1266715182,null),new cljs.core.Symbol(null,"math","math",-386381276,null),new cljs.core.Symbol(null,"menu","menu",1992786725,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"meter","meter",1452889916,null),new cljs.core.Symbol(null,"nav","nav",-1934895292,null),new cljs.core.Symbol(null,"noscript","noscript",935754238,null),new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol(null,"ol","ol",-1721911718,null),new cljs.core.Symbol(null,"optgroup","optgroup",-916153551,null),new cljs.core.Symbol(null,"option","option",1705663799,null),new cljs.core.Symbol(null,"output","output",534662484,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"param","param",-640803946,null),new cljs.core.Symbol(null,"pre","pre",-535978900,null),new cljs.core.Symbol(null,"progress","progress",1884855074,null),new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.Symbol(null,"rp","rp",-647737686,null),new cljs.core.Symbol(null,"rt","rt",-2030955077,null),new cljs.core.Symbol(null,"ruby","ruby",-653698108,null),new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"samp","samp",-1148294633,null),new cljs.core.Symbol(null,"script","script",336087726,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"select","select",-1506602266,null),new cljs.core.Symbol(null,"small","small",-520957065,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"span","span",-1259562778,null),new cljs.core.Symbol(null,"strong","strong",1910060527,null),new cljs.core.Symbol(null,"style","style",1143888791,null),new cljs.core.Symbol(null,"sub","sub",-453228498,null),new cljs.core.Symbol(null,"summary","summary",2021379479,null),new cljs.core.Symbol(null,"sup","sup",-398960819,null),new cljs.core.Symbol(null,"svg","svg",-1797646627,null),new cljs.core.Symbol(null,"table","table",1075588491,null),new cljs.core.Symbol(null,"tbody","tbody",1559853227,null),new cljs.core.Symbol(null,"td","td",-1174502416,null),new cljs.core.Symbol(null,"textarea","textarea",990155703,null),new cljs.core.Symbol(null,"tfoot","tfoot",938931637,null),new cljs.core.Symbol(null,"th","th",1094922961,null),new cljs.core.Symbol(null,"thead","thead",1348656231,null),new cljs.core.Symbol(null,"time","time",-1268547887,null),new cljs.core.Symbol(null,"title","title",-2017930186,null),new cljs.core.Symbol(null,"tr","tr",215756881,null),new cljs.core.Symbol(null,"track","track",1836319014,null),new cljs.core.Symbol(null,"u","u",483896742,null),new cljs.core.Symbol(null,"ul","ul",291010124,null),new cljs.core.Symbol(null,"var","var",870848730,null),new cljs.core.Symbol(null,"video","video",1797419657,null),new cljs.core.Symbol(null,"wbr","wbr",1869193327,null)], true);
/**
 * CSS a type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.a = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"a");

/**
 * CSS abbr type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.abbr = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"abbr");

/**
 * CSS address type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.address = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"address");

/**
 * CSS area type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.area = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"area");

/**
 * CSS article type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.article = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"article");

/**
 * CSS aside type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.aside = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"aside");

/**
 * CSS audio type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.audio = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"audio");

/**
 * CSS b type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.b = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"b");

/**
 * CSS base type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.base = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"base");

/**
 * CSS bdi type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.bdi = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"bdi");

/**
 * CSS bdo type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.bdo = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"bdo");

/**
 * CSS blockquote type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.blockquote = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"blockquote");

/**
 * CSS body type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.body = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"body");

/**
 * CSS br type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.br = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"br");

/**
 * CSS button type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.button = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"button");

/**
 * CSS canvas type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.canvas = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"canvas");

/**
 * CSS caption type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.caption = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"caption");

/**
 * CSS cite type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.cite = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"cite");

/**
 * CSS code type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.code = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"code");

/**
 * CSS col type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.col = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"col");

/**
 * CSS colgroup type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.colgroup = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"colgroup");

/**
 * CSS command type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.command = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"command");

/**
 * CSS datalist type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.datalist = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"datalist");

/**
 * CSS dd type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.dd = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"dd");

/**
 * CSS del type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.del = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"del");

/**
 * CSS details type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.details = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"details");

/**
 * CSS dfn type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.dfn = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"dfn");

/**
 * CSS div type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.div = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"div");

/**
 * CSS dl type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.dl = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"dl");

/**
 * CSS dt type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.dt = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"dt");

/**
 * CSS em type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.em = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"em");

/**
 * CSS embed type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.embed = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"embed");

/**
 * CSS fieldset type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.fieldset = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"fieldset");

/**
 * CSS figcaption type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.figcaption = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"figcaption");

/**
 * CSS figure type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.figure = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"figure");

/**
 * CSS footer type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.footer = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"footer");

/**
 * CSS form type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.form = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"form");

/**
 * CSS h1 type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.h1 = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"h1");

/**
 * CSS h2 type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.h2 = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"h2");

/**
 * CSS h3 type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.h3 = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"h3");

/**
 * CSS h4 type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.h4 = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"h4");

/**
 * CSS h5 type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.h5 = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"h5");

/**
 * CSS h6 type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.h6 = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"h6");

/**
 * CSS head type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.head = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"head");

/**
 * CSS header type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.header = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"header");

/**
 * CSS hgroup type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.hgroup = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"hgroup");

/**
 * CSS hr type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.hr = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"hr");

/**
 * CSS html type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.html = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"html");

/**
 * CSS i type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.i = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"i");

/**
 * CSS iframe type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.iframe = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"iframe");

/**
 * CSS img type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.img = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"img");

/**
 * CSS input type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.input = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"input");

/**
 * CSS ins type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.ins = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"ins");

/**
 * CSS kbd type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.kbd = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"kbd");

/**
 * CSS keygen type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.keygen = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"keygen");

/**
 * CSS label type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.label = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"label");

/**
 * CSS legend type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.legend = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"legend");

/**
 * CSS li type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.li = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"li");

/**
 * CSS link type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.link = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"link");

/**
 * CSS map type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.map = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"map");

/**
 * CSS mark type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.mark = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"mark");

/**
 * CSS math type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.math = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"math");

/**
 * CSS menu type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.menu = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"menu");

/**
 * CSS meta type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.meta = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"meta");

/**
 * CSS meter type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.meter = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"meter");

/**
 * CSS nav type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.nav = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"nav");

/**
 * CSS noscript type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.noscript = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"noscript");

/**
 * CSS object type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.object = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"object");

/**
 * CSS ol type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.ol = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"ol");

/**
 * CSS optgroup type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.optgroup = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"optgroup");

/**
 * CSS option type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.option = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"option");

/**
 * CSS output type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.output = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"output");

/**
 * CSS p type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.p = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"p");

/**
 * CSS param type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.param = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"param");

/**
 * CSS pre type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.pre = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"pre");

/**
 * CSS progress type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.progress = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"progress");

/**
 * CSS q type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.q = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"q");

/**
 * CSS rp type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.rp = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"rp");

/**
 * CSS rt type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.rt = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"rt");

/**
 * CSS ruby type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.ruby = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"ruby");

/**
 * CSS s type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.s = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"s");

/**
 * CSS samp type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.samp = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"samp");

/**
 * CSS script type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.script = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"script");

/**
 * CSS section type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.section = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"section");

/**
 * CSS select type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.select = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"select");

/**
 * CSS small type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.small = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"small");

/**
 * CSS source type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.source = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"source");

/**
 * CSS span type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.span = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"span");

/**
 * CSS strong type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.strong = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"strong");

/**
 * CSS style type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.style = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"style");

/**
 * CSS sub type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.sub = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"sub");

/**
 * CSS summary type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.summary = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"summary");

/**
 * CSS sup type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.sup = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"sup");

/**
 * CSS svg type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.svg = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"svg");

/**
 * CSS table type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.table = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"table");

/**
 * CSS tbody type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.tbody = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"tbody");

/**
 * CSS td type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.td = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"td");

/**
 * CSS textarea type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.textarea = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"textarea");

/**
 * CSS tfoot type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.tfoot = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"tfoot");

/**
 * CSS th type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.th = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"th");

/**
 * CSS thead type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.thead = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"thead");

/**
 * CSS time type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.time = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"time");

/**
 * CSS title type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.title = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"title");

/**
 * CSS tr type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.tr = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"tr");

/**
 * CSS track type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.track = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"track");

/**
 * CSS u type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.u = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"u");

/**
 * CSS ul type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.ul = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"ul");

/**
 * CSS var type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.var$ = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"var");

/**
 * CSS video type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.video = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"video");

/**
 * CSS wbr type selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.wbr = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"wbr");
mranderson048.garden.v1v3v3.garden.selectors.pseudo_classes = cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"active","active",-758473701,null),new cljs.core.Symbol(null,"checked","checked",1589575708,null),new cljs.core.Symbol(null,"default","default",-347290801,null),new cljs.core.Symbol(null,"disabled","disabled",110747309,null),new cljs.core.Symbol(null,"empty","empty",-1886564811,null),new cljs.core.Symbol(null,"enabled","enabled",-1458526013,null),new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"first-child","first-child",-540335927,null),new cljs.core.Symbol(null,"first-of-type","first-of-type",900311874,null),new cljs.core.Symbol(null,"fullscreen","fullscreen",1636160473,null),new cljs.core.Symbol(null,"focus","focus",1875209438,null),new cljs.core.Symbol(null,"hover","hover",1299389816,null),new cljs.core.Symbol(null,"indeterminate","indeterminate",1127490551,null),new cljs.core.Symbol(null,"in-range","in-range",-1297863944,null),new cljs.core.Symbol(null,"invalid","invalid",2053401043,null),new cljs.core.Symbol(null,"last-child","last-child",-1323765444,null),new cljs.core.Symbol(null,"last-of-type","last-of-type",986453331,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"links","links",986024133,null),new cljs.core.Symbol(null,"only-child","only-child",220029032,null),new cljs.core.Symbol(null,"only-of-type","only-of-type",-1960460626,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null),new cljs.core.Symbol(null,"out-of-range","out-of-range",-1962117180,null),new cljs.core.Symbol(null,"read-only","read-only",1448824641,null),new cljs.core.Symbol(null,"read-write","read-write",1818554410,null),new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"scope","scope",1201173109,null),new cljs.core.Symbol(null,"target","target",1893533248,null),new cljs.core.Symbol(null,"valid","valid",1796145767,null),new cljs.core.Symbol(null,"visited","visited",29677652,null)], true);
/**
 * CSS :active pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.active = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":active");

/**
 * CSS :checked pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.checked = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":checked");

/**
 * CSS :default pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.default$ = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":default");

/**
 * CSS :disabled pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.disabled = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":disabled");

/**
 * CSS :empty pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.empty = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":empty");

/**
 * CSS :enabled pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.enabled = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":enabled");

/**
 * CSS :first pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.first = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":first");

/**
 * CSS :first-child pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.first_child = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":first-child");

/**
 * CSS :first-of-type pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.first_of_type = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":first-of-type");

/**
 * CSS :fullscreen pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.fullscreen = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":fullscreen");

/**
 * CSS :focus pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.focus = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":focus");

/**
 * CSS :hover pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.hover = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":hover");

/**
 * CSS :indeterminate pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.indeterminate = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":indeterminate");

/**
 * CSS :in-range pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.in_range = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":in-range");

/**
 * CSS :invalid pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.invalid = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":invalid");

/**
 * CSS :last-child pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.last_child = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":last-child");

/**
 * CSS :last-of-type pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.last_of_type = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":last-of-type");

/**
 * CSS :left pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.left = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":left");

/**
 * CSS :links pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.links = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":links");

/**
 * CSS :only-child pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.only_child = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":only-child");

/**
 * CSS :only-of-type pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.only_of_type = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":only-of-type");

/**
 * CSS :optional pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.optional = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":optional");

/**
 * CSS :out-of-range pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.out_of_range = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":out-of-range");

/**
 * CSS :read-only pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.read_only = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":read-only");

/**
 * CSS :read-write pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.read_write = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":read-write");

/**
 * CSS :required pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.required = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":required");

/**
 * CSS :right pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.right = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":right");

/**
 * CSS :root pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.root = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":root");

/**
 * CSS :scope pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.scope = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":scope");

/**
 * CSS :target pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.target = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":target");

/**
 * CSS :valid pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.valid = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":valid");

/**
 * CSS :visited pseudo-class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.visited = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,":visited");
mranderson048.garden.v1v3v3.garden.selectors.lang = cljs.core.with_meta((function() { 
var mranderson048$garden$v1v3v3$garden$selectors$lang__delegate = function (args__31291__auto__){
var v__31292__auto__ = cljs.core.apply.call(null,(function (language){
return cljs.core.name.call(null,language);
}),args__31291__auto__);
var v__31292__auto____$1 = ((mranderson048.garden.v1v3v3.garden.selectors.selector_QMARK_.call(null,v__31292__auto__))?mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,v__31292__auto__):v__31292__auto__);
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,[":","lang","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__31292__auto____$1),")"].join(''));
};
var mranderson048$garden$v1v3v3$garden$selectors$lang = function (var_args){
var args__31291__auto__ = null;
if (arguments.length > 0) {
var G__31431__i = 0, G__31431__a = new Array(arguments.length -  0);
while (G__31431__i < G__31431__a.length) {G__31431__a[G__31431__i] = arguments[G__31431__i + 0]; ++G__31431__i;}
  args__31291__auto__ = new cljs.core.IndexedSeq(G__31431__a,0,null);
} 
return mranderson048$garden$v1v3v3$garden$selectors$lang__delegate.call(this,args__31291__auto__);};
mranderson048$garden$v1v3v3$garden$selectors$lang.cljs$lang$maxFixedArity = 0;
mranderson048$garden$v1v3v3$garden$selectors$lang.cljs$lang$applyTo = (function (arglist__31432){
var args__31291__auto__ = cljs.core.seq(arglist__31432);
return mranderson048$garden$v1v3v3$garden$selectors$lang__delegate(args__31291__auto__);
});
mranderson048$garden$v1v3v3$garden$selectors$lang.cljs$core$IFn$_invoke$arity$variadic = mranderson048$garden$v1v3v3$garden$selectors$lang__delegate;
return mranderson048$garden$v1v3v3$garden$selectors$lang;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
mranderson048.garden.v1v3v3.garden.selectors.not = cljs.core.with_meta((function() { 
var mranderson048$garden$v1v3v3$garden$selectors$not__delegate = function (args__31291__auto__){
var v__31292__auto__ = cljs.core.apply.call(null,(function (selector){
return mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,selector);
}),args__31291__auto__);
var v__31292__auto____$1 = ((mranderson048.garden.v1v3v3.garden.selectors.selector_QMARK_.call(null,v__31292__auto__))?mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,v__31292__auto__):v__31292__auto__);
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,[":","not","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__31292__auto____$1),")"].join(''));
};
var mranderson048$garden$v1v3v3$garden$selectors$not = function (var_args){
var args__31291__auto__ = null;
if (arguments.length > 0) {
var G__31433__i = 0, G__31433__a = new Array(arguments.length -  0);
while (G__31433__i < G__31433__a.length) {G__31433__a[G__31433__i] = arguments[G__31433__i + 0]; ++G__31433__i;}
  args__31291__auto__ = new cljs.core.IndexedSeq(G__31433__a,0,null);
} 
return mranderson048$garden$v1v3v3$garden$selectors$not__delegate.call(this,args__31291__auto__);};
mranderson048$garden$v1v3v3$garden$selectors$not.cljs$lang$maxFixedArity = 0;
mranderson048$garden$v1v3v3$garden$selectors$not.cljs$lang$applyTo = (function (arglist__31434){
var args__31291__auto__ = cljs.core.seq(arglist__31434);
return mranderson048$garden$v1v3v3$garden$selectors$not__delegate(args__31291__auto__);
});
mranderson048$garden$v1v3v3$garden$selectors$not.cljs$core$IFn$_invoke$arity$variadic = mranderson048$garden$v1v3v3$garden$selectors$not__delegate;
return mranderson048$garden$v1v3v3$garden$selectors$not;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
mranderson048.garden.v1v3v3.garden.selectors.nth_child_re = (new RegExp("\\s*(?:[-+]?\\d+n\\s*(?:[-+]\\s*\\d+)?|[-+]?\\d+|odd|even)\\s*","i"));
/**
 * nth-child helper.
 */
mranderson048.garden.v1v3v3.garden.selectors.nth_x = (function mranderson048$garden$v1v3v3$garden$selectors$nth_x(x){
if(((typeof x === 'string') || ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Agument must be a string, keyword, or symbol","\n","(or (string? x) (keyword? x) (symbol? x))"].join('')));
}

var s = cljs.core.name.call(null,x);
var temp__5718__auto__ = cljs.core.re_matches.call(null,mranderson048.garden.v1v3v3.garden.selectors.nth_child_re,s);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
return m;
} else {
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",["Invalid value ",cljs.core.pr_str.call(null,s)].join(''));
}
});
/**
 * CSS :nth-child pseudo class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.nth_child = cljs.core.with_meta((function() { 
var mranderson048$garden$v1v3v3$garden$selectors$nth_child__delegate = function (args__31291__auto__){
var v__31292__auto__ = cljs.core.apply.call(null,(function (x){
if(typeof x === 'number'){
return mranderson048.garden.v1v3v3.garden.selectors.nth_x.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"n"].join(''));
} else {
return mranderson048.garden.v1v3v3.garden.selectors.nth_x.call(null,x);
}
}),args__31291__auto__);
var v__31292__auto____$1 = ((mranderson048.garden.v1v3v3.garden.selectors.selector_QMARK_.call(null,v__31292__auto__))?mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,v__31292__auto__):v__31292__auto__);
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,[":","nth-child","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__31292__auto____$1),")"].join(''));
};
var mranderson048$garden$v1v3v3$garden$selectors$nth_child = function (var_args){
var args__31291__auto__ = null;
if (arguments.length > 0) {
var G__31435__i = 0, G__31435__a = new Array(arguments.length -  0);
while (G__31435__i < G__31435__a.length) {G__31435__a[G__31435__i] = arguments[G__31435__i + 0]; ++G__31435__i;}
  args__31291__auto__ = new cljs.core.IndexedSeq(G__31435__a,0,null);
} 
return mranderson048$garden$v1v3v3$garden$selectors$nth_child__delegate.call(this,args__31291__auto__);};
mranderson048$garden$v1v3v3$garden$selectors$nth_child.cljs$lang$maxFixedArity = 0;
mranderson048$garden$v1v3v3$garden$selectors$nth_child.cljs$lang$applyTo = (function (arglist__31436){
var args__31291__auto__ = cljs.core.seq(arglist__31436);
return mranderson048$garden$v1v3v3$garden$selectors$nth_child__delegate(args__31291__auto__);
});
mranderson048$garden$v1v3v3$garden$selectors$nth_child.cljs$core$IFn$_invoke$arity$variadic = mranderson048$garden$v1v3v3$garden$selectors$nth_child__delegate;
return mranderson048$garden$v1v3v3$garden$selectors$nth_child;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
/**
 * CSS :nth-last-child pseudo class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.nth_last_child = cljs.core.with_meta((function() { 
var mranderson048$garden$v1v3v3$garden$selectors$nth_last_child__delegate = function (args__31291__auto__){
var v__31292__auto__ = cljs.core.apply.call(null,(function (x){
return mranderson048.garden.v1v3v3.garden.selectors.nth_x.call(null,x);
}),args__31291__auto__);
var v__31292__auto____$1 = ((mranderson048.garden.v1v3v3.garden.selectors.selector_QMARK_.call(null,v__31292__auto__))?mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,v__31292__auto__):v__31292__auto__);
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,[":","nth-last-child","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__31292__auto____$1),")"].join(''));
};
var mranderson048$garden$v1v3v3$garden$selectors$nth_last_child = function (var_args){
var args__31291__auto__ = null;
if (arguments.length > 0) {
var G__31437__i = 0, G__31437__a = new Array(arguments.length -  0);
while (G__31437__i < G__31437__a.length) {G__31437__a[G__31437__i] = arguments[G__31437__i + 0]; ++G__31437__i;}
  args__31291__auto__ = new cljs.core.IndexedSeq(G__31437__a,0,null);
} 
return mranderson048$garden$v1v3v3$garden$selectors$nth_last_child__delegate.call(this,args__31291__auto__);};
mranderson048$garden$v1v3v3$garden$selectors$nth_last_child.cljs$lang$maxFixedArity = 0;
mranderson048$garden$v1v3v3$garden$selectors$nth_last_child.cljs$lang$applyTo = (function (arglist__31438){
var args__31291__auto__ = cljs.core.seq(arglist__31438);
return mranderson048$garden$v1v3v3$garden$selectors$nth_last_child__delegate(args__31291__auto__);
});
mranderson048$garden$v1v3v3$garden$selectors$nth_last_child.cljs$core$IFn$_invoke$arity$variadic = mranderson048$garden$v1v3v3$garden$selectors$nth_last_child__delegate;
return mranderson048$garden$v1v3v3$garden$selectors$nth_last_child;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
/**
 * CSS :nth-of-type pseudo class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.nth_of_type = cljs.core.with_meta((function() { 
var mranderson048$garden$v1v3v3$garden$selectors$nth_of_type__delegate = function (args__31291__auto__){
var v__31292__auto__ = cljs.core.apply.call(null,(function (x){
return mranderson048.garden.v1v3v3.garden.selectors.nth_x.call(null,x);
}),args__31291__auto__);
var v__31292__auto____$1 = ((mranderson048.garden.v1v3v3.garden.selectors.selector_QMARK_.call(null,v__31292__auto__))?mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,v__31292__auto__):v__31292__auto__);
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,[":","nth-of-type","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__31292__auto____$1),")"].join(''));
};
var mranderson048$garden$v1v3v3$garden$selectors$nth_of_type = function (var_args){
var args__31291__auto__ = null;
if (arguments.length > 0) {
var G__31439__i = 0, G__31439__a = new Array(arguments.length -  0);
while (G__31439__i < G__31439__a.length) {G__31439__a[G__31439__i] = arguments[G__31439__i + 0]; ++G__31439__i;}
  args__31291__auto__ = new cljs.core.IndexedSeq(G__31439__a,0,null);
} 
return mranderson048$garden$v1v3v3$garden$selectors$nth_of_type__delegate.call(this,args__31291__auto__);};
mranderson048$garden$v1v3v3$garden$selectors$nth_of_type.cljs$lang$maxFixedArity = 0;
mranderson048$garden$v1v3v3$garden$selectors$nth_of_type.cljs$lang$applyTo = (function (arglist__31440){
var args__31291__auto__ = cljs.core.seq(arglist__31440);
return mranderson048$garden$v1v3v3$garden$selectors$nth_of_type__delegate(args__31291__auto__);
});
mranderson048$garden$v1v3v3$garden$selectors$nth_of_type.cljs$core$IFn$_invoke$arity$variadic = mranderson048$garden$v1v3v3$garden$selectors$nth_of_type__delegate;
return mranderson048$garden$v1v3v3$garden$selectors$nth_of_type;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
/**
 * CSS :nth-last-of-type pseudo class selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.nth_last_of_type = cljs.core.with_meta((function() { 
var mranderson048$garden$v1v3v3$garden$selectors$nth_last_of_type__delegate = function (args__31291__auto__){
var v__31292__auto__ = cljs.core.apply.call(null,(function (x){
return mranderson048.garden.v1v3v3.garden.selectors.nth_x.call(null,x);
}),args__31291__auto__);
var v__31292__auto____$1 = ((mranderson048.garden.v1v3v3.garden.selectors.selector_QMARK_.call(null,v__31292__auto__))?mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,v__31292__auto__):v__31292__auto__);
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,[":","nth-last-of-type","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__31292__auto____$1),")"].join(''));
};
var mranderson048$garden$v1v3v3$garden$selectors$nth_last_of_type = function (var_args){
var args__31291__auto__ = null;
if (arguments.length > 0) {
var G__31441__i = 0, G__31441__a = new Array(arguments.length -  0);
while (G__31441__i < G__31441__a.length) {G__31441__a[G__31441__i] = arguments[G__31441__i + 0]; ++G__31441__i;}
  args__31291__auto__ = new cljs.core.IndexedSeq(G__31441__a,0,null);
} 
return mranderson048$garden$v1v3v3$garden$selectors$nth_last_of_type__delegate.call(this,args__31291__auto__);};
mranderson048$garden$v1v3v3$garden$selectors$nth_last_of_type.cljs$lang$maxFixedArity = 0;
mranderson048$garden$v1v3v3$garden$selectors$nth_last_of_type.cljs$lang$applyTo = (function (arglist__31442){
var args__31291__auto__ = cljs.core.seq(arglist__31442);
return mranderson048$garden$v1v3v3$garden$selectors$nth_last_of_type__delegate(args__31291__auto__);
});
mranderson048$garden$v1v3v3$garden$selectors$nth_last_of_type.cljs$core$IFn$_invoke$arity$variadic = mranderson048$garden$v1v3v3$garden$selectors$nth_last_of_type__delegate;
return mranderson048$garden$v1v3v3$garden$selectors$nth_last_of_type;
})()
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rettag","rettag",-602973235),null], null));
/**
 * CSS ::after pseudo element selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.after = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"::after");
/**
 * CSS ::before pseudo element selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.before = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"::before");
/**
 * CSS ::first-letter pseudo element selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.first_letter = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"::first-letter");
/**
 * CSS ::first-line pseudo element selector.
 */
mranderson048.garden.v1v3v3.garden.selectors.first_line = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"::first-line");
mranderson048.garden.v1v3v3.garden.selectors.attr = (function mranderson048$garden$v1v3v3$garden$selectors$attr(var_args){
var G__31444 = arguments.length;
switch (G__31444) {
case 1:
return mranderson048.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return mranderson048.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$1 = (function (attr_name){
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,["[",cljs.core.name.call(null,attr_name),"]"].join(''));
});

mranderson048.garden.v1v3v3.garden.selectors.attr.cljs$core$IFn$_invoke$arity$3 = (function (attr_name,op,attr_value){
var v = cljs.core.name.call(null,attr_value);
var v__$1 = (cljs.core.truth_(cljs.core.re_matches.call(null,/\"(\\|[^\"])*\"|'(\\|[^\'])*'/,v))?v:cljs.core.pr_str.call(null,v));
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,["[",cljs.core.name.call(null,attr_name),cljs.core.name.call(null,op),v__$1,"]"].join(''));
});

mranderson048.garden.v1v3v3.garden.selectors.attr.cljs$lang$maxFixedArity = 3;

mranderson048.garden.v1v3v3.garden.selectors.attr_EQ_ = (function mranderson048$garden$v1v3v3$garden$selectors$attr_EQ_(attr_name,attr_value){
return mranderson048.garden.v1v3v3.garden.selectors.attr.call(null,attr_name,"=",attr_value);
});
mranderson048.garden.v1v3v3.garden.selectors.attr_contains = (function mranderson048$garden$v1v3v3$garden$selectors$attr_contains(attr_name,attr_value){
return mranderson048.garden.v1v3v3.garden.selectors.attr.call(null,attr_name,"~=",attr_value);
});
mranderson048.garden.v1v3v3.garden.selectors.attr_starts_with = (function mranderson048$garden$v1v3v3$garden$selectors$attr_starts_with(attr_name,attr_value){
return mranderson048.garden.v1v3v3.garden.selectors.attr.call(null,attr_name,"^=",attr_value);
});
mranderson048.garden.v1v3v3.garden.selectors.attr_starts_with_STAR_ = (function mranderson048$garden$v1v3v3$garden$selectors$attr_starts_with_STAR_(attr_name,attr_value){
return mranderson048.garden.v1v3v3.garden.selectors.attr.call(null,attr_name,"|=",attr_value);
});
mranderson048.garden.v1v3v3.garden.selectors.attr_ends_with = (function mranderson048$garden$v1v3v3$garden$selectors$attr_ends_with(attr_name,attr_value){
return mranderson048.garden.v1v3v3.garden.selectors.attr.call(null,attr_name,"$=",attr_value);
});
mranderson048.garden.v1v3v3.garden.selectors.attr_matches = (function mranderson048$garden$v1v3v3$garden$selectors$attr_matches(attr_name,attr_value){
return mranderson048.garden.v1v3v3.garden.selectors.attr.call(null,attr_name,"*=",attr_value);
});
/**
 * Descendant combinator.
 */
mranderson048.garden.v1v3v3.garden.selectors.descendant = (function mranderson048$garden$v1v3v3$garden$selectors$descendant(var_args){
var G__31450 = arguments.length;
switch (G__31450) {
case 2:
return mranderson048.garden.v1v3v3.garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___31452 = arguments.length;
var i__4731__auto___31453 = (0);
while(true){
if((i__4731__auto___31453 < len__4730__auto___31452)){
args_arr__4751__auto__.push((arguments[i__4731__auto___31453]));

var G__31454 = (i__4731__auto___31453 + (1));
i__4731__auto___31453 = G__31454;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return mranderson048.garden.v1v3v3.garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

mranderson048.garden.v1v3v3.garden.selectors.descendant.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b))].join(''));
});

mranderson048.garden.v1v3v3.garden.selectors.descendant.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,clojure.string.join.call(null," ",cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.selectors.css_selector,cljs.core.cons.call(null,mranderson048.garden.v1v3v3.garden.selectors.descendant.call(null,a,b),more))));
});

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.selectors.descendant.cljs$lang$applyTo = (function (seq31447){
var G__31448 = cljs.core.first.call(null,seq31447);
var seq31447__$1 = cljs.core.next.call(null,seq31447);
var G__31449 = cljs.core.first.call(null,seq31447__$1);
var seq31447__$2 = cljs.core.next.call(null,seq31447__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31448,G__31449,seq31447__$2);
});

mranderson048.garden.v1v3v3.garden.selectors.descendant.cljs$lang$maxFixedArity = (2);

/**
 * Adjacent sibling combinator.
 */
mranderson048.garden.v1v3v3.garden.selectors._PLUS_ = (function mranderson048$garden$v1v3v3$garden$selectors$_PLUS_(a,b){
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a))," + ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b))].join(''));
});
/**
 * General sibling combinator.
 */
mranderson048.garden.v1v3v3.garden.selectors._ = (function mranderson048$garden$v1v3v3$garden$selectors$_(a,b){
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a))," ~ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b))].join(''));
});
/**
 * Child combinator.
 */
mranderson048.garden.v1v3v3.garden.selectors._GT_ = (function mranderson048$garden$v1v3v3$garden$selectors$_GT_(var_args){
var G__31459 = arguments.length;
switch (G__31459) {
case 1:
return mranderson048.garden.v1v3v3.garden.selectors._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.garden.v1v3v3.garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___31461 = arguments.length;
var i__4731__auto___31462 = (0);
while(true){
if((i__4731__auto___31462 < len__4730__auto___31461)){
args_arr__4751__auto__.push((arguments[i__4731__auto___31462]));

var G__31463 = (i__4731__auto___31462 + (1));
i__4731__auto___31462 = G__31463;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return mranderson048.garden.v1v3v3.garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

mranderson048.garden.v1v3v3.garden.selectors._GT_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,a);
});

mranderson048.garden.v1v3v3.garden.selectors._GT_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,a))," > ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,b))].join(''));
});

mranderson048.garden.v1v3v3.garden.selectors._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,clojure.string.join.call(null," > ",cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.selectors.css_selector,cljs.core.cons.call(null,mranderson048.garden.v1v3v3.garden.selectors._GT_.call(null,a,b),more))));
});

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.selectors._GT_.cljs$lang$applyTo = (function (seq31456){
var G__31457 = cljs.core.first.call(null,seq31456);
var seq31456__$1 = cljs.core.next.call(null,seq31456);
var G__31458 = cljs.core.first.call(null,seq31456__$1);
var seq31456__$2 = cljs.core.next.call(null,seq31456__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31457,G__31458,seq31456__$2);
});

mranderson048.garden.v1v3v3.garden.selectors._GT_.cljs$lang$maxFixedArity = (2);

/**
 * Parent selector.
 */
mranderson048.garden.v1v3v3.garden.selectors._AMPERSAND_ = mranderson048.garden.v1v3v3.garden.selectors.selector.call(null,"&");
mranderson048.garden.v1v3v3.garden.selectors.lex_specificity = (function mranderson048$garden$v1v3v3$garden$selectors$lex_specificity(s){
var id_selector_re = /^\#[a-zA-Z][\w-]*/;
var class_selector_re = /^\.[a-zA-Z][\w-]*/;
var attribute_selector_re = /^\[[^\]]*\]/;
var type_selector_re = /^[a-zA-Z][\w-]/;
var pseudo_class_re = /^:[a-zA-Z][\w-]*(?:\([^\)]+\))?/;
var pseudo_element_re = /^::[a-zA-Z][\w-]*/;
return cljs.core.some.call(null,((function (id_selector_re,class_selector_re,attribute_selector_re,type_selector_re,pseudo_class_re,pseudo_element_re){
return (function (p__31464){
var vec__31465 = p__31464;
var re = cljs.core.nth.call(null,vec__31465,(0),null);
var k = cljs.core.nth.call(null,vec__31465,(1),null);
var temp__5718__auto__ = cljs.core.re_find.call(null,re,s);
if(cljs.core.truth_(temp__5718__auto__)){
var m = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,k], null);
} else {
return null;
}
});})(id_selector_re,class_selector_re,attribute_selector_re,type_selector_re,pseudo_class_re,pseudo_element_re))
,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_selector_re,new cljs.core.Keyword(null,"a","a",-2123407586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector_re,new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attribute_selector_re,new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pseudo_class_re,new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_selector_re,new cljs.core.Keyword(null,"c","c",-1763192079)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pseudo_element_re,new cljs.core.Keyword(null,"c","c",-1763192079)], null)], null));
});
mranderson048.garden.v1v3v3.garden.selectors.specificity_STAR_ = (function mranderson048$garden$v1v3v3$garden$selectors$specificity_STAR_(selector){
var s = mranderson048.garden.v1v3v3.garden.selectors.css_selector.call(null,selector);
var score = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(0),new cljs.core.Keyword(null,"b","b",1482224470),(0),new cljs.core.Keyword(null,"c","c",-1763192079),(0)], null);
var s__$1 = s;
var score__$1 = score;
while(true){
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return score__$1;
} else {
var temp__5718__auto__ = mranderson048.garden.v1v3v3.garden.selectors.lex_specificity.call(null,s__$1);
if(cljs.core.truth_(temp__5718__auto__)){
var vec__31474 = temp__5718__auto__;
var m = cljs.core.nth.call(null,vec__31474,(0),null);
var k = cljs.core.nth.call(null,vec__31474,(1),null);
var temp__5718__auto____$1 = cljs.core.re_find.call(null,/^:not\(([^\)]*)\)/,m);
if(cljs.core.truth_(temp__5718__auto____$1)){
var vec__31477 = temp__5718__auto____$1;
var _ = cljs.core.nth.call(null,vec__31477,(0),null);
var inner = cljs.core.nth.call(null,vec__31477,(1),null);
var G__31480 = cljs.core.subs.call(null,s__$1,cljs.core.count.call(null,m));
var G__31481 = cljs.core.merge_with.call(null,cljs.core._PLUS_,score__$1,mranderson048.garden.v1v3v3.garden.selectors.specificity_STAR_.call(null,inner));
s__$1 = G__31480;
score__$1 = G__31481;
continue;
} else {
var G__31482 = cljs.core.subs.call(null,s__$1,cljs.core.count.call(null,m));
var G__31483 = cljs.core.update_in.call(null,score__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.inc);
s__$1 = G__31482;
score__$1 = G__31483;
continue;
}
} else {
var G__31484 = cljs.core.subs.call(null,s__$1,(1));
var G__31485 = score__$1;
s__$1 = G__31484;
score__$1 = G__31485;
continue;
}
}
break;
}
});
/**
 * Calculate a CSS3 selector's specificity.
 *   
 *   Example:
 * 
 *  (specificity "#s12:not(FOO)")
 *  ;; => 101
 *  (specificity (a hover))
 *  ;; => 10
 *   
 */
mranderson048.garden.v1v3v3.garden.selectors.specificity = (function mranderson048$garden$v1v3v3$garden$selectors$specificity(selector){
if((((!((selector == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === selector.mranderson048$garden$v1v3v3$garden$selectors$ICSSSelector$))))?true:(((!selector.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,mranderson048.garden.v1v3v3.garden.selectors.ICSSSelector,selector):false)):cljs.core.native_satisfies_QMARK_.call(null,mranderson048.garden.v1v3v3.garden.selectors.ICSSSelector,selector))){
} else {
throw (new Error("Assert failed: (satisfies? ICSSSelector selector)"));
}

var map__31487 = mranderson048.garden.v1v3v3.garden.selectors.specificity_STAR_.call(null,selector);
var map__31487__$1 = (((((!((map__31487 == null))))?(((((map__31487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31487):map__31487);
var a = cljs.core.get.call(null,map__31487__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.call(null,map__31487__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.call(null,map__31487__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var sv = clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(a),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''),/^0*/,"");
if(cljs.core.empty_QMARK_.call(null,sv)){
return (0);
} else {
return parseInt(sv);
}
});

//# sourceMappingURL=selectors.js.map
