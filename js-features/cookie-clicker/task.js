const image = document.getElementById('cookie');
let timer = Date.now();
let counter = 0;
function sizeChange() {
    counter += 1;
    let clickTimer = Date.now();
    if (counter % 2 === 0) {
        image.width = ++counter.textContent % 2 ? 650 : 550;
    }
    else {
        image.width -= 100;
    }
    document.getElementById('clicker__counter').textContent = counter + '\n' + 'Скорость клика: ' + ((clickTimer - timer) / 1000).toFixed(2) + ' сек.';
    timer = Date.now();
}
image.onclick = sizeChange;