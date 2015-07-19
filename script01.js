//console.log("Hi this works!");

$(document).ready(function() {

	$("#empInfo").submit(function(event){
		
		$("body").on("click", "#removeButton", function() {
			$(this).closest(".employee").remove();
		});// this is the close button close
	
		event.preventDefault();
		var infoHolder = {}; // creating an empty object that will hold the employee information
		var $inputs = $("#empInfo :input");
		
		$inputs.each(function() {
			infoHolder[this.name] = $(this).val(); //grab the infor
			// and place the infomratoin in the infoHolder object
			/*$("body").append("<div></div>");
			var $newEmp = $("body").children().last();
			$newEmp.append("<p>" + infoHolder[this.name] + "</p>");
			$('body').append("<button class= 'removeEmp' > X </button>");*/
			}); // ending inputs.each 

			/*var firstName = infoHolder.firstname;
			var lastName = infoHolder.lastname;
			var empNumber = infoHolder.employeenumber;
			var title = infoHolder.emptitle;
			var lastReviewScore = infoHolder.lastreviewscore;
			var salary = infoHolder.salary;*/
			addEmpTo(infoHolder.firstname, infoHolder.lastname, infoHolder.employeenumber, infoHolder.emptitle, infoHolder.lastreviewscore, infoHolder.salary);

			function addEmpTo(first, last, num, title, review, salary) {
				var reviewScore = "review"+infoHolder.lastreviewscore;
				$("#empFinalInfo").prepend("<div class='employee " + reviewScore +" '><p>First Name: " + first +" </p><p>Last Name: " +
				last+ " </p><p>Employee Number: "+num+"</p><p>Title: "+ title + " </p><p>Review Score: "+review+" </p><p>Salary: "+ salary+
				" </p><br><button id='removeButton'>Close</button></div>");
				console.log(reviewScore);
		} // end addEmpTo function
		
	}); // ending submit function
}); // ending document ready


//addEmp(infoHolder);
//console.log(infoHolder.firstName);