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

function toggleSlideover() {
  document.getElementById('slideover-container').classList.toggle('invisible');
  document.getElementById('slideover').classList.remove('hidden');
  document.getElementById('slideover').classList.toggle('translate-x-full');
}