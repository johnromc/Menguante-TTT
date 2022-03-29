const d= document,
$panel = d.querySelector('.panel'),
$panelBtn = d.querySelector('.hamburger');

$panelBtn.addEventListener('click', (e)=>{
    $panel.classList.toggle('is-active');
    $panelBtn.classList.toggle('is-active');
})