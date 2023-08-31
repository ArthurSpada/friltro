olhoesquerdox=0;
olhoesquerdoy=0;
olhodireitox=0;
olhodireitoy=0;

function preload(){
    starent= loadImage('starent.png');
}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('poseNet foi inicializado');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        olhoesquerdox=results[0].pose.leftEye.x;
        olhoesquerdoy=results[0].pose.leftEye.y;
        olhodireitox=results[0].pose.rightEye.x;
        olhodireitoy=results[0].pose.rightEye.y;
        console.log("olhoesquerdox = " + results[0].pose.leftEye.x);
        console.log("olhoesquerdoy = " + results[0].pose.leftEye.y);
        console.log("olhodireitox = " + results[0].pose.rightEye.x);
        console.log("olhodireitoy = " + results[0].pose.rightEye.y);
    }
}
function draw(){
image(video,0,0,300,300);
image(starent,olhoesquerdox-20,olhoesquerdoy-20,40,40);
image(starent,olhodireitox-20,olhodireitoy-20,40,40);
}
function takeSnapshot(){
    save('myFilterImage.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

