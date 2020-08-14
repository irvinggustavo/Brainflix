import React from 'react';
import './Logo.scss';


const Logo = (props) =>{
    return(
        <div className = {props.className}>
            <img 
            src = {props.url} 
            alt = {props.description}
            
            /> 
        </div>
    )
}


export default (Logo)