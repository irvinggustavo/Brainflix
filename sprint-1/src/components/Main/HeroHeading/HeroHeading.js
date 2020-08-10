import React from 'react';
import viewIcon from '../../../assets/Icons/SVG/Icon-views.svg'
import likesIcon from '../../../assets/Icons/SVG/Icon-likes.svg'
import './HeroHeading.scss'





class HeroHeading extends React.Component{
  state ={
    mainVideo: {
        description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
        title: 'BMX Rampage: 201 Highlights ',
        channel: 'By Red Cow',
        date: '12/18/24',
        views: '1,001,023',
        likes: '110,985',
        comments: '3' 
        }
    }

    render(){
        return(
            <section className = 'MainVideo__details'>
            <h1 className = 'heading'>{this.state.mainVideo.title}</h1>
               <div className = 'wtf'>
               <HeadingDeatils 
                    // title= {this.state.mainVideo.title}
                    channel= {this.state.mainVideo.channel}
                    date = {this.state.mainVideo.date}
                    />
                    <div className= 'heading__inner divider'>
                        <Views views = {this.state.mainVideo.views}/> 
                        <Likes likes = {this.state.mainVideo.likes}/>
                    </div>
                </div>   
                <VideoDescription 
                    description = {this.state.mainVideo.description}
                    comments = {this.state.mainVideo.comments}
                    />
            </section>
             
        
        )
    }
}

class HeadingDeatils extends React.Component{
    render(){
        return(
            <>
                {/* <h1 className = 'heading'>{this.props.title}</h1> */}
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