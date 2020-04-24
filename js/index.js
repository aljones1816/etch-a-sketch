
var pixels;
var allDivs;

function addDivs(numCols = 4) {
    var container = document.getElementById("container");
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

// allows user to set the number of pixels in the draing board
document.getElementById('setPixels').addEventListener('click', (e) => {

    let numPixels = document.getElementById('numPixels').value;
    pixels.forEach(pixel => {
        pixel.remove();
    });
    addDivs(numPixels);


});

// allow user to reset grid by clicking the rest button
function resetGrid() {
    pixels.forEach(pixel => {
        pixel.classList.remove('pixel_colored');
    })
}

document.getElementById('reset').addEventListener('click', (e) => {
    resetGrid();
});

let activePix = pixels.length - 1;
document.getElementById('upDown').addEventListener('click', (e) => {

    console.log("first", activePix);
    pixels[activePix].classList.add('pixel_colored');
    activePix = activePix - 4;
    console.log("second", activePix);
});

document.getElementById('rightLeft').addEventListener('click', (e) => {

    console.log("first", activePix);
    pixels[activePix].classList.add('pixel_colored');
    activePix--;
    console.log("second", activePix);
});