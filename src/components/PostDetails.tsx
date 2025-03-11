import IPost from "../data/IPost";

const PostDetails = (prop: IPost) => {
  return (
    <div
      key={prop.postId}
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
      <p style={{ position: "absolute" }}>{prop.author}</p>
      <div
        style={{
          position: "relative",
          marginTop: "100px",
          // border: "1px solid #385D8A",
        }}
      >
        <button type="submit">Edit</button>
        <button type="submit">Delete</button>
      </div>
    </div>
  );
};

export default PostDetails;
