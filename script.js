const buttons = document.querySelectorAll('.carrossel button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    removeClass();
    btn.classList.add('active__btn');
    console.log(btn)
  })
});

 function removeClass() {
  buttons.forEach(btn => {
    btn.classList.remove('active__btn')
  })
 }