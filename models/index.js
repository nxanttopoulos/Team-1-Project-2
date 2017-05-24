



$(".submit").on("click",function(event){
	var newQuery = {

		zipCode : $(".form-control").val().trim();


	};



$.post("/api/models",newQuery);