import React, { Component } from 'react';
import './recipe.css'

interface RecipeProps {
  title: string;
  ingredients: string[];
  instructions: string;
  imageUrl: string;
}

class Recipe extends Component<RecipeProps> {
  render() {
    const { title, ingredients, instructions, imageUrl } = this.props;

    return (
      <div className="recipe-container">
        <h2 className="recipe-title">{title}</h2>
        <img className="recipe-image" src={imageUrl} alt={title} />
        <div className="recipe-details">
          <h3>Ingredients:</h3>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{instructions}</p>
        </div>
      </div>
    );
  }
}

export default Recipe;
