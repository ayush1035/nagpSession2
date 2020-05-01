import React, { Component } from 'react';
import Post from '../post/post';
import './postListing.css';

class PostListing extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {posts} = this.props;
        let postsList = <p> Something went wrong</p>;
        if (posts && posts.length>0) {
            postsList = posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    id = {post.id}
                
                />;
            });
        }
        return (
            <div>
                <section className="Posts">
                    {postsList}
                </section>
            </div>
        );
    }
}

export default PostListing;
