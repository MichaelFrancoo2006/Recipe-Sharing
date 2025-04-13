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
        url: window.location.href,
      })
      .then(() => {
        console.log("Recipe shared successfully");
      })
      .catch((error) => {
        console.error("Error sharing recipe:", error);
      });
  } else {
    alert(shareText);
  }
}

// Function to share on Facebook
function shareOnFacebook() {
  const url = window.location.href;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  window.open(facebookShareUrl, "_blank");
}

// Function to share on Twitter
function shareOnTwitter() {
  const url = window.location.href;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
}