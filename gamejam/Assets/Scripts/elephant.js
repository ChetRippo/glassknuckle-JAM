#pragma strict
var playerObject : GameObject;
var animalName : String = "Elephant";
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
		if (playerObject.GetComponent(player).levelElephant == 0){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "O-oh! Y-y-you st-startled me.";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "What d-do you want?";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "Will you spend time with Elephant?";
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
				GetComponent(date).vocal = "W-w-w-with m-me? Er…ah–alright.";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "S-so…what brings you t-t-to the zoo?";
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "You tell Elephant about your predicament, and your search for love.";
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "L-l-l-love?!";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "Oh, you're searching too, h-huh…";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yeah, I guess I am.",promptStyle)){
					GetComponent(date).pos++;
					choice = 1;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),'"too?"',promptStyle)){
					choice = 2;
					GetComponent(date).pos = 10;
					GetComponent(date).prompt = false;
				}
			}
			
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "I'm s-s-sorry to hear that.";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "I mean, I f-figured someone like you would a-a-already have s-s-someone…";
				GetComponent(date).dateSprite = normalSprite;
			}
			
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "B) O-oh!! I-I-I-I didn't mean th-that I-I-I was t-t-t-too, I only m-m-m-meant…";
				if(choice == 1){
					GetComponent(date).pos = 12;
				}
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "Elephant begins stammering and stuttering.";
			}

			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "It only takes a few sentences of basic conversation to cause Elephant's cheeks to reach full bloom.";
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "I'm s-s-sorry, I'm such a m-mess when it comes t-t-to these things…";
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "You s-s-see, I'm not u-used to my enorm-mous size, and I'm always feeling uncomfortable around others.";
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "E-e-especially s-s-s-someone like you…";
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "There is a moment of awkward silence between you and Elephant.";
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "…That is, until Elephant realizes what he just implied.";
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "The poor animal's face turns white as a sheet.";
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "As Elephant takes on a look of sheer horror, his face begins to tint blue.";
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "It would seem Elephant is so embarassed that he can't find the strength to breathe.";
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "…This is bad! Say something, quick!";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Hey, no harm done.",promptStyle)){
					GetComponent(date).pos++;
					choice = 1;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Honestly, I'm flattered.",promptStyle)){
					choice = 2;
					GetComponent(date).pos = 24;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt3Y,promptW,promptH),"BOOO!!!!",promptStyle)){
					choice = 3;
					GetComponent(date).pos = 26;
					GetComponent(date).prompt = false;
				}
			}
			
			
			if (GetComponent(date).pos == 22) {
				if(choice != 1){
					GetComponent(date).pos = 31;
				}
				GetComponent(date).vocal = "A) Elephant relaxes slightly.";
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "S-s-sorry about that. It's just th-that I get very f-flustered, v-very easily.";
			}
			
			if (GetComponent(date).pos == 24) {
				if(choice != 2){
					GetComponent(date).pos = 31;
				}
				GetComponent(date).vocal = "B) W-W-W-What?! W-W-W-W-Why would you say s-s-something like that?";
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "Despite Elephant's confusion, he has started breathing again.";
			}
			
			if (GetComponent(date).pos == 26) {
				if(choice != 3){
					GetComponent(date).pos = 31;
				}
				GetComponent(date).vocal = "C) AHHH!!!!!!!!";
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "Elephant spins around at high velocity and runs as fast as he can from you.";
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "That was mean…";
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "Still, what a speedy elephant! You're sure that he'll get over his shyness someday, on his own.";
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "You decide to head back and search for a stronger, more confident animal to romance..";
				playerObject.GetComponent(player).levelElephant = -1;
				Application.LoadLevel("map");
			}
			
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "S-s-sorry about the outburst. You r-r-really do seem like a nice p-person.";
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "It's clear that a relationship with Elephant may be an uphill struggle.";
			}
			if (GetComponent(date).pos == 33) {
				GetComponent(date).vocal = "However, you have a thing for easily embarrassed, stammering kohai types.";
			}
			if (GetComponent(date).pos == 34) {
				GetComponent(date).vocal = "You decide to ask Elephant on a date.";
			}
			if (GetComponent(date).pos == 35) {
				GetComponent(date).vocal = "Elephant tries to agree calmly, but only manages to shake his head vigorously up and down in agreement.";
			}
			if (GetComponent(date).pos == 36) {
				GetComponent(date).vocal = "You let Elephant collect his breath and wave goodbye.";
			}
			if (GetComponent(date).pos == 37){
				GetComponent(date).vocal = "fuggin piss";
				playerObject.GetComponent(player).levelElephant = 1;
				Application.LoadLevel("map");
			}
		}else if (playerObject.GetComponent(player).levelElephant == 1){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "H-hey.";
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "I-is it t-t-time?";
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "Will you take Elephant on his first date?";
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
				GetComponent(date).vocal = "(Be gentle.)";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "W-w-well…here we are. At the pools.";
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "….A-a-a-a-a-a-a-a-a-a-a-aa-a-a-a-a-a-a-a-a-a-aa-a-a-aaaaa-a-a-alone.";
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "Time crawls to a standstill. Elephant seems nervous, but your calm attitude helps to steady him.";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "T-t-thanks for asking me out. You p-p-probably know this, but this is the f-first time I've done something like this.";
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "Elephant looks out at the reflection of the two of you on the surface of the water.";
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "I l-l-love the water. It reminds me of when I was a baby.";
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "My mother would bathe me every day, while the heat of the summer sun beat down on my neck.";
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "I really enjoyed those carefree days. Even though I'm not a baby anymore, I still like to look out on the water and think of those days gone by…";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"You've stopped stuttering...",promptStyle)){
					GetComponent(date).pos++;
					choice = 1;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"That's quite introspective...",promptStyle)){
					GetComponent(date).prompt = false;
					choice = 2;
					GetComponent(date).pos = 13;
				}
			}

			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "A) H-have I? Ha, I guess I have c-calmed down considerably.";
			}
			
			if (GetComponent(date).pos == 13) {
				if(choice == 1){
					GetComponent(date).pos = 15;
				}
				GetComponent(date).vocal = "B) You think s-so? Thanks.";
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "I'm not usually one f-f-for big speeches, b-b-but I'm always th-th-thinking of what I would end up saying if I ever ended up speaking up…";
			}
			
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "I've been thinking about our first encounter, and what good it did me.";
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "There's no use in me getting worked up over something so trivial as a cute high school student talking to me.";
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "In fact…I'm really glad that you decided to approach me in the first place.";
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "You s-see…I really like you…S-S-Senpai.";
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "Elephant just used the 'S-word'. That pretty much settles it.";
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "You decide to make your move.";
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "Approaching slowly so as not to upset him, you wrap one arm around Elephant's curled trunk.";
			}
			
			
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = "You feel his muscles tense up, but you calmly pet his trunk, shushing him.";
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "As Elephant relaxes, you tilt your head upwards and plant a gentle kiss on his ear.";
			}
			
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "Blushing furiously, the young animal buries his head in your shoulder. You can feel the heat from his cheeks radiating against your chest.";
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "I…I-I'm so happy, Senpai…";
			}
			
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "T-t-thank you for being so understanding. I-I…I think I can take it from here.";
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "In a hormone-fuelled burst of courage, Elephant wraps his trunk around your shoulders and pulls you in close, closer than you two have ever been before.";
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "Before you have a chance to react or protest, he places his mouth on yours.";
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "...While neither of you are skilled kissers, you can feel the passion behind Elephant's actions.";
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "He's honest and sweet–the definition of 'young love'.";
			}
			
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "You can also feel the poor kid trembling as he pulls away from you.";
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "W-w-w-wow. That was v-v-very n-n-n-nice.";
			}
			if (GetComponent(date).pos == 33) {
				GetComponent(date).vocal = "The two of you smile as Elephant pulls you in close once again.";
			}
			if (GetComponent(date).pos == 34) {
				GetComponent(date).vocal = "And please…feel free to call me by the nickname my mother gave me.";
			}
			if (GetComponent(date).pos == 35) {
				GetComponent(date).vocal = "…'Elphy'…";
			}
			if (GetComponent(date).pos == 37){
				GetComponent(date).vocal = "fuggin piss";
				playerObject.GetComponent(player).levelElephant = 2;
				Application.LoadLevel("map");
			}
		}
	}
}
function Update () {
}