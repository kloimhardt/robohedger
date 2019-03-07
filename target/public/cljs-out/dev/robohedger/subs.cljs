(ns robohedger.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))


(re-frame/reg-sub
 :likes
 (fn [db]
   (:likes db)))

(re-frame/reg-sub
 :scens
 (fn [db]
   (:scens db)))

(re-frame/reg-sub
 :npvdiffs
 (fn [db]
   (:npvdiffs db)))

(re-frame/reg-sub
 :getchatlog
 (fn [db]
   (:chatlog (:mytextfield db))))
