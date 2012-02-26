(ns clj-websocket-demo.views.common
  (:use [noir.core :only [defpartial defpage]]
        [hiccup.page-helpers :only [html5 include-js]]
        [noir-async.core]))

(defpartial layout [& content]
  (html5
    [:head 
      [:title "Websocket demo"]
      (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")
      (include-js "js/cljs.js")]
    [:body 
      [:div#container
        content]]))

(defpage "/" {}
  (layout
    [:div
      [:div [:input {:type "text" :value "Hello world"}]]
      [:textarea#socketOuput {:rows 15 :cols 30 :readonly true}]]
    [:script "clj_websocket_demo.main.init()"]))

(defwebsocket "/socket" {} conn
  (on-receive conn (fn [msg] (println msg)))
  (on-close conn (fn [] (println "Socket down!"))))
