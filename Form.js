//1)Ensure that no fields are empty

//2)Names in between 3 to 50 characters

//3)Zip code -> only numbers

//4)Give useful feedback to user in #errors div

//5)Do not allow page to refresh

var Form = {

	"validateLength" : function( element ){
		var element_length = element.value.length;
		
		//console.log(element_length);

		//if element is not empty continue with check
		if(  (element_length != null && element_length != undefined) && element_length > 0 ) {
			//console.log( "value is not empty" );
			
			if( element_length < 3 ||  element_length > 50 ){
				//console.log( "Please make sure element_value is between 3 to 50 characters." );
				Form.div_errors.innerHTML += "<p style='color:red;'>Name should be between 3 and 50 characters</p>";
			}
		} else {
			//console.log( "Value is empty" );
			Form.div_errors.innerHTML += "<p style='color:red;'>Please enter a name.</p>";

		}
		//console.log( first_name.value );
		
	},
	"validateZipCode" : function( element ) {
		var element_value = element.value;
		if (element_value != undefined && element_value != null){
			//Checks if element value matches Regular Expression of 5 digits
			if(!(element.value.match(/^\d\d\d\d\d$/))){
				//console.log("zip code is not right");
				Form.div_errors.innerHTML += "<p style='color:red;'>Please check your zip code</p>";
			}
		} else {
			//console.log("zipcode is not right");
			Form.div_errors.innerHTML += "<p style='color:red;'>Please enter your zip code</p>";
		}
	},
	"clearErrors" : function( element ){
		Form.div_errors.innerHTML = "";
	},
	"div_errors" : document.getElementById("errors"),

};

