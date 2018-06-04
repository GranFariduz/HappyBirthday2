//Variables
const loaderDiv = document.querySelector('.loader');
let width = window.innerWidth;
let height = window.innerHeight;

const header = document.querySelector('header');

loaderDiv.style.width = width + 'px';
loaderDiv.style.height = height + 'px';

const body = document.querySelector('body');
body.onload = () => {

    loaderDiv.style.transform = `translateY(-${height}px)`;
    loaderDiv.style.opacity = `0`;

    header.style.height = `${height}px`;

}