(ns websocket)

(defn ^:export connect! []
  (let [socket (js/WebSocket. "ws://localhost:8080")]
    (do
      (set! (. socket -onopen) (fn []
        (set! (. socket -onmessage) (fn [x] (. js/console log x)))
        (.send socket "hello"))))))
