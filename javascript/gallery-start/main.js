const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
var imgsrc = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg']
/* Looping through images */
for(var i = 0; i<imgsrc.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgsrc[i]);
    thumbBar.appendChild(newImage);
}

function showImg(e){
    var src = e.target.src;
    displayedImage.setAttribute('src', src);
}
thumbBar.addEventListener('click',showImg);

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',function(){
    if(btn.className === 'dark'){
        btn.className = 'light';
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.className = 'dark';
        btn.textContent ='darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';

    }
})