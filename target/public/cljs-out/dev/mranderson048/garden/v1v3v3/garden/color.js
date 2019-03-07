// Compiled by ClojureScript 1.10.520 {}
goog.provide('mranderson048.garden.v1v3v3.garden.color');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson048.garden.v1v3v3.garden.util');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
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
mranderson048.garden.v1v3v3.garden.color.CSSColor = (function (red,green,blue,hue,saturation,lightness,alpha,__meta,__extmap,__hash){
this.red = red;
this.green = green;
this.blue = blue;
this.hue = hue;
this.saturation = saturation;
this.lightness = lightness;
this.alpha = alpha;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k31082,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__31087 = k31082;
var G__31087__$1 = (((G__31087 instanceof cljs.core.Keyword))?G__31087.fqn:null);
switch (G__31087__$1) {
case "red":
return self__.red;

break;
case "green":
return self__.green;

break;
case "blue":
return self__.blue;

break;
case "hue":
return self__.hue;

break;
case "saturation":
return self__.saturation;

break;
case "lightness":
return self__.lightness;

break;
case "alpha":
return self__.alpha;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k31082,else__4388__auto__);

}
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__31088){
var vec__31089 = p__31088;
var k__4408__auto__ = cljs.core.nth.call(null,vec__31089,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__31089,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#mranderson048.garden.v1v3v3.garden.color.CSSColor{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"red","red",-969428204),self__.red],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"green","green",-945526839),self__.green],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha],null))], null),self__.__extmap));
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31081){
var self__ = this;
var G__31081__$1 = this;
return (new cljs.core.RecordIter((0),G__31081__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-94015427 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31083,other31084){
var self__ = this;
var this31083__$1 = this;
return (((!((other31084 == null)))) && ((this31083__$1.constructor === other31084.constructor)) && (cljs.core._EQ_.call(null,this31083__$1.red,other31084.red)) && (cljs.core._EQ_.call(null,this31083__$1.green,other31084.green)) && (cljs.core._EQ_.call(null,this31083__$1.blue,other31084.blue)) && (cljs.core._EQ_.call(null,this31083__$1.hue,other31084.hue)) && (cljs.core._EQ_.call(null,this31083__$1.saturation,other31084.saturation)) && (cljs.core._EQ_.call(null,this31083__$1.lightness,other31084.lightness)) && (cljs.core._EQ_.call(null,this31083__$1.alpha,other31084.alpha)) && (cljs.core._EQ_.call(null,this31083__$1.__extmap,other31084.__extmap)));
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__31081){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__31092 = cljs.core.keyword_identical_QMARK_;
var expr__31093 = k__4393__auto__;
if(cljs.core.truth_(pred__31092.call(null,new cljs.core.Keyword(null,"red","red",-969428204),expr__31093))){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(G__31081,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31092.call(null,new cljs.core.Keyword(null,"green","green",-945526839),expr__31093))){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,G__31081,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31092.call(null,new cljs.core.Keyword(null,"blue","blue",-622100620),expr__31093))){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,G__31081,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31092.call(null,new cljs.core.Keyword(null,"hue","hue",-508078848),expr__31093))){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,G__31081,self__.saturation,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31092.call(null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),expr__31093))){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,G__31081,self__.lightness,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31092.call(null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),expr__31093))){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,G__31081,self__.alpha,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__31092.call(null,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),expr__31093))){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,G__31081,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__31081),null));
}
}
}
}
}
}
}
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"red","red",-969428204),self__.red,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"green","green",-945526839),self__.green,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"blue","blue",-622100620),self__.blue,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hue","hue",-508078848),self__.hue,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"saturation","saturation",-14247929),self__.saturation,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"lightness","lightness",-2040901930),self__.lightness,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"alpha","alpha",-1574982441),self__.alpha,null))], null),self__.__extmap));
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__31081){
var self__ = this;
var this__4384__auto____$1 = this;
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(self__.red,self__.green,self__.blue,self__.hue,self__.saturation,self__.lightness,self__.alpha,G__31081,self__.__extmap,self__.__hash));
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.call = (function() {
var G__31097 = null;
var G__31097__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$;
});
var G__31097__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.call(null,this$,k);
});
var G__31097__3 = (function (self__,k,missing){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core.get.call(null,this$,k,missing);
});
G__31097 = function(self__,k,missing){
switch(arguments.length){
case 1:
return G__31097__1.call(this,self__);
case 2:
return G__31097__2.call(this,self__,k);
case 3:
return G__31097__3.call(this,self__,k,missing);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__31097.cljs$core$IFn$_invoke$arity$1 = G__31097__1;
G__31097.cljs$core$IFn$_invoke$arity$2 = G__31097__2;
G__31097.cljs$core$IFn$_invoke$arity$3 = G__31097__3;
return G__31097;
})()
;

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.apply = (function (self__,args31086){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args31086)));
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this$ = this;
return this$;
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core.get.call(null,this$,k);
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,missing){
var self__ = this;
var this$ = this;
return cljs.core.get.call(null,this$,k,missing);
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"red","red",671103323,null),new cljs.core.Symbol(null,"green","green",695004688,null),new cljs.core.Symbol(null,"blue","blue",1018430907,null),new cljs.core.Symbol(null,"hue","hue",1132452679,null),new cljs.core.Symbol(null,"saturation","saturation",1626283598,null),new cljs.core.Symbol(null,"lightness","lightness",-400370403,null),new cljs.core.Symbol(null,"alpha","alpha",65549086,null)], null);
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.cljs$lang$type = true;

mranderson048.garden.v1v3v3.garden.color.CSSColor.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"mranderson048.garden.v1v3v3.garden.color/CSSColor",null,(1),null));
});

mranderson048.garden.v1v3v3.garden.color.CSSColor.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"mranderson048.garden.v1v3v3.garden.color/CSSColor");
});

/**
 * Positional factory function for mranderson048.garden.v1v3v3.garden.color/CSSColor.
 */
mranderson048.garden.v1v3v3.garden.color.__GT_CSSColor = (function mranderson048$garden$v1v3v3$garden$color$__GT_CSSColor(red,green,blue,hue,saturation,lightness,alpha){
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(red,green,blue,hue,saturation,lightness,alpha,null,null,null));
});

/**
 * Factory function for mranderson048.garden.v1v3v3.garden.color/CSSColor, taking a map of keywords to field values.
 */
