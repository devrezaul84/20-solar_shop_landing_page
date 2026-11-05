const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

const quoteForm = document.querySelector("#quoteForm");
const formNote = document.querySelector("#formNote");

quoteForm.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(quoteForm);
  const name = String(formData.get("name") || "").trim();
  formNote.textContent = `Thanks${name ? ", " + name : ""}! Your demo enquiry is ready. Connect this form to your email or CRM to receive real submissions.`;
  formNote.setAttribute("role", "status");
  quoteForm.reset();
});
