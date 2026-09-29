// =========================
// TYPING EFFECT
// =========================

const typingText =
    document.getElementById('typing-text');

const names = [
    'Shinta Ayuwidati',
    'Mahasiswa Sistem Informasi',
    'Bercita-cita menjadi Web Developer'
];

let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeEffect() {

    if (!typingText) {
        return;
    }

    const currentName =
        names[nameIndex];


    if (isDeleting) {

        typingText.textContent =
            currentName.substring(
                0,
                charIndex - 1
            );

        charIndex--;

    } else {

        typingText.textContent =
            currentName.substring(
                0,
                charIndex + 1
            );

        charIndex++;
    }


    let delay =
        isDeleting ? 50 : 100;


    if (
        !isDeleting &&
        charIndex === currentName.length
    ) {

        delay = 2000;

        isDeleting = true;

    } else if (
        isDeleting &&
        charIndex === 0
    ) {

        isDeleting = false;

        nameIndex =
            (nameIndex + 1) %
            names.length;

        delay = 500;
    }


    setTimeout(
        typeEffect,
        delay
    );
}


typeEffect();


// =========================
// DARK MODE / LIGHT MODE
// =========================

const themeToggle =
    document.getElementById(
        'theme-toggle'
    );


if (themeToggle) {

    const savedTheme =
        localStorage.getItem(
            'theme'
        );


    if (savedTheme === 'dark') {

        document.body.classList.add(
            'dark-mode'
        );

        themeToggle.textContent =
            '☀️';
    }


    themeToggle.addEventListener(
        'click',
        function() {

            document.body.classList.toggle(
                'dark-mode'
            );


            if (
                document.body.classList.contains(
                    'dark-mode'
                )
            ) {

                themeToggle.textContent =
                    '☀️';

                localStorage.setItem(
                    'theme',
                    'dark'
                );

            } else {

                themeToggle.textContent =
                    '🌙';

                localStorage.setItem(
                    'theme',
                    'light'
                );
            }

        }
    );
}


// =========================
// ACTIVE NAV LINK
// =========================

const currentPage =
    window.location.pathname
        .split('/')
        .pop() ||
    'index.html';


document.querySelectorAll(
    '.nav-links a'
).forEach(link => {

    if (
        link.getAttribute('href') ===
        currentPage
    ) {

        link.classList.add(
            'active'
        );
    }

});


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById(
        'contact-form'
    );


if (contactForm) {

    contactForm.addEventListener(
        'submit',
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    'name'
                ).value;


            alert(
                `Terima kasih, ${name}! Pesan kamu berhasil dikirim.`
            );


            contactForm.reset();

        }
    );

}


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
    'Website Shinta berhasil dijalankan!'
);