import React, { useState } from 'react'
import Axios from 'axios'

import { v4 as uuidv4 } from "uuid";
import Recipe from "./Recipe";

const RecipeList = () => {

        const [query, setQuery] = useState("");
        const [recipes, setRecipes] = useState([]);
        const APP_ID = "4e9f05eb";
        const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
      
        const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
      
        const getData = async () => {
          if (query !== "") {
            const result = await Axios.get(url);
           
            console.log(result);
            setRecipes(result.data.hits);
            setQuery("");
        }
            
        };
      
        const onChange = e => setQuery(e.target.value);
      
        const onSubmit = e => {
          e.preventDefault();
          getData();
        };
      
        return (
          <div className="App">
            <h1>Food Searching App</h1>
            <form onSubmit={onSubmit} className="search-form">
             <input
                type="text"
                name="query"
                onChange={onChange}
                value={query}
                autoComplete="off"
                placeholder="Search Food"
              />
              <input type="submit" value="Search" />
            </form>
            <div className="recipes">
              {recipes !== [] &&
                recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
            </div>
        </div>
    )
}

export default RecipeList
