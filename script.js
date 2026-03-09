const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const form = document.getElementById("waitlist-form");
const statusEl = document.getElementById("form-status");

if (form && statusEl) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const role = form.querySelector('input[name="role"]:checked')?.value || "";
    const concerns = document.getElementById("concerns")?.value.trim() || "";

    if (!name || !email) {
      statusEl.textContent = "Please enter your name and email.";
      return;
    }

    if (!role) {
      statusEl.textContent = "Please select what best describes you.";
      return;
    }

    statusEl.textContent = `Thanks, ${name}! You're on the waitlist (${role}).`;
    console.log({ name, email, role, concerns });
    form.reset();
  });
}
