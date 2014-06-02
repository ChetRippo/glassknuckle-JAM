#pragma strict
var playerObject : GameObject;
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
var horses : Texture;
var cougar : Texture;
var giraffe : Texture;
var duck : Texture;
var elephant : Texture;
var hippo : Texture;
var flamingo : Texture;
var back : Texture;
function Start () {
	playerObject = GameObject.Find("PlayerObject");
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
			currentLocation = locSav;
			GetComponent(SpriteRenderer).sprite = currentLocation;
		}
		if (GUI.Button(Rect(Screen.width/3.23f,Screen.height/2f,Screen.width/3.59f,Screen.height/4.68f),"")){
			currentLocation = locPool;
			GetComponent(SpriteRenderer).sprite = currentLocation;
		}
	}
	if (currentLocation != locMap) {
	if (GUI.Button(Rect(Screen.width/59.41,Screen.height/52.6,Screen.width/10.99,Screen.width/10.99),back)){
				currentLocation = locMap;
				GetComponent(SpriteRenderer).sprite = currentLocation;
			}
	}
	if (currentLocation == locCafe) {
		if (playerObject.GetComponent(player).levelPanda == 0 || playerObject.GetComponent(player).levelPanda == 1){
			if (GUI.Button(Rect(Screen.width/1.83,Screen.height/4.04,Screen.width/2.35,Screen.width/2.35),panda)){
				playerObject.GetComponent(player).currentAnimal = "Panda";
				Application.LoadLevel ("dateScene");
			}
		}
		if (playerObject.GetComponent(player).levelBurger == 0 || playerObject.GetComponent(player).levelBurger == 1){
			if (GUI.Button(Rect(Screen.width/2.84,Screen.height/3.72,Screen.width/3.46,Screen.width/3.46),burger)){
				playerObject.GetComponent(player).currentAnimal = "Burger";
				Application.LoadLevel ("dateScene");
			}
		}
	}
	if (currentLocation == locPool) {
		if (playerObject.GetComponent(player).levelDolphin == 0 || playerObject.GetComponent(player).levelDolphin == 1){
			if (GUI.Button(Rect(Screen.width/1.6,Screen.height/2.21,Screen.width/3.14,Screen.width/3.14),dolphin)){
				playerObject.GetComponent(player).currentAnimal = "Dolphin";
				Application.LoadLevel ("dateScene");
			}
		}
		if (playerObject.GetComponent(player).levelJanitor == 0 || playerObject.GetComponent(player).levelJanitor == 1){
			if (GUI.Button(Rect(Screen.width/-4.44,Screen.height/5.62,Screen.width/1.6,Screen.width/1.6),janitor)){
				playerObject.GetComponent(player).currentAnimal = "Janitor";
				Application.LoadLevel ("dateScene");
			}
		}
	}
	if (currentLocation == locForest) {
		if (playerObject.GetComponent(player).levelHorses == 0 || playerObject.GetComponent(player).levelHorses == 1){
			if (GUI.Button(Rect(Screen.width/1.82,Screen.height/159.2,Screen.width/2.09,Screen.width/2.09),horses)){
				playerObject.GetComponent(player).currentAnimal = "Horses";
				Application.LoadLevel ("dateScene");
			}
		}
	}
	if (currentLocation == locPit) {
		if (playerObject.GetComponent(player).levelSnake == 0 || playerObject.GetComponent(player).levelSnake == 1){
			if (GUI.Button(Rect(Screen.width/1.5,Screen.height/1.87,Screen.width/3.1,Screen.width/3.1),snake)){
				playerObject.GetComponent(player).currentAnimal = "Snake";
				Application.LoadLevel ("dateScene");
			}
		}
		if (playerObject.GetComponent(player).levelCar == 0 || playerObject.GetComponent(player).levelCar == 1){
			if (GUI.Button(Rect(Screen.width/-19.07,Screen.height/2.2,Screen.width/3.09,Screen.width/3.09),car)){
				playerObject.GetComponent(player).currentAnimal = "Mercedes";
				Application.LoadLevel ("dateScene");
			}
		}
		if (playerObject.GetComponent(player).levelSpider == 0 || playerObject.GetComponent(player).levelSpider == 1){
			if (GUI.Button(Rect(Screen.width/3.77,Screen.height/55.59,Screen.width/2.09,Screen.width/2.09),spider)){
				playerObject.GetComponent(player).currentAnimal = "Spider";
				Application.LoadLevel ("dateScene");
			}
		}
	}
	if (currentLocation == locSav) {
		if (playerObject.GetComponent(player).levelElephant == 0 || playerObject.GetComponent(player).levelElephant == 1){
			if (GUI.Button(Rect(Screen.width/1.82,Screen.height/159.2,Screen.width/2.09,Screen.width/2.09),elephant)){
				playerObject.GetComponent(player).currentAnimal = "Elephant";
				Application.LoadLevel ("dateScene");
			}
		}
		if (playerObject.GetComponent(player).levelGiraffe == 0 || playerObject.GetComponent(player).levelGiraffe == 1){
			if (GUI.Button(Rect(Screen.width/-3.77,Screen.height/-2.48,Screen.width/1.27,Screen.width/1.27),giraffe)){
				playerObject.GetComponent(player).currentAnimal = "Giraffe";
				Application.LoadLevel ("dateScene");
			}
		}
	}
}
function Update () {


}