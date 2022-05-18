
const btn2 = document.querySelector('#btn2');
let text = document.querySelector('.text');
var quotes = ["Mission accomplished", "Good job", "Its a rainy day today", "Have a nice day"];


document.getElementById("btn1").addEventListener("click", function(){
    console.log('clicked');
    var quote = quotes[ Math.floor( Math.random() * quotes.length ) ];
    var text = document.querySelector("#text");
    text.innerHTML = quote;

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