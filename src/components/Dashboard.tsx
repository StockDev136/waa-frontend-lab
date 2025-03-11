import { useState } from "react";
import { posts } from "../data/Posts";
import Posts from "./Posts";

const Dashboard = () => {
  const [postData, setPostData] = useState(posts);
  const [title, setTitle] = useState("");
  const changeName = () => {
    setPostData((p) =>
      p.map((po, index) => (index === 0 ? { ...po, title: title } : po))
    );
  };
  return (
    <div
      style={{
        height: "700px",
      }}
    >
      <Posts postProps={postData} />
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
    </div>
  );
};

export default Dashboard;
