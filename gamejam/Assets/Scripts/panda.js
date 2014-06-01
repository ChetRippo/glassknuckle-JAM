#pragma strict
var playerObject : GameObject;
var animalName : String = "Panda";
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
		if (playerObject.GetComponent(player).levelPanda == 0){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "Oh…hello there. What brings you to…";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 1){
				GetComponent(date).vocal = "*yawn*";
			}
			if (GetComponent(date).pos == 2){
				GetComponent(date).vocal = "…this neck of the zoo?";
			}
			if (GetComponent(date).pos == 3) {
				GetComponent(date).vocal = "> Will you spend time with Panda?";
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
			if (GetComponent(date).pos == 4){
				GetComponent(date).vocal = "Alright. I could…";
				GetComponent(date).prompt = false;
			}
			if (GetComponent(date).pos == 5){
				GetComponent(date).vocal = "*yawn*";
			}
			if (GetComponent(date).pos == 6){
				GetComponent(date).vocal = "…spare some time for you, I guess.";
			}
			if (GetComponent(date).pos == 7){
				GetComponent(date).vocal = "I love the café. So many wonderful smells!";
			}
			if (GetComponent(date).pos == 8){
				GetComponent(date).vocal = "I could just sit here and eat and eat and eat.";
			}
			if (GetComponent(date).pos == 9){
				GetComponent(date).vocal = "What do you like most about the café?";
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Smells",promptStyle)){
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Food",promptStyle)){
					GetComponent(date).prompt = false;
					Application.LoadLevel ("map");
				}
				if (GUI.Button(Rect(promptX,prompt3Y,promptW,promptH),"Firmness of the seats",promptStyle)){
					GetComponent(date).prompt = false;
					Application.LoadLevel ("map");
				}
			}
		} else if (playerObject.GetComponent(player).levelPanda == 1){
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "";
			}
		}
	}
}
function Update () {
}