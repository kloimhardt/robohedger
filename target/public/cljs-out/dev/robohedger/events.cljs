(ns robohedger.events
  (:require [re-frame.core :as re-frame]
   ;;[day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
   [cljs.reader :as edn]
   [robohedger.mylib :as mylib])
  (:require-macros [robohedger.clojuremacro :as cm]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   {:likes 0
    ;;:scens (edn/read-string (cm/oldmacrogetscenarios))
    :scens  (edn/read-string (mylib/decompr (cm/macrogetscenarios) (cm/thepatterns)))
    :npvdiffs (edn/read-string (cm/macrogetnpvs))
    :mytextfield {:chatlog []}}))

(re-frame/reg-event-db
 :inclikes
 (fn  [db _]
   (update-in db [:likes] inc)))

(re-frame/reg-fx
 :cleartextfield
 (fn [textarea]))
   ;;(set! (.-innerHTML textarea) "") ;;this would be old IExplorer, should use .-value for modern Chrome-Browser


(re-frame/reg-event-fx
 :conjchatlog
 (fn  [{:keys [db]} [_ textarea]]
   {:db  (update-in db [:mytextfield :chatlog] #(conj % (mylib/cleanup (.-value textarea))))
    :cleartextfield textarea}))

(re-frame/reg-fx
 :settextfield
 (fn [text]
   #_(set! (.-innerHTML (.getElementById js/document "txtInput2")) text) ;;for old MS-IExplorer
   (set! (.-value (.getElementById js/document "txtInput2")) text)))

(re-frame/reg-event-fx
 :conjchatlog2
 (fn  [{:keys [db]} [_ instruction textdefault]]
   {:db  (update-in db [:mytextfield :chatlog] #(conj % instruction))
    :settextfield textdefault}))
