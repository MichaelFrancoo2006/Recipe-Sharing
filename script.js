// Function to filter recipes based on search input
function filterRecipes() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const recipeList = document.getElementById("recipe-list");
  const recipes = recipeList.getElementsByTagName("li");

  // Loop through each recipe and check if it matches the search input
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i].textContent || recipes[i].innerText;
    if (recipe.toLowerCase().indexOf(searchInput) > -1) {
      recipes[i].style.display = "";
    } else {
      recipes[i].style.display = "none";
    }
  }
}

// Function to share a recipe
function shareRecipe(recipeName) {
  const shareText = `Check out this recipe: ${recipeName}`;
  if (navigator.share) {
    navigator
      .share({
        title: "Recipe Sharing",
        text: shareText,
      })
  }
}
