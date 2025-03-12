import { useState } from "react";
import { IPost } from "../data/IPost";
import Post from "./Post";
import PostDetails from "./PostDetails";
import axios from "axios";
import { ApiRoutes } from "../utility/ApiRoutes";

interface PostProps {
  postProps: IPost[];
  getAllPost: () => void;
}

const initSinglePost: IPost = {
  id: 0,
  title: "",
  content: "",
  author: "",
};

const Posts = (props: PostProps) => {
  const [singlePost, setSinglePost] = useState(initSinglePost);
  return (
    <div
      style={{
        height: "700px",
      }}
    >
      {props.postProps.map((p) => (
        <div
          key={p.id}
          style={{
            border: "1px solid #385D8A",
            display: "inline-block",
            padding: "20px",
            margin: "20px",
            backgroundColor: "#4F81BD",
            color: "white",
          }}
          onClick={() => {
            try {
              axios
                .get(ApiRoutes.BASEURL + ApiRoutes.POST + "/" + p.id)
                .then(function (response) {
                  setSinglePost(response.data);
                });
            } catch (error) {}
          }}
        >
          <Post
            id={p.id}
            title={p.title}
            content={p.content}
            author={p.author}
          />
        </div>
      ))}

      {singlePost.id !== 0 ? (
        <PostDetails
          id={singlePost.id}
          title={singlePost.title}
          content={singlePost.content}
          author={singlePost.author}
          getPosts={props.getAllPost}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Posts;
