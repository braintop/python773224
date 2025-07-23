async function getPosts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts")
        let data = await response.json()
        console.log(data)
    }
    catch (error) {
        console.log("Erroe fetching data", error);
    }
}
getPosts() 