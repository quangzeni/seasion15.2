const toggleLinkElement = document.getElementById("toggle-link");
const searchCategoryElement = document.getElementById("search-category");

toggleLinkElement.addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của link

  if (searchCategoryElement.style.display === "none") {
    searchCategoryElement.style.display = "block";
    toggleLinkElement.textContent = "Ẩn tìm kiếm nâng cao";
  } else {
    searchCategoryElement.style.display = "none";
    toggleLinkElement.textContent = "Tìm kiếm nâng cao";
  }
});
