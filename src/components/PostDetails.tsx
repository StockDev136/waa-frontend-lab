import axios from "axios";
import { IComment, IPostDetails } from "../data/IPost";
import { ApiRoutes } from "../utility/ApiRoutes";
import { useEffect, useState } from "react";
import Comment from "./Comment";

const PostDetails = (prop: IPostDetails) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const getCommentsById = () => {
    try {
      axios
        .get(ApiRoutes.BASEURL + ApiRoutes.POST + "/" + prop.id + "/comments")
        .then(function (response) {
          setComments(response.data);
        });
    } catch (error) {}
  };
  useEffect(() => {
    getCommentsById();
  }, []);
  return (
    <div
      key={prop.id}
      style={{
        border: "1px solid #385D8A",
        width: "800px",
        height: "210px",
        margin: "auto auto",
        marginTop: "200px",
      }}
    >
      <h2 style={{ margin: "0" }}>{prop.title}</h2>
      <h3 style={{ margin: "0" }}>{prop.author}</h3>
      <p style={{ position: "absolute" }}>{prop.content}</p>
      <h3>Comments</h3>
      {comments.map((c) => (
        <p key={c.id}>
          <Comment id={c.id} name={c.name} />
        </p>
      ))}

      <div
        style={{
          position: "relative",
          marginTop: "100px",
          // border: "1px solid #385D8A",
        }}
      >
        <button type="submit">Edit</button>
        <button
          type="submit"
          onClick={() => {
            try {
              axios
                .delete(ApiRoutes.BASEURL + ApiRoutes.POST + "/" + prop.id)
                .then(() => prop.getPosts());
            } catch (error) {}
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
