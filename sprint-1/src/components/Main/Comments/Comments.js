import React from 'react';
import {v4 as uuid} from 'uuid'
import './comments.scss';

class Comments extends React.Component{
    state = {
        comments: [
            {
            user: 'Micheal Lyons',
            date: '12/18/2018',
            comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
            },
            {
            user: 'Gary Wong',
            date: '12/18/2018',
            comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
            },
            {
             user: 'Gary Wong',
            date: '12/18/2018',
            comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
            }
        ]
    }
      
    render(){
            
        return(
            <section className = 'comments__main'>
                {this.state.comments.map( item =>{
                return (
                    <Comment
                        key = {uuid()}
                        user = {item.user}
                        date = {item.date}
                        comment = {item.comment}
                    />
                )
            })}
            </section>
        )
    }
}

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

export default(Comments)