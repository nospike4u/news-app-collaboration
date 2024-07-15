import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// const apiKey = "3548e9a1-302c-43e8-be52-5d31fc39bf3d";

export default function ArticleList() {
  const params = useParams();
  const id = params["*"];
  //   const id = "football/article/2024/jul/15/spain-media-euro-2024-triumph-lamine-yamal-nico-williams-england";
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState(null);

  const listURL = `https://content.guardianapis.com/${category}`;

  useEffect(() => {
    const paramsAPI = { "api-key": "test", "show-fields": "bodyText" };
    axios
      .get(listURL, { params: paramsAPI })
      .then((res) => {
        const _list = res.data.response;
        setList(_list.content);
        console.log(_list.content);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, []);

  return <div className="min-h-screen text-center">{list && list.fields.bodyText}</div>;
}
