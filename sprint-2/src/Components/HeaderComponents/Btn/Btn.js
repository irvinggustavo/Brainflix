import React from 'react';
import './Btn.scss';

const Btn = (props) =>{
    return(
        <div className = {props.className}>
          <img src ={props.url} alt={props.description} type="submit" />
          <p>{props.text}</p>
        </div>
    )
    
}


export default (Btn)