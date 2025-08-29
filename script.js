var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// ------------access dark mode----------------
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// ---------side menu ----------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

// --------------Show more access-------------

const button = document.querySelector(".show-more");
const hiddenContents = document.querySelectorAll(".more-content");

button.addEventListener("click", () => {
  hiddenContents.forEach(item => item.classList.toggle("hidden"));
  button.textContent = button.textContent.trim() === "See More" ? "See Less" : "See More";
});

// --------------reset contact form-------------

function submitForm() {
  document.getElementById("myform").submit();
  document.getElementById("myform").reset();
}

// ---------------------typed js-------------------------

const typed = new Typed(".multiple-text", {
  strings: ["Assosiate Analyst", "Frontend Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});
