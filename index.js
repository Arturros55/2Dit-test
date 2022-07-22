// ЗАДАНИЕ 1

document.querySelectorAll('.acc').forEach((el) => {
	el.addEventListener('click', () => {
		let content = el.nextElementSibling;
		if(content.style.maxHeight) {
			document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
		} else {
			document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	})
})

// ЗАДАНИЕ 4

let element = document.getElementById('phone');
let maskOptions = {
  mask: '+{7} (000) 000-00-00',
  lazy: false
};
let mask = IMask(element, maskOptions);

// ЗАДАНИЕ 5

const ctx1 = document.getElementById('myChart1');
const myChart1 = new Chart(ctx1, {
	type: 'doughnut',
    data: {
        labels: ['Россия', 'Казахстан', 'Узбекистан'],
        datasets: [{
            data: [650, 400, 250],
            backgroundColor: [
                'rgba(232, 60, 70, 1)',
                'rgba(249, 166, 32, 1)',
                'rgba(71, 68, 68, 1)'
            ],
            borderColor: [
                'rgba(232, 60, 70, 1)',
                'rgba(249, 166, 32, 1)',
                'rgba(71, 68, 68, 1)'
            ],
            borderWidth: 5
        }]
    },
    options: {
		 plugins: {
			legend: {
				position:"bottom",
				align:"start",
				labels: { 
					usePointStyle: true,
					padding: 20
				}
			}
		 },
        scales: {
			xAxes: [{
				gridLines: {
				  show: true
				}
			 }],
			 yAxes: [{
				gridLines: {
				  show: false
				}
			 }]
        },
    },
})

const ctx2 = document.getElementById('myChart2');
const myChart2 = new Chart(ctx2, {
	type: 'doughnut',
    data: {
        labels: ['Тюмень', 'Ташкент', 'Нур-Слутан', 'Петербург', 'Алма-Аты'],
        datasets: [{
            data: [200, 220, 220, 450, 210],
            backgroundColor: [
                'rgba(232, 60, 70, 1)',
                'rgba(71, 68, 68, 1)',
                'rgba(249, 166, 32, 1)',
					 'rgba(0, 95, 167, 1)',
					 'rgba(103, 103, 103, 1)'

            ],
            borderColor: [
					'rgba(232, 60, 70, 1)',
					'rgba(71, 68, 68, 1)',
					'rgba(249, 166, 32, 1)',
					'rgba(0, 95, 167, 1)',
					'rgba(103, 103, 103, 1)'
            ],
            borderWidth: 5
        }]
    },
    options: {
		plugins: {
			legend: {
				position:"bottom",
				align:"start",
				labels: { 
					usePointStyle: true,
					padding: 20,
					textAlign: 'center'
				}
			}
		 },
      scales: {
			xAxes: [{
				gridLines: {
				  show: true
				}
			 }],
			 yAxes: [{
				gridLines: {
				  show: false
				}
			 }]
        },
    },
})

const ctx3 = document.getElementById('myChart3');
const myChart3 = new Chart(ctx3, {
	type: 'doughnut',
    data: {
        labels: ['Россия', 'Казахстан', 'Узбекистан'],
        datasets: [{
            data: [65, 40, 25],
            backgroundColor: [
                'rgba(232, 60, 70, 1)',
                'rgba(249, 166, 32, 1)',
                'rgba(71, 68, 68, 1)'
            ],
            borderColor: [
                'rgba(232, 60, 70, 1)',
                'rgba(249, 166, 32, 1)',
                'rgba(71, 68, 68, 1)'
            ],
            borderWidth: 5
        }]
    },
    options: {
		plugins: {
			legend: {
				position:"bottom",
				align:"start",
				labels: { 
					usePointStyle: true,
					padding: 20
				}
			}
		 },
        scales: {
			xAxes: [{
				gridLines: {
				  show: true
				}
			 }],
			 yAxes: [{
				gridLines: {
				  show: false
				}
			 }]
        },
    },
})

const ctx4 = document.getElementById('myChart4');
const myChart4 = new Chart(ctx4, {
	type: 'doughnut',
    data: {
        labels: ['Тюмень', 'Ташкент', 'Нур-Слутан', 'Петербург', 'Алма-Аты'],
        datasets: [{
            data: [20, 22, 22, 45, 21],
            backgroundColor: [
                'rgba(232, 60, 70, 1)',
                'rgba(71, 68, 68, 1)',
                'rgba(249, 166, 32, 1)',
					 'rgba(0, 95, 167, 1)',
					 'rgba(103, 103, 103, 1)'

            ],
            borderColor: [
					'rgba(232, 60, 70, 1)',
					'rgba(71, 68, 68, 1)',
					'rgba(249, 166, 32, 1)',
					'rgba(0, 95, 167, 1)',
					'rgba(103, 103, 103, 1)'
            ],
            borderWidth: 5
        }]
    },
    options: {
		plugins: {
			legend: {
				position:"bottom",
				align:"start",
				labels: { 
					usePointStyle: true,
					padding: 20
				}
			}
		 },
        scales: {
			xAxes: [{
				gridLines: {
				  show: true
				}
			 }],
			 yAxes: [{
				gridLines: {
				  show: false
				}
			 }]
        },
    },
})
 