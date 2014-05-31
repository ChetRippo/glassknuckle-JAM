#pragma strict
	var btnTexture : Texture;
	function OnGUI() {
		if (!btnTexture) {
			Debug.LogError("texture needed");
			return;
		}
		GUI.backgroundColor = new Color(0,0,0,0);
		if (GUI.Button(Rect(10,10,500,500),btnTexture))
			Debug.Log("Clicked the button with an image");
			Application.LoadLevel ("date");
		}

function Start () {

}

function Update () {

}