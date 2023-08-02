function setplace(p) {
	localStorage.setItem('place', p);
	console.log(localStorage.getItem('place'));
}

window.onload = function() {
	assets();
	spheres();
	clearAll();
	var place = Number(localStorage.getItem('place'));
	if (place == 0) place = 1;
	setscene(place);
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

function clearAll() {
	for (var i=1; i<=48; i++) {
		document.querySelector("#box" + i).setAttribute('radius', '0.001');
	}
	for (var i=1; i<=47; i++) {
		var value = i + 1001;
		document.querySelector("#box" + value).setAttribute('radius', '0.001');
	}
	document.querySelector("#x1").setAttribute('radius', '0.001');
	document.querySelector("#x6").setAttribute('radius', '0.001');
	document.querySelector("#x5").setAttribute('radius', '0.001');
	document.querySelector("#x32").setAttribute('radius', '0.001');
	document.querySelector("#x7").setAttribute('radius', '0.001');
	document.querySelector("#x31").setAttribute('radius', '0.001');
	document.querySelector("#x16").setAttribute('radius', '0.001');
	document.querySelector("#x25").setAttribute('radius', '0.001');
	document.querySelector("#x19").setAttribute('radius', '0.001');
	document.querySelector("#x29").setAttribute('radius', '0.001');
	document.querySelector("#xx29").setAttribute('radius', '0.001');
	document.querySelector("#x24").setAttribute('radius', '0.001');
	document.querySelector("#x1").setAttribute('radius', '0.001');
	document.querySelector("#x9").setAttribute('radius', '0.001');
	document.querySelector("#x28").setAttribute('radius', '0.001');
	document.querySelector("#x36").setAttribute('radius', '0.001');
	document.querySelector("#x34").setAttribute('radius', '0.001');
	document.querySelector("#x43").setAttribute('radius', '0.001');
	document.querySelector("#xx43").setAttribute('radius', '0.001');
	document.querySelector("#x42").setAttribute('radius', '0.001');
	document.querySelector("#xx42").setAttribute('radius', '0.001');
	document.querySelector("#x41").setAttribute('radius', '0.001');
	document.querySelector("#xx41").setAttribute('radius', '0.001');
	document.querySelector("#x40").setAttribute('radius', '0.001');
	document.querySelector("#xx40").setAttribute('radius', '0.001');
	document.querySelector("#x39").setAttribute('radius', '0.001');
	document.querySelector("#xx39").setAttribute('radius', '0.001');
	document.querySelector("#x37").setAttribute('radius', '0.001');
	document.querySelector("#xx37").setAttribute('radius', '0.001');
	document.querySelector("#xxx37").setAttribute('radius', '0.001');
	document.querySelector("#x38").setAttribute('radius', '0.001');
	document.querySelector("#x44").setAttribute('radius', '0.001');
	document.querySelector("#x48").setAttribute('radius', '0.001');
	document.querySelector("#x45").setAttribute('radius', '0.001');
	document.getElementById('lego').style.display = "none";
}

function setscene(scene) {
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
	document.querySelector("#box" + scene).setAttribute('radius', '1');
	if(scene != 1) {
		document.querySelector("#box" + (scene+1000)).setAttribute('radius', '1');
	} else {	}
	switch(scene) {
		case 1:
			document.querySelector("#x" + 1).setAttribute('radius', '1');
			break;

		case 3:
			document.getElementById('lego').style.display = "block";
			break;

		case 5:
			document.querySelector("#x" + 5).setAttribute('radius', '1');
			document.getElementById('audio').style.display = "block";
			document.getElementById('snake').style.display = "block";
			document.getElementById('video').style.display = "block";
			break;

		case 6:
			document.querySelector("#x" + 6).setAttribute('radius', '1');
			break;

		case 7:
			document.querySelector("#x" + 7).setAttribute('radius', '1');
			break;

		case 9:
			document.querySelector("#x" + 9).setAttribute('radius', '1');
			break;

		case 16:
			document.querySelector("#x" + 16).setAttribute('radius', '1');
			break;

		case 19:
			document.querySelector("#x" + 19).setAttribute('radius', '1');
			break;

		case 24:
			document.querySelector("#x" + 24).setAttribute('radius', '1');
			document.getElementById('lego').style.display = "block";
			break;

		case 25:
			document.querySelector("#x" + 25).setAttribute('radius', '1');
			break;

		case 28:
			document.querySelector("#x" + 28).setAttribute('radius', '1');
			document.getElementById('audio').style.display = "block";
			break;

		case 29:
			document.querySelector("#x" + 29).setAttribute('radius', '1');
			document.querySelector("#xx" + 29).setAttribute('radius', '1');
			document.getElementById('audio').style.display = "block";
			break;

		case 30:
			document.getElementById('video').style.display = "block";
			break;

		case 31:
			document.querySelector("#x" + 31).setAttribute('radius', '1');
			break;

		case 32:
			document.querySelector("#x" + 32).setAttribute('radius', '1');
			break;

		case 34:
			document.querySelector("#x" + 34).setAttribute('radius', '1');
			break;

		case 36:
			document.querySelector("#x" + 36).setAttribute('radius', '1');
			break;

		case 37:
			document.querySelector("#x" + 37).setAttribute('radius', '1');
			document.querySelector("#xx" + 37).setAttribute('radius', '1');
			document.querySelector("#xxx" + 37).setAttribute('radius', '1');
			document.getElementById('audio').style.display = "block";
			document.getElementById('lego').style.display = "block";
			break;

		case 38:
			document.querySelector("#x" + 38).setAttribute('radius', '1');
			break;

		case 39:
			document.querySelector("#x" + 39).setAttribute('radius', '1');
			document.querySelector("#xx" + 39).setAttribute('radius', '1');
			break;

		case 40:
			document.querySelector("#x" + 40).setAttribute('radius', '1');
			document.querySelector("#xx" + 40).setAttribute('radius', '1');
			break;

		case 41:
			document.querySelector("#x" + 41).setAttribute('radius', '1');
			document.querySelector("#xx" + 41).setAttribute('radius', '1');
			break;

		case 42:
			document.querySelector("#x" + 42).setAttribute('radius', '1');
			document.querySelector("#xx" + 42).setAttribute('radius', '1');
			break;

		case 43:
			document.querySelector("#x" + 43).setAttribute('radius', '1');
			document.querySelector("#xx" + 43).setAttribute('radius', '1');
			break;

		case 44:
			document.querySelector("#x" + 44).setAttribute('radius', '1');
			break;

		case 45:
			document.querySelector("#x" + 45).setAttribute('radius', '1');
			break;

		case 48:
			document.querySelector("#x" + 48).setAttribute('radius', '1');
			break;

	}
}

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
	for(var i=1; i<=48; i++) {
		allassets = allassets + '<img id="' + i + '" src="../images/litang/(' + i + ').webp"" rotation="0 -90 0">';
	}
	document.getElementById("assets").innerHTML = allassets;
}

function spheres() {
	var all = '<a-entity class="scene1"><a-sphere id="box1" color="red" onclick="run(1)" position="10 -5 0" radius="0.001" material="" geometry=""> </a-sphere></a-entity>';
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

function audio() {
	var a = document.getElementById('abackground').getAttribute('src');
	switch(a) {
		case "#28":
			playaudio(1);
			break;

		case "#37":
			playaudio(2);
			break;

		case "#5":
			playaudio(3);
			break;

		case "#29":
			playaudio(4);
			break;

	}
}

function playaudio(audio) {
    var audio = document.getElementById('audio' + audio);
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0;
    }
}

function video() {
	var a = document.getElementById('abackground').getAttribute('src');
	switch(a) {
		case "#30":
			playvideo(1);
			break;

		case "#5":
			playvideo(2);
			break;

	}
}

function playvideo(video) {
  var x = document.getElementById("youtube" + video);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }
  