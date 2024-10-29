// document.querySelector(".w").addEventListener("click",handClick1);
// document.querySelector(".a").addEventListener("click",handClick2);
// document.querySelector(".s").addEventListener("click",handClick3);
// document.querySelector(".d").addEventListener("click",handClick4);
// document.querySelector(".j").addEventListener("click",handClick5);
// document.querySelector(".k").addEventListener("click",handClick6);
// document.querySelector(".l").addEventListener("click",handClick7);


// function handClick1(){
// var audio = new Audio('sounds/crash.mp3');
// audio.play();
// }

// function handClick2(){
//     var audio = new Audio('sounds/kick-bass.mp3');
//     audio.play();
//  }

// function handClick3(){
//     var audio = new Audio('sounds/snare.mp3');
//     audio.play();
//     }

// function handClick4(){
//     var audio = new Audio('sounds/tom-1.mp3');
//     audio.play();
//  }

// function handClick5(){
//     var audio = new Audio('sounds/tom-2.mp3');
//     audio.play();
//  }

//  function handClick6(){
//     var audio = new Audio('sounds/tom-3.mp3');
//     audio.play();
//     }
//     function handClick7(){
//         var audio = new Audio('sounds/tom-4.mp3');
//         audio.play();
//         }

var numberOfButtons = document.querySelectorAll(".drum").length;
for(i=0;i<numberOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
         var buttonInnerHTML = this.innerHTML;
         switch(buttonInnerHTML){
            case"w" : var audio = new Audio("sounds/crash.mp3");
                      audio.play();
            break;
            case"a" : var audio = new Audio("sounds/kick-bass.mp3");
                      audio.play();
            break;
            case"s" : var audio = new Audio("sounds/snare.mp3");
                      audio.play();
            break;
            case"d" : var audio = new Audio("sounds/tom-1.mp3");
                      audio.play();
            break;
            case"j" : var audio = new Audio("sounds/tom-2.mp3");
                      audio.play();
            break;
            case"k" : var audio = new Audio("sounds/tom-3.mp3");
                      audio.play();
            break;
            case"l" : var audio = new Audio("sounds/tom-4.mp3");
                      audio.play();
            break;
            
        }
    });
}

document.addEventListener("keydown",function(event) {
    var buttonInnerHTML1 = event.key;
    switch(buttonInnerHTML1){
       case"w" : var audio = new Audio("sounds/crash.mp3");
                 audio.play();
       break;
       case"a" : var audio = new Audio("sounds/kick-bass.mp3");
                 audio.play();
       break;
       case"s" : var audio = new Audio("sounds/snare.mp3");
                 audio.play();
       break;
       case"d" : var audio = new Audio("sounds/tom-1.mp3");
                 audio.play();
       break;
       case"j" : var audio = new Audio("sounds/tom-2.mp3");
                 audio.play();
       break;
       case"k" : var audio = new Audio("sounds/tom-3.mp3");
                 audio.play();
       break;
       case"l" : var audio = new Audio("sounds/tom-4.mp3");
                 audio.play();
       break;
    }
   });


