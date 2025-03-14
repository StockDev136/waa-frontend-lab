export interface IPost {
  id: number;
  title: string;
  content: string;
  author: string;
}

export interface IPostDetails extends IPost {
  getPosts: () => void;
}

export interface IComment {
  id: number;
  name: string;
}
