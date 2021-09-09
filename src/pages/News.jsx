import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDataNews } from "../redux/actions/news";
import { Item, Dimmer, Loader } from "semantic-ui-react";

import { Comments } from "../components";

const News = () => {
  const { newsData, isLoading } = useSelector(({ news }) => news);
  const dispatch = useDispatch();

  const params = useParams();

  React.useEffect(() => {
    dispatch(getDataNews(params.id));
  }, [dispatch, params]);

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
    <div>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader size="massive">Loading</Loader>
        </Dimmer>
      ) : (
        <>
          <Item.Group
            style={{
              background: "#fff",
              padding: 20,
              margin: "20px auto",
              borderRadius: 10,
            }}
          >
            <Item>
              <Item.Content>
                <Item.Meta>
                  <span>{dateNews(newsData.time)}</span>
                  <time>{changeFormatTime(newsData.time)}</time>
                </Item.Meta>
                <Item.Header style={{ margin: "5px 5px 0 0" }} as="h3">
                  {newsData.title}
                </Item.Header>
                <span>({newsData.by})</span>
                <Item.Description>
                  <a href={newsData.url}>Продолжение тут</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
          <Comments {...newsData} />
        </>
      )}
    </div>
  );
};

export default News;
