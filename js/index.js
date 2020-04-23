function addDivs(numCols) {
    var container = document.getElementById("container");
    container.style.gridTemplateColumns = "repeat(" + numCols + ",1fr)";
    for (let i = 0; i < numCols * numCols; i++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("pixel");
        container.appendChild(newDiv);
    }

}

addDivs(5);



// create node list for all the pixels 
var pixels = document.querySelectorAll('.pixel');

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

// this will check to see if the mouse button is being held down
var mouseDown = 0;
document.body.onmousedown = function () {
    ++mouseDown;
}
document.body.onmouseup = function () {
    --mouseDown;
}