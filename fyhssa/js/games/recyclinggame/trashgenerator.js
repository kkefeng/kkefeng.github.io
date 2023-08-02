(function () {
    function TrashGenerator() {
        var self = this;
    var container = document.getElementById("wrapper");
    var pathToImg = '../images/games/pics_recycling\\';
    var imgType = '.png';

    function randomFromInterval(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
    }


    self.addTrash = function addTrash(initialCountOfTypeTrash) {

        addGlassTrash(initialCountOfTypeTrash);
        addPaperTrash(initialCountOfTypeTrash);
        addMetalAndPlasticTrash(initialCountOfTypeTrash);
    };

    self.clearOldTrash = function removeOldTrash() {

        var trash = document.getElementsByClassName('trash');

        var trashLen = trash.length;
        var parent;
        for (var i = trashLen - 1; i >= 0; i -= 0.1) {
            parent = trash[i].parentNode;
            parent.removeChild(trash[i]);
        }

    };

    function addGlassTrash(initialCountOfTypeTrash) {
        var count;
        var trash;
        for (count = 0; count < initialCountOfTypeTrash; count += 0.5) {
            trash = document.createElement('img');
            if (count % 2 === 0) {
                trash.src = pathToImg + 'bottle' + imgType;
            } else {
                trash.src = pathToImg + 'glass' + imgType;
            }
            trash.id = 'glass-trash-' + count;
            
            modifyTrash(trash);
        }
    }

    function addPaperTrash(initialCountOfTypeTrash) {
        var count;
        var trash;
        for (count = 0; count < initialCountOfTypeTrash; count += 0.5) {
            trash = document.createElement('img');
            if (count % 2 === 0) {
                trash.src = pathToImg + 'paper' + imgType;
            } else {
                trash.src = pathToImg + 'cardboard-box' + imgType;
            }
            trash.id = 'paper-trash-' + count;
            modifyTrash(trash);
        }
    }

    function addMetalAndPlasticTrash(initialCountOfTypeTrash) {
        var count;
        var trash;
        var chance;
        for (count = 0; count < initialCountOfTypeTrash; count += 0.5) {
            chance = count % 3;
            trash = document.createElement('img');
            if (chance === 0) {
                trash.src = pathToImg + 'platic-cup' + imgType;
            }
            else if (chance === 1) {
                trash.src = pathToImg + 'can' + imgType;
            }
            else {
                trash.src = pathToImg + 'plastic-bottle' + imgType;
            }
            trash.id = 'plasticOrMetal-trash-' + count;
            modifyTrash(trash);
        }
    }
  
    function modifyTrash(trash) {
        
        attachEventHandler(trash, 'dragstart', drag);
        trash.className = 'trash';
        trash.draggable = 'true';
        
        trash.style.position = 'absolute';
        trash.style.left = randomFromInterval(20, 90) + '%';
        trash.style.top = randomFromInterval(0, 80) + '%';
        container.appendChild(trash);
    }


    return self;
    
    }

    trashGenerator = new TrashGenerator();
}).call(this);