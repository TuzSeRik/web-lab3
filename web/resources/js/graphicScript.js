function drawQuadrant(quadrant, shape) {
    const canvas = document.getElementById(quadrant);
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.translate(200, 200);
    context.beginPath();

    switch (shape) {
        case "1":
            drawTriangleSmall(context);
            break;
        case "2":
            drawTriangleBig(context);
            break;
        case "3":
            drawTriangleY(context);
            break;
        case "4":
            drawTriangleX(context);
            break;
        case "5":
            drawRectangleY(context);
            break;
        case "6":
            drawRectangleX(context);
            break;
        case "7":
            drawSquareSmall(context);
            break;
        case "8":
            drawSquareBig(context);
            break;
        case "9":
            drawCircleSmall(context);
            break;
        case "a":
            drawCircleBig(context);
            break;
        case "b":
            drawNothing(context);
    }

    context.closePath();
    context.strokeStyle = "#2f9aff";
    context.fillStyle = "#2f9aff";
    context.fill();
    context.stroke();

    switch (quadrant) {
        case "alpha":
            break;
        case "beta":
            canvas.style.transform = "rotate(90deg)";
            break;
        case "gamma":
            canvas.style.transform = "rotate(270deg)";
            break;
        case "delta":
            canvas.style.transform = "rotate(180deg)";
            break;
    }
    context.translate(-200, -200);
}


const c = 2 / 3;

function drawTriangleSmall(context) {
    context.moveTo(0, 0);
    context.lineTo(-130*c, 0);
    context.lineTo(0, -130*c);
    context.lineTo(0, 0);
}

function drawTriangleBig(context) {
    context.moveTo(0, 0);
    context.lineTo(-260*c, 0);
    context.lineTo(0, -260*c);
    context.lineTo(0, 0);
}

function drawTriangleY(context) {
    context.moveTo(0, 0);
    context.lineTo(-130*c, 0);
    context.lineTo(0, -260*c);
    context.lineTo(0, 0);
}

function drawTriangleX(context) {
    context.moveTo(0, 0);
    context.lineTo(-260*c, 0);
    context.lineTo(0, -130*c);
    context.lineTo(0, 0);
}

function drawRectangleY(context) {
    context.rect(-130*c, -260*c, 130*c, 260*c);
}

function drawRectangleX(context) {
    context.rect(-260*c, -130*c, 260*c, 130*c);
}

function drawSquareSmall(context) {
    context.rect(-130*c, -130*c, 130*c, 130*c);
}

function drawSquareBig(context) {
    context.rect(-260*c, -260*c, 260*c, 260*c);
}

function drawCircleSmall(context) {
    context.arc(0, 0, 130*c, -Math.PI, -3*Math.PI/2, false);
}

function drawCircleBig(context) {
    context.arc(0, 0, 260*c, -Math.PI, -3*Math.PI/2, false);
}

function drawNothing(context) {}