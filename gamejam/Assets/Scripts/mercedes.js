#pragma strict
var playerObject : GameObject;
var animalName : String = "Mercedes";
var normalSprite : Sprite;
var angrySprite : Sprite;
var blushSprite : Sprite;
var costumeSprite : Sprite;
var animalBackground : Sprite;
var choice : int;
var promptStyle : GUIStyle;
var promptX : float;
var prompt1Y : float;
var prompt2Y : float;
var prompt3Y : float;
var promptW : float;
var promptH : float;

function Start () {
	playerObject = GameObject.Find("PlayerObject");
	promptStyle = GetComponent(date).promptStyle;
	promptW = GetComponent(date).promptW;
	promptH = GetComponent(date).promptH;
	promptX = GetComponent(date).promptX;
	prompt1Y = GetComponent(date).prompt1Y;
	prompt2Y = prompt1Y + GetComponent(date).promptGap + promptH;
	prompt3Y = prompt2Y + GetComponent(date).promptGap + promptH;
}

function OnGUI() {
	if (GetComponent(date).currentDate == animalName){
		if (playerObject.GetComponent(player).levelCar == 0){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "Honk! HONK!";
				GetComponent(date).action = false;
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "Will you freak all over this sweet Mercedes?";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yes",promptStyle)){
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"No",promptStyle)){
					GetComponent(date).prompt = false;
					Application.LoadLevel ("map");
				}
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "HOOOOONNNNKKKKKKKKKKKKKK";
				GetComponent(date).dateSprite = angrySprite;
			}
			if (GetComponent(date).pos == 3) {
				GetComponent(date).vocal = "Hooonk!";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "Hoooooonk honk!";
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "> You agree.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "HONKHONKHONKKKK!!!!!";
				GetComponent(date).dateSprite = angrySprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "HOOOOOOONKK!!!!!";
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "> Yes, an interesting point.";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "> What a learned vehicle!";
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "HOOONK! Honk! Honk….";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "> Damn, this date is heating up!";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "> Are you going to go for a ride in this car?";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yes",promptStyle)){
					GetComponent(date).pos++;
					choice = 1;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"No",promptStyle)){
					GetComponent(date).prompt = false;
					choice = 2;
					GetComponent(date).pos = 14;
				}
			}

			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "> Good choice. You hop in and do donuts all up in this place.";
			}

			if (GetComponent(date).pos == 14) {
				if(choice == 1){
					GetComponent(date).pos = 16;
				}
				GetComponent(date).vocal = "> Sorry. This is a joke scene, so you have even less choice than usual.";
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "> You hop up in that car and do hella sweet wheelies like that cute girl from math class is watching.";
			}

			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "> After some sweet drifting, you and Mercedes make plans to play some Mario Kart 8 soon.";
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "> Before you leave, you gently smooch Mercedes on its shiny emblem.";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "> It blushes deeply. Aww.";
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "Honk honk!!!!";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "trumble";
				GetComponent(date).pos = 0;
				playerObject.GetComponent(player).levelCar = 1;
				Application.LoadLevel ("map");
			}
		}else if (playerObject.GetComponent(player).levelCar == 1){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "Honk. Honk….?";
				GetComponent(date).action = false;
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "> Care to take Mercedes out for another spin?";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yes",promptStyle)){
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"No",promptStyle)){
					GetComponent(date).prompt = false;
					Application.LoadLevel ("map");
				}
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "Honk Honk Honk Honk!!";
				GetComponent(date).dateSprite = angrySprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 3) {
				GetComponent(date).vocal = "Honk honk.";
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "Honk.";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "Honk honk honk??";
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "> Mercedes seems to have a confession to make.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "Honkhonk, honk. Honk HONK honk hoooonk.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "> Oh dear. It seems that Mercedes has to leave.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "> Seems it has a big gig in the new Mario Kart game.";
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "Honk hooooooonk….";
				GetComponent(date).dateSprite = blushSprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "> Mercedes says it'll be back before too long, but you know that's a lie.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "> What can be done? Love is lost as quickly as it is found.";
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "Honk, honk honk. Honk.";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "> Yeah, you figured. Mercedes has been seeing BOTH Mario brothers on the side.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "> Best that you two just split amicably.";
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "Honk honk hooooonk. HOOOONK!!!!";
				GetComponent(date).dateSprite = angrySprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "> Mercedes peels out towards the entrance of the zoo.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "> Just before impact, the car somehow launches into the air, vaulting over the gate into the sky.";
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "> Wow…what a car.";
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "dick";
				playerObject.GetComponent(player).levelCar = 2;
				Application.LoadLevel("map");
			}
		}
	}
}
function Update () {
}