let cv;

let gamesize = 0.8;
let totaltime = 1800;

let gameTime;

// A S S E T S
let bg;
let stall; //background
let speech; //speech bubble
//food
let ty; //tray
let rcr; //ricecontainer
let scr; //soupcontainer
let rc; //riceCursor
let sc; //soupCursor
let rice; //trayrice
let soup; //traysoup
let ck1; //chicken1
let ck2; //chicken2
let ck3; //chicken3
let fh1; //fish1
let fh2; //fish2
let fh3; //fish3
let fe1; //friedegg1
let fe2; //friedegg2
let fe3; //friedegg3
let lb1; //longbean1
let lb2; //longbean2
let mt1; //meat1
let mt2; //meat2
let mr1; //mushroom1
let mr2; //mushroom2
let mr3; //mushroom3
let te1; //teaegg1
let te2; //teaegg2
let te3; //teaegg3
let vg1; //vegetable1
let vg2; //vegetable2
let vg3; //vegetable3

let stb; //Student Boy
let stg; //Student Girl
let tc; //teacher

let customers = [];
let earnings = [];
let tray = [0, 0, 0, 0, 0, 0];
/* 2345
1  6789 10
*/

let screen;
let debounce;
let csr;
let money;
let time;

function preload() {
  bg = loadImage("../images/games/restaurant/bgconfucius.png");
  stall = loadImage("../images/games/restaurant/stall_and_ribbon.png");
  ty = loadImage("../images/games/restaurant/tray.png");
  rcr = loadImage("../images/games/restaurant/rice.png");
  scr = loadImage("../images/games/restaurant/soup.png");
  rc = loadImage("../images/games/restaurant/ricecursor.png");
  sc = loadImage("../images/games/restaurant/soupcursor.png");
  rice = loadImage("../images/games/restaurant/riceclump.png");
  soup = loadImage("../images/games/restaurant/traysoup.png");
  ck1 = loadImage("../images/games/restaurant/chicken1.png");
  ck2 = loadImage("../images/games/restaurant/chicken2.png");
  ck3 = loadImage("../images/games/restaurant/chicken3.png");
  fh1 = loadImage("../images/games/restaurant/fish1.png");
  fh2 = loadImage("../images/games/restaurant/fish2.png");
  fh3 = loadImage("../images/games/restaurant/fish3.png");
  fe1 = loadImage("../images/games/restaurant/friedegg1.png");
  fe2 = loadImage("../images/games/restaurant/friedegg2.png");
  fe3 = loadImage("../images/games/restaurant/friedegg3.png");
  lb1 = loadImage("../images/games/restaurant/longbean1.png");
  lb2 = loadImage("../images/games/restaurant/longbean2.png");
  mt1 = loadImage("../images/games/restaurant/meat1.png");
  mt2 = loadImage("../images/games/restaurant/meat2.png");
  mr1 = loadImage("../images/games/restaurant/mushroom1.png");
  mr2 = loadImage("../images/games/restaurant/mushroom2.png");
  mr3 = loadImage("../images/games/restaurant/mushroom3.png");
  te1 = loadImage("../images/games/restaurant/teaegg1.png");
  te2 = loadImage("../images/games/restaurant/teaegg2.png");
  te3 = loadImage("../images/games/restaurant/teaegg3.png");
  vg1 = loadImage("../images/games/restaurant/vege1.png");
  vg2 = loadImage("../images/games/restaurant/vege2.png");
  vg3 = loadImage("../images/games/restaurant/vege3.png");
  stb = loadImage("../images/games/restaurant/studentBoy.png");
  stg = loadImage("../images/games/restaurant/studentGirl.png");
  tc = loadImage("../images/games/restaurant/teacher.png");
  speech = loadImage("../images/games/restaurant/speech.png");
}

function setup() {
  cv = createCanvas(900, 600);
  cv.parent("game-content");
  resize();
  frameRate(60);
  screen = 0;
  csr = 0;
  money = 0;
  time = totaltime;
  for (let i = 0; i < 3; i++) customers[i] = new Customer();
  gameTime = 0;
}

