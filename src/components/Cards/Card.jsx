import React from 'react'
import { CardButton, CardImage, CardTitle, MyCard } from './Cards.style'
import {useNavigate} from "react-router-dom"

const Card = ({recipe}) => {
  const navigate= useNavigate()
  console.log(recipe)
  return (
    <MyCard>
        <CardTitle>{recipe.label}</CardTitle>
        <CardImage src={recipe.images.REGULAR.url}/>
        <CardButton onClick={()=> navigate("/private/details", {state:recipe})}>Details</CardButton>
    </MyCard>
  )
}

export default Card