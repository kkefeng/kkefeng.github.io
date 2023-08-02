(function () {
    function ScoreManager(countOfTopScores) {
        var self = this;
        var nameOfScores = "RecyclingGameScores";

        if (!countOfTopScores) {
            countOfTopScores = 5;
        }


        self.displayScoreBoard = function displayScoreBoard() {
            var scores = localStorage.getObject(nameOfScores);
            
            if (!scores || scores.length === 0) {
                
                document.getElementById("scores").innerHTML = "最高记录";
                return;

            }
           
            var resultHTML = "<ul>";
            for (var i = 0; i < scores.length; i += 1) {
                resultHTML +=
                '<li>' +
                '<strong>最高记录排名</strong>: ' + (i + 1) + '<br/>玩家: <strong>' + scores[i].player + "</strong>时间 :<strong> " + scores[i].score + '</strong></li>';
            }
            resultHTML += "</ul>";
            document.getElementById("scores").innerHTML = resultHTML;
        };

        function getPlayerName() {
            var name = prompt("恭喜你完成了垃圾回收。请输入你的名字", "anonymous");
            var sound = document.getElementById("audio");
            sound.pause();  
            sound.currentTime = 0;
            if (name === null) {
                name = 'anonymous';
            }
            return name;
        }

        function orderBy(a, b) {
            return (a.score === b.score) ? 0 : (a.score > b.score) ? 1 : -1;
        }

        self.updateScores = function updateScores(playerScore) {
            var playerName = getPlayerName();
            var scores = localStorage.getObject(nameOfScores);

            if (!scores) {
                scores = [];
            }

            scores.push({ player: playerName, score: playerScore });

            scores.sort(orderBy);

            if (scores.length > countOfTopScores) {

                scores.pop();
            }

            localStorage.setObject(nameOfScores, scores);
        };

        return self;
    }
    scoreManager = new ScoreManager(5);
}).call(this);