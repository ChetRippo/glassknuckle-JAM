#pragma strict
var player : GameObject;
var currentLocation : Sprite;
var locMap : Sprite;
var locCafe : Sprite;
var locPit : Sprite;
var locForest : Sprite;
var locPool : Sprite;
var locSav : Sprite;
var tempPos : float;

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
	currentLocation = locMap;
	GetComponent(SpriteRenderer).sprite = currentLocation;
}
/*function animalObject (animal,x,y,scale) {
	GUI.backgroundColor = new Color(0,0,0,0);
	if (GUI.Button(Rect(x,y,scale,scale),animal)){
		(player.GetComponent("player") as player).currentAnimal = animal;
		Application.LoadLevel ("dateScene");
	}
}*/
function OnGUI() {
	//GUI.backgroundColor = new Color(0,0,0,0);
	if (currentLocation == locMap){
		if (GUI.Button(Rect(Screen.width/2.15f,Screen.height/5.27f,Screen.width/7.68f,Screen.height/4.25f),"")){
			currentLocation = locCafe;
			GetComponent(SpriteRenderer).sprite = currentLocation;
		}
		if (GUI.Button(Rect(467,21,78,50),"")){
			currentLocation = locPit;
			GetComponent(SpriteRenderer).sprite = currentLocation;
		}
		if (GUI.Button(Rect(104,85,164,101),"")){
			currentLocation = locForest;
			GetComponent(SpriteRenderer).sprite = currentLocation;
		}
		if (GUI.Button(Rect(455,121,145,95),"")){
			currentLocation = locPool;
			GetComponent(SpriteRenderer).sprite = currentLocation;
		}
		if (GUI.Button(Rect(232,193,194,95),"")){
			currentLocation = locSav;
			GetComponent(SpriteRenderer).sprite = currentLocation;
		}
	}
	if (currentLocation == locCafe) {
		if (GUI.Button(Rect(389,105,217,217),panda)){
			(player.GetComponent("player") as player).currentAnimal = "panda";
			Application.LoadLevel ("dateScene");
			}
		//animalObject(panda,10,10,200);
	}
}
function Update () {


}