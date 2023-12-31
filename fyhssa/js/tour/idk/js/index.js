window.onload = function() {
	assets();
	spheres();
	clearAll();
	setscene(1);
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
	for (var i=1; i<=150; i++) {
		document.querySelector("#box" + i).setAttribute('radius', '0.001');
	}
	for (var i=1; i<=149; i++) {
		var value = i + 1001;
		document.querySelector("#box" + value).setAttribute('radius', '0.001');
	}
}

function setscene(scene) {
	document.querySelector('a-sky').setAttribute('src', '#' + scene);
	document.querySelector("#box" + scene).setAttribute('radius', '1');
	if(scene != 1) {
		document.querySelector("#box" + (scene+1000)).setAttribute('radius', '1');
	} else {	}
}

function run(s) {
	clearAll();
	if ("#" + s == document.getElementById('background').getAttribute('src')) {
		setscene(s+1);
	}
	console.log("this is scene " + (s+1))
}

function runback(s) {
	clearAll();
	if ("#" + (s+1) == document.getElementById('background').getAttribute('src')) {
		setscene(s);
	}
	console.log("this is scene " + s);
}

function assets() {
	var allassets;
	for(var i=1; i<=150; i++) {
		allassets = allassets + '<img id="' + i + '" src="finished/(' + i + ').JPG" rotation="0 -90 0">';
	}
	document.getElementById("assets").innerHTML = allassets;
}

function spheres() {
	var all = '<a-entity class="scene1"><a-sphere id="box1" color="red" onclick="run(1)" position="-5 -5 -20" radius="0.001" material="" geometry=""> </a-sphere></a-entity>';
		var i = 2;
		for (var key in coords) {
			if (coords.hasOwnProperty(key)) {
				all = all + '<a-entity class="scene' + i + '"><a-sphere id="box' + i + '" color="red" onclick="run(' + i + ')" position="' + coords[key][0] + '"> </a-sphere><a-sphere id="box' + (i+1000) + '" color="blue" onclick="runback(' + (i-1) + ')" position="' + coords[key][1] + '"> </a-sphere></a-entity>';
				i++;
			}
		}


	document.getElementById("scenes").innerHTML = all;
}


