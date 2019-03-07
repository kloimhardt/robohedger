// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.core.matrix.linear');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.core.matrix.protocols');
/**
 * Computes the norm of a matrix or vector.
 * 
 * By default calculates 2-norm for vectors and Frobenius 2-norm for matrices. The optional p argument specifies use of the p-norm instead.
 * 
 * Special cases of p argument:
 * Double/POSITIVE_INFINITY - Infinity norm
 * 
 * Intended usage: (let [n (norm v 1)] ....)
 *                 (let [n (norm v Double/POSITIVE_INFINITY)] ....)
 *                 (let [n (norm v)] ....)
 */
clojure.core.matrix.linear.norm = (function clojure$core$matrix$linear$norm(var_args){
var G__2210 = arguments.length;
switch (G__2210) {
case 1:
return clojure.core.matrix.linear.norm.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.linear.norm.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.linear.norm.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.linear.norm.cljs$core$IFn$_invoke$arity$2(m,(2));
});

clojure.core.matrix.linear.norm.cljs$core$IFn$_invoke$arity$2 = (function (m,p){
return clojure.core.matrix.protocols.norm(m,p);
});

clojure.core.matrix.linear.norm.cljs$lang$maxFixedArity = 2;

/**
 * Computes the rank of a matrix, i.e. the number of linearly independent rows.
 * 
 * Intended usage: (let [r (rank m)] ....)
 */
clojure.core.matrix.linear.rank = (function clojure$core$matrix$linear$rank(m){
return clojure.core.matrix.protocols.rank(m);
});
/**
 * Computes QR decomposition of a full rank matrix.
 * Returns a map containing matrices of an input matrix type with the keys [:Q :R] such that:
 *      M = Q.R
 * 
 * Where:
 *  - Q is an orthogonal matrix
 *  - R is an upper triangular matrix (= right triangular matrix)
 * If :return parameter is specified in options map, it returns only specified keys.
 * If :compact parameter is specified in options map, compact versions of matrices are returned.
 * 
 * Returns nil if decomposition is impossible.
 * 
 * Intended usage: (let [{:keys [Q R]} (qr M)] ....)
 *                 (let [{:keys [R]} (qr M {:return [:R]})] ....)
 */
clojure.core.matrix.linear.qr = (function clojure$core$matrix$linear$qr(var_args){
var G__2213 = arguments.length;
switch (G__2213) {
case 2:
return clojure.core.matrix.linear.qr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.linear.qr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.linear.qr.cljs$core$IFn$_invoke$arity$2 = (function (m,p__2214){
var map__2215 = p__2214;
var map__2215__$1 = (((((!((map__2215 == null))))?(((((map__2215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__2215):map__2215);
var return$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__2215__$1,cljs.core.cst$kw$return,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Q,cljs.core.cst$kw$R], null));
var compact = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__2215__$1,cljs.core.cst$kw$compact,false);
return clojure.core.matrix.protocols.qr(m,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$return,return$,cljs.core.cst$kw$compact,compact], null));
});

clojure.core.matrix.linear.qr.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.qr(m,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$return,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Q,cljs.core.cst$kw$R], null)], null));
});

clojure.core.matrix.linear.qr.cljs$lang$maxFixedArity = 2;

/**
 * Computes the Cholesky decomposition of a hermitian, positive definite matrix.
 * Returns a map containing two matrices with the keys [:L :L*] such that
 * 
 * Such that:
 *   M = L.L*
 * 
 * Where
 *   - M must be a hermitian, positive definite matrix
 *   - L is a lower triangular matrix
 *   - L* is the conjugate transpose of L
 * 
 * If :return parameter is specified in options map, it returns only specified keys.
 * 
 * Intended usage: (let [{:keys [L L*]} (cholesky M)] ....)
 *                 (let [{:keys [L*]} (cholesky M {:return [:L*]})] ....)
 */
clojure.core.matrix.linear.cholesky = (function clojure$core$matrix$linear$cholesky(var_args){
var G__2219 = arguments.length;
switch (G__2219) {
case 2:
return clojure.core.matrix.linear.cholesky.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.linear.cholesky.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.linear.cholesky.cljs$core$IFn$_invoke$arity$2 = (function (m,options){
return clojure.core.matrix.protocols.cholesky(m,options);
});

clojure.core.matrix.linear.cholesky.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.linear.cholesky.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$return,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$L,cljs.core.cst$kw$L_STAR_], null)], null));
});

clojure.core.matrix.linear.cholesky.cljs$lang$maxFixedArity = 2;

