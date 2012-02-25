(ns alephtest.core
  (:use lamina.core aleph.http hiccup.core hiccup.page compojure.core)
  (:require [compojure.route :as route]))

(defn render-html [& content]
  (html5
    [:head [:title "Websocket demo"] (include-js "js/cljs.js")]
    [:body content]))

(def index-html
  [:div
    [:div [:input {:type "text" :value "Hello world"}]]
    [:textarea#socketOuput {:rows 15 :cols 30 :readonly true}]])

(defn handle-websocket [channel handshake]
  (siphon (map* #(str "balh-" %) channel) channel))

(defroutes my-app 
  (GET "/" [] (render-html index-html))
  (GET "/socket" [] (wrap-aleph-handler handle-websocket))
  (route/resources "/")
  (route/not-found (render-html [:p "Page not found"])))

(defn -main []
  (start-http-server (wrap-ring-handler my-app) {:port 8080 :websocket true}))
