// Compiled by ClojureScript 1.10.520 {}
goog.provide('clojure.core.matrix.linear');
goog.require('cljs.core');
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
var G__8821 = arguments.length;
switch (G__8821) {
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
return clojure.core.matrix.linear.norm.call(null,m,(2));
});

clojure.core.matrix.linear.norm.cljs$core$IFn$_invoke$arity$2 = (function (m,p){
return clojure.core.matrix.protocols.norm.call(null,m,p);
});

clojure.core.matrix.linear.norm.cljs$lang$maxFixedArity = 2;

/**
 * Computes the rank of a matrix, i.e. the number of linearly independent rows.
 * 
 * Intended usage: (let [r (rank m)] ....)
 */
clojure.core.matrix.linear.rank = (function clojure$core$matrix$linear$rank(m){
return clojure.core.matrix.protocols.rank.call(null,m);
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
var G__8824 = arguments.length;
switch (G__8824) {
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

clojure.core.matrix.linear.qr.cljs$core$IFn$_invoke$arity$2 = (function (m,p__8825){
var map__8826 = p__8825;
var map__8826__$1 = (((((!((map__8826 == null))))?(((((map__8826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8826):map__8826);
var return$ = cljs.core.get.call(null,map__8826__$1,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Q","Q",663320520),new cljs.core.Keyword(null,"R","R",-936662523)], null));
var compact = cljs.core.get.call(null,map__8826__$1,new cljs.core.Keyword(null,"compact","compact",-348732150),false);
return clojure.core.matrix.protocols.qr.call(null,m,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"return","return",-1891502105),return$,new cljs.core.Keyword(null,"compact","compact",-348732150),compact], null));
});

clojure.core.matrix.linear.qr.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.qr.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Q","Q",663320520),new cljs.core.Keyword(null,"R","R",-936662523)], null)], null));
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
var G__8830 = arguments.length;
switch (G__8830) {
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
return clojure.core.matrix.protocols.cholesky.call(null,m,options);
});

clojure.core.matrix.linear.cholesky.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.linear.cholesky.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"L","L",-1038307519),new cljs.core.Keyword(null,"L*","L*",-1405048036)], null)], null));
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
var G__8833 = arguments.length;
switch (G__8833) {
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
return clojure.core.matrix.protocols.lu.call(null,m,options);
});

clojure.core.matrix.linear.lu.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.linear.lu.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"L","L",-1038307519),new cljs.core.Keyword(null,"U","U",1362002044),new cljs.core.Keyword(null,"P","P",1668913291)], null)], null));
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
var G__8836 = arguments.length;
switch (G__8836) {
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
return clojure.core.matrix.protocols.svd.call(null,m,options);
});

clojure.core.matrix.linear.svd.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.linear.svd.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"U","U",1362002044),new cljs.core.Keyword(null,"S","S",1267293308),new cljs.core.Keyword(null,"V*","V*",-1093863319)], null)], null));
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
var G__8839 = arguments.length;
switch (G__8839) {
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
return clojure.core.matrix.protocols.eigen.call(null,m,options);
});

clojure.core.matrix.linear.eigen.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.linear.eigen.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Q","Q",663320520),new cljs.core.Keyword(null,"A","A",-1688942394)], null)], null));
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
var G__8842 = arguments.length;
switch (G__8842) {
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
return clojure.core.matrix.protocols.solve.call(null,a,b);
});

clojure.core.matrix.linear.solve.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.inverse.call(null,a);
});

clojure.core.matrix.linear.solve.cljs$lang$maxFixedArity = 2;

/**
 * Computes least-squares solution to a linear matrix equation.
 * 
 * Intended usage: (let [X (least-squares A B)] ....)
 */
clojure.core.matrix.linear.least_squares = (function clojure$core$matrix$linear$least_squares(a,b){
return clojure.core.matrix.protocols.least_squares.call(null,a,b);
});

//# sourceMappingURL=linear.js.map
