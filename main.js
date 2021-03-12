
function preload()
{}

function setup()
{
    canvas = createCanvas(640,480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    var Rect;
    image(video,230,150,220,200);
    fill(255,0,0);
    stroke(255,0,0);
    circle(50,50,80);

    fill(0,128,0);
    stroke(0,128,0);
    Rect(90,40,460,20);
    Rect(90,420,460,20);
}

function take_pic()
{
    save("framepic.png");
}