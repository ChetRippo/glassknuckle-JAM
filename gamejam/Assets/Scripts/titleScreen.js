#pragma strict

function Start () {

}

function OnGUI () {
GUI.backgroundColor = new Color(0,0,0,0);
if (GUI.Button(Rect(0,0,Screen.width,Screen.height),"")) {
		Application.LoadLevel ("map");
	}
}

function Update () {

}