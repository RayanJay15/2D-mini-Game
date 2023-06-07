/* Load ninja charcter splites*/
for(let i = 0; i <= 9; i++){
    const image = new Image();
    image.src  = `img/Attack__00${i}.png`;
}
// for(let i = 0; i < 10; i++){
//     const image = new Image();
//     image.src  = `img/Climb_00${i}.png`;
// }
for(let i = 0; i < 10; i++){
    const image = new Image();
    image.src  = `img/Dead__00${i}.png`;
}
// for(let i = 0; i < 10; i++){
//     const image = new Image();
//     image.src  = `img/Glide_00${i}.png`;
// }
for(let i = 0; i < 10; i++){
    const image = new Image();
    image.src  = `img/Idle__00${i}.png`;
}
for(let i=0;i<10;i++){
    const image=new Image();
    image.src =`img/Jump__00${i}.png`;
}
// for(let i = 0; i < 10; i++){
//     const image = new Image();
//     image.src  = `img/Jump_Attack__00${i}.png`;
// }
// for(let i = 0; i < 10; i++){
//     const image = new Image();
//     image.src  = `img/Jump_Throw__00${i}.png`;
// }
for(let i = 0; i < 10; i++){
    const image = new Image();
    image.src  = `img/Run__00${i}.png`;
}
// for(let i = 0; i < 10; i++){
//     const image = new Image();
//     image.src  = `img/Slide__00${i}.png`;
// }
// for(let i = 0; i < 10; i++){
//     const image = new Image();
//     image.src  = `img/Throw__00${i}.png`;
// }
// for(let i = 0; i < 10; i++){
//     const image = new Image();
//     image.src  = `img/Run__00${i}.png`;
// }

var background = document.getElementById("background");
const boxElm = document.createElement('div');
boxElm.classList.add('box');
document.getElementById('background').append(boxElm);



// document.body.addEventListener('click', ()=> document.body.requestFullscreen());

let jump = false;
let run = false;
let attack=false;
let jumpAttack=false;
let dead=false;


let dx = 0;

/*Add background audio*/ 


document.body.addEventListener('keydown', (eventData)=> {
    console.log("keydown");
    if(dead){
        boxElm.style.width='200px';
        jump=false;
        run=false;
        attack=false;
      }else{
    if (eventData.code === 'Space'){
        boxElm.style.width='150px';
        jump = true;
    }else if (eventData.code === 'ArrowRight'){
        boxElm.style.transform = 'rotateY(0deg)';
        boxElm.style.width='150px';
        run = true;
        dx = 2;
        // console.log(boxElm.offsetLeft);
    }else if (eventData.code === 'ArrowLeft'){
        boxElm.style.transform = 'rotateY(180deg)';
        boxElm.style.width='150px';
        run = true;
        dx = -2;
    }else if (eventData.code==='KeyE'){

        boxElm.style.width='250px';
        attack=true;

    }else if(eventData.code==='KeyD'){
        boxElm.style.width='200px';Nayani

        dead=true;
    }else if(eventData.code==='Space'){
        boxElm.style.width='150px';
    }
   
}
});



document.body.addEventListener('keyup', (eventData) => {
    console.log("key up");
  if(dead){
    boxElm.style.width='200px';
    jump=false;
    run=false;
    attack=false;
  }else{

    if (eventData.code === 'ArrowRight'){
        boxElm.style.width='100px';
        run = false;
        dx = 0;
    }else if (eventData.code === 'ArrowLeft'){
        boxElm.style.width='100px';
        run = false;
        dx = 0;
    }else if(eventData.code ==='KeyE'){
        boxElm.style.width='100px';
        attack=false;
    }else if(eventData.code==='KeyD'){
        dead=false;
        boxElm.style.width='100px';
    }else if(eventData.code==='Space'){
        setTimeout(()=>{boxElm.style.width='100px'},500);
        
        
    }

  }

  

});

let angle = 0;
function doJump(){
    let y  = Math.cos(angle * (Math.PI / 180));
    y *= 3;
    boxElm.style.top = (boxElm.offsetTop - y) + "px";
    angle++;
    if (angle >  180){
        jump = false;
        angle = 0;  
    }
}

function doRun(){
     console.log("do run");
    let x = boxElm.offsetLeft + dx;
    if ((x + boxElm.offsetWidth)> innerWidth) {
        x = innerWidth - boxElm.offsetWidth;
    }else if (x <= -250) x = -250;
    
    boxElm.style.left = `${x}px`;
    
}



let i = 0;
function drawIdle(){
    boxElm.style.backgroundImage = `url('img/Idle__00${i++}.png')`;
    boxElm.style.boxSizing='content';
    if(i === 9) i = 0;
}

let k = 0;
function drawJump(){
    boxElm.style.backgroundImage = `url('img/Jump__00${k++}.png')`;
    if(k === 9) k = 0;
}

let j = 0;
function drawRun(){
    boxElm.style.backgroundImage = `url('img/Run__00${j++}.png')`;
    if(j === 9) j = 0;
}
let a=0;
function drawAttack(){
    boxElm.style.backgroundImage =`url('img/Attack__00${a++}.png')`;
    if(a==9) a=0;
}
let d=0;
function drawDead(){
    boxElm.style.backgroundImage =`url('img/Dead__00${d++}.png')`;
    if(d==9) d=0;
}


setInterval(()=> {
    if (jump){
        doJump();
    }
    if (run){
        doRun();
    }
    
}, 5);

setInterval(()=> {
    if (!jump && !run && !attack && !dead) {
        drawIdle();
    }else if (jump && !dead){
        drawJump();
    }else if (!jump && !dead && run){
        drawRun();
    }else if (!run && !dead && attack){
        drawAttack();
    }else if (!run && jump && !attack && !dead){
        drawJump();
        
     }//else if(dead){
    //     drawDead();
    // }

} , (1000/20));



