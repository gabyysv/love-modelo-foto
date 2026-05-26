/* REVELAR FOTOS */

const revealBtn =
document.getElementById("revealBtn");

const photos =
document.querySelectorAll(".photo");

let revealed = false;

revealBtn.addEventListener("click",()=>{

  if(revealed) return;

  photos.forEach((photo,index)=>{

    setTimeout(()=>{

      photo.classList.add("show");

    },index * 350);

  });

  burstHearts();

  revealed = true;

});

/* CARTA */

const overlay =
document.getElementById("overlay");

const letterBtn =
document.getElementById("letterBtn");

const closeBtn =
document.getElementById("closeBtn");

letterBtn.addEventListener("click",()=>{

  overlay.classList.add("active");

  burstHearts();

});

closeBtn.addEventListener("click",()=>{

  overlay.classList.remove("active");

});

/* =========================
   CORAÇÕES INFINITOS
========================= */

function createFloatingHeart(){

  const heart =
  document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML =
  ["💜","💕","💖","✨"][Math.floor(Math.random()*4)];

  heart.style.left =
  Math.random()*100 + "vw";

  heart.style.fontSize =
  Math.random()*18 + 14 + "px";

  heart.style.animationDuration =
  Math.random()*5 + 4 + "s";

  heart.style.opacity =
  Math.random() * 0.6 + 0.3;

  document.body.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },9000);

}

/* CRIA CORAÇÕES SEM PARAR */

setInterval(()=>{

  createFloatingHeart();

},400);

/* EXPLOSÃO AO CLICAR */

function burstHearts(){

  for(let i=0;i<15;i++){

    createFloatingHeart();

  }

}

