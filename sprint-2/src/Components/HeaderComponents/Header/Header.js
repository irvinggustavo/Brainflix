//  dependencies
import React from 'react';
import './Header.scss';


// imgs
import logoImg from '../../../assets/Logo/Logo-brainflix.svg';
import Upload from  '../../../assets/Icons/SVG/Icon-upload.svg'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
// components
import Logo from '../Logo/Logo';
import Btn from '../Btn/Btn';
import Avatar from '../Avatar/Avatar';
import Form from '../Form/Form';



class Header extends React.Component{
    render(){
        return(
            <header className ='header'>
            <Link to="/">
                <Logo 
                    url ={logoImg}
                    alt = 'logo'
                    className = 'logo' />
            </Link>
                <Form/>
                <div className ='header--inner'>
                    <Link to ='/UploadVideo'>
                        <Btn 
                        url = {Upload} 
                        alt ='upload button'
                        text = ' UPLOAD'
                        className = 'Btn'
                        />
                    </Link>
                    <Avatar className = 'avatar'/>
                </div>

            </header>
        )
    }
}



export default (Header)