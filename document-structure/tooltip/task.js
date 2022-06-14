const elementHasHint = document.querySelectorAll('.has-tooltip');

elementHasHint.forEach(element => element.addEventListener('click', (ev) => {
    if (document.querySelector('.tooltip_active')) {
        document.querySelector('.tooltip_active').remove();
        return;
    }
    ev.preventDefault();
    const location = {left, bottom} = ev.target.getBoundingClientRect();
    console.log(location);
    ev.target.insertAdjacentHTML("afterEnd", 
    `<div class="tooltip tooltip_active" style="position:absolute; top:${location.bottom + 5}px; left:${location.left}px">
        ${ev.target.title}
    </div>`);
    setTimeout(hintRemuval, 3000);
}));