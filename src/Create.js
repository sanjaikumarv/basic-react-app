import { useState } from "react";
const Create = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [author, setAuthor] = useState();
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
    });
  };
  return (
    <div className='create'>
      <h2>Add A New Blog</h2>
      <form>
        <label htmlFor=''>blog title:</label>
        <input
          type='text'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor=''>blog body:</label>
        <textarea
          type='text'
          name='body'
          value={body}
          onChange={(e) => setBody(e.target.value)}></textarea>
        <label htmlFor=''>blog author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        {!isPending && (
          <button className='buttona' onClick={handleSubmit}>
            Add blog
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
