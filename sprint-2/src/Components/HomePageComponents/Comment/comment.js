 import React from 'react'
 import './Comment.scss'

 class Comment extends React.Component{
    render(){
        return(
            <div className = 'comment__container'>
                <div className = 'fakeAvatar'></div>
                <div className = 'comment__box'>
                    <div className= 'comm__subheading'>
                        <p className = 'bold'> {this.props.user}</p>
                        <p className ='date'> {this.props.date}</p>
                    </div>
                    <div>
                        <p className = 'comment__p'>{this.props.comment}</p>
                    </div>
                </div>
                

            </div>
        )
    }
}

export default(Comment)