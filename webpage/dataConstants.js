function dataConstants()
{
	MY = 0.0168;
	MY_ROT = 0.0068; <!-- CHECK -->
	M = 18;

	R = 0.1; <!-- just testin in openGL -->
	R_INNER = 0.10;

	G = 9.82;	

	pitch = 0;
	yaw=0;
	xCam=0;
	yCam=0.4;
	zCam=0;
	speed=0;
	yawRate =0;
	pitchRate=0;

	ZPOS = 0; <!-- zPos is the same for all the stones, thats why it is here -->

	LASTTIME=0; <!-- needed or not? for the animation maybe -->

	FIELDLENGTH = 36.59;
	FIELDWIDTH = 5;
	HACK_HOG = 6.40;
	TEE = $V([0,34.76]); <!-- the position of the middle-->


}
