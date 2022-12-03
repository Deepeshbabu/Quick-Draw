var a = ["car", "butterfly", "bird", "bat"] ;
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
    var a = ["car", "butterfly", "bird", "bat"] ;
    random_number = Math.floor((Math.random()*a.length)+1) ;
    sketch = a[random_number] ;
    console.log(sketch) ;
    document.getElementById("sktd").innerHTML = "Sketch To Be Drawn : " + sketch ;
}

function setup() 
{
    canvas = createCanvas(280,280) ;
    canvas.center() ;
    background("white") ;
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
        updateCanvas() ;
    }
}