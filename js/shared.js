const $ = document;
const burgerMenu = document.querySelector(".menu-button");
const bottomBarMenu = document.querySelector(".bottom-bar-menu");
const categoryItemBottom = document.getElementById("category-item-bottom-menu");
const categoryListBottomBar = document.querySelector(
  ".categories-list-bottom-bar"
);
const searchButton1 = $.querySelector(".search-icon-container");
const searchBoxContainer = $.querySelector(".search-box-container");
const closeSearchBoxButton = $.querySelector(".close-search-box");
const allContentOfPages = $.querySelector(".all-content");
const goTopButton = $.querySelector(".icon-go-up");
const preloadAnimation = $.querySelector(".preload-animation");

let bottomBarMenuOpen = false;
let categoryListBottomBarOpen = false;

// SHOW BOTTOM BAR WHILE CLICK ON BURGER MENU
burgerMenu.addEventListener("click", () => {
  if (bottomBarMenuOpen) {
    bottomBarMenu.style.height = "0";
    bottomBarMenuOpen = false;
  } else {
    bottomBarMenu.style.height = `${bottomBarMenu.scrollHeight}px`;
    bottomBarMenuOpen = true;
  }
});

// SHOW CATEGORY LIST IN BOTTOM BAR
const categoriesAcordionAsync = () => {
  return new Promise((resolve, reject) => {
    if (categoryListBottomBarOpen) {
      categoryListBottomBar.style.height = "0";
      categoryListBottomBar.style.margin = "0";
      categoryListBottomBarOpen = false;
    } else {
      categoryListBottomBar.style.height = `${categoryListBottomBar.scrollHeight}px`;
      categoryListBottomBar.style.margin = "4px 0 4px 24px";
      categoryListBottomBarOpen = true;
    }
    resolve();
  });
};

const changeBottomBarAccordion = () => {
  return new Promise((resolve, reject) => {
    bottomBarMenu.style.height = `${bottomBarMenu.scrollHeight}px`;
    resolve();
  });
};

const acordionBottomBar = () =>
  categoriesAcordionAsync().then(changeBottomBarAccordion);

categoryItemBottom.addEventListener("click", () => {
  if (categoryListBottomBarOpen) {
    categoryListBottomBar.style.height = "0";
    bottomBarMenu.style.height = `${
      bottomBarMenu.scrollHeight - categoryListBottomBar.scrollHeight
    }px`;
    categoryListBottomBar.style.margin = "0";
    categoryListBottomBarOpen = false;
  } else {
    categoryListBottomBar.style.height = `${categoryListBottomBar.scrollHeight}px`;
    bottomBarMenu.style.height = `${
      bottomBarMenu.scrollHeight + categoryListBottomBar.scrollHeight
    }px`;
    categoryListBottomBar.style.margin = "4px 0 4px 24px";
    categoryListBottomBarOpen = true;
  }
});

// SHOW SEARCH BOX
searchButton1.addEventListener("click", () => {
  searchBoxContainer.classList.remove("hide-search-box-animation");
  searchBoxContainer.classList.add("show-search-box-animation");
  searchBoxContainer.addEventListener("animationstart", () => {
    allContentOfPages.style.transition = "1.5s";
    allContentOfPages.style.filter = "blur(10px)";
  });
});

// CLOSE SEARCH BOX AND HIDE IT
closeSearchBoxButton.addEventListener("click", () => {
  searchBoxContainer.classList.remove("show-search-box-animation");
  searchBoxContainer.classList.add("hide-search-box-animation");
  searchBoxContainer.addEventListener("animationstart", () => {
    allContentOfPages.style.transition = "1.5s";
    allContentOfPages.style.filter = "blur(0px)";
  });
});

// SCROLL TOP BY CLICK ON ARRAW UP BUTTON
goTopButton.addEventListener("click", () => {
  $.body.scrollTop = 0; // FOR SAFARI
  $.documentElement.scrollTop = 0; // FOR CHROME, FIREFOX
});

// HIDE PRELOAD ANIMATION WHILE WEBSITE LOADED COMPELETLY
window.addEventListener("load", () => {
  preloadAnimation.style.display = "none";
});
