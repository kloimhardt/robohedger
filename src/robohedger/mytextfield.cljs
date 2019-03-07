(ns robohedger.mytextfield
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [goog.ui.ac :as ac]
            [clojure.string :as str]
            [robohedger.mylib :as mylib]))

(defn parsetext [textarea]
  (let [txt (.-value textarea)]
   (js/console.log (str "in parsetxt [" txt (str/ends-with? (str/trim txt) ">,") "]"))

   (cond (str/ends-with? (str/trim txt) ">,")
         (re-frame/dispatch [:conjchatlog textarea]))))



(defn component []
  (reagent/create-class
   {:reagent-render
    (fn[]
      [:div
       [:p [:textarea {:id "txtInput2"
                       ;;:on-change #(parsetext (.-target %))
                       :style {:width "350px" :height "100px"}}]]])


    :component-did-mount
    (fn[this]
      (let [tf (.getElementById js/document "txtInput2")]
        (ac/createSimpleAutoComplete
         (clj->js (mylib/getcompletelist @(re-frame/subscribe [:scens])))
         tf true true)))}))
