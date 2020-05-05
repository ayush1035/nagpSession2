import React, { Component } from 'react';

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
            id: Math.random(),
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
        },()=>{window.alert("Post Added")})
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





// const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(dataToPost)
// };
// fetch('http://localhost:3001/posts', requestOptions)
//     .then(response => response.json())
//     .then(data=> this.setState({posts:data}),()=>{window.alert('Post has been added')}) 
   