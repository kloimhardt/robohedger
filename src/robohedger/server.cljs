(ns robohedger.server
  (:require [robohedger.mylib :as mylib]
            [clojure.string :as str]
            [cljs.reader :as edn])
  (:require-macros [robohedger.clojuremacro :as cm]))

(def tst (edn/read-string (mylib/decompr
                           (cm/macrogetscenarios)
                           (cm/thepatterns))))

(defn squeezenames [text]
  (->> (map str/trim (str/split text #","))
       (map (set (mylib/getswapnames tst)))
       (filter identity)
       (str/join ", ")))

(defn serverprocess [themap]
  (let [id (:id themap)
        text (:text themap)
        uppertext (str/upper-case (str/trim text))
        textstartswith? (partial str/starts-with? uppertext)
        swapnamestext (squeezenames text)]
    (js/console.log (str "stepa3" tst))
    (cond ^:if (re-find #"PLOT____<GO>" text)
          [:fgraphmapcmpt id uppertext text]
          ^:if (textstartswith? "EXPLAIN")
          [:explaintext]
          ^:if (textstartswith? "EXAMPLE")
          [:exampletext]
          ^:if (some textstartswith? ["ACKNOW" "DONE"])
          [:p text]
          ^:if (textstartswith? "HELP")
          [:helptext]
          ^:if (some textstartswith? ["HI" "HELLO" "HALLO"])
          [:greetext]
          ^:if (< 0 (count swapnamestext))
          [:fgraphmapcmpt id uppertext (str swapnamestext ", PLOT____<GO>,")]
          ^:if (textstartswith? "PLS")
          [:div
           [:p text]
           [:p "Request acknowledgement by Trading"]
           [:mybutton "Vienna" (str "Acknowledged by Trading Vienna: \"" text ""\") ""]
           [:mybutton "Prague" (str "Acknowledged by Trading Prague: \"" text ""\") ""]
           [:mybutton "Bucharest" (str "Acknowledged by Trading Bucharest: \"" text ""\") ""]]
          ^:if (some textstartswith? ["BID" "OFFER" "ASK" "WE PAY" "WE REC"])
          [:div
           [:p text]
           [:p "Does Sales want to trade?"]
           [:mybutton "Done Vienna" (str "Done by Sales Vienna: \"" text ""\") ""]
           [:mybutton "Done Prague" (str "Done by Sales Prague: \"" text ""\") ""]
           [:mybutton "Done Bucharest" (str "Done by Sales Bucharest: \"" text ""\") ""]]
          :else
          [:p "Do not understand, type \"pls\" \"bid\" \"ask\" "])))
