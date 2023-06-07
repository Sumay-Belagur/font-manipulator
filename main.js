difference="";

function setup() {
    video = createCapture(VIDEO);
    canvas= createCanvas(500, 500);
    canvas.position(600, 100);
    
    
    video.size(500, 500);
    
       
    
        poseNet = ml5.poseNet( video, modelLoaded);
        poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("poseNet is initialized");
}

function gotPoses(results) {
    if(results.length > 0) {
       
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    
    rightWristX= results[0].pose.rightWrist.x;
    leftWristX= results[0].pose.leftWrist.x;
    
    difference= floor(leftWristX - rightWristX);
    console.log(difference);
    }
    }

    function draw() {
        background("white");
        textSize(difference);
        text("Font manipulator text\nfor changing size", 50, 50);
        fill("black");

        
    }