document.addEventListener("DOMContentLoaded", function() { // dom content loaded event listener (fires when html is loaded and parsed)
    const demoParagraph = document.getElementById("demo");

    demoParagraph.textContent = "IPL 2026 brings together top cricket teams for exciting matches across major stadiums in India.";

    // toast message
    function showToast(message) {
        const toast = document.createElement("div");

        toast.classList.add("toast");
        toast.textContent = message;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.classList.add("show");
        }, 100);

        setTimeout(() => {
            toast.classList.remove("show");

            setTimeout(() => {
                toast.remove();
            }, 300);
        }, 5000);
    }

    const bookButtons = document.querySelectorAll(".book-btn");
    const bookingSection = document.getElementById("booking");

    // for the smooth scroll
    bookButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            bookingSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            showToast("Booking section opened.");
        });
    });
});
