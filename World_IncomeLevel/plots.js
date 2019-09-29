
var country=["USA",
  "CHN",
  "JPN",
  "DEU",
  "GBR",
  "FRA",
  "IND",
  "ITA",
  "BRA",
  "CAN"];
var eyeFlicker = [20500000000000,
  13600000000000,
  4970000000000,
  4000000000000,
  2830000000000,
  2780000000000,
  2730000000000,
  2070000000000,
  1870000000000,
  1710000000000
  ];

// Create the Trace
var trace1 = {
  x: country,
  y: eyeFlicker,
  marker:{
    color: ['rgba(98,150,180,1)', 'rgba(222,45,38,84)', 'rgba(204,54,28,1)', 'rgba(100,100,204,100)',
    'rgba(80,204,104,3)','rgba(90,160,204,1)', 'rgba(222,49,38,0.8)', 'rgba(70,89,24,1)', 'rgba(204,100,204,1)','rgba(189,204,204,1)']
  },
  type: "bar"
};

// Create the data array for the plot
var data = [trace1];

// Define the plot layout
var layout = {
  title: "Top 10 GDP of 2018",
  yaxis: { title: "GDP" },
  xaxis: { title: "Countries" }
};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);
