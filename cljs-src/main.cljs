(ns websocket)

(defn ^:export init []
  (do 
    (connect!))

(defn connect! []
  (let [socket (js/WebSocket. "ws://localhost:8080/socket")]
    (do
      (set! (. socket -onopen) (fn []
        (set! (. socket -onmessage) (fn [x] (. js/console log x)))
        (.send socket "hello"))))))
