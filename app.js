const questions = document.querySelectorAll(".container-question");
const question = document.querySelectorAll('.fa-angle-down')

const menuBtn = document.getElementById('menu-btn');
    const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active')
})


document.addEventListener('click', (e) => {
    const containerQuestion = e.target.parentElement.parentElement;  
    questions.forEach(el => {
        console.log(el)
        el.classList.remove('active')
    }) 

    if(e.target.matches('.fa-angle-down')){
        containerQuestion.classList.toggle('active')       
    }

    

    
})