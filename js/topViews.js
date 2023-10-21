const topViewOptions = document.querySelectorAll(".top-views-option");
const topViewItems = document.querySelectorAll(".top-view-item");

// SHOW TOP VIEW WHILE CLICK ON ONE OPTION (DAY, WEEK, MONTH, YEAR)
topViewOptions.forEach((option) => {
  option.addEventListener("click", (option) => {
    let optionId = option.target.getAttribute("id");
    let targetOption = optionId.split("-");
    targetOption = targetOption[targetOption.length - 1];

    showTopViewItemInSpecificTime(targetOption);
  });
});

function showTopViewItemInSpecificTime(opt) {
  topViewItems.forEach((item) => {
    let itemOptions = item.dataset.option;
    if (itemOptions.includes(opt)) {
      item.classList.remove("hide-item-js");
    } else {
      item.classList.add("hide-item-js");
    }
  });
}
