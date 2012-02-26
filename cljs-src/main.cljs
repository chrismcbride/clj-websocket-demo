(ns clj-websocket-demo.main
  (:require [clj-websocket-demo.websocket :as sock]
            [goog.json :as json])
  (:use [jayq.core :only [$ bind]]
        [clj-websocket-demo.js-utils :only [log clj->js current-timestamp-ms]]))

(defn ^:export init []
  (let [socket (sock/create-socket #(log (. % -data)))
        inital-timestamp-ms (current-timestamp-ms)]
    (bind ($ :body) :mousemove
      (fn [e] 
        (sock/send! socket 
          (json/serialize 
            (clj->js 
              {:x (. e -pageX)
               :y (. e -pageY)
               :offset (- (current-timestamp-ms) inital-timestamp-ms)}))))))) 
