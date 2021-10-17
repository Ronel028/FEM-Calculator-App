let toggleCircle = document.getElementById('togl');

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

let main = document.querySelector('main');
let toggleBg = document.querySelector('.toggle');
let toggle_Circle = document.querySelector('.toggle .circle');
let h2 = document.querySelectorAll('h2, .theme-indicator li');
let output = document.getElementById('output');
let btnContainer = document.getElementById('btn-container');
let buttons = document.querySelectorAll('button');
let buttonBg = document.querySelectorAll('button.btn-bg');
let buttonEqual = document.querySelector('button.btn-equal-bg');


// THEME 1
one.addEventListener('click', function(){
    toggleCircle.classList.remove('circle-move-middle');
    toggleCircle.classList.remove('circle-move-right');

    // THEME 2 REMOVE
    main.classList.remove('main-theme2');
    toggleBg.classList.remove('theme2-toggle-bg');
    toggle_Circle.classList.remove('theme2-toggle-circle');
    h2.forEach(title =>{
        title.classList.remove('theme2-text-color');
    })
    output.classList.remove('theme2-output');
    btnContainer.classList.remove('theme2-btn-container');
    buttons.forEach(button => {
        button.classList.remove('theme2-keybg1');
    });
    buttonBg.forEach(buttonBg => {
        buttonBg.classList.remove('theme2-key-bg2');
    });
    buttonEqual.classList.remove('theme2-key-bg3');

    // THEME 3 REMOVE
    main.classList.remove('main-theme3');
    toggleBg.classList.remove('theme3-toggle-bg');
    toggle_Circle.classList.remove('theme3-toggle-circle');
    h2.forEach(title =>{
        title.classList.remove('theme3-text-color');
    })
    output.classList.remove('theme3-output');
    btnContainer.classList.remove('theme3-btn-container');
    buttons.forEach(button => {
        button.classList.remove('theme3-keybg1');
    });
    buttonBg.forEach(buttonBg => {
        buttonBg.classList.remove('theme3-key-bg2');
    });
    buttonEqual.classList.remove('theme3-key-bg3');
})

// THEME 2
two.addEventListener('click', function(){
    toggleCircle.classList.add('circle-move-middle');
    toggleCircle.classList.remove('circle-move-right');

    main.classList.add('main-theme2');
    toggleBg.classList.add('theme2-toggle-bg');
    toggle_Circle.classList.add('theme2-toggle-circle');
    h2.forEach(title =>{
        title.classList.add('theme2-text-color');
    })
    output.classList.add('theme2-output');
    btnContainer.classList.add('theme2-btn-container');
    buttons.forEach(button => {
        button.classList.add('theme2-keybg1');
    });
    buttonBg.forEach(buttonBg => {
        buttonBg.classList.add('theme2-key-bg2');
    });
    buttonEqual.classList.add('theme2-key-bg3');

     // THEME 3 REMOVE
     main.classList.remove('main-theme3');
     toggleBg.classList.remove('theme3-toggle-bg');
     toggle_Circle.classList.remove('theme3-toggle-circle');
     h2.forEach(title =>{
         title.classList.remove('theme3-text-color');
     })
     output.classList.remove('theme3-output');
     btnContainer.classList.remove('theme3-btn-container');
     buttons.forEach(button => {
         button.classList.remove('theme3-keybg1');
     });
     buttonBg.forEach(buttonBg => {
         buttonBg.classList.remove('theme3-key-bg2');
     });
     buttonEqual.classList.remove('theme3-key-bg3');
})

// THEME 3
three.addEventListener('click', function(){
    toggleCircle.classList.add('circle-move-right');

    main.classList.add('main-theme3');
    toggleBg.classList.add('theme3-toggle-bg');
    toggle_Circle.classList.add('theme3-toggle-circle');
    h2.forEach(title =>{
        title.classList.add('theme3-text-color');
    })
    output.classList.add('theme3-output');
    btnContainer.classList.add('theme3-btn-container');
    buttons.forEach(button => {
        button.classList.add('theme3-keybg1');
    });
    buttonBg.forEach(buttonBg => {
        buttonBg.classList.add('theme3-key-bg2');
    });
    buttonEqual.classList.add('theme3-key-bg3');
})

// BUTTON FUNCTION
let btnNumber = document.querySelectorAll('button.number');
let btnOperator = document.querySelectorAll('button.operator');
let btnEqual = document.querySelector('button.btn-equal');
let btnReset = document.querySelector('.btn-reset');
let btnDel = document.querySelector('button.btn-delete');
let result = document.querySelector('#output');

let haveDot = false;
let num = '';
let fNumber = '';
let sNumber = '';
let Operator = '';

btnNumber.forEach(number =>{
    number.addEventListener('click', (e) =>{
          if(e.target.innerText === '.' && !haveDot){
              haveDot = true;
          }
          else if(e.target.innerText === '.' && haveDot){
              return;
          }
          num += e.target.innerText;
          result.value = num;
    })
});

btnOperator.forEach(operator => {
    operator.addEventListener('click', (e) =>{
         Operator = e.target.innerText;
         fNumber = num;
         num = '';
         haveDot = false;
         result.value = '';
    })
})
btnEqual.addEventListener('click', function(){
        sNumber = num;
        haveDot = false;
        num = '';
        result.value = '';

        switch(Operator){
            case '+':
               result.value = parseFloat(fNumber) + parseFloat(sNumber);
               fNumber = result.value;
               break;
            case 'x':
                result.value = parseFloat(fNumber) * parseFloat(sNumber);
                break;
            case '-':
                result.value = parseFloat(fNumber) - parseFloat(sNumber);
                break;
            case '/':
                result.value = parseFloat(fNumber) / parseFloat(sNumber);
                break;
        }
})
btnDel.addEventListener('click', function(){
    result.value = result.value.slice(0, -1);
    num = result.value;
    if (result.value === ''){
        result.value = '0';
    }
})
btnReset.addEventListener('click', function(){
    haveDot = false;
    num = '';
    result.value = '0';
});