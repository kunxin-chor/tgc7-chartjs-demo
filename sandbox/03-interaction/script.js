function changeData() {
    let data = [44, 50, 32, 47, 88]
    lineChart.data.datasets[0].data = data;
    lineChart.update();
}

document.querySelector('#update').addEventListener('click', function(){
    changeData();
})

let data = [12, 19, 3, 5, 2, 3];
let labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
let bgColors = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)"
];
let borderColors = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)"
];

// Line Chart
let ctx = document.getElementById("line-chart").getContext("2d");
let lineChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: data,
        backgroundColor: bgColors,
        borderColor: borderColors,
        borderWidth: 1,
        fill:false
      }
    ]
  }
});

// Pie Chart
let pieCtx = document.getElementById("pie-chart").getContext("2d");
let pieChart = new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: labels,
    datasets: [
      {
        label: "# of Votes",
        data: data,
        backgroundColor: bgColors,
        borderColor: borderColors,
        borderWidth: 1
      }
    ]
  }
});