(ns clj-websocket-demo.js-utils
  (:require [goog.json :as json]))

(defn log [data]
  (. js/console log data))

(defn current-timestamp-ms []
  (.getTime (new js/Date)))

(defn clj->js
  "Recursively transforms ClojureScript maps into Javascript objects,
   other ClojureScript colls into JavaScript arrays, and ClojureScript
   keywords into JavaScript strings.

   Borrowed and updated from mmcgrana."
  [x]
  (cond
    (string? x) x
    (keyword? x) (name x)
    (map? x) (.-strobj (reduce (fn [m [k v]]
               (assoc m (clj->js k) (clj->js v))) {} x))
    (coll? x) (apply array (map clj->js x))
    :else x))

(defn clj->json [x]
  (json/serialize (clj->js x)))
