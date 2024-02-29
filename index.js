// const showBtn = document.querySelectorAll('.show-model');
// const closeBtn = document.querySelector('.close');
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');

// // function
// const openModal = function(){
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// }

// const closeModel = function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// }

// // event
// showBtn.forEach(element => {
//     element.addEventListener('click', openModal);
// });
// closeBtn.addEventListener('click', closeModel);

// // handle click on the overlay
// overlay.addEventListener('click', closeModel);

// // handle keydown Escape 
// document.addEventListener('keydown', (e)=>{
//     console.log(e);

//     if(e.key === 'Escape' && !modal.classList.contains('hidden')){
//         closeModel();
//     }
// });

const showBtn = document.querySelectorAll('.show-model');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// function
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
const showModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// event
showBtn.forEach(btn =>{
    btn.addEventListener('click', showModal);
})
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (e)=>{
    console.log(e);
    
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();
})





