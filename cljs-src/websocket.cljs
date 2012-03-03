(ns clj-websocket-demo.websocket)

(defn create-socket 
  "Creates and returns a js websocket. Takes a map of functions to bind to the socket"
  [url & [{:keys [on-open on-message on-close] :or {on-open #() on-message #() on-close #()}}]]
    (let [socket(connect! url)]
      (do
        (set-on-open! socket 
          (fn []  (set-on-message! socket on-message)
                  (set-on-close! socket on-close)
                  (on-open)))
        socket)))
      
(defn connect! [url]
  (js/WebSocket. (str "ws://localhost:8080/socket/" url)))
    
(defn set-on-open! [socket func]
  (set! (. socket -onopen) func))

(defn set-on-close! [socket func]
  (set! (. socket -onclose) func))

(defn set-on-message! [socket func]
  (set! (. socket -onmessage) func))

(defn send! [socket msg]
  (. socket send (if (string? msg) msg (pr-str msg))))
