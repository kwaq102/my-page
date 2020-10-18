const burger = document.querySelector('.btn-burger');
const nav = document.querySelector('.navigation');


burger.addEventListener('click', ()=>{
        burger.classList.toggle('active');
        
        if(burger.classList.contains('active')){
            nav.classList.add('showNav')
        }else{
            nav.classList.remove('showNav')
        }
});

