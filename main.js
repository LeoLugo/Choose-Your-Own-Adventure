var play = prompt("Hello, welcome to my game! Would you like to play?").toLowerCase();


if(play === "yes") {
	alert("Let's begin, shall we!");
	alert("You are a caveman during cavemanian days. You are starving and need to find something to eat. Out in the distance you spot a wooly mammoth.");
	var hunt = prompt("Would you like to try and kill the mammoth?").toLowerCase();
	var mamHealth = 100;
	var userHealth = 100;

	if(hunt === "yes") {
		alert("You grab your spear and head out the cave entrance. You stop just ahead of the mammoth.");
		var spear = prompt("The mammoth approaches. Do you want to throw your spear?").toLowerCase();
		
		if(spear === "yes"){
			alert("You throw your spear!");
			hit();

		} 
		else if(spear === "no"){
			alert("You return to your cave without anything to eat.")
			die();
		} else {
			alert("Not a valid response. Refresh to start over.")
		}


	}
	else if (hunt === "no") {
		alert("You decide to stay in your cave and go to sleep.");
		die();
	}
	else {
		alert("Please enter either yes or no. Refresh page to start over");
	}


} else if(play === "no"){
	alert("Maybe next time then!");
} else {
	alert("Please enter either yes or no. Refresh page to start over.");
}

function die() {
	alert("You wake up in the middle of the night surrounded by sabertooth tigers. They attack you and you don't have the strength to fight back so they eat you!")
}

function hit() {
	mamHealth -= Math.round(Math.random() * 20);

	if (mamHealth <= 0) {
		alert("You have killed the mammoth! You go on to conquer the world!")
	}
	else {
		alert("You have hurt the mammoth but it still has " + mamHealth + "% health left!")
		mamAttack();
	}
}

function mamAttack() {
	userHealth -= Math.round(Math.random() * 20);
	if (userHealth <= 0) {
		alert("The hairy elephant has killed you!")
	}
	else {
		alert("The mammoth has attacked you back! You still have " + userHealth + "% health left!")
		hit();
	}
}













