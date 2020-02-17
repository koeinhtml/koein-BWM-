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
		},
		columnMenu: true,
	});

	$(".js-table-inward-select").kendoGrid({
		sortable: true,
		filterable: true,
		scrollable: false,
		sortable: {
			mode: "multiple",
			allowUnsort: true,
		},
		columnMenu: true,
	});




}
