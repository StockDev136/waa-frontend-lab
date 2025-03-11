import { useState } from "react";
import IPost from "../data/IPost";
import Post from "./Post";
import PostDetails from "./PostDetails";

interface PostProps {
  postProps: IPost[];
}

const initSinglePost: IPost = {
  postId: 0,
  title: "",
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
          key={p.postId}
          style={{
            border: "1px solid #385D8A",
            display: "inline-block",
            padding: "20px",
            margin: "20px",
            backgroundColor: "#4F81BD",
            color: "white",
          }}
          onClick={() => {
            setSinglePost(
              props.postProps.find((sp) => sp.postId === p.postId) ||
                initSinglePost
            );
          }}
        >
          <Post postId={p.postId} title={p.title} author={p.author} />
        </div>
      ))}

      {singlePost.postId !== 0 ? (
        <PostDetails
          postId={singlePost.postId}
          title={singlePost.title}
          author={singlePost.author}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Posts;
