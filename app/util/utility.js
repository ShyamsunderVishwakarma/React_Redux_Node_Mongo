export function validateAlpha(data){
	var pattern = /^[a-zA-Z. ]*$/;
	var result = pattern.test(data)

	return result;
}

export function validateNumeric(data){
	var pattern = /^[0-9]*$/;
	var result = pattern.test(data)

	return result;

} 