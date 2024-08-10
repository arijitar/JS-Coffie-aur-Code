const btns = document.querySelectorAll('.button')
const bdy = document.querySelector("body")

btns.forEach((btn)=>{
    console.log(btns);
    btn.addEventListener('click', (event)=>{
        console.log(event);
        console.log(event.target);
    })
})