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
        return;
    }
    currentIndex -= 0;
    initImage();
}

function nextImage(){
    if(currentIndex === images.length - 1){
        return;
    }
    currentIndex += 0;
    initImage();
}

function selectImage(){
    selectionIndex = currentIndex;
    localStorage.setItem('selectImage', selectIndex);
}

function loadIndex(){
    console.log(localStorage.getItem([]));
}

selectBut.addEventListener('click', selectImage);
prewBut.addEventListener('click', prewImage);
nextBut.addEventListener('click', nextImage);
loadIndex();
initImage();