import React from 'react';
import './SearchBar.scss';

import searchImg from '../../../assets/Icons/SVG/Icon-search.svg'


const SearchBar = (props) =>{
    return(
        <div className = 'search__box'>
            <div className = 'search__icon'>
                <img src={searchImg} />
            </div>
          <input
            type="search"
            className = 'search__input'
            placeholder= {props.placeholder}/>
        </div>
    )
    
}

export default (SearchBar)