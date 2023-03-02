import React, { useEffect, useState } from 'react'

const APIwithUseEffect = () => {

    const [posts, setPosts] = useState([]);

    const callApi = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPosts(data);
        })
    }

    useEffect(() => {
        callApi();
    }, [])

    return (
        <div>
            <h2>List of Posts - </h2>
            {
                posts.map((item, index) => (
                    <li>{item.title}</li>
                ))
            }
        </div>
    )
}

export default APIwithUseEffect




// Image Fetch Assigment - https://github.com/deepak104080/React-Image-Fetcher---JS-fetch-Async-await-try-catch---Post-Class---wb5zxfol2y7s



// API Calling
// fetch / axios - ES6 - Promoise/async await
// XMLHttpRequest / ajax - Non ES6 - callback fn