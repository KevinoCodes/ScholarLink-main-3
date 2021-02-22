var studentsthismonth
var studentslastmonth
var studentstwomonthsago

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");

function savestudents() {
  var studentsthismonth = document.getElementById('studentsthismonth').value;
  var studentslastmonth = document.getElementById('studentslastmonth').value;
  var studentstwomonthsago= document.getElementById('students2monthsago').value;
  console.log(studentsthismonth, studentslastmonth,studentstwomonthsago)
}


var myLineChart = new Chart(ctx, {
  
  type: 'bar',
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [{
      label: "Revenue",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [10, 6, 5, 4, 2, studentsthismonth],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 10,
          maxTicksLimit: 10
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
