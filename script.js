const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const profileIntro = document.querySelector("#profil .profile-copy p:first-child");

if (profileIntro) {
  profileIntro.textContent =
    "Ich bin Professor an der Berner Fachhochschule und am Institut Organisation und Sozialmanagement tätig. Ich arbeite mit verknüpften Daten, um Fragen zu Wirksamkeit, Armut, Familie, Gesundheit und Sozialpolitik empirisch zu untersuchen.";
}

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
