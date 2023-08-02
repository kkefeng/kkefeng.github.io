window.onload = function() {
	assets();
	var place = Number(localStorage.getItem('place'));
	if (place == 0) place = 1;
	console.log(place);
	localStorage.setItem('place', 1);
	open();
}

window.addEventListener("wheel", event => {
    const delta = Math.sign(event.wheelDelta);
    //getting the mouse wheel change (120 or -120 and normalizing it to 1 or -1)
    var mycam=document.getElementById('cam').getAttribute('camera');
    var finalZoom=document.getElementById('cam').getAttribute('camera').zoom+delta;
    //limiting the zoom so it doesnt zoom too much in or out
    if(finalZoom<1)
      finalZoom=1;
    if(finalZoom>5)
      finalZoom=5;  

    mycam.zoom=finalZoom;
    //setting the camera element
    document.getElementById('cam').setAttribute('camera',mycam);
  });


function run(s) {
	clearAll();
	if ("#" + s == document.getElementById('abackground').getAttribute('src')) {
		setscene(s+1);
	}
	console.log("this is scene " + (s+1))
}

function xrun(s) {
	clearAll();
	setscene(s);
	console.log("this is scene " + (s))
}

function runback(s) {
	clearAll();
	if ("#" + (s+1) == document.getElementById('abackground').getAttribute('src')) {
		setscene(s);
	}
	console.log("this is scene " + s);
}

function assets() {
	var allassets;
	for(var i=1; i<=14; i++) {
		allassets = allassets + '<img id="' + (i+3) + '" src="../images/canteen/1/(' + i + ').webp" rotation="0 -90 0">';
	}
	for(var i=1; i<=15; i++) {
		allassets = allassets + '<img id="' + (i+17) + '" src="../images/canteen/2/(' + i + ').webp" rotation="0 -90 0">';
	}
	for(var i=1; i<=12; i++) {
		allassets = allassets + '<img id="' + (i+32) + '" src="../images/canteen/3/(' + i + ').webp" rotation="0 -90 0">';
	}
	for(var i=1; i<=11; i++) {
		allassets = allassets + '<img id="' + (i+44) + '" src="../images/canteen/4/(' + i + ').webp" rotation="0 -90 0">';
	}
	document.getElementById("assets").innerHTML = allassets;
}

function spheres() {
	var all = '<a-entity class="scene1"><a-sphere id="box1" color="red" onclick="run(1)" position="-10 -5 0" radius="0.001" material="" geometry=""> </a-sphere></a-entity>';
		var i = 2;
		for (var key in coords) {
			if (coords.hasOwnProperty(key)) {
				all = all + '<a-entity class="scene' + i + '"><a-sphere id="box' + i + '" color="red" onclick="run(' + i + ')" position="' + coords[key][0] + '"> </a-sphere><a-sphere id="box' + (i+1000) + '" color="blue" onclick="runback(' + (i-1) + ')" position="' + coords[key][1] + '"> </a-sphere></a-entity>';
				i++;
			}
		}
	document.getElementById("scenes").innerHTML = all;
}

function debug(s) {
	clearAll();
	setscene(s);
}

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }
  