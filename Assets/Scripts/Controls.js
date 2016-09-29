#pragma strict
 
 public var speed = 45.0;
 private var offset = 0.5;  // Assues a cube of 1 unit on a side.
 private var tr : Transform;
 private var rotating = false;
 
 function Start() {
     tr = transform;
 }
 
 function Update () {
     var pos : Vector3;
     
     if (/*Input.GetKeyDown(KeyCode.UpArrow)*/ Input.GetAxis("Vertical") > 0 && !rotating) {
         pos = Vector3(tr.position.x, tr.position.y-offset, tr.position.z+offset);
         //var vector : Vector3 = (1,)
         DoRotation(pos, Vector3.right, 90.0);    
     }
     else if (/*Input.GetKeyDown(KeyCode.DownArrow)*/ Input.GetAxis("Vertical") < 0 && !rotating) {
         pos = Vector3(tr.position.x, tr.position.y-offset, tr.position.z-offset);
         DoRotation(pos, -Vector3.right, 90.0);    
     }
     else if (/*Input.GetKeyDown(KeyCode.RightArrow)*/ Input.GetAxis("Horizontal") > 0 && !rotating) {
         pos = Vector3(tr.position.x+offset, tr.position.y-offset, tr.position.z);
         DoRotation(pos, -Vector3.forward, 90.0);    
     }
     else if (/*Input.GetKeyDown(KeyCode.LeftArrow)*/ Input.GetAxis("Horizontal") < 0 && !rotating) {
         pos = Vector3(tr.position.x-offset, tr.position.y-offset, tr.position.z);
         DoRotation(pos, Vector3.forward, 90.0);    
     }
 }
 
 function DoRotation(pos : Vector3, axis : Vector3, degrees : float) {
     var curr = 0.0;
     rotating = true;
     while (curr < degrees) {
         curr = Mathf.MoveTowards(curr, degrees, Time.deltaTime * speed);
         tr.RotateAround(pos, axis, Time.deltaTime * speed);
         yield;
     }

     FixPosition(axis);
     FixRotation();

     rotating = false;
 }

 function FixPosition(axis : Vector3){

 	//Position
 	var x = Mathf.Round(tr.position.x);
    var z = Mathf.Round(tr.position.z);
    tr.position.x = x;
    tr.position.y = 1;
    tr.position.z = z;

 }

 function FixRotation(){

 	var x = tr.eulerAngles.x;
 	var y = tr.eulerAngles.y;
 	var z = tr.eulerAngles.z;

 	var eulerX = FixRotationAxis(x);
 	var eulerY = FixRotationAxis(y);
 	var eulerZ = FixRotationAxis(z);



	 tr.eulerAngles = new Vector3(
	    eulerX,
	    eulerY,
	    eulerZ
	);

 }

 function FixRotationAxis(angle : float){
 	if (angle > 350 || angle < 10){
    	return 0;
    }else if(angle > 80 && angle < 100){
    	return 90;
    }else if(angle > 170 && angle < 190){
    	return 180;
    }else if(angle > 260 && angle < 280){
    	return 270;
    }
    return 0;
 }