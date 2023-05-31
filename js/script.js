// Get the button
let scrollerBtn = document.querySelector(".btnBackToTop");

// // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    scrollerBtn.style.display = "block";
  } else {
    scrollerBtn.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
scrollerBtn.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.body.style.scrollBehavior = 'smooth';
}

// // Burger menus
// document.addEventListener('DOMContentLoaded', function() {
//     // open and close
//     const burger = document.querySelectorAll('.navbar-burger');
//     const menu = document.querySelectorAll('.navbar-menu');

//     if (burger.length && menu.length) {
//         for (var i = 0; i < burger.length; i++) {
//             burger[i].addEventListener('click', function() {
//                 for (var j = 0; j < menu.length; j++) {
//                     menu[j].classList.toggle('hidden');
//                 }
//             });
//         }
//     }
// });


function toggleSlideover() {
    document.getElementById('slideover-container').classList.toggle('invisible');
    document.getElementById('slideover').classList.toggle('translate-x-full');
}