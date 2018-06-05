//Variables
const loaderDiv = document.querySelector('.loader');
const loader = document.querySelector('.loader div');
const all = document.querySelector('*');
const headerBox = document.querySelector('.header-box');

let width = window.innerWidth;
let height = window.innerHeight;

const header = document.querySelector('header');


//Setting the loader's size to that of the user's screen
loaderDiv.style.width = width + 'px';
loaderDiv.style.height = height + 'px';

//when the body is loaded, remove the loader and set the header's size to that of the user's screen
const body = document.querySelector('body');
body.onload = () => {

    loaderDiv.style.transform = `translateY(-${height}px)`;
    loaderDiv.style.opacity = `0`;
    body.style.overflow = 'auto';
    all.style.overflow = 'auto';

    header.style.height = `${height -  100}px`;

}

//For parallax scrolling
window.onscroll = function() {

    let scrollVal = this.pageYOffset;
    headerBox.style.transform = `translateY(-${scrollVal/2}px)`;

};