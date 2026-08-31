/* --------------------------------
   MOBILE MENU
-------------------------------- */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

    });

}


/* --------------------------------
   CURSOR GLOW
-------------------------------- */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    if (!cursorGlow) return;

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});


/* --------------------------------
   SCROLL REVEAL
-------------------------------- */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* --------------------------------
   NUMBER COUNTER
-------------------------------- */

const counters =
    document.querySelectorAll("[data-target]");


const counterObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;

                const target =
                    Number(counter.dataset.target);

                let current = 0;

                const duration = 1200;

                const increment =
                    target / (duration / 16);


                const updateCounter = () => {

                    current += increment;

                    if (current < target) {

                        counter.textContent =
                            Math.floor(current);

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent = target;

                    }

                };


                updateCounter();

                observer.unobserve(counter);

            });

        },

        {
            threshold: 0.7
        }

    );


counters.forEach((counter) => {

    counterObserver.observe(counter);

});


/* --------------------------------
   CONTACT FORM
-------------------------------- */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            formMessage.textContent =
                "Message received. We'll get back to you soon.";

            contactForm.reset();

        }
    );

}


/* --------------------------------
   CARD MOUSE EFFECT
-------------------------------- */

const cards =
    document.querySelectorAll(".course-card");


cards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 30;

        const rotateY =
            (centerX - x) / 30;


        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});