/*Moving Background */

var backgroundPosition = 0;
var backgroundSpeed = 0; 
var score=0;


function moveBackground() {
  
  backgroundPosition += backgroundSpeed;
  
 
  background.style.backgroundPositionX = backgroundPosition + "px";
  

  requestAnimationFrame(moveBackground);
  
  
}





document.addEventListener("keydown", (eventData)=> {
    score=score+1;
    document.getElementById('score').innerHTML="Score : "+score;
  
  if (eventData.key === "ArrowLeft") {
    backgroundSpeed = -3; 
    
  }else if(eventData.key === "ArrowRight"){
    backgroundSpeed = 3;
  }
});



document.addEventListener("keyup", (eventData)=> {
    if (eventData.code === "ArrowLeft") {
        backgroundSpeed = 0; 
        
      }else if(eventData.code === "ArrowRight"){
        backgroundSpeed = 0;
      }
});

moveBackground();
background.style.backgroundRepeat = "repeat-x";


/*create enamies*/
// let enmMargin=1000;
// createEnamies();

// function createEnamies(){

//     for(var i=0;i<=10;i++){
//         const enmElm1=document.createElement('div');
//         enmElm1.classList.add('enm');
//         document.getElementById('background').append(enmElm1);
//         enmElm1.style.marginLeft=enmMargin+'px';
//         enmElm1.id='enmElm1'+i;
//     if(i<5){
//         enmMargin=enmMargin+1000;
//     }else if(i>=5){
//         enmMargin=enmMargin+500;
//     }
   
//     // function moveEnamie(){
//     //         let dx=-2;
//     //           let x=enmElm1.offsetLeft+dx
//     //              enmElm1.style.left=`${x}px`;
            
//     //         }
        
//     //    setInterval(moveEnamie,10);
// }
// }

// var enmElm1AnimationId=0;
// var newMarginLeft;

// function enmElm1Animation(){
//     for(var i=0;i<=10;i++){KeyE
//         var enmElm1=document.getElementById("enmElm1"+i);
//         var currentMarginLeft=getComputedStyle(enmElm1).marginLeft;
//         newMarginLeft=parseInt(currentMarginLeft)-25;
//         enmElm1.style.marginLeft=newMarginLeft+'px';
      
//     }
// }

// if(enmElm1AnimationId==0){
//     enmElm1AnimationId=setInterval(enmElm1Animation,100);
   
// }

// if (
//     boxElm.right >= enmElm1.left &&
//     boxElm.left <= enmElm1.right &&
//     boxElm.bottom >= enmElm1.top &&
//     boxElm.top <= enmElm1.bottom
//   ) {
//     enmElm1AnimationId=-1;
//     clearInterval(enmElm1Animation);
//   };
   



// function repeatEnamies(){

//     let enamiePosition=2000;
//     const enm2=document.createElement('div');
//     enm2.classList.add('enm');
//     document.getElementById('background').append(enm2);

//     function moveEnamie(){
//         let dx=-2;
//         let x=enm2.offsetLeft+dx
//         enm2.style.left=`${x}px`;
    
//     }

//     setInterval(moveEnamie,10);
 

// }


// setInterval(repeatEnamies,3000)


/*Enamie one*/
const enm1 = document.createElement('div');
enm1.classList.add('enm');
document.getElementById('background').append(enm1);

function moveEnamie1() {
  let dx=-2;
  let y = enm1.offsetLeft;
  if(y<=0)enm1.style.left='1000px';
  let x = enm1.offsetLeft + dx;
  enm1.style.left = `${x}px`;
}


setInterval(moveEnamie1, 15);
if(enm1.offsetLeft<=200){
    clearInterval(moveEnamie1);
}



/*Enamie two*/
const enm2 = document.createElement('div');
enm2.classList.add('enm2');
document.getElementById('background').append(enm2);

function moveEnamie2() {
  let dy=2;
  let y = enm2.offsetTop;
 
if(y>800)enm2.style.top='10px';
   
  let x = enm2.offsetTop + dy;
  enm2.style.top = `${x}px`;
}

setInterval(moveEnamie2, 20);

const enm3 = document.createElement('div');
enm3.classList.add('enm3');
document.getElementById('background').append(enm3);

function moveEnamie3() {
  let dy=2;
  let y = enm3.offsetTop;
 
if(y>800)enm3.style.top='10px';
   
  let x = enm3.offsetTop + dy;
  enm3.style.top = `${x}px`;
}

setInterval(moveEnamie3, 35);


const enm4 = document.createElement('div');
enm4.classList.add('enm4');
document.getElementById('background').append(enm4);

function moveEnamie4() {
  let dy=2;
  let y = enm4.offsetTop;
 
if(y>800)enm4.style.top='10px';
   
  let x = enm4.offsetTop + dy;
  enm4.style.top = `${x}px`;
}

setInterval(moveEnamie4, 50);


const mainEnm = document.createElement('div');
mainEnm.classList.add('mainEnm');
document.getElementById('background').append(mainEnm);


/*Enermy collison detection*/ 

document.addEventListener('keydown',(eventData)=>{
   
        if( boxElm.offsetLeft> enm4.offsetLeft+100 ||
            boxElm.offsetLeft+150 <enm4.offsetLeft ||
            boxElm.offsetTop>enm4.offsetTop+100 ||
            boxElm.offsetTop+200 <enm4.offsetTop){
                // console.log("no");
            }else if(eventData.code=='KeyE'){  
                enm4.style.display='none';       
                
            } else{
                // console.log("yes");   
                dead=true;
                setInterval(drawDead,100);
            }

    

    
})

   
       





















