import React, { useState, useEffect } from 'react';
import './fullPost.css';

function FullPost(props) {
        const [loadedPost,setLoadedPost] = useState({});
        const id = props.match.params.id
        useEffect(()=>{
            fetch(`http://localhost:3001/posts/${id}`)
            .then(res=>res.json())
            .then(data=>setLoadedPost(data))
        });
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
