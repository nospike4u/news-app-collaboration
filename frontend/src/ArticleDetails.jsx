import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// const apiKey = "3548e9a1-302c-43e8-be52-5d31fc39bf3d";

export default function ArticleDetails() {
  const params = useParams();
  const id = params["*"];
  //   const id = "football/article/2024/jul/15/spain-media-euro-2024-triumph-lamine-yamal-nico-williams-england";
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState(null);

  const articleURL = `https://content.guardianapis.com/${id}`;

  useEffect(() => {
    const paramsAPI = { "api-key": "test", "show-fields": "bodyText" };
    axios
      .get(articleURL, { params: paramsAPI })
      .then((res) => {
        const _article = res.data.response;
        setArticle(_article.content);
        console.log(_article.content);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, []);

  return <div className="min-h-screen text-center">{article && article.fields.bodyText}</div>;
}
