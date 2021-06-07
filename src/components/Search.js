import React, { useState } from 'react'
import Axios from 'axios';
import { GoogleComponent } from 'react-google-location' 


const Search = () => {
    const [query, setQuery] = useState("");
    const API_KEY = "AIzaSyA3aI_dMmdhdPS1IEkAUyJEUyRvoYwBc00"
    const u=`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${query}&radius=1500&type=restaurant&keyword=cruise&key=${API_KEY}`
  
    // const url=`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=${query}`
    const getData = () => {
          // const result = await Axios.get(u);
          fetch(u).then(result=>console.log(result))
          
  
          setQuery("");


   
      }

    
      const onChange = e => setQuery(e.target.value);
      
      const onSubmit = e => {
        e.preventDefault();
        getData();
      };

    return (
        <div>
            <form onSubmit={onSubmit} className="search-form">
            
              <input
                type="text"
                name="query"
                onChange={onChange}
                value={query}
                autoComplete="off"
                placeholder="Search"
              />
              <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Search

