(ns clj-websocket-demo.websocket)

(defn create-socket [on-message-func]
  (let [socket(connect!)]
    (do
      (on-open! socket #(on-message! socket on-message-func))
      socket)))
      
(defn connect! []
  (js/WebSocket. "ws://localhost:8080/socket"))
    
(defn on-open! [socket func]
  (set! (. socket -onopen) func))

(defn on-message! [socket func]
  (set! (. socket -onmessage) func))

(defn send! [socket msg]
  (. socket send msg))
