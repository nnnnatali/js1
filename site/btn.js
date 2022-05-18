const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
let text = document.querySelector('.text');

console.log(text.style.backgroundColor);

btn1.addEventListener("click", function(){
    console.log('clicked');
    if(text.style.backgroundColor === ''){
        text.style.backgroundColor = 'pink'
    }
    else if(text.style.backgroundColor === 'pink'){
        text.style.backgroundColor = 'yellow'
    }
    else if(text.style.backgroundColor === 'yellow'){
        text.style.backgroundColor = 'lightblue'
    }
    else if(text.style.backgroundColor === 'lightblue'){
        text.style.backgroundColor = 'lightgreen'
    }
    else if(text.style.backgroundColor === 'lightgreen'){
        text.style.backgroundColor = 'pink'
    }
});

btn2.addEventListener("click", function(){
    text.style.backgroundColor = ''
});