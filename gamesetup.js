var hideHints;
var hideTitle;

function setNumPlayers(numPlayers){
    localStorage.setItem("numPlayers", numPlayers);
}

function setPlayerName(playerID, playerName){
    localStorage.setItem(playerID, playerName);
}

function setWinningPoints(goal){
    localStorage.setItem("toWin", goal);
    document.getElementById("pointsToWin").innerHTML = goal;
}

function setNumHints(numHints){
    localStorage.setItem("numHints", numHints);
    document.getElementById("hints").innerHTML = numHints;
}

function toggleHiddenHints(){
    hideHints = !hideHints;
    localStorage.setItem("hiddenHints", hideHints);
}

function toggleHiddenTitle(){
    hideTitle = !hideTitle;
    localStorage.setItem("hiddenTitle", hideTitle);
}

function setDefaults(){
    setNumPlayers(1);
    setPlayerName("Player1", "");
    setPlayerName("Player2", "");
    setPlayerName("Player3", "");
    setPlayerName("Player4", "");
    setWinningPoints(10);
    setNumHints(4);
    hideHints = false;
    localStorage.setItem("hiddenHints", hideHints);
    hideTitle = true;
    localStorage.setItem("hiddenTitle", hideTitle);

    document.getElementById("game_explanation").innerHTML="<font size=\"4\">This game will consist of the top 100 best US Box Office sellers from "+localStorage.getItem("category")+"</font>";
}

window.onload = setDefaults;