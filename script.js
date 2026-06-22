const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const profileIntro = document.querySelector("#profil .profile-copy p:first-child");
const impactParagraph = document.querySelectorAll("#profil .profile-copy p")[2];
const footerNote = document.querySelector(".footer-inner p");
const portraitImage = document.querySelector(".portrait img");
const projectNavLink = document.querySelector('.site-nav a[href="#projekte"]');
const publicationNavLink = document.querySelector('.site-nav a[href="#publikationen"]');
const projectKicker = document.querySelector("#projekte .kicker");
const publicationKicker = document.querySelector("#publikationen .kicker");
const portraitUrl = "./assets/dorian-kessler-soft.jpg?v=portrait-file";

if (profileIntro) {
  profileIntro.textContent =
    "Ich bin Professor an der Berner Fachhochschule und am Institut Organisation und Sozialmanagement tätig. Ich arbeite mit verknüpften Daten, um Fragen zu Wirksamkeit, Armut, Familie, Gesundheit und Sozialpolitik empirisch zu untersuchen.";
}

if (footerNote) {
  footerNote.remove();
}

if (projectNavLink) {
  projectNavLink.textContent = "Projekte";
}

if (publicationNavLink) {
  publicationNavLink.textContent = "Publikationen";
}

if (projectKicker) {
  projectKicker.textContent = "Projekte";
}

if (publicationKicker) {
  publicationKicker.textContent = "Publikationen";
}

if (impactParagraph) {
  impactParagraph.textContent =
    "In diesem Rahmen interessieren mich auch generative KI und Predictive Risk Models: als Werkzeuge, die fachliche Entscheide in der Praxis der Sozialen Arbeit unterstützen können, aber fachlich, ethisch und empirisch geprüft werden müssen. Für Wirkungsfragen nutze ich robuste Designs, die Veränderungen vor und nach einer Intervention oder Reform mit geeigneten Vergleichsgruppen betrachten.";
}

if (portraitImage) {
  portraitImage.src = portraitUrl;
}

const styleFix = document.createElement("style");
styleFix.textContent = ".publication-columns{gap:clamp(24px,5vw,74px)}";
document.head.appendChild(styleFix);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const topics = card.dataset.topic || "";
      const visible = filter === "all" || topics.includes(filter);
      card.classList.toggle("is-hidden", !visible);
    });
  });
});
