(ns clj-websocket-demo.main
  (:require [clj-websocket-demo.websocket :as sock])
  (:use [jayq.core :only [$ bind append]]
        [clj-websocket-demo.js-utils :only [clj->json current-timestamp-ms]]))

(def $body ($ :body))
(def $socket-output ($ :#socketOutput))
(def $record-button ($ :#record))
(def $stop-button ($ :#stop))
(def $play-button ($ :#play))

(def user-id (rand-int 9999999999))
(def record-url (str user-id "/record"))
(def play-url (str user-id "/play"))

(def is-recording? (atom false))

(bind-mousemove (sock/create-socket record-url))

(bind $record-button :click 
  (fn [] 
    (update-socket-status "recording")
    (reset! is-recording? true)))

(bind $stop-button :click 
  (fn []
    (update-socket-status "stoppped recording") 
    (reset! is-recording? false)))

(bind $play-button :click
  (fn []
    (update-socket-status "playing")
    (reset! is-recording? false)
    (sock/create-socket play-url {:on-message #(update-socket-status (.-data %))})))

(defn bind-mousemove [socket]
  (let [inital-timestamp-ms (current-timestamp-ms)]
    (bind $body :mousemove
      (fn [e]
        (when @is-recording?
          (sock/send! socket 
            (clj->json
              {:x (. e -pageX)
               :y (. e -pageY)
               :offset (- (current-timestamp-ms) inital-timestamp-ms)})))))))

(defn update-socket-status [msg]
  (append $socket-output (str msg "\n")))
