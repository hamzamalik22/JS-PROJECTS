let input = document.querySelector('#inp_task');
let btn_submit = document.querySelector('#btn_submit');
let btn_close = document.querySelector('#btn_close');
let my_task = document.querySelector('#my_task');
let my_tasks = document.querySelector('.tasks');


btn_submit.addEventListener('click',()=>{
    createTask();
})


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
}

my_tasks.addEventListener('click',e =>{
    if(e.target.tagName === 'P'){
        e.target.classList.toggle('checked');
    }
    else if(e.target.tagName === 'I'){
        e.target.parentElement.parentElement.remove();
    }
})
