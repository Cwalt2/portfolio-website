// Small enhancement: lazy-load images
document.addEventListener('DOMContentLoaded', function(){
const imgs = document.querySelectorAll('img');
imgs.forEach(img=>{ if('loading' in HTMLImageElement.prototype) img.loading='lazy'; })
});