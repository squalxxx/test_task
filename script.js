function popupPd() {
    var popup = document.getElementById("popup-pd");
    popup.classList.toggle("show");
}

function popupFb() {
    var popup = document.getElementById("popup-fb");
    popup.classList.toggle("show");
}

function popupPdInFb() {
    var popupFb = document.getElementById("popup-fb");
    var popupPd = document.getElementById("popup-pd");
    popupPd.classList.toggle("show");
    popupFb.classList.toggle("show");
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});