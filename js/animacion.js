
const $error = document.querySelector('.error');
const d = document,
$chats = d.querySelector('.chat'),
$contact = d.querySelector('.contact');

let animacion = setTimeout(() => {
 $error.classList.add('play')
    
}, 1000);



$chats.addEventListener('click', (e)=>{
    $chats.classList.toggle('active')
    $contact.classList.toggle('active')
})