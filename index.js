function selectWebdevProject() {
  bioProjectsGrid.classList.add("hidden");
  selectBioProject.classList.remove("selected");
  webProjectsGrid.classList.remove("hidden");
  selectWebProject.classList.add("selected");
}

function selectBioinfoProject() {
  webProjectsGrid.classList.add("hidden");
  selectWebProject.classList.remove("selected");
  bioProjectsGrid.classList.remove("hidden");
  selectBioProject.classList.add("selected");
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

const selectWebProject = document.getElementById("webdev-select");
const selectBioProject = document.getElementById("bio-select");
const webProjectsGrid = document.querySelector(".projects-grid");
const bioProjectsGrid = document.querySelector(".bioinformatics-projects");
const skillSecond = document.getElementById("skill-second");
const lastGridItem = document.getElementById("last-grid-item");

selectWebProject.addEventListener("click", selectWebdevProject);
selectBioProject.addEventListener("click", selectBioinfoProject);

window.addEventListener("resize", () => {
  if (window.innerWidth <= 800) {
    lastGridItem.classList.remove("hidden");
    skillSecond.classList.add("hidden");
  } else {
    lastGridItem.classList.add("hidden");
    skillSecond.classList.remove("hidden");
  }
});
