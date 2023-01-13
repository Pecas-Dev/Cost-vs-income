var data = [{x: [1920, 1966, 1980, 2002, 2019],
    y: [1236, 6900, 17710, 42409, 68703],
    name: 'Income',
    type: 'scatter'
   },
   {x: [1920, 1966, 1980, 2002, 2019],
    y: [4000, 14950, 68200, 157300, 272900],
    name: 'Real Estate Cost',
    type: 'scatter'
   }];

var layout = {title: 'Income vs Real Estate Cost comparison 1920-2019',
     xaxis: {title: 'Year'},
     yaxis: {title: 'USD'},
     hovermode: 'closest',
     hoverlabel: { bgcolor: "white", font: {size: 20}},
     annotations: [
        {
          text: '*Data source: US Census<br>Bureau\'s Historical Income Tables',
          showarrow: false,
          x: 0.5,
          y: 1.05,
          xref: 'paper',
          yref: 'paper'
        }
     ]
    };

Plotly.newPlot('graph', data, layout);
