import { useEffect, useState } from "react";
import Posts from "./Posts";
import axios from "axios";
import { ApiRoutes } from "../utility/ApiRoutes";
import { IPost } from "../data/IPost";
import AddPost from "./AddPost";
import { posts } from "../data/Posts";

const Dashboard = () => {
  const [postData, setPostData] = useState<IPost[]>(posts);
  const [title, setTitle] = useState("");
  const getPosts = () => {
    try {
      axios.get(ApiRoutes.BASEURL + ApiRoutes.POST).then((response) => {
        const pos: IPost[] = response.data;
        setPostData(pos);
      });
    } catch (error) {}
  };

  useEffect(() => {
    getPosts();
  }, []);
  const changeName = () => {
    const updateTitle = postData.map((po, index) =>
      index === 0 ? { ...po, title: title } : po
    );
    setPostData(updateTitle);
  };
  return (
    <div
      style={{
        height: "700px",
      }}
    >
      <Posts postProps={postData} getAllPost={getPosts} />
      <div
        style={{
          position: "absolute",
          padding: "15px",
          marginTop: "-430px",
          marginLeft: "5px",
          zIndex: 1,
        }}
      >
        <input
          type="text"
          name=""
          id=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <button type="submit" onClick={changeName}>
          Change Name
        </button>
      </div>
      <div>
        <AddPost getPosts={getPosts} />
      </div>
    </div>
  );
};

export default Dashboard;
