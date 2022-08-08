import React, {useEffect,useState} from 'react';
import Header from "../../components/header/Header";
// import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
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
                {posts.map(post => <li key={post.id}>{post.title}</li>).slice(0, 10)}
            </ul>
        </div>
    )
}

export default PostsPage;