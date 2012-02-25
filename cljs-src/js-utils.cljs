(ns alephtest.js-utils)

(defn log [data]
  (. js/console log data))
