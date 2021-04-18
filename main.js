fuction setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=creatCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/model.json',mdelLoaded);
}
function draw() {
    image(video,0,0,300,300);
    classifier.classify(video, gotResult);
}
function modelLoaded(){
    console.log('Model Loaded!');
}
function gotResult(error, results){
    if (error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].lable;
        document.getElementById("result-object-accuracy").innerHTML=results[0].confidence.toFixed(3);    }
}