(ns clj-websocket-demo.views.common
  (:use [noir.core :only [defpartial defpage]]
        [hiccup.page-helpers :only [html5 include-js]]
        [noir-async.core]))

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
      [:textarea#socketOutput {:rows 20 :cols 50 :readonly true}]]
    (include-js "js/cljs.js")
    [:script "clj_websocket_demo.main.init()"]))

(defwebsocket "/socket" {} conn
  (send-message conn "Hello from the server!")
  (on-receive conn (fn [msg] (println msg)))
  (on-close conn (fn [] (println "Socket down!"))))
