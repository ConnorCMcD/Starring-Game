window.onload = function(){
    const undoButton = document.getElementById('undo-round');
    const nextButton = document.getElementById('skip-round');
    const revealButton = document.getElementById('reveal-cast');
    const guessButton = document.getElementById('guess-movie');
    const movieRoulette = document.getElementById('movie-roulette');

    const castLists = [];
    castLists.push(document.getElementById("cast-list-1"));
    castLists.push(document.getElementById("cast-list-2"));
    
    const scoreElements = [];
    scoreElements.push(document.getElementById("team-1-score"));
    scoreElements.push(document.getElementById("team-2-score"));
    scoreElements.push(document.getElementById("team-3-score"));
    scoreElements.push(document.getElementById("team-4-score"));

    const numPlayers = localStorage.getItem("numPlayers");
    const teamNames = [localStorage.getItem("Player1"), localStorage.getItem("Player2"),
         localStorage.getItem("Player3"), localStorage.getItem("Player4")];
    const goal = JSON.parse(localStorage.getItem("toWin"));

    const category = localStorage.getItem("category");

    var questions = {};
    var questionHistory = [];
    var titles = [];

    const hideHints = JSON.parse(localStorage.getItem("hiddenHints"));

    $.getJSON("resources/"+category+".json", function (json) {
        questions = json;
        nextQuestion(); //setup first question

        //setup selection roulette
        for(i=0; i<questions.movies.length; i++){
            titles.push(questions.movies[i].title);
        }
        titles.sort();
        movieRoulette.innerHTML = "";
        for(i=0; i<titles.length; i++){
            movieRoulette.innerHTML += "<div><h3>"+titles[i]+"</h3></div>";
        }
        sliderInit();
        $('.movie-roulette').on('afterChange', function(event, slick, currentSlide){
            guessButton.style.background = '#222222';
            guessButton.innerHTML = "Guess Movie";
        });

        scoreElements[0].innerHTML = teamNames[0]+"</br>0";
        scoreElements[0].addEventListener("click", function(){
            awardPoint(0);
        });
        scoreElements[1].innerHTML = teamNames[1]+"</br>0";
        scoreElements[1].addEventListener("click", function(){
            awardPoint(1);
        });
        scoreElements[2].innerHTML = teamNames[2]+"</br>0";
        scoreElements[2].addEventListener("click", function(){
            awardPoint(2);
        });
        scoreElements[3].innerHTML = teamNames[3]+"</br>0";
        scoreElements[3].addEventListener("click", function(){
            awardPoint(3);
        });
        for(i=numPlayers; i<4; i++){
            scoreElements[i].innerHTML = "";
            scoreElements[i].disabled = true;
        }
    
        undoButton.addEventListener("click", undoRound);
        revealButton.addEventListener("click", revealActor);
        guessButton.addEventListener("click", guessMovie);
        nextButton.addEventListener("click", function(){
            pointHistory.push(-1);
            nextQuestion();
        });
    });

    var currentQuestion = {};
    var currentActors = [];
    var revealedActors = 0;

    var pointHistory = [];
    var teamScores = [0, 0, 0, 0];

    function awardPoint(team){
        console.log(numPlayers+","+team+","+questionHistory.length+","+questions.movies.length);
        if(numPlayers > team && questionHistory.length < questions.movies.length){
            teamScores[team]++;
            pointHistory.push(team);
            scoreElements[team].innerHTML = teamNames[team] + "<br/>" + teamScores[team];
            nextQuestion();
        }
        if(teamScores[team] >= goal){
            alert(teamNames[team] + " has won!");
        }
    }

    function undoRound(){
        if(pointHistory.length <= 0){
            console.log("Nothing to undo");
            return;
        }
        var team = pointHistory.pop(); //value of -1 means round was skipped
        if(team >= 0){
            teamScores[team]--;
            scoreElements[team].innerHTML = teamNames[team] + "<br/>" + teamScores[team];
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
        for(i=0; i<currentQuestion.actors.length; i++){
            var n = Math.floor(Math.random() * currentQuestion.actors.length); //random int 0-9
            while(currentActors.includes(n)){
                n = Math.floor(Math.random() * currentQuestion.actors.length); //random int 0-9
            }
            currentActors.push(n);
        }

        console.log(hideHints);
        castLists[0].innerHTML = "";
        castLists[1].innerHTML = "";
        if(hideHints){
            revealedActors = 0;
            revealButton.disabled = (revealedActors >= currentQuestion.actors.length);
        }else{
            revealedActors = currentQuestion.actors.length;
            for(i=0; i<revealedActors; i++){
                castLists[i%2].innerHTML += "<div class='actor'>"+currentQuestion.actors[currentActors[i]]+"</div>"
            }
            revealButton.disabled = true;
        }
    }

    function revealActor(){
        revealedActors++;
        castLists[0].innerHTML = "";
        castLists[1].innerHTML = "";
        for(i=0; i<revealedActors; i++){
            castLists[i%2].innerHTML += "<div class='actor'>"+currentQuestion.actors[currentActors[i]]+"</div>"
        }
        revealButton.disabled = (revealedActors >= currentQuestion.actors.length);
    }

    function guessMovie(){
        var currentSlide = $('.movie-roulette').slick('slickCurrentSlide');
        if(titles[currentSlide] == currentQuestion.title){
            guessButton.style.background = '#00AA00';
            guessButton.innerHTML = "Correct";
        }else{
            guessButton.style.background = '#AA0000';
            guessButton.innerHTML = "Wrong";
        }
    }

    function sliderInit(){
      $('.movie-roulette').slick({
        centerMode: true,
        arrows: false,
        centerPadding: '60px',
        slidesToShow: 3,
        variableWidth: true,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ],
      });
    }
}
