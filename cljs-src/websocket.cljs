(ns alephtest.websocket
  (:use [alephtest.js-utils :only [log]]))

(defn ^:export init []
  (let [socket(connect!)] 
    (on-open socket 
      (fn [] (do (on-message socket #(log (. % -data)))
               (. socket send "hello"))))))
      
(defn connect! []
  (js/WebSocket. "ws://localhost:8080/socket"))
    
(defn on-open [socket func]
  (set! (. socket -onopen) func))

(defn on-message [socket func]
  (set! (. socket -onmessage) func))
