
var trace1 = {
  x: [],
  y: [],
  name: 'roll',
  mode: 'lines',
  line: {color: 'red',  shape: 'line'}
};

var trace2 = {
  x: [],
  y: [],
  name: 'pitch',
  mode: 'lines',
  line: {color: 'green',  shape: 'line'}
};

var trace3 = {
  x: [],
  y: [],
  name: 'yaw',
  yaxis: 'y2',
  mode: 'lines',
  line: {color: 'blue',  shape: 'line'}
};

var layout = {
  title:'Plot',
  xaxis: {
    type: 'date',
    //domain: [0, 1],
    showticklabels: false
  },
  yaxis: {
	  //domain: [0.5,1]
	  },
 
  yaxis2: {
    anchor: 'x',
   // domain: [0, 0.5],
    overlaying: "y",
	side: 'right'
  }
}

Plotly.plot('graph', [trace1,trace2,trace3], layout	);

