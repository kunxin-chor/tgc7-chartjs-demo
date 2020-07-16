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
    labels: ["Jan", "Feb", "March"],
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

document.querySelector('#change-btn').addEventListener('click', function(){
    barChart.data.datasets[0].data = [900, 200, 750];
    barChart.update();
})

document.querySelector('#add-btn').addEventListener('click', function(){
    let label = document.querySelector('#label').value;
    barChart.data.labels.push(label);

    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let colorString = `rgb(${r}, ${g}, ${b})`

    barChart.data.datasets[0].data.push(Math.floor(Math.random() * 1000) + 300);
    barChart.data.datasets[0].backgroundColor.push(colorString);
    barChart.update();
})