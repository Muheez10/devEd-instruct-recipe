import React from "react";
import style from './Recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipe}>
           <h1>{title}</h1>
           <p style={{paddingTop:'10px'}}>{calories}</p>
              {ingredients.map(ingredient =>(
                  <li style={{listStyleType:"none",textAlign:"justify",paddingTop:'5px'}}>{ingredient.text}</li>
              ))} 
           <img src={image} style={{marginTop:'10px'}} alt={title}></img>
        </div>
    );
}

export default Recipe;