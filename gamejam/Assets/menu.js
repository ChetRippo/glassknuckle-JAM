#pragma strict
var pos : int = 0;
var vocal : String = "har";
var llama : Array = new Array();
function Start () {
	llama.push ("Hello");
	llama.push ("Nick");
	llama.push ("Nicdk");
	llama.push ("Nisfck");
	//"I am Nick Morgan","I love you","Let's fuck in the basement."
}

function OnGUI () {
	GUI.Label (Rect (Screen.width*.5, Screen.height*.8, 100, 30),vocal);
}

function Update () {
	if (Input.GetKeyDown("space") && pos < llama.Count-1) {
		pos++;
		vocal = llama[pos] as String;
	}
	
	//Transform.Find ("llama".GetComponet(
}