function draw() {
  landscape();
  if (screen == 0) {
    menu();
  } else if (screen == 1) {
    game();
  } else if (screen == 2) {
    end();
  }
  noFill();
  stroke("red");
  /* Hitboxes
  rectx(40, 370, 155, 175);
  rectx(727, 375, 148, 171);
  rectx(322, 316, 112, 69);
  rectx(220, 438, 480, 154);
  rectx(440, 316, 100, 69);
  rectx(544, 312, 74, 52);
  for (let i = 0; i < 4; i++) {
    rectx(220 + i * 120, 438, 120, 77);
    rectx(220 + i * 120, 515, 120, 77);
  } */
}

function mouseClicked() {
  if (frameCount - debounce < 10) {
    return;
  }
  debounce = frameCount;
  if (screen == 0) {
    screen = 1;
  } else if (screen == 2) {
    screen = 0;
    customers = [];
    tray = [0, 0, 0, 0, 0, 0];
    csr = 0;
    money = 0;
    time = totaltime;
    for (let i = 0; i < 3; i++) customers[i] = new Customer();
    for (let i = 0; i < 3; i++) customers[i] = new Customer();
  } else if (screen == 1) {
    //take rice
    if (inside(40, 370, 195, 545)) {
      if (csr == 1) csr = 0;
      else csr = 1;
    }
    //take soup
    else if (inside(727, 375, 875, 546)) {
      if (csr == 2) csr = 0;
      else csr = 2;
    }
    //put rice on tray
    else if (inside(322, 316, 432, 385)) {
      if (csr == 1) {
        tray[0] = 1;
        csr = 0;
        if (!customers[0].order.includes(1)) {
          wrong();
        }
      }
    }
    //put soup on tray
    else if (inside(544, 312, 618, 364)) {
      if (csr == 2) {
        tray[5] = 10;
        csr = 0;
        if (!customers[0].order.includes(10)) {
          wrong();
        }
      }
      //take food
    } else if (inside(220, 438, 700, 592)) {
      for (let i = 0; i < 4; i++) {
        if (inside(220 + i * 120, 438, 340 + i * 120, 515)) {
          if (csr == i + 3) csr = 0;
          else csr = i + 3;
        } else if (inside(220 + i * 120, 515, 340 + i * 120, 592)) {
          if (csr == i + 7) csr = 0;
          else csr = i + 7;
        }
      }
      //put food on tray
    } else if (inside(440, 316, 540, 385)) {
      if (csr >= 3 && csr <= 10 && !tray.includes(csr - 1) && tray[4] == 0) {
        if (tray[1] == 0) {
          tray[1] = csr - 1;
        } else if (tray[2] == 0) {
          tray[2] = csr - 1;
        } else if (tray[3] == 0) {
          tray[3] = csr - 1;
        } else {
          tray[4] = csr - 1;
        }
        if (!customers[0].order.includes(csr - 1)) {
          wrong();
        }
        csr = 0;
      }
    }
    let win = true;
    for (let i = 0; i < customers[0].order.length; i++) {
      if (!tray.includes(customers[0].order[i])) win = false;
    }
    if (win) pay();
  }
}

function menu() {
  textAlign(CENTER);
  textSize(width * 0.08);
  fill(0);
  stroke("black");
  strokeWeight(width / 450);
  textx("义卖游戏", 450, 200);
  textSize(width * 0.05);
  textx("点击任意处开始游戏", 450, 350);
}

function game() {
  time--;
  fill("green");
  stroke("white");
  strokeWeight(width / 90);
  rectx(40, 40, 250, 60);
  fill("orange");
  ellipsex(820, 70, 80, 80);
  push();
  translate((820 / 900) * width, (70 / 600) * height);
  angleMode(DEGREES);
  rotate((-time / totaltime) * 360);
  linex(0, 0, 0, -25);
  pop();
  textSize(width * 0.05);
  textAlign(LEFT);
  strokeWeight(width / 450);
  fill("white");
  noStroke();
  textx("RM " + money, 50, 90);
  for (let i = 0; i < customers[0].order.length; i++) {
    if (i < 3) imagex(food(customers[0].order[i]), 55 + i * 80, 130, 75, 60);
    else imagex(food(customers[0].order[i]), 55 + (i - 3) * 80, 190, 75, 60);
  }
  for (let i = 0; i < earnings.length; i++) {
    earnings[i].display();
    earnings[i].update();
    if (earnings[i].age < 0) earnings.splice(i, 1);
  }
  if (tray[0] == 1) imagex(rice, 335, 320, 100, 60);
  if (tray[5] == 10) imagex(soup, 540, 306, 82, 62);
  if (tray[1] != 0) imagex(food(tray[1]), 435, 308, 45, 45);
  if (tray[2] != 0) imagex(food(tray[2]), 480, 307, 45, 45);
  if (tray[3] != 0) imagex(food(tray[3]), 442, 343, 45, 45);
  if (tray[4] != 0) imagex(food(tray[4]), 500, 343, 45, 45);
  switch (csr) {
    case 1:
      imagex(rc, (mouseX / width) * 900, (mouseY / height) * 600, 90, 90);
      break;
    case 2:
      imagex(sc, (mouseX / width) * 900, (mouseY / height) * 600, 90, 90);
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      imagex(
        food(csr - 1),
        (mouseX / width) * 900,
        (mouseY / height) * 600,
        60,
        60
      );
      break;
  }
  if (time <= 0) {
    screen = 2;
    if (money >= 1500) gameTime++;
    debounce = frameCount + 100;
    print(gameTime);
  }
}

