import './styling.css';
import recipeData from './recipe.json'

function AuthorInfo() {
  return (
    <>
      {recipeData.map((author, index) => {
        const recipeAuthor = <h2>{author.name}</h2>;
        const recipeAuthorImage = <img src={author.recipeImage} alt={author.name} className="authorImage" />;
        const recipeWebsite = <a href={author.website}>{author.website}</a>;

        return (
          <div key={index}>
            {recipeAuthorImage}
            {recipeAuthor}
            {recipeWebsite}
          </div>
        );
      })}
    </>
  );
} 
export default AuthorInfo;
 
//import styles.css
//import json file for author info
//image, name, website
//css for styling image