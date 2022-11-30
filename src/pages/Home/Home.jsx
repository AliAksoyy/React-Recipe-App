import React, { useState,useEffect } from 'react'
import Header from '../../components/Header/Header'
 import Navbar from "../../components/Navbar/Navbar"
 import Cards from "../../components/Cards/Cards"
import {appID,appKey} from "../../data"
import { HomeDiv } from './Home.style'

const Home = () => {
  const [searchInput, setSearchInput] =useState("")
  const [selected, setSelected] =useState("")
  const [recipes, setRecipes] = useState([])

  const getFormValues =(query,mealType)=> {
   
    const url=`https://api.edamam.com/api/recipes/v2?type=any&beta=false&q=${query}&app_id=${appID}&app_key=${appKey}&mealType=${mealType}`
      fetch(url)
      .then((res)=>res.json())
      .then((data)=> setRecipes(data.hits))
  }

  useEffect(() => {
    
  getFormValues(searchInput, selected)

   },[])

  return (
    <>
      <Navbar />
      <HomeDiv>
      <Header searchInput={searchInput}
       setSearchInput={setSearchInput}
      selected={selected}
      setSelected={setSelected}
      getFormValues={getFormValues}
         />
      <Cards recipes={recipes}/>
      </HomeDiv>

    </>
  )
}

export default Home