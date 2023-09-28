import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
const [formData, setformData] = useState({
  name: '',
  cuisine: '',
  photo: '',
  ingredients: '',
  preparation: ''
});
  const handleSubmit = (e) => {
  e.preventDefault();
  const newRecipe = { ...formData, id: Date.now() };
  setRecipes([...recipes, newRecipe]);
  setformData({
    name: '',
    cuisine: '',
    photo: '',
    ingredients: '',
    preparation: ''
  });
};
  const handleChange = (e) => {
    const{name, value} = e.target
    setformData({...formData,[name]:value})
  }
  return (
<form name="create" onSubmit={handleSubmit}>
  <table>
    <tbody>
      <tr>
        <td> 
          <input value ={formData.name} onChange={handleChange} id = 'name' name='name' placeholder='Name' />
        </td>
        <td>
          <input value = {formData.cuisine} onChange={handleChange} id = 'cuisine' name='cuisine' placeholder='Cuisine' />
        </td>
        <td>
          <input value={formData.photo} onChange={handleChange} type='url' name='photo' id = 'photo' placeholder='Photo URL' />
        </td>
        <td>
          <textarea value={formData.ingredients} onChange={handleChange} id = 'ingredients' name='ingredients' placeholder='Ingredients' />
        </td>
        <td>
          <textarea value={formData.preparation} onChange={handleChange} id = 'preparation' name='preparation' placeholder='Preparation' />
        </td>
        <td>
          <button type="submit">Create</button>
        </td>
      </tr>
    </tbody>
  </table>
</form>

  );
}

export default RecipeCreate;
