const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = Array.from(document.querySelectorAll(".panel"));

function showPanel(hash) {
  const targetHash = hash && document.querySelector(hash) ? hash : "#message";

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.getAttribute("href") === targetHash);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("active", `#${panel.id}` === targetHash);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    event.preventDefault();
    const hash = tab.getAttribute("href");
    history.pushState(null, "", hash);
    showPanel(hash);
  });
});

window.addEventListener("popstate", () => showPanel(window.location.hash));

document.getElementById("year").textContent = new Date().getFullYear();
showPanel(window.location.hash);
