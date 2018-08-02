function convertToFahrenheit(num) {
	console.log(num);
	var fahrenheitNum = num * 9/5 + 32;
	return fahrenheitNum; 
}

function convertToCelsius(num) {
	var celsiusNum = (num - 32) * 5/9;
	return celsiusNum;
}

function getValF() {
	var fahrenheitInput = $('#f').val();
	fahrenheitInput = parseFloat(fahrenheitInput);
	console.log(fahrenheitInput);
	return fahrenheitInput;
}

function getValC() {
	var celsiusInput = $('#c').val();
	celsiusInput = parseFloat(celsiusInput);
	return celsiusInput;
}

function fahrenheitHelper(e) {
	var value = convertToCelsius(getValF());
	$('#c').attr('value', value);
}

function celsicusHelper() {
	var value = convertToFahrenheit(getValC());
	$('#f').attr('value', value);
}

$('#f').keyup(fahrenheitHelper);
$('#c').keyup(celsicusHelper);