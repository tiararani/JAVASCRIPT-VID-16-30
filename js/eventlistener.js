function coba() {
    a = document.querySelector(".isi").innerHTML = "Belajar Event Listener";
    console.log("coba eventlistener");
}

//judul.addEventListener("click", coba);

//judul.onmouseover = coba;

judul.onmouseover = function() {
    console.log("coba function anonymous");
};
