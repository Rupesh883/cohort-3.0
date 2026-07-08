// // //board
// // let board;
// // let boardWidth = 350;
// // let boardHeight = 540;
// // let context;

// // //bird
// // let birdWidth = 44;
// // let birdHeight = 34;
// // let birdX = boardWidth/8;
// // let birdY = boardHeight/2;
// // let birdImg;
// // let bird = {
// //     x : birdX,
// //     y : birdY,
// //     width : birdWidth,
// //     height : birdHeight
// // }

// // //pipes
// // let pipeArray = [];
// // let pipeWidth = 64;
// // let pipeHeight = 512;
// // let pipeX = boardWidth;
// // let pipeY = 0;

// // let topPipeImg;
// // let bottomPipeImg;

// // //physics
// // let velocityX = -1; //pipes moving speed
// // let velocityY = 0; //bird jump
// // let gravity = 0.2;
// // let gameOver = false;
// // let score = 0;

// // window.onload = function(){
// //     board = document.getElementById('board');
// //     board.height = boardHeight;
// //     board.width = boardWidth;
// //     context = board.getContext("2d");

// //     //draw flappy bird
// //     // context.fillStyle = "green";
// //     // context.fillRect(bird.x, bird.y, bird.width, bird.height);

// //     //load image
// //     birdImg = new Image();
// //     birdImg.src = "./bird.png";
// //     birdImg.onload = function(){
// //         context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height)
// //     }
// //     topPipeImg = new Image();
// //     topPipeImg.src = './top.jpeg';
// //     bottomPipeImg = new Image();
// //     bottomPipeImg.src = 'images/bottom.jpeg';

// //     requestAnimationFrame(update);
// //     setInterval(placePipes, 1500);
// //     document.addEventListener('keydown', moveBird);
// //     document.addEventListener('touchstart', moveBird);
// // }

// // function update(){
// //     requestAnimationFrame(update);
// //     if(gameOver){
// //         return;
// //     }
// //     context.clearRect(0,0, board.width, board.height);

// //     //bird
// //     velocityY += gravity;
// //     // bird.y += velocityY;
// //     bird.y = Math.max(bird.y + velocityY, 0)//limit bird
// //     context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height)

// //     if(bird.y > board.height){
// //         gameOver = true
// //     }

// //     //pipes
// //     for(let i = 0; i < pipeArray.length; i++){
// //         let pipe = pipeArray[i];
// //         pipe.x += velocityX;
// //         context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);
// //         if(!pipe.passed && bird.x > pipe.x + pipe.width){
// //             score +=0.5;  //two pipes
// //             pipe.passed = true;
// //         }
// //         if(detectCollision(bird, pipe)){
// //             gameOver = true;
// //         }
// //     }
// //     while(pipeArray.length > 0 && pipeArray[0].x < -pipeWidth){
// //         pipeArray.shift();
// //     }


// //     //score
// //     context.fillStyle = "white";
// //     context.font = "45px sans-serif";
// //     context.fillText(score, 5, 45);

// //     if(gameOver){
// //         context.fillText("GAME OVER!", 45, 300);
// //     }
// // }

// // function placePipes(){
// //     if(gameOver){
// //         return;
// //     }
// //     let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
// //     let openingSpace = board.height/3;
// //     let topPipe = {
// //         img : topPipeImg,
// //         x : pipeX,
// //         y : randomPipeY,
// //         width: pipeWidth,
// //         height : pipeHeight,
// //         passed: false
// //     }
// //     pipeArray.push(topPipe);
// //     let bottomPipe = {
// //         img : bottomPipeImg,
// //         x : pipeX,
// //         y : randomPipeY + pipeHeight + openingSpace,
// //         width: pipeWidth,
// //         height : pipeHeight,
// //         passed: false
// //     }
// //     pipeArray.push(bottomPipe);
// // }

// // function moveBird(event){
// //     if(event.code == "Space" || event.code == "ArrowUp" || event.type === "touchstart"){
// //         //jump
// //         velocityY = -6;
// //     }

// //     //reset game
// //     if(gameOver){
// //         bird.y = birdY;
// //         pipeArray = [];
// //         score = 0;
// //         gameOver = false;
// //     }
// // }

// // function detectCollision(a,b){
// //     return a.x < b.x + b.width &&
// //            a.x + a.width > b.x &&
// //            a.y < b.y + b.height &&
// //            a.y + a.height > b.y;
// // }





