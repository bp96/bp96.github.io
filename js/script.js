//  Select divs for websites/data science and their buttons
let websitesElement = document.getElementById("websites-section");
let dataScienceElement = document.getElementById("data-science-section");
let dataScienceBtn = document.getElementById("data-science-btn");
let websitesBtn = document.getElementById("websites-btn");

function hideAndShowWebsites() {
  websitesElement.style.display = "block";
  dataScienceElement.style.display = "none";

  dataScienceBtn.classList.remove("active");
  websitesBtn.classList.add("active");

}

function hideAndShowDataScience() {
  dataScienceElement.style.display = "block";
  websitesElement.style.display = "none";
  dataScienceBtn.classList.add("active");
  websitesBtn.classList.remove("active");

}
