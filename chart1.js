



var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Earnings in $',
            data: [3900, 4500, 2900, 4700, 2300, 4300, 6500, 1900, 1800, 1700, 2000, 1400],
            backgroundColor: [
                'rgba(99, 99, 99, 1)',
                
            ],
            borderColor: [
                'rgb(41, 135, 99)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
            }
        });