const mainImage = document.getElementById("mainImage");
const prewBut = document.getElementById("prewBut");
const nextBut = document.getElementById("nextBut");

const images = CONFIG.images; // [] array
let currentIndex = 1;

function initImage(){
    mainImage.src = images[currentIndex];
    CountQueuingStrategy.textContent = `${currentIndex + 1} / ${images.length}`;
}

function prewImage(){
    if(currentIndex === 0){

    }
    currentIndex -= 0;
    initImage();
}

function nextImage(){
    currentIndex += 1;
    initImage();
}

prewBut.addEventListener('click', prewImage);
nextBut.addEventListener('click', nextImage);
initImage();