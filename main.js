function validateForm() {
	//fields
	var first_name = document.getElementById( "first_name" );
	var last_name = document.getElementById( "last_name" );
	var zip_code = document.getElementById( "zip_code" );

	var error_message = "<p id='errors' style='color:red;'>";
	var field_error;
	
	field_error = Form.validateNotEmpty( first_name );

	if ( field_error != ''){
		
		error_message = error_message + "First name" + field_error + "</br>";
	}

	field_error = Form.validateLength( first_name );

	if ( field_error != '' ){
		error_message = error_message + "First name" + field_error + "</br>";
	}

	field_error = Form.validateNotEmpty( last_name );

	if ( field_error != ''){
		error_message = error_message+ "Last name" + field_error + "</br>";
	}

	field_error = Form.validateLength( last_name );

	if ( field_error != ''){
		error_message = error_message + "Last name" + field_error + "</br>";
	}


	field_error = Form.validateNotEmpty( zip_code );

	if ( field_error != '' ){

		error_message = error_message + "Zip code" + field_error + "</br>";

	}

	field_error = Form.validateZipCode( zip_code );

	if ( field_error != '' ){
		error_message = error_message + "Zip code" + field_error + "</br>";
	}

	error_message = error_message + "</p>";
	writeErrorsToElement( error_message, "errors" );
}

function writeErrorsToElement ( error_string, element_id ) {
	document.getElementById( element_id ).innerHTML = error_string;
}