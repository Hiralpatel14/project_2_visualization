

var loadedcsv;
var year_list;
var world_csv;


  
  

// function year_select(arr, id) {
//     var selector = d3.select(`#${id}`);
//     arr.map(function (year) {
//         selector
//             .append("option")
//             .property("value", year)
//             .text(year)


//     })
// }


function dropdown_manager1(country) {
    // console.log(country)
    // Chart building functions go here
    line_graph(country)
    bar_graph(country)
}


// function dropdown_manager2(year) {
//     // console.log(country)
//     // Chart building functions go here
//     bubble_graph(year)

// }


function populate_dropdown(arr, obj_val, id) {
    var selector = d3.select(`#${id}`);
    var values = [];
    arr.map(function (obj) {
        var val = obj[obj_val];
        selector
            .append("option")
            .property("value", val)
            .text(val)
        values.push(val);
    })

}

function bar_graph(country){
    var country_data = world_csv.filter(function (country_obj) {
        return country_obj["Country Name"] === country;
    })[0];
        console.log(country_data)
    var data = [
        {
          x: ['Population(millions)', 'Per Capita($USD)'],
          y: [country_data["2018_pop"]/1000000,country_data["GDP Per Capita "]],
          type: 'bar',
          width: [0.2, 0.2]
        }
      ];
      var layout = {
        title: " Population vs GDP in 2018",
        xaxis: { title: "Data for 2018" },
        yaxis: { title: "In Thousand" },
       
        showlegend: false
    };
      
      Plotly.newPlot('bar', data,layout);
}

function line_graph(country) {
    var country_data = loadedcsv.filter(function (country_obj) {
        return country_obj["Country Name"] === country;

    })[0];
    year_list = Object.keys(country_data).map(function (key) {
        return parseInt(key);

    })
        .filter(function (key) {
            return key >= 2000;
        });
    var value_list = year_list.map(function (key) {
        return parseFloat(country_data[String(key)])
    })
    var trace1 = {
        x: year_list,
        y: value_list,
        type: 'scatter'
    };
    var layout1 = {
        title: "Country's GDP in last two decades",
        xaxis: { title: "Year(2000-2018)" },
        yaxis: { title: "GDP" },
        showlegend: true
    };
    var data = [trace1];
    Plotly.newPlot('Line', data,layout1);
    console.log(value_list)
}
// function bubble_graph(year) {

   //bubble chart code

 
      
  
//     var trace2 = {
//         x: [1, 2, 3, 4],
//         y: [16, 5, 11, 9],
//         type: 'scatter',
//     mode: 'markers',
//         marker: {
//           color: ['rgb(93, 164, 214)', 'rgb(255, 144, 14)',  'rgb(44, 160, 101)', 'rgb(255, 65, 54)'],
//           opacity: [1, 0.8, 0.6, 0.4],
//           size: [40, 60, 80, 100]
//         }
//     };

//     var data = [trace2];
//     var layout = {
//         title: 'Marker Size and Color',
//         showlegend: false,
//         height: 600,
//         width: 600
//       };

//     Plotly.newPlot('bubble', data);
//     console.log(year)
// }
d3.csv("world_income_csv.csv")

    .then(function (csv_data) {
        world_csv = csv_data
        console.log(world_csv )
      
    })

d3.csv("country_gdp.csv")
// d3.csv("gdp_pop_all_years_df.csv")
    .then(function (csv_data) {
        loadedcsv = csv_data
        console.log(loadedcsv)
        populate_dropdown(loadedcsv, "Country Name", "myList1")
        // populate_dropdown(loadedcsv, "Country Name_x", "myList1")
        // dropdown_manager1(loadedcsv[0]["Country Name"])
        // year_select(year_list, "myList2")
        // dropdown_manager2(year_list[0])
    })
