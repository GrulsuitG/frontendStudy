let i = 1;
function createParagraph(){
    let para = document.createElement('p');
    para.textContent = 'You clicked the button!' + i;
    i++;
    document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i =0; i<buttons.length; i++){
    buttons[i].addEventListener('click', createParagraph);
}