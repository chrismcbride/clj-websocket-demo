(defproject my-project "1.0.0"
            :main alephtest.core
            :dependencies [[org.clojure/clojure "1.3.0"]
                           [hiccup "1.0.0-SNAPSHOT"]
                           [aleph "0.2.1-alpha2-SNAPSHOT"]]
            :plugins [[lein-cljsbuild "0.0.14"]]
            :cljsbuild {
              :source-path "cljs-src"
              :jar true
              :compiler {
                :output-to "public/js/cljs.js"
                :optimizations :advanced
                :pretty-print true
              }})