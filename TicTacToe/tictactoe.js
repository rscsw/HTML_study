var map = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var clickable = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var gameState = 'X';
var clicked = 0;

clickable[0] = true;
clickable[1] = true;
clickable[2] = true;
clickable[3] = true;
clickable[4] = true;
clickable[5] = true;
clickable[6] = true;
clickable[7] = true;
clickable[8] = true;

function GameStateCheck()
{
    if(map[0] == 'X' && map[1] == 'X' && map[2] == 'X')
    {
        gameState = 'Xwin';
    }
    else if(map[3] == 'X' && map[4] == 'X' && map[5] == 'X')
    {
        gameState = 'Xwin';
    }
    else if(map[6] == 'X' && map[7] == 'X' && map[8] == 'X')
    {
        gameState = 'Xwin';
    }
    else if(map[0] == 'X' && map[3] == 'X' && map[6] == 'X')
    {
        gameState = 'Xwin';
    }
    else if(map[1] == 'X' && map[4] == 'X' && map[7] == 'X')
    {
        gameState = 'Xwin';
    }
    else if(map[2] == 'X' && map[5] == 'X' && map[8] == 'X')
    {
        gameState = 'Xwin';
    }
    else if(map[0] == 'X' && map[4] == 'X' && map[8] == 'X')
    {
        gameState = 'Xwin';
    }
    else if(map[2] == 'X' && map[4] == 'X' && map[6] == 'X')
    {
        gameState = 'Xwin';
    }
    else if(map[0] == 'O' && map[1] == 'O' && map[2] == 'O')
    {
        gameState = 'Owin';
    }
    else if(map[3] == 'O' && map[4] == 'O' && map[5] == 'O')
    {
        gameState = 'Owin';
    }
    else if(map[6] == 'O' && map[7] == 'O' && map[8] == 'O')
    {
        gameState = 'Owin';
    }
    else if(map[0] == 'O' && map[3] == 'O' && map[6] == 'O')
    {
        gameState = 'Owin';
    }
    else if(map[1] == 'O' && map[4] == 'O' && map[7] == 'O')
    {
        gameState = 'Owin';
    }
    else if(map[2] == 'O' && map[5] == 'O' && map[8] == 'O')
    {
        gameState = 'Owin';
    }
    else if(map[0] == 'O' && map[4] == 'O' && map[8] == 'O')
    {
        gameState = 'Owin';
    }
    else if(map[2] == 'O' && map[4] == 'O' && map[6] == 'O')
    {
        gameState = 'Owin';
    }

    if(gameState == 'Xwin')
    {
        document.getElementById("title").innerText = '☆♡♧♬ X가 이겼습니다 ☆♡♧♬';
    }
    else if(gameState == 'Owin')
    {
        document.getElementById("title").innerText = '☆♡♧♬ O가 이겼습니다 ☆♡♧♬';
    }
    else if(clicked >= 8)
    {
        document.getElementById("title").innerText = '☆♡♧♬ 비겼습니다 ☆♡♧♬';
    }
}

function ClickEvent(num)
{
    if(clickable[num])
    {
        if(gameState == 'X')
        {
            map[num] = 'X';
            document.getElementById("map["+num+"]").innerText = 'X';
            document.getElementById("map["+num+"]").style.color = "#cc00ff";
            document.getElementById("title").innerText = '☆♡♧♬ O의 차례입니다 ☆♡♧♬';
            gameState = 'O';
        }
        else if(gameState == 'O')
        {
            map[0] = 'O';
            document.getElementById("map["+num+"]").innerText = 'O';
            document.getElementById("map["+num+"]").style.color = "#00ffaa";
            document.getElementById("title").innerText = '☆♡♧♬ X의 차례입니다 ☆♡♧♬';
            gameState = 'X';
        }
        GameStateCheck();
        clicked++;
        clickable[num] = false;
    }
}