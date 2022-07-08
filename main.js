 
let ctx = document.getElementById('chart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: 'Pix por Setor',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                '#98d56a',
                '#d4d46a',
                '#111d06;',
                '#777a75;',
                '#e5e5e5',

            ],

            borderWidth: 0
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});