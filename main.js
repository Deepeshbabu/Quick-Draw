var a = ["car", "butterfly", "bird", "bat"] ;
rn = Math.floor((Math.random()*a.length)+1) ;
object = a[rn] ;
console.log(object) ;
document.getElementById("sktd").innerHTML = "Sketch To Be Drawn : " + object ;

timer_counter = 0 ;
timer_check = "" ;
drawn_sketch = "" ;
answer_holder = "" ;
score = 0 ;
