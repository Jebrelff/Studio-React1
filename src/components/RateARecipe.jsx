let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe({ rating }) {
  const GiveRating = () => {
    return <h3> {stars[rating - 1]} </h3>;
  }

  return (
    <>
      {rating >=1 && rating <= 5 ? 
          <GiveRating /> 
        : 
          ''
      }
    </>
  );
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
