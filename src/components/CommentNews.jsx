import React from "react";
import { Comment } from "semantic-ui-react";

import Avatar from "../assets/BlankHeadshot_Cropped-2-scaled.jpg";

const CommentNews = ({ comments }) => {
  const dateNews = (unixTime) => {
    const today = new Date().toLocaleString("ru", {
      month: "long",
      day: "numeric",
    });

    const newsDay = new Date(unixTime * 1000).toLocaleString("ru", {
      month: "long",
      day: "numeric",
    });

    if (newsDay === today) {
      return "сегодня в";
    } else {
      return newsDay;
    }
  };

  const changeFormatTime = (unixTime) => {
    const time = new Date(unixTime * 1000).toLocaleString("ru", {
      hour: "numeric",
      minute: "numeric",
    });

    return time;
  };

  return (
    <>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment key={comment.id}>
            <Comment.Avatar src={Avatar} />
            <Comment.Content>
              <Comment.Author as="a">{comment.by}</Comment.Author>
              <Comment.Metadata>
                <div>{`${dateNews(comment.time)} в ${changeFormatTime(
                  comment.time
                )}`}</div>
              </Comment.Metadata>
              <Comment.Text style={{ cursor: "pointer" }}>
                {comment.deleted ? "Комментарий удален" : comment.text}
              </Comment.Text>
            </Comment.Content>
            <Comment.Group>
              {comment.children && <CommentNews comments={comment.children} />}
            </Comment.Group>
          </Comment>
        </div>
      ))}
    </>
  );
};

export default CommentNews;
