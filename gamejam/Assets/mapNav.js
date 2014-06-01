#pragma strict
var player : GameObject;
var currentLocation : Sprite;
var locMap : Sprite;
var locCafe : Sprite;
var locPit : Sprite;
var locForest : Sprite;
var locPool : Sprite;
var locSav : Sprite;
var temp : float;

var panda : Texture;
var dolphin : Texture;
var snake : Texture;
var burger : Texture;
var spider : Texture;
var janitor : Texture;
var owl : Texture;
var car : Texture;
var horse : Texture;
var cougar : Texture;
var giraffe : Texture;
var duck : Texture;
var elephant : Texture;
var hippo : Texture;
var flamingo : Texture;
function Start () {
	player = GameObject.Find("PlayerObject");
	currentLocation = locMap;
	GetComponent(SpriteRenderer).sprite = currentLocation;
}
function OnGUI() {
	GUI.backgroundColor = new Color(0,0,0,0);
	if (currentLocation == locMap){
		if (GUI.Button(Rect(Screen.width/2.15f,Screen.height/5.27f,Screen.width/7.68f,Screen.height/4.25f),"")){
			currentLocation = locCafe;
			GetComponent(SpriteRenderer).sprite = currentLocation;
		}
		if (GUI.Button(Rect(Screen.width/1.6f,Screen.height/25.81,Screen.width/8.35f,Screen.height/6.73f),"")){
			currentLocation = locPit;
			GetComponent(SpriteRenderer).sprite = currentLocation;
		}
		if (GUI.Button(Rect(Screen.width/10.18f,Screen.height/7.42f,Screen.width/3.38f,Screen.height/2.76f),"")){
			currentLocation = locForest;
			GetComponent(SpriteRenderer).sprite = currentLocation;
		}
		if (GUI.Button(Rect(Screen.width/1.65f,Screen.height/3.69f,Screen.width/4.49f,Screen.height/3.17f),"")){
			currentLocation = locPool;
			GetComponent(SpriteRenderer).sprite = currentLocation;
		}
		if (GUI.Button(Rect(Screen.width/3.23f,Screen.height/2f,Screen.width/3.59f,Screen.height/4.68f),"")){
			currentLocation = locSav;
			GetComponent(SpriteRenderer).sprite = currentLocation;
		}
	}
	if (currentLocation == locCafe) {
		if (GUI.Button(Rect(389,105,217,217),panda)){
			(player.GetComponent("player") as player).currentAnimal = "Panda";
			Application.LoadLevel ("dateScene");
		}
	}
	if (currentLocation == locPool) {
		if (GUI.Button(Rect(Screen.width/1.6,Screen.height/2.21,Screen.width/3.14,Screen.width/3.14),dolphin)){
			(player.GetComponent("player") as player).currentAnimal = "Dolphin";
			Application.LoadLevel ("dateScene");
		}
	}
}
function Update () {


}