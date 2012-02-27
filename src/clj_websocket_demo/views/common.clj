(ns clj-websocket-demo.views.common
  (:use [noir.core :only [defpartial defpage]]
        [noir.statuses :only [set-page!]]
        [hiccup.page-helpers :only [html5 include-js]]
        [aleph.redis]
        [noir-async.core]))

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
  (send-message conn @(redis [:lpop id])))

(set-page! 404 (layout [:span "Page not found!"]))
