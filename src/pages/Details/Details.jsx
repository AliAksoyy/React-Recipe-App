import React from 'react'
import {ContentDiv, DetailsDiv, TitleDiv,TitleImage,NutrientsDiv,ContentImage,RecipeOrderDiv } from "./Detail.style"
import defImg from "../../../src/assets/default-image.jpg"
import {useLocation} from "react-router-dom"
import Navbar from '../../components/Navbar/Navbar'

const Details = () => {

  const {state:recipe} =useLocation()
  console.log(recipe)



  return (
    <>
    <Navbar />
    <DetailsDiv>
      <TitleDiv>
        <h1>{recipe.label}</h1>
        <TitleImage src={defImg} />
      </TitleDiv>
      <ContentDiv>
       
        <ContentImage src={recipe.images.REGULAR.url}  />
        <RecipeOrderDiv>
          {recipe.ingredientLines.map((item,i)=> {
            return (
              <p key = {i}>{i+1})  {item}</p>
            )
          })}
        </RecipeOrderDiv>
        <NutrientsDiv>
        <h2 style={{width:"100%", textAlign:"center", marginTop:"1rem" }}>Nutrients</h2>
          {Object.values(recipe.totalNutrients).map((item,i)=> {
            console.log(item)
            return (
              <p  key={i}>  <span>{item.label}</span>  : <span>{Math.trunc(item.quantity)} {item.unit}</span>  </p>

            )
          })}
        </NutrientsDiv>
      </ContentDiv>
    </DetailsDiv>
    </>
  )
}

export default Details