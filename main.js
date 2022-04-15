
left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;
function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    canvas = createCanvas(600, 460);
    canvas.position(650,105);
    video.size(500, 500);
    poseNet = ml5.poseNet(video, modeloaded);
    poseNet.on("pose",getposses);
}
function draw(){
  background("white");
  document.getElementById("square_side").innerHTML = "Width and Height of Name are = "+difference+"px";
  fill("blue");
  stroke("green");
  text("Sricharan", 50, 400);
  textSize(difference);
}
function modeloaded(){
    console.log("Model is loaded");
}
function getposses(results){
    
    if(results.length > 0){
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        right_wrist_x = results[0].pose.rightWrist.x;
        console.log("Left wrist x =" + left_wrist_x);
        console.log("Right wrist x =" + right_wrist_x);
        difference = floor(left_wrist_x - right_wrist_x);
     }
}
