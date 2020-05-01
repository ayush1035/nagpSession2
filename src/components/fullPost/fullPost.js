import React, { Component } from 'react';
import './fullPost.css';

class FullPost extends Component {
   constructor(props)
   {
       super(props);
   }
    render() {
        let {loadedPost} = this.props.loadedPost 
        if (loadedPost) {
           return (
                <div className="FullPost">
                    <h1>{loadedPost.title}</h1>
                    <p>{loadedPost.author}</p>
                    <p>{loadedPost.content}</p>
                    <p>{loadedPost.createdAt}</p>
                    <p>{loadedPost.privacy}</p>
                </div>
            );
        }

        return null;
    }
}

export default FullPost;
