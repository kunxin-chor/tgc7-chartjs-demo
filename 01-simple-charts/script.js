// grab the drawing context of the canvas
let context = document.querySelector("#bar-chart").getContext("2d");

let options = {
      scales: {
          yAxes:[{
              ticks :{
                  beginAtZero: true
              }
          }]
      }
  };

let barChart = new Chart(context, {
  type: "bar",
  data: {
    labels: ["Lighting Bolt Party", "Warhammer Party", "Star Trek Party"],
    datasets: [
      {
        label: "# of votes",
        data: [1200, 1000, 900],
        backgroundColor: ["rgb(255, 99, 132, 0.2)", "green", "blue"],
        borderColor:['black', 'red', 'green'],
        borderWidth:1
      }
    ]
  },
  options: options
});
