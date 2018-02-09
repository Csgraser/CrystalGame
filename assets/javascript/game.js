$(document).ready(function () {
	var randomNumber = Math.floor(Math.random() * 101 + 19)

	var number1 = Math.floor(Math.random() * 11 + 1)
	var number2 = Math.floor(Math.random() * 11 + 1)
	var number3 = Math.floor(Math.random() * 11 + 1)
	var number4 = Math.floor(Math.random() * 11 + 1)
	var total = 0;
	var wins = 0;
	var losses = 0;

	$("#wins").text(wins);
	$("#losses").text(losses);

	reset();

	function reset() {
		randomNumber = Math.floor(Math.random() * 101 + 19);
		$("#number-to-guess").text(randomNumber);
		number1 = Math.floor(Math.random() * 11 + 1);
		number2 = Math.floor(Math.random() * 11 + 1);
		number3 = Math.floor(Math.random() * 11 + 1);
		number4 = Math.floor(Math.random() * 11 + 1);
		total = 0;
		$("#totalScore").text(total);

	}

	function winner() {
		alert("You Win!");
		wins++;
		$('#wins').text(wins);
		reset();
	}

	function loser() {
		alert("You Lose! LOSER!");
		losses++;
		$('#losses').text(losses);
		reset();
	}

	$('#number1').on('click', function () {
		total = total + number1;
		$('#totalScore').text(total);
		if (total == randomNumber) {
			winner();
		}
		else if (total > randomNumber) {
			loser();
		}

	});

	$('#number2').on('click', function () {
		total = total + number2;
		$('#totalScore').text(total);
		if (total == randomNumber) {
			winner();
		}
		else if (total > randomNumber) {
			loser();
		}

	});

	$('#number3').on('click', function () {
		total = total + number3;
		$('#totalScore').text(total);
		if (total == randomNumber) {
			winner();
		}
		else if (total > randomNumber) {
			loser();
		}

	});

	$('#number4').on('click', function () {
		total = total + number4;
		$('#totalScore').text(total);
		if (total == randomNumber) {
			winner();
		}
		else if (total > randomNumber) {
			loser();
		}

	});

});