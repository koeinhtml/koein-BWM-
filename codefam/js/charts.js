$(document).ready(function() {
	projectsStatusChart();
	serviceTypeChart();
});

function projectsStatusChart() {
	var chart = c3.generate({
		bindto: '#projects-status-chart',
    data: {
        columns: [
            ['data1', 30],
            ['data2', 40],
            ['data3', 30],
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
            ['data1', 20],
            ['data2', 30],
            ['data3', 20],
            ['data4', 30],
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