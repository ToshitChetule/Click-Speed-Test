let count = 0;
let increment = document.getElementById("counter")

document.getElementById('touch').style.pointerEvents = 'none';

function update(){
    var select = document.getElementById("mySelect");
    var option = select.options[select.selectedIndex];

    document.getElementById("time").innerText = option.value;
}
update();



function start(){
  
    var timeleft = document.getElementById("time").innerText;
    var downloadTimer = setInterval(function(){
      if(timeleft == 0){
        clearInterval(downloadTimer);
        document.getElementById("time").innerHTML = "Time up!!";
        document.getElementById('touch').style.pointerEvents = 'none';
        document.getElementById("clickoutput").innerHTML = count;

      } else {
        document.getElementById("time").innerHTML = timeleft;
        document.getElementById('touch').style.pointerEvents = 'auto'; 
      }
      
      timeleft -= 1;
    }, 1000);
}

function myFunction(){
    increment.innerHTML= ++count;   
}

