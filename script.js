// Toggle class active --- tadinya ada jadi gada atau tadinya gada jadi ada
const navbarNav = document.querySelector('.navbar-nav');

// Ketika #menu diklik
document.querySelector('#menu-lain').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik di luar side bar tapi side bar nutup (tanpa harus klik ikon menu)

const menulain = document.querySelector('#menu-lain'); //sidebar dinamain menulain

document.addEventListener('click', function(e) {
    if(!menulain.contains(e.target) //saat bukan menulain yang diklik
        && //dan 
    !navbarNav.contains(e.target)) //saat bukan navbarnav yang diklik (! artinyaa kecuali)
    {
        navbarNav.classList.remove('active'); //maka class yang active hilang
    }
});


    document.addEventListener("DOMContentLoaded", function() {
        var textarea = document.getElementById("comments");
        if (textarea.value.trim() === "") {
            textarea.value = ""; // Pastikan tidak ada konten yang tidak terlihat
        }
    });



