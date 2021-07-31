lst = []
function number (num) {
    for(let i=0; i< num; i++) {
        lst.push(i+".jpg");
    }
    return lst
}

let images = number(7);


const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src =`img/${chosenImage}`;

document.body.appendChild(bgImage);