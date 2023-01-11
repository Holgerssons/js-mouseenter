"use strict"

let elDiv = document.querySelector('.text');

console.log( elDiv );

console.log( elDiv.innerHTML );

elDiv.addEventListener('mouseenter', () => 

{
  let a = elDiv.innerHTML;

  elDiv.innerHTML = 'Новий текст';

  console.log('Кількість наведень');
});


elDiv.addEventListener('mouseleave', () => 

{
  let a = elDiv.innerHTML;

  elDiv.innerHTML = 'Текст, який має змінитися';
});
