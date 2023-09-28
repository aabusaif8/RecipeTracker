import React from "react";

function RecipeItem({ recipe, onDelete }) {
  const handleDelete = () => {
    onDelete(recipe.id);
  };

  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt="Recipe" />
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name="delete" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr> 
  );
}

function RecipeList({ recipes, recipeDelete }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
              onDelete={recipeDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;