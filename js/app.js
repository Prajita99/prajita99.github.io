$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });


    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click', function () {
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });
});

//Typing script
class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
     this.txtElement = txtElement;
     this.words = words;
     this.txt = '';
     this.wordIndex = 0;
     this.wait = parseInt(wait, 10);
     this.type();
     this.isDeleting = false;
   }
 
   type() {
    
     const current = this.wordIndex % this.words.length;
     const fullTxt = this.words[current];
 
     if(this.isDeleting) {
       this.txt = fullTxt.substring(0, this.txt.length - 1);
     } else {
       this.txt = fullTxt.substring(0, this.txt.length + 1);
     }
 
     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

     let typeSpeed = 300;
 
     if(this.isDeleting) {
       typeSpeed /= 2;
     }
 
     if(!this.isDeleting && this.txt === fullTxt) {
       typeSpeed = this.wait;
       this.isDeleting = true;
     } else if(this.isDeleting && this.txt === '') {
       this.isDeleting = false;
       this.wordIndex++;
       typeSpeed = 500;
     }
 
     setTimeout(() => this.type(), typeSpeed);
   }
 }
 

 document.addEventListener('DOMContentLoaded', init);

 function init() {
   const txtElement = document.querySelector('.txt-type');
   const words = JSON.parse(txtElement.getAttribute('data-words'));
   const wait = txtElement.getAttribute('data-wait');
   new TypeWriter(txtElement, words, wait);
 }            

