function preload()
{
   
}

function setup()
{
   canvas = createCanvas(640,480)
   canvas.position(224,224);

   video = createCapture(VIDEO);
   video.hide();
}

function draw()
{
   image(video,150,115,300,250);

   fill(0,110,0);
   stroke(0,0,0);
   rect(50,420,550,20);

   fill(0,110,0);
   stroke(0,0,0);
   rect(40,50,20,390);

   fill(0,110,0);
   stroke(0,0,0);
   rect(50,40,550,20);

   fill(0,110,0);
   stroke(0,0,0);
   rect(580,45,20,390);

   fill(255,0,0);
   stroke(0,0,0);
   circle(50,50,80);

   fill(255,0,0);
   stroke(0,0,0);
   circle(590,50,80);


   fill(255,0,0);
   stroke(0,0,0);
   circle(50,430,80);


   fill(255,0,0);
   stroke(0,0,0);
   circle(590,430,80);



}

function take_snapshot()
{
    save('myeditedface.png');

}