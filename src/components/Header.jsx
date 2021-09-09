import React from "react";
import { Link } from "react-router-dom";
import { Header, Container } from "semantic-ui-react";
import { useDispatch } from "react-redux";

import { getNewsId, setIsRunning } from "../redux/actions/newsId";

const HeaderBlock = () => {
  const dispatch = useDispatch();

  const updateListNews = () => {
    dispatch(getNewsId());
    dispatch(setIsRunning(false));
  };

  return (
    <Header block style={{ padding: 25, background: "#fff4e2" }}>
      <Container textAlign="left">
        <Link to="/">
          <h3 onClick={updateListNews} style={{ cursor: "pointer" }}>
            Hacker News
          </h3>
        </Link>
      </Container>
    </Header>
  );
};

export default HeaderBlock;
