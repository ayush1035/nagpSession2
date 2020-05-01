import React, { Component } from 'react';
import Post from '../post/post';
import './postListing.css';
import {Redirect} from 'react-router-dom'

class PostListing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { posts } = this.props.location;

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
                <Redirect to ='/'/>
            );
        }

    }
}

export default PostListing;