function end() {
  textAlign(CENTER);
  textSize(width * 0.08);
  fill(0);
  stroke("black");
  textx("游戏结束", 450, 200);
  textSize(width * 0.05);
  textx("你" + (money >= 0 ? "赚" : "亏") + "了RM" + abs(money), 450, 350);
}

function nextOrder() {
  customers[0] = customers[1];
  customers[1] = customers[2];
  customers[2] = new Customer();
}

function pay() {
  money += getPrice();
  nextOrder();
  earnings.push(new Earning(getPrice()));
  tray = [0, 0, 0, 0, 0, 0];
}

function wrong() {
  money -= getPrice() / 2;
  earnings.push(new Earning(-getPrice() / 2));
  tray = [0, 0, 0, 0, 0, 0];
}

function getPrice() {
  let price = 0;
  for (let i = 0; i < 6; i++) {
    switch (tray[i]) {
      case 4:
      case 7:
      case 8:
      case 10:
        price += 50;
        break;
      case 1:
      case 5:
      case 9:
        price += 100;
        break;
      case 2:
      case 3:
      case 6:
        price += 200;
    }
  }
  return price;
}

function landscape() {
  background(bg);
  if (screen == 1) {
    imagex(
      customers[2].gender == 0 ? stb : customers[2].gender == 1 ? stg : tc,
      620,
      180,
      480,
      576
    );
    imagex(
      customers[1].gender == 0 ? stb : customers[1].gender == 1 ? stg : tc,
      420,
      100,
      540,
      648
    );
    imagex(
      customers[0].gender == 0 ? stb : customers[0].gender == 1 ? stg : tc,
      200,
      20,
      600,
      720
    );
    imagex(ty, 250, 300, 400, 120);
    push();
    scale(-1, 1);
    imagex(speech, -400, 120, 380, 150);
    pop();
  }
  imagex(stall, 0, 0, 900, 600);
  imagex(rcr, 20, 360, 200, 200);
  imagex(scr, 700, 360, 200, 200);

  imagex(ck1, 220, 440, 50, 50);
  imagex(ck2, 255, 440, 50, 50);
  imagex(ck3, 290, 440, 50, 50);
  imagex(ck3, 220, 460, 50, 50);
  imagex(ck1, 255, 460, 50, 50);
  imagex(ck2, 290, 460, 50, 50);

  imagex(fh1, 340, 440, 40, 70);
  imagex(fh2, 360, 440, 40, 70);
  imagex(fh3, 380, 440, 40, 70);
  imagex(fh1, 400, 440, 40, 70);
  imagex(fh2, 420, 440, 40, 70);

  imagex(fe1, 470, 435, 50, 50);
  imagex(fe2, 520, 435, 50, 50);
  imagex(fe3, 470, 465, 50, 50);
  imagex(fe1, 520, 465, 50, 50);

  imagex(lb1, 605, 430, 40, 40);
  imagex(lb2, 635, 430, 40, 40);
  imagex(lb2, 590, 452, 40, 40);
  imagex(lb1, 615, 455, 40, 40);
  imagex(lb2, 645, 452, 40, 40);
  imagex(lb2, 605, 475, 40, 40);
  imagex(lb1, 635, 475, 40, 40);

  imagex(mt1, 245, 515, 80, 60);
  imagex(mt2, 230, 540, 80, 40);
  imagex(mt2, 255, 545, 80, 40);

  imagex(mr1, 415, 515, 30, 30);
  imagex(mr3, 360, 520, 30, 30);
  imagex(mr2, 389, 535, 30, 30);
  imagex(mr3, 415, 555, 30, 30);
  imagex(mr1, 360, 560, 30, 30);

  imagex(te2, 480, 520, 35, 30);
  imagex(te1, 490, 540, 35, 30);
  imagex(te3, 480, 560, 35, 30);
  imagex(te3, 520, 520, 35, 30);
  imagex(te2, 530, 540, 35, 30);
  imagex(te1, 520, 560, 35, 30);

  imagex(vg1, 585, 515, 50, 50);
  imagex(vg2, 615, 515, 50, 50);
  imagex(vg3, 645, 515, 50, 50);
  imagex(vg1, 600, 540, 50, 50);
  imagex(vg2, 630, 540, 50, 50);
}

