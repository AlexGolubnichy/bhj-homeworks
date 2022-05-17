const banners = document.querySelectorAll('.reveal');
const viewPortSize = window.innerHeight;

window.addEventListener('scroll', function() {
    for (let item of banners) {
        const coord = {tob, bottom} = item.getBoundingClientRect();
        if ((viewPortSize - coord.top >= 0) && (coord.bottom >= 0)) { 
            item.classList.add('reveal_active');
        }
        else {
            item.classList.remove('reveal_active');
        }
    }
});