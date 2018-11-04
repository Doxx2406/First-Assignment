function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
var  minNumber = 3;
	var maxNumber = 8;
	var randomNumber = getRandomInt(minNumber, maxNumber);
	var count = 0;
	do{
		count++;
		if (count > 10)
		{
			alert('Sorry, you are out of guesses!! ');
			break;
		}
		var x = prompt("Input your lucky number: ");
		
		if (x != randomNumber )
			alert ('Oops! Sorry, that is not the number. Try again!!!');
		alert ("You have " + (10 - count) + " guesses remaining");
	
		
	} while (x !=  randomNumber  && count <= 10); 
	if (x  ==  randomNumber )
		alert('Congratulations!! You got it right');
	
