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
	addassets();
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
	for (var i=1; i<=15; i++) {
		document.querySelector("#box" + i).setAttribute('radius', '0.001');
	}
	for (var i=1; i<=14; i++) {
		var value = i + 1001;
		document.querySelector("#box" + value).setAttribute('radius', '0.001');
	}
	document.querySelector("#x1").setAttribute('radius', '0.001');
	document.querySelector("#x3").setAttribute('radius', '0.001');
	document.querySelector("#x4").setAttribute('radius', '0.001');
	document.querySelector("#x5").setAttribute('radius', '0.001');
	document.querySelector("#x6").setAttribute('radius', '0.001');
	document.querySelector("#x7").setAttribute('radius', '0.001');
	document.querySelector("#x8").setAttribute('radius', '0.001');
	document.querySelector("#x9").setAttribute('radius', '0.001');
	document.querySelector("#x10").setAttribute('radius', '0.001');
	document.querySelector("#xx10").setAttribute('radius', '0.001');
	document.querySelector("#x11").setAttribute('radius', '0.001');
	document.querySelector("#xx11").setAttribute('radius', '0.001');
	document.querySelector("#x13").setAttribute('radius', '0.001');
	document.querySelector("#x14").setAttribute('radius', '0.001');
	document.querySelector("#xx14").setAttribute('radius', '0.001');
	document.querySelector("#x15").setAttribute('radius', '0.001');
	document.querySelector("#xx15").setAttribute('radius', '0.001');
	document.getElementById("shiwu").setAttribute('scale', '0 0 0');
	document.getElementById("lianke").setAttribute('scale', '0 0 0');
	document.getElementById("xundao").setAttribute('scale', '0 0 0');
	document.getElementById("tushu").setAttribute('scale', '0 0 0');
	document.getElementById("xiaozhang").setAttribute('scale', '0 0 0');
	document.getElementById("laoshi").setAttribute('scale', '0 0 0');
	document.getElementById('waiting').style.display = "none";
	document.getElementById('neiting').style.display = "none";
	document.getElementById('2nd').style.display = "none";
	document.getElementById('3rd').style.display = "none";
	document.getElementById('4th').style.display = "none";
	document.getElementById('5th').style.display = "none";

}

function setscene(scene) {
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
	document.querySelector("#box" + scene).setAttribute('radius', '1');
	changetitle(scene);

	if(scene != 1) {
		document.querySelector("#box" + (scene+1000)).setAttribute('radius', '1');
	} else {	}
	switch(scene) {
		case 1:
			document.querySelector("#x" + 1).setAttribute('radius', '1');
			break;
		case 3:
			document.querySelector("#x" + 3).setAttribute('radius', '1');
			break;
		case 4:
			document.querySelector("#x" + 4).setAttribute('radius', '1');
			break;
		case 5:
			document.querySelector("#x" + 5).setAttribute('radius', '1');
			break;
		case 6:
			document.querySelector("#x" + 6).setAttribute('radius', '1');
			break;
		case 7:
			document.querySelector("#x" + 7).setAttribute('radius', '1');
			document.querySelector("#x" + 7).setAttribute('radius', '1');
			document.querySelector("#x" + 7).setAttribute('radius', '1');
			document.getElementById("shiwu").setAttribute('scale', '2 2 1');
			document.getElementById("lianke").setAttribute('scale', '2 2 1');
			break;
		case 8:
			document.querySelector("#x" + 8).setAttribute('radius', '1');
			document.getElementById("xiaozhang").setAttribute('scale', '2 2 1');
			break;
		case 9:
			document.querySelector("#x" + 9).setAttribute('radius', '1');
			break;
		case 10:
			document.querySelector("#x" + 10).setAttribute('radius', '1');
			document.querySelector("#xx" + 10).setAttribute('radius', '1');
			document.getElementById("laoshi").setAttribute('scale', '2 2 1');
			break;
		case 11:
			document.querySelector("#x" + 11).setAttribute('radius', '1');
			document.querySelector("#xx" + 11).setAttribute('radius', '1');
			document.getElementById("xundao").setAttribute('scale', '2 2 1');
			document.getElementById("tushu").setAttribute('scale', '2 2 1');
			break;
		case 13:
			document.querySelector("#x" + 13).setAttribute('radius', '1');
			break;
		case 14:
			document.querySelector("#x" + 14).setAttribute('radius', '1');
			document.querySelector("#xx" + 14).setAttribute('radius', '1');
			break;
		case 15:
			document.querySelector("#x" + 15).setAttribute('radius', '1');
			document.querySelector("#xx" + 15).setAttribute('radius', '1');
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
	for(var i=1; i<=15; i++) {
		allassets = allassets + '<img id="' + (i) + '" src="../images/xingzheng/(' + i + ').webp" rotation="0 -90 0">';
	}
	document.getElementById("assets").innerHTML = allassets;
}

function spheres() {
	var all = '<a-entity class="scene1"><a-sphere id="box1" color="red" onclick="run(1)" position="35 -8 6.3" radius="0.001" material="" geometry=""> </a-sphere></a-entity>';
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

function addassets() {
	document.getElementById("moreassets").innerHTML +=  '<img id="cola" src="../images/rubbish/cola.png">';
	document.getElementById("moreassets").innerHTML +=  '<img id="cardboard" src="../images/rubbish/cardboard.png">';
	document.getElementById("moreassets").innerHTML +=  '<img id="paper" src="../images/rubbish/paper.png">';
	document.getElementById("moreassets").innerHTML +=  '<img id="plasticb" src="../images/rubbish/plasticb.png">';
	document.getElementById("moreassets").innerHTML +=  '<img id="plasticc" src="../images/rubbish/plasticc.png">';  
  }
  
  function rubbish(){
	  function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }
	  if(getRandomInt(5) == 4) {
		  var num = getRandomInt(5);
		  var item;
		  switch(num) {
			  case 0:
				  var item = "cola";
				  break;
  
			  case 1:
				  var item = "cardboard";
				  break;
  
			  case 2:
				  var item = "paper";
				  break;
  
			  case 3:
				  var item = "plasticb";
				  break;
  
			  case 4:
				  var item = "plasticc";
				  break;
  
			  default:
				  var item = "cola"
  
		  }
  
		  var positioncal = "30 " + getRandomInt(360) + " 0";
		  var garbageid = item + "id";
  
			  document.getElementById("mainscene").innerHTML +=  '<a-curvedimage id="' + garbageid + '" src="#' + item + '" radius="3" rotation="'+ positioncal +'" theta-length="18" scale="0.8 0.8 0.8" z-index="4"></a-curvedimage>';
  
	  }
  
  }
  
  function collected() {
	  document.getElementById("mainscene").innerHTML =  '';
	  alert("You picked up a rubbish! Good on ya.");
  }

function audio() {
	var a = document.getElementById('abackground').getAttribute('src');
	switch(a) {
		case "#1":
			playaudio(1);
			break;

		case "#17":
			playaudio(2);
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

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }
  

  function changetitle(a) {
  	if(a <= 5) {
  		document.getElementById('5th').style.display = "block";
  	} else if(a == 6) {
  		document.getElementById('waiting').style.display = "block";
  	} else if(a == 7) {
  		document.getElementById('neiting').style.display = "block";
  	} else if(a < 10 && a >= 8) {
  		document.getElementById('2nd').style.display = "block";
  	} else if(a < 14 && a >= 10) {
  		document.getElementById('3rd').style.display = "block";
  	} else if(a < 16 && a >= 14) {
  		document.getElementById('4th').style.display = "block";
  	}
  }