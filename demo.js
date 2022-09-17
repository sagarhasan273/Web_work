let i = 0;
function myFunction(){
    if (i == 0){
        document.getElementById('myImage').src='pic_bulbon.gif';
        document.getElementById('myTurn').innerHTML = "Turn off";
        i = 1;
    }else{
        i = 0;
        document.getElementById('myImage').src='pic_bulboff.gif';
        document.getElementById('myTurn').innerHTML = "Turn on";
    }
}