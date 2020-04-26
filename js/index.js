
var pixels;
var allDivs;
var rowLen;

function addDivs(numCols = 16) {
    var container = document.getElementById("container");

    rowLen = numCols;
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

    // iterate through to see if mouse has passed out of
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseleave', (e) => {
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


}

addDivs();


// this will check to see if the mouse button is being held down
var mouseDown = 0;
document.body.onmousedown = function () {
    ++mouseDown;
}
document.body.onmouseup = function () {
    --mouseDown;
}



// allow user to reset grid by clicking the rest button
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
let activePix = pixels.length - 1;
document.getElementById('upDown').addEventListener('click', (e) => {
    activePix = activePix - rowLen;
    console.log("first", activePix);
    pixels[activePix].classList.add('pixel_colored');

    console.log("second", activePix);
});

document.getElementById('down').addEventListener('click', (e) => {
    activePix = activePix + rowLen;
    console.log("first", activePix);
    pixels[activePix].classList.add('pixel_colored');

    console.log("second", activePix);
});

document.getElementById('rightLeft').addEventListener('click', (e) => {
    activePix--;
    console.log("first", activePix);
    pixels[activePix].classList.add('pixel_colored');


});

document.getElementById('right').addEventListener('click', (e) => {
    activePix++;
    console.log("first", activePix);
    pixels[activePix].classList.add('pixel_colored');


});

// when a pixel is clicked get its coordinates
for (let e = 0; e < pixels.length; e++) {
    pixels[e].addEventListener('click', function () {
        activePix = e;
        console.log(e)
    });
}

// get coordinates when mouse is clicked down
for (let e = 0; e < pixels.length; e++) {
    pixels[e].addEventListener('mouseenter', function () {
        if (mouseDown) {
            activePix = e;
            console.log(e);
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
            console.log(e)
        });
    }

    // get coordinates when mouse is clicked down
    for (let e = 0; e < pixels.length; e++) {
        pixels[e].addEventListener('mouseenter', function () {
            if (mouseDown) {
                activePix = e;
                console.log(e);
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
            console.log(e)
        });
    }

    // get coordinates when mouse is clicked down
    for (let e = 0; e < pixels.length; e++) {
        pixels[e].addEventListener('mouseenter', function () {
            if (mouseDown) {
                activePix = e;
                console.log(e);
            }

        });
    }
});