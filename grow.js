var flowersAmount = 0;
var canGrow = true;
function Grow(x, y) {
if (canGrow) {
    var flowerNum = Math.trunc(Math.random() * 11);
    console.log(flowerNum);
    if(flowerNum == 0) {
    let randSize = Math.trunc((Math.random() * (350 - 300) + 300));
    let randSize2 = Math.trunc((Math.random() * (200 - 175) + 175));
    document.body.innerHTML += '<div><img src = "sprites/flower1.png" style = "position: absolute; top: ' + (y - 300) + 'px; left: '+ (x - 90) +'px; height: ' + randSize +'px; width: ' + randSize2 +'px;"></div>';
    }
    else if (flowerNum == 1) {
        let randSize = Math.trunc((Math.random() * (140 - 100) + 100));
        let randSize2 = Math.trunc((Math.random() * (60 - 45) + 45));
        document.body.innerHTML += '<div><img src = "sprites/flower2.png" style = "position: absolute; top: ' + (y - 100) + 'px; left: '+ (x - 17) +'px; height: ' + randSize +'px; width: ' + randSize2 +'px;"></div>';
    }
    else if (flowerNum == 2) {
        let randSize = Math.trunc((Math.random() * (300 - 270) + 270));
        let randSize2 = Math.trunc((Math.random() * (200 - 180) + 180));
        let choice = Math.trunc(Math.random() * 2);
        if (choice == 0) document.body.innerHTML += '<div><img src = "sprites/flower3.png" style = "transform: scale(-1, 1); position: absolute; top: ' + (y - 260) + 'px; left: '+ (x - 130) +'px; height: ' + randSize +'px; width: ' + randSize2 +'px;"></div>';
        else document.body.innerHTML += '<div><img src = "sprites/flower3.png" style = "position: absolute; top: ' + (y - 260) + 'px; left: '+ (x - 130) +'px; height: ' + randSize +'px; width: ' + randSize2 +'px;"></div>';
    }
    else if (flowerNum == 3) {
        let randSize = Math.trunc((Math.random() * (280 - 240) + 240));
        let randSize2 = Math.trunc((Math.random() * (120 - 90) + 90));
        document.body.innerHTML += '<div><img src = "sprites/flower4.png" style = "position: absolute; top: ' + (y - 240) + 'px; left: '+ (x - 50) +'px; height: ' + randSize +'px; width: ' + randSize2 +'px;"></div>';
    }
    else if (flowerNum == 4) {
        let randSize = Math.trunc((Math.random() * (170 - 130) + 130)); 
        let randSize2 = Math.trunc((Math.random() * (200 - 180) + 180));
        let choice = Math.trunc(Math.random() * 2);
        if (choice == 0) document.body.innerHTML += '<div><img src = "sprites/flower5.png" style = "transform: scale(-1, 1); position: absolute; top: ' + (y - 140) + 'px; left: '+ (x - 120) +'px; height: ' + randSize +'px; width: ' + randSize2 +'px;"></div>';
        else document.body.innerHTML += '<div><img src = "sprites/flower5.png" style = "position: absolute; top: ' + (y - 140) + 'px; left: '+ (x - 30) +'px; height: ' + randSize +'px; width: ' + randSize2 +'px;"></div>';
    }
    else if (flowerNum == 5) {
        let randSize = Math.trunc((Math.random() * (140 - 100) + 100));
        let randSize2 = Math.trunc((Math.random() * (60 - 45) + 45));
        document.body.innerHTML += '<div><img src = "sprites/flower2.png" style = "position: absolute; top: ' + (y - 100) + 'px; left: '+ (x - 17) +'px; height: ' + randSize +'px; width: ' + randSize2 +'px;"></div>';
    }
    else if (flowerNum == 6) {
        let randSize = Math.trunc((Math.random() * (280 - 240) + 240));
        let randSize2 = Math.trunc((Math.random() * (160 - 140) + 140));
        document.body.innerHTML += '<div><img src = "sprites/flower6.png" style = "position: absolute; top: ' + (y - 225) + 'px; left: '+ (x - 80) +'px; height: ' + randSize +'px; width: ' + randSize2 +'px;"></div>';
    }
    else if (flowerNum == 7) {
        let randSize = Math.trunc((Math.random() * (280 - 220) + 220));
        let randSize2 = Math.trunc((Math.random() * (200 - 170) + 170));
        document.body.innerHTML += '<div><img src = "sprites/flower7.png" style = "position: absolute; top: ' + (y - 225) + 'px; left: '+ (x - 50) +'px; height: ' + randSize +'px; width: ' + randSize2 +'px;"></div>';
    }
    else if (flowerNum == 8) {
        let randSize = Math.trunc((Math.random() * (280 - 220) + 220));
        let randSize2 = Math.trunc((Math.random() * (220 - 170) + 170));
        document.body.innerHTML += '<div><img src = "sprites/grass.png" style = "position: absolute; top: ' + (y - 225) + 'px; left: '+ (x - 50) +'px; height: ' + randSize +'px; width: ' + randSize2 +'px;"></div>';
    }
    else if (flowerNum == 9) {
        let randSize = Math.trunc((Math.random() * (400 - 340) + 340));
        let randSize2 = Math.trunc((Math.random() * (600 - 520) + 520));
        document.body.innerHTML += '<div><img src = "sprites/grass2.png" style = "position: absolute; top: ' + (y - 320) + 'px; left: '+ (x - 200) +'px; height: ' + randSize +'px; width: ' + randSize2 +'px;"></div>';
    }
    else if (flowerNum == 10) {
        let randSize = Math.trunc((Math.random() * (400 - 340) + 340));
        let randSize2 = Math.trunc((Math.random() * (600 - 520) + 520));
        document.body.innerHTML += '<div><img src = "sprites/finalboss.png" style = "position: absolute; top: ' + (y - 366) + 'px; left: '+ (x - 250) +'px; height: ' + randSize +'px; width: ' + randSize2 +'px;"></div>';
    }
    flowersAmount++;
    if (flowersAmount == 10) {
        document.body.innerHTML += '<div><img id = "bird" src = "sprites/bird.png"></div>';
	    canGrow = false;
        setTimeout(movebird, 200);
    }
    if (flowersAmount == 20) {
        document.body.style.backgroundImage = 'url(sprites/sky2.jpg)'
        document.body.innerHTML += '<h1 id = "Color">C 8 <br>Марта!</h1>';
    }
}}
function movebird() {
    document.getElementById("bird").style.transform = "translate(6000px,0)";
    setTimeout(YesYouCan, 200);
}

function YesYouCan() {
    canGrow = true;
}