const mainImage = document.getElementById("mainImage")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")
const select = document.getElementById("select")
const count = document.getElementById("count")

const images = CONFIG.image
const maxIndex = images.length - 1

let index = 0

function selectf(){
    localStorage.setItem('selectindex', index)

}

function changeImage(next) {
    if (next) {if (index + 1 > maxIndex) {index = 0} else {index += 1} } else {if (index - 1 < 0) {index = maxIndex} else {index -= 1}}
    load()  
}

function load(){
    mainImage.src = images[index]
    count.textContent = `${index + 1} / ${maxIndex + 1}`
}
function loadLocal(){
    if(localStorage.getItem('selectindex') === null){
        return
    }
    index = parseInt(localStorage.getItem('selectindex'))
    load()
    
}

leftBtn.addEventListener("click", changeImage(false))
rightBtn.addEventListener("click", changeImage(true))
select.addEventListener('click', selectf)
loadLocal()
load()