mranderson048.garden.v1v3v3.garden.color.map__GT_CSSColor = (function mranderson048$garden$v1v3v3$garden$color$map__GT_CSSColor(G__31085){
var extmap__4424__auto__ = (function (){var G__31095 = cljs.core.dissoc.call(null,G__31085,new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"lightness","lightness",-2040901930),new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
if(cljs.core.record_QMARK_.call(null,G__31085)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__31095);
} else {
return G__31095;
}
})();
return (new mranderson048.garden.v1v3v3.garden.color.CSSColor(new cljs.core.Keyword(null,"red","red",-969428204).cljs$core$IFn$_invoke$arity$1(G__31085),new cljs.core.Keyword(null,"green","green",-945526839).cljs$core$IFn$_invoke$arity$1(G__31085),new cljs.core.Keyword(null,"blue","blue",-622100620).cljs$core$IFn$_invoke$arity$1(G__31085),new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(G__31085),new cljs.core.Keyword(null,"saturation","saturation",-14247929).cljs$core$IFn$_invoke$arity$1(G__31085),new cljs.core.Keyword(null,"lightness","lightness",-2040901930).cljs$core$IFn$_invoke$arity$1(G__31085),new cljs.core.Keyword(null,"alpha","alpha",-1574982441).cljs$core$IFn$_invoke$arity$1(G__31085),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

mranderson048.garden.v1v3v3.garden.color.as_color = mranderson048.garden.v1v3v3.garden.color.map__GT_CSSColor;
/**
 * Create an RGB color.
 */
mranderson048.garden.v1v3v3.garden.color.rgb = (function mranderson048$garden$v1v3v3$garden$color$rgb(var_args){
var G__31100 = arguments.length;
switch (G__31100) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$1 = (function (p__31101){
var vec__31102 = p__31101;
var r = cljs.core.nth.call(null,vec__31102,(0),null);
var g = cljs.core.nth.call(null,vec__31102,(1),null);
var b = cljs.core.nth.call(null,vec__31102,(2),null);
var vs = vec__31102;
if(cljs.core.every_QMARK_.call(null,((function (vec__31102,r,g,b,vs){
return (function (p1__31098_SHARP_){
return mranderson048.garden.v1v3v3.garden.util.between_QMARK_.call(null,p1__31098_SHARP_,(0),(255));
});})(vec__31102,r,g,b,vs))
,vs)){
return mranderson048.garden.v1v3v3.garden.color.as_color.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),r,new cljs.core.Keyword(null,"green","green",-945526839),g,new cljs.core.Keyword(null,"blue","blue",-622100620),b], null));
} else {
throw cljs.core.ex_info.call(null,"RGB values must be between 0 and 255",cljs.core.PersistentArrayMap.EMPTY);
}
});

mranderson048.garden.v1v3v3.garden.color.rgb.cljs$core$IFn$_invoke$arity$3 = (function (r,g,b){
return mranderson048.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});

mranderson048.garden.v1v3v3.garden.color.rgb.cljs$lang$maxFixedArity = 3;

/**
 * Create an RGBA color.
 */
mranderson048.garden.v1v3v3.garden.color.rgba = (function mranderson048$garden$v1v3v3$garden$color$rgba(var_args){
var G__31107 = arguments.length;
switch (G__31107) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return mranderson048.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$1 = (function (p__31108){
var vec__31109 = p__31108;
var r = cljs.core.nth.call(null,vec__31109,(0),null);
var g = cljs.core.nth.call(null,vec__31109,(1),null);
var b = cljs.core.nth.call(null,vec__31109,(2),null);
var a = cljs.core.nth.call(null,vec__31109,(3),null);
if(mranderson048.garden.v1v3v3.garden.util.between_QMARK_.call(null,a,(0),(1))){
return mranderson048.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.assoc.call(null,mranderson048.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a));
} else {
throw cljs.core.ex_info.call(null,"Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});

mranderson048.garden.v1v3v3.garden.color.rgba.cljs$core$IFn$_invoke$arity$4 = (function (r,g,b,a){
return mranderson048.garden.v1v3v3.garden.color.rgba.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b,a], null));
});

mranderson048.garden.v1v3v3.garden.color.rgba.cljs$lang$maxFixedArity = 4;

/**
 * Create an HSL color.
 */
mranderson048.garden.v1v3v3.garden.color.hsl = (function mranderson048$garden$v1v3v3$garden$color$hsl(var_args){
var G__31115 = arguments.length;
switch (G__31115) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$1 = (function (p__31116){
var vec__31117 = p__31116;
var h = cljs.core.nth.call(null,vec__31117,(0),null);
var s = cljs.core.nth.call(null,vec__31117,(1),null);
var l = cljs.core.nth.call(null,vec__31117,(2),null);
var vec__31120 = cljs.core.map.call(null,((function (vec__31117,h,s,l){
return (function (p1__31113_SHARP_){
return cljs.core.get.call(null,p1__31113_SHARP_,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),p1__31113_SHARP_);
});})(vec__31117,h,s,l))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
var h__$1 = cljs.core.nth.call(null,vec__31120,(0),null);
var s__$1 = cljs.core.nth.call(null,vec__31120,(1),null);
var l__$1 = cljs.core.nth.call(null,vec__31120,(2),null);
if(((mranderson048.garden.v1v3v3.garden.util.between_QMARK_.call(null,s__$1,(0),(100))) && (mranderson048.garden.v1v3v3.garden.util.between_QMARK_.call(null,l__$1,(0),(100))))){
return mranderson048.garden.v1v3v3.garden.color.as_color.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.mod.call(null,h__$1,(360)),new cljs.core.Keyword(null,"saturation","saturation",-14247929),s__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),l__$1], null));
} else {
throw cljs.core.ex_info.call(null,"Saturation and lightness must be between 0(%) and 100(%)",cljs.core.PersistentArrayMap.EMPTY);
}
});

mranderson048.garden.v1v3v3.garden.color.hsl.cljs$core$IFn$_invoke$arity$3 = (function (h,s,l){
return mranderson048.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

mranderson048.garden.v1v3v3.garden.color.hsl.cljs$lang$maxFixedArity = 3;

/**
 * Create an HSLA color.
 */
mranderson048.garden.v1v3v3.garden.color.hsla = (function mranderson048$garden$v1v3v3$garden$color$hsla(var_args){
var G__31125 = arguments.length;
switch (G__31125) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return mranderson048.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$1 = (function (p__31126){
var vec__31127 = p__31126;
var h = cljs.core.nth.call(null,vec__31127,(0),null);
var s = cljs.core.nth.call(null,vec__31127,(1),null);
var l = cljs.core.nth.call(null,vec__31127,(2),null);
var a = cljs.core.nth.call(null,vec__31127,(3),null);
if(mranderson048.garden.v1v3v3.garden.util.between_QMARK_.call(null,a,(0),(1))){
return mranderson048.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.assoc.call(null,mranderson048.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null)),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),a));
} else {
throw cljs.core.ex_info.call(null,"Alpha value must be between 0 and 1",cljs.core.PersistentArrayMap.EMPTY);
}
});

mranderson048.garden.v1v3v3.garden.color.hsla.cljs$core$IFn$_invoke$arity$4 = (function (h,s,l,a){
return mranderson048.garden.v1v3v3.garden.color.hsla.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l,a], null));
});

mranderson048.garden.v1v3v3.garden.color.hsla.cljs$lang$maxFixedArity = 4;

/**
 * Return true if color is an RGB color.
 */
mranderson048.garden.v1v3v3.garden.color.rgb_QMARK_ = (function mranderson048$garden$v1v3v3$garden$color$rgb_QMARK_(color){
return ((cljs.core.map_QMARK_.call(null,color)) && (cljs.core.every_QMARK_.call(null,color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"green","green",-945526839),null,new cljs.core.Keyword(null,"red","red",-969428204),null,new cljs.core.Keyword(null,"blue","blue",-622100620),null], null), null))));
});
/**
 * Return true if color is an HSL color.
 */
