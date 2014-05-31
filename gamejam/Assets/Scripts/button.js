#pragma strict
	var btnTexture : Texture;
	var player : GameObject;
	var animal : String;
	var posx : int;
	var posy : int;
	var scale : int;
function OnGUI() {
	GUI.backgroundColor = new Color(0,0,0,0);
	if (GUI.Button(Rect(posx,posy,scale,scale),btnTexture)){
		(player.GetComponent("player") as player).currentAnimal = animal;
		Application.LoadLevel ("dateScene");
	}
}

function Start () {
}

function Update () {

}