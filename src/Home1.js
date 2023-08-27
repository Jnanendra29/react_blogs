import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home1 = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    // const [name, setName] = useState('Anindita')

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    // useEffect(() => {
    //     console.log('use effect ran')
    //     // console.log(blogs)
    //     console.log(name)
    // }, [name])



    return (

        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} title={"All Blogs!"} />}
            {/* This is props */}
            {/* <button onClick={() => setName('weirdass')} > Change Name </button> */}
            {/* <p>{name}</p> */}
        </div >

    );
}

export default Home1;