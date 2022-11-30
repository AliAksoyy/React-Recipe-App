import styled from 'styled-components';

export const Nav = styled.nav`
    
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:10vh;
    background-color:${({theme})=> theme.colors.nav}
`;



export const Links =styled.div`
    display:flex;
    justify-content:space-evenly;
    width:50%;
    @media screen and (max-width:570px) {
        flex-wrap:wrap;
        gap:0.75rem;
        
    }
`
export const NavLink =styled.a`
text-decoration:none;
font-size:1.5rem;
color:black;
&:active,:hover{
color:white;
}
@media screen and (max-width:570px) {
    font-size:1.3rem;  
        
    }
    @media screen and (max-width:450px) {
    
        font-size:1rem;  
   
    
  }



`


export const Logo =styled.img`
width:75px;
height:93%;
border-radius:50%;
margin:0 2rem;
border:transparent;
background:transparent;

`
