//1)Ensure that no fields are empty

//2)Names in between 3 to 50 characters

//3)Zip code -> only numbers

//4)Give useful feedback to user in #errors div

//5)Do not allow page to refresh

var Form = {
	"validateNotEmpty" : function ( element ){
		var element_length = element.value.length;
		if( element_length == null || element_length == undefined || element_length <= 0 ){
			return Form.error_empty;
		} else {
			return '';
		}
	},
	"validateLength" : function( element ){
		var element_length = element.value.length;
		
		//console.log(element_length);

		//if element is not empty continue with check
		if(  (element_length != null && element_length != undefined) && element_length > 0 && element_length < 3) {
			//console.log( "value is not empty" );
			return Form.error_less_than_3_char;
		}else if( element_length > 50 ){
				//console.log( "Please make sure element_value is between 3 to 50 characters." );
				return Form.error_greater_than_fifty_char;
		} else {
			//console.log( "Value is empty" );
			return '';

		}
		//console.log( first_name.value );
		
	},
	"validateZipCode" : function( element ) {
		var element_value = element.value;
		if (element_value != undefined && element_value != null){
			//Checks if element value matches Regular Expression of 5 digits
			if(!(element.value.match(/^\d\d\d\d\d$/)) && element_value.length > 0){
				//console.log("zip code is not right");
				return Form.error_format;
			} else {
				return '';
			}
		}
	},
	
	"error_empty" : " field is empty.",
	"error_less_than_3_char" : " field has less than 3 characters.",
	"error_greater_than_fifty_char" : " field has more than 50 characters.",
	"error_format" : " field does not match proper format.",

};

