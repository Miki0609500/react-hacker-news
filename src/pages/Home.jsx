import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dimmer, List, Loader } from "semantic-ui-react";

import { NewsList } from "../components";
import { getNewsId, setIsRunning } from "../redux/actions/newsId";

const Home = () => {
  const { items, isLoading, isRunningInterval } = useSelector(
    ({ newsId }) => newsId
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getNewsId());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(setIsRunning(true));
    const interval = setInterval(() => {
      dispatch(getNewsId());
    }, 60000);

    return () => clearInterval(interval);
  }, [dispatch, isRunningInterval]);

  return (
    <>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader size="massive">Loading</Loader>
        </Dimmer>
      ) : (
        <List
          style={{
            background: "#fff",
            padding: 20,
            margin: "20px auto",
            borderRadius: 10,
          }}
        >
          <List.Item>
            <List.Content>
              {items.map((id) => (
                <NewsList key={id} id={id} />
              ))}
            </List.Content>
          </List.Item>
        </List>
      )}
    </>
  );
};

export default Home;
