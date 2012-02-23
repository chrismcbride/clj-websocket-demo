(ns alephtest.core
  (:import java.io.File)
  (:use lamina.core aleph.http hiccup.core hiccup.page))

(defn render-html []
  (html 
    (include-js "cljs.js")
    [:input {:type "text" :value "Hello world"}]))

(defn handle-websocket [channel handshake]
  (siphon (map* #(str "balh-" %) channel) channel))

(defn handle-http [channel request]
  (enqueue channel
    {:status 200
     :headers {"content-type" "text/html"}
     :body (cond 
             (. (:uri request) (endsWith ".js")) (File. (str "public/js" (:uri request)))
             :else (render-html))}))

(defn send-response [channel request]
  (if (:websocket request)
    (handle-websocket channel request)
    (handle-http channel request)))

(defn -main []
  (start-http-server send-response {:port 8080 :websocket true}))
