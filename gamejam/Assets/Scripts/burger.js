#pragma strict
var playerObject : GameObject;
var animalName : String = "Burger";
var spaceClip : AudioClip;
var normalSprite : Sprite;
var angrySprite : Sprite;
var blushSprite : Sprite;
var costumeSprite : Sprite;
var animalBackground : Sprite;
var spaceBackground : Sprite;
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
		GetComponent(date).action = true;
		if (playerObject.GetComponent(player).levelBurger == 0){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "For some reason, this burger looks absolutely delectable.";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "You feel compelled to reach out and grip its firm buns...";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "Will you dig into this tasty, tasty burg?";
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
				GetComponent(date).vocal = "Your fate has been sealed.";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "As you wrap your fingers around the burger, you feel…strange.";
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "Your corporeal form loses solidity, pooling into a hideous gore puddle on the floor.";
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "As the sheer impossibility of the scene tears your mind asunder, you feel an energy pulling your liquid form upward.";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "You rise higher, higher, leaving the Earth behind until you are surrounded by inky blackness.";
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "You awaken in the farthest reaches of space, your physical form long cast aside.";
				GetComponent(date).bkgSprite = spaceBackground;
				GetComponent(date).bkgLoop.clip = spaceClip;
				GetComponent(date).bkgLoop.Play();
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "Looking around the infinite blackness, you spot a tiny speck of light moving towards you.";
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "You recognize it as the delicious burger you tried to eat earlier.";
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "…What's a burg doing this far out in space?";
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "The hamburger floats towards you, stopping inches away from where you assume your face would be, if you had one.";
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "…";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "Is…the hamburger trying to communicate with you?";
				GetComponent(date).dateSprite = blushSprite;
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "…";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "Strange…the burger seems incapable of human speech, but you feel…warm inside.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "Never have you felt so comfortable around a sandwich before.";
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "…";
				GetComponent(date).action = false;
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "What's that? It feels as if the burger is beckoning to you.";
				GetComponent(date).action = true;
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "Urging you to…come closer.";
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "To become one with it.";
			}
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = "Will you become one with this burg?";
				GetComponent(date).action = true;
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yes",promptStyle)){
					GetComponent(date).pos = 23;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"No",promptStyle)){
					GetComponent(date).pos = 38;
					GetComponent(date).prompt = false;
				}
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "…";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "The burger's shape shifts and stretches.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "What was once a tiny, delectable sandwich is now impossibly long, reaching beyond the edge of your vision.";
				GetComponent(date).dateSprite = angrySprite;
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "In a moment, it surges towards you, enveloping you in its delicious infinity.";
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "…";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "…";
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "…You find yourself in the café, back in your own body.";
				GetComponent(date).action = true;
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "The burger sits on the table, undisturbed.";
			}
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "Was it all a dream?";
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "As you turn to leave the café, you feel something in your pocket.";
			}
			if (GetComponent(date).pos == 33) {
				GetComponent(date).vocal = "It's a note.";
			}
			if (GetComponent(date).pos == 34) {
				GetComponent(date).vocal = "XXXOOO CALL ME XXXOOO";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 35) {
				GetComponent(date).vocal = "…Did the burger leave this for you?";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 36) {
				GetComponent(date).vocal = "You leave the café.";
			}
			if (GetComponent(date).pos == 37){
				GetComponent(date).vocal = "fuggin piss";
				playerObject.GetComponent(player).levelBurger = 1;
				Application.LoadLevel("map");
			}
			
			
			if (GetComponent(date).pos == 38) {
				GetComponent(date).vocal = "The burger floats in front of you, silently.";
				GetComponent(date).dateSprite = angrySprite;
			}
			if (GetComponent(date).pos == 39) {
				GetComponent(date).vocal = "It doesn't seem hostile, but you feel like you've…upset it somehow.";
			}
			if (GetComponent(date).pos == 40) {
				GetComponent(date).vocal = "Suddenly, the burger's shape shifts and stretches.";
			}
			if (GetComponent(date).pos == 41) {
				GetComponent(date).vocal = "What was once a tiny, delectable sandwich is now impossibly long, reaching beyond the edge of your vision.";
			}
			if (GetComponent(date).pos == 42) {
				GetComponent(date).vocal = "In a moment, it surges towards you, enveloping you in its delicious infinity.";
			}
			if (GetComponent(date).pos == 43) {
				GetComponent(date).vocal = "…";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 44) {
				GetComponent(date).vocal = "…";
			}
			if (GetComponent(date).pos == 45) {
				GetComponent(date).vocal = "…You find yourself in the café, back in your own body.";
				GetComponent(date).action = true;
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 46) {
				GetComponent(date).vocal = "The burger sits on the table, undisturbed.";
			}
			if (GetComponent(date).pos == 47) {
				GetComponent(date).vocal = "Was it all a dream?";
			}
			if (GetComponent(date).pos == 48) {
				GetComponent(date).vocal = "You leave the café.";
			}
			if (GetComponent(date).pos == 49){
				GetComponent(date).vocal = "fuggin piss";
				playerObject.GetComponent(player).levelBurger = -1;
				Application.LoadLevel("map");
			}
		} else if (playerObject.GetComponent(player).levelBurger == 1){
			if (GetComponent(date).pos == 0) {
				GetComponent(date).vocal = "A pleasant energy emanates from within the burger's toppings.";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "Will you go on another strange burg-related journey?";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yes",promptStyle)){
					GetComponent(date).pos = 2;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"No",promptStyle)){
					GetComponent(date).prompt = false;
					Application.LoadLevel("map");
				}
			}
			
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "Again, you tempt fate.";
			}
			if (GetComponent(date).pos == 3) {
				GetComponent(date).vocal = "With trembling hands, you reach for the juicy, delectable hamburger.";
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "Fearing another puddle incident, you cautiously prod a finger towards the juicy beef in the center of the sandwich.";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "…Your finger travels through the burger.";
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "You try to pull away, but it's too late to stop!";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "A suction from within the burger yanks your hand into its meaty dimension, eventually dragging your wrist, arm, and upper torso inside.";
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "In moments, you are pulled from this physical plane.";
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "You find yourself once again in this place beyond the stars.";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = spaceBackground;
				GetComponent(date).bkgLoop.clip = spaceClip;
				GetComponent(date).bkgLoop.Play();
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "There floats the burger, expectantly.";
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "…It's not contacting you, but it seems to want something.";
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "Should you….eat it?";
				GetComponent(date).action = true;
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yes",promptStyle)){
					GetComponent(date).pos = 13;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Absolutely",promptStyle)){
					GetComponent(date).pos = 13;
					GetComponent(date).prompt = false;
				}
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "Though your body is again missing, you feel another energy source emanating from where you assume your mouth would be.";
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "You know what you have to do.";
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "…You have to eat the burger.";
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "Using your limited knowledge of non-Euclidean geometry, you slowly manuever the tasty burg towards your space-mouth.";
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "How will you eat this burger?";
				GetComponent(date).action = true;
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Take a baby boy bite",promptStyle)){
					GetComponent(date).pos = 18;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Have a big daddy mouthful",promptStyle)){
					GetComponent(date).pos = 18;
					GetComponent(date).prompt = false;
				}
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "As the burger passes through your mouth, you feel a sense of belonging like you've never experienced before.";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "Truly, what has been broken is made whole again.";
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "The union between sandwich and high school student is complete.";
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "Thank you, Cutie.";
			}
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = "You've restored hope to the universe.";
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "Enjoy your meal.";
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "…";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "…";
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "…You find yourself in the café, back in your own body.";
				GetComponent(date).bkgSprite = animalBackground;
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "The burger sits on the table, undisturbed.";
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "This time, you know it wasn't a dream.";
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "You bend over and place a gentle kiss upon the burger's soft bun.";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "You feel as if you've built a relationship that will stand the test of time.";
			}
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "Smiling, you exit the café.";
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "weed";
				playerObject.GetComponent(player).levelBurger = 2;
				Application.LoadLevel ("map");
			}
		}
	}
}
function Update () {
}