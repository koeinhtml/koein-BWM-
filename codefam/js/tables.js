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

	$(".js-project-suplier-table").kendoGrid({
		sortable: true,
		filterable: true,
		scrollable: false,
		sortable: {
			mode: "multiple",
			allowUnsort: true,
		},
		columnMenu: true,
		detailInit: detailInit,
	});

	function detailInit(e) {
		$("<div/>").appendTo(e.detailCell).kendoGrid({
			dataSource: {
        data: [{
            ProjectTaskName: "Task 1",
            ProjectManager: "Joyce Attoue",
            TaskType: "Piping",
            PurchaseOrder: "35122",
            MoneyIssued: "200 000 $",
            PendingAmount: "100 000 $",
            PaidAmount: "100 000 $",
            Status: "100 000 $",
        },
        {
            ProjectTaskName: "Task 2",
            ProjectManager: "Joyce Attoue",
            TaskType: "Piping",
            PurchaseOrder: "35122",
            MoneyIssued: "200 000 $",
            PendingAmount: "100 000 $",
            PaidAmount: "100 000 $",
            Status: "100 000 $",
        },
        {
            ProjectTaskName: "Task 3",
            ProjectManager: "Joyce Attoue",
            TaskType: "Piping",
            PurchaseOrder: "35122",
            MoneyIssued: "200 000 $",
            PendingAmount: "100 000 $",
            PaidAmount: "100 000 $",
            Status: "100 000 $",
        },
        ]
      },
      
			scrollable: false,
			sortable: true,
			columns: [
			{ field: "ProjectTaskName", title:"Project/Task Name" },
			{ field: "ProjectManager", title:"Project Manager" },
			{ field: "TaskType", title:"Task Type" },
			{ field: "PurchaseOrder", title: "Purchase Order" },
			{ field: "MoneyIssued", title: "Money Issued" },
			{ field: "PaidAmount", title: "Money Issued" },
			{ field: "PendingAmount", title: "Pending Amount" },
			{ field: "Status", title: "Status" },
			]
		});
	}
}
