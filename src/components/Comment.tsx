import React, { useMemo } from "react";
import { IComment } from "../data/IPost";

const Comment = (props: IComment) => {
  return <>{props.name}</>;
};

export default React.memo(Comment);
