let slideIndex = 1;

showSlide(slideIndex);

function nextSlide(){
  showSlide(slideIndex += 1);
}
function prevSlide(){
  showSlide(slideIndex -= 1);
}
function currSlide(n){
  showSlide(slideIndex = n);
}
function showSlide(n){
let slides = document.getElementsByClassName('slides-item');
if (n > slides.length){
  slideIndex = 1
}
if(n < 1){
  slideIndex = slides.length
}
for (let slide of slides){
  slide.style.display = 'none';
}
slides[slideIndex - 1].style.display = 'block';
}


let interval = setInterval(nextSlide, 3000);
 

 let prevBtn = document.getElementById('left');
let nextBtn = document.getElementById('right');

prevBtn.onclick = function(){
  prevSlide(-1);
}
nextBtn.onclick = function(){
  nextSlide(1);
}