
function onDropThrowGlassTrash(ev) {
    if (!ev) {

        ev = window.event;
    }
    ev.preventDefault();
    var dragedTrashId = ev.dataTransfer.getData("dragged-trash");
    if (dragedTrashId.substring(0, dragedTrashId.indexOf('-')) === 'glass') {
        var dragedTrash = document.getElementById(dragedTrashId);
        var parentTrash = dragedTrash.parentNode;
        parentTrash.removeChild(dragedTrash); 
    }

    var bin = ev.target;
    binId = bin.id.toString();
    binType = binId.substring(0, binId.indexOf('-'));
    binIdWidthoutState = binId.substring(0, binId.lastIndexOf('-'));

    var closedBin = document.getElementById(binIdWidthoutState + '-closed');

    bin.style.display = 'none';
    closedBin.style.display = '';
}

function onDropThrowPaperTrash(ev) {
    if (!ev) {

        ev = window.event;
    }
    ev.preventDefault();
    var dragedTrashId = ev.dataTransfer.getData("dragged-trash");
    if (dragedTrashId.substring(0, dragedTrashId.indexOf('-')) === 'paper') {
        var dragedTrash = document.getElementById(dragedTrashId);
        var parentTrash = dragedTrash.parentNode;
        parentTrash.removeChild(dragedTrash);

        
    }

    var bin = ev.target;
    binId = bin.id.toString();
    binType = binId.substring(0, binId.indexOf('-'));
    binIdWidthoutState = binId.substring(0, binId.lastIndexOf('-'));

    var closedBin = document.getElementById(binIdWidthoutState + '-closed');

    bin.style.display = 'none';
    closedBin.style.display = '';

}

function onDropThrowMetalOrPlasticTrash(ev) {
    if (!ev) {

        ev = window.event;
    }
    ev.preventDefault();
    var dragedTrashId = ev.dataTransfer.getData("dragged-trash");
    if (dragedTrashId.substring(0, dragedTrashId.indexOf('-')) === 'plasticOrMetal') {
        var dragedTrash = document.getElementById(dragedTrashId);
        var parentTrash = dragedTrash.parentNode;
        parentTrash.removeChild(dragedTrash);
    }

    var bin = ev.target;
    binId = bin.id.toString();
    binType = binId.substring(0, binId.indexOf('-'));
    binIdWidthoutState = binId.substring(0, binId.lastIndexOf('-'));

    var closedBin = document.getElementById(binIdWidthoutState + '-closed');

    bin.style.display = 'none';
    closedBin.style.display = '';
  
}

function drag(ev) {
    if (!ev) {

        ev = window.event;
    }
    ev.dataTransfer.setData("dragged-trash", ev.target.id);
}

function closeBin(ev) {
    if (!ev) {

        ev = window.event;
    }
    ev.preventDefault();
    var bin = ev.target;
    binId = bin.id.toString();
    binType = binId.substring(0, binId.indexOf('-'));
    binIdWidthoutState = binId.substring(0, binId.lastIndexOf('-'));
   
    var closedBin = document.getElementById(binIdWidthoutState + '-closed');
   
    bin.style.display = 'none';
    closedBin.style.display = '';
}

function openBin(ev) {
    if (!ev) {

        ev = window.event;

    }
    ev.preventDefault();
    var bin = ev.target;
    binId = bin.id.toString();
    binType = binId.substring(0, binId.indexOf('-'));
    binIdWidthoutState = binId.substring(0, binId.lastIndexOf('-'));

    var binOpen = document.getElementById(binIdWidthoutState + '-open');

    bin.style.display = 'none';
    binOpen.style.display = '';
}

function allowDrop(ev) {
    if (!ev) {
        
        ev = window.event;
    }
    ev.preventDefault();
}
        function playSound() {
        var sound = document.getElementById("audio");
        sound.play();
        }
        
        function playPause() {
        var sound = document.getElementById("audio");
        sound.pause();
        }
        
        function playStop(){
          var sound = document.getElementById("audio");
        sound.pause();  
        sound.currentTime = 0;
        }
        
function onClickNewGame(ev) {
    if (!ev) {
        ev = window.event;
    }

    document.getElementById('resume').style.display = 'none';
    document.getElementById('pause').style.display = 'inline-block';
    gameManager.play();
    
    return false;
}

function onClickPause(ev) {
    if (!ev) {

        ev = window.event;
    }
    document.getElementById('pause').style.display = 'none';
    document.getElementById('resume').style.display = 'inline-block';
    var trash = document.getElementsByClassName('trash');
    var trashLen = trash.length;
    for (var i = 0; i < trashLen; i += 1) {
        trash[i].style.display = 'none';
    }

    timer.pause();

    return false;
}


function onClickResume(ev) {
    document.getElementById('resume').style.display = 'none';
    document.getElementById('pause').style.display = 'inline-block';
    var trash = document.getElementsByClassName('trash');
    var trashLen = trash.length;
    for (var i = 0; i < trashLen; i += 1) {
        trash[i].style.display = '';
    }
    timer.resume();

    return false;
}

/* Creates an array of draggable items */
let draggableItems = document.querySelectorAll('');
let dropAreas = document.querySelectorAll('BinManager');

let initialX;
let initialY;
let offsetX = 0;
let offsetY = 0;
let startingX;
let startingY;
let targetElement;
let lastActiveDropArea = null;

