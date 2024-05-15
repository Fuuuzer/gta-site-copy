const buttons = document.querySelectorAll('.carrossel button');
const texts = document.getElementById('informations-text')
const slider = document.querySelector('.slider');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    removeClass();
    btn.classList.add('active__btn');
    switch (btn) {
      case buttons[0]:
        slider.style.setProperty('--selected-item', '0');
        texts.innerHTML = 
        `
        <p class="informations__game">Grand Theft Auto VI</p>
        <h1 class="informations__title">Trailer 1</h1>
        <div class="main">
          <button class="main__btn">Watch now</button>
        </div>
        `
        break;
      case buttons[1]:
        slider.style.setProperty('--selected-item', '1');
        texts.innerHTML = 
        `
        <p class="informations__game">Grand Theft Auto Online</p>
        <h1 class="informations__title">The Cluckin' Bell Farm Raid</h1>
        <div class="main">
          <button class="main__btn">Watch now</button>
        </div>
        `
        break;
      case buttons[2]:
         slider.style.setProperty('--selected-item', '2');
         texts.innerHTML = 
         `
         <p class="informations__game">Grand Theft Auto Online</p>
         <h1 class="informations__title">The Chop Shop</h1>
         <div class="main">
           <button class="main__btn">Watch now</button>
         </div>
         `
          break;
        case buttons[3]:
          slider.style.setProperty('--selected-item', '3');
          texts.innerHTML = 
          `
          <p class="informations__game">Grand Theft Auto Online</p>
          <h1 class="informations__title">Speed to Victory in New Drag Races</h1>
          <div class="main">
            <button class="main__btn">Watch now</button>
          </div>
          `
          break;
    }
  })
});

 function removeClass() {
  buttons.forEach(btn => {
    btn.classList.remove('active__btn')
  })
 }