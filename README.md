# RoboHedger
Calculates the optimal hedge ratios for the sample financial portfolio.

## Run
Just open robohedger.html above: https://kloimhardt.github.io/robohedger.html
## For development with figwheel
```shell
$ clojure -A:build-dev
```
and open http://localhost:9500 in your browser.
## For production build
First, compile:
```shell
$ clj -m cljs.main --optimizations advanced -c robohedger.core
```
Then generate the single robohedger.html (Windws only):
```shell
C:> chain.bat
```
