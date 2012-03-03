(defproject clj-websocket-demo "1.0.0"
  :main clj-websocket-demo.server
  :dependencies [
    [org.clojure/clojure "1.4.0-beta3"]
    [crate "0.1.0-SNAPSHOT"]
    [waltz "0.1.0-SNAPSHOT"]
    [noir-async "0.1.4"]
    [jayq "0.1.0-SNAPSHOT"]]
  :plugins [[lein-cljsbuild "0.1.1"]]
  :cljsbuild {
    :builds [{
      :source-path "cljs-src"
      :jar true
      :compiler {
        :output-to "resources/public/js/cljs.js"
 ;       :optimizations :advanced
        :optimizations :simple
        :pretty-print true}}]})
