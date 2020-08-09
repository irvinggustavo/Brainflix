import React from 'react';
import LogoImg from '../../assets/Logo/Logo-brainflix.svg';
import upload from '../../assets/Icons/SVG/Icon-upload.svg';
import './Header.scss'


class Header extends React.Component{
    
    render(){
        return (
            <header className = 'header'>
            <Logo 
                url = {LogoImg}
                description = 'logo'
                />
            <Form/>
            </header>
        ) 
    }
}

class Logo extends React.Component{
    
    render(){
        return(
            <div className="header__logo">
                <img 
                    src = {this.props.url}
                    alt= {this.props.description}
                    />
            </div>
        )
    }
}

class Form extends React.Component{
    render(){
        return(
            <form className = "header__form">
                <input type="search" className="header__search" placeholder = 'Search'/> 
                <div className= 'header--inner'>
                    <Btn 
                        url = {upload}
                        alt = 'Plus sign' 
                        text = 'UPLOAD'
                        />
                    <Avatar/>
                </div>
                
            </form>
        )
    }
}

export class Btn extends React.Component{
    render(){
        return(
            <div className="header__btn"> 
                <img 
                    src = {this.props.url}
                    alt = {this.props.description}
                    type = 'submit'
                    /> 
                    <p>{this.props.text}</p>
            </div>
        )
    }
}


export class Avatar extends React.Component{
    render(){
        return(
           <div className="avatar"></div>
        )  
    }
}




export default (Header)
