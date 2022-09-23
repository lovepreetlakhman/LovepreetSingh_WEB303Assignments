/*
	WEB 303 Assignment 1 - jQuery
	Lovepreet Singh
*/

$("document").ready(() => {

	const yearlySalary = $("#yearly-salary");
	const techPercent = $("#percent");
	const techTotal = $("#amount");

	function calculateExpense(){
		let amount = yearlySalary.val() * techPercent.val() / 100;
		techTotal.text(`${amount.toFixed(2)}`);
	}
	yearlySalary.keyup(calculateExpense);
	techPercent.keyup(calculateExpense);
});
