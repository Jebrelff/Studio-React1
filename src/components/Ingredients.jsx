import recipeData from './recipe.json';

function IngredientList() {
  return (
    <>
      {recipeData.map((recipe, index) => {
        return (
          <div key={index}>
            {recipe.ingredients.map((ingredient, index) => {
              return (
                <h3 key={index}>{ingredient}</h3>
              )
            })} 
          </div>
        )
      })}
    </>
  )
}
 
export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 