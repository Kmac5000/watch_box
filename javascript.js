//button1 Grow
document.getElementById("button1").addEventListener("click", function changeSize(){
    var buttonGrow = document.getElementById("box")
        buttonGrow.style.height = "250px";
        buttonGrow.style.width = "250px";
    var circleGrow = document.getElementById("circle")
        circleGrow.style.height = "250px";
        circleGrow.style.width = "250px";
});

//button2 Blue
document.getElementById("button2").addEventListener("click" , function(){
    document.getElementById("box").style.backgroundColor = "Blue";

});
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("circle").style.backgroundColor = "Blue";
});


//button3 Fade
document.getElementById("button3").addEventListener("click" , function(){
   var currentopacity = parseFloat(document.getElementById("box").style.opacity); 
   var futureopacity = 0.5; 
   
   if (currentopacity < 1) {futureopacity = 1};
        document.getElementById("box").style.opacity = futureopacity;

    var circleOpac = parseFloat(document.getElementById("circle").style.opacity)
    var circleFuture =  0.5;

        if (circleOpac < 1) {circleFuture = 1};
            document.getElementById("circle").style.opacity = circleFuture;

});



//button4 Shadow box
document.getElementById("button4").addEventListener("click" ,  function(){
    var buttonFour = document.getElementById("box") 
        buttonFour.style.boxShadow = "20px 20px Black";

    var shadowButton = document.getElementById("circle")
        shadowButton.style.boxShadow = "20px 20px Black";

});


//button6 outline
document.getElementById("button6").addEventListener("click" , function(){
    document.getElementById("box").style.outline = "10px solid black";
    document.getElementById("circle").style.outline = "10px solid black";
});


//button 5 Reset
document.getElementById("button5").addEventListener("click" , function(){
    var resetButton = document.getElementById("box")
        resetButton.style.height = "150px";
        resetButton.style.width = "150px";
        resetButton.style.backgroundColor = "Orange";
        resetButton.style.opacity = "";
        resetButton.style.boxShadow = "";
        resetButton.style.outline = "";
    var buttonFive = document.getElementById("circle")
        buttonFive.style.height = "150px";
        buttonFive.style.width = "150px";
        buttonFive.style.backgroundColor = "Orange";
        buttonFive.style.opacity = "";
        buttonFive.style.boxShadow = "";
        buttonFive.style.outline = "";
    
});









