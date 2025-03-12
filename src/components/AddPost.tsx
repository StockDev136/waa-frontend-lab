import axios from "axios";
import { ChangeEvent, useState } from "react";
import { ApiRoutes } from "../utility/ApiRoutes";

interface AddPostProp {
  getPosts: () => void;
}
const AddPost = (props: AddPostProp) => {
  const [formValue, setFormValue] = useState({
    title: "",
    content: "",
    author: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const handleAddPost = async () => {
    await axios.post(ApiRoutes.BASEURL + ApiRoutes.POST, {
      title: formValue.title,
      content: formValue.content,
      author: formValue.author,
    });

    await props.getPosts();

    setFormValue({ title: "", content: "", author: "" });
  };
  return (
    <>
      <header>
        <h1>Create Post</h1>
      </header>
      <div>
        <form onSubmit={handleAddPost}>
          <div>
            <div>
              <div>
                <label htmlFor="title">
                  <span>Title: </span>
                  <input
                    type="text"
                    value={formValue.title}
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                  />
                </label>
                <br />
                <br />
                <label htmlFor="content">
                  <span>Content: </span>
                  <input
                    type="text"
                    value={formValue.content}
                    onChange={handleChange}
                    name="content"
                    placeholder="Content"
                  />
                </label>
                <br />
                <br />
                <label htmlFor="author">
                  <span>Author: </span>
                  <input
                    type="text"
                    value={formValue.author}
                    onChange={handleChange}
                    name="author"
                    placeholder="Author"
                  />
                </label>
                <br />
                <br />
                <div>
                  <div>
                    <div>
                      <label>
                        <input type="submit" value="Add Post" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPost;
