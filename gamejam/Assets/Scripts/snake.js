#pragma strict
var playerObject : GameObject;
var animalName : String = "Snake";
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
		action = true;
		if (playerObject.GetComponent(player).levelSnake == 0){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "Hey, kid.";
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "What makesss you think you can kick it in the Spider Pit?";
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "Will you spend time with Snake?";
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
				GetComponent(date).vocal = "Psss, you think you're bad as me?";
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "The tall grass hides me from my prey.";
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "I just lie in wait until…";
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "PSSSS!!!";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "I jump out and strike!";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"You kill them!?",promptStyle)){
					GetComponent(date).pos++;
					choice = 1;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"That's pretty badassss.",promptStyle)){
					choice = 2;
					GetComponent(date).pos = 10;
					GetComponent(date).prompt = false;
				}
			}
			
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "Nah, I usually let them go.";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "Every other animal in here is bigger than I am…";
				GetComponent(date).dateSprite = normalSprite;
			}
			
			if (GetComponent(date).pos == 10) {
				if(choice == 1){
					GetComponent(date).pos = 13;
				}
				GetComponent(date).vocal = "Oh, you think sssso?";
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "PSSS!!";
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "I'm glad someone agreesss.";
			}

			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "It'sss hard for a bad ssnake like mysself to fit in.";
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "The other animalss are sso sself-important.";
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "Alwayss thinking of themsselvess, never inviting me to partiesss…";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"The others treat you badly?",promptStyle)){
					GetComponent(date).pos++;
					choice = 1;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"I'm sssorry to hear that.",promptStyle)){
					choice = 2;
					GetComponent(date).pos = 21;
					GetComponent(date).prompt = false;
				}
			}

			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "Who needss them, anyways?";
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "I'm all about that bad boy lifestyle.";
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "Sssnakesss!";
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "Snake tries to throw up a gang sign without arms.";
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "…It doesn't work out.";
			}

			if (GetComponent(date).pos == 21) {
				if(choice == 1){
					GetComponent(date).pos = 23;
				}
				GetComponent(date).vocal = "Are you teassing me?";
			}
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = "That's pretty sssneaky. I like that.";
			}

			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "I've been thinking about recruiting a new gang member.";
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "Ssomeone who'ss loyal and bad to the bone!!";
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "Ssomeone who can shake off hatersss like they're shedding sskin!";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"That'ss me!",promptStyle)){
					GetComponent(date).pos++;
					choice = 1;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Sssorry, not interested.",promptStyle)){
					choice = 2;
					GetComponent(date).pos = 30;
					GetComponent(date).prompt = false;
				}
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "Really? That'sss sssuper.";
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "Let'sss exxchange cccell numberss.";
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "You ssspend the resst of the afternoon sssmoking with Snake.";
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "anus";
				playerObject.GetComponent(player).levelSnake = 1;
				Application.LoadLevel("map");
			}

			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "I knew it. You're jussst like the otherss.";
			}
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "Looks like there's more than one ssnake in the grasssssss.";
				Application.LoadLevel("map");
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "Snake sssliters off.";
			}
			if (GetComponent(date).pos == 33) {
				GetComponent(date).vocal = "anus2";
				playerObject.GetComponent(player).levelSnake = -1;
				Application.LoadLevel("map");
			}
		}else if (playerObject.GetComponent(player).levelSnake == 1){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "Ssso…Want to sspend ssome time together?";
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "Will you ssspend time with Snake?";
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
				GetComponent(date).vocal = "I'm sso glad you can ssspare ssome time to ssee me.";
			}
			if (GetComponent(date).pos == 3) {
				GetComponent(date).vocal = "There they are. Thossse jerksss.";
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "Hippo, Giraffe, and Elephant: The Biggest Jerks In The Animal Kingdom.";
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "Ssometimes I wish they'd dissappear.";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"What happened?",promptStyle)){
					GetComponent(date).pos++;
					choice = 1;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Let'ss get 'em.",promptStyle)){
					GetComponent(date).prompt = false;
					choice = 2;
					GetComponent(date).pos = 9
				}
			}

			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "They alwayss ignore me.";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "A ssnake like me, sslithering in the grass…";
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "No one bothers to even watch where they're ssstepping.";
			}

			if (GetComponent(date).pos == 9) {
				if(choice == 1){
					GetComponent(date).pos++;
				}
				GetComponent(date).vocal = "Ha, if only. I'm not ass tough as I look…";
			}

			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "I have a bit of a confession to make, NAME.";
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "You sssee…or rather, you see…";
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "I don't actually have this ridiculous hissing accent.";
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "…And I'm not all that tough either.";
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "I put it all on as an act, because I'm afraid of others.";
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "Who could accept a lonely, slithery snake like me?";
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "I keep trying to shed my skin, but in the end I can't change who I am deep down.";
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "Issn't that ssssssssad?";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH)," I ssssstill think you're pretty tough.",promptStyle)){
					GetComponent(date).pos++;
					choice = 1;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Sssssucksssssss to be you…",promptStyle)){
					GetComponent(date).prompt = false;
					choice = 2;
					GetComponent(date).pos = 29;
				}
			}

			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "That'ss kind of you to ssay.";
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "Ha, when I get flusstered my acccccent comessss back.";
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "I guessss I'm pretty nervousss to be around you ssssometimess…";
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "…";
			}
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = "…What?";
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "Sssstop sstaring at me, I'm getting embarasssed…";
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "You wrap Snake around your neck and pull him in for a slithery smooch.";
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "Sssssay…that'sssss not bad.";
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "Hope you don't mind tongue…";
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "You and Snake sssslither around for a while.";
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "dick";
				playerObject.GetComponent(player).levelSnake = 2;
				Application.LoadLevel("map");
			}

			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "Are you serious?";
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "I shed my layers in front of you and all you can do issss mock me?";
			}
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "A bad boy like me doesssn't have to put up with thisss.";
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "I'm out of here.";
			}
			if (GetComponent(date).pos == 33) {
				GetComponent(date).vocal = "Snake sslithers away.";
			}
			if (GetComponent(date).pos == 34) {
				GetComponent(date).vocal = "dick";
				playerObject.GetComponent(player).levelSnake = -1;
				Application.LoadLevel("map");
			}
		}
	}
}
function Update () {
}