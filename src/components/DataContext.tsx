import { createContext, ReactNode, useState } from "react";

type globalContext = {
  postId: number;
  setPostId: Function;
};

const initContext = {
  postId: 0,
  setPostId: () => {},
};

export const GlobalContext = createContext<globalContext>(initContext);
const DataContext = ({ children }: { children: ReactNode }) => {
  const [postData, setPostData] = useState(0);
  const setPostIdFunction = (pId: number) => {
    setPostData(pId);
  };
  return (
    <GlobalContext.Provider
      value={{ postId: postData, setPostId: setPostIdFunction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default DataContext;
