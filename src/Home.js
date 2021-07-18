//import { useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  //const [name, setName] = useState("mario");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className='Home'>
      {error && <div>{error}</div>}
      {isPending && <div>loading ...</div>}
      {blogs && (
        <Bloglist
          blogs={blogs}
          title='All Blogs!'
          // handleDelete={handleDelete}
        />
      )}
      {/* <Bloglist
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs"
      /> */}
      {/* <button onClick={() => setName("luigi")}>change name</button>
      <p>{name}</p> */}
    </div>
  );
};

export default Home;
