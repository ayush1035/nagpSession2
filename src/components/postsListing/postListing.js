import React from 'react';
import Post from '../post/post';
import './postListing.css';

function PostListing(props) {
    let { posts } = props;
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
            <div className="Posts">
                No Posts Found
            </div>
        );
    }


}

export default PostListing;