mranderson048.garden.v1v3v3.garden.color.hsl_QMARK_ = (function mranderson048$garden$v1v3v3$garden$color$hsl_QMARK_(color){
return ((cljs.core.map_QMARK_.call(null,color)) && (cljs.core.every_QMARK_.call(null,color,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hue","hue",-508078848),null,new cljs.core.Keyword(null,"saturation","saturation",-14247929),null,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),null], null), null))));
});
/**
 * Return true if x is a color.
 */
mranderson048.garden.v1v3v3.garden.color.color_QMARK_ = (function mranderson048$garden$v1v3v3$garden$color$color_QMARK_(x){
return ((mranderson048.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,x)) || (mranderson048.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,x)));
});
/**
 * Regular expression for matching a hexadecimal color.
 *           Matches hexadecimal colors of length three or six possibly
 *           lead by a "#". The color portion is captured.
 */
mranderson048.garden.v1v3v3.garden.color.hex_re = /#?([\da-fA-F]{6}|[\da-fA-F]{3})/;
/**
 * Returns true if x is a hexadecimal color.
 */
mranderson048.garden.v1v3v3.garden.color.hex_QMARK_ = (function mranderson048$garden$v1v3v3$garden$color$hex_QMARK_(x){
return cljs.core.boolean$.call(null,(function (){var and__4120__auto__ = typeof x === 'string';
if(and__4120__auto__){
return cljs.core.re_matches.call(null,mranderson048.garden.v1v3v3.garden.color.hex_re,x);
} else {
return and__4120__auto__;
}
})());
});
/**
 * Convert a hexadecimal color to an RGB color map.
 */
mranderson048.garden.v1v3v3.garden.color.hex__GT_rgb = (function mranderson048$garden$v1v3v3$garden$color$hex__GT_rgb(s){
var temp__5720__auto__ = cljs.core.re_matches.call(null,mranderson048.garden.v1v3v3.garden.color.hex_re,s);
if(cljs.core.truth_(temp__5720__auto__)){
var vec__31133 = temp__5720__auto__;
var _ = cljs.core.nth.call(null,vec__31133,(0),null);
var hex = cljs.core.nth.call(null,vec__31133,(1),null);
var hex__$1 = ((cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,hex)))?cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,((function (vec__31133,_,hex,temp__5720__auto__){
return (function (p1__31131_SHARP_){
return (new cljs.core.List(null,p1__31131_SHARP_,(new cljs.core.List(null,p1__31131_SHARP_,null,(1),null)),(2),null));
});})(vec__31133,_,hex,temp__5720__auto__))
,hex)):hex);
return mranderson048.garden.v1v3v3.garden.color.rgb.call(null,cljs.core.map.call(null,((function (hex__$1,vec__31133,_,hex,temp__5720__auto__){
return (function (p1__31132_SHARP_){
return mranderson048.garden.v1v3v3.garden.util.string__GT_int.call(null,p1__31132_SHARP_,(16));
});})(hex__$1,vec__31133,_,hex,temp__5720__auto__))
,cljs.core.re_seq.call(null,/[\da-fA-F]{2}/,hex__$1)));
} else {
return null;
}
});
/**
 * Convert an RGB color map to a hexadecimal color.
 */
