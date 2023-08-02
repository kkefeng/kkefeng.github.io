(function () {
    function GameManager() {
        var self = this;
       
        function Initialize() {

            binManager.modifyBins();
            scoreManager.displayScoreBoard();
        }

        Initialize();

        self.isGameOver = function isGameOver() {
            var trash = document.getElementsByClassName('trash');
            if (!trash || trash.length === 0) {
                return true;
            }

            return false;
        };

        self.endGame = function endGame(score) {
            scoreManager.updateScores(score);
            scoreManager.displayScoreBoard();
            
            document.getElementById('pause').style.display = 'none';
        };

        self.play = function play() {
            
            trashGenerator.clearOldTrash();
            trashGenerator.addTrash(5);
            
            timer.setTimer();
        };

        return self;
    }
   gameManager = new GameManager();
}).call(this);