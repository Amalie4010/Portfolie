document.addEventListener("DOMContentLoaded", () => {
  const headerHTML = `
        <div>
            <a href="Index.html">
                <h2 id="name" class="big">Amalie Holten</h2>
            </a>
        </div>
        <div id="buttons">
            <a href="Profile.html">
                <button>About me</button>
            </a>
            <a href="Projects.html">
                <button>Projects</button>
            </a>
        </div>
        <div id="menu">
            <img id="menu" src="Graphics/Icons/menu-burger.svg">
        </div>
  `;
  const headerContainer = document.getElementById("header");
  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
  }
});

// <a href="Contact.html">
//     <button>Contact</button>
// </a>