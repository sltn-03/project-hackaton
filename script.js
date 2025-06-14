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



function Disabilitas() {
    const button = document.getElementById("klik");

    if (button.checked) {
        document.addEventListener('mouseup', () => {
            const selectedText = window.getSelection().toString().trim();
            if (selectedText) {
                const utterance = new SpeechSynthesisUtterance(selectedText);
                utterance.lang = 'id-ID';
                window.speechSynthesis.speak(utterance);
            }
        });
    } else {
        window.speechSynthesis.cancel();
    }
    setInterval(Disabilitas, 7000)
}

const cari = document.getElementById("search");

cari.addEventListener(function() {
    const keyword = document.Value.toLowerCase();
    const barang = this.querySelectorAll("ul li");

    for (let item of barang) {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(keyword) ? "" : "none";
    }
}) 
