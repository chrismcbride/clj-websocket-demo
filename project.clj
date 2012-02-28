(defproject clj-websocket-demo "1.0.0"
  :main clj-websocket-demo.server
  :dependencies [
    [org.clojure/clojure "1.3.0"]
    [cheshire "2.2.0"]
    [noir-async "0.1.4"]
    [jayq "0.1.0-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "0.1.1"]]
  :cljsbuild {
    :builds [{
      :source-path "cljs-src"
      :jar true
      :compiler {
        :output-to "resources/public/js/cljs.js"
        :optimizations :advanced
        :pretty-print true}}]})
