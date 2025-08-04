const modeBtn = document.getElementById("modeToggle");
if (modeBtn) {
  modeBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode", !isDark);
    modeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  });
}

const roles = [
  { title: "Associate Batch Manager", color: "#358ce9ff" },
  { title: "Learner", color: "#e14076ff" },
  { title: "Frontend Web Developer", color: "#ff9800" },
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
