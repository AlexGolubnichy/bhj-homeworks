const rotator = document.querySelectorAll('span.rotator > .rotator__case');
let textColor = rotator[0].getAttribute('data-color'); 
rotator[0].setAttribute('style', "color: " + textColor);
let flag = true;

function rotatorToggle() {
    if (flag) {
        flag = false;
        let element;
        const currentTextBlock = document.querySelector('.rotator__case_active');
        let nextTextBlock = currentTextBlock.nextElementSibling;
        nextTextBlock ? element = nextTextBlock : element = rotator[0];
        timeOut = element.getAttribute('data-speed');    
        currentTextBlock.classList.remove('rotator__case_active');
        textColor = element.getAttribute('data-color');
        element.classList.add('rotator__case_active');
        element.setAttribute('style', "color: " + textColor);
        setTimeout(() => {
            flag = true;
        }, timeOut);
    }
}

const timer1 = setInterval(() => rotatorToggle(), 1);