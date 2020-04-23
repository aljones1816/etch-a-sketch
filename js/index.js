function addDivs(numCols) {
    var container = document.getElementById("container");
    container.style.gridTemplateColumns = "repeat(" + numCols + ",1fr)";
    for (let i=0;i<numCols * numCols;i++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("pixel");
        container.appendChild(newDiv);
    }

}

addDivs(25);



// create node list for all the pixels 
var pixels = document.querySelectorAll('.pixel');

// iterate through to see if mouse has passed over 
pixels.forEach(pixel => {
    pixel.addEventListener('mouseenter', (e) => {
        pixel.classList.add('pixel_colored');
    });
});

