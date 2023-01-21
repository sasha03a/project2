const form = document.querySelector('#todo-form');
// console.log(form);

const taskInput = document.querySelector('#task-input')
// console.log(taskInput);

const tasksList = document.querySelector('.tasks-list')



form.addEventListener('submit', addTask)


tasksList.addEventListener('click', deleteTask)
tasksList.addEventListener('click', doneTask)

if (localStorage.getItem('tasks')) {
    tasksList.innerHTML = localStorage.getItem('tasks')
}

function addTask(e) {

    e.preventDefault();
    // console.log(taskInput.value);
    const inputValue = taskInput.value;
    const taskItem = `
    <li class="list-group-item mb-1 d-flex align-items-center justify-content-between shadow-sm">
                <div class="text list-group-item__inner w-75 me-2 ps-2">${inputValue}</div>
                <div class="list-group-item__buttons d-flex flex-nowrap">
                    <button type="submit" class="btn btn-outline-success me-2" data-action="done">
                        <i class="bi bi-check-square"></i>
                    </button>

                    <button class="edit btn btn-outline-primary me-2" type="button">
                        Edit
                    </button>

                    <button type="button" class="btn btn-outline-danger" data-action="delete">
                        <i class="bi bi-trash3-fill"></i>
                    </button>
                </div>

            </li>`

    //  tasksList.innerHTML += taskItem

    tasksList.insertAdjacentHTML('beforeend', taskItem)
    taskInput.value = '';
    ////робить пусті таски
    taskInput.focus();
    saveHTMLStorage();
}





function deleteTask(e) {

    // console.log(e.target);

    if (e.target.dataset.action === 'delete') {
        const task = e.target.closest('.list-group-item');
        task.remove()
        

    }
    saveHTMLStorage()
}

function doneTask(e) {


    if (e.target.dataset.action === 'done') {
        const task = e.target.closest('.list-group-item');
        
        task.classList.toggle('done')
        // task.style.color = 'gray';
        // task.style.textDecoration = 'line-through'
    }
    saveHTMLStorage()
}





function saveHTMLStorage() {
    localStorage.setItem('tasks', tasksList.innerHTML)
}

function gateHTMLStorage() {
    // console.log(localStorage.getItem('tasks'))
}
saveHTMLStorage()
gateHTMLStorage()






let edit = document.querySelectorAll('.edit');
let text = document.querySelectorAll('.text');

for( let i = 0; i < edit.length; i++ ){
  let editMode = false;
  
  edit[i].addEventListener('click', function(){
    if( editMode ) {
      this.textContent = 'Edit';
      text[i].removeAttribute('contentEditable');
    } else {
      this.textContent = "Ok";      
      text[i].setAttribute('contentEditable', true);
      text[i].focus();
    }
    
    editMode = !editMode;
  })
}
// function back(e) {
//     const btnDelete = e.target.closest('.btn-outline-danger')
//     if (btnDelete.type == 'mouseover') {

//         task.target.style.background = 'pink';
//         console.log('ok');
//     }
//     if (btnDelete.type == 'mouseout') {
//         task.target.style.background = 'blue'
//         console.log('hhh');
//     }
// }


// const btnDelete = document.querySelector('.btn-outline-danger')

// // function back() {
// //     task.style.background = e.target.style.background
// // }

// // task.addEventListener('mouseover', function (e) {

// //     e.target.style.background = 'black'
// //     back()
// //     console.log('ok');
// // })

// task.addEventListener( function l(e) {

// if (mouseover === 'delete') {
    
// }
//     e.target.style.background = 'black'
//     // back()
//     console.log('ok');
// })