mranderson048.garden.v1v3v3.garden.color.rgb__GT_hex = (function mranderson048$garden$v1v3v3$garden$color$rgb__GT_hex(p__31136){
var map__31137 = p__31136;
var map__31137__$1 = (((((!((map__31137 == null))))?(((((map__31137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31137):map__31137);
var r = cljs.core.get.call(null,map__31137__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var g = cljs.core.get.call(null,map__31137__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var b = cljs.core.get.call(null,map__31137__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
var hex_part = ((function (map__31137,map__31137__$1,r,g,b){
return (function mranderson048$garden$v1v3v3$garden$color$rgb__GT_hex_$_hex_part(v){
return clojure.string.replace.call(null,mranderson048.garden.v1v3v3.garden.util.format.call(null,"%2s",mranderson048.garden.v1v3v3.garden.util.int__GT_string.call(null,v,(16)))," ","0");
});})(map__31137,map__31137__$1,r,g,b))
;
return cljs.core.apply.call(null,cljs.core.str,"#",cljs.core.map.call(null,hex_part,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null)));
});
mranderson048.garden.v1v3v3.garden.color.trim_one = (function mranderson048$garden$v1v3v3$garden$color$trim_one(x){
if(((1) < x)){
return (1);
} else {
return x;
}
});
/**
 * Convert an RGB color map to an HSL color map.
 */
mranderson048.garden.v1v3v3.garden.color.rgb__GT_hsl = (function mranderson048$garden$v1v3v3$garden$color$rgb__GT_hsl(p__31140){
var map__31141 = p__31140;
var map__31141__$1 = (((((!((map__31141 == null))))?(((((map__31141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31141):map__31141);
var color = map__31141__$1;
var red = cljs.core.get.call(null,map__31141__$1,new cljs.core.Keyword(null,"red","red",-969428204));
var green = cljs.core.get.call(null,map__31141__$1,new cljs.core.Keyword(null,"green","green",-945526839));
var blue = cljs.core.get.call(null,map__31141__$1,new cljs.core.Keyword(null,"blue","blue",-622100620));
if(mranderson048.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,color)){
return color;
} else {
var vec__31143 = cljs.core.map.call(null,((function (map__31141,map__31141__$1,color,red,green,blue){
return (function (p1__31139_SHARP_){
return (p1__31139_SHARP_ / (255));
});})(map__31141,map__31141__$1,color,red,green,blue))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [red,green,blue], null));
var r = cljs.core.nth.call(null,vec__31143,(0),null);
var g = cljs.core.nth.call(null,vec__31143,(1),null);
var b = cljs.core.nth.call(null,vec__31143,(2),null);
var mx = (function (){var x__4219__auto__ = (function (){var x__4219__auto__ = r;
var y__4220__auto__ = g;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var y__4220__auto__ = b;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
var mn = (function (){var x__4222__auto__ = (function (){var x__4222__auto__ = r;
var y__4223__auto__ = g;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var y__4223__auto__ = b;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var d = (mx - mn);
var h = (function (){var pred__31146 = cljs.core._EQ_;
var expr__31147 = mx;
if(cljs.core.truth_(pred__31146.call(null,mn,expr__31147))){
return (0);
} else {
if(cljs.core.truth_(pred__31146.call(null,r,expr__31147))){
return ((60) * ((g - b) / d));
} else {
if(cljs.core.truth_(pred__31146.call(null,g,expr__31147))){
return (((60) * ((b - r) / d)) + (120));
} else {
if(cljs.core.truth_(pred__31146.call(null,b,expr__31147))){
return (((60) * ((r - g) / d)) + (240));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__31147)].join('')));
}
}
}
}
})();
var l = mranderson048.garden.v1v3v3.garden.color.trim_one.call(null,((mx + mn) / (2)));
var s = mranderson048.garden.v1v3v3.garden.color.trim_one.call(null,((cljs.core._EQ_.call(null,mx,mn))?(0):(((l < 0.5))?(d / ((2) * l)):(d / ((2) - ((2) * l)))
)));
return mranderson048.garden.v1v3v3.garden.color.hsl.call(null,cljs.core.mod.call(null,h,(360)),((100) * s),((100) * l));
}
});
/**
 * Convert an HSL color map to an RGB color map.
 */
mranderson048.garden.v1v3v3.garden.color.hsl__GT_rgb = (function mranderson048$garden$v1v3v3$garden$color$hsl__GT_rgb(p__31150){
var map__31151 = p__31150;
var map__31151__$1 = (((((!((map__31151 == null))))?(((((map__31151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31151):map__31151);
var color = map__31151__$1;
var hue = cljs.core.get.call(null,map__31151__$1,new cljs.core.Keyword(null,"hue","hue",-508078848));
var saturation = cljs.core.get.call(null,map__31151__$1,new cljs.core.Keyword(null,"saturation","saturation",-14247929));
var lightness = cljs.core.get.call(null,map__31151__$1,new cljs.core.Keyword(null,"lightness","lightness",-2040901930));
if(mranderson048.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,color)){
return color;
} else {
var h = (hue / 360.0);
var s = (saturation / 100.0);
var l = (lightness / 100.0);
var m2 = (((l <= 0.5))?(l * (s + (1))):((l + s) - (l * s)));
var m1 = (((2) * l) - m2);
var vec__31153 = cljs.core.map.call(null,((function (h,s,l,m2,m1,map__31151,map__31151__$1,color,hue,saturation,lightness){
return (function (p1__31149_SHARP_){
return Math.round((p1__31149_SHARP_ * (255)));
});})(h,s,l,m2,m1,map__31151,map__31151__$1,color,hue,saturation,lightness))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb.call(null,m1,m2,(h + (1.0 / (3)))),mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb.call(null,m1,m2,h),mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb.call(null,m1,m2,(h - (1.0 / (3))))], null));
var r = cljs.core.nth.call(null,vec__31153,(0),null);
var g = cljs.core.nth.call(null,vec__31153,(1),null);
var b = cljs.core.nth.call(null,vec__31153,(2),null);
return mranderson048.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
}
});
mranderson048.garden.v1v3v3.garden.color.hue__GT_rgb = (function mranderson048$garden$v1v3v3$garden$color$hue__GT_rgb(m1,m2,h){
var h__$1 = (((h < (0)))?(h + (1)):(((h > (1)))?(h - (1)):h
));
if((((6) * h__$1) < (1))){
return (m1 + (((m2 - m1) * h__$1) * (6)));
} else {
if((((2) * h__$1) < (1))){
return m2;
} else {
if((((3) * h__$1) < (2))){
return (m1 + (((m2 - m1) * ((2.0 / (3)) - h__$1)) * (6)));
} else {
return m1;

}
}
}
});
/**
 * Convert an HSL color map to a hexadecimal string.
 */
mranderson048.garden.v1v3v3.garden.color.hsl__GT_hex = (function mranderson048$garden$v1v3v3$garden$color$hsl__GT_hex(color){
return mranderson048.garden.v1v3v3.garden.color.rgb__GT_hex.call(null,mranderson048.garden.v1v3v3.garden.color.hsl__GT_rgb.call(null,color));
});
/**
 * Convert a hexadecimal color to an HSL color.
 */
mranderson048.garden.v1v3v3.garden.color.hex__GT_hsl = (function mranderson048$garden$v1v3v3$garden$color$hex__GT_hsl(color){
return mranderson048.garden.v1v3v3.garden.color.rgb__GT_hsl.call(null,mranderson048.garden.v1v3v3.garden.color.hex__GT_rgb.call(null,color));
});
mranderson048.garden.v1v3v3.garden.color.percent_clip = cljs.core.partial.call(null,mranderson048.garden.v1v3v3.garden.util.clip,(0),(100));
mranderson048.garden.v1v3v3.garden.color.rgb_clip = cljs.core.partial.call(null,mranderson048.garden.v1v3v3.garden.util.clip,(0),(255));
/**
 * Convert a color to a hexadecimal string.
 */
mranderson048.garden.v1v3v3.garden.color.as_hex = (function mranderson048$garden$v1v3v3$garden$color$as_hex(x){
if(mranderson048.garden.v1v3v3.garden.color.hex_QMARK_.call(null,x)){
return x;
} else {
if(mranderson048.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,x)){
return mranderson048.garden.v1v3v3.garden.color.rgb__GT_hex.call(null,x);
} else {
if(mranderson048.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,x)){
return mranderson048.garden.v1v3v3.garden.color.hsl__GT_hex.call(null,x);
} else {
throw cljs.core.ex_info.call(null,["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
});
/**
 * Convert a color to a RGB.
 */
mranderson048.garden.v1v3v3.garden.color.as_rgb = (function mranderson048$garden$v1v3v3$garden$color$as_rgb(x){
if(mranderson048.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,x)){
return x;
} else {
if(mranderson048.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,x)){
return mranderson048.garden.v1v3v3.garden.color.hsl__GT_rgb.call(null,x);
} else {
if(mranderson048.garden.v1v3v3.garden.color.hex_QMARK_.call(null,x)){
return mranderson048.garden.v1v3v3.garden.color.hex__GT_rgb.call(null,x);
} else {
if(typeof x === 'number'){
return mranderson048.garden.v1v3v3.garden.color.rgb.call(null,cljs.core.map.call(null,mranderson048.garden.v1v3v3.garden.color.rgb_clip,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x,x], null)));
} else {
throw cljs.core.ex_info.call(null,["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
/**
 * Convert a color to a HSL.
 */
mranderson048.garden.v1v3v3.garden.color.as_hsl = (function mranderson048$garden$v1v3v3$garden$color$as_hsl(x){
if(mranderson048.garden.v1v3v3.garden.color.hsl_QMARK_.call(null,x)){
return x;
} else {
if(mranderson048.garden.v1v3v3.garden.color.rgb_QMARK_.call(null,x)){
return mranderson048.garden.v1v3v3.garden.color.rgb__GT_hsl.call(null,x);
} else {
if(mranderson048.garden.v1v3v3.garden.color.hex_QMARK_.call(null,x)){
return mranderson048.garden.v1v3v3.garden.color.hex__GT_hsl.call(null,x);
} else {
if(typeof x === 'number'){
return mranderson048.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,mranderson048.garden.v1v3v3.garden.color.percent_clip.call(null,x),mranderson048.garden.v1v3v3.garden.color.percent_clip.call(null,x)], null));
} else {
throw cljs.core.ex_info.call(null,["Can't convert ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)," to a color."].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
mranderson048.garden.v1v3v3.garden.color.restrict_rgb = (function mranderson048$garden$v1v3v3$garden$color$restrict_rgb(m){
return cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"blue","blue",-622100620)], null));
});
mranderson048.garden.v1v3v3.garden.color.make_color_operation = (function mranderson048$garden$v1v3v3$garden$color$make_color_operation(op){
return (function() {
var mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op = null;
var mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__1 = (function (a){
return a;
});
var mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__2 = (function (a,b){
var o = cljs.core.comp.call(null,mranderson048.garden.v1v3v3.garden.color.rgb_clip,op);
var a__$1 = mranderson048.garden.v1v3v3.garden.color.restrict_rgb.call(null,mranderson048.garden.v1v3v3.garden.color.as_rgb.call(null,a));
var b__$1 = mranderson048.garden.v1v3v3.garden.color.restrict_rgb.call(null,mranderson048.garden.v1v3v3.garden.color.as_rgb.call(null,b));
return mranderson048.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.merge_with.call(null,o,a__$1,b__$1));
});
var mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3 = (function() { 
var G__31156__delegate = function (a,b,more){
return cljs.core.reduce.call(null,mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op,mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op.call(null,a,b),more);
};
var G__31156 = function (a,b,var_args){
var more = null;
if (arguments.length > 2) {
var G__31157__i = 0, G__31157__a = new Array(arguments.length -  2);
while (G__31157__i < G__31157__a.length) {G__31157__a[G__31157__i] = arguments[G__31157__i + 2]; ++G__31157__i;}
  more = new cljs.core.IndexedSeq(G__31157__a,0,null);
} 
return G__31156__delegate.call(this,a,b,more);};
G__31156.cljs$lang$maxFixedArity = 2;
G__31156.cljs$lang$applyTo = (function (arglist__31158){
var a = cljs.core.first(arglist__31158);
arglist__31158 = cljs.core.next(arglist__31158);
var b = cljs.core.first(arglist__31158);
var more = cljs.core.rest(arglist__31158);
return G__31156__delegate(a,b,more);
});
G__31156.cljs$core$IFn$_invoke$arity$variadic = G__31156__delegate;
return G__31156;
})()
;
mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op = function(a,b,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__1.call(this,a);
case 2:
return mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__2.call(this,a,b);
default:
var G__31159 = null;
if (arguments.length > 2) {
var G__31160__i = 0, G__31160__a = new Array(arguments.length -  2);
while (G__31160__i < G__31160__a.length) {G__31160__a[G__31160__i] = arguments[G__31160__i + 2]; ++G__31160__i;}
G__31159 = new cljs.core.IndexedSeq(G__31160__a,0,null);
}
return mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic(a,b, G__31159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$lang$maxFixedArity = 2;
mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$lang$applyTo = mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3.cljs$lang$applyTo;
mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$1 = mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__1;
mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$2 = mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__2;
mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op.cljs$core$IFn$_invoke$arity$variadic = mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op__3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson048$garden$v1v3v3$garden$color$make_color_operation_$_color_op;
})()
});
/**
 * Add the RGB components of two or more colors.
 */
mranderson048.garden.v1v3v3.garden.color.color_PLUS_ = mranderson048.garden.v1v3v3.garden.color.make_color_operation.call(null,cljs.core._PLUS_);
/**
 * Subtract the RGB components of two or more colors.
 */
mranderson048.garden.v1v3v3.garden.color.color_ = mranderson048.garden.v1v3v3.garden.color.make_color_operation.call(null,cljs.core._);
/**
 * Multiply the RGB components of two or more colors.
 */
mranderson048.garden.v1v3v3.garden.color.color_STAR_ = mranderson048.garden.v1v3v3.garden.color.make_color_operation.call(null,cljs.core._STAR_);
/**
 * Multiply the RGB components of two or more colors.
 */
mranderson048.garden.v1v3v3.garden.color.color_div = mranderson048.garden.v1v3v3.garden.color.make_color_operation.call(null,cljs.core._SLASH_);
mranderson048.garden.v1v3v3.garden.color.update_color = (function mranderson048$garden$v1v3v3$garden$color$update_color(color,field,f,v){
var v__$1 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return v;
}
})();
return cljs.core.update_in.call(null,mranderson048.garden.v1v3v3.garden.color.as_hsl.call(null,color),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null),f,v__$1);
});
/**
 * Rotates the hue value of a given color by amount.
 */
mranderson048.garden.v1v3v3.garden.color.rotate_hue = (function mranderson048$garden$v1v3v3$garden$color$rotate_hue(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"hue","hue",-508078848),cljs.core.comp.call(null,(function (p1__31161_SHARP_){
return cljs.core.mod.call(null,p1__31161_SHARP_,(360));
}),cljs.core._PLUS_),amount);
});
/**
 * Increase the saturation value of a given color by amount.
 */
mranderson048.garden.v1v3v3.garden.color.saturate = (function mranderson048$garden$v1v3v3$garden$color$saturate(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.call(null,mranderson048.garden.v1v3v3.garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the saturation value of a given color by amount.
 */
mranderson048.garden.v1v3v3.garden.color.desaturate = (function mranderson048$garden$v1v3v3$garden$color$desaturate(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),cljs.core.comp.call(null,mranderson048.garden.v1v3v3.garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Increase the lightness value a given color by amount.
 */
mranderson048.garden.v1v3v3.garden.color.lighten = (function mranderson048$garden$v1v3v3$garden$color$lighten(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.call(null,mranderson048.garden.v1v3v3.garden.color.percent_clip,cljs.core._PLUS_),amount);
});
/**
 * Decrease the lightness value a given color by amount.
 */
mranderson048.garden.v1v3v3.garden.color.darken = (function mranderson048$garden$v1v3v3$garden$color$darken(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),cljs.core.comp.call(null,mranderson048.garden.v1v3v3.garden.color.percent_clip,cljs.core._),amount);
});
/**
 * Return the inversion of a color.
 */
mranderson048.garden.v1v3v3.garden.color.invert = (function mranderson048$garden$v1v3v3$garden$color$invert(color){
return mranderson048.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.merge_with.call(null,cljs.core._,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"red","red",-969428204),(255),new cljs.core.Keyword(null,"green","green",-945526839),(255),new cljs.core.Keyword(null,"blue","blue",-622100620),(255)], null),mranderson048.garden.v1v3v3.garden.color.as_rgb.call(null,color)));
});
/**
 * Mix two or more colors by averaging their RGB channels.
 */
mranderson048.garden.v1v3v3.garden.color.mix = (function mranderson048$garden$v1v3v3$garden$color$mix(var_args){
var G__31166 = arguments.length;
switch (G__31166) {
case 2:
return mranderson048.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___31168 = arguments.length;
var i__4731__auto___31169 = (0);
while(true){
if((i__4731__auto___31169 < len__4730__auto___31168)){
args_arr__4751__auto__.push((arguments[i__4731__auto___31169]));

var G__31170 = (i__4731__auto___31169 + (1));
i__4731__auto___31169 = G__31170;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return mranderson048.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

mranderson048.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$2 = (function (color_1,color_2){
var c1 = mranderson048.garden.v1v3v3.garden.color.restrict_rgb.call(null,mranderson048.garden.v1v3v3.garden.color.as_rgb.call(null,color_1));
var c2 = mranderson048.garden.v1v3v3.garden.color.restrict_rgb.call(null,mranderson048.garden.v1v3v3.garden.color.as_rgb.call(null,color_2));
return mranderson048.garden.v1v3v3.garden.color.as_color.call(null,cljs.core.merge_with.call(null,mranderson048.garden.v1v3v3.garden.util.average,c1,c2));
});

mranderson048.garden.v1v3v3.garden.color.mix.cljs$core$IFn$_invoke$arity$variadic = (function (color_1,color_2,more){
return cljs.core.reduce.call(null,mranderson048.garden.v1v3v3.garden.color.mix,mranderson048.garden.v1v3v3.garden.color.mix.call(null,color_1,color_2),more);
});

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.color.mix.cljs$lang$applyTo = (function (seq31163){
var G__31164 = cljs.core.first.call(null,seq31163);
var seq31163__$1 = cljs.core.next.call(null,seq31163);
var G__31165 = cljs.core.first.call(null,seq31163__$1);
var seq31163__$2 = cljs.core.next.call(null,seq31163__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31164,G__31165,seq31163__$2);
});

mranderson048.garden.v1v3v3.garden.color.mix.cljs$lang$maxFixedArity = (2);

/**
 * Return the complement of a color.
 */
mranderson048.garden.v1v3v3.garden.color.complement = (function mranderson048$garden$v1v3v3$garden$color$complement(color){
return mranderson048.garden.v1v3v3.garden.color.rotate_hue.call(null,color,(180));
});
mranderson048.garden.v1v3v3.garden.color.hue_rotations = (function mranderson048$garden$v1v3v3$garden$color$hue_rotations(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31173 = arguments.length;
var i__4731__auto___31174 = (0);
while(true){
if((i__4731__auto___31174 < len__4730__auto___31173)){
args__4736__auto__.push((arguments[i__4731__auto___31174]));

var G__31175 = (i__4731__auto___31174 + (1));
i__4731__auto___31174 = G__31175;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.garden.v1v3v3.garden.color.hue_rotations.cljs$core$IFn$_invoke$arity$variadic = (function (color,amounts){
return cljs.core.map.call(null,cljs.core.partial.call(null,mranderson048.garden.v1v3v3.garden.color.rotate_hue,color),amounts);
});

mranderson048.garden.v1v3v3.garden.color.hue_rotations.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.color.hue_rotations.cljs$lang$applyTo = (function (seq31171){
var G__31172 = cljs.core.first.call(null,seq31171);
var seq31171__$1 = cljs.core.next.call(null,seq31171);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31172,seq31171__$1);
});

/**
 * Given a color return a triple of colors which are 0, 30, and 60
 *   degrees clockwise from it. If a second falsy argument is passed the
 *   returned values will be in a counter-clockwise direction.
 */
mranderson048.garden.v1v3v3.garden.color.analogous = (function mranderson048$garden$v1v3v3$garden$color$analogous(var_args){
var G__31177 = arguments.length;
switch (G__31177) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$1 = (function (color){
return mranderson048.garden.v1v3v3.garden.color.analogous.call(null,color,true);
});

mranderson048.garden.v1v3v3.garden.color.analogous.cljs$core$IFn$_invoke$arity$2 = (function (color,clockwise_QMARK_){
var sign = (cljs.core.truth_(clockwise_QMARK_)?cljs.core._PLUS_:cljs.core._);
return mranderson048.garden.v1v3v3.garden.color.hue_rotations.call(null,color,(0),sign.call(null,(30)),sign.call(null,(60)));
});

mranderson048.garden.v1v3v3.garden.color.analogous.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a triple of colors which are equidistance apart
 *   on the color wheel.
 */
mranderson048.garden.v1v3v3.garden.color.triad = (function mranderson048$garden$v1v3v3$garden$color$triad(color){
return mranderson048.garden.v1v3v3.garden.color.hue_rotations.call(null,color,(0),(120),(240));
});
/**
 * Given a color return a triple of the color and the two colors on
 *   either side of it's complement.
 */
mranderson048.garden.v1v3v3.garden.color.split_complement = (function mranderson048$garden$v1v3v3$garden$color$split_complement(var_args){
var G__31180 = arguments.length;
switch (G__31180) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$1 = (function (color){
return mranderson048.garden.v1v3v3.garden.color.split_complement.call(null,color,(130));
});

mranderson048.garden.v1v3v3.garden.color.split_complement.cljs$core$IFn$_invoke$arity$2 = (function (color,distance_from_complement){
var d = mranderson048.garden.v1v3v3.garden.util.clip.call(null,(1),(179),distance_from_complement);
return mranderson048.garden.v1v3v3.garden.color.hue_rotations.call(null,color,(0),d,(- d));
});

mranderson048.garden.v1v3v3.garden.color.split_complement.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a quadruple of four colors which are
 *   equidistance on the color wheel (ie. a pair of complements). An
 *   optional angle may be given for color of the second complement in the
 *   pair (this defaults to 90 when only color is passed).
 */
mranderson048.garden.v1v3v3.garden.color.tetrad = (function mranderson048$garden$v1v3v3$garden$color$tetrad(var_args){
var G__31183 = arguments.length;
switch (G__31183) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$1 = (function (color){
return mranderson048.garden.v1v3v3.garden.color.tetrad.call(null,color,(90));
});

mranderson048.garden.v1v3v3.garden.color.tetrad.cljs$core$IFn$_invoke$arity$2 = (function (color,angle){
var a = mranderson048.garden.v1v3v3.garden.util.clip.call(null,(1),(90),Math.abs(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$2(angle,angle)));
var color_2 = mranderson048.garden.v1v3v3.garden.color.rotate_hue.call(null,color,a);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.garden.v1v3v3.garden.color.rotate_hue.call(null,color,(0)),mranderson048.garden.v1v3v3.garden.color.complement.call(null,color),color_2,mranderson048.garden.v1v3v3.garden.color.complement.call(null,color_2)], null);
});

mranderson048.garden.v1v3v3.garden.color.tetrad.cljs$lang$maxFixedArity = 2;

/**
 * Given a color return a list of shades from lightest to darkest by
 *   a step. By default the step is 10. White and black are excluded from
 *   the returned list.
 */
mranderson048.garden.v1v3v3.garden.color.shades = (function mranderson048$garden$v1v3v3$garden$color$shades(var_args){
var G__31186 = arguments.length;
switch (G__31186) {
case 1:
return mranderson048.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson048.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson048.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$1 = (function (color){
return mranderson048.garden.v1v3v3.garden.color.shades.call(null,color,(10));
});

mranderson048.garden.v1v3v3.garden.color.shades.cljs$core$IFn$_invoke$arity$2 = (function (color,step){
var c = mranderson048.garden.v1v3v3.garden.color.as_hsl.call(null,color);
var iter__4523__auto__ = ((function (c){
return (function mranderson048$garden$v1v3v3$garden$color$iter__31187(s__31188){
return (new cljs.core.LazySeq(null,((function (c){
return (function (){
var s__31188__$1 = s__31188;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__31188__$1);
if(temp__5720__auto__){
var s__31188__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31188__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__31188__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__31190 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__31189 = (0);
while(true){
if((i__31189 < size__4522__auto__)){
var i = cljs.core._nth.call(null,c__4521__auto__,i__31189);
cljs.core.chunk_append.call(null,b__31190,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)));

var G__31192 = (i__31189 + (1));
i__31189 = G__31192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31190),mranderson048$garden$v1v3v3$garden$color$iter__31187.call(null,cljs.core.chunk_rest.call(null,s__31188__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31190),null);
}
} else {
var i = cljs.core.first.call(null,s__31188__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,c,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),(i * step)),mranderson048$garden$v1v3v3$garden$color$iter__31187.call(null,cljs.core.rest.call(null,s__31188__$2)));
}
} else {
return null;
}
break;
}
});})(c))
,null,null));
});})(c))
;
return iter__4523__auto__.call(null,cljs.core.range.call(null,(1),Math.floor((100.0 / step))));
});

mranderson048.garden.v1v3v3.garden.color.shades.cljs$lang$maxFixedArity = 2;

mranderson048.garden.v1v3v3.garden.color.color_name__GT_hex = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"aquamarine","aquamarine",263648544),new cljs.core.Keyword(null,"lime","lime",-1796425088),new cljs.core.Keyword(null,"deepskyblue","deepskyblue",-1691758944),new cljs.core.Keyword(null,"darksalmon","darksalmon",-896495551),new cljs.core.Keyword(null,"antiquewhite","antiquewhite",-1702201183),new cljs.core.Keyword(null,"mediumturquoise","mediumturquoise",2112212449),new cljs.core.Keyword(null,"slategrey","slategrey",-1531406687),new cljs.core.Keyword(null,"slategray","slategray",-178672671),new cljs.core.Keyword(null,"sienna","sienna",-1559699358),new cljs.core.Keyword(null,"orange","orange",73816386),new cljs.core.Keyword(null,"navajowhite","navajowhite",1463125346),new cljs.core.Keyword(null,"lavenderblush","lavenderblush",667482818),new cljs.core.Keyword(null,"firebrick","firebrick",-214380606),new cljs.core.Keyword(null,"orangered","orangered",-1851964317),new cljs.core.Keyword(null,"palevioletred","palevioletred",-1198100061),new cljs.core.Keyword(null,"lawngreen","lawngreen",672111043),new cljs.core.Keyword(null,"seashell","seashell",1208259012),new cljs.core.Keyword(null,"lightpink","lightpink",808485476),new cljs.core.Keyword(null,"darkolivegreen","darkolivegreen",-2098617596),new cljs.core.Keyword(null,"aliceblue","aliceblue",-1185534108),new cljs.core.Keyword(null,"gray","gray",1013268388),new cljs.core.Keyword(null,"lightsteelblue","lightsteelblue",-209586236),new cljs.core.Keyword(null,"whitesmoke","whitesmoke",1847137252),new cljs.core.Keyword(null,"darkgoldenrod","darkgoldenrod",-1115778811),new cljs.core.Keyword(null,"tan","tan",1273609893),new cljs.core.Keyword(null,"bisque","bisque",-862836634),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"lightgreen","lightgreen",-1542529498),new cljs.core.Keyword(null,"darkseagreen","darkseagreen",410063911),new cljs.core.Keyword(null,"crimson","crimson",-1192060857),new cljs.core.Keyword(null,"darkslategray","darkslategray",348576839),new cljs.core.Keyword(null,"mistyrose","mistyrose",-619815737),new cljs.core.Keyword(null,"chocolate","chocolate",772404615),new cljs.core.Keyword(null,"yellow","yellow",-881035449),new cljs.core.Keyword(null,"cadetblue","cadetblue",1126335112),new cljs.core.Keyword(null,"navy","navy",1626342120),new cljs.core.Keyword(null,"ghostwhite","ghostwhite",-1030428888),new cljs.core.Keyword(null,"dimgrey","dimgrey",265814984),new cljs.core.Keyword(null,"seagreen","seagreen",1345424905),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"mediumseagreen","mediumseagreen",2130779146),new cljs.core.Keyword(null,"indigo","indigo",-280252374),new cljs.core.Keyword(null,"olivedrab","olivedrab",477000042),new cljs.core.Keyword(null,"cyan","cyan",1118839274),new cljs.core.Keyword(null,"peachpuff","peachpuff",-1932127734),new cljs.core.Keyword(null,"limegreen","limegreen",-121735638),new cljs.core.Keyword(null,"mediumslateblue","mediumslateblue",-900241526),new cljs.core.Keyword(null,"violet","violet",-1351470549),new cljs.core.Keyword(null,"sandybrown","sandybrown",-417646484),new cljs.core.Keyword(null,"yellowgreen","yellowgreen",844595052),new cljs.core.Keyword(null,"mediumspringgreen","mediumspringgreen",-257604339),new cljs.core.Keyword(null,"steelblue","steelblue",1620562381),new cljs.core.Keyword(null,"rosybrown","rosybrown",1634897517),new cljs.core.Keyword(null,"cornflowerblue","cornflowerblue",-1713148307),new cljs.core.Keyword(null,"ivory","ivory",-1259182451),new cljs.core.Keyword(null,"lightgoldenrodyellow","lightgoldenrodyellow",1849392877),new cljs.core.Keyword(null,"salmon","salmon",-1093653298),new cljs.core.Keyword(null,"darkcyan","darkcyan",-1999655442),new cljs.core.Keyword(null,"peru","peru",1147074382),new cljs.core.Keyword(null,"cornsilk","cornsilk",-1628976146),new cljs.core.Keyword(null,"lightslategray","lightslategray",-1109503825),new cljs.core.Keyword(null,"blueviolet","blueviolet",887936463),new cljs.core.Keyword(null,"forestgreen","forestgreen",1609185807),new cljs.core.Keyword(null,"lightseagreen","lightseagreen",-1503692817),new cljs.core.Keyword(null,"gold","gold",-806826416),new cljs.core.Keyword(null,"gainsboro","gainsboro",-218568880),new cljs.core.Keyword(null,"darkorchid","darkorchid",-1255783536),new cljs.core.Keyword(null,"burlywood","burlywood",1747294160),new cljs.core.Keyword(null,"lightskyblue","lightskyblue",397352944),new cljs.core.Keyword(null,"chartreuse","chartreuse",-1626529775),new cljs.core.Keyword(null,"snow","snow",1266930033),new cljs.core.Keyword(null,"moccasin","moccasin",885646097),new cljs.core.Keyword(null,"honeydew","honeydew",297211825),new cljs.core.Keyword(null,"aqua","aqua",745022417),new cljs.core.Keyword(null,"darkred","darkred",1564487633),new cljs.core.Keyword(null,"mediumorchid","mediumorchid",114416082),new cljs.core.Keyword(null,"lightsalmon","lightsalmon",278000114),new cljs.core.Keyword(null,"saddlebrown","saddlebrown",-1556765006),new cljs.core.Keyword(null,"wheat","wheat",783520466),new cljs.core.Keyword(null,"springgreen","springgreen",-1241565454),new cljs.core.Keyword(null,"lightslategrey","lightslategrey",1806136178),new cljs.core.Keyword(null,"darkblue","darkblue",511597490),new cljs.core.Keyword(null,"powderblue","powderblue",65928114),new cljs.core.Keyword(null,"turquoise","turquoise",876845491),new cljs.core.Keyword(null,"blanchedalmond","blanchedalmond",-1397674477),new cljs.core.Keyword(null,"papayawhip","papayawhip",-330388621),new cljs.core.Keyword(null,"slateblue","slateblue",79472627),new cljs.core.Keyword(null,"lightblue","lightblue",-1333083084),new cljs.core.Keyword(null,"skyblue","skyblue",-2076132812),new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"lightyellow","lightyellow",1576303380),new cljs.core.Keyword(null,"blue","blue",-622100620),new cljs.core.Keyword(null,"palegreen","palegreen",1360601109),new cljs.core.Keyword(null,"greenyellow","greenyellow",1380924629),new cljs.core.Keyword(null,"khaki","khaki",-1417823979),new cljs.core.Keyword(null,"maroon","maroon",-952210123),new cljs.core.Keyword(null,"darkgrey","darkgrey",-860992715),new cljs.core.Keyword(null,"midnightblue","midnightblue",688164725),new cljs.core.Keyword(null,"floralwhite","floralwhite",1656937461),new cljs.core.Keyword(null,"deeppink","deeppink",1577828374),new cljs.core.Keyword(null,"paleturquoise","paleturquoise",1255621750),new cljs.core.Keyword(null,"darkkhaki","darkkhaki",1599585526),new cljs.core.Keyword(null,"azure","azure",1864287702),new cljs.core.Keyword(null,"indianred","indianred",-1829312906),new cljs.core.Keyword(null,"darkviolet","darkviolet",552615766),new cljs.core.Keyword(null,"mediumpurple","mediumpurple",-1891751018),new cljs.core.Keyword(null,"fuchsia","fuchsia",990719926),new cljs.core.Keyword(null,"coral","coral",1082484055),new cljs.core.Keyword(null,"mediumvioletred","mediumvioletred",-1767902505),new cljs.core.Keyword(null,"lemonchiffon","lemonchiffon",1115945815),new cljs.core.Keyword(null,"mediumblue","mediumblue",-1579936616),new cljs.core.Keyword(null,"darkmagenta","darkmagenta",-1534491240),new cljs.core.Keyword(null,"goldenrod","goldenrod",2000666104),new cljs.core.Keyword(null,"darkorange","darkorange",1453996632),new cljs.core.Keyword(null,"orchid","orchid",-1953715528),new cljs.core.Keyword(null,"plum","plum",2022177528),new cljs.core.Keyword(null,"pink","pink",393815864),new cljs.core.Keyword(null,"teal","teal",1231496088),new cljs.core.Keyword(null,"magenta","magenta",1687937081),new cljs.core.Keyword(null,"lightgrey","lightgrey",-729897351),new cljs.core.Keyword(null,"purple","purple",-876021126),new cljs.core.Keyword(null,"dodgerblue","dodgerblue",-1678389350),new cljs.core.Keyword(null,"darkturquoise","darkturquoise",-80977765),new cljs.core.Keyword(null,"mintcream","mintcream",1437895067),new cljs.core.Keyword(null,"hotpink","hotpink",1103829723),new cljs.core.Keyword(null,"thistle","thistle",1477120028),new cljs.core.Keyword(null,"royalblue","royalblue",978912636),new cljs.core.Keyword(null,"darkgreen","darkgreen",2002841276),new cljs.core.Keyword(null,"darkslateblue","darkslateblue",807219996),new cljs.core.Keyword(null,"silver","silver",1044501468),new cljs.core.Keyword(null,"darkgray","darkgray",-1229776547),new cljs.core.Keyword(null,"oldlace","oldlace",-966038915),new cljs.core.Keyword(null,"mediumaquamarine","mediumaquamarine",1476241181),new cljs.core.Keyword(null,"brown","brown",1414854429),new cljs.core.Keyword(null,"lightgray","lightgray",-845833379),new cljs.core.Keyword(null,"olive","olive",-2080542466),new cljs.core.Keyword(null,"lightcoral","lightcoral",-988903010),new cljs.core.Keyword(null,"tomato","tomato",1086708254),new cljs.core.Keyword(null,"lightcyan","lightcyan",-481418530),new cljs.core.Keyword(null,"linen","linen",-1305214018),new cljs.core.Keyword(null,"darkslategrey","darkslategrey",-114797409),new cljs.core.Keyword(null,"lavender","lavender",-1469567809),new cljs.core.Keyword(null,"dimgray","dimgray",-412750241),new cljs.core.Keyword(null,"palegoldenrod","palegoldenrod",-2067529985),new cljs.core.Keyword(null,"beige","beige",836725695),new cljs.core.Keyword(null,"black","black",1294279647)],["#7fffd4","#00ff00","#00bfff","#e9967a","#faebd7","#48d1cc","#708090","#708090","#a0522d","#ffa500","#ffdead","#fff0f5","#b22222","#ff4500","#db7093","#7cfc00","#fff5ee","#ffb6c1","#556b2f","#f0f8ff","#808080","#b0c4de","#f5f5f5","#b8860b","#d2b48c","#ffe4c4","#ffffff","#90ee90","#8fbc8f","#dc143c","#2f4f4f","#ffe4e1","#d2691e","#ffff00","#5f9ea0","#000080","#f8f8ff","#696969","#2e8b57","#008000","#3cb371","#4b0082","#6b8e23","#00ffff","#ffdab9","#32cd32","#7b68ee","#ee82ee","#f4a460","#9acd32","#00fa9a","#4682b4","#bc8f8f","#6495ed","#fffff0","#fafad2","#fa8072","#008b8b","#cd853f","#fff8dc","#778899","#8a2be2","#228b22","#20b2aa","#ffd700","#dcdcdc","#9932cc","#deb887","#87cefa","#7fff00","#fffafa","#ffe4b5","#f0fff0","#00ffff","#8b0000","#ba55d3","#ffa07a","#8b4513","#f5deb3","#00ff7f","#778899","#00008b","#b0e0e6","#40e0d0","#ffebcd","#ffefd5","#6a5acd","#add8e6","#87ceeb","#ff0000","#ffffe0","#0000ff","#98fb98","#adff2f","#f0e68c","#800000","#a9a9a9","#191970","#fffaf0","#ff1493","#afeeee","#bdb76b","#f0ffff","#cd5c5c","#9400d3","#9370db","#ff00ff","#ff7f50","#c71585","#fffacd","#0000cd","#8b008b","#daa520","#ff8c00","#da70d6","#dda0dd","#ffc0cb","#008080","#ff00ff","#d3d3d3","#800080","#1e90ff","#00ced1","#f5fffa","#ff69b4","#d8bfd8","#4169e1","#006400","#483d8b","#c0c0c0","#a9a9a9","#fdf5e6","#66cdaa","#a52a2a","#d3d3d3","#808000","#f08080","#ff6347","#e0ffff","#faf0e6","#2f4f4f","#e6e6fa","#696969","#eee8aa","#f5f5dc","#000000"]);
/**
 * Helper function for from-name. Returns an instance of ExceptionInfo
 *   for unknown colors.
 */
mranderson048.garden.v1v3v3.garden.color.ex_info_color_name = (function mranderson048$garden$v1v3v3$garden$color$ex_info_color_name(n){
return cljs.core.ex_info.call(null,["Unknown color ",cljs.core.pr_str.call(null,n)," see (:expected (ex-data e)) for a list of color names"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),n,new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.set.call(null,cljs.core.keys.call(null,mranderson048.garden.v1v3v3.garden.color.color_name__GT_hex))], null));
});
/**
 * Helper function for from-name.
 */
mranderson048.garden.v1v3v3.garden.color.color_name__GT_color = cljs.core.memoize.call(null,(function (k){
return mranderson048.garden.v1v3v3.garden.color.color_name__GT_hex.call(null,k);
}));
/**
 * Given a CSS color name n return an instance of CSSColor.
 */
mranderson048.garden.v1v3v3.garden.color.from_name = (function mranderson048$garden$v1v3v3$garden$color$from_name(n){
var temp__5718__auto__ = mranderson048.garden.v1v3v3.garden.color.color_name__GT_color.call(null,cljs.core.keyword.call(null,n));
if(cljs.core.truth_(temp__5718__auto__)){
var h = temp__5718__auto__;
return h;
} else {
throw mranderson048.garden.v1v3v3.garden.color.ex_info_color_name.call(null,n);
}
});
mranderson048.garden.v1v3v3.garden.color.scale_color_value = (function mranderson048$garden$v1v3v3$garden$color$scale_color_value(value,amount){
return (value + (((amount > (0)))?(((100) - value) * (amount / (100))):((value * amount) / (100))));
});
/**
 * Scale the lightness of a color by amount
 */
mranderson048.garden.v1v3v3.garden.color.scale_lightness = (function mranderson048$garden$v1v3v3$garden$color$scale_lightness(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"lightness","lightness",-2040901930),mranderson048.garden.v1v3v3.garden.color.scale_color_value,amount);
});
/**
 * Scale the saturation of a color by amount
 */
mranderson048.garden.v1v3v3.garden.color.scale_saturation = (function mranderson048$garden$v1v3v3$garden$color$scale_saturation(color,amount){
return mranderson048.garden.v1v3v3.garden.color.update_color.call(null,color,new cljs.core.Keyword(null,"saturation","saturation",-14247929),mranderson048.garden.v1v3v3.garden.color.scale_color_value,amount);
});
mranderson048.garden.v1v3v3.garden.color.decrown_hex = (function mranderson048$garden$v1v3v3$garden$color$decrown_hex(hex){
return clojure.string.replace.call(null,hex,/^#/,"");
});
mranderson048.garden.v1v3v3.garden.color.crown_hex = (function mranderson048$garden$v1v3v3$garden$color$crown_hex(hex){
if(cljs.core.truth_(cljs.core.re_find.call(null,/^#/,hex))){
return hex;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)].join('');
}
});
/**
 * (expand-hex "#abc") -> "aabbcc"
 * (expand-hex "333333") -> "333333"
 */
mranderson048.garden.v1v3v3.garden.color.expand_hex = (function mranderson048$garden$v1v3v3$garden$color$expand_hex(hex){
var _ = mranderson048.garden.v1v3v3.garden.color.decrown_hex.call(null,hex);
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,_))){
return clojure.string.join.call(null,cljs.core.mapcat.call(null,cljs.core.vector,_,_));
} else {
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,_))){
return clojure.string.join.call(null,cljs.core.repeat.call(null,(6),_));
} else {
return _;

}
}
});
/**
 * (hex->long "#abc") -> 11189196
 */
mranderson048.garden.v1v3v3.garden.color.hex__GT_long = (function mranderson048$garden$v1v3v3$garden$color$hex__GT_long(hex){
return parseInt(mranderson048.garden.v1v3v3.garden.color.expand_hex.call(null,clojure.string.replace.call(null,hex,/^#/,"")),(16));
});
/**
 * (long->hex 11189196) -> "aabbcc"
 */
mranderson048.garden.v1v3v3.garden.color.long__GT_hex = (function mranderson048$garden$v1v3v3$garden$color$long__GT_hex(long$){
return long$.toString((16));
});
/**
 * `weight` is number 0 to 100 (%).
 * At 0, it weighs color-1 at 100%.
 * At 100, it weighs color-2 at 100%.
 * Returns hex string.
 */
mranderson048.garden.v1v3v3.garden.color.weighted_mix = (function mranderson048$garden$v1v3v3$garden$color$weighted_mix(color_1,color_2,weight){
var vec__31194 = cljs.core.map.call(null,(function (p1__31193_SHARP_){
return (p1__31193_SHARP_ / (100));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((100) - weight),weight], null));
var weight_1 = cljs.core.nth.call(null,vec__31194,(0),null);
var weight_2 = cljs.core.nth.call(null,vec__31194,(1),null);
var vec__31197 = cljs.core.map.call(null,cljs.core.comp.call(null,mranderson048.garden.v1v3v3.garden.color.hex__GT_long,mranderson048.garden.v1v3v3.garden.color.as_hex),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_1,color_2], null));
var long_1 = cljs.core.nth.call(null,vec__31197,(0),null);
var long_2 = cljs.core.nth.call(null,vec__31197,(1),null);
return mranderson048.garden.v1v3v3.garden.color.crown_hex.call(null,mranderson048.garden.v1v3v3.garden.color.expand_hex.call(null,mranderson048.garden.v1v3v3.garden.color.long__GT_hex.call(null,((long_1 * weight_1) + (long_2 * weight_2)))));
});

//# sourceMappingURL=color.js.map
