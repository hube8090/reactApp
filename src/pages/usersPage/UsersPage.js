import React, {useEffect,useState} from 'react';
import Header from "../../components/header/Header";
import {NavLink} from "react-router-dom";

function PostsPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <Header/>
             <ul>
                 {posts.map(post =><li><NavLink to= '/'  key={post.id}>{post.title}</NavLink></li>).slice(15, 25)}
            </ul>
        </div>
    )
}

export default PostsPage;