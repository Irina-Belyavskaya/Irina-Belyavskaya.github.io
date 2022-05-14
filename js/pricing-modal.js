const form = document.querySelector('.pricing-modal-form-wrapper');
const userName = document.getElementById("pricename");
const email = document.getElementById("emailll");
const phone = document.getElementById("pricephone");
const modal = document.getElementById("pricing-modal-wrapper");
const closeModal = document.getElementById("pricing-modal-close");
var openModalBtn;
const priceBtn = document.querySelectorAll(".price__btn");

const orderLabel = document.getElementById("order-accept");
const submitBtn = document.querySelector('.pricing-modal-btn');

const emailPattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
const BYPhonePattern = new RegExp(/^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/);


closeModal.onclick = () => {
    modal.style.display = "none";
    document.body.style = "padding-right: 0"
    document.body.classList.remove('lock');
    
    }

const onOrderBtnClick = (event) => {

    modal.style.display = "flex";
    form.style.display = "flex";
    closeModal.style.display = "flex";
    orderLabel.style.display = "none";
    
    
}

form.addEventListener('change', () => {
    !(userName.value.length === 0) && emailPattern.test(email.value) && BYPhonePattern.test(phone.value) ? submitBtn.disabled = false : submitBtn.disabled = true;
})
let target;
submitBtn.addEventListener('click', (e) => {
    form.reset();
    e.preventDefault();
   
    form.style = 'display:none;'
    showOrderModal();
    closeModalFunc();
    localStorage.setItem(target, true);
});


priceBtn.forEach(item => {
    item.addEventListener('click', (e) => {
        document.body.style = "padding-right: 15px"
        document.body.classList.add('lock');
        target = e.target.id;
        clearTimeout(initial);
        let targetId = localStorage.getItem(target);
        
        if(targetId === "true") {
            form.style = 'display:none;'
            showOrderModal();
            closeModalFunc();
        } else {
            return null;
        }
    })
})

let initial;
function closeModalFunc() {
    
    initial = setTimeout(() => {
        document.body.style = "padding-right: 0"
        document.body.classList.remove('lock');
         orderLabel.style = "display: none";
         closeModal.style = "display: none";
        modal.style = "display:none";
        
    },5000);
    
    
}

function showOrderModal() {
    
    closeModal.style = "display: block"
    orderLabel.style = "display: block";
}
