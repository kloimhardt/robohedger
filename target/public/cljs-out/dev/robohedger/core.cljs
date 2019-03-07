(ns robohedger.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [clojure.string :as str]
            [robohedger.events]
            [robohedger.subs]
            [robohedger.views :as views]
            [robohedger.config :as config]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (rf/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(do
  (rf/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-root))

;; -- Domino 1 - Event Dispatch -----------------------------------------------
(comment
 (defn dispatch-timer-event
   []
   (let [now (js/Date.)]
     (rf/dispatch [:timer now])))  ;; <-- dispatch used
;; Call the dispatching function every second.
;; `defonce` is like `def` but it ensures only one instance is ever
;; created in the face of figwheel hot-reloading of this file.

 (defonce do-timer (js/setInterval dispatch-timer-event 1000))

 (rf/reg-event-db              ;; sets up initial application state
   :initialize                 ;; usage:  (dispatch [:initialize])
   (fn [_ _]                   ;; the two parameters are not important here, so use _
     {:time (js/Date.)         ;; What it returns becomes the new application state
      :time-color "#f88"}))    ;; so the application state will initially be a map with two keys

 (rf/reg-event-db                ;; usage:  (dispatch [:time-color-change 34562])
   :time-color-change            ;; dispatched when the user enters a new colour into the UI text field
   (fn [db [_ new-color-value]]  ;; -db event handlers given 2 parameters:  current application state and event (a vector)
     (assoc db :time-color new-color-value)))   ;; compute and return the new application state

 (rf/reg-event-db                 ;; usage:  (dispatch [:timer a-js-Date])
   :timer                         ;; every second an event of this kind will be dispatched
   (fn [db [_ new-time]]          ;; note how the 2nd parameter is destructured to obtain the data value
     (assoc db :time new-time)))  ;; compute and return the new application state

 (rf/reg-sub
   :time
   (fn [db _]     ;; db is current app state. 2nd unused param is query vector
     (:time db))) ;; return a query computation over the application state

 (rf/reg-sub
   :time-color
   (fn [db _]
     (:time-color db)))

 (defn clock
   []
   [:div.example-clock
    {:style {:color @(rf/subscribe [:time-color])}}
    (-> @(rf/subscribe [:time])
        .toTimeString
        (str/split " ")
        first)])

 (defn color-input
   []
   [:div.color-input
    "Time color: "
    [:input {:type "text"
             :value @(rf/subscribe [:time-color])
             :on-change #(rf/dispatch [:time-color-change (-> % .-target .-value)])}]])  ;; <---

 (defn ui
   []
   [:div
    [:h1 (str "Hello world, it is nowoi")]
    [clock]
    [color-input]])

 (do
   (rf/dispatch-sync [:initialize])     ;; puts a value into application state
   (reagent/render [ui]              ;; mount the application's ui into '<div id="app" />'
                   (js/document.getElementById "app"))))
