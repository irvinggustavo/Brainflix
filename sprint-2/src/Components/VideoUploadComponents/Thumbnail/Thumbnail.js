import React from 'react';
// import './Thumbnail';

class Thumbnail extends React.Component{
    render(){
        return (
            <div>
                <p>VIDEO THUMBNAIL</p>
                <img src = {this.props.previesVideo} alt = {this.props.previesVideo}/>
            </div>
        )
    }
    
}

export default (Thumbnail)