/* =========================================
   EDSY GRAPHICS JAVASCRIPT
========================================= */


// =========================================
// SMOOTH SCROLLING
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// =========================================
// CONTACT FORM
// =========================================

const form =
    document.getElementById("contactForm");


if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for contacting Edsy Graphics! " +
            "Please contact us on WhatsApp to complete your request."
        );

        form.reset();

    });

}


// =========================================
// PORTFOLIO IMAGE CLICK
// =========================================

const portfolioImages =
    document.querySelectorAll(
        ".portfolio-item img"
    );


portfolioImages.forEach(function(image) {

    image.addEventListener("click", function() {

        window.open(
            image.src,
            "_blank"
        );

    });

});   
// =========================================
// PORTFOLIO FILTER
// =========================================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const portfolioItems =
    document.querySelectorAll(".portfolio-item");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active state
        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        // Activate clicked button
        this.classList.add("active");


        // Get selected category
        const filter =
            this.getAttribute("data-filter");


        // Filter portfolio
        portfolioItems.forEach(function(item) {

            const category =
                item.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                item.classList.remove("hide");

            } else {

                item.classList.add("hide");

            }

        });

    });

});
// ========================================
// PORTFOLIO IMAGE LIGHTBOX
// ========================================

const lightboxImages = document.querySelectorAll(".portfolio-item img");

lightboxImages.forEach(function (image) {

    image.addEventListener("click", function () {

        // Create lightbox
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");

        // Create large image
        const largeImage = document.createElement("img");
        largeImage.src = image.src;
        largeImage.alt = image.alt;

        // Create close button
        const closeButton = document.createElement("button");
        closeButton.innerHTML = "&times;";
        closeButton.classList.add("lightbox-close");

        // Add elements
        lightbox.appendChild(closeButton);
        lightbox.appendChild(largeImage);

        // Add lightbox to page
        document.body.appendChild(lightbox);

        // Close button
        closeButton.addEventListener("click", function () {
            lightbox.remove();
        });

        // Close when clicking outside image
        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.remove();
            }
        });

        // Close with Escape key
        function closeWithEscape(event) {
            if (event.key === "Escape") {
                lightbox.remove();
                document.removeEventListener("keydown", closeWithEscape);
            }
        }

        document.addEventListener("keydown", closeWithEscape);

    });

});
// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(
    ".portfolio-item, .service-card, .about-content, .contact-content, .section-title"
);

const revealObserver = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});
// ========================================
// MOBILE MENU
// ========================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active");

        if (mainNav.classList.contains("active")) {
            menuToggle.innerHTML = "✕";
            menuToggle.setAttribute("aria-label", "Close navigation");
        } else {
            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute("aria-label", "Open navigation");
        }
    });

    // Close menu after clicking a navigation link
    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            mainNav.classList.remove("active");
            menuToggle.innerHTML = "☰";
            menuToggle.setAttribute("aria-label", "Open navigation");
        });
    });
}
// ========================================
// CONTACT FORM → WHATSAPP
// ========================================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = contactForm.querySelector('input[placeholder="Your Name"]').value;
        const email = contactForm.querySelector('input[placeholder="Your Email"]').value;
        const phone = contactForm.querySelector('input[placeholder="Phone / WhatsApp"]').value;
        const service = contactForm.querySelector("select").value;
        const message = contactForm.querySelector("textarea").value;

        const whatsappMessage =
            "Hello Edsy Graphics! 👋\n\n" +
            "I would like to request a design.\n\n" +
            "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Phone / WhatsApp: " + phone + "\n" +
            "Service: " + service + "\n\n" +
            "Project Details:\n" + message;

        const whatsappURL =
            "https://wa.me/233279469232?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(whatsappURL, "_blank");
    });
}