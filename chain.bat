echo ^<!doctype html^> ^<html lang="en"^> ^<head^> ^<meta charset='utf-8'^> ^<style^> >out.txt
type resources\public\css\autocomplete.css >>out.txt
echo ^</style^> ^</head^> ^<body^> ^<script^> >>out.txt
type resources\public\js\d3.v4.min.js >>out.txt
type resources\public\js\multilinechart.js >>out.txt
echo ^</script^> ^<div id="app"^> ^</div^> ^<script^> >>out.txt
type out\main.js >>out.txt
echo ^</script^> ^</body^> ^</html^> >>out.txt
del robohedger.html
ren out.txt robohedger.html
