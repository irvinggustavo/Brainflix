import React from 'react';
import viewIcon from '../../../assets/Icons/SVG/Icon-views.svg'
import likesIcon from '../../../assets/Icons/SVG/Icon-likes.svg'
import './HeroHeading.scss'



class HeroHeading extends React.Component{
    render(){
        return(
            <section className = 'MainVideo__details'>
            <h1 className = 'heading'>{this.props.mainVideo.title}</h1>
               <div className = 'wtf'>
               <HeadingDeatils 
                    channel= {this.props.mainVideo.channel}
                    date = {this.props.mainVideo.date}
                    />
                    <div className= 'heading__inner divider'>
                        <Views views = {this.props.mainVideo.views}/> 
                        <Likes likes = {this.props.mainVideo.likes}/>
                    </div>
                </div>   
                <VideoDescription 
                    description = {this.props.mainVideo.description}
                    comments = {this.props.mainVideo.comments}
                    />
            </section>
             
        
        )
    }
}

class HeadingDeatils extends React.Component{
    render(){
        return(
            <>
              <div className = 'heading__inner subHeading'>
                <h3 className= 'channel'>{this.props.channel}</h3>
                <h3 className= 'silver'>{this.props.date}</h3>
            </div>    
            </>
                
        
        )
    }
}

class Views extends React.Component{
    render(){
        return(
            <div className = 'iconDetail iconDetail--mod'>
                <img 
                    src = {viewIcon }
                    alt = 'Views icon'
                    />
                <ViewCount views = {this.props.views}/>
            </div>
        )
    }
}

class ViewCount extends React.Component{
    render(){
        return(
            <h3 className= 'subHeading silver'>{this.props.views}</h3>
        )
    }
}


class Likes extends React.Component{
    render(){
        return(
            <div className = 'iconDetail'>
                <img 
                    src = {likesIcon}
                    alt = 'Likes icon'
                    />
                <LikesCount likes = {this.props.likes}/>
            </div>
        )
    }
}

class LikesCount extends React.Component{
    render(){
        return(
            <h3 className= 'subHeading silver'>{this.props.likes}</h3>
        )
    }
}

class VideoDescription extends React.Component{
    render(){
        return(
            <div>
                <p className = 'HeroDescrip'>{this.props.description}</p>
                <p className = 'HeroDescrip--mod'>{this.props.comments } comments</p>
            </div>   
        )
    }
}

export default(HeroHeading)