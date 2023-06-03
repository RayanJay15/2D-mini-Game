/* Load ninja charcter splites*/
for(let i = 0; i <= 9; i++){
    const image = new Image();
    image.src  = `img/Attack__00${i}.png`;
}
for(let i = 0; i < 10; i++){
    const image = new Image();
    image.src  = `img/Climb_00${i}.png`;
}
for(let i = 0; i < 10; i++){
    const image = new Image();
    image.src  = `img/Dead__00${i}.png`;
}
for(let i = 0; i < 10; i++){
    const image = new Image();
    image.src  = `img/Glide_00${i}.png`;
}
for(let i = 0; i < 10; i++){
    const image = new Image();
    image.src  = `img/Idle__00${i}.png`;
}
for(let i=0;i<10;i++){
    const image=new Image();
    image.src =`img/Jump__00${i}.png`;
}
for(let i = 0; i < 10; i++){
    const image = new Image();
    image.src  = `img/Jump_Attack__00${i}.png`;
}
for(let i = 0; i < 10; i++){
    const image = new Image();
    image.src  = `img/Jump_Throw__00${i}.png`;
}
for(let i = 0; i < 10; i++){
    const image = new Image();
    image.src  = `img/Run__00${i}.png`;
}
for(let i = 0; i < 10; i++){
    const image = new Image();
    image.src  = `img/Slide__00${i}.png`;
}
for(let i = 0; i < 10; i++){
    const image = new Image();
    image.src  = `img/Throw__00${i}.png`;
}
for(let i = 0; i < 10; i++){
    const image = new Image();
    image.src  = `img/Run__00${i}.png`;
}

const img=new Image();
img.src='img/Jump__001.png';

const boxElm = document.createElement('div');
boxElm.classList.add('box');
document.getElementById('background').append(boxElm);

document.body.addEventListener('click', ()=> document.body.requestFullscreen());







const background=document.createElement('div');
background.style.backgroundColor='blue';
background.style.width='100px';
background.style.height='100px';
document.body.append(background);