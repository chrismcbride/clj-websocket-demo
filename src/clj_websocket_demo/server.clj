(ns clj-websocket-demo.server
  (:use aleph.http noir.core)
  (:require [noir.server :as nr-server]))

(nr-server/load-views "src/clj_websocket_demo/views/")

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))
        noir-handler (nr-server/gen-handler {:mode mode})]
    (start-http-server
      (wrap-ring-handler noir-handler)
      {:port port :websocket true})))
