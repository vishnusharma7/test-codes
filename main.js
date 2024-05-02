AOS.init({
    offset: 50, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500,// values from 0 to 3000, with step 50ms
  });

  
const toggleBtn = document.getElementById("mobile-menu-icon");
const toggleBtnIcons = toggleBtn.querySelectorAll("svg");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtnIcons[0].style.display = isOpen ? "none" : "flex";
  toggleBtnIcons[1].style.display = isOpen ? "flex" : "none";
};