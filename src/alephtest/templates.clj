(ns alephtest.templates
  (:use hiccup.core hiccup.page))

(defn layout [& content]
  (html5
    [:head [:title "Websocket demo"] (include-js "js/cljs.js")]
    [:body content]))

(defn index-html []
  (layout
    [:div
      [:div [:input {:type "text" :value "Hello world"}]]
      [:textarea#socketOuput {:rows 15 :cols 30 :readonly true}]]))

(defn not-found-html []
  (layout
    [:p "Page not found"]))
