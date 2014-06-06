#pragma strict
var stylefont : Font;
var player : GameObject;
var textboxObject : GameObject;
var dialogBox : Sprite;
var actionBox : Sprite;
var playClip : AudioClip;
var bkgLoop: AudioSource;
var action : boolean = false;
var promptObject : GameObject;
var style : GUIStyle;
var promptStyle : GUIStyle;
var pos : int = 0;
var currentDate : String;
var dateSprite : Sprite;
var vocal : String;
var prompt = false;
var temp : float;
var bkgObject : GameObject;
var bkgSprite : Sprite;
var promptX : float;
var prompt1Y : float;
var promptGap : float;
var promptW : float;
var promptH : float;

private var textIndex : int = 0;
private var prevVocal : String;

function Start () {
	player = GameObject.Find("PlayerObject");
	currentDate = (player.GetComponent("player") as player).currentAnimal;
	style.normal.textColor = Color.white;
	style.font = stylefont;
	style.wordWrap = true;
	var aSources = GetComponents(AudioSource);
	bkgLoop = aSources[1];
	promptStyle.normal.textColor = Color.white;
	promptStyle.font = stylefont;
	promptStyle.fontSize = Screen.width/29.53f;
	promptX = Screen.width/1.56f;
	prompt1Y = Screen.height/14.66f;
	promptGap = Screen.height/38.68;
	promptW = Screen.width/1.9f;
	promptH = Screen.height/21.2f;
}

function OnGUI () {
	if (prevVocal != vocal){
		textIndex = 0;
		prevVocal = vocal;
	}
	style.fontSize = Screen.width/26.53f;
	var drawnString : String = vocal.Substring(0,textIndex);
	GUI.Label (Rect (Screen.width/20.83f, Screen.height/1.3f,Screen.width/1.14,40),drawnString,style);
	if (Time.deltaTime > .016f && textIndex < vocal.Length){
		textIndex++;
	}
	GUI.backgroundColor = new Color(0,0,0,0);
	if (GUI.Button(Rect(Screen.width/70.7f,Screen.height/1.6f,Screen.width/1.03f,Screen.height/2.39f),"") && !prompt) {
		pos++;
		audio.clip = playClip;
   		audio.Play();
	}
	if (prompt) {
		promptObject.active = true;
	} else {
		promptObject.active = false;
	}
	if (action) {
		textboxObject.GetComponent(SpriteRenderer).sprite = actionBox;
	} else {
		textboxObject.GetComponent(SpriteRenderer).sprite = dialogBox;
		GUI.Label (Rect (Screen.width/21.02f, Screen.height/1.47f,650,40),currentDate,style);
	}
}

function Update () {
	GetComponent(SpriteRenderer).sprite = dateSprite;
	bkgObject.GetComponent(SpriteRenderer).sprite = bkgSprite;
}