var chuck = $.getJSON("./js/jokes.json").done(function(chuck) {
	console.log(chuck.value);
	var chuckJokes = chuck.value.map(function(jokes) {
		return(jokes.joke);
	});

	var num = Math.floor((Math.random() * 546) + 1);

	var say = (chuckJokes[num]);
	// console.log(say);

	$('#generate-joke').on('submit', function(e) {
		e.preventDefault();
		console.log('click');
		$('#joke').text(say);
	});
// function getRandom()

// $(document).ready(function() {
//   $
// });
});
