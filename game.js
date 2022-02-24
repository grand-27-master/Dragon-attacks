//alert("Press to start the game");
Score=0;
jump=true;

document.onkeydown=function(e)
{
    console.log("key is pressed",e.keyCode);
    if(e.keyCode==32) // spacebar key
    {
        player=document.querySelector('.player');
        // adding an extra function for animation
        player.classList.add('animatePlayer');
        // removes animation after 800 ms
        setTimeout(()=>{
            player.classList.remove('animatePlayer');
        },800);
    }

    if(e.keyCode==37) // left arrow key
    {
        enemy=document.querySelector('.enemy');
        // adding an extra function for animation
        enemy.classList.add('animateEnemy');
        // removes animation after 800 ms
        setTimeout(()=>{
            enemy.classList.remove('animateEnemy');
        },800);
    }

    if(e.keyCode==39) // right arrow key
    {
        player=document.querySelector('.player');
        player_x=window.getComputedStyle(player,null).getPropertyValue('left');

        // player moves to the right
        player.style.left=parseInt(player_x)+100+'px';
    }

    if(e.keyCode==65) // 'a' key
    {
        player=document.querySelector('.player');
        player_x=window.getComputedStyle(player,null).getPropertyValue('left');

        // player moves to the left
        player.style.left=parseInt(player_x)-100+'px';
    }
}

setInterval(()=>{
    player=document.querySelector('.player');
    gameOver=document.querySelector('.gameOver');
    enemy=document.querySelector('.enemy');
    
    // required distances
    player_x=window.getComputedStyle(player,null).getPropertyValue('left');
    player_y=window.getComputedStyle(player,null).getPropertyValue('top');
    enemy_x=window.getComputedStyle(enemy,null).getPropertyValue('left');
    enemy_y=window.getComputedStyle(enemy,null).getPropertyValue('top');

    // find their difference
    diff_x=Math.abs(parseInt(player_x)-parseInt(enemy_x));
    diff_y=Math.abs(parseInt(player_y)-parseInt(enemy_y));

    // applying collision condition
    if(diff_x<=100 && diff_y<=50)
    {
        gameOver.style.visibility="visible";
        enemy.classList.remove('animateEnemy');
    }

    else if(diff_x<150 && jump){
        Score+=1;
        //console.log("score",Score);
        updateScore(Score);
        jump=false;
        setTimeout(() => {
            jump=true;
        }, 1000);
    }
},100);

function updateScore(Score)
{
    scoreCont.innerHTML="Your score is:"+Score;
}