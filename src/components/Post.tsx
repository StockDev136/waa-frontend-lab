import { IPost } from "../data/IPost";

const Post = (props: IPost) => {
  return (
    <>
      <h1>{props.id}</h1>
      <p>{props.title}</p>
      <p>{props.author}</p>
    </>
  );
};

export default Post;
