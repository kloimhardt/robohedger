﻿function klmpltgrph(klmdata, klmnodename, klmd3) { 
var svg = klmd3.select(klmnodename),
    margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = svg.attr("width") - margin.left - margin.right,
    height = svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = klmd3.timeParse("%Y%m%d");

var x = klmd3.scaleTime().range([0, width]),
    y = klmd3.scaleLinear().range([height, 0]),
    z = klmd3.scaleOrdinal(klmd3.schemeCategory10);

var line = klmd3.line()
    .curve(klmd3.curveBasis)
    .x(function(d) { return x(d.xx); })
    .y(function(d) { return y(d.yy); });

  x.domain([
    klmd3.min(klmdata, function(c) { return klmd3.min(c.values, function(d) { return d.xx; }); }),
    klmd3.max(klmdata, function(c) { return klmd3.max(c.values, function(d) { return d.xx; }); })
  ]);
/*
  y.domain([
    klmd3.min(klmdata, function(c) { return klmd3.min(c.values, function(d) { return d.yy; }); }),
    klmd3.max(klmdata, function(c) { return klmd3.max(c.values, function(d) { return d.yy; }); })
  ]);
*/
    y.domain([-30000, 30000]);
  z.domain(klmdata.map(function(c) { return c.id; }));

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(klmd3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(klmd3.axisLeft(y))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("fill", "#000")
      .text("EUR");

  var city = g.selectAll(".city")
    .data(klmdata)
    .enter().append("g")
      .attr("class", "city");

  city.append("path")
      .attr("class", "line")
.attr("d", function(d) { return line(d.values); })
.style("stroke", function(d) { return z(d.id); })
.style("fill", "none");

  city.append("text")
      .datum(function(d) { return {id: d.id, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(d.value.xx) + "," + y(d.value.yy) + ")"; })
      .attr("x", 3)
      .attr("dy", "0.35em")
.style("font", "10px sans-serif")
  .text(function(d) { return d.id; });
  }       

var mydataexample=
[{"id":"Swap.10Y.EUR.EURIBOR.3M/1Y.Telerate","values":[{"xx":"20170106","yy":12471.647799971382},{"xx":"20170110","yy":11941.492118234913},{"xx":"20170112","yy":11021.872947484937},{"xx":"20170113","yy":10995.893097117103},{"xx":"20170114","yy":10760.495039479588},{"xx":"20170119","yy":12565.900807558986},{"xx":"20170120","yy":13483.711019736982},{"xx":"20170121","yy":14835.32897323826},{"xx":"20170124","yy":12831.098390503093},{"xx":"20170126","yy":14650.947456641641},{"xx":"20170127","yy":5545.885878605034},{"xx":"20170128","yy":6072.489737991358},{"xx":"20170202","yy":5614.100471058748},{"xx":"20170203","yy":5674.477567983473},{"xx":"20170209","yy":6099.880392563074},{"xx":"20170211","yy":7227.504273046066},{"xx":"20170214","yy":8914.673681836448},{"xx":"20170216","yy":8963.64883823072},{"xx":"20170217","yy":9008.199777560787},{"xx":"20170218","yy":6009.256970495697},{"xx":"20170222","yy":13396.462421704081},{"xx":"20170223","yy":6973.587202569917},{"xx":"20170224","yy":7613.91038546853},{"xx":"20170225","yy":1478.7809878223172},{"xx":"20170302","yy":2740.7125913968484},{"xx":"20170303","yy":3832.9779876586594},{"xx":"20170304","yy":145.42452517995417},{"xx":"20170308","yy":7506.845240590925},{"xx":"20170309","yy":6157.244409166682}]},{"id":"Swap.30Y.EUR.EURIBOR.3M/1Y.Telerate","values":[{"xx":"20170106","yy":-6356.734537234241},{"xx":"20170110","yy":-6277.718043287553},{"xx":"20170112","yy":-5563.9398470854885},{"xx":"20170113","yy":-5562.86828687129},{"xx":"20170114","yy":-5438.788759382564},{"xx":"20170119","yy":-6745.812433391603},{"xx":"20170120","yy":-7002.995813998549},{"xx":"20170121","yy":-7539.497005819172},{"xx":"20170124","yy":-7191.52537424738},{"xx":"20170126","yy":-7928.419063435274},{"xx":"20170127","yy":-4058.6605502918664},{"xx":"20170128","yy":-4340.662678002495},{"xx":"20170202","yy":-3793.9215786977283},{"xx":"20170203","yy":-3761.185345853793},{"xx":"20170209","yy":-3893.112993774485},{"xx":"20170211","yy":-4185.736342548915},{"xx":"20170214","yy":-5450.483786992778},{"xx":"20170216","yy":-5960.408786120824},{"xx":"20170217","yy":-5357.768850413172},{"xx":"20170218","yy":-4644.0161766098045},{"xx":"20170222","yy":-5961.804456941444},{"xx":"20170223","yy":-4730.983854170553},{"xx":"20170224","yy":-5274.794950490616},{"xx":"20170225","yy":-3673.8937185870104},{"xx":"20170302","yy":-9527.824661251943},{"xx":"20170303","yy":-7243.514770117775},{"xx":"20170304","yy":-7617.537492924054},{"xx":"20170308","yy":-10635.356202217264},{"xx":"20170309","yy":-11916.021940713833}]},{"id":"Swap.5Y.EUR.EURIBOR.3M/1Y.Telerate","values":[{"xx":"20170106","yy":-5110.182354520428},{"xx":"20170110","yy":-4356.59996795746},{"xx":"20170112","yy":-3883.132052550323},{"xx":"20170113","yy":-3832.8151515418904},{"xx":"20170114","yy":-3689.09183065319},{"xx":"20170119","yy":-4158.968926894952},{"xx":"20170120","yy":-5497.273677745802},{"xx":"20170121","yy":-6375.036119634419},{"xx":"20170124","yy":-3901.777870017829},{"xx":"20170126","yy":-6459.190672648504},{"xx":"20170127","yy":-578.499710341427},{"xx":"20170128","yy":-798.1842039016857},{"xx":"20170202","yy":-804.5370328664162},{"xx":"20170203","yy":-959.606157043637},{"xx":"20170209","yy":-1355.0133340011473},{"xx":"20170211","yy":-2056.4990587096895},{"xx":"20170214","yy":-3037.656312899228},{"xx":"20170216","yy":-2396.757112685487},{"xx":"20170217","yy":-3237.0190819822833},{"xx":"20170218","yy":-303.0800050569931},{"xx":"20170222","yy":-8884.721552747942},{"xx":"20170223","yy":-4253.75028313394},{"xx":"20170224","yy":-4962.710479893294},{"xx":"20170225","yy":1602.364641204946},{"xx":"20170302","yy":3122.119207643401},{"xx":"20170303","yy":1683.2538795929254},{"xx":"20170304","yy":5504.763107159976},{"xx":"20170308","yy":-2689.388223952781},{"xx":"20170309","yy":-312.0479839565037}]},{"id":"Swap.2Y.EUR.EURIBOR.3M/1Y.Telerate","values":[{"xx":"20170106","yy":-3160.265715582972},{"xx":"20170110","yy":-3739.361026878222},{"xx":"20170112","yy":-4473.279682559937},{"xx":"20170113","yy":-4549.57533536036},{"xx":"20170114","yy":-4622.383373803074},{"xx":"20170119","yy":-4987.288890316898},{"xx":"20170120","yy":-3682.727029171455},{"xx":"20170121","yy":-3248.547452490987},{"xx":"20170124","yy":-5253.146343692569},{"xx":"20170126","yy":-2047.4493058312566},{"xx":"20170127","yy":-5485.874999318501},{"xx":"20170128","yy":-5428.284401479953},{"xx":"20170202","yy":-5780.325703998129},{"xx":"20170203","yy":-5630.243701246245},{"xx":"20170209","yy":-5321.36305874804},{"xx":"20170211","yy":-5221.028228438075},{"xx":"20170214","yy":-3862.4867044244583},{"xx":"20170216","yy":-4642.192794056019},{"xx":"20170217","yy":-4239.386482771083},{"xx":"20170218","yy":-5951.596363259328},{"xx":"20170222","yy":1071.1220101930876},{"xx":"20170223","yy":1995.762190290667},{"xx":"20170224","yy":3388.125698674099},{"xx":"20170225","yy":-1852.3070491865874},{"xx":"20170302","yy":3768.9516940327976},{"xx":"20170303","yy":690.8589761801364},{"xx":"20170304","yy":-62.19946841631461},{"xx":"20170308","yy":10890.670119500804},{"xx":"20170309","yy":12473.590459661158}]}];

function klmgraph(mydata, nodename) {
    var parseTime = d3.timeParse("%Y%m%d");
    for(var i=0; i<mydata.length;i++) {
        for(var j=0; j<mydata[i].values.length;j++) {
            mydata[i].values[j].xx=parseTime(mydata[i].values[j].xx);
        }
    }
    klmpltgrph(mydata, "#"+nodename, d3);
}
