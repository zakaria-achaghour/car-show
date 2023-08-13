"use client";
import React, { useState } from 'react'
import { SeachManufacture } from '.';

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const handleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SeachManufacture 
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
            />
        </div>
    </form>
  )
}

export default SearchBar