import React from 'react';
import './thumbnail.scss'

class Thumbnail extends React.Component{
    render(){
        return (
            <div>
                <p className = " Upload__heading"> VIDEO THUMBNAIL </p>
                <img  className= "Thumbnail" src = {this.props.previesVideo} alt = {this.props.previesVideo}/>
            </div>
        )
    }
    
}

export default (Thumbnail)