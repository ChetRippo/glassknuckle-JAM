#pragma strict
var playerObject : GameObject;
var animalName : String = "Janitor";
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
		if (playerObject.GetComponent(player).levelJanitor == 0){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "Grumble, grumble…";
				GetComponent(date).action = false;
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "> Will you spend time with the Janitor?";
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
				GetComponent(date).vocal = "Huh? Like I'd even want to spend time with you...";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 3) {
				GetComponent(date).vocal = "What brings you to the zoo, idiot?";
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"We're trapped here!",promptStyle)){
					GetComponent(date).pos=4;
					GetComponent(date).prompt = false;
					choice = 1;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Why are you so rude?",promptStyle)){
					GetComponent(date).pos=7;
					GetComponent(date).prompt = false;
					choice = 2;
				}
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "Yeah, and I'm trapped in my office with YOU.";
				GetComponent(date).dateSprite = angrySprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "Get it? Because I don't like you.";
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "(Gosh, they're so cute…)";
				GetComponent(date).dateSprite = blushSprite;
				GetComponent(date).pos = 10;
			}
			if (GetComponent(date).pos == 7) {
				if (choice == 1)
				{
				GetComponent(date).pos = 10;
				}
				GetComponent(date).vocal = "What are you talking about, idiot?";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "I'm being rude to you because that's the way you get people to like you, IDIOT!!";
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "BEING MEAN TO PEOPLE IS SEXY, IDIOT!!!!!!";
				GetComponent(date).dateSprite = angrySprite;
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "So why'd you come here, anyways? To the zoo, I mean.";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "Did you get lost on the way to daycare?";
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "You big baby? You big dumb, cute, oh-my-god-I-want-to-kiss-you-so-bad idiot sexy baby?";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "> Is he…is he suggesting something?";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "> You're not sure.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "If you're so dumb, why don't you go on a date with me?";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "You're probably too dumb to know what a date is!!";
				GetComponent(date).dateSprite = angrySprite;
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "Why don't you let me take you on one so that you'll know what a date looks like when you finally go on one with someone who actually likes you?!?!!?!?!";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "> This seems abusive somehow.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "> Are you sure you want to encourage this kind of abusive behavior?";
				GetComponent(date).dateSprite = angrySprite;
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yes",promptStyle)){
					GetComponent(date).prompt = false;
					GetComponent(date).pos=28;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"No",promptStyle)){
					GetComponent(date).prompt = false;
					GetComponent(date).pos=20;
				}
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "> Yeah, good choice.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "> This patriarchal shit might be cute in your typical anime, but not here.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = "> Not in THIS zoo.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "> You politely tell the Janitor that you demand respect in your damn relationships.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "> …He shuts up fast. Seems like he talks a big game but can't back it up.";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "> You know the type: Loud as a motorbike, but wouldn't bust a grape in a fruit fight.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "> Knocking over a pile of cleaning supplies, you exit the closet.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "creeper.";
				playerObject.GetComponent(player).levelJanitor = -1;
				Application.LoadLevel("map");
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "> You decide to go along with this Janitor's tired trope.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "> Takes all kinds to make a world, right?";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "> You agree to go on a date with him.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "Fine, I guess I can go on a date with you.";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "I guess….";
			}
			if (GetComponent(date).pos == 33) {
				GetComponent(date).vocal = "Sigh….";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 34) {
				GetComponent(date).vocal = "Ugh….";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 35) {
				GetComponent(date).vocal = "...Yuck...";
			}
			if (GetComponent(date).pos == 36) {
				GetComponent(date).vocal = "> He hums and haws for a few minutes until he finally gives you his phone number.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 37) {
				GetComponent(date).vocal = "null";
				playerObject.GetComponent(player).levelJanitor = 1;
				GetComponent(date).pos = 1;
				Application.LoadLevel("map");
			}
		} else if (playerObject.GetComponent(player).levelJanitor == 1){
			if (GetComponent(date).pos == 0) {
				GetComponent(date).vocal = "Oh, it's you again.";
				GetComponent(date).action = false;
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "I guess…we could go on that date.";
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "> Will you go on a date with this tsundere Janitor?";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yes",promptStyle)){
					GetComponent(date).pos = 4;
					GetComponent(date).prompt = false;
					GetComponent(date).action = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"No",promptStyle)){
					GetComponent(date).prompt = false;
					Application.LoadLevel ("map");
				}
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "I can't promise that I'll have fun...";
				GetComponent(date).dateSprite = blushSprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "Well, I hope you weren't thinking that we were going out anywhere.";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "I usually just spend time in my closet, mixing cleaning supplies and thinking about my mops…";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "So, what do you think? What's more fun?";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Mixing cleaning supplies",promptStyle)){
					GetComponent(date).pos=8;
					GetComponent(date).prompt = false;
					GetComponent(date).action = false;
					choice = 1;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Thinking about mops",promptStyle)){
					GetComponent(date).pos=11;
					GetComponent(date).prompt = false;
					GetComponent(date).action = false;
					choice = 2;
				}
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "I have to agree. I'm into chemicals.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "Haha, have you seen Breaking Bad? It's like, such a good show.";
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "Not like I'd want to watch all five seasons with you while we share popcorn and cuddle, though…";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 11) {
				if (choice == 1){
				GetComponent(date).pos = 14;
				}
				GetComponent(date).vocal = "You thinking about my mop?";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "You'd better not be thinking about my mop, you'd better only be thinking about me!";
				GetComponent(date).dateSprite = angrySprite;
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "Idiot…";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "> Wow, this guy really is committing to this act…";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "I've been working at this zoo for a long time.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "I was once just a lonely high school student, just like you.";
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "Looking for love, expecting to find my soulmate amongst the dolphin pools…";
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "We would stroll through the zoo, chatting and laughing, time drifting by as ice cream dripped through our fingers….";
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "> You feel like you've heard this before…";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "But now look at me! Stuck in a janitor's closet, with an idiot like you!";
				GetComponent(date).dateSprite = angrySprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "> …Are you doomed to share this Janitor's fate? This doesn't seem right…";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = "Anyways, do you want to go out with me?";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "Maybe share a quick smooch or two?";
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "> This is bad. You should get out before he starts educating you on proper custodial service techniques.";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Stay.",promptStyle)){
					GetComponent(date).pos=25;
					GetComponent(date).prompt = false;
					GetComponent(date).action = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Leave",promptStyle)){
					GetComponent(date).pos=31;
					GetComponent(date).prompt = false;
					GetComponent(date).action = false;
				}
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "> Your loss…";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "> You and the Janitor spend hours cleaning the zoo, top to bottom.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "> All the while, he calls you an idiot, makes fun of your lack of custodial experience, and is generally just not very nice.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "> I guess that means he likes you?";
				GetComponent(date).dateSprite = blushSprite;
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "> Can't wait for the wedding….";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "to be wed.";
				playerObject.GetComponent(player).levelJanitor = 2;
				GetComponent(date).pos = 1;
				Application.LoadLevel("map");
			}
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "> You may be giving up on a potential boyfriend, but sometimes it's best to just walk away.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "> The Janitor tries to think of a clever insult, but it seems like you've gotten through to him.";
				GetComponent(date).dateSprite = angrySprite;
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 33) {
				GetComponent(date).vocal = "> Guess he should have been a little nicer.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 34) {
				GetComponent(date).vocal = "> Oh well…..";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 35) {
				GetComponent(date).vocal = "fail.";
				playerObject.GetComponent(player).levelJanitor = -1;
				GetComponent(date).pos = 1;
				Application.LoadLevel("map");
			}
		}
	}
}
function Update () {
}