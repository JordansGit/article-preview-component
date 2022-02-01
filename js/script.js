/*
when button is clicked: 
  .share-popup -> swap between display flex, display none;  
  change circle bg color to the dark color 
  change color of circle img to body color
*/

/* Global Variables */ 
let shareBtn = document.querySelector('.share-button-bg');
let sharePopup = document.querySelector('.share-popup');
let shareBtnImg = document.querySelector('.share-button'); 

shareBtn.addEventListener('click', popup); 

function popup() {
  if (sharePopup.style.display === "none" || sharePopup.style.display === '') {
    sharePopup.style.display = 'flex';
    shareBtn.style.backgroundColor = 'hsl(217, 19%, 35%)';
    shareBtnImg.style.filter = 'brightness(0) invert(1)';
  } else {
    sharePopup.style.display = 'none';
    shareBtn.style.backgroundColor = 'hsl(210, 46%, 95%)';
    shareBtnImg.style.filter = 'invert(57%) sepia(8%) saturate(1155%) hue-rotate(175deg) brightness(85%) contrast(90%)';
    }
}

/* How I changed the svg color:
  googled how to turn svg image into white (line 20)
  opened the svg image file in chrome > inspect > click on path fill > see at the bottom fill: rgb(...)
  google rgb to hex 
  go on a link on the website below to get the filter(..) value equivalent to the hex color. 
  https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element 

*/ 

