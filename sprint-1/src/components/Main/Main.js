import React from 'react';
import Hero from './Hero/Hero.js'
import HeroHeading from './HeroHeading/HeroHeading'
import CommentsForm from './CommentsForm/ComentsForm'
import Comments from './Comments/Comments.js';
import NextVideo from './NextVideo/NextVideo'
import './Main.scss'

class Main extends React.Component{
    render(){
        return(
            <main>
               
                <Hero/>
                <div className ='deskFLex'>
                    <div className = ' inner'>
                        <HeroHeading/>
                        <CommentsForm/>
                        <Comments/>
                    </div>
                    <NextVideo/>
                </div>
                
           
            </main>
            
        )
    }
}

export default(Main)