import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";

import styles from "./News.module.css";

const News = ({ id }) => {
  const [news, setNews] = React.useState({});

  React.useEffect(() => {
    let cleanupFunction = false;
    (async () => {
      try {
        const newsData = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );

        if (!cleanupFunction) setNews(newsData.data);
      } catch (error) {
        console.error(error);
      }
    })();

    return () => (cleanupFunction = true);
  }, [id]);

  const changeFormatTime = (unixTime) => {
    const time = new Date(unixTime * 1000).toLocaleString("ru", {
      hour: "numeric",
      minute: "numeric",
    });

    return time;
  };

  return news && news.url ? (
    <List.Description style={{ display: "flex", padding: 5 }}>
      <time className={styles.time}>{changeFormatTime(news.time)}</time>
      <div>
        <Link to={`/news/${id}`} className={styles.link}>
          {news.title}
        </Link>
        <span>({news.by})</span>
      </div>
    </List.Description>
  ) : null;
};

export default News;
