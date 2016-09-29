using UnityEngine;
using System.Collections;

public class Gravity : MonoBehaviour {
    public Rigidbody rb;
    void Start()
    {
        rb = GetComponent<Rigidbody>();
    }
  
    
    void OnTriggerEnter(Collider other)
	{
		if (other.gameObject.tag == "gravity") {
			rb.isKinematic = false;

		}

	}
}