(ns alephtest.server
  (:use lamina.core aleph.http compojure.core)
  (:require [compojure.route :as route]
            [alephtest.templates :as tmpl]))

(defn handle-websocket [channel handshake]
  (receive-all channel #(println "message:" %)))

(defroutes my-app 
  (GET "/" [] (tmpl/index-html))
  (GET "/socket" [] (wrap-aleph-handler handle-websocket))
  (route/resources "/")
  (route/not-found (tmpl/not-found-html)))

(defn -main []
  (start-http-server (wrap-ring-handler my-app) {:port 8080 :websocket true}))
