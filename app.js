$(function () {
	$("table").tableSortable();

	$("form").on("submit", function (evt) {
		evt.preventDefault();
		let movieEntry = createTableRow($("#movieTitle").val(), $("#rating").val());
		$("#rating").val("");
		$("#movieTitle").val("");
		$("table").append(movieEntry);
		displayOrHideTh();
	});

	$("table").on("click", "button", function () {
		$(this).parents("tr").remove();
		displayOrHideTh();
	});
});

function createTableRow(title, rating) {
	return `<tr>
                <td>${title}</td>
                <td>${rating}</td>
                <td><button>Delete</button></td>
             </tr>`;
}

function displayOrHideTh() {
	if ($("tbody").has("tr").length > 0) {
		$("thead").css("display", "");
	} else {
		$("thead").css("display", "none");
	}
}
