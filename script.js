// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Waitlist form (demo)
// Hook this up to Google Forms / Mailchimp later.
const form = document.getElementById("waitlist-form");
const statusEl = document.getElementById("form-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const role = form.querySelector('input[name="role"]:checked')?.value || "";
  const concerns = document.getElementById("concerns").value.trim();

  if (!name || !email || !role) return;

  // For now, just show success message
  statusEl.textContent = `Thanks, ${name}! You’re on the list (${role}).`;

  // Optional: log to console so you can see collected values
  console.log({ name, email, role, concerns });

  form.reset();
});
