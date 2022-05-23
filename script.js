window.onload =function(){
   checkFirstVisit();
};
function checkFirstVisit() {
    if(document.cookie.indexOf('mycookie')==-1) {
      // cookie doesn't exist, create it now
      document.cookie = 'mycookie=1';
    }
    else {
      // not first visit, so alert
        scramble();

    }
  }
function scramble(){
    let dice1 = Math.ceil(Math.random()*6);
    let dice2 = Math.ceil(Math.random()*6);
    let img1 = document.querySelector(".img1");
    let img2 = document.querySelector(".img2");
    img1.src = "./images/dice"+ dice1 + ".png";
    img2.src = "./images/dice"+ dice2 + ".png";
    checkWinner(dice1,dice2);
}
function checkWinner(d1,d2){
    if(d1===d2){
        draw();
    }
    else if (d1>d2){
        printWinner(1)
    }
    else{
        printWinner(2)
    }
}
function draw(){
    let h1 = document.querySelector('h1');
    h1.innerHTML = "Draw!";
}
function printWinner(winner){
    let h1 = document.querySelector('h1');
    h1.innerHTML = "Player " + winner + " wins!";
}