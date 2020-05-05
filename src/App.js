import React, { Component } from 'react';

import  NewPost  from '../src/components/newPost/newPost';
// import  PostListing  from '../src/components/postsListing/postListing.js';
// import { Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div className="App">
          <NewPost />
      </div>
    );
  }
}

export default App;
