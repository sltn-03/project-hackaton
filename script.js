let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active')
            });
        }
    });
}

// function txtSpeech(){
//     const btxt = document.querySelector("b");
//     const button = document.getElementById("onoff");
//     let is_on = true;

//     button.addEventListener("click", () => {
//         if (is_on =){
//             btxt.textContent = "ON";
//             is_on = false;
//         } else{
//             btxt.textContent = "OFF";
//             is_on =  true;
//         }
//     })
// }
