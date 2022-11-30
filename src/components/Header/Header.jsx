import React from 'react'
import { Form, SearchButton, SearchInput, Selected, Title } from './Header.style'

const Header = ({setSelected,selected,searchInput,setSearchInput,getFormValues}) => {

    

    const handleSearch =(e)=> {
      e.preventDefault()
        getFormValues(searchInput,selected)
      
        
    }



  return (
    
      <header>
          <Title>Food App</Title>
          <Form>
            <SearchInput value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} />
            <SearchButton onClick={handleSearch} >Search</SearchButton>
            <Selected onChange={(e)=> setSelected(e.target.value) } >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
              <option value="TeaTime">TeaTime</option>
            </Selected>
          </Form>
      </header>
    
  )
}

export default Header