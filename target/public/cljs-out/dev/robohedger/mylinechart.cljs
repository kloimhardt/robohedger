(ns robohedger.mylinechart
  (:require [reagent.core :as reagent]))

(defn drawd3 [strID graphmap]
  (let [graphmapalt [
                     {:id "" ;;"New York"
                      :values [
                               {:xx "20111001" :yy 63.4}
                               {:xx "20111002" :yy 58.0}
                               {:xx "20111003" :yy 53.3}]}
                     {:id "" ;;"San Fracisco"
                      :values [
                               {:xx "20111001" :yy 62.7}
                               {:xx "20111002" :yy 59.9}
                               {:xx "20111003" :yy 59.1}]}
                     {:id "" ;;"Austin"
                      :values [
                               {:xx "20111001" :yy 72.2}
                               {:xx "20111002" :yy 67.7}
                               {:xx "20111003" :yy 69.4}]}]]



   (js/klmgraph (clj->js graphmap) (clj->js strID))))

(defn component [strID graphmap]
 (reagent/create-class
    {:reagent-render (fn [strID graphmap]
                       (js/console.log (str "in linealt2" strID))
                       [:svg {:id strID :width 480 :height (/ 400 1.62)}])

     :component-did-mount (fn[]
                            (js/console.log (str "in linealt2mnt" strID))
                            (drawd3 strID graphmap))


     :component-did-update (fn [this]
                             (let [ [_ nstrID ngraphmap] (reagent/argv this)
                  ;;http://sxywu.com/react-d3
                                   dum (js/console.log (str "in linealt2up" nstrID))]
                               (drawd3 nstrID ngraphmap)))}))
