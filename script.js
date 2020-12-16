var projectImage= document.getElementById('img1')
function imgHover() {
    projectImage.src = '30mffimageclear.png';
}
function imgHover2() {
    projectImage.src = '30mffimageblur.png';
}

projectImage.addEventListener('mouseover', imgHover); 
projectImage.addEventListener('mouseleave', imgHover2);


var projectImage2= document.getElementById('img2')
function imgHover3() {
    projectImage2.src = 'comicclear.png';
}
function imgHover4() {
    projectImage2.src = 'comicblur.png';
}

projectImage2.addEventListener('mouseover', imgHover3); 
projectImage2.addEventListener('mouseleave', imgHover4);


var projectImage3= document.getElementById('img3')
function imgHover5() {
    projectImage3.src = 'soundclear.jpg';
}
function imgHover6() {
    projectImage3.src = 'soundblur.png';
}

projectImage3.addEventListener('mouseover', imgHover5); 
projectImage3.addEventListener('mouseleave', imgHover6);


var projectImage4= document.getElementById('img4')
function imgHover7() {
    projectImage4.src = 'videoclear.jpg';
}
function imgHover8() {
    projectImage4.src = 'videoblur.png';
}

projectImage4.addEventListener('mouseover', imgHover7); 
projectImage4.addEventListener('mouseleave', imgHover8);