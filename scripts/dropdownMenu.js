function openDropdown() {
  const dropMenu = document.querySelector(".dropdown-menu");
  if (dropMenu.style.display === "block") {
    dropMenu.style.display = "none";
  } else {
    dropMenu.style.display = "block";
  }
  console.warn("Dropdown menu toggled");
}