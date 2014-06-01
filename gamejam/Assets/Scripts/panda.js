#pragma strict

class panda extends animal{
	
	function Start () {
		animalName = "Panda";
		dialog = new String[100];
		dialog[0] =  "";
		dialog[1] = "Oh…hello there. What brings you to…";
		dialog[2] = "*yawn*";
		dialog[3] = "…this neck of the zoo?";
		dialog[4] = "Will you spend time with Panda?";
		dialog[5] = "prompt0";
		dialog[6] = "Alright. I could…";
		
		prompts = new Array();
		
		prompt0 = new String[10];
		prompt0[0] = "Yes";
		prompt0[1] = "No";
		prompts.push (prompt0);
	}

	function Update () {

	}
}