var coords = {
	"s2": [
	"10 -5 0",
	"-5 -5 15"
	],
	"s3": [
	"5 -5 0",
	"-6 -5 -6"
	],
	"s4": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s5": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s6": [
	"0 -5 -40",
	"0 -5 10"
	],
	"s7": [
	"10 -5 0",
	"-10 -5 25"
	],
	"s8": [
	"10 -5 10",
	"-7 -5 -7"
	],
	"s9": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s10": [
	"10 -5 0",
	"-5 -5 1"
	],
	"s11": [
	"10 -5 -1",
	"-10 -5 0"
	],
	"s12": [
	"22 -5 20",
	"-10 -5 -10"
	],
	"s13": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s14": [
	"8 -5 0",
	"-8 -5 0"
	],
	"s15": [
	"10 -5 0",
	"-10 -5 -2"
	],
	"s16": [
	"10 -5 0",
	"-10 -5 "
	],
	"s17": [
	"10 -5 -5",
	"-10 -5 3"
	],
	"s18": [
	"7 -5 7",
	"-7 -5 -7"
	],
	"s19": [
	"-10 -5 2",
	"10 -5 -2"
	],
	"s20": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s21": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s22": [
	"-10 -5 0",
	"9 -5 3"
	],
	"s23": [
	"-5 -5 -5",
	"5 -5 5"
	],
	"s24": [
	"-10 -5 -5",
	"5 -5 5"
	],
	"s25": [
	"-10 -5 0",
	"5 -5 5"
	],
	"s26": [
	"-5 -5 -5",
	"10 -5 10"
	],
	"s27": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s28": [
	"-10 -5 0",
	"7 -5 3"
	],
	"s29": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s30": [
	"-10 -5 -2",
	"10 -5 1"
	],
	"s31": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s32": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s33": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s34": [
	"-10 -5 5",
	"10 -5 -5"
	],
	"s35": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s36": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s37": [
	"40 -5 3",
	"-10 -5 0"
	],
	"s38": [
	"12 -5 14",
	"-15 -5 5"
	],
	"s39": [
	"5 -5 60",
	"12 -5 45"
	],
	"s40": [
	"10 -5 0",
	"0 -5 0"
	],
	"s41": [
	"10 -5 0",
	"-5 -5 15"
	],
	"s42": [
	"5 -5 0",
	"-6 -5 -6"
	],
	"s43": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s44": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s45": [
	"0 -5 -40",
	"0 -5 10"
	],
	"s46": [
	"10 -5 0",
	"-10 -5 25"
	],
	"s47": [
	"10 -5 10",
	"-7 -5 -7"
	],
	"s48": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s49": [
	"10 -5 0",
	"-5 -5 1"
	],
	"s50": [
	"10 -5 -1",
	"-10 -5 0"
	],
	"s51": [
	"22 -5 20",
	"-10 -5 -10"
	],
	"s52": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s53": [
	"8 -5 0",
	"-8 -5 0"
	],
	"s54": [
	"10 -5 0",
	"-10 -5 -2"
	],
	"s55": [
	"10 -5 0",
	"-10 -5 "
	],
	"s56": [
	"10 -5 -5",
	"-10 -5 3"
	],
	"s57": [
	"7 -5 7",
	"-7 -5 -7"
	],
	"s58": [
	"-10 -5 2",
	"10 -5 -2"
	],
	"s59": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s60": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s61": [
	"-10 -5 0",
	"9 -5 3"
	],
	"s62": [
	"-5 -5 -5",
	"5 -5 5"
	],
	"s63": [
	"-10 -5 -5",
	"5 -5 5"
	],
	"s64": [
	"-10 -5 0",
	"5 -5 5"
	],
	"s65": [
	"-5 -5 -5",
	"10 -5 10"
	],
	"s66": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s67": [
	"-10 -5 0",
	"7 -5 3"
	],
	"s68": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s69": [
	"-10 -5 -2",
	"10 -5 1"
	],
	"s70": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s71": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s72": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s73": [
	"-10 -5 5",
	"10 -5 -5"
	],
	"s74": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s75": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s76": [
	"40 -5 3",
	"-10 -5 0"
	],
	"s77": [
	"12 -5 14",
	"-15 -5 5"
	],
	"s78": [
	"5 -5 60",
	"12 -5 45"
	],
	"s79": [
	"10 -5 0",
	"0 -5 0"
	],
	"s80": [
	"10 -5 0",
	"-5 -5 15"
	],
	"s81": [
	"5 -5 0",
	"-6 -5 -6"
	],
	"s82": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s83": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s84": [
	"0 -5 -40",
	"0 -5 10"
	],
	"s85": [
	"10 -5 0",
	"-10 -5 25"
	],
	"s86": [
	"10 -5 10",
	"-7 -5 -7"
	],
	"s87": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s88": [
	"10 -5 0",
	"-5 -5 1"
	],
	"s89": [
	"10 -5 -1",
	"-10 -5 0"
	],
	"s90": [
	"22 -5 20",
	"-10 -5 -10"
	],
	"s91": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s92": [
	"8 -5 0",
	"-8 -5 0"
	],
	"s93": [
	"10 -5 0",
	"-10 -5 -2"
	],
	"s94": [
	"10 -5 0",
	"-10 -5 "
	],
	"s95": [
	"10 -5 -5",
	"-10 -5 3"
	],
	"s96": [
	"7 -5 7",
	"-7 -5 -7"
	],
	"s97": [
	"-10 -5 2",
	"10 -5 -2"
	],
	"s98": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s99": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s100": [
	"-10 -5 0",
	"9 -5 3"
	],
	"s101": [
	"-5 -5 -5",
	"5 -5 5"
	],
	"s102": [
	"-10 -5 -5",
	"5 -5 5"
	],
	"s103": [
	"-10 -5 0",
	"5 -5 5"
	],
	"s104": [
	"-5 -5 -5",
	"10 -5 10"
	],
	"s105": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s106": [
	"-10 -5 0",
	"7 -5 3"
	],
	"s107": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s108": [
	"-10 -5 -2",
	"10 -5 1"
	],
	"s109": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s110": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s111": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s112": [
	"-10 -5 5",
	"10 -5 -5"
	],
	"s113": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s114": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s115": [
	"40 -5 3",
	"-10 -5 0"
	],
	"s116": [
	"12 -5 14",
	"-15 -5 5"
	],
	"s117": [
	"5 -5 60",
	"12 -5 45"
	],
	"s118": [
	"10 -5 0",
	"0 -5 0"
	],
	"s119": [
	"10 -5 0",
	"-5 -5 15"
	],
	"s120": [
	"5 -5 0",
	"-6 -5 -6"
	],
	"s121": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s122": [
	"10 -5 0",
	"-7 -5 0"
	],
	"s123": [
	"0 -5 -40",
	"0 -5 10"
	],
	"s124": [
	"10 -5 0",
	"-10 -5 25"
	],
	"s125": [
	"10 -5 10",
	"-7 -5 -7"
	],
	"s126": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s127": [
	"10 -5 0",
	"-5 -5 1"
	],
	"s128": [
	"10 -5 -1",
	"-10 -5 0"
	],
	"s129": [
	"22 -5 20",
	"-10 -5 -10"
	],
	"s130": [
	"10 -5 -5",
	"-10 -5 0"
	],
	"s131": [
	"8 -5 0",
	"-8 -5 0"
	],
	"s132": [
	"10 -5 0",
	"-10 -5 -2"
	],
	"s133": [
	"10 -5 0",
	"-10 -5 "
	],
	"s134": [
	"10 -5 -5",
	"-10 -5 3"
	],
	"s135": [
	"7 -5 7",
	"-7 -5 -7"
	],
	"s136": [
	"-10 -5 2",
	"10 -5 -2"
	],
	"s137": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s138": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s139": [
	"-10 -5 0",
	"9 -5 3"
	],
	"s140": [
	"-5 -5 -5",
	"5 -5 5"
	],
	"s141": [
	"-10 -5 -5",
	"5 -5 5"
	],
	"s142": [
	"-10 -5 0",
	"5 -5 5"
	],
	"s143": [
	"-5 -5 -5",
	"10 -5 10"
	],
	"s144": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s145": [
	"-10 -5 0",
	"7 -5 3"
	],
	"s146": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s147": [
	"-10 -5 -2",
	"10 -5 1"
	],
	"s148": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s149": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s150": [
	"-10 -5 0",
	"10 -5 0"
	],/*
	"s151": [
	"-10 -5 5",
	"10 -5 -5"
	],
	"s152": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s153": [
	"-10 -5 0",
	"10 -5 0"
	],
	"s154": [
	"40 -5 3",
	"-10 -5 0"
	],
	"s155": [
	"12 -5 14",
	"-15 -5 5"
	],
	"s156": [
	"5 -5 60",
	"12 -5 45"
	],
	"s157": [
	"10 -5 0",
	"0 -5 0"
	],*/
};
