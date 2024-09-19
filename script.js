const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {

panel.addEventListener('click', () => {
removeActiveClasses();
panel.classList.add('active');
});
});

function removeActiveClasses(){
panels.forEach(panel => {
panel.classList.remove('active');
})
};

let modal = document.querySelector('.modal');
let openBtn = document.querySelector('.btn--show-modal');
let closeBtn = document.querySelector('.btn--close-modal');
let overlay = document.querySelector('.overlay');


openBtn.addEventListener('click', function(){
 modal.classList.remove('hidden');
 overlay.classList.remove('hidden');
})
overlay.addEventListener('click', function(){
 modal.classList.add('hidden');
 overlay.classList.add('hidden');
})

closeBtn.addEventListener('click', function(){
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
})



modal = document.querySelector('.modal');
openBtn = document.querySelector('.btn--show-put');
closeBtn = document.querySelector('.btn--close-modal');
overlay = document.querySelector('.overlay');


openBtn.addEventListener('click', function(){
 modal.classList.remove('hidden');
 overlay.classList.remove('hidden');
})
overlay.addEventListener('click', function(){
 modal.classList.add('hidden');
 overlay.classList.add('hidden');
})

  closeBtn.addEventListener('click', function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
})

// SMOOTH SCROLLING P2 

document.querySelectorAll('.nav-links').forEach(function (el){
  el.addEventListener('click', function (e){
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
  })
});


// Sticky Navigation

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky')
});

        
