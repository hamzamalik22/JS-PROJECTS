let input = document.querySelector('#inp_task');
let btn_submit = document.querySelector('#btn_submit');
let btn_close = document.querySelector('#btn_close');
let my_task = document.querySelector('#my_task');
let my_tasks = document.querySelector('.tasks');
let body = document.querySelector('body');


btn_submit.addEventListener('click',()=>{
    if(input.value != ''){
        createTask();
    }
})

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if(input.value != ''){
            createTask();
        }
    }
});


// functions 

let new_element = '';
function createTask(){
    new_element += `<div class="task">
    <p id="the_task" class="unchecked">${input.value}</p>
    <h6 id="btn_close">
        <i class="ri-close-line"></i>
    </h6>
</div>`
    document.querySelector('.tasks').innerHTML = new_element;
    input.value = '';
    saveInfo();
}

my_tasks.addEventListener('click', e =>{
    if(e.target.tagName === 'P'){
        e.target.classList.toggle('checked');
        saveInfo();
    }
    else if(e.target.tagName === 'I'){
        e.target.parentElement.parentElement.remove();
        saveInfo();
    }
})

function saveInfo(){
    localStorage.setItem('info',my_tasks.innerHTML);
}

function getInfo(){
    my_tasks.innerHTML = localStorage.getItem('info');
}

getInfo();

function getRandomHue() {
    return Math.floor(Math.random() * 360); 
}

function changeBackgroundColor() {
    const hue1 = getRandomHue(); 
    const hue2 = (hue1 + 180) % 360; 
    body.style.background = `linear-gradient(hsl(${hue1}, 100%, 50%), hsl(${hue2}, 100%, 50%))`;
}

setInterval(changeBackgroundColor, 1000);
