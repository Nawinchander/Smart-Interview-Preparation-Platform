const ctx =
document.getElementById('chart');

new Chart(ctx, {

  type: 'bar',

  data: {

    labels: [
      'Easy',
      'Medium',
      'Hard'
    ],

    datasets: [{
      data: [20, 10, 5]
    }]
  }
});

