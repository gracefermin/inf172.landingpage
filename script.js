// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Waitlist form (demo)
// Note: This does NOT save anywhere yet (GitHub Pages is static).
// Later you can connect it to Google Forms / Mailchimp / ConvertKit.
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
      statusEl.textContent = "Please select what best describes you (Parent / Teacher / Admin / Other).";
      return;
    }

    statusEl.textContent = `Thanks, ${name}! You're on the waitlist (${role}).`;

    // Helpful for testing
    console.log({ name, email, role, concerns });

    form.reset();
  });
}
