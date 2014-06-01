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
				GetComponent(date).action = false;
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
					GetComponent(date).pos = 13;
					choice = 1;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt3Y,promptW,promptH),"Firmness of the seats",promptStyle)){
					GetComponent(date).pos = 16;
					choice = 2;
					GetComponent(date).prompt = false;
				}
			}
			if (GetComponent(date).pos == 10){
				GetComponent(date).vocal = "I absolute agree. It's truly a…";
			}
			if (GetComponent(date).pos == 11){
				GetComponent(date).vocal = "*yawn*";
			}
			if (GetComponent(date).pos == 12){
				GetComponent(date).vocal = "…treat for the nose. The nose knows, after all. *chuckle*";
			}
			if (GetComponent(date).pos == 13){
				GetComponent(date).vocal = "Yes, the food here is quite scrumptious!";
				GetComponent(date).dateSprite = blushSprite;
				if (choice == 0){
					GetComponent(date).pos = 17;
				}
			}
			if (GetComponent(date).pos == 14){
				GetComponent(date).vocal = "Fresh cuisine is very important to a bear of my standards.";
			}
			if (GetComponent(date).pos == 15){
				GetComponent(date).vocal = "Oh, is that so? Chairs usually bruise my baby bear bottom.";
				if (choice == 1){
					GetComponent(date).pos = 17;
				}
			}
			if (GetComponent(date).pos == 16){
				GetComponent(date).vocal = "I prefer the comfort of the bare ground. Each to their own, I suppose…";
			}
			if (GetComponent(date).pos == 17){
				GetComponent(date).vocal = "You see, a proper dining atmosphere is very important to me.";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 18){
				GetComponent(date).vocal = "I may seem like your typical lazy panda, but even I have dreams and ambitions.";
			}
			if (GetComponent(date).pos == 19){
				GetComponent(date).vocal = "My calling in life is food, and one day I hope to open up my own restaurant!";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 20){
				GetComponent(date).vocal = "I'd recruit famous chefs the world over, and…";
			}
			if (GetComponent(date).pos == 21){
				GetComponent(date).vocal = "*yawn*";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 22){
				GetComponent(date).vocal = "...serve the greatest food known to earthkind!";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 23){
				GetComponent(date).vocal = "Alas, now that we're stuck in here I fear my dream may never come true…";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).prompt = true;
					if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Don't give up hope!",promptStyle)){
						GetComponent(date).pos++;
						choice = 0;
						GetComponent(date).prompt = false;
					}
					if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Pandas can't open resturants, silly.",promptStyle)){
						GetComponent(date).pos = 29;
						choice = 1;
						GetComponent(date).prompt = false;
					}
					if (GUI.Button(Rect(promptX,prompt3Y,promptW,promptH),"Have you ever heard of 'Panda Express'?",promptStyle)){
						GetComponent(date).pos = 34;
						choice = 2;
						GetComponent(date).prompt = false;
					}
			}
			if (GetComponent(date).pos == 24){
				GetComponent(date).vocal = "You're too kind, really.";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 25){
				GetComponent(date).vocal = "But I fear it's just…";
			}
			if (GetComponent(date).pos == 26){
				GetComponent(date).vocal = "*yawn*";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 27){
				GetComponent(date).vocal = "…wishful thinking at this point.";
			}
			if (GetComponent(date).pos == 28){
				GetComponent(date).vocal = "Thank you for believing in me.";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 29){
				GetComponent(date).vocal = "Thanks for the 'encouraging' words.";
				GetComponent(date).dateSprite = angrySprite;
				if (choice == 0){
					GetComponent(date).pos = 39;
				}
			}
			if (GetComponent(date).pos == 30){
				GetComponent(date).vocal = "I may be slow, but I'm not dull.";
			}
			if (GetComponent(date).pos == 31){
				GetComponent(date).vocal = "At least humor me in my…";
			}
			if (GetComponent(date).pos == 32){
				GetComponent(date).vocal = "*yawn*";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 33){
				GetComponent(date).vocal = "…lofty ambitions.";
			}
			if (GetComponent(date).pos == 34){
				GetComponent(date).vocal = "Don't even mention that foul place!";
				GetComponent(date).dateSprite = angrySprite;
				if (choice == 1){
					GetComponent(date).pos = 46;
				}
			}
			if (GetComponent(date).pos == 35){
				GetComponent(date).vocal = "A culinary auteur such as myself has no patience for 'take-out' establishments.";
			}
			if (GetComponent(date).pos == 36){
				GetComponent(date).vocal = "Do you think me a panda of…";
			}
			if (GetComponent(date).pos == 37){
				GetComponent(date).vocal = "*yawn*";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 38){
				GetComponent(date).vocal = "…poor taste?";
			}
			if (GetComponent(date).pos == 39){
				GetComponent(date).vocal = "You've given me new resolve, NAME.";
				GetComponent(date).dateSprite = blushSprite;
				if (choice == 2){
					GetComponent(date).pos = 46;
				}
			}
			if (GetComponent(date).pos == 40){
				GetComponent(date).vocal = "Perhaps my dream isn't so far-fetched after all.";
			}
			if (GetComponent(date).pos == 41){
				GetComponent(date).vocal = "NAME, you seem to be quite the foodie yourself!";
			}
			if (GetComponent(date).pos == 42){
				GetComponent(date).vocal = "Ever thought about…";
			}
			if (GetComponent(date).pos == 43){
				GetComponent(date).vocal = "*yawn*";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 44){
				GetComponent(date).vocal = "…being a maitre d?";
			}
			if (GetComponent(date).pos == 45){
				GetComponent(date).vocal = "Hahahahaha.";
			}
			if (GetComponent(date).pos == 46){
				GetComponent(date).vocal = "Hmm, maybe you weren't the culinary appreciator I thought you were.";
				GetComponent(date).dateSprite = angrySprite;
				if (choice == 0){
					playerObject.GetComponent(player).levelPanda = 1;
					Application.LoadLevel ("map");
				}
			}
			if (GetComponent(date).pos == 47){
				GetComponent(date).vocal = "Thank you for humoring me in my…";
			}
			if (GetComponent(date).pos == 48){
				GetComponent(date).vocal = "*yawn*";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 49){
				GetComponent(date).vocal = "…idle chatter. Perhaps I'll see you around, or perhaps not.";
			}
			if (GetComponent(date).pos == 50){
				GetComponent(date).vocal = "Farewell.";
			}
			if (GetComponent(date).pos == 51){
				GetComponent(date).vocal = "I love farting.";
				playerObject.GetComponent(player).levelPanda = -1;
				Application.LoadLevel ("map");
			}
		} else if (playerObject.GetComponent(player).levelPanda == 1){
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "Hello, NAME.";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "Hope you have room…";
			}
			if (GetComponent(date).pos == 3) {
				GetComponent(date).vocal = "*yawn*";
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "…for another date.";
			}
			if (GetComponent(date).pos == 5) {
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
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "Why don't we dine in…";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "*yawn*";
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "…a more secluded spot?";
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "This is a favorite spot of mine.";
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "The clear water, reflecting everything off its surface…";
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "I could get lost in…";
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "*yawn*";
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "…the crystal blue.";
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "So, NAME, have you given it any thought?";
				GetComponent(date).prompt = true;
					if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yes, I have.",promptStyle)){
						GetComponent(date).pos++;
						choice = 0;
						GetComponent(date).prompt = false;
					}
					if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"What are you talking about?",promptStyle)){
						GetComponent(date).pos = 29;
						choice = 1;
						GetComponent(date).prompt = false;
					}
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "I knew you were a human of taste!";
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "Oh…you don't remember?";
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "I thought you wanted to be my maitre d…";
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "";
			}
		}
	}
}
function Update () {
}