function ShowModal (id,title) {
    const button = document.getElementById(id);

    const newTitle = document.getElementById('model-title');
    newTitle.innerText = title;

    const modal = document.getElementById('wrapper-modal');
    
    const scrollBar = document.getElementById('modal-window');
    
    modal.classList.add('open');
    scrollBar.scrollTo(0,0);
    

    const overlay = document.getElementById('overlay');
    
    overlay.addEventListener('click',function(){
        modal.classList.remove('open');
    });
}