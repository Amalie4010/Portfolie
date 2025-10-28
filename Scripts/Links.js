document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
    <a href="Documents/CV.pdf" download="Amalie_Holten_CV">
        <button class="item">Download CV</button>
    </a>
    <a href="https://github.com/Amalie4010">
        <img class="item" src="Graphics/Logos/GitHub.svg" alt="GitHub">
    </a>
    <a href="https://www.linkedin.com/in/amalie-holten-nielsen-2ba37835b/">
        <img class="item" src="Graphics/Logos/LinkedIn.png" alt="LinkedIn">
    </a>
    <a href="mailto:amalie.holten.nielsen@outlook.dk">
        <img class="item last" src="Graphics/Icons/mail.svg" alt="Mail">
    </a>
  `;
  const headerContainer = document.getElementById("links");
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
  }
});