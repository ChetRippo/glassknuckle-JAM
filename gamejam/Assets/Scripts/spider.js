#pragma strict
var playerObject : GameObject;
var animalName : String = "Spider";
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
		if (playerObject.GetComponent(player).levelSpider == 0){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "???";
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "Will you spend time with Spider?";
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
				GetComponent(date).vocal = "!!!";
			}
			if (GetComponent(date).pos == 3) {
				GetComponent(date).vocal = "…";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"So…come here often? To this spider pit?",promptStyle)){
					GetComponent(date).pos++;
					choice = 1;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Hey babe, is that a set of eight legs? Or are you just happy to see me?",promptStyle)){
					GetComponent(date).prompt = false;
					choice = 2;
					GetComponent(date).pos = 6;
				}
			}

			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "…..";
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "!!";
			}

			if (GetComponent(date).pos == 6) {
				if(choice == 1){
					GetComponent(date).pos = 9;
				}
				GetComponent(date).vocal = "……….";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "………………….";
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "…………………………………";
			}

			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "!!!!";
				GetComponent(date).dateSprite = normalSprite;
			}
			
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "???????";
				if(choice == 1){
					GetComponent(date).pos = 12;
				}
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "…..?";
			}

			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "…..!!!";
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = ":)";
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "You feel a deeper connection with Spider.";
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "It might be in your best interest to continue seeing it.";
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "Besides, it has a pretty sweet pit…";
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "Will you ask Spider out?";
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
					GetComponent(date).pos = 29;
				}
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "……";
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "…………..";
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = ":3";
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "…..";
			}
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = ":D";
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = ";)";
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = ":* ~~~";
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "You seem to have forged a relationship with Spider.";
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "Then again, it could be thinking anything right now.";
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "You decide to assume the best and make a timely exit.";
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "butthump";
				playerObject.GetComponent(player).levelSpider = 1;
				Application.LoadLevel("map");
			}
			
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "…..";
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "?????";
			}
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = ":(";
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "!!!!!!";
			}
			if (GetComponent(date).pos == 33) {
				GetComponent(date).vocal = ":( :( :(";
			}
			if (GetComponent(date).pos == 34) {
				GetComponent(date).vocal = "You seem to have upset Spider.";
			}
			if (GetComponent(date).pos == 35) {
				GetComponent(date).vocal = "Then again, it could be thinking anything right now.";
			}
			if (GetComponent(date).pos == 36) {
				GetComponent(date).vocal = "Best to leave now before it decides to eat you or something.";
			}
			if (GetComponent(date).pos == 37){
				GetComponent(date).vocal = "fuggin piss";
				playerObject.GetComponent(player).levelSpider = -1;
				Application.LoadLevel("map");
			}
		}else if (playerObject.GetComponent(player).levelSpider == 1){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "….";
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = ":3";
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "Will you spend time with Spider?";
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
				GetComponent(date).vocal = "*blush*";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = ":) :)";
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "…..";
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = ";)";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "Uhoh…You get the feeling that Spider wants to forge a tryst.";
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "You're into it, but…this soon?";
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "What will you do?";
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "…NAME, WHAT WILL YOU DO?!";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Go for it.",promptStyle)){
					GetComponent(date).pos++;
					choice = 1;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Respectfully hold on to your morals.",promptStyle)){
					GetComponent(date).prompt = false;
					choice = 2;
					GetComponent(date).pos = 15;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Panic! Resort to murder!",promptStyle)){
					GetComponent(date).prompt = false;
					choice = 3;
					GetComponent(date).pos = 13;
				}
			}

			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "!!!!!!!!";
			}

			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "…";
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "…";
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "You went for it.";
			}
			
			if (GetComponent(date).pos == 15) {
				if(choice == 1){
					GetComponent(date).pos = 28;
				}
				GetComponent(date).vocal = "????";
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "….";
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "!!!!";
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "Spider seems apologetic.";
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "After explaining where you stand on such issues, Spider understands you more.";
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "You feel like the two of you had a very respectful dialog.";
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "Remember, kids: Don't let anyone pressure you. Especially Billy from math class.";
			}
			
			
			if (GetComponent(date).pos == 22) {
				if(choice == 2){
					GetComponent(date).pos = 28;
				}
				GetComponent(date).vocal = "You raise your arm high, ready to bash and rip and tear at Spider.";
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "Spider looks up at you, confused.";
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "???";
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = ":(";
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "…But you can't do it. Spider is just too cute.";
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "Better to just be friends than do anything foolish.";
			}

			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "You feel closer to Spider.";
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "Could a relationship between a human high school student and a spider work out in the long run?";
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "Only time will tell…";
			}
			
			if (GetComponent(date).pos == 31){
				GetComponent(date).vocal = "fuggin piss";
				playerObject.GetComponent(player).levelSpider = 2;
				Application.LoadLevel("map");
			}
		}
	}
}
function Update () {
}