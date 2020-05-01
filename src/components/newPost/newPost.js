import React, { Component } from 'react';
import axios from 'axios'

import './newPost.css';
import PostListing from '../postsListing/postListing';

class NewPost extends Component {
    state = {
        id: '',
        title: '',
        content: '',
        author: '',
        createdAt: '',
        privacy: '',
        posts: []
    }

    postDataHandler = () => {
        const dataToPost = {
            id: this.state.posts.length > 0 ? this.state.posts[this.state.posts.length - 1].id + 1 : 1,
            title: this.state.title,
            content: this.state.content,
            author: this.state.author,
            createdAt: this.state.createdAt,
            privacy: this.state.privacy
        };
        let posts = this.state.posts;
        posts.push(dataToPost)
        this.setState({
            posts: posts
        })
    };

    handleFormChange = (event) =>{
        let {name, value} = event.target;
        this.setState({
            [name]:value
        });

    }
    render() {
        return (
            <div>
                <div className="NewPost">
                    <h1>Add a Post</h1>
                    <label>Title</label>
                    <input type="text" value={this.state.title} name="title" onChange={this.handleFormChange} />
                    <label>Author</label>
                    <input type="text" value={this.state.author} name="author" onChange={this.handleFormChange} />
                    <label>Content</label>
                    <textarea rows="4" value={this.state.content} name="content" onChange={this.handleFormChange} />
                    <label>Privacy</label>
                    <select value={this.state.privacy} name="privacy" onChange={this.handleFormChange} >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                    <label>Created on</label>
                    <input type="date" value={this.state.createdAt} name="createdAt"  onChange={this.handleFormChange}  />
                    
                    <button onClick={this.postDataHandler}>Add Post</button>
                </div>
                <div>
                    <PostListing posts={this.state.posts} />
                </div>
            </div>
        );
    }
}

export default NewPost;
