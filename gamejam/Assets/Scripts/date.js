#pragma strict
var stylefont : Font;
var player : GameObject;
var style : GUIStyle;
var pos : int = 0;
var dateSprite : Sprite;
var vocal : String;
var lover : String;
var temp : float;

private var windowPrompt : boolean = false;

function Start () {
	lover = (player.GetComponent("player") as player).currentAnimal;
	dateSprite = (GetComponent(lover) as animal).normalSprite;
	style.normal.textColor = Color.white;
	style.font = stylefont;
	style.wordWrap = true;
	GetComponent(SpriteRenderer).sprite = dateSprite;
}

function OnGUI () {
	style.fontSize = Screen.width/26.53f;
	var speaker : animal = (GetComponent(lover) as animal);
	var spoken : String = (GetComponent(lover) as animal).dialog[pos+1];
	GUI.Label (Rect (Screen.width/21.02f, Screen.height/1.47f,650,40),(GetComponent(lover) as animal).animalName,style);
	GUI.Label (Rect (Screen.width/20.83f, Screen.height/1.3f,650,40),vocal,style);
	//GUI.backgroundColor = new Color(0,0,0,0);
	if (GUI.Button(Rect(Screen.width/70.7f,Screen.height/1.6f,Screen.width/1.03f,Screen.height/2.39f),"") 
				&& pos < (GetComponent(lover) as animal).dialog.length-1 && !windowPrompt) {
		if (spoken.Substring(0,6) == "prompt"){
			Debug.Log(speaker);
			windowPrompt = true;
		} else {
			pos++;
			vocal = (GetComponent(lover) as animal).dialog[pos];
		}
	}
	if(windowPrompt){
		var poopy : int = spoken[6];
		poopy-=48;
		//Debug.Log(poopy);
		if (GUI.Button(Rect(10,10,100,100),(speaker.prompts[poopy] as String[])[0])){
			windowPrompt = false;
			pos = 6;
			vocal = (GetComponent(lover) as animal).dialog[pos];
		}
	}
}

function Update () {
	
}