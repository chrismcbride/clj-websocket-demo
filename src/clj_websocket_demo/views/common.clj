(ns clj-websocket-demo.views.common
  (:require [cheshire.core :as json]) 
  (:use [noir.core :only [defpartial defpage]]
        [noir.statuses :only [set-page!]]
        [hiccup.page-helpers :only [html5 include-js]]
        [aleph.redis]
        [noir-async.core]
        [noir-async.utils :only [set-timeout]]))

(def redis (redis-client {:host "localhost"}))

(defpartial layout [& content]
  (html5
    [:head 
      [:title "Websocket demo"]
      (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")]
    [:body 
      [:div#container
        content]]))

(defpage "/" {}
  (layout
    [:div
      [:button#record "record"]
      [:button#stop "stop"]
      [:button#play "play"]
      [:textarea#socketOutput {:rows 20 :cols 50 :readonly true}]]
    (include-js "js/cljs.js")))

(defwebsocket "/socket/:id/record" {:keys [id]} conn
  (on-receive conn (fn [msg] (redis [:rpush id msg]))))

(defwebsocket "/socket/:id/play" {:keys [id]} conn
  (let [inital-time-in-ms (System/currentTimeMillis)]
    (doseq [jsonValue (take-while (comp not nil?) (repeatedly #(deref (redis [:lpop id]))))]
      (let [msOffset (:offset (json/parse-string jsonValue true))
            msDelay (- msOffset (- (System/currentTimeMillis) inital-time-in-ms))]
        (set-timeout msDelay #(send-message conn jsonValue))))))

(set-page! 404 (layout [:span "Page not found!"]))
