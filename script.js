// Create the button element dynamically
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "↑";
scrollBtn.setAttribute("id", "backToTop");
scrollBtn.style.cssText = "position:fixed; bottom:20px; right:20px; display:none; border-radius:50%; padding:10px 15px; border:none; background:#0d6efd; color:white; cursor:pointer; z-index:1000;";
document.body.appendChild(scrollBtn);

// Show/Hide button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

// Scroll to top when clicked
scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
document.getElementById("year").textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('section');
hiddenElements.forEach((el) => observer.observe(el));
