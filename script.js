const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const profileIntro = document.querySelector("#profil .profile-copy p:first-child");
const footerNote = document.querySelector(".footer-inner p");
const portraitImage = document.querySelector(".portrait img");
const bfhPortraitUrl =
  "https://www.bfh.ch/.imaging/mte/bfh-theme/profile-xs/dam/people/k/kld1.jpg/jcr%3Acontent/kld1.jpg";

if (profileIntro) {
  profileIntro.textContent =
    "Ich bin Professor an der Berner Fachhochschule und am Institut Organisation und Sozialmanagement tätig. Ich arbeite mit verknüpften Daten, um Fragen zu Wirksamkeit, Armut, Familie, Gesundheit und Sozialpolitik empirisch zu untersuchen.";
}

if (footerNote) {
  footerNote.remove();
}

if (portraitImage) {
  portraitImage.src = bfhPortraitUrl;
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
