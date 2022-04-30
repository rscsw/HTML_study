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

function ClickEvent0()
{
    if(clickable[0])
    {
        if(gameState == 'X')
        {
            map[0] = 'X';
            document.getElementById("map[0]").innerText = 'X';
            document.getElementById("map[0]").style.color = "#cc00ff";
            document.getElementById("title").innerText = '☆♡♧♬ O의 차례입니다 ☆♡♧♬';
            gameState = 'O';
        }
        else if(gameState == 'O')
        {
            map[0] = 'O';
            document.getElementById("map[0]").innerText = 'O';
            document.getElementById("map[0]").style.color = "#00ffaa";
            document.getElementById("title").innerText = '☆♡♧♬ X의 차례입니다 ☆♡♧♬';
            gameState = 'X';
        }
        GameStateCheck();
        clicked++;
        clickable[0] = false;
    }
}

function ClickEvent1()
{
    if(clickable[1])
    {
        if(gameState == 'X')
        {
            map[1] = 'X';
            document.getElementById("map[1]").innerText = 'X';
            document.getElementById("map[1]").style.color = "#cc00ff";
            document.getElementById("title").innerText = '☆♡♧♬ O의 차례입니다 ☆♡♧♬';
            gameState = 'O';
        }
        else if(gameState == 'O')
        {
            map[1] = 'O';
            document.getElementById("map[1]").innerText = 'O';
            document.getElementById("map[1]").style.color = "#00ffaa";
            document.getElementById("title").innerText = '☆♡♧♬ X의 차례입니다 ☆♡♧♬';
            gameState = 'X';
        }
        GameStateCheck();
        clicked++;
        clickable[1] = false;
    }
}

function ClickEvent2()
{
    if(clickable[2])
    {
        if(gameState == 'X')
        {
            map[2] = 'X';
            document.getElementById("map[2]").innerText = 'X';
            document.getElementById("map[2]").style.color = "#cc00ff";
            document.getElementById("title").innerText = '☆♡♧♬ O의 차례입니다 ☆♡♧♬';
            gameState = 'O';
        }
        else if(gameState == 'O')
        {
            map[2] = 'O';
            document.getElementById("map[2]").innerText = 'O';
            document.getElementById("map[2]").style.color = "#00ffaa";
            document.getElementById("title").innerText = '☆♡♧♬ X의 차례입니다 ☆♡♧♬';
            gameState = 'X';
        }
        GameStateCheck();
        clicked++;
        clickable[2] = false;
    }
}

function ClickEvent3()
{
    if(clickable[3])
    {
        if(gameState == 'X')
        {
            map[3] = 'X';
            document.getElementById("map[3]").innerText = 'X';
            document.getElementById("map[3]").style.color = "#cc00ff";
            document.getElementById("title").innerText = '☆♡♧♬ O의 차례입니다 ☆♡♧♬';
            gameState = 'O';
        }
        else if(gameState == 'O')
        {
            map[3] = 'O';
            document.getElementById("map[3]").innerText = 'O';
            document.getElementById("map[3]").style.color = "#00ffaa";
            document.getElementById("title").innerText = '☆♡♧♬ X의 차례입니다 ☆♡♧♬';
            gameState = 'X';
        }
        GameStateCheck();
        clicked++;
        clickable[3] = false;
    }
}

function ClickEvent4()
{
    if(clickable[4])
    {
        if(gameState == 'X')
        {
            map[4] = 'X';
            document.getElementById("map[4]").innerText = 'X';
            document.getElementById("map[4]").style.color = "#cc00ff";
            document.getElementById("title").innerText = '☆♡♧♬ O의 차례입니다 ☆♡♧♬';
            gameState = 'O';
        }
        else if(gameState == 'O')
        {
            map[4] = 'O';
            document.getElementById("map[4]").innerText = 'O';
            document.getElementById("map[4]").style.color = "#00ffaa";
            document.getElementById("title").innerText = '☆♡♧♬ X의 차례입니다 ☆♡♧♬';
            gameState = 'X';
        }
        GameStateCheck();
        clicked++;
        clickable[4] = false;
    }
}

function ClickEvent5()
{
    if(clickable[5])
    {
        if(gameState == 'X')
        {
            map[5] = 'X';
            document.getElementById("map[5]").innerText = 'X';
            document.getElementById("map[5]").style.color = "#cc00ff";
            document.getElementById("title").innerText = '☆♡♧♬ O의 차례입니다 ☆♡♧♬';
            gameState = 'O';
        }
        else if(gameState == 'O')
        {
            map[5] = 'O';
            document.getElementById("map[5]").innerText = 'O';
            document.getElementById("map[5]").style.color = "#00ffaa";
            document.getElementById("title").innerText = '☆♡♧♬ X의 차례입니다 ☆♡♧♬';
            gameState = 'X';
        }
        GameStateCheck();
        clicked++;
        clickable[5] = false;
    }
}

function ClickEvent6()
{
    if(clickable[6])
    {
        if(gameState == 'X')
        {
            map[6] = 'X';
            document.getElementById("map[6]").innerText = 'X';
            document.getElementById("map[6]").style.color = "#cc00ff";
            document.getElementById("title").innerText = '☆♡♧♬ O의 차례입니다 ☆♡♧♬';
            gameState = 'O';
        }
        else if(gameState == 'O')
        {
            map[6] = 'O';
            document.getElementById("map[6]").innerText = 'O';
            document.getElementById("map[6]").style.color = "#00ffaa";
            document.getElementById("title").innerText = '☆♡♧♬ X의 차례입니다 ☆♡♧♬';
            gameState = 'X';
        }
        GameStateCheck();
        clicked++;
        clickable[6] = false;
    }
}

function ClickEvent7()
{
    if(clickable[7])
    {
        if(gameState == 'X')
        {
            map[7] = 'X';
            document.getElementById("map[7]").innerText = 'X';
            document.getElementById("map[7]").style.color = "#cc00ff";
            document.getElementById("title").innerText = '☆♡♧♬ O의 차례입니다 ☆♡♧♬';
            gameState = 'O';
        }
        else if(gameState == 'O')
        {
            map[7] = 'O';
            document.getElementById("map[7]").innerText = 'O';
            document.getElementById("map[7]").style.color = "#00ffaa";
            document.getElementById("title").innerText = '☆♡♧♬ X의 차례입니다 ☆♡♧♬';
            gameState = 'X';
        }
        GameStateCheck();
        clicked++;
        clickable[7] = false;
    }
}

function ClickEvent8()
{
    if(clickable[8])
    {
        if(gameState == 'X')
        {
            map[8] = 'X';
            document.getElementById("map[8]").innerText = 'X';
            document.getElementById("map[8]").style.color = "#cc00ff";
            document.getElementById("title").innerText = '☆♡♧♬ O의 차례입니다 ☆♡♧♬';
            gameState = 'O';
        }
        else if(gameState == 'O')
        {
            map[8] = 'O';
            document.getElementById("map[8]").innerText = 'O';
            document.getElementById("map[8]").style.color = "#00ffaa";
            document.getElementById("title").innerText = '☆♡♧♬ X의 차례입니다 ☆♡♧♬';
            gameState = 'X';
        }
        GameStateCheck();
        clicked++;
        clickable[8] = false;
    }
}