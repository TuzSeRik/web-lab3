window.onload = start;
window.xInput = document.getElementById("x-visible");
window.yInput = document.getElementById("y-visible");
window.rInput = document.getElementById("r-visible");
window.axes = document.getElementById("axes");

function start() {
    draw();
    axes.addEventListener("click", submitClickCanvas);
}

function draw() {
    const context = axes.getContext("2d");
    const r = document.getElementById("r-visible").value;

    // axes
    context.beginPath();
    context.font = "20px Verdana";
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.moveTo(300*c, 0);
    context.lineTo(300*c, 600*c);
    context.moveTo(300*c, 0);
    context.lineTo(290*c, 30*c);
    context.moveTo(300*c, 0);
    context.lineTo(310*c, 30*c);
    context.fillText("Y", 320*c, 20*c);
    context.moveTo(0, 300*c);
    context.lineTo(600*c, 300*c);
    context.moveTo(600*c, 300*c);
    context.lineTo(570*c, 290*c);
    context.moveTo(600*c, 300*c);
    context.lineTo(570*c, 310*c);
    context.fillText("X", 580*c, 260*c);

    // Y parts
    context.moveTo(290*c, 40*c);
    context.lineTo(310*c, 40*c);
    context.moveTo(290*c, 170*c);
    context.lineTo(310*c, 170*c);
    context.moveTo(290*c, 430*c);
    context.lineTo(310*c, 430*c);
    context.moveTo(290*c, 560*c);
    context.lineTo(310*c, 560*c);

    // X parts
    context.moveTo(40*c, 290*c);
    context.lineTo(40*c, 310*c);
    context.moveTo(170*c, 290*c);
    context.lineTo(170*c, 310*c);
    context.moveTo(430*c, 290*c);
    context.lineTo(430*c, 310*c);
    context.moveTo(560*c, 290*c);
    context.lineTo(560*c, 310*c);

    context.closePath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.stroke();


    context.beginPath();
    context.font = "20px Verdana";
    context.strokeStyle = "black";
    context.fillStyle = "black";

    //Y
    context.fillText(String(r), 320*c, 40*c);
    context.fillText(String(r / 2), 320*c, 156*c);
    context.fillText(String(-(r / 2)), 320*c, 430*c);
    context.fillText(String(-r), 320*c, 560*c);

    //X
    context.fillText(String(-r), 30*c, 280*c);
    context.fillText(String(-(r / 2)), 140*c, 280*c);
    context.fillText(String(r / 2), 430*c, 280*c);
    context.fillText(String(r), 560*c, 280*c);

    context.closePath();
    context.strokeStyle = "black";
    context.fillStyle = "black";
    context.stroke();


    drawQuadrant("alpha", "b");
    drawQuadrant("beta", "9");
    drawQuadrant("gamma", "2");
    drawQuadrant("delta", "6");
}

