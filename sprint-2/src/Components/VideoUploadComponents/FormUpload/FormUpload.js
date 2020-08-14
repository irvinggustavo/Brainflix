import React from 'react';

class FormUpload extends React.Component{
    render(){
        return (
            <form>
                <label>TITLE YOUR VIDEO</label>
                <input type= 'text' name= 'upload' id = 'upload'/>
                <label>ADD A VIDEO DESCRIPTION</label>
                <textarea name ="videoDescription"></textarea>
            </form>
        )
    }
   
}


export default (FormUpload);