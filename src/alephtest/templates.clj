(ns alephtest.templates
  (:use hiccup.core hiccup.page))

(defn layout [& content]
  (html5
    [:head 
      [:title "Websocket demo"]
      (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js")]
    [:body 
      [:div#container
        content]
      (include-js "js/cljs.js")]))

(defn index-html []
  (layout
    [:div
      [:div [:input {:type "text" :value "Hello world"}]]
      [:textarea#socketOuput {:rows 15 :cols 30 :readonly true}]]))

(defn not-found-html []
  (layout
    [:p "Page not found"]))