// // =========================
// // FLAPPY BIRD ADVANCED
// // Part 1
// // =========================

// const canvas = document.getElementById("gameCanvas");
// const ctx = canvas.getContext("2d");

// const WIDTH = canvas.width;
// const HEIGHT = canvas.height;

// // Images
// const bg = new Image();
// bg.src = "bg.jpeg";

// const birdImg = new Image();
// birdImg.src = "bird.png";

// const pipeImg = new Image();
// pipeImg.src = "./bottom.jpeg";

// // UI
// const scoreText = document.getElementById("score");
// const startScreen = document.getElementById("startScreen");
// const gameOverScreen = document.getElementById("gameOverScreen");
// const finalScore = document.getElementById("finalScore");
// const bestScoreText = document.getElementById("bestScore");

// const startBtn = document.getElementById("startBtn");
// const restartBtn = document.getElementById("restartBtn");

// // Bird
// const bird = {
//     x: 100,
//     y: 250,
//     width: 50,
//     height: 40,
//     velocity: 1 ,
//     gravity: 0.5,
//     jump: -10,
//     rotation: 0
// };

// // Pipes
// let pipes = [];
// let pipeWidth = 80;
// let pipeGap = 230;
// let pipeSpeed = 3;

// // Game State
// let score = 0;
// let bestScore = localStorage.getItem("bestScore") || 0;

// let started = false;
// let gameOver = false;
// let frame = 0;

// // =========================
// // Reset Game
// // =========================

// function resetGame() {

//     bird.y = 250;
//     bird.velocity = 0;
//     bird.rotation = 0;

//     pipes = [];

//     score = 0;

//     frame = 0;

//     gameOver = false;

//     scoreText.innerHTML = "0";

//     gameOverScreen.classList.add("hidden");
// }

// // =========================
// // Jump
// // =========================

// function flap(){

//     if(!started){

//         started = true;
//         startScreen.classList.add("hidden");

//     }

//     if(gameOver) return;

//     bird.velocity = bird.jump;

// }

// // Keyboard

// document.addEventListener("keydown",(e)=>{

//     if(e.code==="Space"){

//         e.preventDefault();

//         flap();

//     }

// });

// // Mouse

// canvas.addEventListener("click",flap);

// // Mobile

// canvas.addEventListener("touchstart",(e)=>{

//     e.preventDefault();

//     flap();

// });

// // Buttons

// startBtn.onclick=()=>{

//     flap();

// }

// restartBtn.onclick=()=>{

//     resetGame();

// }

// // =========================
// // Bird Physics
// // =========================

// function updateBird(){

//     bird.velocity += bird.gravity;

//     bird.y += bird.velocity;

//     if(bird.velocity>10){

//         bird.velocity=10;

//     }

//     if(bird.velocity<0){

//         bird.rotation=-20;

//     }else{

//         bird.rotation=Math.min(90,bird.rotation+4);

//     }

//     if(bird.y+bird.height>=HEIGHT){

//         bird.y=HEIGHT-bird.height;

//         endGame();

//     }

//     if(bird.y<=0){

//         bird.y=0;

//     }

// }

// // =========================
// // End Game
// // =========================

// function endGame(){

//     if(gameOver) return;

//     gameOver=true;

//     if(score>bestScore){

//         bestScore=score;

//         localStorage.setItem("bestScore",bestScore);

//     }

//     finalScore.innerHTML=score;

//     bestScoreText.innerHTML=bestScore;

//     gameOverScreen.classList.remove("hidden");

// }

// // =========================
// // PIPES
// // =========================

// function createPipe() {

//     const minY = 80;
//     const maxY = HEIGHT - pipeGap - 80;

//     const topHeight =
//         Math.floor(Math.random() * (maxY - minY)) + minY;

//     pipes.push({

//         x: WIDTH,

//         topHeight: topHeight,

//         bottomY: topHeight + pipeGap,

//         scored: false

//     });

// }

// // =========================
// // UPDATE PIPES
// // =========================

// function updatePipes() {

//     frame++;

//     if (frame % 100 === 0) {

//         createPipe();

//     }

//     for (let i = pipes.length - 1; i >= 0; i--) {

//         const pipe = pipes[i];

//         pipe.x -= pipeSpeed;

//         // SCORE

//         if (!pipe.scored && pipe.x + pipeWidth < bird.x) {

//             pipe.scored = true;

//             score++;

//             scoreText.innerHTML = score;

//         }

//         // REMOVE PIPE

