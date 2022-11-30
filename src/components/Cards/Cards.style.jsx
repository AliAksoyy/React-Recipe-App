import styled from 'styled-components';

export const MyCards = styled.div`
width:90%;
padding:0.5rem;

display:flex;
flex-wrap:wrap;
gap:0.5rem;
justify-content:center;
align-items:center;
margin:1.5rem auto 0

`;



export const MyCard = styled.div`
  width:30%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  box-shadow: 3px 3px 5px black;
  background-color: lightblue;
  border-radius:4px;
  gap:1rem;
  height:45vh;
  @media screen and (max-width:950px) {
    width:45%;
  }
  @media screen and (max-width:570px) {
    width:70%;
  }
  
`;

export const CardTitle = styled.h4`
font-size:1rem;
text-overflow:ellipsis;
width:90%;
font-weight: bold;
text-align:center;
margin-top: 0.7rem;
`

export const CardImage = styled.img`
width:60%;
max-height:50%;
border-radius:5px;
`
export const CardButton = styled.button`
padding:0.5rem;
text-align:center;
width:7rem;
color:white;
background-color:crimson;
margin-bottom:0.7rem;
display:block;
cursor:pointer;
border-radius:5px;
transition: transform ease-in-out 0.6s;
&:hover{
    opacity:0.6;
    transform:scale(0.97)
}
`









