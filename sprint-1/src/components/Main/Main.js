import React from 'react';
import Hero from './Hero/Hero.js'
import HeroHeading from './HeroHeading/HeroHeading'
import CommentsForm from './CommentsForm/ComentsForm'
import Comments from './Comments/Comments.js';
import NextVideo from './NextVideo/NextVideo'

class Main extends React.Component{
    render(){
        return(
            <main>
               
                <Hero/>
                <HeroHeading/>
                <CommentsForm/>
                <Comments/>
                <NextVideo/>
           
            </main>
            
        )
    }
}

export default(Main)