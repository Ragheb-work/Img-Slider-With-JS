// Get slider item array.from{ES6 Feature}
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// get number of slides
var slidesCount = sliderImages.length;

// Set current slide
var currentSlide = 1;

// Slide number Element
var slideNumberElement = document.getElementById("slide-number");

//Previous And Next Buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

//Handle click on previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
let paginationElement = document.createElement("ul");

//Set ID On Created Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Item Based On Slide Count
for (let i = 1; i <= slidesCount; i++) {
  // Create The LI
  let paginationItem = document.createElement("li");

  // Set Custom Attr
  paginationItem.setAttribute("data-index", i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  //Append Item To The Main List
  paginationElement.appendChild(paginationItem);
}

//Add The Created Element To The Page
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL
let paginationCreatedUl = document.getElementById("pagination-ul");

// Get pagination item array.from{ES6 Feature}
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop Through All Bullets Item
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

// Trigger The Checker Function
theChecker();

//Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

//Previous Slide Function
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// Create The Checker Function
function theChecker() {
  //Set The Slide Number
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " of " + slidesCount;
  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].className = "active";

  // Set Active Class On Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check If Current Slide Is The First
  if (currentSlide == 1) {
    // Add Disabled Class On Previous Button
    prevButton.classList.add("disabled");
  } else {
    // remove Disabled Class From Previous Button
    prevButton.classList.remove("disabled");
  }

  // Check If Current Slide Is The Last
  if (currentSlide == slidesCount) {
    // Add Disabled Class On Next Button
    nextButton.classList.add("disabled");
  } else {
    // remove Disabled Class From Next Button
    nextButton.classList.remove("disabled");
  }
}

// Remove All Active Classes From Images And Pagination
function removeAllActive() {
  //Loop Through Images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  // Loop Through Pagination Bullets
  paginationBullets.forEach(function (el) {
    el.classList.remove("active");
  });
}
