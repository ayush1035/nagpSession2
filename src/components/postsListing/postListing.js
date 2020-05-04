import React, { useState, useEffect } from 'react';
import Post from '../post/post';
import './postListing.css';
import {Redirect} from 'react-router-dom'

function PostListing(props) {
    const [posts,setPosts] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:3001/posts')
        .then(res=>res.json())
        .then(data=>{ setPosts(data)});
    },[]);

    if (posts && posts.length > 0) {
        return (
            <div className="Posts">
                {posts.map(post => {
                    return <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        id={post.id}

                    />;
                })}
            </div>
        );
    }
    else {
        return (
            <div>
                No Posts found
            </div>
        );
    }


}

export default PostListing;







// useEffect(()=>{
//         fetch('http://localhost:3001/posts')
//         .then(res=>res.json())
//         .then(data=> setPosts(data));
//     },[]);