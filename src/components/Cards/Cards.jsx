import React from 'react'
import Card from "./Card"
import { MyCards } from './Cards.style'

const Cards = ({recipes}) => {
    console.log(recipes)


  return (
    <MyCards>
    {recipes?.map((item,index)=> {
        
        const {recipe} =item
        return(
            <Card key={index} recipe={recipe} />
        )
    })}
       
    </MyCards>
  )
}

export default Cards