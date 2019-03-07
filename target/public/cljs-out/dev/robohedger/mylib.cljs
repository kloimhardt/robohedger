(ns robohedger.mylib
  (:require [clojure.core.matrix :as matrix]
            [clojure.core.matrix.linear :as linear]
            [clojure.string :as str]))

(defn smallslv [U V]
  (if (empty? U)
   [(/ (last V) (first V))]
   (conj U (/ (- (last V) (matrix/mmul (rest (butlast V)) (into [] (reverse U)))) (first V)))))
;;(smallslv [] [3 6]) ;=> [2]  stands for 3*z=6 so solution is z=2
;;(smallslv [2] [1 4 9]) ;=> [2 1]  stands for 1*y + 4*z = 9 with z=2 so solution is [z y]=[2 1]
;;(smallslv [] [8.0 9.0])
;;(smallslv [1.125] [5.0 6.0 7.0])
;;(smallslv [1.125 0.05] [1.0 2.0 3.0 4.0])


(defn TriAngSolve [TriA B]
  (comment (def TriA [[5 6] [0 8]]) (def B [7 10]))
  (comment (def TriA [[1 2 3] [0 5 6] [0 0 8]]) (def B [4 7 9]))
  (->>
   [(into [] (reductions (fn[_1 _2] (into [] (take-last (- (count _1) 1) _2))) TriA)) , B]
   ((fn[[RR BB]] (map conj RR BB)))
   ((fn[V] (reverse (reduce smallslv [] (reverse V)))))))



(defn LinSolve [A B]
  (comment (def A [[1 2] [3 4]]) (def B [1 2]))
  (comment (def A [[1 2] [3 4] [5 6]]) (def B [1 2 7]))
  (->>
   [(linear/qr A) (count (first A))]
   ((fn[[QR nofArows]] [(take nofArows (:R QR)) , (take nofArows (matrix/mmul (matrix/transpose (:Q QR)) B))]))
   ((fn[[RR BB]] (TriAngSolve RR BB)))))



