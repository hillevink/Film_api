import React, { useEffect } from 'react';

const Nav = ({heading, setSearchValue, searchValue}) => {
  useEffect(() => {
  console.log(searchValue)
  }, [searchValue])
  return (
    <>
     <h1>{heading}</h1>
     <input 
     onChange={(e) => setSearchValue(e.target.value)} 
     placeholder="Søk etter film"></input>
    </>
  )
}

export default Nav;