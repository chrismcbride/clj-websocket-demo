(ns clj-websocket-demo.js-utils)

(defn log [data]
  (. js/console log data))

(defn current-timestamp-ms []
  (.getTime (new js/Date)))
