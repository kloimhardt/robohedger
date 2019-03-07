(ns robohedger.views
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [robohedger.mylib :as mylib]
            [robohedger.mytextfield :as mytextfield]
            ;;[robohedger.mybarchart :as mybarchart]
            [robohedger.mylinechart :as mylinechart]
            [cljs.pprint :as pprint]
            [clojure.string :as str]
            [robohedger.server :as server]))
(defmacro mynsinterns [] (ns-interns 'robohedger.views)) ;; the namespace is referenced hardcoded on line 123 as a hack

(defn format0d [number]
  (str/replace (pprint/cl-format nil "~:D" (int number))
               #"," "."))

(defn fgraphmap [strswapnames]
  (mylib/makeGraphMap strswapnames
                      @(re-frame/subscribe [:scens])
                      @(re-frame/subscribe [:npvdiffs])))

(defn fstatsmap [strswapnames]
  (mylib/calcStats strswapnames
                   @(re-frame/subscribe [:scens])
                   @(re-frame/subscribe [:npvdiffs])))

(defn rollout-sub [comp name index element]
  [comp
   (str name "_" index)
   element])

(defn rollout [cpnt name coll]
  (vec (map-indexed (partial rollout-sub cpnt name)
                    coll)))

(defn intocpnt [tags & args]
  (reduce into (vec (flatten [tags]))
          args))

(defn mybutton [slabel scommandexecute scommandpropose]
  [:button
   {:on-click (fn[] (re-frame/dispatch [:conjchatlog2 scommandexecute scommandpropose]))}
   slabel])

(defn getfirstvalue [graphmapentry]
  (:yy (first (:values graphmapentry))))

(defn explaintext []
  [:p
   "First of all: if you type \"help\", I'll guide you.\n"
   "So that you can make your own example.\n\n" [:br]
   "Now, what does the above example mean?\n"
   "You chose four Swaps to hedge your portfolio.\n"
   "The 2Y, 5Y, 10Y and 30Y Swap respectively.\n"
   "You know that you can choose Swaps (and more) "
   "by typing in the text field, right?\n" [:br]
   "I calculated some numbers for you.\n"
   "With those you can perform the optimal portfolio hedge.\n" [:br]
   "The 10Y Swap needs to have a Delta of roundabout twelve thousand EUR.\n"
   "The 5Y Swap needs to have a Delta of exactly -5.110 EUR.\n"
   "In Sum, all Swaps need to have a Delta of -2.155 EUR.\n" [:br]
   "If you do the trades in your chosen Swaps according to my calculations,\n"
   "your portfolio will change into a less riskier, more conservative portfolio. "
   "The Sigma of your portfolio will be reduced from 21.055 to 19.957 EUR.\n"
   "The absolute Skewness will be reduced from 26 to 3.\n\n" [:br]
   "Now, type \"help\". I'll tell you how to choose different Swaps. "
   "Maybe a 8Y and a 17Y Swap suits?"])

(defn hedge-swapname-pair [_ graphmapentry]
  [:tr
   [:td (format0d (getfirstvalue graphmapentry))]
   [:td (:id graphmapentry)]])

(defn fstats [strswapnames gm]
  (let [stats (fstatsmap strswapnames)]
    [:table {:style {:text-align "right"}}
     [intocpnt
      :tbody
      (rollout hedge-swapname-pair "swp" gm)
      [[:tr [:td (format0d (reduce + (mapv getfirstvalue gm)))]]
       [:tr
        [:td (format0d (get-in stats [:orig :stdv]))]
        [:td (format0d (* 100 (get-in stats [:orig :skew])))]]
       [:tr
        [:td (format0d (get-in stats [:hedged :stdv]))]
        [:td (format0d (* 100 (get-in stats [:hedged :skew])))]]]]]))

(defn fgraphmapcmpt [id uppertext strswapnames]
  (let [gm (fgraphmap strswapnames)]
    [:div
     [mylinechart/component id gm]
     [fstats strswapnames gm]
     (when (re-find #"EXPLAINBUTTON" uppertext)
       [mybutton "Explain" "explain" ""])]))

(defn exampletext []
  [:p
   "I added some Swaps in the input below. "
   "You can change the \"10Y\" into \"11Y\" if you want. "
   "Please, press the \"send\" button.\n"
   "With a bit of patience, you'll see a tremendous graph"])

(defn helptext []
  [:p
   "In the textfield below, type the letter \"s\". "
   "I will make suggestions, you will see it immediately. "
   "Choose a Swap."[:br]
   "You can add another swap. Type \"s17\" and choose. "
   "Then, press the \"send\" button." [:br]
   "With a bit of patience, you'll see a tremendous graph."])

(defn greetext []
  [:p "Hello and welcome. I am here to analyze the risk of your portfolio. \n"
   "Please type \"help\" to start"])

(defn squeezenames [text]
  (->> (map str/trim (str/split text #","))
       (map (set (mylib/getswapnames @(re-frame/subscribe [:scens]))))
       (filter identity)
       (str/join ", ")))

(defn myreplace-sub [kw]
  (or (get (ns-interns 'robohedger.views)  ;; this is a hack; one cannot replace the hardcoded namespace here
           (symbol (name kw)))
      kw))

(defn myreplace [coll]
  (if (coll? coll)
    (mapv myreplace (update coll 0 myreplace-sub))
    coll))

(defn maincpnt [id text]
  (myreplace (server/serverprocess {:id id :text text})))

(defn my-reagent-render [id text]
  (let [rstyle {:text-align "right" :background-color "#C0D7EF" :color "white"}]
    [:table {:style {:width "350px"}}
     [:tbody
      [:tr {:style rstyle}
       [:td [:p text]]]
      [:tr
       [:td [maincpnt id text]]]]]))

(defn my-component-did-mount! [this]
  (let [[_ id text] (reagent/argv this)
        uppertext (str/upper-case (str/trim text))
        tf (.getElementById js/document "txtInput2")]
    (do
      (.scrollTo js/window 0 (.-scrollHeight  (.-body js/document)))
      (.focus tf)
      (js/console.log (str "saladuu-" uppertext "-naidoo"))
      (when (not (str/starts-with? uppertext "EXAMPLE"))
        #_(set! (.-innerHTML tf) "")
        (set! (.-value tf) "")))))

(defn parseinput [id text]
  (reagent/create-class
   {:reagent-render my-reagent-render
    :component-did-mount my-component-did-mount!
    :component-did-update (fn [this]
                            (js/console.log (str "should never be in parseinput update")))}))

(defn main-panel []
  [:div
   {:style {:font-family ["Arial" "Helvetica" "sans-serif"]
            :font-size "15px"}}
   #_[:h1 "Counter " @(re-frame/subscribe [:likes])]
   #_[:div [:a {:href "#" :onClick #(re-frame/dispatch [:inclikes])} "Thumbs up"]]
   "Welcome to RoboHedger"
   [:p [mybutton
        "Example"
        "example"
        (str "Swap.2Y.EUR.EURIBOR.3M/1Y.Telerate, "
             "Swap.5Y.EUR.EURIBOR.3M/1Y.Telerate, "
             "Swap.10Y.EUR.EURIBOR.3M/1Y.Telerate, "
             "Swap.30Y.EUR.EURIBOR.3M/1Y.Telerate, "
             "explainbutton")]]
   [intocpnt :div (rollout parseinput "msg" @(re-frame/subscribe [:getchatlog]))]
   [mytextfield/component]
   [:button
    {:on-click #(re-frame/dispatch [:conjchatlog (.getElementById js/document "txtInput2")])}
    "Send"]
   [:pre "\n\n\n\n\n"]])
