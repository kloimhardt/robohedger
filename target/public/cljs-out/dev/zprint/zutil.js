// Compiled by ClojureScript 1.10.520 {}
goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.editz');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.skip_whitespace = rewrite_clj.zip.whitespace.skip_whitespace;
zprint.zutil.whitespace_QMARK_ = rewrite_clj.zip.whitespace.whitespace_QMARK_;
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
zprint.zutil.rightmost_QMARK_ = rewrite_clj.zip.move.rightmost_QMARK_;
zprint.zutil.zremove = rewrite_clj.zip.removez.remove;
zprint.zutil.zreplace = rewrite_clj.zip.editz.replace;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__28837 = zprint.zutil.find_root_and_path.call(null,zloc);
var _ = cljs.core.nth.call(null,vec__28837,(0),null);
var zpath = cljs.core.nth.call(null,vec__28837,(1),null);
return cljs.core._EQ_.call(null,zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:((zprint.zutil.zfocus.call(null,zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return rewrite_clj.zip.seq_QMARK_.call(null,zloc);
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return zprint.zutil.tag.call(null,zloc);
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return zprint.zutil.string.call(null,zloc);
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5718__auto__ = zprint.zutil.zfirst.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var first_loc = temp__5718__auto__;
var temp__5718__auto____$1 = zprint.zutil.right_STAR_.call(null,first_loc);
if(cljs.core.truth_(temp__5718__auto____$1)){
var nloc = temp__5718__auto____$1;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__28840 = zprint.zutil.zfirst.call(null,zloc);
var G__28840__$1 = (((G__28840 == null))?null:zprint.zutil.right_STAR_.call(null,G__28840));
var G__28840__$2 = (((G__28840__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__28840__$1));
var G__28840__$3 = (((G__28840__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__28840__$2));
if((G__28840__$3 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__28840__$3);
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__28841 = zprint.zutil.zfirst.call(null,zloc);
var G__28841__$1 = (((G__28841 == null))?null:zprint.zutil.right_STAR_.call(null,G__28841));
var G__28841__$2 = (((G__28841__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__28841__$1));
var G__28841__$3 = (((G__28841__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__28841__$2));
var G__28841__$4 = (((G__28841__$3 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__28841__$3));
var G__28841__$5 = (((G__28841__$4 == null))?null:zprint.zutil.right_STAR_.call(null,G__28841__$4));
if((G__28841__$5 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__28841__$5);
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5718__auto__ = zprint.zutil.right_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__28842 = zprint.zutil.zrightnws.call(null,nloc);
var G__28843 = nloc;
nloc = G__28842;
ploc = G__28843;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5718__auto__ = zprint.zutil.left_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__28844 = zprint.zutil.zleftnws.call(null,nloc);
var G__28845 = nloc;
nloc = G__28844;
ploc = G__28845;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.znextnws = (function zprint$zutil$znextnws(zloc){
if(cljs.core.truth_(rewrite_clj.zip.end_QMARK_.call(null,zloc))){
return zloc;
} else {
var temp__5718__auto__ = zprint.zutil.next_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var nloc = temp__5718__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5718__auto__ = zprint.zutil.prev_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var ploc = temp__5718__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc);
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.call(null,i,(0))))){
return nloc;
} else {
var G__28846 = zprint.zutil.zrightnws.call(null,nloc);
var G__28847 = (i - (1));
nloc = G__28846;
i = G__28847;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = (0);
while(true){
if((!((nloc == null)))){
if(cljs.core.truth_(zthing_QMARK_.call(null,nloc))){
return i;
} else {
var G__28848 = zprint.zutil.zrightnws.call(null,nloc);
var G__28849 = (i + (1));
nloc = G__28848;
i = G__28849;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__28850 = zprint.zutil.right_STAR_.call(null,nloc);
var G__28851 = (function (){var temp__5718__auto__ = ((cljs.core.not.call(null,(function (){var and__4120__auto__ = zprint.zutil.whitespace_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__4120__auto__)){
return (!(cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323))));
} else {
return and__4120__auto__;
}
})()))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5718__auto__)){
var result = temp__5718__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__28850;
out = G__28851;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__28852 = zprint.zutil.right_STAR_.call(null,nloc);
var G__28853 = (function (){var temp__5718__auto__ = ((cljs.core.not.call(null,zprint.zutil.whitespace_QMARK_.call(null,nloc)))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__5718__auto__)){
var result = temp__5718__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__28852;
out = G__28853;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__28854 = zprint.zutil.right_STAR_.call(null,nloc);
var G__28855 = cljs.core.conj.call(null,out,zfn.call(null,nloc));
nloc = G__28854;
out = G__28855;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = zprint.zutil.right_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__28856 = zprint.zutil.right_STAR_.call(null,nloc);
var G__28857 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?out:cljs.core.conj.call(null,out,zfn.call(null,nloc)));
nloc = G__28856;
out = G__28857;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap.call(null,cljs.core.identity,zloc);
});
/**
 * Remove everything to the right of the current zloc. In other words,
 *   make the current zloc the rightmost.
 */
zprint.zutil.zremove_right = (function zprint$zutil$zremove_right(zloc){
var nloc = zloc;
while(true){
if(cljs.core.truth_(zprint.zutil.rightmost_QMARK_.call(null,nloc))){
return nloc;
} else {
var G__28858 = zprint.zutil.zremove.call(null,zprint.zutil.right_STAR_.call(null,nloc));
nloc = G__28858;
continue;
}
break;
}
});
/**
 * Considering the current zloc a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end, coercing it into a node/zloc.  Note, this 
 *   is not quite implemented that way, as it uses replace.
 */
zprint.zutil.ztake_append = (function zprint$zutil$ztake_append(n,zloc,end_struct){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var index = (0);
while(true){
if((index >= n)){
return zprint.zutil.up_STAR_.call(null,zprint.zutil.zremove_right.call(null,zprint.zutil.zreplace.call(null,nloc,end_struct)));
} else {
var xloc = zprint.zutil.right_STAR_.call(null,nloc);
var G__28859 = xloc;
var G__28860 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,xloc))?index:(index + (1)));
nloc = G__28859;
index = G__28860;
continue;
}
break;
}
});
/**
 * How many non-whitespace children does zloc have?
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count.call(null,zprint.zutil.zseqnws.call(null,zloc));
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__28861 = zprint.zutil.up_STAR_.call(null,nloc);
var G__28862 = (0);
var G__28863 = cljs.core.cons.call(null,left,out);
nloc = G__28861;
left = G__28862;
out = G__28863;
continue;
}
} else {
var G__28864 = zprint.zutil.left_STAR_.call(null,nloc);
var G__28865 = (left + (1));
var G__28866 = out;
nloc = G__28864;
left = G__28865;
out = G__28866;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__28867 = zprint.zutil.up_STAR_.call(null,nloc);
var G__28868 = (0);
var G__28869 = cljs.core.cons.call(null,left,out);
nloc = G__28867;
left = G__28868;
out = G__28869;
continue;
}
} else {
var G__28870 = zprint.zutil.left_STAR_.call(null,nloc);
var G__28871 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?left:(left + (1)));
var G__28872 = out;
nloc = G__28870;
left = G__28871;
out = G__28872;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not.call(null,rewrite_clj.zip.up.call(null,nloc))){
return nloc;
} else {
var G__28873 = rewrite_clj.zip.up.call(null,nloc);
nloc = G__28873;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__28874 = zprint.zutil.right_STAR_.call(null,nloc);
var G__28875 = (remaining_right - (1));
nloc = G__28874;
remaining_right = G__28875;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.call(null,zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost.call(null,nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),zprint.zutil.tag.call(null,zloc))) && (cljs.core.not.call(null,rewrite_clj.node.printable_only_QMARK_.call(null,rewrite_clj.zip.node.call(null,zloc)))));
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,zloc),":");
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return (zprint.zutil.sexpr.call(null,zloc) instanceof cljs.core.Symbol);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__4120__auto__ = zloc;
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4120__auto____$1)){
return (rewrite_clj.zip.sexpr.call(null,zloc) == null);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.zsymbol_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = ((zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.z_coll_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,"..."));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = rewrite_clj.zip.tag.call(null,zloc);
if(((cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
return zprint.zutil.zconstant_QMARK_.call(null,zprint.zutil.zfirst.call(null,zloc));
} else {
var and__4120__auto__ = cljs.core.not.call(null,zprint.zutil.z_coll_QMARK_.call(null,zloc));
if(and__4120__auto__){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_.call(null,zloc))){
var sexpr = zprint.zutil.sexpr.call(null,zloc);
return ((typeof sexpr === 'string') || (typeof sexpr === 'number') || (cljs.core._EQ_.call(null,"true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))) || (cljs.core._EQ_.call(null,"false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sexpr))));
} else {
return null;
}
}
} else {
return and__4120__auto__;
}
}
});
/**
 * If this is an inline comment, returns the amount of space that
 *   was between this and the previous element.  That means that if
 *   we go left, we get something other than whitespace before a
 *   newline.  Assumes zloc is a comment.
 */
zprint.zutil.zinlinecomment_QMARK_ = (function zprint$zutil$zinlinecomment_QMARK_(zloc){
var nloc = zprint.zutil.left_STAR_.call(null,zloc);
var spaces = (0);
while(true){
var tnloc = zprint.zutil.tag.call(null,nloc);
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))){
return null;
} else {
if(cljs.core.not_EQ_.call(null,tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
return spaces;
} else {
var G__28876 = zprint.zutil.left_STAR_.call(null,nloc);
var G__28877 = (zprint.zutil.length.call(null,nloc) + spaces);
nloc = G__28876;
spaces = G__28877;
continue;

}
}
}
}
break;
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = rewrite_clj.zip.down.call(null,zloc);
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__4120__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,nloc),":doc");
} else {
return and__4120__auto__;
}
})())){
if(typeof zprint.zutil.sexpr.call(null,rewrite_clj.zip.right.call(null,nloc)) === 'string'){
return rewrite_clj.zip.right.call(null,nloc);
} else {
return null;
}
} else {
var G__28878 = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,nloc));
nloc = G__28878;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = rewrite_clj.zip.string.call(null,rewrite_clj.zip.down.call(null,zloc));
if(((cljs.core._EQ_.call(null,fn_name,"defn")) || (cljs.core._EQ_.call(null,fn_name,"defmacro")))){
var docloc = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(typeof zprint.zutil.sexpr.call(null,docloc) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,fn_name,"def")){
var maploc = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(cljs.core.truth_(rewrite_clj.zip.map_QMARK_.call(null,maploc))){
return zprint.zutil.find_doc_in_map.call(null,maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5718__auto__ = zprint.zutil.find_docstring.call(null,zloc);
if(cljs.core.truth_(temp__5718__auto__)){
var doc_zloc = temp__5718__auto__;
var new_doc_zloc = zprint.zutil.replace_STAR_.call(null,doc_zloc,rewrite_clj.zip.node.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zutil.sexpr.call(null,doc_zloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join('')))));
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.zip.root.call(null,new_doc_zloc));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,null,cljs.core.name.call(null,named));
} else {
return cljs.core.keyword.call(null,null,cljs.core.name.call(null,named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__28882 = cljs.core.first.call(null,pair_seq__$1);
var seq__28883 = cljs.core.seq.call(null,vec__28882);
var first__28884 = cljs.core.first.call(null,seq__28883);
var seq__28883__$1 = cljs.core.next.call(null,seq__28883);
var k = first__28884;
var rest_of_pair = seq__28883__$1;
var pair = vec__28882;
var current_ns = (cljs.core.truth_((function (){var and__4120__auto__ = rest_of_pair;
if(and__4120__auto__){
var and__4120__auto____$1 = (!(clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,k),"::")));
if(and__4120__auto____$1){
var or__4131__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_.call(null,k);
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())?cljs.core.namespace.call(null,rewrite_clj.zip.sexpr.call(null,k)):null);
if(cljs.core.not.call(null,k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.call(null,ns,current_ns)){
var G__28885 = ns;
var G__28886 = cljs.core.next.call(null,pair_seq__$1);
var G__28887 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__28885;
pair_seq__$1 = G__28886;
out = G__28887;
continue;
} else {
return null;
}
} else {
var G__28888 = current_ns;
var G__28889 = cljs.core.next.call(null,pair_seq__$1);
var G__28890 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__28888;
pair_seq__$1 = G__28889;
out = G__28890;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__28891 = ns;
var G__28892 = cljs.core.next.call(null,pair_seq__$1);
var G__28893 = cljs.core.conj.call(null,out,pair);
ns = G__28891;
pair_seq__$1 = G__28892;
out = G__28893;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring_orig_val__28894 = zprint.zfns.zstring;
var znumstr_orig_val__28895 = zprint.zfns.znumstr;
var zbyte_array_QMARK__orig_val__28896 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK__orig_val__28897 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__28898 = zprint.zfns.zsexpr;
var zseqnws_orig_val__28899 = zprint.zfns.zseqnws;
var zmap_right_orig_val__28900 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__28901 = zprint.zfns.zfocus_style;
var zfirst_orig_val__28902 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__28903 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__28904 = zprint.zfns.zsecond;
var zthird_orig_val__28905 = zprint.zfns.zthird;
var zfourth_orig_val__28906 = zprint.zfns.zfourth;
var znthnext_orig_val__28907 = zprint.zfns.znthnext;
var zcount_orig_val__28908 = zprint.zfns.zcount;
var zmap_orig_val__28909 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__28910 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__28911 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__28912 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__28913 = zprint.zfns.zfocus;
var zfind_path_orig_val__28914 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__28915 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__28916 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__28917 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__28918 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__28919 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__28920 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK__orig_val__28921 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK__orig_val__28922 = zprint.zfns.zmeta_QMARK_;
var ztag_orig_val__28923 = zprint.zfns.ztag;
var zlast_orig_val__28924 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__28925 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__28926 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__28927 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__28928 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__28929 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__28930 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__28931 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__28932 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__28933 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__28934 = zprint.zfns.zmap_all;
var zpromise_QMARK__orig_val__28935 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK__orig_val__28936 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK__orig_val__28937 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK__orig_val__28938 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK__orig_val__28939 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__28940 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__28941 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__28942 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__28943 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__28944 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__28945 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__28946 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__28947 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__28948 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__28949 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__28950 = zprint.zfns.zfind;
var ztake_append_orig_val__28951 = zprint.zfns.ztake_append;
var zstring_temp_val__28952 = rewrite_clj.zip.string;
var znumstr_temp_val__28953 = zprint.zutil.znumstr;
var zbyte_array_QMARK__temp_val__28954 = cljs.core.constantly.call(null,false);
var zcomment_QMARK__temp_val__28955 = zprint.zutil.zcomment_QMARK_;
var zsexpr_temp_val__28956 = zprint.zutil.sexpr;
var zseqnws_temp_val__28957 = zprint.zutil.zseqnws;
var zmap_right_temp_val__28958 = zprint.zutil.zmap_right;
var zfocus_style_temp_val__28959 = zprint.zutil.zfocus_style;
var zfirst_temp_val__28960 = zprint.zutil.zfirst;
var zfirst_no_comment_temp_val__28961 = zprint.zutil.zfirst_no_comment;
var zsecond_temp_val__28962 = zprint.zutil.zsecond;
var zthird_temp_val__28963 = zprint.zutil.zthird;
var zfourth_temp_val__28964 = zprint.zutil.zfourth;
var znthnext_temp_val__28965 = zprint.zutil.znthnext;
var zcount_temp_val__28966 = zprint.zutil.zcount;
var zmap_temp_val__28967 = zprint.zutil.zmap;
var zmap_w_nl_temp_val__28968 = zprint.zutil.zmap_w_nl;
var zanonfn_QMARK__temp_val__28969 = zprint.zutil.zanonfn_QMARK_;
var zfn_obj_QMARK__temp_val__28970 = cljs.core.constantly.call(null,false);
var zfocus_temp_val__28971 = zprint.zutil.zfocus;
var zfind_path_temp_val__28972 = zprint.zutil.find_root_and_path_nw;
var zwhitespace_QMARK__temp_val__28973 = zprint.zutil.whitespace_QMARK_;
var zlist_QMARK__temp_val__28974 = rewrite_clj.zip.list_QMARK_;
var zvector_QMARK__temp_val__28975 = rewrite_clj.zip.vector_QMARK_;
var zmap_QMARK__temp_val__28976 = rewrite_clj.zip.map_QMARK_;
var zset_QMARK__temp_val__28977 = rewrite_clj.zip.set_QMARK_;
var zcoll_QMARK__temp_val__28978 = zprint.zutil.z_coll_QMARK_;
var zuneval_QMARK__temp_val__28979 = zprint.zutil.zuneval_QMARK_;
var zmeta_QMARK__temp_val__28980 = zprint.zutil.zmeta_QMARK_;
var ztag_temp_val__28981 = zprint.zutil.ztag;
var zlast_temp_val__28982 = zprint.zutil.zlast;
var zarray_QMARK__temp_val__28983 = cljs.core.constantly.call(null,false);
var zatom_QMARK__temp_val__28984 = cljs.core.constantly.call(null,false);
var zderef_temp_val__28985 = cljs.core.constantly.call(null,false);
var zrecord_QMARK__temp_val__28986 = cljs.core.constantly.call(null,false);
var zns_QMARK__temp_val__28987 = cljs.core.constantly.call(null,false);
var zobj_to_vec_temp_val__28988 = cljs.core.constantly.call(null,null);
var zexpandarray_temp_val__28989 = cljs.core.constantly.call(null,null);
var znewline_QMARK__temp_val__28990 = zprint.zutil.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__temp_val__28991 = zprint.zutil.whitespace_or_comment_QMARK_;
var zmap_all_temp_val__28992 = zprint.zutil.zmap_all;
var zpromise_QMARK__temp_val__28993 = cljs.core.constantly.call(null,false);
var zfuture_QMARK__temp_val__28994 = cljs.core.constantly.call(null,false);
var zdelay_QMARK__temp_val__28995 = cljs.core.constantly.call(null,false);
var zkeyword_QMARK__temp_val__28996 = zprint.zutil.zkeyword_QMARK_;
var zconstant_QMARK__temp_val__28997 = zprint.zutil.zconstant_QMARK_;
var zagent_QMARK__temp_val__28998 = cljs.core.constantly.call(null,false);
var zreader_macro_QMARK__temp_val__28999 = zprint.zutil.zreader_macro_QMARK_;
var zarray_to_shift_seq_temp_val__29000 = cljs.core.constantly.call(null,null);
var zdotdotdot_temp_val__29001 = zprint.zutil.zdotdotdot;
var zsymbol_QMARK__temp_val__29002 = zprint.zutil.zsymbol_QMARK_;
var znil_QMARK__temp_val__29003 = zprint.zutil.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__29004 = zprint.zutil.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__temp_val__29005 = zprint.zutil.zreader_cond_w_coll_QMARK_;
var zlift_ns_temp_val__29006 = zprint.zutil.zlift_ns;
var zinlinecomment_QMARK__temp_val__29007 = zprint.zutil.zinlinecomment_QMARK_;
var zfind_temp_val__29008 = zprint.zutil.zfind;
var ztake_append_temp_val__29009 = zprint.zutil.ztake_append;
zprint.zfns.zstring = zstring_temp_val__28952;

zprint.zfns.znumstr = znumstr_temp_val__28953;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__temp_val__28954;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__28955;

zprint.zfns.zsexpr = zsexpr_temp_val__28956;

zprint.zfns.zseqnws = zseqnws_temp_val__28957;

zprint.zfns.zmap_right = zmap_right_temp_val__28958;

zprint.zfns.zfocus_style = zfocus_style_temp_val__28959;

zprint.zfns.zfirst = zfirst_temp_val__28960;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__28961;

zprint.zfns.zsecond = zsecond_temp_val__28962;

zprint.zfns.zthird = zthird_temp_val__28963;

zprint.zfns.zfourth = zfourth_temp_val__28964;

zprint.zfns.znthnext = znthnext_temp_val__28965;

zprint.zfns.zcount = zcount_temp_val__28966;

zprint.zfns.zmap = zmap_temp_val__28967;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__28968;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__28969;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__28970;

zprint.zfns.zfocus = zfocus_temp_val__28971;

zprint.zfns.zfind_path = zfind_path_temp_val__28972;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__28973;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__28974;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__28975;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__28976;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__28977;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__28978;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__28979;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__28980;

zprint.zfns.ztag = ztag_temp_val__28981;

zprint.zfns.zlast = zlast_temp_val__28982;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__28983;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__28984;

zprint.zfns.zderef = zderef_temp_val__28985;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__28986;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__28987;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__28988;

zprint.zfns.zexpandarray = zexpandarray_temp_val__28989;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__28990;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__28991;

zprint.zfns.zmap_all = zmap_all_temp_val__28992;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__28993;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__28994;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__28995;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__28996;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__28997;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__28998;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__28999;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__29000;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__29001;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__29002;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__29003;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__29004;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__29005;

zprint.zfns.zlift_ns = zlift_ns_temp_val__29006;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__29007;

zprint.zfns.zfind = zfind_temp_val__29008;

zprint.zfns.ztake_append = ztake_append_temp_val__29009;

try{return body_fn.call(null);
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__28951;

zprint.zfns.zfind = zfind_orig_val__28950;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__28949;

zprint.zfns.zlift_ns = zlift_ns_orig_val__28948;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__28947;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__28946;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__28945;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__28944;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__28943;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__28942;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__28941;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__28940;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__28939;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__28938;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__28937;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__28936;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__28935;

zprint.zfns.zmap_all = zmap_all_orig_val__28934;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__28933;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__28932;

zprint.zfns.zexpandarray = zexpandarray_orig_val__28931;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__28930;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__28929;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__28928;

zprint.zfns.zderef = zderef_orig_val__28927;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__28926;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__28925;

zprint.zfns.zlast = zlast_orig_val__28924;

zprint.zfns.ztag = ztag_orig_val__28923;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__28922;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__28921;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__28920;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__28919;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__28918;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__28917;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__28916;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__28915;

zprint.zfns.zfind_path = zfind_path_orig_val__28914;

zprint.zfns.zfocus = zfocus_orig_val__28913;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__28912;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__28911;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__28910;

zprint.zfns.zmap = zmap_orig_val__28909;

zprint.zfns.zcount = zcount_orig_val__28908;

zprint.zfns.znthnext = znthnext_orig_val__28907;

zprint.zfns.zfourth = zfourth_orig_val__28906;

zprint.zfns.zthird = zthird_orig_val__28905;

zprint.zfns.zsecond = zsecond_orig_val__28904;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__28903;

zprint.zfns.zfirst = zfirst_orig_val__28902;

zprint.zfns.zfocus_style = zfocus_style_orig_val__28901;

zprint.zfns.zmap_right = zmap_right_orig_val__28900;

zprint.zfns.zseqnws = zseqnws_orig_val__28899;

zprint.zfns.zsexpr = zsexpr_orig_val__28898;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__28897;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK__orig_val__28896;

zprint.zfns.znumstr = znumstr_orig_val__28895;

zprint.zfns.zstring = zstring_orig_val__28894;
}});

//# sourceMappingURL=zutil.js.map
