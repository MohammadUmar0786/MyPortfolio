const modeBtn = document.getElementById("modeToggle");
if (modeBtn) {
  modeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode", !isDark);
    modeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  });
}

const roles = [
  { title: "Frontend Developer Enthusiast", color: "#007bff" },
  { title: "Associate Batch Manager", color: "#e91e63" },
  { title: "Business Analyst Enthusiast", color: "#4caf50" },
  { title: "Youtube Educator", color: "#ff9800" },
];

let roleIndex = 0;
const roleElement = document.getElementById("dynamic-role");

function changeRole() {
  if (!roleElement) return;
  roleElement.style.opacity = 0;
  setTimeout(() => {
    roleElement.textContent = roles[roleIndex].title;
    roleElement.style.color = roles[roleIndex].color;
    roleElement.style.opacity = 1;
    roleIndex = (roleIndex + 1) % roles.length;
  }, 300);
}

if (roleElement) {
  setInterval(changeRole, 2500);
}
