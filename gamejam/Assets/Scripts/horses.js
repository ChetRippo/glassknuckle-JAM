#pragma strict
var playerObject : GameObject;
var animalName : String = "Horses";
var normalSprite : Sprite;
var angrySprite : Sprite;
var blushSprite : Sprite;
var costumeSprite : Sprite;
var animalBackground : Sprite;
var specialBackground : Sprite;
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
		if (playerObject.GetComponent(player).levelHorses == 0){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "They both speak in unison.";
				GetComponent(date).action = true;
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "Hello. What can I do for you?";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "> Will you spend time with Horses?";
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
			if (GetComponent(date).pos == 3) {
				GetComponent(date).vocal = "Wonderful. Let us commence.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "So…welcome to my forest.";
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "Odd…there are two horses, but they both refuse to acknowledge the presence of the other.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "Their unified speech is impressive. Perhaps it's a well-rehearsed act?";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "Why are you staring? Have I overstepped the social boundaries of our exchange?";
				GetComponent(date).dateSprite = blushSprite;
				GetComponent(date).prompt = true;
				GetComponent(date).action = false;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"…Are either one of you aware that there is another identical horse standing right next to you, speaking the exact same words as you, with identical cadence, at the exact same time as you?",promptStyle)){
					GetComponent(date).pos++;
					choice = 0;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Are you guys messing with me?!",promptStyle)){
					GetComponent(date).prompt = false;
					GetComponent(date).pos = 9;
				}
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "Who?";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "Guys?";
				GetComponent(date).dateSprite = normalSprite;
				if (choice == 0){
					GetComponent(date).pos = 10;
				}
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "Uhoh.";
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "This is going to get weird, fast.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "I'm interested in you, Cutie.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "How would you like to bond with me?";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "The horses move closer to you.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "I've been looking for a partner recently.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "Someone to…stand by my side.";
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "Someone to know exactly what I'm thinking.";
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "Someone to imitate my every movement.";
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "You desperately try to explain that they already have someone doing that, but they refuse to listen.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "Mate with me, Cutie.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "Become one with my horse-being, Cutie.";
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "This is rapidly turning into one of those 'adult' games.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = "Will you surrender to the will of these Horses?";
				GetComponent(date).prompt = true;
				GetComponent(date).action = false;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"No",promptStyle)){
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
					choice = 0;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Dear God, if I must...",promptStyle)){
					GetComponent(date).pos = 29;
					GetComponent(date).prompt = false;
					choice = 1;
				}
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "> You flee while you still have time.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "> Running as fast as your feet will take you, you hear the horses whinny in unison.";
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "Come back to me, Cutie.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "Come back and date this Horse…!";
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "> You'll never erase this horrifying scene from your mind.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "> No romance option is worth this.";
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "Come with us, Cuties.";
				GetComponent(date).action = true;
				if (choice == 0){
				playerObject.GetComponent(player).levelHorses = -1;
				Application.LoadLevel ("map");
				}
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "We will take care of you.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "> Wait…did they just say 'us'?";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "> You feel as if there is a bigger mystery to uncover here…";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 33) {
				GetComponent(date).vocal = "";
				playerObject.GetComponent(player).levelHorses = 1;
				Application.LoadLevel ("map");
			}
		} else if (playerObject.GetComponent(player).levelHorses == 1){
			if (GetComponent(date).pos == 0) {
				GetComponent(date).vocal = "Welcome, Cutie.";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "Are you ready to hear our terrible secret?";
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "> Will you uncover the terrible truth of the Horses?";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yes",promptStyle)){
					GetComponent(date).pos = 4;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"No",promptStyle)){
					GetComponent(date).prompt = false;
					Application.LoadLevel ("map");
				}
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "We knew we could trust you, Cutie.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "Finally, after all these years…";
				GetComponent(date).bkgSprite = specialBackground;
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "We have found the one who can set us free.";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "> What is going on here?";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "> You ask the Horses why they refused to acknowledge each other during your first encounter.";
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "Well, that's a very good question. The truth is…";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "…We don't actually know which one of us is male and which is female.";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "We're pretty sure that one of us is male and one of us is female.";
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "We're just so embarassed that we put on this ridiculous cult act to cover up our insecurities.";
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "Pretty shallow, right?";
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "> Do you actually feel remorse for these gender-confused Horses?";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yes",promptStyle)){
					GetComponent(date).pos++;
					choice = 0;
					GetComponent(date).prompt = false;
					GetComponent(date).action = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"No",promptStyle)){
					GetComponent(date).pos = 17;
					GetComponent(date).prompt = false;
					GetComponent(date).action = false;
					choice = 1;
				}
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "Thank you, Cutie.";
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "We appreciate your cooperation.";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "We're sorry, Cutie.";
				if (choice == 0){
					GetComponent(date).pos = 22;
				}
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "We can't allow you to leave us so soon.";
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "> You can hear the door to the janitor's closet slam shut.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "> Turning around, you see only the door and a small mop.";
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "> …How did they do that?";
			}
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = "Now then…let us begin the test.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "> Dear god…you steel your nerves and prepare for the worst.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "Ready?";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "> …";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "Which one of us…";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "is the MALE?";
				GetComponent(date).dateSprite = blushSprite;
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Left Horse",promptStyle)){
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
					GetComponent(date).action = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Right Horse",promptStyle)){
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
					GetComponent(date).action = false;
				}
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "Okay. I guess that settles it!";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "> …That was it?";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "> All that build up for this?";
			}
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "Thanks. I guess we can enter a polygamous relationship now.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "> ….You did it?";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 33) {
				GetComponent(date).vocal = "> What an odd date.";
			}
			if (GetComponent(date).pos == 34) {
				GetComponent(date).vocal = "> Hey, at least you got to go out with some Horses.";
			}
			if (GetComponent(date).pos == 35) {
				GetComponent(date).vocal = "neighhh";
				playerObject.GetComponent(player).levelHorses = 2;
				Application.LoadLevel ("map");
			}
		}
	}
}
function Update () {
}