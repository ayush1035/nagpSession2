import React from 'react';
import './fullPost.css';

function FullPost(props) {
        let {loadedPost} = props.loadedPost 
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

export default FullPost;
