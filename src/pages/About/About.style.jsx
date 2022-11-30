import styled from 'styled-components';

export const AboutDiv = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:100%;
  height:90vh;
  background-color:${({theme})=> theme.colors.about}

`;
export const AboutTitle =styled.h2`
font-weight:bold;
@media screen and (max-width:410px) {
    
    font-size:1rem;

  }

`

export const AboutImage= styled.img`
width:400px;
margin:2rem auto;
@media screen and (max-width:410px) {
    
    width:250px;

  }

`
export const AboutDetailDiv = styled(AboutDiv)`
border:3px outset grey;
width:70%;
align-items:flex-start;
height:30vh;
gap:1rem;
padding:1rem;
@media screen and (max-width:680px) {
 
  width:90% !important;
  gap:0.3rem !important;
  font-size:0.7rem !important;
 
}
`




