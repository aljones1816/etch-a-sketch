function addDivs(numCols) {
    var container = document.getElementById("container");
    container.style.gridTemplateColumns = "repeat(" + numCols + ",1fr)";
    for (let i=0;i<numCols * numCols;i++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("pixel");
        container.appendChild(newDiv);
    }

}

addDivs(16);