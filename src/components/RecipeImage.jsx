import recipeData from './recipe.json';

function RecipeImage() {
  return (
    <>
      {recipeData.map((recipe, index) => {
        return (
          <div key={index}>
            <img src={recipe.recipeImage} alt={recipe.name} className="recipeImage" />
          </div>
        );
      })}
    </>
  );
}
 
export default RecipeImage;
 
//import json file for the data
//apply css for className recipeImage
 