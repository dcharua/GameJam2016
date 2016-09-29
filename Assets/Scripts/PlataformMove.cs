using UnityEngine;
using System.Collections;

public class PlataformMove : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	}
		void OnTriggerEnter(Collider other)
		{
		GameObject player = GameObject.Find ("player");
		GameObject plataforma1 = GameObject.Find ("plataforma1");
			
			if (other.gameObject.tag == "plataforma1") {
			player.transform.parent = plataforma1.transform; 

		}
	
	}
}
