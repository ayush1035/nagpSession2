import React, { Component } from 'react';
import Post from '../post/post';
import './postListing.css';

class PostListing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { posts } = this.props;

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
}

export default PostListing;
