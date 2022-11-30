
import styled from "styled-components";

export const DetailsDiv =styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:${({theme})=> theme.colors.detail}
` 
export const TitleDiv =styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:90%;
margin:2rem auto;
@media screen and (max-width:450px) {
    justify-content:center;
    
  }
`

export const TitleImage =styled.img`
width:150px;
border-radius:50%;
height:150px;
box-shadow:2px 2px 4px rgba(0,0,0,0.7);
@media screen and (max-width:450px) {
    display:none;

    
  }
`

export const ContentDiv = styled.div`
border:1px solid grey;
padding:1rem;
display:flex;
flex-wrap:wrap;
align-items:center;
justify-content:space-evenly;
width:96%;
margin:auto;
gap:2rem;
@media screen and (max-width:800px) {
    justify-content:center;
    
  }
`

export const NutrientsDiv =styled(ContentDiv)`

border: 1px dashed white;
justify-content:flex-start;
width:70%;
padding:0.5rem;
gap:0.5rem;

@media screen and (max-width:800px) {
    width:90%;
    
  }
  @media screen and (max-width:450px) {
    width:90% !important;
   
    
  }
 
`

export const ContentImage =styled.img`
min-width:30%;
border: 1px dashed white;
padding:0.5rem;
margin-left:5.7rem;
border-radius:10px;
@media screen and (max-width:800px) {
    margin-left:2rem;
    
  }
  @media screen and (max-width:450px) {
    margin-left:0;
    width:55%;

  }
`

export const RecipeOrderDiv =styled(NutrientsDiv)`
padding:2rem;
width:40%
`