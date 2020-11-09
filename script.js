const imgImprovise = document.getElementById("img-improvise");
const popup = document.getElementById('pop-up');
let playOnce = true;

window.addEventListener('scroll', function () {
    
    // console.log( window.innerHeight ); Valeur hauteur page à partir du nav
    // console.log( window.scrollY );   Valeur scroll
    // console.log( document.body.offsetHeight ); Valeur total de la page

    scrollValue = (window.innerHeight+ window.scrollY) /(document.body.offsetHeight);
    console.log(scrollValue);

    // IMG APPEAR
    if ( scrollValue > 0.45  ) {
        imgImprovise.style.opacity = '1';
        imgImprovise.style.transform = 'none';
    }

    // NEWSLETTER POPUP
    function playFunctionOnce() {
        if ( scrollValue > 0.84 && playOnce) {
            setTimeout( ()=>{
                popup.style.opacity = '1';
                popup.style.transform = 'none';
            },1500)
            playOnce = false;
        }
    };
    playFunctionOnce();
})

document.getElementById('close').addEventListener('click', () => {
    popup.style.opacity = '0';
    popup.style.transform = 'translateX(500px)';
})