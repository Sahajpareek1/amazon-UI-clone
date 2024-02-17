const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-pre');
const nxt_btn = document.querySelector('.control-nxt');

let n = 0;

function change() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'; // Corrected the casing here
    }
    imgs[n].style.display = 'block';
}

change();

prev_btn.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    change();
});
nxt_btn.addEventListener('click', (e) => {
    if (n < imgs.length -1) {
        n++;
    } else {
        n = 0;
    }
    change();
});


const scrollcontainer = document.querySelectorAll('.products');

for (const item of scrollcontainer){
    item.addEventListener('wheel',(evt)=>{
       evt.preventDefault();
       item.scrollLeft += evt.deltaY;
    })
}
