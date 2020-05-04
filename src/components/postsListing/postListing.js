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







// const [posts,setPosts] = useState([]);


//     useEffect(()=>{
//         fetch('http://localhost:3001/posts')
//         .then(res=>res.json())
//         .then(data=>{ setPosts(data)});
//     },[]);
