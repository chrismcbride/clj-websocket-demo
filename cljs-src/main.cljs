(ns clj-websocket-demo.main
  (:require [clj-websocket-demo.websocket :as sock])
  (:use [jayq.core :only [$ bind append]]
        [clj-websocket-demo.js-utils :only [log clj->json current-timestamp-ms]]))

(def $body ($ :body))
(def $socket-output ($ :#socketOutput))

(defn ^:export init []
  (do
    (update-socket-status "Opening socket..")
    (let [socket (sock/create-socket {:on-open #(update-socket-status "Opened socket")
                                      :on-message #(update-socket-status (str "RECIEVED: " (. % -data)))
                                      :on-close #(update-socket-status "Socket closed")})]
      (bind-mousemove socket))))

(defn bind-mousemove [socket]
  (let [inital-timestamp-ms (current-timestamp-ms)]
    (bind $body :mousemove
      (fn [e] 
        (sock/send! socket 
          (clj->json
            {:x (. e -pageX)
             :y (. e -pageY)
             :offset (- (current-timestamp-ms) inital-timestamp-ms)}))))))

(defn update-socket-status [msg]
  (append $socket-output (str msg "\n")))