//         if (pipe.x + pipeWidth < 0) {

//             pipes.splice(i, 1);

//             continue;

//         }

//         // COLLISION

//         if (

//             bird.x + bird.width > pipe.x &&

//             bird.x < pipe.x + pipeWidth &&

//             (

//                 bird.y < pipe.topHeight ||

//                 bird.y + bird.height > pipe.bottomY

//             )

//         ) {

//             endGame();

//         }

//     }

// }

// // =========================
// // DRAW PIPES
// // =========================

// function drawPipes() {

//     for (const pipe of pipes) {

//         // TOP PIPE

//         ctx.save();

//         ctx.translate(pipe.x + pipeWidth / 2, pipe.topHeight);

//         ctx.scale(1, -1);

//         ctx.drawImage(

//             pipeImg,

//             -pipeWidth / 2,

//             0,

//             pipeWidth,

//             pipe.topHeight

//         );

//         ctx.restore();

//         // BOTTOM PIPE

//         ctx.drawImage(

//             pipeImg,

//             pipe.x,

//             pipe.bottomY,

//             pipeWidth,

//             HEIGHT - pipe.bottomY

//         );

//     }

// }

// // =========================
// // DRAW BACKGROUND
// // =========================

// function drawBackground() {
//     ctx.drawImage(bg, 0, 0, WIDTH, HEIGHT);
// }

// // =========================
// // DRAW BIRD
// // =========================

// function drawBird() {

//     ctx.save();

//     ctx.translate(
//         bird.x + bird.width / 2,
//         bird.y + bird.height / 2
//     );

//     ctx.rotate(bird.rotation * Math.PI / 180);

//     ctx.drawImage(
//         birdImg,
//         -bird.width / 2,
//         -bird.height / 2,
//         bird.width,
//         bird.height
//     );

//     ctx.restore();

// }

// // =========================
// // GAME LOOP
// // =========================

// function gameLoop() {

//     drawBackground();

//     if (started && !gameOver) {

//         updateBird();

//         updatePipes();

//     }

//     drawPipes();

//     drawBird();

//     requestAnimationFrame(gameLoop);

// }

// // =========================
// // IMAGE LOADED
// // =========================

// let loaded = 0;

// function imageLoaded() {

//     loaded++;

//     if (loaded === 3) {

//         gameLoop();

//     }

// }

// bg.onload = imageLoaded;
// birdImg.onload = imageLoaded;
// pipeImg.onload = imageLoaded;

// // =========================
// // FALLBACK
// // =========================

// setTimeout(() => {

//     if (loaded < 3) {

//         gameLoop();

//     }

// }, 1000);

const main =document.querySelector("main")
const bird=document.querySelector(".bird")


let birdd={
    x:80,
    y:230,
    width:79,
    height:50,
    jumpfource:4,

}

bird.style.left=birdd.x
bird.style.top=birdd.y
bird.style.width=birdd.width
bird.style.height=birdd.height


let pipeX=-40;
let pipeY=0;
let ispipe=false;
let pipetop
let pipebottom 
let pipeGap=150
let pipemovespeed=2
let score=0
function generatepipe(){
    if(pipeX==480){
        main.removeChild(pipetop)
        main.removeChild(pipebottom)
        ispipe=true
        pipeX=-40;
    }else if (ispipe) {
         pipetop.style.right=`${pipeX}px`
         pipebottom.style.right=`${pipeX}px`
         if(pipeX == 380){
            score=score+1
            return
         }
         return
    }
     pipetop=document.createElement("div")
     pipebottom=document.createElement("div")
     pipebottom.classList.add("bottomPipe")
    let randomwidth=Math.floor(Math.random()*400)
    randomwidth < 100 ? randomwidth =100:null 
    pipetop.style.height=`${randomwidth}px`
     pipebottom.style.height=`${(640-randomwidth)-pipeGap}px`

       pipetop.classList.add("topPipe")
     main.append(pipetop)
     main.append(pipebottom)
    ispipe=true

}



// let interval=setInterval(()=>{
//     // if (topDistance >= 640 || topDistance <= 0 ) {
//     //     alert("game over")
//     //     clearInterval(interval)
//     // }
//    bird.style.top=`${birdd.y+2}px`
//    birdd.y= birdd.y+2
//    pipeX=pipeX+pipemovespeed
//    generatepipe()
// console.log(score)
    
// },10)
document.addEventListener("keydown",function(){
    birdd.y=birdd.y-80
})


