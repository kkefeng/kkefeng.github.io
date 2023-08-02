let cv;
//background
let bg;
let bg2;
//sound
let popsound;
let gameover;
let winsound;
let failsound;
//功能
let screen;
let score;
let dif;
let timer;
let cd;
let words;
let index;
let playtimes;
let click;
let cd1;
//asset
function preload() {
  soundFormats("mp3");
  bg = loadImage('../images/games/tow/cpsbg2.jpg');
  bg2 = loadImage('../images/games/tow/cpsbg1.jpg');
  popsound = loadSound('../audio/games/tow/gamesound.mp3');
  winsound = loadSound('../audio/games/tow/win.mp3');
  failsound = loadSound('../audio/games/tow/fail.mp3');
}
//setting mode
function setup() {
  cv = createCanvas(800, 600); //gamesize 800 600
  cv.parent("game-content"); //popup modal
  screen = 0;
  score = 0;
  click = 0;
  dif = 0;
  index = 0;
  playtimes = 0;
  cd = 4;
  words = ["加油", "不要放弃", "全力以赴", "稳住", "不要输给对面"];
  //setting textmode
  textStyle(BOLD);
  textAlign(CENTER);
  rectMode(CENTER);
  strokeWeight(1);


  // set options to prevent default behaviors for swipe, pinch, etc
  var options = {
    preventDefault: true
  };

  // document.body registers gestures anywhere on the page
  var hammer = new Hammer(document.body, options);
  hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
  });

  hammer.on("swipe", swiped);
}

function safe() {

  function finished() {

    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
    timeNow = hours + ":" + minutes + ":" + seconds;

    $.post("https://fun.foonyew.edu.my/db/update-game.php", { timeNow: timeNow, finished: 1, type: "TugOfWar" },
      function (result) {
        console.log(result);
      });
  }

  return finished;

}

var result = safe();

function draw() {
  cd -= 1 / 60; //time counter
  background(bg); //background

  if (screen == 0) {
    start();
    noLoop();
  }
  else if (screen == 1) {
    intro();
  }

  else if (screen == 2) {
    countdown();
    loop();
  }
  else if (screen == 3) {
    game();
    loop();
  }
  else if (screen == 4) {
    end();
  }

  if (cd <= 1 && screen == 2) {

    screen = 3;
  }
  cd1 = floor(cd);
}

function start() {
  textSize(30);
  background(bg2);
  filter(BLUR, 5);
  stroke("black");
  fill("black");
  text("拔河游戏", width / 2, height * 0.1);
  fill('black');
  stroke('black');
  text("请选择难度", width / 2, height * 0.2);
  fill('black');
  stroke('black');
  rect(width / 2, height * 0.30, 130, 60);
  rect(width / 2, height * 0.45, 130, 60);
  rect(width / 2, height * 0.60, 130, 60);
  rect(width / 2, height * 0.75, 130, 60)
  fill('white');
  text("简单", width / 2, height * 0.32);
  text("中等", width / 2, height * 0.47);
  text("困难", width / 2, height * 0.62);
  text("游戏玩法", width / 2, height * 0.77);
}

function intro() {
  background("darkgreen");
  textSize(20)
  text("每年的校庆都有的拔河,所以今年做个类似拔河的游戏", width * 0.3, height * 0.08);
  text("游戏玩法:", width * 0.06, height * 0.13);
  text("1.此游戏模式分为简单,中等,困难", width * 0.20, height * 0.22);
  text("2.玩家需要用极快的游戏手速来打败对手", width * 0.24, height * 0.29)
  text("注意事项:点击按钮后,请稍等一下", width * 0.20, height * 0.36);
  text("向左滑动退出此页", width * 0.13, height * 0.8)
}

function countdown() {
  fill("black");
  text(floor(cd), width * 0.5, height / 2);
}
function game() {
  stroke('black');
  textSize(25);
  text('进度:', width * 0.61, height * 0.08);
  rect(width * 0.75 + score * 1.625, height * 0.065, score * 3.25, 20)
  noFill();
  rect(width * 0.75, height * 0.065, 130, 20);
  stroke('red');
  line(width * 0.75, height * 0.080, 600, 30);

  if (dif == 1) {
    score -= 5 / 60;
  }
  if (dif == 2) {
    score -= 7 / 60;
  }
  if (dif == 3) {
    score -= 10 / 60;
  }
  if (score <= -20 || score >= 20) {
    screen = 4;
  }

  fill('black');
  stroke('black');
  if (score < 0) {
    text('情况:正处于劣势中', width * 0.2, height * 0.08)
  }
  else if (score => 0) {
    text('情况:正处于优势中', width * 0.2, height * 0.08)
  }
  textSize(20);
  fill("black");
  text(words[index], width * 0.8, height * 0.7);
  if (click == 200) {
    playtimes += 1;
    click = 0;

  }
  print(playtimes);
}

function end() {
  background(bg2);
  if (score >= 20) {
    winsound.play();
    noLoop();
    textSize(50);
    text('挑战成功,无人能挡', width / 2, height * 0.4);
    result();
  }
  else if (score <= -20) {
    failsound.play();
    noLoop();
    textSize(50);
    text('挑战失败,再接再厉', width / 2, height * 0.4);
  }
  //s2 sound，text
  fill("black");
  noStroke();
  rect(width / 2, height * 0.5, 120, 60);
  fill("white");
  textSize(30);
  text("回到主页", width / 2, height * 0.52);

}

function mouseClicked() {

  if (!(mouseX>=0&&mouseX<width&&mouseY>=0&&mouseY<height)) return;
  click += 1;
  if (screen == 0) {
    if (mouseX < width / 2 + 60 && mouseX > width / 2 - 60) {
      if (mouseY < height * 0.30 + 30 && mouseY > height * 0.30 - 30) {
        screen = 2;
        dif = 1;
        draw();
      }
      if (mouseY < height * 0.45 + 30 && mouseY > height * 0.45 - 30) {
        screen = 2;
        dif = 2;
        draw();
      }
      if (mouseY < height * 0.60 + 30 && mouseY > height * 0.60 - 30) {
        screen = 2;
        dif = 3;
        draw();
      }
      if (mouseY < height * 0.75 + 30 && mouseY > height * 0.75 - 30) {
        screen = 1;
        draw();
      }
    }

  }
  if (screen == 3) {
    score += 1;
    popsound.play();
  }
  if (screen == 4) {
    if (mouseX < width / 2 + 60 && mouseX > width / 2 - 60) {
      if (mouseY < height * 0.52 + 30 && mouseY > height * 0.52 - 30) {
        reset();
      }
    }
  }
  index = floor(random(words.length));
  if (index == words.length) {
    index = 0;
  }

}

function swiped(event) {
  if (screen == 1) {
    print(event.direction)
    if (event.direction == 2) {
      screen = 0;
      start();
    }
  }
}
function reset() {
  start();
  screen = 0;
  score = 0;
  cd = 4;
}
