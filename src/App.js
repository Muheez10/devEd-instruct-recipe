  import React,{ useState, useEffect} from 'react';
  import Header from './component/Header';
  import Form from './component/Form';
  import Recipe from './component/Recipe';
  import './App.css';


    const App = () => {
    const APP_ID = 'd5def238';
    const APP_KEY = 'ef3a9fd8ac919631c8719702657be9d4';

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

      useEffect(() =>{
        getRecipes();
      },[query]);

      const getRecipes = async () => {
        try {
        const response = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
          const data = await response.json();
            setRecipes(data.hits);  
            console.log(data.hits)
              } catch (error) {
          console.log(error)
        }
      }

      const updateSearch = e => {
        setSearch(e.target.value);
      }

      const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
      }
      return(
        <div className='App'>
        <Header />
        <Form 
        transfer1={search}
        transfer2={updateSearch}
        transfer3={getSearch}/>
          <div className='recipes'>
             {recipes.map((recipe, i )=> (
                 <Recipe 
                  key={i}
                  title={recipe.recipe.label}
                  calories={recipe.recipe.calories}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}/>
            ))}
         </div>
         </div>
     )
    }

  export default App;