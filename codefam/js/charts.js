$(document).ready(function() {
	projectsStatusChart();
	serviceTypeChart();
	activeUserChart();
	salesWeightedCustomerChart();
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
		  pattern: ['#644499', '#4483ce', '#6fc4d2'],
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
		  pattern: ['#4483ce', '#6b7c8f', '#3dad97', '#36489e'],
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
		  pattern: ['#417dc4', '#644499', '#3dad97', '#6fc4d2'],
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
			['data1', 30, 20, 50, 40, 60, 50],
			['data2', 200, 130, 90, 240, 130, 220],
			['data3', 300, 200, 160, 400, 250, 250],
			['data4', 200, 130, 90, 240, 130, 220],
			['data5', 130, 120, 150, 140, 160, 150],
			['data6', 90, 70, 20, 50, 60, 120],
			],
			type: 'bar',
			types: {
				data3: 'spline',
				data4: 'line',
				data6: 'area',
			},
			groups: [
			['data1','data2']
			]
		}
	});
}