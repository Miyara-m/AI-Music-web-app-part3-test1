var song1 = "";
var song2 = "";
var right_wristX = "";
var right_wristY = "";
var left_wristX = "";
var left_wristY = "";
function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(280, 280);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();
    posenet = ml5.poseNet(camera, modelLoaded);
    posenet.on("pose", gotPoses);
}
function draw() {
    image(camera, 0, 0, 280, 280);
}
function modelLoaded() {
    console.log("poseNet is initialized!");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        right_wristX = results[0].pose.rightWrist.x;
        console.log("right_wristX = " + right_wristX);
        right_wristY = results[0].pose.rightWrist.y;
        console.log("right_wristY = " + right_wristY);
        left_wristX = results[0].pose.leftWrist.x;
        console.log("left_wristX = " + left_wristX);
        left_wristY = results[0].pose.leftWrist.y;
        console.log("left_wristY = " + left_wristY);
    }
}