/**
 * Computes the LU(P) decomposition of a matrix with partial row pivoting.
 * Returns a map containing the keys [:L :U :P], such that:
 *   P.A = L.U
 * 
 * Where
 *   - L is a lower triangular matrix
 *   - U is an upper triangular matrix
 *   - P is a permutation matrix
 * 
 * If :return parameter is specified in options map, it returns only specified keys.
 * 
 * Intended usage: (let [{:keys [L U P]} (lu A)] ....)
 *                 (let [{:keys [L U]} (lu M {:return [:L :U]})] ....)
 */
clojure.core.matrix.linear.lu = (function clojure$core$matrix$linear$lu(var_args){
var G__2222 = arguments.length;
switch (G__2222) {
case 2:
return clojure.core.matrix.linear.lu.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.linear.lu.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.linear.lu.cljs$core$IFn$_invoke$arity$2 = (function (m,options){
return clojure.core.matrix.protocols.lu(m,options);
});

clojure.core.matrix.linear.lu.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.linear.lu.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$return,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$L,cljs.core.cst$kw$U,cljs.core.cst$kw$P], null)], null));
});

clojure.core.matrix.linear.lu.cljs$lang$maxFixedArity = 2;

/**
 * Computes the Singular Value decomposition of a matrix.
 * Returns a map containing the keys [:U :S :V*] such that:
 *   M = U.S.V*
 * 
 * Where
 *   - U is an unitary matrix
 *   - S is a sequence whose elements are the singular values of the original matrix
 *   - V* is an unitary matrix
 * 
 * If :return parameter is specified in options map, it returns only specified keys.
 * 
 * Intended usage: (let [{:keys [U S V*]} (svd M)] ....)
 *                 (let [{:keys [S]} (svd M {:return [:S]})] ....)
 */
clojure.core.matrix.linear.svd = (function clojure$core$matrix$linear$svd(var_args){
var G__2225 = arguments.length;
switch (G__2225) {
case 2:
return clojure.core.matrix.linear.svd.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.linear.svd.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.linear.svd.cljs$core$IFn$_invoke$arity$2 = (function (m,options){
return clojure.core.matrix.protocols.svd(m,options);
});

clojure.core.matrix.linear.svd.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.linear.svd.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$return,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$U,cljs.core.cst$kw$S,cljs.core.cst$kw$V_STAR_], null)], null));
});

clojure.core.matrix.linear.svd.cljs$lang$maxFixedArity = 2;

/**
 * Computes the Eigen decomposition of a diagonalisable matrix.
 * Returns a map containing matrices for each of the the keys [:Q :A] such that:
 * 
 *    M l= Q.A.Q<sup>-1</sup>
 * 
 * Where:
 *   - Q is a matrix where each column is the ith normalised eigenvector of M
 *   - A is a diagonal matrix whose diagonal elements are the eigenvalues.
 *   - Q<sup>-1</sup> is the inverse of Q
 * 
 * If :return parameter is specified in options map, it returns only specified keys.
 * 
 * Intended usage: (let [{:keys [Q A]} (eigen M)] ....)
 *                 (let [{:keys [A]} (eigen M {:return [:A]})] ....)
 */
clojure.core.matrix.linear.eigen = (function clojure$core$matrix$linear$eigen(var_args){
var G__2228 = arguments.length;
switch (G__2228) {
case 2:
return clojure.core.matrix.linear.eigen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.linear.eigen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.linear.eigen.cljs$core$IFn$_invoke$arity$2 = (function (m,options){
return clojure.core.matrix.protocols.eigen(m,options);
});

clojure.core.matrix.linear.eigen.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.linear.eigen.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$return,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$Q,cljs.core.cst$kw$A], null)], null));
});

clojure.core.matrix.linear.eigen.cljs$lang$maxFixedArity = 2;

/**
 * Solves a linear matrix equation, or system of linear scalar equations, i.e. finds the
 * value X such that:
 * 
 *   A.X = B
 * 
 * Where:
 *   - A is a square matrix containing the coefficients of the linear system
 *   - B is a vector containing the right-hand side of the linear system.
 * If B is missing, it is taken as an identity matrix and returns inverse of A
 * 
 * Intended usage: (let [X (solve A B)] ....)
 */
clojure.core.matrix.linear.solve = (function clojure$core$matrix$linear$solve(var_args){
var G__2231 = arguments.length;
switch (G__2231) {
case 2:
return clojure.core.matrix.linear.solve.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.linear.solve.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.core.matrix.linear.solve.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.solve(a,b);
});

clojure.core.matrix.linear.solve.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.inverse(a);
});

clojure.core.matrix.linear.solve.cljs$lang$maxFixedArity = 2;

/**
 * Computes least-squares solution to a linear matrix equation.
 * 
 * Intended usage: (let [X (least-squares A B)] ....)
 */
clojure.core.matrix.linear.least_squares = (function clojure$core$matrix$linear$least_squares(a,b){
return clojure.core.matrix.protocols.least_squares(a,b);
});
