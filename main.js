function validateForm() {
	Form.clearErrors( "errors" );
	Form.validateLength(document.getElementById('first_name'));
	Form.validateLength(document.getElementById('last_name'));
	Form.validateZipCode(document.getElementById('zip_code'));

	return false;
}