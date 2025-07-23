import { useEffect, useState } from "react";
export function PostList() {
    //phase 1. properties 
    const [posts, setPosts] = useState([])//init with empty array 
    const [loading, setLoading] = useState(true);
    //phase 2 - functions 
    async function getPosts() {
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts")
            let data = await response.json()
            setPosts(data)
        }
        catch (error) {
            console.log("Error fetching data", error);
        }
        finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getPosts();
    }, [])
    
    let mapPosts = posts.map((post, index) => {
        return (
            <li style={{ margin: "10px", padding: "10px", border: "1px solid black" }} key={index} >
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </li>
        )
    })


    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {mapPosts}
            </ul>
        </div>
    )
}