var a = ["skyscraper", "beach", "line", "hurricane"] ;
random_number = Math.floor((Math.random()*a.length)+1) ;
sketch = a[random_number] ;
console.log(sketch) ;
document.getElementById("sktd").innerHTML = "Sketch To Be Drawn : " + sketch ;

timer_counter = 0 ;
timer_check = "" ;
drawn_sketch = "" ;
answer_holder = "" ;
score = 0 ;

function updateCanvas() 
{
    background("white") ;
    var a = ["skyscraper", "beach", "line", "hurricane"] ;
    random_number = Math.floor((Math.random()*a.length)+1) ;
    sketch = a[random_number] ;
    console.log(sketch) ;
    document.getElementById("sktd").innerHTML = "Sketch To Be Drawn : " + sketch ;
}

function setup() 
{
    canvas = createCanvas(280, 280) ;
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas) ;
    synth = window.speechSynthesis ;
}

function preload() 
{
    classifier = ml5.imageClassifier("DoodleNet") ;
}

function draw() 
{
    check_sketch() ;
    if (drawn_sketch == sketch) 
    {
        answer_holder = "set" ;
        score = score + 1 ;
        document.getElementById("score").innerHTML = "Score : " + score ;
    }
    strokeWeight(8) ;
    stroke(0) ;
    if(mouseIsPressed) 
    {
        line(pmouseX, pmouseY, mouseX, mouseY) ;
    }
}

function check_sketch() 
{
    timer_counter = timer_counter + 1 ;
    document.getElementById("timer").innerHTML = "Timer : " + timer_counter ;

    if (timer_counter == 400)
    {
        timer_check = "completed" ;
    }

    if (timer_check == "completed" || answer_holder == "set") 
    {
        timer_check = "" ;
        answer_holder = "" ;
        timer_counter = 0 ;
        updateCanvas() ;
    }
}

function classifyCanvas() 
{
    classifier.classify(canvas, gotResult) ; 
}

function gotResult(error, results) 
{
    if(error) 
    {
        console.error(error);
    }
    console.log(results);

    drawn_sketch = results[0].label ;

    document.getElementById("label").innerHTML = "Drawn Object : " + results[0].label ;

    document.getElementById("confidence").innerHTML = "Confidence : " + Math.round(results[0].confidence * 100) + "%" ;

    utterThis = new SpeechSynthesisUtterance(results[0].label) ;
    synth.speak(utterThis) ;
}