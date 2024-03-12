import recipeData from "./recipe.json";

function RecipeName() {
  return (
    <>
      {recipeData.map((recipe, index) => {
        return (
          <h1 key={index}>{recipe.name}</h1>
        );
      })}
    </>
  )
}

export default RecipeName;

//import return the name of the recipe as a level 1 header