/* Creates and appends an element to keep the space of the moving item */
let createKeeper = function(draggableItem) {
  /* Define variables */
  let draggableItemRect = draggableItem.getBoundingClientRect();
  let keeper = document.createElement('div');

  /* Sets element properties */
  keeper.classList.add('keeper');
  keeper.style.width = draggableItemRect.width + 'px';
  keeper.style.height = draggableItemRect.height + 'px';
  
  /* Appends the elment before the active draggable item */
  draggableItem.parentElement.insertBefore(keeper, draggableItem);
};

let isNewActiveArea = function(currentActiveArea, newActiveArea) {
  if(newActiveArea && !currentActiveArea || newActiveArea && currentActiveArea !== newActiveArea) {
    return true;
  }
};

let setLastActiveDropArea = function(targetDropArea) {
  unsetLastActiveDropArea();
  if(targetDropArea && !targetDropArea.classList.contains('active')) {
    targetDropArea.classList.add('active');
    lastActiveDropArea = targetDropArea;
  }
};

let unsetLastActiveDropArea = function() {
  if(lastActiveDropArea && lastActiveDropArea.classList.contains('active')) {
    lastActiveDropArea.classList.remove('active');
    lastActiveDropArea = null;
  }
};

let resetTransitionEndHandler = function() {
  // Removes the animatable class
  if(this.classList.contains('animatable')) {
    this.classList.remove('animatable');
  }
  
  // Removes the style
  this.removeAttribute('style');
  
  // Removes the keeper
  if(this && this.parentElement && this.parentElement.querySelector('.keeper')) {
    this.parentElement.removeChild(this.parentElement.querySelector('.keeper'));
  }
  
  // Removes active class
  if(this.classList.contains('active')) {
    this.classList.remove('active');
  }
  
  // Moves the element if it was dropped inside a drop area
  if(targetElement && targetElement.classList.contains('drop-area') && this.parentElement) {
    lastActiveDropArea.appendChild(this);
  }
  
  // Removes the transition end event listener
  this.removeEventListener('transitionend', resetTransitionEndHandler);
};

/* Creates a handler for each event listener */
let touchStartHandler = function(event) {
  interactionStart(event.target, event.touches[0].pageX, event.touches[0].pageY);
};

let touchMovetHandler = function(event) {
  interactionMove(event.target, event.touches[0].pageX, event.touches[0].pageY);
};

let touchEndtHandler = function(event) {
  interactionEnd(event.target, event.changedTouches[0].pageX, event.changedTouches[0].pageY);
};

/* Create handlers to each interaction */
let interactionStart = function(element, coordX, coordY) {
  
  // Adds affordance in Drop Areas
  dropAreas.forEach(function(dropArea) {
    if(!dropArea.classList.contains('affordance')) {
      dropArea.classList.add('affordance');
    }
  });
  
  // Defines variables
  let draggableItemRect = element.getBoundingClientRect();
  
  /* Sets initial values */
  initialX = coordX;
  initialY = coordY;
  startingX = draggableItemRect.left;
  startingY = draggableItemRect.top;
  
  /* Configures the size and position of the draggable-item */
  element.style.width = draggableItemRect.width + 'px';
  element.style.height = draggableItemRect.height + 'px';
  element.style.transform = "translateX(" + draggableItemRect.left + "px) translateY( " + draggableItemRect.top + "px) translateZ(0)";
  
  /* Creates the keeper */
  createKeeper(element);
  
  /* Adds active class */
  if(!element.classList.contains('active')) {
    element.classList.add('active');
  }
};

let interactionMove = function(element, coordX, coordY) {
  /* Sets offset values */
  offsetX = coordX - initialX;
  offsetY = coordY - initialY;
  
  /* Transforms the UI to move the element */
  element.style.transform = "translateX(" + (startingX + offsetX) + "px) translateY(" + (startingY + offsetY) + "px) translateZ(0) scale(1)";
  
  // Gets target active drop area
  targetElement = document.elementFromPoint(coordX, coordY);
  
  if(targetElement && targetElement.closest('.drop-area')) {
    targetElement = targetElement.closest('.drop-area');
    setLastActiveDropArea(targetElement);
  } else {
    unsetLastActiveDropArea();
  }
};

let interactionEnd = function(element, coordX, coordY) {
  // Removes affordances
  dropAreas.forEach(function(dropArea) {
    // Removes active class
    if(dropArea.classList.contains('active')) {
      dropArea.classList.remove('active');
    }
    
    // Removes the affordance class
    if(dropArea.classList.contains('affordance')) {
      dropArea.classList.remove('affordance');
    }
  });
  
  // Adds animatable class
  if(!element.classList.contains('animatable')) {
    element.classList.add('animatable');
  }
  
  // Checks if the drop was done inside or outside a drop area
  if(targetElement && targetElement.classList.contains('drop-area')) {
    element.style.transform = "translateX(" + (startingX + offsetX) + "px) translateY(" + (startingY + offsetY) + "px) translateZ(0) scale(0)";
  } else {
    element.style.transform = "translateX(" + startingX + "px) translateY(" + startingY + "px) translateZ(0)";
  }
  
  element.addEventListener('transitionend', resetTransitionEndHandler);
  
};

/* Creates the necessary functions */
let addEventListeners = function(element) {
  /* Touch related events */
  element.addEventListener('touchstart', touchStartHandler);
  element.addEventListener('touchmove', touchMovetHandler);
  element.addEventListener('touchend', touchEndtHandler);
};

/* Executes a function to create all event listeners */
draggableItems.forEach(function(draggableItem) {
  addEventListeners(draggableItem);
});