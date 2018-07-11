function setup()
{
    createCanvas(400, 400);   
    angleMode(DEGREES);
}

function draw()
{
    drawBoat();
}

function drawBoat()
{
    
    push();
    ellipse(210,85,45,45);
    pop();
    
    push();
    strokeWeight(30);
    line(236,125,290,215);
    pop();
    
    push();
    strokeWeight(25);
    line(236,121,140,170);
    line(330,220,60,220);
    line(170,220,210,200);
    line(210,200,230,220);
    pop();
    
    push();
    line(180,220,250,280);
    pop();
    
    push();
    rect(230,262,30,30);
    pop();
}