#pragma strict
var vocal : String;
var pos : int = 0;

function Start () {

}

function Update () {
	if (pos == 0){
		vocal = "Welcome to my tank! My name's Dolphin!";
	}
	if (pos == 1) {
		vocal = "Heehee…you're pretty cute. Want to swim some laps with me?";
	}
	if (pos == 2) {
		vocal = "Will you spend time with Dolphin?";
		if (GUI.Button(Rect(10,10,100,100),"Yes"){
			pos++;	
		}
		if (GUI.Button(Rect(120,10,100,100),"No"){
			pos++;	
		}
	}
	if (pos == 3) {
		vocal = "Alright! Race you to the bottom and back!";
	}
	if (pos == 4) {
		vocal = "Wow, you're a pretty good swimmer!";
	}
	if (pos == 5) {
		vocal = "Where'd you learn those moves?";
	}
}