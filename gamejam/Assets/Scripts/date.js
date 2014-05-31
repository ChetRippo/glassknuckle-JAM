#pragma strict
var stylefont : Font;
var style : GUIStyle;
var pos : int = 0;
var vocal : String = "har";
var lover : String = "panda";
function Start () {
	style.normal.textColor = Color.white;
	style.fontSize = 26;
	style.font = stylefont;
	style.wordWrap = true;
}

function OnGUI () {
	GUI.Label (Rect (40, 320,650,40),vocal,style);
}

function Update () {
	
	if (Input.GetKeyDown("space") && pos < (GetComponent(lover) as animal).dialog.Count-1) {
		pos++;
		vocal = (GetComponent(lover) as animal).dialog[pos] as String;
	}
	
}