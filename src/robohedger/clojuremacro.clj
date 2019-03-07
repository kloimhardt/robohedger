(ns robohedger.clojuremacro
  (:require [clojure.string :as str]))

(defn inflate [filename]
  (->> filename
     java.io.FileInputStream.
     java.io.ObjectInputStream.
     .readObject))


(defn compr [txt patterns] (reduce #(str/replace %1 (first %2) (last %2)) txt patterns))
(defn decompr [txt patterns] (reduce #(str/replace %1 (last %2) (first %2)) txt patterns))

(defmacro thepatterns [] [["Swap." "$S$"] ["/1Y.Telerate" "$T$"] [".EUR.EURIBOR." "$E$"] [".EUR.EONIA." "$I$"]
                          ["FRA.EUR.EURIBOR." "$F$"] ["M.Telerate" "$U$"]
                          ["MM.EUR.EURIBOR" "$M$"] [".Telerate" "$V$"]
                          ["0000000000000" "$0$"] ["9999999999999" "$9$"]])

(defmacro oldmacrogetscenarios []
  (pr-str (inflate "data/tickler20170316_1_OPTIONSyn_scenarios.txt")))


(defmacro macrogetscenarios []
  (compr (pr-str (inflate "data/tickler20170316_1_OPTIONSyn_scenarios.txt")) (thepatterns)))


(defmacro macrogetnpvs []
  (->> (inflate "data/tickler20170316_1_OPTIONSyn_npvs.txt")
       (reduce #(conj %1 {(key %2) (reduce + (map val (val %2)))}) {}) ;;aggregates the npvs of the trades
       ((fn[npvcljs] (into {} (map (fn[_] { (key _) (- (val _) (npvcljs "ZERO"))}) npvcljs)))) ;;subtract the npv of todays date
       pr-str))
