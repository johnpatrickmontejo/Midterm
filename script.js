	function add(char) {
		var display = document.getElementById('display');
		display.value = display.value + char
	}

	function sub(char) {
		var display = document.getElementById('display');
		display.value = display.value - char
	}

	function multi(char) {
		var display = document.getElementById('display');
		display.value = display.value * char
	}

	function div(char) {
		var display = document.getElementById('display');
		display.value = display.value / char
	}

	function modulo(char) {
		var display = document.getElementById('display');
		display.value = display.value % char
	}

	function cal(char) {
		var display = document.getElementById('display');
		var result = eval(display.value);
		document.getElementById('result').value = result;
	}

	function clear(char) {
		document.getElementById('display').value="";
		document.getElementById('result').value="";
	}

	function equal(char) {
		var display = document.getElementById('display');
		var result = eval(display.value);
		document.getElementById('display').value= var display;
		document.getElementById('result').value= var result;
	}
