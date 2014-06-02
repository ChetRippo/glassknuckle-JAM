#pragma strict
var playerObject : GameObject;
var animalName : String = "Giraffe";
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
		if (playerObject.GetComponent(player).levelGiraffe == 0){
			if (GetComponent(date).pos == 0){
				GetComponent(date).vocal = "How's the weather down there? Haha!";
				GetComponent(date).action = false;
				GetComponent(date).dateSprite = costumeSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "…I'm actually curious though, my neck is, like, WAAAYYY too tall.";
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "> Will you spend time with Giraffe?";
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
				GetComponent(date).vocal = "Was that a yes? I can't hear anything.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 4) {
				GetComponent(date).vocal = "Seriously though, how's the weather down there?";
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Sunny.",promptStyle)){
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Rainy.",promptStyle)){
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
				}
				if (GUI.Button(Rect(promptX,prompt3Y,promptW,promptH),"Very Rainy.",promptStyle)){
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
				}
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "What? I can't hear you…";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "> You desperately try to convey the weather to Giraffe, but she just can't hear you.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "I'm going to assume you said the weather is nice, so I'm glad!";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "Things are usually pretty quiet up here. What with being above the cloud level and all.";
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "Gosh, I'm sorry! We've only just met and I haven't even asked for your name!";
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "> Again, you try to tell Giraffe your name.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "Sorry, what was that?";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "> You scream your name as loud as you possibly can.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "Nope, still not hearing it. Is it…Roger?";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "Michelle?";
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "Roxas?";
			}
			if (GetComponent(date).pos == 16) {
				GetComponent(date).vocal = "> Getting to know Giraffe might be more difficult than you originally intended.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "Is it….Cutie?";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "Or maybe not.";
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "> You nod vigorously.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "Oh! It's CUTIE! Great!";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "I was trying to read your lips and it looks like it worked!";
			}
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = "You see, I have great eyesight, so I'm pretty good at reading lips.";
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "Or if you grab some cardboard and a marker, that might work too.";
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "> This relationship might get very odd, very fast.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "> Are you into tall partners?";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Yeah.",promptStyle)){
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
					choice = 1;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Not Really.",promptStyle)){
					GetComponent(date).prompt = false;
					GetComponent(date).pos=30;
					choice = 2;
				}
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "I can see that smile on your face.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "What are you thinking? You want to get some lunch sometime?";
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "> You and Giraffe make plans for a real date.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "> Here's hoping she actually heard you…";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 30) {
				if (choice == 1){
				GetComponent(date).pos = 35;
				}
				GetComponent(date).vocal = "So, want to grab some coffee sometime?";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "> You politely decline, but you don't think she heard you.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "What was that? You absolutely accept?";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 33) {
				GetComponent(date).vocal = "> Uh oh.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 34) {
				GetComponent(date).vocal = "That's great! I'll see you soon!";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 35) {
				GetComponent(date).vocal = "> Giraffe blows you a kiss and walks away.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 36) {
				GetComponent(date).vocal = "> Better not move until that kiss reaches you…";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 37) {
				GetComponent(date).vocal = "> …";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 38) {
				GetComponent(date).vocal = "> ……";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 39) {
				GetComponent(date).vocal = "> …………";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 40) {
				GetComponent(date).vocal = "> …Twenty minutes later, the kiss finally reaches you. You catch it and leave.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 41) {
				GetComponent(date).vocal = "<neck puns>";
				GetComponent(date).pos = 1;
				playerObject.GetComponent(player).levelGiraffe = 1;
				Application.LoadLevel("map");
			}
		} else if (playerObject.GetComponent(player).levelGiraffe == 1){
			if (GetComponent(date).pos == 0) {
				GetComponent(date).vocal = "Is that you, Cutie?";
				GetComponent(date).action = false;
				GetComponent(date).dateSprite = costumeSprite;
				GetComponent(date).bkgSprite = animalBackground;
			}
			if (GetComponent(date).pos == 1) {
				GetComponent(date).vocal = "Wow…you're looking good today.";
			}
			if (GetComponent(date).pos == 2) {
				GetComponent(date).vocal = "> Will you go on a date with Giraffe?";
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
				GetComponent(date).vocal = "Is that a yes? I think that's a yes.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 5) {
				GetComponent(date).vocal = "> This is it…the big date.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 6) {
				GetComponent(date).vocal = "> Whether she knows your true feelings or not, Giraffe assumes you're gung-ho about the event.";
			}
			if (GetComponent(date).pos == 7) {
				GetComponent(date).vocal = "> So you might as well make the most of it.";
			}
			if (GetComponent(date).pos == 8) {
				GetComponent(date).vocal = "> And don't you DARE break her heart…";
			}
			if (GetComponent(date).pos == 9) {
				GetComponent(date).vocal = "> You and Giraffe take a trip to the café.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 10) {
				GetComponent(date).vocal = "> …You try not to think about how Giraffe made it through the door, or how it may or may not be jutting through the roof right now.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 11) {
				GetComponent(date).vocal = "> Just try to focus on being smooth, okay?";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 12) {
				GetComponent(date).vocal = "This is a pretty swanky place…right?";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 13) {
				GetComponent(date).vocal = "I can't actually see through the roof, so I assume we're in a nice restaurant.";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Tell her the truth.",promptStyle)){
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
					GetComponent(date).action = false;
					choice = 1;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Lie and say it's expensive.",promptStyle)){
					GetComponent(date).pos = 16;
					GetComponent(date).prompt = false;
					GetComponent(date).action = false;
					choice = 2;
				}
			}
			if (GetComponent(date).pos == 14) {
				GetComponent(date).vocal = "Oh, of course I know that. There's one place to eat in this entire zoo.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 15) {
				GetComponent(date).vocal = "Where else would we go?";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 16) {
				if (choice == 1){
					GetComponent(date).pos = 18;
				}
				GetComponent(date).vocal = "Aw, you're sweet for trying so hard.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 17) {
				GetComponent(date).vocal = "But I know there's only one place to eat around here.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 18) {
				GetComponent(date).vocal = "It's not fine dining, but I'm happy enough to be here with you.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 19) {
				GetComponent(date).vocal = "I'll be honest–I can be a bit of a snob sometimes.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 20) {
				GetComponent(date).vocal = "The other animals call me out turning my nose up at them, but it's like, 'Hey! I'm seriously like 400 feet tall here!'";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 21) {
				GetComponent(date).vocal = "But you get me, Cutie. You're a real down-to-earth kind of person.";
			}
			if (GetComponent(date).pos == 22) {
				GetComponent(date).vocal = "I'm glad I stuck my neck out for you.";
			}
			if (GetComponent(date).pos == 23) {
				GetComponent(date).vocal = "> She's laying on the puns…she must really be into you!";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 24) {
				GetComponent(date).vocal = "> Quick! Act fast!";
				GetComponent(date).action = true;
				GetComponent(date).prompt = true;
				if (GUI.Button(Rect(promptX,prompt1Y,promptW,promptH),"Climb her neck and plant a kiss on her cheek.",promptStyle)){
					GetComponent(date).pos++;
					GetComponent(date).prompt = false;
					GetComponent(date).action = false;
					choice = 1;
				}
				if (GUI.Button(Rect(promptX,prompt2Y,promptW,promptH),"Climb on her back and hug the base of her neck.",promptStyle)){
					GetComponent(date).pos=41;
					GetComponent(date).prompt = false;
					GetComponent(date).action = false;
					choice = 2;
				}
			}
			if (GetComponent(date).pos == 25) {
				GetComponent(date).vocal = "> Well, no one's stopping you…";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 26) {
				GetComponent(date).vocal = "> You strap on some climbing gear and start moving up Giraffe's firm neck.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 27) {
				GetComponent(date).vocal = "> Phew….phew….";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 28) {
				GetComponent(date).vocal = "> Seems you misunderestimated Giraffe's modesty…";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 29) {
				GetComponent(date).vocal = "> Her neck is insanely tall!";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 30) {
				GetComponent(date).vocal = "> …";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 31) {
				GetComponent(date).vocal = "> ………";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 32) {
				GetComponent(date).vocal = "> Is….is that the top?";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 33) {
				GetComponent(date).vocal = "> Yes! You've made it!";
				GetComponent(date).action = true;
				GetComponent(date).dateSprite = normalSprite;
				GetComponent(date).bkgSprite = specialBackground;
			}
			if (GetComponent(date).pos == 34) {
				GetComponent(date).vocal = "WOAH! What are YOU doing up here?!";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 35) {
				GetComponent(date).vocal = "> You explain how you climbed to the top of her neck to see her beautiful face.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 36) {
				GetComponent(date).vocal = "That's…that's so sweet!";
				GetComponent(date).dateSprite = blushSprite;
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 37) {
				GetComponent(date).vocal = "> You two share a tender kiss under the light of the stars, unfettered by the clouds below.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 38) {
				GetComponent(date).vocal = "> After a few minutes of tender care, you make your way down Giraffe's neck.";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 39) {
				GetComponent(date).vocal = "> Down, down, down.";
				GetComponent(date).dateSprite = costumeSprite;
				GetComponent(date).bkgSprite = animalBackground;
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 40) {
				GetComponent(date).vocal = "> What a workout! You're now oh so swole for the summer, and you've got a girlfriend! Score!";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 41) {
				if (choice == 1){
				playerObject.GetComponent(player).levelGiraffe = 2;
				Application.LoadLevel ("map");
				}
				GetComponent(date).vocal = "Aw, thanks babe.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 42) {
				GetComponent(date).vocal = "You're pretty cute for such a short high school student.";
				GetComponent(date).action = false;
			}
			if (GetComponent(date).pos == 43) {
				GetComponent(date).vocal = "> The two of you cuddle for a few minutes, then ditch the café to find a more private neck of the woods…";
				GetComponent(date).action = true;
			}
			if (GetComponent(date).pos == 44) {
				GetComponent(date).vocal = "> That was heated.";
				playerObject.GetComponent(player).levelGiraffe = 2;
				Application.LoadLevel ("map");
			}
		}
	}
}
function Update () {
}