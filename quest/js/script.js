let currentHealth = 2;
let swordFlag = false;
let ringFlag = false;

function startGame(){
	document.querySelector(".start-header").style.display = "none";
	document.querySelector(".button-start-game").style.display = "none";
	document.querySelector(".health-header").style.display = "inline";
	document.querySelector(".start-location").style.display = "inline";
}
function updateHealth(howMuch){
	currentHealth += howMuch;
	document.querySelector(".health-header p").innerHTML = "Ваше текущее здоровье - " + currentHealth;
	if (currentHealth <= 0){
		gameOver();
	}
}

function comeForest(){
	document.querySelector(".start-location").style.display = "none";
	document.querySelector(".forest").style.display = "inline";
}

function comeRight(){
	updateHealth(-1);
	document.querySelector(".forest").style.display = "none";
	document.querySelector(".right").style.display = "inline";
}

function comeLeft(){
	swordFlag = true;
	document.querySelector(".forest").style.display = "none";
	document.querySelector(".left").style.display = "inline";
}

function continueFromTurn(){
	document.querySelector(".left").style.display = "none";
	document.querySelector(".right").style.display = "none";
	document.querySelector(".meet-with-alch").style.display = "inline";
}

function eat(){
	updateHealth(1);
	document.querySelector(".meet-with-alch").style.display = "none";
	document.querySelector(".offer-sleep p").innerHTML = "Бернард рад, что вы приняли его предложение. " + document.querySelector(".offer-sleep p").innerHTML
	document.querySelector(".offer-sleep").style.display = "inline";
}

function notEat(){
	document.querySelector(".meet-with-alch").style.display = "none";
	document.querySelector(".offer-sleep p").innerHTML = "Бернард, кажется, немного расстроился. " + document.querySelector(".offer-sleep p").innerHTML
	document.querySelector(".offer-sleep").style.display = "inline";
}

function sleep(){
	document.querySelector(".offer-sleep").style.display = "none";
	document.querySelector(".sleep").style.display = "inline";
	gameOver();
}

function continueJourney(){
	document.querySelector(".offer-sleep").style.display = "none";
	document.querySelector(".come-next").style.display = "inline";
}

function fight(){
	document.querySelector(".come-next").style.display = "none";
	if (swordFlag){
		updateHealth(-1);
	}else{
		updateHealth(-2);
	}
	if (currentHealth > 0){
		ringFlag = true;
		document.querySelector(".village").innerHTML = "В ходе битвы вы убиваете монстра и получаете кольцо. " + document.querySelector(".village").innerHTML;
		gameEndVillage();
		document.querySelector(".village").style.display = "inline";
	}
}

function talkTo(){
	document.querySelector(".come-next").style.display = "none";
	document.querySelector(".talk-to-monstr").style.display = "inline";
}

function confirmGuild(){
	document.querySelector(".health-header").style.display = "none";
	document.querySelector(".end-game").style.display = "inline";
	document.querySelector(".end-game p").innerHTML = "Ваша концовка - Гильдия Орков!"
	document.querySelector(".talk-to-monstr").style.display = "none";
	document.querySelector(".guild").style.display = "inline";
}

function denyGuild(){
	document.querySelector(".talk-to-monstr").style.display = "none";
	gameEndVillage();
	document.querySelector(".village").style.display = "inline";
}

function runAway(){
	document.querySelector(".come-next").style.display = "none";
	gameEndVillage();
	document.querySelector(".village").innerHTML = "Вы убежали от монстра, хотя он особо и не гнался за вами. " + document.querySelector(".village").innerHTML
	document.querySelector(".village").style.display = "inline";
}

function comeLake(){
	document.querySelector(".start-location").style.display = "none";
	document.querySelector(".lake").style.display = "inline";
}

function swimOverLake(){
	updateHealth(-1);
	document.querySelector(".bush p").innerHTML = "Переплывая озеро вы очень сильно замерзли, но все же добираетесь до противоположного берега.  " + document.querySelector(".bush p").innerHTML;
	document.querySelector(".lake").style.display = "none";
	document.querySelector(".bush").style.display = "inline";
}

function avoidLake(){
	document.querySelector(".lake").style.display = "none";
	document.querySelector(".bush p").innerHTML = "Потратив прилично времени вы все-таки находите мост и переходите через озеро. " + document.querySelector(".bush p").innerHTML;
	document.querySelector(".bush").style.display = "inline";
}

function eatBerry(){
	updateHealth(+1);
	document.querySelector(".bush").style.display = "none";
	document.querySelector(".come-next").style.display = "inline";
}
function avoidBerry(){
	document.querySelector(".bush").style.display = "none";
	document.querySelector(".come-next").style.display = "inline";
}

function gameOver(){
	document.querySelector(".health-header p").innerHTML = "Вы погибли...";
	document.querySelector(".death").style.display = "inline";
}

function gameEndVillage(){
	document.querySelector(".health-header").style.display = "none";
	document.querySelector(".end-game").style.display = "inline";
	document.querySelector(".end-game p").innerHTML = "Ваша концовка - Остановка в деревне!"
}