const btns = document.querySelectorAll('.button')
const bdy = document.querySelector('body')

btns.forEach((btn)=>{
    console.log(btn);
    btn.addEventListener('click', (event)=>{
        console.log(event);
        console.log(event.target);
        if(event.target.id == 'grey'){
            bdy.style.backgroundColor = event.target.id;
        }
        if(event.target.id == 'white'){
            bdy.style.backgroundColor = event.target.id;
        }
        if(event.target.id == 'blue'){
            bdy.style.backgroundColor = event.target.id;
        }
        if(event.target.id == 'purple'){
            bdy.style.backgroundColor = event.target.id;
        }
    })
})