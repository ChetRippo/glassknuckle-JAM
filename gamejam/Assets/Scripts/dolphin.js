#pragma strict
var playerObject : GameObject;
var animalName : String = "Dolphin";
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
		if (playerObject.GetComponent(player).levelDolphin == 0){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "Welcome to my tank! My name's Dolphin!";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "Heehee…you're pretty cute. Want to swim some laps with me?";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "> Will you spend time with Dolphin?";
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
				GetComponent(date).vocal = "Alright! Race you to the bottom and back!";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "Wow, you're a pretty good swimmer!";
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "Where'd you learn those moves?";
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yeah, I work out.",promptStyle)){
					GetComponent(date).pos++;
					choice = 1;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"I'm just a natural-born swimmer!",promptStyle)){
					GetComponent(date).pos = 10;
					GetComponent(date).prompt = false;
				}
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "Me too! I'm a real exercise nut.";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "I could just swim around all day.";
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "I mean, I'm pretty much required to swim around to move freely, but hey!";
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "Might as well enjoy it, right?";
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "Ha! I love your enthusiasm.";
				if (choice == 1){
				GetComponent(date).pos = 12;
				choice = 0;
				}
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "All you're missing is a pair of flippers!";
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "What are you looking at?";
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "Oh, you noticed my book?";
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "I may not look it, but I'm a pretty big nerd!";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "I love reading and video games, but others only ask me for personal training advice.";
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "It's like, I love getting swoll for the summer, but a girl's got other passions!";
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "I mean, what do you see when you look at me?";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"A jock.",promptStyle)){
					GetComponent(date).pos = 20;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"A nerd.",promptStyle)){
					GetComponent(date).pos = 20;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt3Y,promptW,promptH),"You're just you.",promptStyle)){
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
				}
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "You know, no one's said that to me before!";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "Regardless, you're a pretty cool guy.";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "If you want, I can show you my vintage Sega Genesis!";
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "Though I can't turn it on, what with us being underwater and all…";
			}
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = "> You spend some time looking at old video games with Dolphin.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "…";
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "That was a lot of fun, Cutie.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "I'm glad you're so open-minded.";
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "Going with the flow is the only way to live life!";
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "Don't get so hung up on preconceived notions of people.";
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "Right?";
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "Anyways, hopefully we can hang out again!";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "> You swim one more lap with Dolphin and then say goodbye.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "Dolphin's eyes invert.";
				playerObject.GetComponent(player).levelDolphin = 1;
				Application.LoadLevel ("map");
			}
		} else if (playerObject.GetComponent(player).levelDolphin == 1){
			if (GetComponent(date).pos == 0) {
				GetComponent(date).vocal = "What's up, Cutie?";
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "Up for another race? Or would you rather play some card games?";
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "Will you play Yu-Gi-Oh! with Dolphin?";
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
				GetComponent(date).vocal = "Yes!! I knew believing in the heart of the cards would bring you back!";
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "Flamingo is good for a laugh, and Duck can be pretty funny at times…";
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "…But none of them are as cultured and easy-going as you, Cutie.";
				GetComponent(date).dateSprite = blushSprite;
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "The other animals are always trying to put a label on me!";
				GetComponent(date).dateSprite = normalSprite;
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "…Sorry, I didn't mean to go off on another rant again.";
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "Dealing with this every day can get exhausting, you know?";
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "Anyways, I want to show you something.";
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "This is something I haven't been able to show anyone else…are you sure you're ready?";
				GetComponent(date).dateSprite = blushSprite;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yes",promptStyle)){
					choice = 1;
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"No",promptStyle)){
					GetComponent(date).prompt = false;
					GetComponent(date).pos = 29;
				}
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "Alright. Let me get changed…";
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "So…what do you think? Pretty cute, huh?";
				GetComponent(date).dateSprite = costumeSprite;
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "I've always been into the 'anime maid' look.";
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "Want to hear my accent? Here goes…";
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "~Hello, master! How can I serve you today~?";
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "Teehee~";
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "> Dolphin bows respectfully.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "This is great, I've never been able to cosplay in front of anyone before!";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "Don't take my acting the wrong way–I'm an intelligent dolphin and I don't take orders from anyone.";
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "Unless of course, you order me to have a good time…in which case I would happily oblige.";
			}
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = "~Teehee, oh Senpai~~";
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "> Dolphin swims up next to you and wraps her fin around your hand.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "Thanks for humoring me, Cutie.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "If you don't mind…could I keep the costume on for a little while longer?";
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "…";
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "> You and Dolphin sing anime theme songs for hours.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "";
				if (choice == 1){
					playerObject.GetComponent(player).levelDolphin = 2;
					choice = 0;
					Application.LoadLevel ("map");
				}
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "Are you serious?";
				GetComponent(date).dateSprite = angrySprite;
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "I gave you a sexually-charged question like that and all you can say is 'NO'?";
			}
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "Aren't you supposed to be a hormone-driven high school student?";
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "I wasn't even going to show you anything that sexy, jeez!";
			}
			if (GetComponent(date).pos == 33) {
				GetComponent(date).vocal = "This date is over!!";
			}
			if (GetComponent(date).pos == 34) {
				GetComponent(date).vocal = "yo fckkkk";
				playerObject.GetComponent(player).levelDolphin = -1;
				Application.LoadLevel ("map");
			}
		}
	}
}
function Update () {
}