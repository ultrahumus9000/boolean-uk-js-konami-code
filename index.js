// https://en.wikipedia.org/wiki/Konami_Code
const btns = document.querySelector('.buttons')
const btn = document.querySelector('.yes')
let orginalsection = document.querySelector('.sectionori')
let sectionel = document.createElement('section')
sectionel.setAttribute('class','playsection')
let h2el = document.createElement('h2')
h2el.innerText = `let's play!!! Type the key after the arrows dispear`
let divel = document.createElement('div')
divel.setAttribute('class', 'images')
let imgeelone = document.createElement('img')
imgeelone.setAttribute('src','up.svg')
let imgeeltwo = document.createElement('img')
imgeeltwo.setAttribute('src','up.svg')
let imgeelthree = document.createElement('img')
imgeelthree.setAttribute('src','down.svg')
let imgeelfour = document.createElement('img')
imgeelfour.setAttribute('src','down.svg')
let imgeelfive = document.createElement('img')
imgeelfive.setAttribute('src','left.svg')
let imgeelsix = document.createElement('img')
imgeelsix.setAttribute('src','right.svg')
let imgeelseven = document.createElement('img')
imgeelseven.setAttribute('src','left.svg')
let imgeeleight = document.createElement('img')
imgeeleight.setAttribute('src','right.svg')
divel.append(imgeelone,imgeeltwo,imgeelthree,imgeelfour,imgeelfive,imgeelsix,imgeelseven,imgeeleight)
sectionel.append(h2el, divel)


btn.addEventListener('click', function(){
   orginalsection.remove()
    btns.remove()
    setTimeout(createel,1000)
})

function createel(){
    document.body.append(sectionel)
    setTimeout(function (){
        sectionel.remove()
    },4000)
}

const combo = [
    "up",
    "up",
    "down",
    "down",
    "left",
    "right",
    "left",
    "right",
  ];
  
  let comboIndex = 0;
  let sectionelnew = document.createElement('section')
  document.addEventListener("keydown", function (event) {
    // get the key pressed by the user
    const keyPressed = event.key.toLowerCase().replace("arrow", "");
    let imageel = document.createElement('img')
    imageel.setAttribute('class','show')
    sectionelnew.setAttribute('class','playsection-one')
    if(keyPressed === 'up'){
      imageel.setAttribute('src','up.svg')
    }
    if(keyPressed === 'down'){
      imageel.setAttribute('src','down.svg')
    }
    if(keyPressed === 'left'){
      imageel.setAttribute('src','left.svg')
    }
    if(keyPressed === 'right'){
      imageel.setAttribute('src','right.svg')
    }
    
    sectionelnew.append(imageel)
    document.body.append(sectionelnew)
    // get the current key in the combo
    const currentComboKey = combo[comboIndex];
  
    // if they got the key right do this
    if (keyPressed === currentComboKey) {
      // move to the next step in the combo
      comboIndex++;
    }
    // if they got the key wrong do this
    else {
      // reset the combo
      comboIndex = 0;
    }
  
    // if they got the entire combo right do this
    if (comboIndex === combo.length) {
      // reset the combo
      comboIndex = 0;
  
      // toggle the combo class from the konami logo
      const konamiLogo = document.querySelector(".konami-logo");
      konamiLogo.classList.toggle("combo");
    }
  });
  