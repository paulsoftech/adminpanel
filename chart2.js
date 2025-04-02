






var ctx = document.getElementById('doughnut').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Academic', 'Non-academic', 'Administration', 'Others',],
        datasets: [{
            label: 'Employees',
            data: [42, 12, 8, 6],
            backgroundColor: [
                'rgba(99, 99, 99, 1)',
                'rgba(65, 10, 45, 1)',
                'rgba(255, 9, 86, 1)',
                'rgba(56, 77, 108, 1)',
                
            ],
            borderColor: [
                'rgb(41, 135, 99)',
                'rgba(99, 99, 99, 1)',
                'rgba(65, 10, 45, 1)',
                'rgba(255, 9, 86, 1)',
                
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
            }
        });