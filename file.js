var button = document.getElementById('enter')
var input = document.getElementById('userinput')
var changeInput = document.getElementById('userinput2')
var ul = document.querySelector('ul')



function inputLength() {
    return input.value.length;
}

// function deleteButton() {
//     li = document.createElement('li')
//     var btn = document.createElement('button')
//     li.appendChild(btn)
//     btn.innerText = 'Delete'
//     btn.addEventListener('click', function() {
//         ul.removeChild(li)
//     })
// }

function createListElement(li) {
    li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ''

    deleteButton(li);
    changeTodoText(li);

}

function deleteButton(li) {
    var btn = document.createElement('button')
    li.appendChild(btn)
    btn.innerText = 'Delete'
    btn.addEventListener('click', function() {
        ul.removeChild(li)
    })
}

// function toggleClass() {
//     li.addEventListener('click', function() {
//         li.classList.toggle('done')
//     })
// }

function changeTodoText(li) {
    var btn2 = document.createElement('button')
    li.appendChild(btn2);
    btn2.innerText = 'Change Todo'
    btn2.addEventListener('click', function() {
        li.innerText = userinput2.value;
        deleteButton(li);
        changeTodoText(li);
    })



}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();


    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
        changeTodoText();
    }
}





button.addEventListener('click', addListAfterClick)
input.addEventListener('keypress', addListAfterKeyPress)









// var input2 = document.createElement('input')
// var btn2 = document.createElement('button')
// li.appendChild(input2);
// li.appendChild(btn2);

// btn2.innerText = 'Change Text'
// input2.value = ""
// btn2.addEventListener('click', function() {
//     li.innerText = input2.value;
//     var btn = document.createElement('button')
//     li.appendChild(btn)
//     btn.innerText = 'Delete'

//     var input3 = document.createElement('input')
//     li.appendChild(input3)






//     btn.addEventListener('click', function() {
//         ul.removeChild(li)