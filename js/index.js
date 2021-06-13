
var pixels;
var allDivs;
var rowLen;
var rightEdge = [];
var leftEdge = [];
var topEdge = [];
var bottomEdge = [];


function addDivs(numCols = 16) {
    var container = document.getElementById("container");

    rowLen = numCols;
    rightEdge = [];
    leftEdge = [];
    topEdge = [];
    bottomEdge = [];

    container.style.gridTemplateColumns = "repeat(" + numCols + ",1fr)";
    for (let i = 0; i < numCols * numCols; i++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("pixel");
        newDiv.setAttribute("id", "p" + i);
        container.appendChild(newDiv);
    }

    // create node list for all the pixels 
    pixels = document.querySelectorAll('.pixel');

    // create nod list for all divs 
    allDivs = document.querySelectorAll('div');

    // iterate through to see if mouse has passed into 
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', (e) => {
            if (mouseDown) {
                pixel.classList.add('pixel_colored');
            } 
        });

    });

    

    // Iterate through to see if user has clicked, color pixel if yes
    pixels.forEach(pixel => {
        pixel.addEventListener('mousedown', (e) => {
            e.preventDefault();
            pixel.classList.toggle('pixel_colored');
        });

    });

    // make sure the user can't click and drag page elements
    allDivs.forEach(div => {
        div.addEventListener('mousedown', (e) => {
            e.preventDefault();
        })
    })

    // create lists of the right, left, top, and bottom pixels
    for (let i = 0; i < rowLen; i++) {
        rightEdge.push(i * (rowLen) + rowLen - 1);
        topEdge.push(i);
        leftEdge.push(i * rowLen);
        bottomEdge.push(rowLen * (rowLen - 1) + i);
    }
}

addDivs();


// this will check to see if the mouse button is being held down
var mouseDown = 0;
onmousedown = function () {
    mouseDown=1;
    
}
onmouseup = function () {
    mouseDown = 0;
}



// allow user to reset grid by clicking the reset button
function resetGrid() {
    pixels.forEach(pixel => {
        pixel.classList.remove('pixel_colored');
    })
    activePix = pixels.length - 1;
}

document.getElementById('reset').addEventListener('click', (e) => {
    resetGrid();
});


// use the wheels like a real etch a sketch

// functions to move and color a pixel when the wheel is clicked

function pixelUp() {
    if (topEdge.includes(activePix)) {
        return;
    } else {
        activePix = activePix - rowLen;
        pixels[activePix].classList.add('pixel_colored');
    }
}

function pixelDown() {
    if (bottomEdge.includes(activePix)) {
        return;
    } else {
        activePix = activePix + rowLen;
        pixels[activePix].classList.add('pixel_colored');
    }
}

function pixelLeft() {
    if (leftEdge.includes(activePix)) {
        return;
    } else {
        activePix--;
        pixels[activePix].classList.add('pixel_colored');
    }
}

function pixelRight() {
    if (rightEdge.includes(activePix)) {
        return;
    } else {
        activePix++;
        pixels[activePix].classList.add('pixel_colored');
    }
}

let activePix = pixels.length - 1;


var timer;
document.getElementById('up').addEventListener("mousedown", function(){
     timer=setInterval(function(){
          pixelUp();
     }, 75); // the above code is executed every 100 ms
});
document.getElementById('down').addEventListener("mousedown", function(){
    timer=setInterval(function(){
         pixelDown();
    }, 75); // the above code is executed every 100 ms
});
document.getElementById('left').addEventListener("mousedown", function(){
    timer=setInterval(function(){
         pixelLeft();
    }, 75); // the above code is executed every 100 ms
});
document.getElementById('right').addEventListener("mousedown", function(){
    timer=setInterval(function(){
         pixelRight();
    }, 75); // the above code is executed every 100 ms
});
document.addEventListener("mouseup", function(){
    if (timer) clearInterval(timer)
});

document.addEventListener('keydown', function (pressed) {
    if (pressed.key == 'ArrowUp') {
        pixelUp();
    } else if (pressed.key == 'ArrowDown') {
        pixelDown();
    } else if (pressed.key == 'ArrowRight') {
        pixelRight();
    } else if (pressed.key == 'ArrowLeft') {
        pixelLeft();
    } else if (pressed.key == 'c') {
        resetGrid();
    }

})

