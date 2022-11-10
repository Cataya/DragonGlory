function myFunction(D) {
    var x = document.getElementById(D);
    if (x.style.display === "none") {
        x.style.display = "block";
        href="#Menu";
    } else {
        x.style.display = "none";
    }
}