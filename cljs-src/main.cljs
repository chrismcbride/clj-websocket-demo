(ns clj-websocket-demo.main
  (:require [clj-websocket-demo.websocket :as sock]
            [waltz.state :as state])
  (:use [jayq.core :only [$ bind append show hide]]
        [cljs.reader :only [read-string]]
        [clj-websocket-demo.js-utils :only [log current-timestamp-ms]]
        [crate.core :only [html]])
  (:use-macros [waltz.macros :only [in out defstate deftrans]]))

(def $body ($ :body))
(def $socket-output ($ :#socketOutput))
(def user-id (rand-int 9999999999))
(def record-url (str user-id "/record"))
(def play-url (str user-id "/play"))
(def inital-timestamp-ms (atom 0))
(def sm (state/machine "das"))
(state/set-debug sm false)

(defn update-socket-status [msg]
  (append $socket-output (str msg "\n")))

(defn draw-mouse [eventMap]
  (append $body 
    (html [:div {:class "mouseLine" :style (str "left:" (:x eventMap) "px;"
                                                "top:" (:y eventMap) "px;")}])))

(defstate sm :stop
    (in [] (do
      (hide ($ :#stop))
      (update-socket-status "stoppped recording")))
    (out [] (show ($ :#stop))))

(defstate sm :record
    (in [] (do
      (hide ($ :#record))
      (update-socket-status "recording")
      (reset! inital-timestamp-ms (current-timestamp-ms))))
    (out [] (show ($ :#record))))

(defstate sm :play
    (in [] (do
      (hide ($ :#play))
      (update-socket-status "playing")
      (sock/create-socket play-url {:on-message #(draw-mouse (read-string (.-data %)))})))
    (out [] (show ($ :#play))))

(deftrans sm :set [new-state]
  (state/unset sm (state/current sm))
  (state/set sm new-state))

(state/transition sm :set :stop)

(bind ($ :button) :click
  (fn [e]
    (let [new-state (-> (. e -target) (.-id))]
      (state/transition sm :set (keyword new-state)))))

(let [socket (sock/create-socket record-url)]
  (bind $body :mousemove
    (fn [e]
      (when (state/in? sm :record)
        (sock/send! socket 
          {:x (. e -pageX)
           :y (. e -pageY)
           :offset (- (current-timestamp-ms) @inital-timestamp-ms)})))))

