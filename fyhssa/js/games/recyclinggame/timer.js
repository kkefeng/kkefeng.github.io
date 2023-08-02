(function () {

    function Timer() {

        var self = this;
        var pastTime;

        var int;

        function timerRun() {
            pastTime += 1;
            document.getElementById("timer").value = pastTime;
            if (gameManager.isGameOver()) {
                int = clearInterval(int);
                gameManager.endGame(pastTime);
            }
            

        }

        self.setTimer = function setTimer() {
            int = clearInterval(int);
            pastTime = 0;
            int = setInterval(function () { timerRun(); }, 1000);
        };

        self.pause = function pause() {
            int = clearInterval(int);
        };

        self.resume = function resume() {
            int = setInterval(function () { timerRun(); }, 1000);
        };

        return self;
    }
    timer = new Timer();
}).call(this);