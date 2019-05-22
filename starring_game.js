window.onload = function(){
    const undoButton = document.getElementById('undo');
    const nextButton = document.getElementById('next');
    const revealActor0Button = document.getElementById("revealActor0");
    const revealActor1Button = document.getElementById("revealActor1");
    const revealActor2Button = document.getElementById("revealActor2");
    const revealActor3Button = document.getElementById("revealActor3");
    const revealMovieButton = document.getElementById("revealMovie");
    const topScore = document.getElementById("top-team-score");
    const leftScore = document.getElementById("left-team-score");
    const rightScore = document.getElementById("right-team-score");
    const bottomScore = document.getElementById("bottom-team-score");

    const numPlayers = localStorage.getItem("numPlayers");
    const teamNames = [localStorage.getItem("Player1"), localStorage.getItem("Player2"),
         localStorage.getItem("Player3"), localStorage.getItem("Player4")];
    const scoreElements = [topScore, leftScore, rightScore, bottomScore];
    const goal = JSON.parse(localStorage.getItem("toWin"));

    const category = localStorage.getItem("category");

    var questions = {};
    var questionHistory = [];

    const hideHints = JSON.parse(localStorage.getItem("hiddenHints"));
    const hideTitle = JSON.parse(localStorage.getItem("hiddenTitle"));

    $.getJSON("resources/"+category+".json", function (json) {
        questions = json;
        nextQuestion(); //setup first question
    });

    var currentQuestion = {};
    var currentActors = [];

    var pointHistory = [];
    var teamScores = [0, 0, 0, 0];

    function awardPoint(team){
        if(numPlayers > team && questionHistory.length < questions.movies.length){
            teamScores[team]++;
            pointHistory.push(team);
            scoreElements[team].innerHTML = teamNames[team] + ": " + teamScores[team];
            nextQuestion();
        }
        if(teamScores[team] >= goal){
            alert(teamNames[team] + " has won!");
        }
    }

    function undoPoint(){
        if(pointHistory.length <= 0){
            console.log("Nothing to undo");
            return;
        }
        var team = pointHistory.pop(); //value of -1 means question was skipped
        if(team >= 0){
            teamScores[team]--;
            scoreElements[team].innerHTML = teamNames[team] + ": " + teamScores[team];
        }

        questionHistory.pop();
        currentQuestion = questions.movies[questionHistory[questionHistory.length - 1]];

        resetHints();
    }

    function nextQuestion(){
        //console.log(questions.movies[1]);
        if(questionHistory.length >= questions.movies.length){
            console.log("All numbers rolled");
            return;
        }
        var n = Math.floor(Math.random() * questions.movies.length);
        while(questionHistory.includes(n)){
            n = Math.floor(Math.random() * questions.movies.length);
        }

        currentQuestion = questions.movies[n];
        questionHistory.push(n);

        resetHints();
    }

    function resetHints(){
        currentActors = [];
        for(i=0; i<4; i++){
            if(i >= currentQuestion.actors.length){
                currentActors.push(-1);
            }else{
                var n = Math.floor(Math.random() * currentQuestion.actors.length); //random int 0-9
                while(currentActors.includes(n)){
                    n = Math.floor(Math.random() * currentQuestion.actors.length); //random int 0-9
                }
                currentActors.push(n);
            }
        }

        console.log(hideHints);
        if(hideHints){
            console.log("should only get this if true")
            revealActor0Button.innerHTML = "Reveal Actor";
            revealActor0Button.style.background = '#227799';
            revealActor0Button.disabled = false;
            revealActor1Button.innerHTML = "Reveal Actor";
            revealActor1Button.style.background = '#227799';
            revealActor1Button.disabled = false;
            revealActor2Button.innerHTML = "Reveal Actor";
            revealActor2Button.style.background = '#227799';
            revealActor2Button.disabled = false;
            revealActor3Button.innerHTML = "Reveal Actor";
            revealActor3Button.style.background = '#227799';
            revealActor3Button.disabled = false;
        }else{
            revealActor(revealActor0Button, 0);
            revealActor(revealActor1Button, 1);
            revealActor(revealActor2Button, 2);
            revealActor(revealActor3Button, 3);
        }

        if(hideTitle){
            revealMovieButton.innerHTML = "Reveal Movie Title";
            revealMovieButton.style.background = '#227799';
            revealMovieButton.disabled = false;
        }else{
            revealTitle();
        }
    }

    function revealActor(button, actor){
        if(currentActors[actor] == -1){
            button.innerHTML = "Not Enough Actors";
        }else{
            button.innerHTML = currentQuestion.actors[currentActors[actor]];
        }
        button.style.background = '#555555';
        button.disabled = true;
    }

    function revealTitle(){
        revealMovieButton.innerHTML = currentQuestion.title;
        revealMovieButton.style.background = '#444444';
        revealMovieButton.disabled = true;
    }

    topScore.style.background = '#ff6d6d';
    topScore.innerHTML = teamNames[0] + ": 0";
    if(numPlayers > 1){
        leftScore.style.background = '#7986fa';
        leftScore.innerHTML = teamNames[1] + ": 0";
    }else{
        leftScore.style.background = '#333333';
    }
    if(numPlayers > 2){
        rightScore.style.background = '#71da6c';
        rightScore.innerHTML = teamNames[2] + ": 0";
    }else{
        rightScore.style.background = '#333333';
    }
    if(numPlayers > 3){
        bottomScore.style.background = '#f8be42';
        bottomScore.innerHTML = teamNames[3] + ": 0";
    }else{
        bottomScore.style.background = '#333333';
    }

    var target = document.getElementById('container');
    var region = new ZingTouch.Region(target);

    region.bind(target, 'swipe', function(event){
        if(event.detail.data[0].currentDirection < 45 || event.detail.data[0].currentDirection > 315){
            awardPoint(2);
        }else if(event.detail.data[0].currentDirection < 135){
            awardPoint(0);
        }else if(event.detail.data[0].currentDirection < 225){
            awardPoint(1);
        }else{
            awardPoint(3);
        }
        console.log(event.detail.data[0].currentDirection);
    });

    region.bind(topScore, 'tap', function(event){
        awardPoint(0);
    });
    region.bind(leftScore, 'tap', function(event){
        awardPoint(1);
    });
    region.bind(rightScore, 'tap', function(event){
        awardPoint(2);
    });
    region.bind(bottomScore, 'tap', function(event){
        awardPoint(3);
    });
    region.bind(undoButton, 'tap', function(event){
        undoPoint();
    });

    region.bind(revealActor0Button, 'tap', function(event){
        revealActor(revealActor0Button, 0);
    });
    region.bind(revealActor1Button, 'tap', function(event){
        revealActor(revealActor1Button, 1);
    });
    region.bind(revealActor2Button, 'tap', function(event){
        revealActor(revealActor2Button, 2);
    });
    region.bind(revealActor3Button, 'tap', function(event){
        revealActor(revealActor3Button, 3);
    });
    region.bind(revealMovieButton, 'tap', function(event){
        revealTitle();
    });
    region.bind(next, 'tap', function(event){
        pointHistory.push(-1);
        nextQuestion();
    });

}