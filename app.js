// 
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
const navButtons = document.querySelectorAll(".nav-btn");

const bookingSection = document.getElementById("booking");


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