// when a pixel is clicked get its coordinates
for (let e = 0; e < pixels.length; e++) {
    pixels[e].addEventListener('click', function () {
        activePix = e;
        
    });
}

// get coordinates when mouse is clicked down
for (let e = 0; e < pixels.length; e++) {
    pixels[e].addEventListener('mouseenter', function () {
        if (mouseDown) {
            activePix = e;
            
        }

    });
}

// allows user to set the number of pixels in the drawing board
document.getElementById('largePixels').addEventListener('click', (e) => {
    pixels.forEach(pixel => {
        pixel.remove();
    });

    addDivs(16);
    pixels = document.querySelectorAll('.pixel');
    activePix = pixels.length - 1;
    // when a pixel is clicked get its coordinates
    for (let e = 0; e < pixels.length; e++) {
        pixels[e].addEventListener('click', function () {
            activePix = e;
        });
    }

    // get coordinates when mouse is clicked down
    for (let e = 0; e < pixels.length; e++) {
        pixels[e].addEventListener('mouseenter', function () {
            if (mouseDown) {
                activePix = e;
            }

        });
    }
});

document.getElementById('smallPixels').addEventListener('click', (e) => {
    pixels.forEach(pixel => {
        pixel.remove();
    });

    addDivs(50);
    pixels = document.querySelectorAll('.pixel');
    activePix = pixels.length - 1;
    // when a pixel is clicked get its coordinates
    for (let e = 0; e < pixels.length; e++) {
        pixels[e].addEventListener('click', function () {
            activePix = e;
        });
    }

    // get coordinates when mouse is clicked down
    for (let e = 0; e < pixels.length; e++) {
        pixels[e].addEventListener('mouseenter', function () {
            if (mouseDown) {
                activePix = e;
            }

        });
    }
});



// This distaster adds highlighting to button when hovered over - need to clean up later... Challenge is 
// that the arrows are styled by adding a border depending on the direction, hard to see how to combine into simple function

document.getElementById("right").addEventListener("mouseover", function() {
    document.getElementById("right").style.borderLeft = "70px solid rgb(211, 211, 211)";
});
    

document.getElementById("right").addEventListener("mouseout", function() {
    document.getElementById("right").style.borderLeft = "70px solid rgb(243, 242, 250)";
});

document.getElementById("left").addEventListener("mouseover", function() {
    document.getElementById("left").style.borderRight = "70px solid rgb(211, 211, 211)";
});
    

document.getElementById("left").addEventListener("mouseout", function() {
    document.getElementById("left").style.borderRight = "70px solid rgb(243, 242, 250)";
});

document.getElementById("up").addEventListener("mouseover", function() {
    document.getElementById("up").style.borderBottom = "70px solid rgb(211, 211, 211)";
});
    

document.getElementById("up").addEventListener("mouseout", function() {
    document.getElementById("up").style.borderBottom = "70px solid rgb(243, 242, 250)";
});

document.getElementById("down").addEventListener("mouseover", function() {
    document.getElementById("down").style.borderTop = "70px solid rgb(211, 211, 211)";
});
    

document.getElementById("down").addEventListener("mouseout", function() {
    document.getElementById("down").style.borderTop = "70px solid rgb(243, 242, 250)";
});

document.getElementById("largePixels").addEventListener("mouseover", function() {
    document.getElementById("largePixels").style.backgroundColor = "rgb(211, 211, 211)";
});

document.getElementById("largePixels").addEventListener("mouseout", function() {
    document.getElementById("largePixels").style.backgroundColor = "rgb(243, 242, 250)";
});

document.getElementById("smallPixels").addEventListener("mouseover", function() {
    document.getElementById("smallPixels").style.backgroundColor = "rgb(211, 211, 211)";
});

document.getElementById("smallPixels").addEventListener("mouseout", function() {
    document.getElementById("smallPixels").style.backgroundColor = "rgb(243, 242, 250)";
});
    
document.getElementById("reset").addEventListener("mouseover", function() {
    document.getElementById("reset").style.backgroundColor = "rgb(220, 175, 169)";
});

document.getElementById("reset").addEventListener("mouseout", function() {
    document.getElementById("reset").style.backgroundColor = "rgb(233, 188, 181)";
});
