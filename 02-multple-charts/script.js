// state variables
let data = [1200, 1000, 900];
let bgColors = ["rgb(255, 99, 132, 0.2)", "green", "blue"];
let labels = ["Lighting Bolt Party", "Warhammer Party", "Star Trek Party"];


// initialise the bar chart
let barChartContext = document.querySelector('#bar-chart').getContext('2d');

let options = {
      scales: {
          yAxes:[{
              ticks :{
                  beginAtZero: true
              }
          }]
      }
  };

let barChart = new Chart(barChartContext, {
  type: "bar",
  data: {
    labels: labels ,
    datasets: [
      {
        label: "# of votes",
        data: data,
        backgroundColor: bgColors,
        borderColor:['black', 'red', 'green'],
        borderWidth:1
      }
    ]
  },
  options: options
});


// initialise the line chart
let lineChartContext = document.querySelector("#line-chart").getContext('2d');
let lineChart = new Chart(lineChartContext, {
    type:"line",
    data: {
        labels: labels,
        datasets: [
            {
                label: "# of votes",
                data: data,
                backgroundColor: 'red',
                borderColor: 'red',
                borderWidth: 1,
                fill: false
            }
        ]
    },
    options: options
})

let pieChartContext = document.querySelector("#pie-chart").getContext('2d');
let pieChart = new Chart(pieChartContext, {
    type:"pie",
    data: {
    labels: labels ,
    datasets: [
      {
        label: "# of votes",
        data: data,
        backgroundColor: bgColors,
        borderColor:['black', 'red', 'green'],
        borderWidth:1
      }
    ]
  }
})
