

// Constants 
const minBallY = 20;
const maxBallY = window.innerHeight - 40;
const minBallX = 0;
const maxBallX = window.innerWidth- 20;
const maxX = maxBallX - 180;
const speed = 20;


// intializing variables and position
var p1 = document.getElementById('rod1');
var p2 = document.getElementById('rod2');
var ball = document.getElementById('ball');
var currX = maxBallX / 2 - (p1.clientWidth / 2);
var ballPosX = maxBallX / 2;
var ballPosY = 20;
var vX = 5;
var vY = 5;
var score = 0;
p1.style.left = currX + "px";
p2.style.left = currX + "px";
ball.style.left = ballPosX + 'px';


// game logic
window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        startGame();
    }
})

function startGame() {
    // paddle handler
    window.addEventListener('keydown', (e) => {
        if ((e.key == 'a' || e.key == 'ArrowLeft') && currX > 0) {
            currX -= speed;
        }
        if ((e.key == 'd' || e.key =='ArrowRight') && currX < maxX) {
            currX += speed;
        }
        p1.style.left = currX + "px";
        p2.style.left = currX + "px";
    })




    const id = setInterval(move, 25);
    function move() {
        ballPosX += vX;
        ballPosY += vY;
        ball.style.top = ballPosY + 'px';
        ball.style.left = ballPosX + 'px';

        if(ballPosY <= minBallY || ballPosY >= maxBallY){
            console.log('reached');
            if(ballPosX < currX || ballPosX > currX + 200){
                clearInterval(id);
                alert('Game Over!!    You Scored : '+ score*100+'\n    Press Enter to Restart');
                location.reload(true);
                return;
            }
            else{
                // vX = -vX;
                score++;
                vY = -vY;
            }
        }

        if(ballPosX <= 0 || ballPosX >= maxBallX){
            vX = -vX;
        }
    }

}

