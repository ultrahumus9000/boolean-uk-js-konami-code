// https://en.wikipedia.org/wiki/Konami_Code
const btn = document.querySelector('.yes')
btn.addEventListener('click', function(){
    console.log('yes')
})

// setTimeout(  ,1000 )

// function game(){

// }

// use timeout to display combos then guess

// const combo = [
//     "up",
//     "up",
//     "down",
//     "down",
//     "left",
//     "right",
//     "left",
//     "right",
//     "b",
//     "a"
//   ];
  
//   let comboIndex = 0;
  
//   document.addEventListener("keydown", function (event) {
//     // get the key pressed by the user
//     const keyPressed = event.key.toLowerCase().replace("arrow", "");
  
//     // get the current key in the combo
//     const currentComboKey = combo[comboIndex];
  
//     // if they got the key right do this
//     if (keyPressed === currentComboKey) {
//       // move to the next step in the combo
//       comboIndex++;
//     }
//     // if they got the key wrong do this
//     else {
//       // reset the combo
//       comboIndex = 0;
//     }
  
//     // if they got the entire combo right do this
//     if (comboIndex === combo.length) {
//       // reset the combo
//       comboIndex = 0;
  
//       // toggle the combo class from the konami logo
//       const konamiLogo = document.querySelector(".konami-logo");
//       konamiLogo.classList.toggle("combo");
//     }
//   });
  