$(document).ready(function() {
	tableInit();
});

function tableInit() {
	$(".js-table-inward").kendoGrid({
		sortable: true,
		filterable: true,
		scrollable: false,
		sortable: {
			mode: "multiple",
			allowUnsort: true,
			showIndexes: true
		},
		columnMenu: true,
		
	});
}