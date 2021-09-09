import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comment, Header, Loader } from "semantic-ui-react";

import { getComments } from "../redux/actions/comments";
import { CommentNews } from "./index";

const Comments = ({ kids, descendants }) => {
  const { comments, isLoading } = useSelector(({ comments }) => comments);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getComments(kids));
  }, [dispatch, kids]);

  return (
    <Comment.Group
      style={{
        maxWidth: "100%",
        background: "#fff",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <Header as="h3">Комментарии</Header>
      {isLoading ? (
        <Loader active size="small" inline />
      ) : (
        <CommentNews comments={comments} />
      )}
    </Comment.Group>
  );
};

export default Comments;