class Customer {
  constructor() {
    this.order = [];

    if (floor(random(10)) != 0) this.order.push(1);
    let rf = random([2, 3, 4, 5, 6, 7, 8, 9]);
    if (floor(random(10)) != 0) this.order.push(rf);
    rf = random([2, 3, 4, 5, 6, 7, 8, 9]);
    if (floor(random(10)) < 8 && !this.order.includes(rf)) this.order.push(rf);
    rf = random([2, 3, 4, 5, 6, 7, 8, 9]);
    if (floor(random(10)) < 4 && !this.order.includes(rf)) this.order.push(rf);
    rf = random([2, 3, 4, 5, 6, 7, 8, 9]);
    if (floor(random(10)) < 2 && !this.order.includes(rf)) this.order.push(rf);
    if (floor(random(10)) < 5) this.order.push(10);
    this.gender = floor(random(3));
  }
}

class Earning {
  constructor(amount) {
    this.age = 100;
    this.amount = amount;
  }

  display() {
    textSize(width / 30);
    fill(
      this.amount < 0 ? 150 : 0,
      this.amount >= 0 ? 150 : 0,
      0,
      (this.age / 60) * 255
    );
    strokeWeight(width / 900);
    stroke("black");
    textx(
      (this.amount >= 0 ? "+" : "-") + "RM" + abs(this.amount),
      100,
      this.age + 50
    );
  }

  update() {
    this.age--;
  }
}

/////////////////////////////////////////////////////////////////////////
function resize() {
  if (windowWidth > 1.5 * windowHeight) {
    resizeCanvas(gamesize * 1.5 * windowHeight, gamesize * windowHeight);
  } else {
    resizeCanvas(gamesize * windowWidth, (gamesize / 1.5) * windowWidth);
  }
}

function inside(x1, y1, x2, y2) {
  return (
    mouseX >= (x1 / 900) * width &&
    mouseX <= (x2 / 900) * width &&
    mouseY >= (y1 / 600) * height &&
    mouseY <= (y2 / 600) * height
  );
}

function insidee(x1, y1, r) {
  return dist(mouseX, mouseY, (x1 / 900) * width, (y1 / 600) * height) <= r;
}

function imagex(img, x, y, w, h) {
  image(
    img,
    (x / 900) * width,
    (y / 600) * height,
    (w / 900) * width,
    (h / 600) * height
  );
  //image(img,x,y,w,h);
}

function ellipsex(x, y, w, h) {
  ellipse(
    (x / 900) * width,
    (y / 600) * height,
    (w / 900) * width,
    (h / 600) * height
  );
}

function rectx(x, y, w, h) {
  rect(
    (x / 900) * width,
    (y / 600) * height,
    (w / 900) * width,
    (h / 600) * height
  );
}

function linex(x1, y1, x2, y2) {
  line(
    (x1 / 900) * width,
    (y1 / 600) * height,
    (x2 / 900) * width,
    (y2 / 600) * height
  );
}

function textx(t, x, y) {
  text(t, (x / 900) * width, (y / 600) * height);
}

function windowResized() {
  resize();
}

function is_touch_enabled() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

function food(f) {
  switch (f) {
    case 1:
      return rice;
    case 2:
      return ck1;
    case 3:
      return fh2;
    case 4:
      return fe3;
    case 5:
      return lb2;
    case 6:
      return mt1;
    case 7:
      return mr2;
    case 8:
      return te2;
    case 9:
      return vg3;
    case 10:
      return soup;
  }
}