(defn rearrange01 [A]
  (comment (def A ['(1.0 2.0 3.0) '(1.1 2.1 3.1)]) ;;=>([1.0 1.1] [2.0 2.1] [3.0 3.1])
           (def A [[1.0 2.0 3.0] [1.1 2.1 3.1]]) ;;=>([1.0 1.1] [2.0 2.1] [3.0 3.1])
           (def A '((1.0 2.0 3.0) (1.1 2.1 3.1)))) ;;=>([1.0 1.1] [2.0 2.1] [3.0 3.1])

  (reduce (fn[_1 _2] (map (fn[_21 _22] (conj  _21 _22)) _1 _2)) (repeat (count (first A)) []) A))


(defn removecurves [scens]
  (comment
    (def scens {"datum12" {"curve1" {"Swap1" 0.1 "Swap2" 0.2} "curve2" {"Swap3" 0.3 "Swap4" 0.4}}
                "datum23" {"curve1" {"Swap1" 0.5 "Swap2" 0.6} "curve2" {"Swap3" 0.7 "Swap4" 0.8}}}))
  (->>
   (map (fn [_11] {(key _11) (map (fn[_21] (val _21)) (val _11))}) scens)
   ((fn[_] (into {} _)))
   ((fn[_] (map (fn[_11] {(key _11) (reduce conj (val _11))}) _)))
   ((fn[_] (into {} _)))))



(defn getswapnames [scens]
  (comment (def scens {"datum12" {"curve1" {"Swap1" 0.1 "Swap2" 0.2} "curve2" {"Swap3" 0.3 "Swap4" 0.4}}
                       "datum23" {"curve1" {"Swap1" 0.5 "Swap2" 0.6} "curve2" {"Swap3" 0.7 "Swap4" 0.8}}}))
  (->>
   (removecurves scens)
   ((fn[_] (keys (_ (first (keys _))))))))



(defn getcompletelist [scens]
  (conj (getswapnames scens)
        "pls"
        "bid"
        "ask"
        "_______________________PLOT____<GO>"))



(defn plotlist [select]
 (comment (def select "Swap2, _____________>, Swap3, __PLOT____<GO>, Swap1, Swap4, __PLOT____<GO>"))
 (->>
  (str/split select #">")
  ((fn[_] (filter (fn[_11](re-matches #".*PLOT____<GO" _11)) _)))
  ((fn[_] (map (fn [_] (str/split _ #", ")) _)))
  ((fn[_] (map (fn[_11] (filter (fn[_111] (> (count _111) 0)) _11))_)))
  ((fn[_] (map (fn[_11] (butlast _11))_)))))



(defn getEquationSystems [p_plotlist reduscens npvs]
  (comment (def p_plotlist '(("Swap3") ("Swap1" "Swap4")))
           (def reduscens {"datum12" {"Swap1" 0.1, "Swap2" 0.2, "Swap3" 0.3, "Swap4" 0.4},
                           "datum23" {"Swap1" 0.5, "Swap2" 0.6, "Swap3" 0.7, "Swap4" 0.8}})
           (def npvs {"datum12" 1.2 "datum23" 2.3}))

  (->>
   [p_plotlist reduscens npvs]
   ;((fn[[_A _B _C]] [_A _B _C (keys (take 4 _B))])) ;only for debug to reduce datasize
   ;((fn[[_A _B _C _D]] [_A (into {} (map (fn[_] {_ (_B _)}) _D)) (into {} (map (fn[_] {_ (_C _)}) _D)) ])) ;only for debug
   ((fn[[_A _B _C]] [(into {} (map (fn[_01] {(key _01) (map (fn[_21] (map (fn[_11] ((val _01) _11)) _21))  _A) }) _B)) _C]))
   ((fn[[_A _B]] (map (fn[_1] (conj (into [] (_A (key _1))) (val _1))) _B)))
   (rearrange01)))

(defn solveEquationSystems [A]
;; (def A '([(0.3) (0.7)] [(0.1 0.4) (0.5 0.8)] [1.2 2.3]))
   (map (fn[_] (LinSolve _ (last A))) (butlast A)))

(defn getHedgedPortfolioNPVs [A solutions]
  ;;(def A '([(0.3) (0.7)] [(0.1 0.4) (0.5 0.8)] [1.2 2.3]))
  ;;(def solutions '((3.396551724137931) (-0.33333333333333254 3.0833333333333326)))
  (->>
   (map (fn[mat vec] (map (fn[row] (reduce + (map * row vec))) mat)) A solutions)
   (map (fn[vec] (map #(- %1 %2) vec (last A))))))

(defn cleanup [data]
  (->>
   (str/split data #",")
   ((fn[_] (map str/trim _)))
   ((fn[_] (str/join ", " _)))))



(defn abs [n] (max n (- n)))

(defn comfgethedgeratios [strswapnames scens npvdiffs]
  (comment (def strswapnames "Swap2, _____________>, Swap3, __PLOT____<GO>, Swap1, Swap4, __PLOT____<GO>, ")
           (def scens {"datum12" {"curve1" {"Swap1" 0.1 "Swap2" 0.2} "curve2" {"Swap3" 0.3 "Swap4" 0.4}}
                       "datum23" {"curve1" {"Swap1" 0.5 "Swap2" 0.6} "curve2" {"Swap3" 0.7 "Swap4" 0.8}}})
           (def npvdiffs {"datum12" 1.2 "datum23" 2.3}))
  (->>
   (getEquationSystems (plotlist strswapnames) (removecurves scens) npvdiffs)
   (solveEquationSystems)))
   ;;(map (fn[_1] (map (fn[_12] (/ _12 10000.0)) _1)) )
   ;;((fn[_B] (map (fn[_A] (into [] (map abs (map int (map (fn[_] (* 0.001 _)) _A))))) _B)) )


(defn mean [vec]
  ;;(def vec [1.2 3.4 5.6])
  (->>
   (reduce + vec)
   (#(/ % (* 1.0 (count vec))))))

(defn ssddv [p_mean vec]
  ;;(def vec [1.2 3.4 5.6]) (def p_mean 3.4)
  (->>
   (matrix/square vec)
   (mean)
   (#(- % (matrix/square p_mean)))
   (matrix/sqrt)))
   ;;(* (matrix/sqrt (/ 1.0 (- 1.0 (/ 1.0 (count vec)))))) ;;sample sddv, we do not use this


(comment (skew 1 2 [3 4]))

(defn skew [p_sddev p_mean vec]
  (-> (map #(* %1 %1 %1) vec)
      (mean)
      (- (* 3 p_mean (* p_sddev p_sddev)))
      (- (* p_mean p_mean p_mean))
      (/ (*  p_sddev p_sddev  p_sddev))))


(defn histo [vec bins]
  ;;(def bins [-2.0 1.0 3.0 5.0 7.0]) (def vec [-7.4 -1.9 1.2 2.1 3.4 5.6 6.9]))
  (->>
   (map (fn[_1 _2] [_1 _2]) bins (rest bins))
   (map (fn[_1] (filter (fn[_11] (and (>= _11 (first _1)) (< _11 (second _1)))) vec)))
   (map count)))

(defn toolow [vec bins] (filter #(< % (first bins)) vec))
(defn toohigh [vec bins] (filter #(>= % (last bins)) vec))

(comment
  (let [equation ['(-0.3 0.5) '(0.1 0.4) '(0.5 0.8) '(0.2 0.7)]
        b [4.5 1.2 2.3 3.4]]
    (timeseries equation b))
  ;;=> ((-4.966321866730813 -4.160079051383405 -5.842105263157904) (5.8996872744767845 5.513833992094864 6.526315789473689))

  (let [equation ['(0.1 0.4) '(0.5 0.8) '(0.2 0.7)]
        b [1.2 2.3 3.4]]
    (timeseries equation b))
    ;;=> ((-4.160079051383405 -5.842105263157904) (5.513833992094864 6.526315789473689))

  (let [equation ['(0.5 0.8) '(0.2 0.7)]
        b [2.3 3.4]]
    (timeseries equation b)))
      ;;=> ((-5.842105263157904) (6.526315789473689))


(defn timeseries [equation b]
  (->> [(reductions #(conj %1 %2) [] (reverse equation))
        (reductions #(conj %1 %2) [] (reverse b))
        (+ (count (first equation)) (int (* 0.1 (count equation))))]
       ((fn[[A B len]] (map #(LinSolve %1 %2) (drop len A) (drop len B))))
       (rearrange01)
       (map reverse)))

(comment
  (let [swaplist '("Swap1" "Swap4")
        datelist '("datum12" "datum23")
        redscens {"datum23" {"Swap1" 0.5, "Swap2" 0.6, "Swap3" 0.7, "Swap4" 0.8}
                  "datum12" {"Swap2" 0.2, "Swap1" 0.1, "Swap4" 0.4, "Swap3" 0.3}}]
    (makeEquationMatrix swaplist datelist redscens)))

(defn makeEquationMatrix [swaplist datelist redscens]
             (->> (map #(redscens %1) datelist)
                  (map (fn[dict] (map #(dict %1) swaplist)))))

(comment
  (let [strswapnames "Swap2, _____________>, Swap3, __PLOT____<GO>, Swap1, Swap4, __PLOT____<GO>, "
        scens {"datum12" {"curve1" {"Swap1" 0.1 "Swap2" 0.2} "curve2" {"Swap3" 0.3 "Swap4" 0.4}}
               "datum23" {"curve1" {"Swap1" 0.5 "Swap2" 0.6} "curve2" {"Swap3" 0.7 "Swap4" 0.8}}}
        npvdiffs {"datum12" 1.2 "datum23" 2.3}]
    (makeTimeSeries strswapnames scens npvdiffs)))


(defn formatdate [datestring]
;(let [datestring "20170309_20170308"]
  (first (str/split datestring #"_")))

(comment (let [swaplist '("Swap1" "Swap4")
               datelist '("datum12" "datum23")
               timeserieslist '([-0.33333333333333254 -4.160079051383402] [3.0833333333333326 5.513833992094863])]

           (makeGraphMap swaplist datelist timeserieslist)))

(defn makeGraphMapSub [swaplist datelistraw timeserieslist factor]
  (let [datelist (map formatdate datelistraw)
        notswapnamebutempty ""]
   (mapv (fn[swapname timeseries] {:id swapname :values (mapv (fn[date val] {:xx date :yy (* factor val)}) datelist timeseries)}) swaplist timeserieslist)))


(comment
  (let [strswapnames "Swap2, _____________>, Swap3, __PLOT____<GO>, Swap1, Swap4, __PLOT____<GO>, "
        scens {"datum12" {"curve1" {"Swap1" 0.1 "Swap2" 0.2} "curve2" {"Swap3" 0.3 "Swap4" 0.4}}
               "datum23" {"curve1" {"Swap1" 0.5 "Swap2" 0.6} "curve2" {"Swap3" 0.7 "Swap4" 0.8}}}
        npvdiffs {"datum12" 1.2 "datum23" 2.3}]
    (makeGraphMap strswapnames scens npvdiffs)))

(defn makeGraphMap [strswapnames scens npvdiffs]
  (let [sortednpvdiffs (into (sorted-map) npvdiffs)
        swaplist (first (plotlist strswapnames))
        datelist (keys sortednpvdiffs)
        scenred (removecurves scens)
        npvvals (vals sortednpvdiffs)
        ts (timeseries (makeEquationMatrix swaplist datelist scenred) npvvals)]

    (js/console.log (str "in mgm" ts))
    (js/console.log npvvals)
    (js/console.log (makeEquationMatrix swaplist datelist scenred))
    (makeGraphMapSub swaplist datelist ts 0.0001)))



(defn calcStatsSub [vals]
  (let [vvals (into [] vals)
        pmean (mean vvals)
        pstdv (ssddv pmean vvals)]

    {:stdv pstdv :skew (skew pstdv pmean vvals)}))

(defn calcStats [strswapnames scens npvdiffs]
  (let [sortednpvdiffs (into (sorted-map) npvdiffs)
        swaplist (first (plotlist strswapnames))
        datelist (keys sortednpvdiffs)
        scenred (removecurves scens)
        npvvals (into [] (vals sortednpvdiffs))
        eqmat (makeEquationMatrix swaplist datelist scenred)
        newnpvs (->>
                 (map #(reduce + (map * (LinSolve eqmat npvvals) %1)) eqmat)
                 ((fn[A]
                    (map - npvvals A)))
                 (into []))]


    {:orig (calcStatsSub npvvals) :hedged (calcStatsSub newnpvs)}))

(comment
  (let [f #(- %1 %2)
        a [2 3 4]
        b [4 5 6]]
    (mmap f a b)))
(defn mmap [f a b] (map (fn[aa] ((fn[ff] (map (fn[bb] (ff bb)) b)) (partial f aa))) a))

(defn compr [txt patterns] (reduce #(str/replace %1 (first %2) (last %2)) txt patterns))
(defn decompr [txt patterns] (reduce #(str/replace %1 (last %2) (first %2)) txt patterns))
