$(document).ready(function() {
	projectsStatusChart();
	serviceTypeChart();
	activeUserChart();
	salesWeightedCustomerChart();
	ongoingCustomersChart();
	totalInvoicesChart();
});

function projectsStatusChart() {
	var chart = c3.generate({
		bindto: '#projects-status-chart',
		data: {
				columns: [
						['Completed', 30],
						['In process', 40],
						['Pending', 30],
				],
				type : 'donut',
		},
		color: {
			pattern: ['#644499', '#3dad97', '#4483ce'],
		},
		legend: {
			hide: true,
		},
		donut: {
			width: 13,
			label: {
				show: false
			}
		}
	});

}

function serviceTypeChart() {
	var chart = c3.generate({
		bindto: '#service-type-chart',
		data: {
				// iris data from R
				columns: [
						['Type Approval', 20],
						['Retrofit', 30],
						['Commissioning', 20],
						['Consultancy', 30],
				],
				type : 'pie',
		},
		color: {
			pattern: ['#644499', '#3dad97', '#4483ce', '#36489e'],
		},
		legend: {
			hide: true,
		},
		
	});

}

function activeUserChart() {
	var chart = c3.generate({
		bindto: '#active-user-chart',
		data: {
			x: 'x',
			columns: [
				['x', '2019-06-04', '2019-06-05', '2019-06-06', '2019-06-07', '2019-06-08', '2019-06-09'],
				['W.Wannous', 8, 2, 4, 2, 7, 2],
				['JAttoue', 6, 5, 6, 4, 7, 3],
				['C.Adourian', 4, 7, 2, 5, 1, 7],
				['Marie.W', 4, 2, 7, 2, 5, 1]
			],
			type: 'spline',
		},
		color: {
			pattern: ['#644499', '#3dad97', '#4483ce', '#36489e'],
		},
		grid: {
			x: {
				show: false
			},
			y: {
				show: true
			}
		},
		legend: {
			hide: true,
		},
		padding: {
			right: 40,
			left: 50,
		},
		axis : {
			x : {
				type : 'timeseries',
				tick: {
					format: '%d-%m-%Y' // format string is also available for timeseries data
				},
			},
			y : {
				label: {
					text: 'Hours',
					position: 'outer-right'
				}
			},
		},
		point: {
			show: false
		}
	});

}

function salesWeightedCustomerChart() {
	var chart = c3.generate({
		bindto: '#sales-weighted-customer-chart',

		data: {
			columns: [
				
				['data1',100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
				['data2', 5200, 2000, 4200, 3000, 5000, 3500, 4000, 2000, 4200, 3000],
			],
			colors: {
				data1: '#1919a6',
				data2: '#7a4dff',
			},
			color: function (color, d) {
					return d.id && d.id === 'data1' ? d3.rgb(color).brighter(d.value / 16) : color;
			},
		 axes: {
				data1: 'y2',
				data2: 'y'
			},
			type: 'bar',
			types: {
				data2: 'spline',
			},
		},
		legend: {
			hide: true,
		},
		padding: {
			top: 20,
			left: 50,
		},
		axis: {
			x: {
				type: 'category',
				categories: ['LKJFD JHKJLH', 'OHJOH OIJOS', 'LKJFD JHKJLH', 'OHJOH OIJOS', 'LKJFD JHKJLH', 'OHJOH OIJOS', 'LKJFD JHKJLH', 'OHJOH OIJOS', 'LKJFD JHKJLH', 'OHJOH OIJOS'],
				
				tick: {
					rotate: -30,
				},
			},
			y : {
				label: {
					text: 'NDK',
					position: 'outer-right',
				},
			},
			y2: {
				show: true,
				max: 100,
				tick: {
					// format: d3.format('%')
					format: function (d) { return d + '%'; }
				}
			},
		},
		point: {
			show: false
		},
		bar: {
			width: 40
		},
		grid: {
			x: {
				show: false
			},
			y: {
				show: true
			}
		},
	});
}

function ongoingCustomersChart() {
	var chart = c3.generate({
		bindto: '#ongoing-customers-chart',
    data: {
        // iris data from R
        columns: [
            ['Not Expired', 25],
            ['16 - 30 Dayss', 30],
            ['181 days or more', 20],
            ['31 - 90 Days', 10],
            ['0 - 15 Days', 15],
        ],
        type : 'pie',
    },
    color: {
		  pattern: ['#644499', '#3dad97', '#4483ce', '#36489e', '#5f6c86'],
		},
    legend: {
		  hide: true,
		},
		
	});

}

function totalInvoicesChart() {
	var chart = c3.generate({
		bindto: '#total-invoices-chart',
    data: {
        // iris data from R
        columns: [
            ['Consulting', 40],
            ['Other', 20],
            ['Expenses / travel expenses', 30],
        ],
        type : 'pie',
    },
    color: {
		  pattern: ['#644499', '#3dad97', '#4483ce'],
		},
    legend: {
		  hide: true,
		},
		
	});

}