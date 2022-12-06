var elForm = document.querySelector('.js-form');
var elTitle = document.querySelector('.js-title')
var elInput = document.querySelector('.js-input');
var elInput2 = document.querySelector('.js-input2');
var elStart = document.querySelector('.js-start');
var elEnd = document.querySelector('.js-end');



var elarray = ['bugatti', 'convette', 'BMW', 'chevrolet', 'mersadenc', 'ford', 'toyota']
elTitle.textContent = elarray



elStart.addEventListener('click', function (evt) {
  if (elInput.value == '') {
      return;
  }
  elarray.unshift(elInput.value);
  elTitle.textContent = elarray;
})

elEnd.addEventListener('click', function (evt) {
  
  if (elInput2.value == '') {
    return;
  }
  elarray.push(elInput2.value);
  elTitle.textContent = elarray
} )

elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  if (elInput.value !== '' && elInput2.value !== '') {
    elarray.shift(elInput.value);
    elTitle.textContent = elarray;

    elarray.pop(elInput2.value);
    elTitle.textContent = elarray;
    return;
}

  

});


// var el = +prompt('son kiriting')

// var g = 0

// for ( g; g <= el; g++) {

//   if (g % 2 == 0) {
//     console.log(g);
//   }

  // sum = sum +g
// }

