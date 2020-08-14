import React from 'react';
import './UploadVideo.scss'

import Thumbnail from '../Thumbnail/Thumbnail.js';
import FormUpload from '../FormUpload/FormUpload';
import Btn from '../../HeaderComponents/Btn/Btn';
import previesVideo from '../../../assets/Images/Upload-video-preview.jpg';

class UploadVideo extends React.Component {
    
 
    render(){
        return(
            <article className = 'UploadVideo'>
                <h1>Upload Video</h1>
                <section>
                    <Thumbnail previesVideo = {previesVideo} className = 'Thumbnail'/>
                    
                    <FormUpload/>
                </section>
                <Btn className = 'Btn' text ='PUBLISH'/>
            </article>
        )
    }
}



export default (UploadVideo);